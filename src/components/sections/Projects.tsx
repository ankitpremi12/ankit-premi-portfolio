"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { staggerContainerVariants, cardVariants, fadeUpVariants, VIEWPORT_OPTS } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      custom={index * 0.12}
      className="blueprint-card rounded-2xl overflow-hidden group cursor-pointer relative"
      onClick={() => setExpanded(!expanded)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 opacity-100 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(0,255,136,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.025) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      {/* Animated border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `0 0 30px ${project.color}15, inset 0 0 30px ${project.color}05` }}
      />

      <div className="relative z-10 p-8">
        {/* Top bar */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full" style={{ background: project.color, boxShadow: `0 0 8px ${project.color}` }} />
            <span className="text-[10px] font-mono text-white/25 uppercase tracking-widest">{project.category}</span>
          </div>
          <span className="text-[10px] font-mono text-white/20">{project.period}</span>
        </div>

        {/* Title */}
        <h3
          className="text-xl md:text-2xl font-black text-white mb-3 uppercase leading-tight group-hover:text-opacity-90 transition-colors"
          style={{ fontFamily: '"Cinzel", serif' }}
        >
          {project.name}
        </h3>

        <p className="text-sm text-white/40 mb-6 leading-relaxed">{project.description}</p>

        {/* Metrics */}
        <div className="flex gap-4 flex-wrap mb-6">
          {Object.entries(project.metrics).map(([k, v]) => (
            <div key={k} className="px-3 py-2 rounded-lg border" style={{ borderColor: `${project.color}20`, background: `${project.color}08` }}>
              <p className="text-base font-black" style={{ color: project.color, fontFamily: '"Cinzel", serif' }}>{v}</p>
              <p className="text-[9px] font-mono text-white/30 uppercase tracking-wider">{k}</p>
            </div>
          ))}
        </div>

        {/* Tech row */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="px-2 py-1 text-[10px] font-mono border rounded" style={{ borderColor: `${project.color}20`, color: `${project.color}70` }}>
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2 py-1 text-[10px] font-mono text-white/20">+{project.tech.length - 5}</span>
          )}
        </div>

        {/* Expandable highlights */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/5 space-y-2">
                {project.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-white/50"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
                    {h}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom actions */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            {expanded ? "▲ Collapse" : "▼ View Details"}
          </span>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-3 py-1.5 border text-[10px] font-mono uppercase tracking-wider transition-all duration-300 hover:scale-105"
              style={{ borderColor: `${project.color}30`, color: `${project.color}70` }}
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-0 h-0"
          style={{
            borderStyle: "solid",
            borderWidth: "0 32px 32px 0",
            borderColor: `transparent ${project.color}20 transparent transparent`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-base py-32 bg-[#050505] relative">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,20,40,0.8) 0%, transparent 70%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel
          icon="🔧"
          pirate="FRANKY"
          theme="Ship Engineering"
          title="The Sunny Workshop"
          subtitle="Engineered with precision, deployed with confidence"
          color="#00ff88"
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          custom={0.4}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/ankitpremiji"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#00ff88]/20 text-[#00ff88]/60 text-sm font-mono tracking-widest uppercase hover:border-[#00ff88]/50 hover:text-[#00ff88] transition-all duration-300"
          >
            <span>View All on GitHub</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
