import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProjectCategory } from '@/data/featuredProjects';

export const CATEGORIES: ('All' | ProjectCategory)[] = ['All', 'AI', 'Backend', 'Full Stack', 'ML', 'Automation'];

interface ProjectFilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  category: 'All' | ProjectCategory;
  onCategoryChange: (value: 'All' | ProjectCategory) => void;
}

export function ProjectFilterBar({ searchTerm, onSearchChange, category, onCategoryChange }: ProjectFilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-10">
      <div className="relative flex-1 sm:max-w-xs">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects, tech..."
          className="
            w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-3.5
            text-sm text-slate-200 placeholder:text-slate-500
            transition-colors duration-200
            focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.05]
          "
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => onCategoryChange(c)}
            className={cn(
              'px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 border',
              category === c
                ? 'bg-gradient-to-r from-indigo-500/90 to-cyan-500/90 text-white border-transparent shadow-[0_4px_16px_-4px_rgba(6,182,212,0.5)]'
                : 'border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/20'
            )}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
