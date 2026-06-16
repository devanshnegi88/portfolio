import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { StatusBadge } from './StatusBadge';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/8 bg-[#111118] hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
    >
      {/* Gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Project Image / Visual Header */}
      <div className="relative h-48 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-blue-600/5 to-cyan-600/10" />
        {/* Abstract architecture visualization */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-500">
          <div className="flex items-center gap-2">
            {project.architecture.slice(0, 4).map((node, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono whitespace-nowrap">
                  {node}
                </div>
                {i < 3 && <ArrowRight size={10} className="text-cyan-400 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
        {/* Tech stack pills overlay */}
        <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tag text-[10px]">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="tag text-[10px]">+{project.tech.length - 4}</span>
          )}
        </div>
        {/* Status */}
        <div className="absolute top-3 right-3">
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-100 transition-colors leading-snug">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon size={15} />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex gap-4 mb-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-sm font-bold text-cyan-400">{m.value}</div>
                <div className="text-xs text-slate-500">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors group/btn"
        >
          <span>{expanded ? 'Less detail' : 'Architecture & highlights'}</span>
          <ChevronDown
            size={12}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/6 mt-4">
                {/* Architecture flow */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Architecture</p>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                    {project.architecture.map((node, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-[#1a1a2e] border border-cyan-500/20 text-cyan-300">
                          {node}
                        </span>
                        {i < project.architecture.length - 1 && (
                          <ArrowRight size={10} className="text-slate-600" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Highlights</p>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
