"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function Loader() {
  const { isLoading, setLoading } = usePortfolioStore();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = [
    "Charting the Grand Line...",
    "Loading Devil Fruit Powers...",
    "Preparing Haki...",
    "Setting Sail...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return p + Math.random() * 4 + 1;
      });
    }, 50);

    const phaseInterval = setInterval(() => {
      setPhase((p) => Math.min(p + 1, phases.length - 1));
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(phaseInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader-overlay"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Jolly Roger symbol */}
          <motion.div
            className="relative mb-12"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-24 h-24 relative flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full border border-[#00ff88]/30"
                style={{ animation: "counterSpin 8s linear infinite" }}
              />
              <div
                className="absolute inset-2 rounded-full border border-[#ffd700]/20"
                style={{ animation: "counterSpin 12s linear infinite reverse" }}
              />
              <span className="text-5xl select-none">☠</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            className="text-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1
              className="text-3xl md:text-4xl font-black tracking-[0.3em] text-white uppercase mb-1"
              style={{ fontFamily: '"Cinzel", serif' }}
            >
              ANKIT PREMI
            </h1>
            <p className="text-xs tracking-[0.5em] text-[#00ff88] uppercase font-mono">
              AI/ML Engineer · GenAI · MLOps
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-80 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex justify-between text-xs text-white/30 font-mono mb-2">
              <span>INITIALIZING</span>
              <span>{Math.min(100, Math.round(progress))}%</span>
            </div>
            <div className="w-full h-px bg-white/10 relative">
              <motion.div
                className="absolute left-0 top-0 h-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #00ff88, #ffd700, #e63946)",
                  boxShadow: "0 0 10px rgba(0,255,136,0.5)",
                  transition: "width 0.1s linear",
                }}
              />
            </div>

            <motion.p
              key={phase}
              className="text-center text-xs text-white/30 font-mono mt-3 tracking-widest"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              {phases[phase]}
            </motion.p>
          </motion.div>

          {/* Scan line */}
          <div className="scan-line" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
