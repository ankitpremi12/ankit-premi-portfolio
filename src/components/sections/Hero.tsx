"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { fadeUpVariants, textRevealVariants } from "@/lib/animations";
import { useMouseParallax } from "@/hooks/useMouseParallax";

const KatanaScene = dynamic(() => import("@/components/three/KatanaScene"), { ssr: false });
const ParticleField = dynamic(() => import("@/components/three/ParticleField"), { ssr: false });

const HERO_LINES = ["Code the", "Impossible"];
const TAGS = ["AI/ML Engineer", "GenAI", "MLOps", "NLP Specialist", "Full Stack"];

export default function Hero() {
  const { x, y } = useMouseParallax(0.015);
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTagIndex((i) => (i + 1) % TAGS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="section-base flex flex-col justify-center relative overflow-hidden bg-[#050505]">
      {/* Deep background radial */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(0,255,136,0.04) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(230,57,70,0.04) 0%, transparent 70%)",
        }}
      />

      {/* 3D Katana */}
      <KatanaScene />

      {/* Particles */}
      <ParticleField />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20"
        style={{ transform: `translate(${x * 0.3}px, ${y * 0.3}px)` }}
      >
        {/* Badge */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-[#00ff88]/20 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="text-xs font-mono tracking-[0.4em] text-[#00ff88]/70 uppercase">
            Available for Hire · Delhi, India
          </span>
        </motion.div>

        {/* Main title */}
        <div className="overflow-hidden mb-2">
          {HERO_LINES.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                variants={textRevealVariants}
                initial="hidden"
                animate="visible"
                custom={0.4 + i * 0.15}
                className="hero-title font-black text-white leading-[0.88] tracking-tight"
                style={{ fontFamily: '"Cinzel", serif' }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Accent line */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            variants={textRevealVariants}
            initial="hidden"
            animate="visible"
            custom={0.7}
            className="hero-title font-black leading-[0.88] tracking-tight"
            style={{
              fontFamily: '"Cinzel", serif',
              background: "linear-gradient(90deg, #00ff88, #ffd700, #e63946)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Build the Future
          </motion.h1>
        </div>

        {/* Subtitle lines */}
        <div className="overflow-hidden mt-4">
          <motion.p
            variants={textRevealVariants}
            initial="hidden"
            animate="visible"
            custom={0.85}
            className="text-xl md:text-3xl font-light text-white/30 tracking-widest"
            style={{ fontFamily: '"Cinzel", serif' }}
          >
            Engineer Intelligence
          </motion.p>
        </div>

        {/* Rotating tag */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="mt-8 flex items-center gap-4"
        >
          <span className="text-white/20 font-mono text-xs tracking-widest">[ ROLE ]</span>
          <div className="h-8 overflow-hidden relative w-52">
            <motion.span
              key={tagIndex}
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -32, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-sm font-mono text-[#00ff88] tracking-widest uppercase"
            >
              {TAGS[tagIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={1.1}
          className="flex flex-wrap gap-4 mt-12"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group flex items-center gap-3 px-8 py-4 bg-[#00ff88] text-black font-bold text-sm tracking-widest uppercase hover:bg-[#00cc66] transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Enter the Grand Line</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            <div className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="absolute inset-0 flex items-center justify-center gap-3 text-[#00ff88] font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Enter the Grand Line →
            </span>
          </a>

          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white/70 text-sm tracking-widest uppercase hover:border-[#00ff88]/50 hover:text-white transition-all duration-300 font-mono"
          >
            View Projects
          </a>

          <a
            href="mailto:ankitpremiji@gmail.com"
            className="flex items-center gap-3 px-8 py-4 border border-[#e63946]/30 text-[#e63946]/70 text-sm tracking-widest uppercase hover:border-[#e63946] hover:text-[#e63946] transition-all duration-300 font-mono"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={1.2}
          className="flex gap-10 mt-16 pt-10 border-t border-white/5"
        >
          {[
            { val: "8.5", label: "CGPA" },
            { val: "2", label: "Internships" },
            { val: "101+", label: "LeetCode" },
            { val: "4+", label: "Projects" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: '"Cinzel", serif' }}>{s.val}</p>
              <p className="text-xs font-mono text-white/30 tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00ff88]/50 to-transparent animate-pulse" />
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 right-8 text-[10px] font-mono text-white/10 leading-6 hidden lg:block">
        {["LAT: 28.6139°N", "LONG: 77.2090°E", "HEADING: GRAND LINE", "STATUS: RECRUITING"].map((t) => (
          <div key={t}>{t}</div>
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
