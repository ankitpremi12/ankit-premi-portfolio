"use client";
import { motion } from "framer-motion";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell,
} from "recharts";
import { fadeUpVariants, staggerContainerVariants, cardVariants, VIEWPORT_OPTS } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";

const radarData = [
  { skill: "GenAI", value: 95 },
  { skill: "MLOps", value: 88 },
  { skill: "ML/DL", value: 90 },
  { skill: "Backend", value: 82 },
  { skill: "Data Eng", value: 85 },
  { skill: "Cloud", value: 88 },
];

const projectMetrics = [
  { name: "RAG Accuracy", value: 95, color: "#00ff88" },
  { name: "Churn AUC", value: 82, color: "#e63946" },
  { name: "Phishing Prec.", value: 89, color: "#ffd700" },
  { name: "Net Alignment", value: 82, color: "#6a0572" },
  { name: "CGPA (×10)", value: 85, color: "#f4a261" },
];

const certifications = [
  { name: "GenAI Essentials", issuer: "Microsoft", color: "#0078d4" },
  { name: "Vertex AI Gemini", issuer: "Google Cloud", color: "#4285f4" },
  { name: "ML Specialization", issuer: "DeepLearning.AI", color: "#00a0d2" },
  { name: "BigQuery Analytics", issuer: "Google", color: "#4285f4" },
  { name: "Statistics for DS", issuer: "Stanford", color: "#8c1515" },
  { name: "Python", issuer: "Google", color: "#4285f4" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="glass-card px-3 py-2 text-xs font-mono border border-white/10">
        <p className="text-white/60 mb-1">{label}</p>
        <p style={{ color: payload[0].fill }}>{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  return (
    <section id="analytics" className="section-base py-32 bg-[#050505] relative">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(244,162,97,0.03) 0%, transparent 70%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f4a261]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel
          icon="🗺️"
          pirate="NAMI"
          theme="Navigator · Data Ocean"
          title="The Weather Maps"
          subtitle="Real data. Real metrics. Every coordinate charted."
          color="#f4a261"
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_OPTS}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Radar Chart */}
          <motion.div variants={cardVariants} custom={0} className="lg:col-span-2">
            <GlassCard className="p-6" glowColor="#f4a261">
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">Skill Radar</p>
              <h3 className="text-lg font-black text-white mb-6" style={{ fontFamily: '"Cinzel", serif' }}>
                Competency Matrix
              </h3>
              <ResponsiveContainer width="100%" height={260}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.06)" />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "JetBrains Mono" }}
                  />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="#f4a261"
                    fill="#f4a261"
                    fillOpacity={0.12}
                    strokeWidth={1.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>

          {/* LeetCode Stats */}
          <motion.div variants={cardVariants} custom={0.1}>
            <GlassCard className="p-6 h-full" glowColor="#ffd700">
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">LeetCode</p>
              <h3 className="text-lg font-black text-white mb-6" style={{ fontFamily: '"Cinzel", serif' }}>DSA Progress</h3>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Total Solved", val: 101, color: "#ffd700", pct: 65 },
                  { label: "Easy", val: 45, color: "#00ff88", pct: 78 },
                  { label: "Medium", val: 48, color: "#f4a261", pct: 52 },
                  { label: "Hard", val: 8, color: "#e63946", pct: 20 },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-white/40 uppercase">{s.label}</span>
                      <span style={{ color: s.color }}>{s.val}</span>
                    </div>
                    <div className="h-px bg-white/10 relative overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 top-0 h-full origin-left"
                        style={{ width: `${s.pct}%`, background: s.color, boxShadow: `0 0 6px ${s.color}60` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Bar chart */}
          <motion.div variants={cardVariants} custom={0.15} className="lg:col-span-2">
            <GlassCard className="p-6" glowColor="#00ff88">
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">Performance</p>
              <h3 className="text-lg font-black text-white mb-6" style={{ fontFamily: '"Cinzel", serif' }}>
                Project Metrics
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={projectMetrics} barSize={20}>
                  <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                    {projectMetrics.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={cardVariants} custom={0.2}>
            <GlassCard className="p-6 h-full" glowColor="#6a0572">
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">Credentials</p>
              <h3 className="text-lg font-black text-white mb-5" style={{ fontFamily: '"Cinzel", serif' }}>Certifications</h3>
              <div className="space-y-3">
                {certifications.map((c) => (
                  <div key={c.name} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" style={{ background: c.color }} />
                    <div>
                      <p className="text-xs font-mono text-white/60 leading-tight">{c.name}</p>
                      <p className="text-[10px] font-mono text-white/20">{c.issuer}</p>
                    </div>
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
