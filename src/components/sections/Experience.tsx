"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import { fadeUpVariants, staggerContainerVariants, cardVariants, VIEWPORT_OPTS } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

function PoneglyphCard({ exp, index, isActive, onClick }: {
  exp: typeof EXPERIENCE[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      variants={cardVariants}
      custom={index * 0.15}
      onClick={onClick}
      className="poneglyph-card rounded-2xl p-8 cursor-pointer relative overflow-hidden group"
      style={{
        borderColor: isActive ? `${exp.color}50` : "rgba(106,5,114,0.2)",
        boxShadow: isActive ? `0 0 40px ${exp.color}15, inset 0 0 40px ${exp.color}05` : "none",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Stone texture overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='1.5' fill='rgba(106,5,114,0.4)'/%3E%3Ccircle cx='20' cy='20' r='0.8' fill='rgba(106,5,114,0.2)'/%3E%3Ccircle cx='60' cy='60' r='0.8' fill='rgba(106,5,114,0.2)'/%3E%3C/svg%3E\")",
      }} />

      {/* Active glow */}
      {isActive && (
        <motion.div
          layoutId="poneglyphGlow"
          className="absolute inset-0 rounded-2xl"
          style={{ background: `radial-gradient(circle at 30% 30%, ${exp.color}10, transparent 60%)` }}
        />
      )}

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 flex items-center justify-center text-2xl rounded-xl border"
            style={{ borderColor: `${exp.color}30`, background: `${exp.color}10` }}
          >
            {exp.symbol}
          </div>
          <div>
            <p className="text-xs font-mono tracking-widest text-white/30 uppercase mb-1">{exp.period}</p>
            <h3 className="text-lg font-black text-white uppercase" style={{ fontFamily: '"Cinzel", serif' }}>
              {exp.company.split("(")[0].trim()}
            </h3>
            <p className="text-xs font-mono mt-1" style={{ color: exp.color }}>{exp.role}</p>
          </div>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-full border text-white/30" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {exp.type}
        </span>
      </div>

      {/* Metrics row */}
      <div className="relative z-10 flex gap-4 flex-wrap mb-6">
        {Object.entries(exp.metrics).map(([k, v]) => (
          <div key={k} className="text-center px-4 py-2 rounded-lg border" style={{ borderColor: `${exp.color}15`, background: `${exp.color}05` }}>
            <p className="text-lg font-black" style={{ color: exp.color, fontFamily: '"Cinzel", serif' }}>{v}</p>
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider">{k}</p>
          </div>
        ))}
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 overflow-hidden"
          >
            {/* Highlights */}
            <div className="space-y-2 mb-6">
              {exp.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-white/60"
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                  {h}
                </motion.div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-[10px] font-mono rounded border"
                  style={{ borderColor: `${exp.color}25`, color: `${exp.color}80`, background: `${exp.color}08` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand hint */}
      {!isActive && (
        <div className="relative z-10 flex items-center gap-2 text-xs font-mono text-white/20 mt-2">
          <span>Read Poneglyph</span>
          <span>→</span>
        </div>
      )}
    </motion.div>
  );
}

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" className="section-base py-32 bg-[#050505] relative">
      {/* Purple glow bg */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(106,5,114,0.04) 0%, transparent 70%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6a0572]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel
          icon="📜"
          pirate="NICO ROBIN"
          theme="Ancient Knowledge"
          title="The Poneglyphs"
          subtitle="Each experience carved in stone — immovable, timeless, legendary"
          color="#6a0572"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#6a0572]/30 to-transparent transform -translate-x-1/2 hidden lg:block" />

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_OPTS}
            className="space-y-8"
          >
            {EXPERIENCE.map((exp, i) => (
              <div key={exp.company} className={`relative lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? "lg:ml-0" : "lg:ml-[calc(50%+2rem)]"}`}>
                {/* Timeline dot */}
                <div
                  className="absolute top-8 hidden lg:block w-4 h-4 rounded-full border-2 z-10"
                  style={{
                    borderColor: exp.color,
                    background: "#050505",
                    boxShadow: `0 0 12px ${exp.color}60`,
                    [i % 2 === 0 ? "right" : "left"]: "-2.5rem",
                    transform: "translateX(50%)",
                  }}
                />
                <PoneglyphCard
                  exp={exp}
                  index={i}
                  isActive={activeExp === i}
                  onClick={() => setActiveExp(activeExp === i ? -1 : i)}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Education block */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          custom={0.3}
          className="mt-16 poneglyph-card rounded-2xl p-8 relative overflow-hidden"
          style={{ borderColor: "rgba(255,215,0,0.2)" }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 flex items-center justify-center text-3xl rounded-xl border border-[#ffd700]/20 bg-[#ffd700]/05">
                🎓
              </div>
              <div>
                <p className="text-xs font-mono tracking-widest text-white/30 uppercase mb-1">2022 – 2026</p>
                <h3 className="text-xl font-black text-white" style={{ fontFamily: '"Cinzel", serif' }}>
                  B.Tech in AI & Data Science
                </h3>
                <p className="text-sm text-white/50 mt-1">Maharaja Agrasen Institute of Technology, Delhi</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-4xl font-black text-[#ffd700]" style={{ fontFamily: '"Cinzel", serif' }}>8.5</p>
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest">/10 CGPA</p>
            </div>
          </div>

          {/* Coursework */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-xs font-mono text-white/20 uppercase tracking-widest mb-3">Coursework</p>
            <div className="flex flex-wrap gap-2">
              {["Machine Learning", "Deep Learning", "DSA", "NLP", "Computer Vision", "MLOps", "Cloud Computing"].map((c) => (
                <span key={c} className="px-2 py-1 text-[10px] font-mono rounded border border-[#ffd700]/15 text-[#ffd700]/60 bg-[#ffd700]/05">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
