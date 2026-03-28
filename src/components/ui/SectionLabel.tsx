"use client";
import { motion } from "framer-motion";
import { fadeUpVariants, VIEWPORT_OPTS } from "@/lib/animations";

interface SectionLabelProps {
  icon: string;
  pirate: string;
  theme: string;
  title: string;
  subtitle?: string;
  color?: string;
}

export default function SectionLabel({ icon, pirate, theme, title, subtitle, color = "#00ff88" }: SectionLabelProps) {
  return (
    <div className="text-center mb-16">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_OPTS}
        className="inline-flex items-center gap-3 mb-6"
      >
        <span className="text-xs font-mono tracking-[0.4em] text-white/30 uppercase">{icon} {pirate}</span>
        <span className="w-12 h-px" style={{ background: color }} />
        <span className="text-xs font-mono tracking-[0.4em] uppercase" style={{ color }}>{theme}</span>
      </motion.div>

      <motion.h2
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_OPTS}
        custom={0.1}
        className="section-title font-black text-white mb-4 uppercase"
        style={{ fontFamily: '"Cinzel", serif' }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          custom={0.2}
          className="text-white/40 text-sm font-mono tracking-widest max-w-lg mx-auto"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_OPTS}
        custom={0.25}
        className="katana-divider mt-8 max-w-xs mx-auto"
      />
    </div>
  );
}
