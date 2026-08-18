import { NextResponse } from "next/server";
import { z } from "zod";

const blockedNamePattern = /^(test|dummy|guest|user|sample|example|anonim|nume|name)$/i;

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

export async function POST(request: Request) {
  try {
    const data = contactSchema.parse(await request.json());

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