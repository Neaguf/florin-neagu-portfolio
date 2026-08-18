"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLanguage } from "@/components/language-provider";

export function ContactForm() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t.contactForm.errors.name),
        email: z.string().email(t.contactForm.errors.email),
        message: z.string().min(12, t.contactForm.errors.message),
      }),
    [t]
  );
  type FormData = z.infer<typeof schema>;
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = async (data: FormData) => {
    setSent(false);
    setSendError(false);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setSendError(true);
      return;
    }

    setSent(true);
    reset();
  };
  return <form className="contact-form simple" onSubmit={handleSubmit(onSubmit)} noValidate>
    <label><span>{t.contactForm.nameLabel}</span><input {...register("name")} placeholder={t.contactForm.namePlaceholder} />{errors.name && <em>{errors.name.message}</em>}</label>
    <label><span>{t.contactForm.emailLabel}</span><input {...register("email")} type="email" placeholder={t.contactForm.emailPlaceholder} />{errors.email && <em>{errors.email.message}</em>}</label>
    <label className="full"><span>{t.contactForm.messageLabel}</span><textarea {...register("message")} placeholder={t.contactForm.messagePlaceholder} rows={4} />{errors.message && <em>{errors.message.message}</em>}</label>
    <div className="form-footer"><p>{sent ? <><Check size={16} /> {t.contactForm.sentMessage}</> : sendError ? t.contactForm.sendError : t.contactForm.readyMessage}</p><button className="button button-dark" type="submit" disabled={isSubmitting}>{isSubmitting ? t.contactForm.submitting : t.contactForm.submit}<ArrowUpRight size={17} /></button></div>
  </form>;
}
