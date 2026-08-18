import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().email().max(254),
  message: z.string().trim().min(12).max(5000),
});

export async function POST(request: Request) {
  try {
    const data = contactSchema.parse(await request.json());
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured. Add RESEND_API_KEY to .env.local and restart Next.js." },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
        to: [process.env.CONTACT_EMAIL ?? "neaguf121@gmail.com"],
        reply_to: data.email,
        subject: `Mesaj nou de la ${data.name}`,
        text: `Nume: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid contact form submission." }, { status: 400 });
  }
}