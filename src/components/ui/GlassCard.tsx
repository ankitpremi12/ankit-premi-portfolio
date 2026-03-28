"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  hover?: boolean;
}

export default function GlassCard({ children, className, glowColor = "#00ff88", onClick, hover = true }: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn("glass-card rounded-xl overflow-hidden relative group", className)}
      style={{
        "--glow-color": glowColor,
      } as React.CSSProperties}
    >
      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${glowColor}10, transparent)`,
          boxShadow: `inset 0 0 30px ${glowColor}08`,
        }}
      />
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 30px ${glowColor}20` }}
      />
      {children}
    </motion.div>
  );
}
