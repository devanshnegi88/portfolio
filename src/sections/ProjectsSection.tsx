import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
const [selectedCategory, setSelectedCategory] =
  useState('All');

const categories = [
  'All',
  'Backend',
  'AI/ML',
  'GenAI',
  'Full Stack',
  'Computer Vision'
];

const filteredProjects =
  selectedCategory === 'All'
    ? projects
    : projects.filter(
        (project) =>
          project.category === selectedCategory
      );

const featured = filteredProjects.filter((p) => p.featured);
const rest = filteredProjects.filter((p) => !p.featured);

const featuredTop = featured.slice(0, 2);
const extra = rest.slice(0, 1);

const visible = showAll
  ? filteredProjects
  : [...featuredTop, ...extra];

const remainingCount =
  filteredProjects.length - visible.length;

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Production Work"
          title="Systems I've"
          titleAccent="Shipped"
          description="These aren't side projects collecting dust. Each one handles real use cases, uses proper architecture, and is deployed to a live environment."
        />
<div className="flex flex-wrap justify-center gap-3 mb-8">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => {
        setSelectedCategory(category);
        setShowAll(false);
      }}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
        selectedCategory === category
          ? 'bg-indigo-600 text-white'
          : 'glass border border-white/10 text-slate-400 hover:text-white'
      }`}
    >
      {category}
    </button>
  ))}
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {remainingCount > 0 && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-xl glass border border-white/10 hover:border-indigo-500/30 text-slate-400 hover:text-white text-sm font-medium transition-all duration-200"
            >
              Load {remainingCount} more project{remainingCount > 1 ? 's' : ''}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
