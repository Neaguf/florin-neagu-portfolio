"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HpBar() {
  const reduceMotion = useReducedMotion();
  return <div className="boss-bar-track">
    <motion.div className="boss-bar-fill" initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} />
  </div>;
}
