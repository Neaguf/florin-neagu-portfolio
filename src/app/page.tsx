"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bug,
  ChevronRight,
  Clock,
  Code2,
  Compass,
  Handshake,
  LifeBuoy,
  Link2,
  Mail,
  MessageCircle,
  PenTool,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  Swords,
  Zap,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { HeroVisual } from "@/components/hero-visual";
import { HpBar } from "@/components/hp-bar";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { ProjectSelector } from "@/components/project-selector";
import { Reveal } from "@/components/reveal";
import { AboutPanels } from "@/components/stats-panel";
import { profile } from "@/data/profile";

const storyFeatureIcons = [Handshake, Smartphone, Bug, MessageCircle];
const processIcons = [Search, Compass, PenTool, Code2, Bug, Rocket, LifeBuoy];
const processAccents = [
  { color: "var(--acid)", glow: "rgba(185,255,92,.16)" },
  { color: "#a78bfa", glow: "rgba(167,139,250,.18)" },
  { color: "var(--acid-2)", glow: "rgba(255,138,77,.18)" },
  { color: "#5fd8c4", glow: "rgba(95,216,196,.18)" },
  { color: "var(--acid)", glow: "rgba(185,255,92,.16)" },
  { color: "#a78bfa", glow: "rgba(167,139,250,.18)" },
  { color: "var(--acid-2)", glow: "rgba(255,138,77,.18)" },
];
const heroChecklistIcons = [Smartphone, Zap, MessageCircle, Clock];

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="game-site">
      <section className="game-hero" id="top">
        <nav className="game-nav container" aria-label={t.nav.ariaLabel}>
          <a className="game-logo" href="#top">
            FLORIN<span>_</span>NEAGU
          </a>
          <div className="nav-links">
            {t.nav.items.map((item) => (
              <a href={`#${item.id}`} key={item.id}>
                {item.label}
              </a>
            ))}
          </div>
          <LanguageToggle />
          <a className="nav-play" href="#start">
            {t.nav.cta} <ArrowRight size={16} />
          </a>
        </nav>
        <div className="container hero-game-layout">
          <div className="hero-copy-game">
            <Reveal>
              <p className="pixel-label green">
                <span /> {t.hero.available}
              </p>
              <h1>
                {t.hero.titleLine1}
                <br />
                <em>{t.hero.titleEm}</em>
              </h1>
              <p>{t.hero.intro}</p>
              <div className="game-actions">
                <a className="game-button" href="#start">
                  {t.hero.ctaPrimary} <ArrowDown size={17} />
                </a>
                <a href="#story" className="game-text-link">
                  {t.hero.ctaSecondary} <ChevronRight size={16} />
                </a>
              </div>
              <ul className="hero-checklist">
                {t.hero.checklist.map((item, index) => {
                  const Icon = heroChecklistIcons[index];
                  return (
                    <li key={item}>
                      <span>
                        <Icon size={14} />
                      </span>
                      {item}
                    </li>
                  );
                })}
              </ul>
              <p className="hero-availability-row">
                <i /> {t.hero.statusAvailable}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <HeroVisual />
          </Reveal>
        </div>
        <div className="hero-status container">
          <span>
            {t.hero.scrollHint} <ArrowDown size={14} />
          </span>
        </div>
      </section>
      <ProjectSelector />
      <section className="story-section" id="story">
        <div className="container story-layout">
          <Reveal>
            <div className="story-text">
              <p className="pixel-label green">
                <span /> {t.story.eyebrow}
              </p>
              <h2>
                {t.story.titleLine1}
                <br />
                <em>{t.story.titleEm}</em>
              </h2>
              <div className="story-copy">
                <p>
                  {t.story.summary} {t.story.paragraph2}
                </p>
                <p>{t.story.paragraph3}</p>
              </div>
              <div className="story-quote">
                <p>
                  <strong>{t.story.quoteLead}</strong> {t.story.quoteMiddle}{" "}
                  <span className="quote-highlight">{t.story.quoteHighlight}</span>
                </p>
              </div>
              <div className="feature-grid">
                {t.story.features.map((feature, index) => {
                  const Icon = storyFeatureIcons[index];
                  return (
                    <div className="feature-card" key={feature.title}>
                      <span className="feature-icon">
                        <Icon size={17} />
                      </span>
                      <div className="feature-card-body">
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="social-row">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Link2 size={15} /> {t.story.linkedin} <ArrowUpRight size={14} />
                </a>
                <a href={`mailto:${profile.email}`}>
                  <Mail size={15} /> {t.story.email} <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <AboutPanels />
          </Reveal>
        </div>
      </section>
      <section className="process-game">
        <div className="container">
          <Reveal>
            <p className="pixel-label">{t.process.eyebrow}</p>
            <h2>
              {t.process.titleLine1}
              <br />
              <em>{t.process.titleEm}</em>
            </h2>
          </Reveal>
          <div className="roadmap">
            <div className="roadmap-track" aria-hidden="true" />
            {t.process.steps.map((step, index) => {
              const Icon = processIcons[index];
              const accent = processAccents[index];
              return (
                <Reveal key={step.title} delay={index * 0.06} className="roadmap-step">
                  <div className="roadmap-node">
                    <span className="roadmap-index" style={{ color: accent.color }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="roadmap-icon"
                      style={{ borderColor: accent.color, color: accent.color, boxShadow: `0 0 0 6px ${accent.glow}` }}
                    >
                      <Icon size={18} />
                    </span>
                  </div>
                  <div className="roadmap-card">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="contact game-contact boss-contact" id="contact">
        <div className="container">
          <Reveal>
            <p className="pixel-label green">
              <Sparkles size={15} /> {t.contactSection.eyebrow}
            </p>
            <h2>
              {t.contactSection.titleLine1}
              <br />
              <em>{t.contactSection.titleEm}</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="boss-bar-wrap">
              <div className="boss-bar-label">
                <span>{t.contactSection.statusLabel}</span>
              </div>
              <HpBar />
            </div>
          </Reveal>
          <div className="boss-grid">
            <Reveal delay={0.12}>
              <div className="attack-column">
                <p className="pixel-label">{t.contactSection.directContact}</p>
                <div className="attack-list">
                  <a className="attack-card" href={`mailto:${profile.email}`}>
                    <span className="attack-icon">
                      <Swords size={19} />
                    </span>
                    <span className="attack-meta">
                      <span>{t.contactSection.emailLabel}</span>
                      <strong>{profile.email}</strong>
                    </span>
                  </a>
                </div>
                <div className="mission-info">
                  <p>{t.contactSection.missionInfo}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="special-attack-card">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <a className="game-logo" href="#top">
            FLORIN<span>_</span>NEAGU
          </a>
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#top">
            {t.footer.back} <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </main>
  );
}
