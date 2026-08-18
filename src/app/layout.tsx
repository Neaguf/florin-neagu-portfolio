import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { profile } from "@/data/profile";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://florinneagu.dev"),
  title: `${profile.name} — Web & Mobile Development`,
  description: "Web and mobile application development by Florin Neagu, a frontend developer based in Bucharest.",
  openGraph: {
    title: `${profile.name} — Web & Mobile Development`,
    description: "Modern, scalable, user-focused web and mobile applications.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${sans.variable} ${display.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
