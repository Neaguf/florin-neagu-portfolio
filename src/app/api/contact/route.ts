import { NextResponse } from "next/server";
import { createHash, createHmac, randomInt, timingSafeEqual } from "node:crypto";
import { z } from "zod";

const MAX_SUBMISSIONS_PER_IP = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const CODE_TTL_MS = 10 * 60 * 1000;
const MAX_CODE_REQUESTS_PER_IP = 3;
const ipRateLimit = new Map<string, { count: number; windowStart: number }>();
const codeRequestRateLimit = new Map<string, { count: number; windowStart: number }>();

const blockedNamePattern = /^(test|dummy|guest|user|sample|example|anonim|nume|name)$/i;

const getClientIp = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
};

const isRateLimited = (request: Request) => {
  const ip = getClientIp(request);
  const now = Date.now();
  const current = ipRateLimit.get(ip);

  if (!current) {
    ipRateLimit.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (now - current.windowStart > RATE_LIMIT_WINDOW_MS) {
    ipRateLimit.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (current.count >= MAX_SUBMISSIONS_PER_IP) {
    return true;
  }

  ipRateLimit.set(ip, { count: current.count + 1, windowStart: current.windowStart });
  return false;
};

const isValidInternationalPhone = (value: string) => {
  const normalized = value.replace(/\s+/g, "").replace(/-/g, "");

  const localRoMatch = normalized.match(/^0\d{9,10}$/);
  if (localRoMatch) {
    return true;
  }

  const internationalMatch = normalized.match(/^(\+44|\+40|\+34)(\d+)$/);
  if (!internationalMatch) {
    return false;
  }

  const [, prefix, digits] = internationalMatch;

  if (prefix === "+44") {
    return digits.length >= 9 && digits.length <= 11;
  }

  if (prefix === "+40") {
    return digits.length >= 9 && digits.length <= 10;
  }

  if (prefix === "+34") {
    return digits.length === 9;
  }

  return false;
};

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(100)
    .refine((value) => !blockedNamePattern.test(value), "Please provide a realistic name.")
    .refine((value) => /^[\p{L}][\p{L}\p{M}'’\- ]{1,99}$/u.test(value), "Please provide a realistic name."),
  email: z
    .string()
    .trim()
    .email()
    .max(254)
    .refine((value) => !value.toLowerCase().includes("example."), "Please provide a valid email address.")
    .refine((value) => !value.toLowerCase().includes("@test."), "Please provide a valid email address."),
  phone: z
    .string()
    .trim()
    .refine((value) => isValidInternationalPhone(value), "Please provide a valid phone number starting with +44, +40 or +34."),
  message: z
    .string()
    .trim()
    .min(20)
    .max(5000)
    .refine((value) => {
      const cleaned = value.replace(/\s+/g, " ").trim();
      const letters = cleaned.match(/[A-Za-zÀ-ÖØ-öø-ÿ]/g)?.length ?? 0;
      return letters >= 10 && !/^(lorem|ipsum|test|asdf|qwerty|dummy|bla|hello|hi|hey)$/i.test(cleaned);
    }, "Please provide a meaningful project description."),
  website: z.string().trim().max(0).optional().or(z.literal("")),
});

const emailSchema = z.object({ email: z.string().trim().email().max(254) });

const getOtpSecret = () => process.env.CONTACT_OTP_SECRET?.trim() || process.env.RESEND_API_KEY?.trim();

const createVerificationToken = (email: string, code: string) => {
  const codeHash = createHash("sha256").update(code).digest("hex");
  const payload = Buffer.from(JSON.stringify({ email, codeHash, expiresAt: Date.now() + CODE_TTL_MS })).toString("base64url");
  const signature = createHmac("sha256", getOtpSecret()!).update(payload).digest("base64url");
  return `${payload}.${signature}`;
};

const isVerificationTokenValid = (token: string, email: string, code: string) => {
  try {
    const [payload, signature] = token.split(".");
    if (!payload || !signature || !getOtpSecret()) return false;
    const expectedSignature = createHmac("sha256", getOtpSecret()!).update(payload).digest("base64url");
    const signaturesMatch = timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      email: string;
      codeHash: string;
      expiresAt: number;
    };
    const codeHash = createHash("sha256").update(code).digest("hex");
    return signaturesMatch && decoded.email === email && decoded.codeHash === codeHash && decoded.expiresAt > Date.now();
  } catch {
    return false;
  }
};

const isCodeRequestRateLimited = (request: Request) => {
  const ip = getClientIp(request);
  const now = Date.now();
  const current = codeRequestRateLimit.get(ip);
  if (!current || now - current.windowStart > RATE_LIMIT_WINDOW_MS) {
    codeRequestRateLimit.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (current.count >= MAX_CODE_REQUESTS_PER_IP) return true;
  current.count += 1;
  return false;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const action = body.action || "submit";

    if (action === "request-code") {
      const { email } = emailSchema.parse(body);
      if (isCodeRequestRateLimited(request)) {
        return NextResponse.json({ error: "Ai solicitat prea multe coduri. Încearcă din nou peste 10 minute." }, { status: 429 });
      }

      const requiredEnv = ["RESEND_API_KEY", "RESEND_FROM_EMAIL"] as const;
      const missingEnv = requiredEnv.filter((key) => !process.env[key]?.trim());
      if (missingEnv.length > 0 || !getOtpSecret()) {
        return NextResponse.json({ error: "Email service is not configured on this server." }, { status: 503 });
      }

      const code = randomInt(100000, 1000000).toString();
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL,
          to: [email],
          subject: "Codul tău de verificare",
          text: `Codul tău de verificare este ${code}. Este valabil 10 minute.`,
        }),
      });
      if (!response.ok) return NextResponse.json({ error: "Codul nu a putut fi trimis." }, { status: 502 });
      return NextResponse.json({ ok: true, verificationToken: createVerificationToken(email, code) });
    }

    if (action !== "submit" || typeof body.verificationToken !== "string" || typeof body.verificationCode !== "string") {
      return NextResponse.json({ error: "Verifică adresa de email înainte de trimitere." }, { status: 400 });
    }

    if (isRateLimited(request)) {
      return NextResponse.json({ error: "Ai trimis deja 3 requesturi/formulare. Te rugăm să aștepți încă 10 minute înainte de a mai trimite un mesaj." }, { status: 429 });
    }

    const data = contactSchema.parse(body);

    if (!isVerificationTokenValid(body.verificationToken, data.email, body.verificationCode.trim())) {
      return NextResponse.json({ error: "Codul de verificare este invalid sau a expirat." }, { status: 400 });
    }

    if (data.website && data.website.length > 0) {
      return NextResponse.json({ error: "Spam check failed." }, { status: 400 });
    }

    const requiredEnv = ["RESEND_API_KEY", "RESEND_FROM_EMAIL", "CONTACT_EMAIL"] as const;
    const missingEnv = requiredEnv.filter((key) => !process.env[key]?.trim());

    if (missingEnv.length > 0) {
      console.error("Contact form email config missing:", missingEnv);
      return NextResponse.json(
        {
          error:
            "Email service is not configured on this server. Add RESEND_API_KEY, RESEND_FROM_EMAIL and CONTACT_EMAIL in the deployment environment, then redeploy.",
        },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [process.env.CONTACT_EMAIL],
        reply_to: data.email,
        subject: `Mesaj nou de la ${data.name} (${data.phone})`,
        text: `Nume: ${data.name}\nEmail: ${data.email}\nTelefon: ${data.phone}\n\n${data.message}`,
      }),
    });

    if (!response.ok) {
      const responseText = await response.text();
      console.error("Resend API error:", response.status, responseText);
      return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json({ error: "Invalid contact form submission." }, { status: 400 });
  }
}