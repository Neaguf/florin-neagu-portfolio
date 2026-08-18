"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { locales, localeNames, type Locale } from "@/data/translations";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectLocale = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div className="lang-dropdown" ref={rootRef}>
      <button
        type="button"
        className="lang-dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {locale.toUpperCase()}
        <ChevronDown size={14} className={open ? "lang-chevron open" : "lang-chevron"} />
      </button>
      {open && (
        <ul className="lang-dropdown-menu" role="listbox" aria-label="Language switch">
          {locales.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={locale === code}
                className={locale === code ? "active" : ""}
                onClick={() => selectLocale(code)}
              >
                <span className="lang-code">{code.toUpperCase()}</span>
                <span className="lang-name">{localeNames[code]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
