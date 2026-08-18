"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLanguage } from "@/components/language-provider";

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

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website?: string;
};

export function ContactForm() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .trim()
          .min(2, t.contactForm.errors.name)
          .max(100, t.contactForm.errors.name)
          .refine((value) => !blockedNamePattern.test(value), t.contactForm.errors.name)
          .refine((value) => /^[\p{L}][\p{L}\p{M}'’\- ]{1,99}$/u.test(value), t.contactForm.errors.name),
        email: z
          .string()
          .trim()
          .email(t.contactForm.errors.email)
          .refine((value) => !value.toLowerCase().includes("example."), t.contactForm.errors.email)
          .refine((value) => !value.toLowerCase().includes("@test."), t.contactForm.errors.email),
        phone: z
          .string()
          .trim()
          .refine((value) => isValidInternationalPhone(value), t.contactForm.errors.phone)
          .max(30, t.contactForm.errors.phone),
        message: z
          .string()
          .trim()
          .min(20, t.contactForm.errors.message)
          .refine((value) => {
            const cleaned = value.replace(/\s+/g, " ").trim();
            const letters = cleaned.match(/[A-Za-zÀ-ÖØ-öø-ÿ]/g)?.length ?? 0;
            return letters >= 10 && !/^(lorem|ipsum|test|asdf|qwerty|dummy|bla|hello|hi|hey)$/i.test(cleaned);
          }, t.contactForm.errors.message),
        website: z.string().optional(),
      }),
    [t]
  );

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (data.website) {
      setSendError(true);
      return;
    }

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

  return (
    <form className="contact-form simple" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" style={{ display: "none" }} {...register("website")} />
      <label>
        <span>{t.contactForm.nameLabel}</span>
        <input {...register("name")} placeholder={t.contactForm.namePlaceholder} />
        {errors.name && <em>{errors.name.message}</em>}
      </label>
      <label>
        <span>{t.contactForm.emailLabel}</span>
        <input {...register("email")} type="email" placeholder={t.contactForm.emailPlaceholder} />
        {errors.email && <em>{errors.email.message}</em>}
      </label>
      <label>
        <span>{t.contactForm.phoneLabel}</span>
        <input {...register("phone")} type="tel" placeholder={t.contactForm.phonePlaceholder} autoComplete="tel" />
        {errors.phone && <em>{errors.phone.message}</em>}
      </label>
      <label className="full">
        <span>{t.contactForm.messageLabel}</span>
        <textarea {...register("message")} placeholder={t.contactForm.messagePlaceholder} rows={4} />
        {errors.message && <em>{errors.message.message}</em>}
      </label>

      <div className="form-footer">
        <p>
          {sent ? (
            <>
              <Check size={16} /> {t.contactForm.sentMessage}
            </>
          ) : sendError ? (
            t.contactForm.sendError
          ) : (
            t.contactForm.readyMessage
          )}
        </p>
        <button className="button button-dark" type="submit" disabled={isSubmitting}>
          {isSubmitting ? t.contactForm.submitting : t.contactForm.submit}
          <ArrowUpRight size={17} />
        </button>
      </div>
    </form>
  );
}
