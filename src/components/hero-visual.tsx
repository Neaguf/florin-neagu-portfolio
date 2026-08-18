"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Atom,
  Braces,
  Database,
  Hexagon,
  Triangle,
  Wind,
} from "lucide-react";
import { DeviceCutout } from "@/components/device-cutout";
import { useLanguage } from "@/components/language-provider";

const techStack = [
  { label: "React", Icon: Atom, color: "#61dafb" },
  { label: "TypeScript", Icon: Braces, color: "#3178c6" },
  { label: "Next.js", Icon: Triangle, color: "#ffffff" },
  { label: "Node.js", Icon: Hexagon, color: "#68a063" },
  { label: "Tailwind CSS", Icon: Wind, color: "#38bdf8" },
  { label: "PostgreSQL", Icon: Database, color: "#4f8fc0" },
];

const clientAvatars = ["🧑🏻", "👩🏽", "👨🏾", "👩🏻"];

export function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();
  return (
    <div className="hero-visual-stage" aria-hidden="true">
      <motion.div
        className="hv-glow a"
        animate={reduceMotion ? undefined : { y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hv-glow b"
        animate={reduceMotion ? undefined : { y: [0, 16, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      />

      <motion.div
        className="hv-device-image"
        initial={{ opacity: 0, y: 30 }}
        animate={
          reduceMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 1, y: [0, -14, 0], rotate: [-1.2, 1.2, -1.2] }
        }
        transition={
          reduceMotion
            ? { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            : {
                opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" },
              }
        }
      >
        <DeviceCutout
          src="/images/hero-dashboard.png"
          width={1469}
          height={1071}
        />
      </motion.div>

      <motion.div
        className="hv-tech-card"
        initial={{ opacity: 0, x: -20, rotate: -6 }}
        animate={
          reduceMotion
            ? { opacity: 1, x: 0, rotate: -6 }
            : { opacity: 1, x: 0, rotate: -6, y: [0, -10, 0] }
        }
        transition={
          reduceMotion
            ? { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
            : {
                opacity: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                x: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
              }
        }
      >
        <p className="hv-tech-title">{t.heroVisual.techStackTitle}</p>
        <ul>
          {techStack.map(({ label, Icon, color }) => (
            <li key={label}>
              <Icon size={13} style={{ color }} /> {label}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="hv-projects-card"
        initial={{ opacity: 0, y: 20 }}
        animate={
          reduceMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 1, y: [0, 12, 0] }
        }
        transition={
          reduceMotion
            ? { duration: 0.6, delay: 0.35 }
            : {
                opacity: { duration: 0.6, delay: 0.35 },
                y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.35 },
              }
        }
      >
        <div className="hv-projects-count">
          <strong>23</strong>
          <span>{t.heroVisual.projectsCompletedLabel}</span>
        </div>
        <div className="hv-avatars">
          {clientAvatars.map((emoji) => (
            <span key={emoji}>{emoji}</span>
          ))}
          <em>+12</em>
        </div>
      </motion.div>
    </div>
  );
}
