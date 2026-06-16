import { motion } from 'framer-motion';
import type { SkillCategory } from '../types';

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const colorMap = {
  indigo: {
    border: 'hover:border-indigo-500/40',
    badge: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20',
    dot: 'bg-indigo-500',
    label: 'text-indigo-400',
  },
  violet: {
    border: 'hover:border-violet-500/40',
    badge: 'bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20',
    dot: 'bg-violet-500',
    label: 'text-violet-400',
  },
  cyan: {
    border: 'hover:border-cyan-500/40',
    badge: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20',
    dot: 'bg-cyan-500',
    label: 'text-cyan-400',
  },
  emerald: {
    border: 'hover:border-emerald-500/40',
    badge: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/20',
    dot: 'bg-emerald-500',
    label: 'text-emerald-400',
  },
};

export function SkillCard({ category, index }: SkillCardProps) {
  const colors = colorMap[category.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`p-5 rounded-2xl bg-[#111118] border border-white/6 ${colors.border} transition-all duration-300 group`}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
        <h3 className={`text-sm font-semibold tracking-wide ${colors.label}`}>
          {category.name}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-default ${colors.badge}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
