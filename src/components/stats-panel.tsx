"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  Handshake,
  Server,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  SiDocker,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import { useLanguage } from "@/components/language-provider";

const skillAccents = [
  { color: "#c7f45b", bg: "rgba(199,244,91,.16)", badgeText: "#0a0b09" },
  { color: "#a78bfa", bg: "rgba(167,139,250,.16)", badgeText: "#f4f6ef" },
  { color: "#ff8a4d", bg: "rgba(255,138,77,.16)", badgeText: "#0a0b09" },
  { color: "#a78bfa", bg: "rgba(167,139,250,.16)", badgeText: "#f4f6ef" },
  { color: "#c7f45b", bg: "rgba(199,244,91,.16)", badgeText: "#0a0b09" },
];
const skillIcons = [Code2, Server, Smartphone, Database, Cloud];

const techTools = [
  { Icon: SiReact, color: "#61dafb", bg: "rgba(97,218,251,.16)" },
  { Icon: SiNextdotjs, color: "#f4f6ef", bg: "rgba(255,255,255,.14)" },
  { Icon: SiTypescript, color: "#3178c6", bg: "rgba(49,120,198,.18)" },
  { Icon: SiJavascript, color: "#f2d94e", bg: "rgba(242,217,78,.18)" },
  { Icon: SiPython, color: "#3776ab", bg: "rgba(55,118,171,.18)" },
  { Icon: Handshake, color: "#5fd8c4", bg: "rgba(95,216,196,.16)" },
  { Icon: SiMongodb, color: "#47a248", bg: "rgba(71,162,72,.18)" },
  { Icon: SiDocker, color: "#2496ed", bg: "rgba(36,150,237,.18)" },
  { Icon: Cloud, color: "#ff9900", bg: "rgba(255,153,0,.18)" },
  { Icon: SiRedis, color: "#dc382d", bg: "rgba(220,56,45,.18)" },
];

export function AboutPanels() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <div className="about-panels">
      <div className="skills-panel">
        <div className="skills-panel-header">
          <span className="skills-panel-icon">
            <Sparkles size={16} />
          </span>
          <div>
            <p>{t.story.skillsTitle}</p>
            <span>{t.story.skillsSubtitle}</span>
          </div>
        </div>
        <div className="skills-panel-body">
          {t.story.skills.map((skill, index) => {
            const Icon = skillIcons[index];
            const accent = skillAccents[index];
            return (
              <div className="skill-row" key={skill.label}>
                <span className="skill-marker">
                  <span
                    className="skill-marker-dot"
                    style={{ background: accent.color }}
                  />
                </span>
                <span
                  className="skill-icon"
                  style={{ background: accent.bg, color: accent.color }}
                >
                  <Icon size={16} />
                </span>
                <div className="skill-row-main">
                  <div className="skill-row-top">
                    <h4>{skill.label}</h4>
                    <span
                      className="skill-expert"
                      style={{ background: accent.color, color: accent.badgeText }}
                    >
                      {t.story.skillsBadge}
                    </span>
                  </div>
                  <p>{skill.description}</p>
                  <div className="skill-progress">
                    <span className="skill-percent">{skill.value}%</span>
                    <div className="skill-track">
                      <motion.div
                        className="skill-fill"
                        style={{ background: accent.color }}
                        initial={
                          reduceMotion ? { width: `${skill.value}%` } : { width: 0 }
                        }
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="tech-panel">
        <div className="tech-panel-header">
          <p>
            <Code2 size={14} /> {t.story.techTitle}
          </p>
          <span className="tech-panel-badge">
            <em /> {t.story.techBadge}
          </span>
        </div>
        <div className="tech-icons-row">
          {techTools.map(({ Icon, color, bg }, index) => (
            <span
              className="tech-icon-chip"
              key={index}
              style={{ background: bg, color }}
            >
              <Icon size={17} />
            </span>
          ))}
        </div>
      </div>

      <div className="about-cta-banner">
        <span className="about-cta-icon">
          <Zap size={18} />
        </span>
        <p>{t.story.ctaText}</p>
        <a href="#contact" className="about-cta-button">
          {t.story.ctaButton} <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}
