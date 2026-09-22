import { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ChevronUp } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { FeaturedProjectCard } from '../components/featured/FeaturedProjectCard';
import { ProjectDetailModal, type DetailTab } from '../components/featured/ProjectDetailModal';
import { ProjectFilterBar } from '../components/featured/ProjectFilterBar';
import type { SortOrder } from '../components/featured/SortDropdown';
import { featuredProjects, type ProjectCategory, type FeaturedProject } from '../data/featuredProjects';
import { otherProjects } from '../data/otherProjects';

const allProjects: FeaturedProject[] = [...featuredProjects, ...otherProjects];

function matches(project: FeaturedProject, term: string, category: 'All' | ProjectCategory) {
  const categoryOk = category === 'All' || project.category === category;
  if (!categoryOk) return false;
  if (!term.trim()) return true;
  const haystack = `${project.title} ${project.description} ${project.tech.join(' ')}`.toLowerCase();
  return haystack.includes(term.trim().toLowerCase());
}

function sortProjects(list: FeaturedProject[], order: SortOrder) {
  const sorted = [...list];
  switch (order) {
    case 'oldest':
      return sorted.sort((a, b) => a.dateAdded.localeCompare(b.dateAdded));
    case 'featured':
      // Nothing in the "more projects" pool is featured by definition — falls back to newest first.
      return sorted.sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
    case 'updated':
    case 'newest':
    default:
      return sorted.sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
  }
}

export function FeaturedProjectsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [initialTab, setInitialTab] = useState<DetailTab>('overview');

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<'All' | ProjectCategory>('All');
  const sortOrder: SortOrder = 'newest';
  const [isExpanded, setIsExpanded] = useState(false);

  const headingRef = useRef<HTMLDivElement>(null);

  const activeProject = allProjects.find((p) => p.id === openId) ?? null;

  const visibleFeatured = useMemo(
    () => featuredProjects.filter((p) => matches(p, searchTerm, category)),
    [searchTerm, category]
  );

  const visibleOther = useMemo(
    () => sortProjects(otherProjects.filter((p) => matches(p, searchTerm, category)), sortOrder),
    [searchTerm, category, sortOrder]
  );

  function handleOpenDetail(id: string, tab: DetailTab) {
    setInitialTab(tab);
    setOpenId(id);
  }

  function handleShowLess() {
    setIsExpanded(false);
    // Preserve search/category state — only the expanded flag changes.
    requestAnimationFrame(() => {
      const el = headingRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.top <= window.innerHeight * 0.5;
      if (!inView) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div ref={headingRef}>
          <SectionHeader
            eyebrow="Selected Work"
            title="Featured"
            titleAccent="Projects"
            description="A selection of production-grade backend systems, AI-powered applications, and full-stack products I've designed and built."
          />
        </div>

        <ProjectFilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          category={category}
          onCategoryChange={setCategory}
        />

        {visibleFeatured.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {visibleFeatured.map((project, i) => (
              <FeaturedProjectCard key={project.id} project={project} index={i} onOpenDetail={handleOpenDetail} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-500 text-center py-10">No featured projects match that search.</p>
        )}

        {/* Explore All Projects toggle */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setIsExpanded(true)}
              className="
                inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03]
                px-6 py-3 text-sm font-semibold text-slate-200
                hover:text-white hover:border-cyan-400/40 hover:bg-cyan-400/5
                shadow-[0_8px_24px_-12px_rgba(6,182,212,0.3)]
                transition-all duration-300
              "
            >
              <Rocket size={16} className="text-cyan-300" />
              Explore All Projects ({visibleOther.length})
            </button>
          </motion.div>
        )}

        {/* Expanded All Projects panel — fades in, no height clipping, so the
            cards' own staggered entrance can flow in cleanly underneath it. */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="all-projects-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pt-10 mt-10 border-t border-white/8">
                {visibleOther.length > 0 ? (
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
                    initial="hidden"
                    animate="show"
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }}
                  >
                    {visibleOther.map((project, i) => (
                      <motion.div
                        key={project.id}
                        variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <FeaturedProjectCard project={project} index={i} onOpenDetail={handleOpenDetail} noEntranceAnimation />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <p className="text-sm text-slate-500 text-center py-10">No projects match that search.</p>
                )}

                <div className="flex justify-center mt-10">
                  <button
                    onClick={handleShowLess}
                    className="
                      inline-flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-medium
                      text-slate-400 hover:text-white transition-colors duration-200
                    "
                  >
                    <ChevronUp size={15} />
                    Show Less
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ProjectDetailModal project={activeProject} initialTab={initialTab} onClose={() => setOpenId(null)} />
    </section>
  );
}