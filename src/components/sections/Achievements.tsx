"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ACHIEVEMENTS, CERTIFICATIONS } from "@/lib/constants";
import { staggerContainerVariants, cardVariants, VIEWPORT_OPTS } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";

function AnimatedCounter({ target, suffix, color, duration = 2000 }: {
  target: number; suffix: string; color: string; duration?: number;
}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const isDecimal = target % 1 !== 0;
    const steps = 60;
    const step = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.round(current));
      if (current >= target) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target, duration]);

  return (
    <span ref={ref} style={{ color }}>
      {count}{suffix}
    </span>
  );
}

function AchievementCard({ achievement, index }: { achievement: typeof ACHIEVEMENTS[0]; index: number }) {
  return (
    <motion.div variants={cardVariants} custom={index * 0.08}>
      <GlassCard className="p-6 text-center relative group overflow-hidden" glowColor={achievement.color}>
        {/* Background number */}
        <div
          className="absolute inset-0 flex items-center justify-center text-8xl font-black opacity-[0.03] pointer-events-none select-none"
          style={{ color: achievement.color, fontFamily: '"Cinzel", serif' }}
        >
          {achievement.value}
        </div>

        {/* Crosshair decoration */}
        <div className="absolute top-2 right-2 opacity-20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8" stroke={achievement.color} strokeWidth="0.5" />
            <circle cx="12" cy="12" r="3" stroke={achievement.color} strokeWidth="0.5" />
            <line x1="12" y1="1" x2="12" y2="7" stroke={achievement.color} strokeWidth="0.5" />
            <line x1="12" y1="17" x2="12" y2="23" stroke={achievement.color} strokeWidth="0.5" />
            <line x1="1" y1="12" x2="7" y2="12" stroke={achievement.color} strokeWidth="0.5" />
            <line x1="17" y1="12" x2="23" y2="12" stroke={achievement.color} strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10">
          <p
            className="text-4xl md:text-5xl font-black mb-2"
            style={{ fontFamily: '"Cinzel", serif' }}
          >
            <AnimatedCounter target={achievement.value} suffix={achievement.suffix} color={achievement.color} />
          </p>
          <p className="text-xs font-mono text-white/30 uppercase tracking-widest">{achievement.label}</p>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-px origin-left"
          style={{ background: achievement.color, boxShadow: `0 0 8px ${achievement.color}` }}
        />
      </GlassCard>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-base py-32 bg-[#050505] relative">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(230,57,70,0.03) 0%, transparent 70%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e63946]/20 to-transparent" />

      {/* Sniper scope corner decoration */}
      <div className="absolute top-20 right-10 opacity-5 hidden xl:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke="#e63946" strokeWidth="1" />
          <circle cx="60" cy="60" r="35" stroke="#e63946" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="10" stroke="#e63946" strokeWidth="0.5" />
          <line x1="60" y1="0" x2="60" y2="45" stroke="#e63946" strokeWidth="0.5" />
          <line x1="60" y1="75" x2="60" y2="120" stroke="#e63946" strokeWidth="0.5" />
          <line x1="0" y1="60" x2="45" y2="60" stroke="#e63946" strokeWidth="0.5" />
          <line x1="75" y1="60" x2="120" y2="60" stroke="#e63946" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel
          icon="🎯"
          pirate="USOPP"
          theme="Sniper Precision"
          title="The Sniper's Log"
          subtitle="Every number is a hit. Every metric, a bull's-eye."
          color="#e63946"
        />

        {/* Achievements grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {ACHIEVEMENTS.map((a, i) => (
            <AchievementCard key={a.label} achievement={a} index={i} />
          ))}
        </motion.div>

        {/* MAIT + Impact section */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Skills summary */}
          <motion.div variants={cardVariants} custom={0.1}>
            <GlassCard className="p-8" glowColor="#e63946">
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-5">Technical Arsenal</p>
              <div className="space-y-4">
                {[
                  { label: "Languages", value: "Python · C++ · Java · SQL · JS · Kotlin", color: "#00ff88" },
                  { label: "Frameworks", value: "FastAPI · React · Next.js · PyTorch · TF", color: "#e63946" },
                  { label: "Cloud", value: "AWS · Azure ML · GCP Vertex AI", color: "#ffd700" },
                  { label: "Databases", value: "MongoDB · PostgreSQL · Pinecone · FAISS", color: "#6a0572" },
                ].map((s) => (
                  <div key={s.label} className="flex items-start gap-4">
                    <span className="text-xs font-mono text-white/20 uppercase tracking-widest w-24 flex-shrink-0 mt-0.5">{s.label}</span>
                    <span className="text-xs font-mono" style={{ color: s.color }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Impact summary */}
          <motion.div variants={cardVariants} custom={0.2}>
            <GlassCard className="p-8" glowColor="#ffd700">
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-5">Real World Impact</p>
              <div className="space-y-5">
                {[
                  { icon: "⚡", text: "Reduced manual reporting work by 75% at Vodafone", color: "#e63946" },
                  { icon: "🎯", text: "89% precision on 100K+ phishing URLs at C-DOT", color: "#00ff88" },
                  { icon: "🚀", text: "95% RAG accuracy on Agentic AI Analytics platform", color: "#ffd700" },
                  { icon: "📊", text: "92% stakeholder satisfaction serving 50+ daily users", color: "#6a0572" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-4">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
