"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] transition-all duration-500",
          scrolled ? "py-3 glass-card border-b border-[rgba(255,255,255,0.06)]" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 border border-[#00ff88]/40 rotate-45 flex items-center justify-center group-hover:border-[#00ff88] transition-colors duration-300">
              <span className="rotate-[-45deg] text-xs text-[#00ff88] font-mono">AP</span>
            </div>
            <span
              className="text-sm tracking-[0.3em] text-white/70 group-hover:text-white transition-colors uppercase hidden sm:block"
              style={{ fontFamily: '"Cinzel", serif' }}
            >
              Ankit Premi
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="px-3 py-2 text-xs text-white/40 hover:text-[#00ff88] transition-colors duration-300 tracking-widest uppercase font-mono group relative"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1">{item.icon}</span>
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#00ff88] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA + Menu */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/ankit-premi"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#00ff88]/30 text-[#00ff88] text-xs font-mono tracking-widest hover:bg-[#00ff88]/10 transition-all duration-300 uppercase"
            >
              <span>⚡</span> Hire Me
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
            >
              <span className={cn("w-6 h-px bg-white transition-all duration-300", menuOpen && "rotate-45 translate-y-2")} />
              <span className={cn("w-4 h-px bg-white transition-all duration-300", menuOpen && "opacity-0")} />
              <span className={cn("w-6 h-px bg-white transition-all duration-300", menuOpen && "-rotate-45 -translate-y-2")} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-[999] glass-card border-b border-[rgba(255,255,255,0.06)] py-6 px-6 lg:hidden"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(item.href)}
                className="flex items-center gap-3 w-full py-3 text-white/60 hover:text-[#00ff88] transition-colors border-b border-white/5 font-mono text-sm tracking-widest"
              >
                <span>{item.icon}</span>
                <span className="uppercase text-xs">{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
