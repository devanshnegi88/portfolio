import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export type SortOrder = 'newest' | 'oldest' | 'featured' | 'updated';

const OPTIONS: { id: SortOrder; label: string }[] = [
  { id: 'newest', label: 'Newest' },
  { id: 'oldest', label: 'Oldest' },
  { id: 'featured', label: 'Featured' },
  { id: 'updated', label: 'Recently Updated' },
];

export function SortDropdown({ value, onChange }: { value: SortOrder; onChange: (v: SortOrder) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const activeLabel = OPTIONS.find((o) => o.id === value)?.label ?? 'Sort';

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03]
          px-3.5 py-2.5 text-xs font-medium text-slate-300
          hover:text-white hover:border-white/20 transition-colors duration-200
        "
      >
        Sort: <span className="text-cyan-300">{activeLabel}</span>
        <ChevronDown size={13} className={cn('transition-transform duration-200', open && 'rotate-180')} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="
              absolute right-0 sm:left-0 mt-2 w-48 z-20 overflow-hidden
              rounded-xl border border-white/10 bg-[#111118]/95 backdrop-blur-xl
              shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)]
            "
          >
            {OPTIONS.map((o) => (
              <button
                key={o.id}
                onClick={() => {
                  onChange(o.id);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
              >
                {o.label}
                {value === o.id && <Check size={13} className="text-cyan-300" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
