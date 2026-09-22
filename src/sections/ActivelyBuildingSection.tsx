import { motion } from 'framer-motion';
import {
  Bot,
  Search,
  Server,
  LayoutGrid,
  Workflow,
  Database,
  Cloud,
  Activity,
  type LucideIcon,
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { SectionHeader } from '../components/SectionHeader';

interface FocusArea {
  label: string;
  icon: LucideIcon;
  color: 'indigo' | 'violet' | 'cyan' | 'emerald';
}

const focusAreas: FocusArea[] = [
  { label: 'Multi-Agent AI Systems', icon: Bot, color: 'indigo' },
  { label: 'Retrieval-Augmented Generation (RAG)', icon: Search, color: 'violet' },
  { label: 'Backend APIs with FastAPI', icon: Server, color: 'cyan' },
  { label: 'Full-Stack AI Applications', icon: LayoutGrid, color: 'emerald' },
  { label: 'LangGraph & LangChain', icon: Workflow, color: 'indigo' },
  { label: 'PostgreSQL & Redis', icon: Database, color: 'violet' },
  { label: 'Docker & Cloud Deployment', icon: Cloud, color: 'cyan' },
  { label: 'AI Evaluation & Observability', icon: Activity, color: 'emerald' },
];

const colorMap = {
  indigo: {
    iconWrap: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    border: 'group-hover:border-indigo-500/40',
    glow: 'from-indigo-500/[0.08]',
    dot: 'bg-indigo-500',
  },
  violet: {
    iconWrap: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
    border: 'group-hover:border-violet-500/40',
    glow: 'from-violet-500/[0.08]',
    dot: 'bg-violet-500',
  },
  cyan: {
    iconWrap: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    border: 'group-hover:border-cyan-500/40',
    glow: 'from-cyan-500/[0.08]',
    dot: 'bg-cyan-500',
  },
  emerald: {
    iconWrap: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    border: 'group-hover:border-emerald-500/40',
    glow: 'from-emerald-500/[0.08]',
    dot: 'bg-emerald-500',
  },
} as const;

export function ActivelyBuildingSection() {
  return (
    <section id="actively-building" className="section-padding relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[min(400px,60vw)] rounded-full bg-emerald-600/[0.04] blur-[130px]" />
      </div>

      <div className="container-custom">
        {/* Glowing badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border border-emerald-500/25 text-sm font-medium text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Currently Building
          </motion.div>
        </div>

        <SectionHeader
          title="Actively Building"
          description="Continuously building production-ready backend systems, AI-powered applications, and full-stack products while exploring modern software engineering and Generative AI."
        />

        {/* Focus area cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {focusAreas.map((area, i) => {
            const colors = colorMap[area.color];
            const Icon = area.icon;
            return (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Card
                  className={`relative h-full overflow-hidden glass p-5 border-white/6 ${colors.border} transition-colors duration-300`}
                >
                  {/* Hover gradient sheen */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${colors.glow} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardContent className="relative p-0 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className={`flex items-center justify-center w-11 h-11 rounded-xl border ${colors.iconWrap}`}
                    >
                      <Icon size={20} />
                    </motion.div>

                    <p className="text-sm font-medium text-slate-200 leading-snug">
                      {area.label}
                    </p>

                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-500`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} animate-pulse`} />
                      In progress
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
