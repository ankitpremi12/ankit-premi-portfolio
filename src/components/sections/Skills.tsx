"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "@/lib/constants";
import { fadeUpVariants, staggerContainerVariants, cardVariants, VIEWPORT_OPTS } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";

function SwordIcon({ color, active }: { color: string; active: boolean }) {
  return (
    <svg width="28" height="100" viewBox="0 0 28 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blade */}
      <path d="M14 4 L16.5 45 L14 48 L11.5 45 Z" fill={active ? color : "rgba(255,255,255,0.2)"} />
      <path d="M14 4 L14.5 45 L14 48 L13.5 45 Z" fill="rgba(255,255,255,0.4)" />
      {/* Guard */}
      <ellipse cx="14" cy="52" rx="10" ry="3.5" fill={active ? color : "rgba(255,255,255,0.15)"} opacity="0.8" />
      {/* Handle */}
      <rect x="11.5" y="55" width="5" height="28" rx="2.5" fill={active ? `${color}80` : "rgba(255,255,255,0.1)"} />
      {/* Pommel */}
      <circle cx="14" cy="85" r="4" fill={active ? color : "rgba(255,255,255,0.15)"} opacity="0.8" />
      {/* Glow line */}
      {active && (
        <line x1="14" y1="4" x2="14" y2="48" stroke={color} strokeWidth="0.5" opacity="0.8" />
      )}
    </svg>
  );
}

function SkillBar({ level, color, delay }: { level: number; color: string; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div ref={ref} className="w-full h-px bg-white/10 relative overflow-hidden mt-2">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-0 h-full origin-left"
        style={{ width: `${level}%`, background: `linear-gradient(90deg, ${color}, ${color}80)`, boxShadow: `0 0 8px ${color}60` }}
      />
    </div>
  );
}

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(0);
  const active = SKILLS[activeSkill];

  return (
    <section id="skills" className="section-base py-32 bg-[#050505] relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(0,255,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel
          icon="⚔️"
          pirate="RORONOA ZORO"
          theme="Sword Mastery"
          title="The Three Sword Style"
          subtitle="Each skill forged through discipline and relentless training"
          color="#00ff88"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Sword Rack */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_OPTS}
            className="flex justify-center gap-8 lg:gap-12"
          >
            {SKILLS.map((skill, i) => (
              <motion.button
                key={skill.category}
                variants={cardVariants}
                custom={i * 0.1}
                onClick={() => setActiveSkill(i)}
                className="flex flex-col items-center gap-3 group relative"
              >
                {/* Sword glow background */}
                <div
                  className="absolute inset-0 blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: skill.color }}
                />

                <motion.div
                  animate={activeSkill === i ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <SwordIcon color={skill.color} active={activeSkill === i} />
                  {activeSkill === i && (
                    <motion.div
                      layoutId="swordGlow"
                      className="absolute inset-0 blur-lg"
                      style={{ background: `radial-gradient(circle, ${skill.color}40, transparent 70%)` }}
                    />
                  )}
                </motion.div>

                <span
                  className="text-[9px] font-mono tracking-widest uppercase text-center leading-tight transition-colors duration-300"
                  style={{ color: activeSkill === i ? skill.color : "rgba(255,255,255,0.3)" }}
                >
                  {skill.sword.split(" ").map((w, wi) => <span key={wi} className="block">{w}</span>)}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skill Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkill}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-8" glowColor={active.color}>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-mono tracking-widest text-white/30 uppercase mb-1">Skill Category</p>
                    <h3 className="text-2xl font-black uppercase" style={{ fontFamily: '"Cinzel", serif', color: active.color }}>
                      {active.category}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-black" style={{ color: active.color }}>{active.level}%</p>
                    <p className="text-xs font-mono text-white/30">Mastery</p>
                  </div>
                </div>

                {/* Level bar */}
                <SkillBar level={active.level} color={active.color} delay={0.2} />

                {/* Sword name */}
                <div className="flex items-center gap-3 mt-6 mb-6">
                  <div className="w-8 h-px" style={{ background: active.color }} />
                  <span className="text-xs font-mono tracking-widest text-white/30 uppercase">{active.sword}</span>
                  <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${active.color}30, transparent)` }} />
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {active.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                      className="px-3 py-1.5 text-xs font-mono border rounded-full transition-all duration-300 hover:scale-105 cursor-default"
                      style={{
                        borderColor: `${active.color}30`,
                        color: `${active.color}90`,
                        background: `${active.color}08`,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* All skills marquee */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          custom={0.3}
          className="mt-20 overflow-hidden"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-xs font-mono text-white/20 tracking-widest uppercase">Full Arsenal</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>
          <div className="overflow-hidden relative">
            <div className="marquee-track">
              {[...SKILLS.flatMap((s) => s.items), ...SKILLS.flatMap((s) => s.items)].map((skill, i) => (
                <span key={i} className="flex items-center gap-4 mr-8 text-xs font-mono text-white/20 uppercase tracking-widest whitespace-nowrap">
                  <span className="text-[#00ff88]/30">⊕</span> {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
