import type { FeaturedStatus } from '@/data/featuredProjects';
import { cn } from '@/lib/utils';

const config: Record<FeaturedStatus, { label: string; dot: string; text: string; ring: string }> = {
  production: {
    label: 'Production',
    dot: 'bg-emerald-400',
    text: 'text-emerald-300',
    ring: 'ring-emerald-400/30',
  },
  live: {
    label: 'Live',
    dot: 'bg-cyan-400',
    text: 'text-cyan-300',
    ring: 'ring-cyan-400/30',
  },
  development: {
    label: 'In Development',
    dot: 'bg-amber-400',
    text: 'text-amber-300',
    ring: 'ring-amber-400/30',
  },
};

export function FeaturedStatusBadge({ status }: { status: FeaturedStatus }) {
  const c = config[status];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium ring-1',
        c.text,
        c.ring
      )}
    >
      <span className="relative inline-flex w-1.5 h-1.5">
        <span className={cn('absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping', c.dot)} />
        <span className={cn('relative inline-flex rounded-full w-1.5 h-1.5', c.dot)} />
      </span>
      {c.label}
    </span>
  );
}
