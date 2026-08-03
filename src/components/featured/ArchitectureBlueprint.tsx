import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ArchitectureBlueprintProps {
  nodes: string[];
  variant?: 'banner' | 'expanded';
  compact?: boolean;
  className?: string;
}

/**
 * Renders each project's real architecture flow as a blueprint-style
 * schematic — used as the card banner (compact) and inside the detail
 * modal (expanded). This is deliberately not a stock photo: for an
 * engineering portfolio, the system diagram *is* the most characteristic
 * artifact of the work.
 */
export function ArchitectureBlueprint({ nodes, variant = 'banner', compact = false, className }: ArchitectureBlueprintProps) {
  const isBanner = variant === 'banner';

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-t-xl',
        isBanner ? (compact ? 'h-32 sm:h-36' : 'h-44 sm:h-52') : 'rounded-xl h-auto py-8',
        className
      )}
    >
      {/* Blueprint grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#111118] to-[#0A0A0F]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />

      {/* Node flow */}
      <div
        className={cn(
          'relative h-full flex items-center',
          isBanner ? 'px-5 overflow-x-auto no-scrollbar' : 'px-6 flex-wrap justify-center'
        )}
      >
        <div className={cn('flex items-center gap-2', !isBanner && 'flex-wrap justify-center gap-y-4')}>
          {nodes.map((node, i) => (
            <div key={node} className="flex items-center gap-2 shrink-0">
              <div
                className={cn(
                  'rounded-md border font-mono whitespace-nowrap transition-colors duration-300',
                  'border-cyan-500/25 bg-cyan-500/[0.06] text-cyan-200/90 group-hover:border-cyan-400/50 group-hover:text-cyan-100',
                  isBanner ? 'px-2.5 py-1 text-[10px]' : 'px-3 py-1.5 text-xs'
                )}
              >
                {node}
              </div>
              {i < nodes.length - 1 && (
                <div className="relative w-5 sm:w-6 h-px bg-gradient-to-r from-cyan-500/40 to-indigo-400/30 overflow-hidden shrink-0">
                  <motion.div
                    className="absolute inset-y-0 w-2 bg-cyan-300/80 blur-[1px]"
                    animate={{ x: ['-10px', '30px'] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.18,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}