"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLanguage } from "@/components/language-provider";

const blockedNamePattern = /^(test|dummy|guest|user|sample|example|anonim|nume|name)$/i;

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website?: string;
  captchaToken?: string;
};

export function ContactForm() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement | null>(null);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const hasRecaptcha = Boolean(recaptchaSiteKey);

  useEffect(() => {
    if (!hasRecaptcha || !recaptchaRef.current || typeof window === "undefined") {
      setCaptchaLoaded(true);
      return;
    }

    const scriptId = "google-recaptcha-script";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    const grecaptcha = (window as Window & { grecaptcha?: { render?: (container: Element, params: Record<string, unknown>) => void } }).grecaptcha;

    const renderCaptcha = () => {
      if (!grecaptcha || !recaptchaRef.current) return;

      grecaptcha.render?.(recaptchaRef.current, {
        sitekey: recaptchaSiteKey,
        callback: (token: string) => setCaptchaToken(token),
        "expired-callback": () => setCaptchaToken(""),
        "error-callback": () => setCaptchaToken(""),
      });
      setCaptchaLoaded(true);
    };

    if (existingScript) {
      if (grecaptcha) {
        renderCaptcha();
      } else {
        existingScript.addEventListener("load", renderCaptcha, { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = renderCaptcha;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [recaptchaSiteKey]);

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
          .refine((value) => {
            const digits = value.replace(/\D/g, "");
            return digits.length >= 7 && digits.length <= 15 && !/^0+$/.test(digits) && !/^1{7,}$/.test(digits);
          }, t.contactForm.errors.phone)
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
        captchaToken: z.string().optional(),
      }),
    [t]
  );

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (hasRecaptcha && !captchaToken) {
      setSendError(true);
      return;
    }

    if (data.website) {
      setSendError(true);
      return;
    }

    setSent(false);
    setSendError(false);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        captchaToken: hasRecaptcha ? captchaToken : undefined,
      }),
    });

    if (!response.ok) {
      setSendError(true);
      return;
    }

    setSent(true);
    setCaptchaToken("");
    reset();
    if (typeof window !== "undefined") {
      const grecaptcha = (window as Window & { grecaptcha?: { reset?: () => void } }).grecaptcha;
      grecaptcha?.reset?.();
    }
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

      {hasRecaptcha && (
        <div className="full">
          <div ref={recaptchaRef} />
          {!captchaLoaded && <em>Loading security check…</em>}
          {!captchaToken && captchaLoaded && <em>Complete the security check to continue.</em>}
        </div>
      )}

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
        <button className="button button-dark" type="submit" disabled={isSubmitting || (hasRecaptcha && !captchaLoaded)}>
          {isSubmitting ? t.contactForm.submitting : t.contactForm.submit}
          <ArrowUpRight size={17} />
        </button>
      </div>
    </form>
  );
}
