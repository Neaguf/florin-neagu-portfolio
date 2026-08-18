"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BatteryFull,
  Blocks,
  CheckCircle2,
  Gauge,
  Heart,
  LaptopMinimal,
  MapPin,
  Menu,
  MessageCircle,
  Search,
  ShoppingBag,
  Smartphone,
  Star,
  TrendingUp,
  Wifi,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";

const icons = [LaptopMinimal, Smartphone, Blocks] as const;

function WebStorefront() {
  const products = [
    { name: "Air Sound", price: "399 lei", type: "headphones" },
    { name: "Smart Watch", price: "649 lei", type: "watch" },
    { name: "City Ride", price: "2.499 lei", type: "scooter" },
  ];

  return (
    <div className="showcase-web">
      <div className="store-browser">
        <div className="store-browser-bar">
          <div className="browser-dots"><span /><span /><span /></div>
          <div className="store-address"><Search size={11} /> novashop.ro</div>
          <span />
        </div>
        <div className="store-nav">
          <strong>NOVA<span>shop</span></strong>
          <div className="store-search">Caută produsul potrivit... <Search size={13} /></div>
          <div className="store-nav-actions"><Heart size={15} /><ShoppingBag size={15} /></div>
        </div>
        <div className="store-categories"><Menu size={12} /> Produse <span>Telefoane</span><span>Laptopuri</span><span>Gaming</span><span>Oferte</span></div>
        <div className="store-hero">
          <div><p>NEW TECH DROP</p><h3>Mai mult din<br />fiecare zi.</h3><button>Vezi colecția <ArrowUpRight size={12} /></button></div>
          <div className="store-hero-product"><span /><i /></div>
          <b>-25%</b>
        </div>
        <div className="store-products">
          <div className="store-products-title"><strong>Recomandate pentru tine</strong><span>Vezi toate <ArrowUpRight size={11} /></span></div>
          <div className="store-product-grid">
            {products.map((product) => (
              <div className="store-product" key={product.name}>
                <div className={`product-art ${product.type}`}><span /></div>
                <p>{product.name}</p>
                <div><strong>{product.price}</strong><span><Star size={9} fill="currentColor" /> 4.9</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileAppSwitcher() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="showcase-mobile">
      <span className="mobile-orbit orbit-one" /><span className="mobile-orbit orbit-two" />
      <div className="phone-float-stage">
        <motion.div
          className="showcase-phone"
          animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="phone-island" />
          <div className="phone-status"><span>9:41</span><div><Wifi size={10} /><BatteryFull size={12} /></div></div>
          <div className="phone-apps-title"><span>Open apps</span><b>3</b></div>
          <div className="open-app-card app-map"><div className="mini-app-head"><span><MapPin size={10} /> City</span><i>•••</i></div><div className="mini-map"><span className="map-route" /><b><MapPin size={10} fill="currentColor" /></b></div><div className="map-trip"><span>12 min</span><strong>Studio → Home</strong></div></div>
          <div className="open-app-card app-health"><div className="mini-app-head"><span><Activity size={10} /> Pulse</span><i>•••</i></div><div className="health-ring"><strong>7,842</strong><span>steps</span></div><div className="health-stats"><span>5.6 km</span><span>420 kcal</span></div></div>
          <div className="open-app-card app-chat"><div className="mini-app-head"><span><MessageCircle size={10} /> Loop</span><i>•••</i></div><div className="chat-person"><b>AM</b><span><strong>Alex M.</strong><small>Sounds perfect!</small></span><i>now</i></div><div className="chat-person"><b>IR</b><span><strong>Ioana R.</strong><small>Photo</small></span><i>2m</i></div></div>
          <div className="phone-home-indicator" />
        </motion.div>
      </div>
    </div>
  );
}

function ProductAudit() {
  const reduceMotion = useReducedMotion();
  const metrics = [
    { icon: Gauge, label: "Performanță", before: "62", after: "96", progress: 0.96 },
    { icon: Zap, label: "Timp de încărcare", before: "4.8s", after: "1.1s", progress: 0.85 },
    { icon: TrendingUp, label: "Conversie", before: "1.2%", after: "3.8%", progress: 0.76 },
  ];

  return (
    <div className="showcase-audit">
      <span className="audit-ambient" />
      <motion.div
        className="audit-card"
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="audit-card-head">
          <span className="audit-card-mark"><Blocks size={15} /></span>
          <div className="audit-card-title">
            <strong>Audit produs</strong>
            <span>Refactorizat &amp; optimizat</span>
          </div>
          <span className="audit-card-badge"><CheckCircle2 size={12} /> Live</span>
        </div>
        <div className="audit-metrics">
          {metrics.map((metric, index) => (
            <div className="audit-metric" key={metric.label}>
              <span className="audit-metric-label"><metric.icon size={13} /> {metric.label}</span>
              <div className="audit-metric-values">
                <span className="audit-metric-before">{metric.before}</span>
                <ArrowUpRight size={11} className="audit-metric-arrow" />
                <span className="audit-metric-after">{metric.after}</span>
              </div>
              <div className="audit-metric-track">
                <motion.span
                  className="audit-metric-fill"
                  initial={{ scaleX: reduceMotion ? metric.progress : 0.06 }}
                  animate={{ scaleX: metric.progress }}
                  transition={{ duration: 0.9, delay: reduceMotion ? 0 : index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="audit-card-foot">
          <span>Scor general</span>
          <strong>+156% <small>impact</small></strong>
        </div>
      </motion.div>
      <motion.span
        className="audit-spark spark-a"
        animate={reduceMotion ? undefined : { opacity: [0.2, 0.9, 0.2] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="audit-spark spark-b"
        animate={reduceMotion ? undefined : { opacity: [0.9, 0.2, 0.9] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const previews = [WebStorefront, MobileAppSwitcher, ProductAudit];

export function ProjectSelector() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const choices = t.projectSelector.choices;
  const ActivePreview = previews[active];

  return (
    <section className="selector" id="start">
      <div className="container">
        <div className="selector-heading">
          <div><p className="pixel-label green"><span /> {t.projectSelector.eyebrow}</p><h2>{t.projectSelector.counter}</h2></div>
          <p>{t.projectSelector.ctaText}</p>
        </div>
        <div className="project-picker">
          <div className="project-tabs" role="tablist" aria-label={t.projectSelector.eyebrow}>
              {choices.map((item, index) => {
                const Icon = icons[index];
                const isActive = active === index;
                return (
                  <button
                    className={isActive ? "project-tab active" : "project-tab"}
                    onClick={() => setActive(index)}
                    key={item.title}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="project-showcase"
                  >
                    {isActive && (
                      <motion.span
                        className="project-tab-highlight"
                        layoutId="project-tab-highlight"
                        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    <span className="project-tab-node"><Icon size={17} /></span>
                    <strong>{item.title}</strong>
                    <ArrowUpRight size={15} className="project-tab-arrow" />
                  </button>
                );
              })}
          </div>
          <div className="project-showcase" id="project-showcase" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                className="project-scene"
                key={active}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.985, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.01, y: -8 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <ActivePreview />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

