import { NextResponse } from "next/server";
import { z } from "zod";

const blockedNamePattern = /^(test|dummy|guest|user|sample|example|anonim|nume|name)$/i;

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
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 7 && digits.length <= 15 && !/^0+$/.test(digits) && !/^1{7,}$/.test(digits);
    }, "Please provide a valid phone number."),
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
  captchaToken: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const data = contactSchema.parse(await request.json());
    const hasRecaptcha = Boolean(process.env.RECAPTCHA_SECRET_KEY && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

    if (data.website && data.website.length > 0) {
      return NextResponse.json({ error: "Spam check failed." }, { status: 400 });
    }

    if (hasRecaptcha && !data.captchaToken) {
      return NextResponse.json({ error: "Please complete the security check." }, { status: 400 });
    }

    if (hasRecaptcha && data.captchaToken) {
      const verificationResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY ?? "",
          response: data.captchaToken,
        }).toString(),
      });

      const verificationData = await verificationResponse.json();
      if (!verificationData.success) {
        console.error("reCAPTCHA verification failed:", verificationData);
        return NextResponse.json({ error: "Security verification failed." }, { status: 400 });
      }
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