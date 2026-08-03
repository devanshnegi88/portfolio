import { motion } from 'framer-motion';
import { ExternalLink, Workflow, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../SocialIcons';
import { Card, CardContent } from '@/components/ui/card';
import { ArchitectureBlueprint } from './ArchitectureBlueprint';
import { FeaturedStatusBadge } from './FeaturedStatusBadge';
import type { FeaturedProject } from '@/data/featuredProjects';
import type { DetailTab } from './ProjectDetailModal';

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  index: number;
  onOpenDetail: (id: string, tab: DetailTab) => void;
  /** Set when a parent wrapper already handles the entrance animation (e.g. a staggered flow reveal). */
  noEntranceAnimation?: boolean;
}

export function FeaturedProjectCard({ project, index, onOpenDetail, noEntranceAnimation = false }: FeaturedProjectCardProps) {
  const { title, description, tech, highlights, architecture, links, status } = project;

  const entranceProps = noEntranceAnimation
    ? {}
    : {
        initial: { opacity: 0, y: 36 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <motion.div {...entranceProps} whileHover={{ y: -6, scale: 1.012 }} className="group h-full">
      <Card
        className="
          group relative h-full flex flex-col overflow-hidden p-0
          border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent
          backdrop-blur-xl
          shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]
          transition-all duration-500
          hover:border-cyan-400/40
          hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_30px_60px_-20px_rgba(6,182,212,0.35)]
        "
      >
        {/* Gradient top accent that appears on hover */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Banner */}
        <div className="relative">
          <ArchitectureBlueprint nodes={architecture} variant="banner" compact />
          <div className="absolute top-2.5 right-2.5">
            <FeaturedStatusBadge status={status} />
          </div>
        </div>

        <CardContent className="flex flex-col flex-1 p-5 pt-4">
          <h3 className="text-base sm:text-lg font-semibold text-white leading-snug mb-1 group-hover:text-cyan-100 transition-colors">
            {title}
          </h3>
          <p className="text-[13px] text-slate-400 leading-relaxed mb-3">{description}</p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tech.map((t) => (
              <span key={t} className="tag text-[10px]">
                {t}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-1 mb-4">
            {highlights.slice(0, 4).map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-3 border-t border-white/6">
            {/* Utility buttons */}
            <div className="flex items-center gap-2 mb-2.5">
              <button
                onClick={() => onOpenDetail(project.id, 'architecture')}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-200 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all"
              >
                <Workflow size={12} />
                Architecture
              </button>

              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-1.5 text-slate-300 hover:text-white hover:border-white/25 transition-all"
                  aria-label={`${title} on GitHub`}
                >
                  <GithubIcon size={14} />
                </a>
              )}

              {links.live ? (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-1.5 text-slate-300 hover:text-emerald-300 hover:border-emerald-400/30 transition-all"
                  aria-label={`${title} live demo`}
                >
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span
                  className="inline-flex items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] p-1.5 text-slate-600 cursor-not-allowed"
                  title="Not deployed publicly"
                >
                  <ExternalLink size={14} />
                </span>
              )}
            </div>

            {/* Primary CTA */}
            <button
              onClick={() => onOpenDetail(project.id, 'overview')}
              className="
                w-full inline-flex items-center justify-center gap-1.5 rounded-lg
                bg-gradient-to-r from-indigo-500/90 to-cyan-500/90 px-4 py-2
                text-[13px] font-semibold text-white
                shadow-[0_8px_24px_-8px_rgba(6,182,212,0.5)]
                transition-all duration-300
                hover:shadow-[0_10px_32px_-6px_rgba(6,182,212,0.7)] hover:brightness-110
              "
            >
              View Details
              <ArrowUpRight size={14} />
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}