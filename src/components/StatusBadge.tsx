interface StatusBadgeProps {
  status: 'live' | 'wip' | 'archived' | 'available' |'completed';
  pulse?: boolean;
}

const config = {
  live: { label: 'Live', color: 'text-emerald-400', bg: 'bg-emerald-400' },
  wip: { label: 'In Progress', color: 'text-amber-400', bg: 'bg-amber-400' },
  archived: { label: 'Archived', color: 'text-slate-400', bg: 'bg-slate-400' },
  available: { label: 'Open to Work', color: 'text-emerald-400', bg: 'bg-emerald-400' },
  completed: { label: 'Completed', color: 'text-slate-400', bg: 'bg-slate-400' },
};

export function StatusBadge({ status, pulse = true }: StatusBadgeProps) {
  const c = config[status] ?? { label: String(status ?? 'Unknown'), color: 'text-slate-400', bg: 'bg-slate-400' };
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium">
      <span className={`relative inline-flex w-2 h-2`}>
        {pulse && (
          <span
            className={`absolute inline-flex h-full w-full rounded-full ${c.bg} opacity-60 animate-ping`}
          />
        )}
        <span className={`relative inline-flex rounded-full w-2 h-2 ${c.bg}`} />
      </span>
      <span className={c.color}>{c.label}</span>
    </span>
  );
}
