import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../SocialIcons';
import { ArchitectureBlueprint } from './ArchitectureBlueprint';
import { FeaturedStatusBadge } from './FeaturedStatusBadge';
import type { FeaturedProject } from '@/data/featuredProjects';
import { cn } from '@/lib/utils';

export type DetailTab = 'overview' | 'problem' | 'architecture' | 'features' | 'lessons';

const TABS: { id: DetailTab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem & Solution' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'features', label: 'Features' },
  { id: 'lessons', label: 'Lessons Learned' },
];

interface ProjectDetailModalProps {
  project: FeaturedProject | null;
  initialTab: DetailTab;
  onClose: () => void;
}

export function ProjectDetailModal({ project, initialTab, onClose }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<DetailTab>(initialTab);

  useEffect(() => {
    if (project) setActiveTab(initialTab);
  }, [project, initialTab]);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#05050a]/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="
              relative z-10 w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh]
              overflow-hidden flex flex-col
              rounded-t-2xl sm:rounded-2xl
              border border-white/10 bg-[#0d0d14]
              shadow-[0_30px_100px_-20px_rgba(0,0,0,0.7)]
            "
          >
            {/* Header */}
            <div className="relative shrink-0">
              <ArchitectureBlueprint nodes={project.architecture} variant="banner" className="h-32 sm:h-36 rounded-t-none" />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 inline-flex items-center justify-center rounded-lg bg-black/50 backdrop-blur-md p-2 text-slate-300 hover:text-white hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <div className="absolute top-3 left-3">
                <FeaturedStatusBadge status={project.status} />
              </div>
              <div className="absolute -bottom-px left-0 right-0 h-16 bg-gradient-to-t from-[#0d0d14] to-transparent" />
            </div>

            <div className="px-6 pt-1 pb-4 shrink-0">
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-1">{project.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>

              <div className="flex items-center gap-2 mt-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:border-white/25 transition-colors"
                  >
                    <GithubIcon size={13} />
                    GitHub
                  </a>
                )}
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/25 bg-emerald-400/[0.06] px-3 py-1.5 text-xs font-medium text-emerald-300 hover:border-emerald-400/50 transition-colors"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-slate-600">
                    <ExternalLink size={13} />
                    Not deployed publicly
                  </span>
                )}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 px-6 border-b border-white/8 overflow-x-auto no-scrollbar shrink-0">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'relative whitespace-nowrap px-3 py-2.5 text-xs font-medium transition-colors',
                    activeTab === tab.id ? 'text-cyan-300' : 'text-slate-500 hover:text-slate-300'
                  )}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="detail-tab-underline"
                      className="absolute left-0 right-0 -bottom-px h-px bg-cyan-400"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="overflow-y-auto px-6 py-6 flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-5">
                      <Section title="Overview" text={project.detail.overview} />
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span key={t} className="tag text-[10px]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'problem' && (
                    <div className="space-y-5">
                      <Section title="Problem" text={project.detail.problem} />
                      <Section title="Solution" text={project.detail.solution} />
                    </div>
                  )}

                  {activeTab === 'architecture' && (
                    <div className="space-y-6">
                      <ArchitectureBlueprint nodes={project.architecture} variant="expanded" />
                      <p className="text-[11px] text-slate-600 -mt-2">
                        Live system schematic — published screenshots aren&rsquo;t available for this project yet.
                      </p>
                      <List title="Technical Challenges" items={project.detail.challenges} />
                    </div>
                  )}

                  {activeTab === 'features' && (
                    <div className="space-y-6">
                      <List title="Key Highlights" items={project.highlights} />
                      <List title="Feature Breakdown" items={project.detail.features} />
                    </div>
                  )}

                  {activeTab === 'lessons' && <List title="Lessons Learned" items={project.detail.lessons} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{title}</p>
      <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
    </div>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed">
            <ArrowRight size={12} className="text-cyan-400 mt-1 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
