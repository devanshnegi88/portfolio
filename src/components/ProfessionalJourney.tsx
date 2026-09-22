import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from './SectionHeader';
import { StatusBadge } from './StatusBadge';
import { cn } from '@/lib/utils';
import { journeyItems, type JourneyItem } from '@/data/journeyData';

interface ProfessionalJourneyProps {
  /** Defaults to the shared journeyItems array — pass a custom list to reuse this component elsewhere. */
  items?: JourneyItem[];
}

function JourneyCard({ item, side }: { item: JourneyItem; side: 'left' | 'right' }) {
  const Icon = item.icon;
  const isLeft = side === 'left';

  return (
    <div
      className={cn(
        'relative flex items-start',
        'md:w-1/2',
        isLeft ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
      )}
    >
      {/* Node */}
      <div
        className={cn(
          'absolute top-1 z-10',
          'left-5 -translate-x-1/2',
          'md:translate-x-0 md:left-auto md:right-auto',
          isLeft ? 'md:-right-5' : 'md:-left-5'
        )}
      >
        <div
          className={cn(
            'flex items-center justify-center w-10 h-10 rounded-full border-2 bg-[#0A0A0F] transition-all duration-500',
            item.current
              ? 'border-cyan-400 shadow-[0_0_24px_-2px_rgba(34,211,238,0.7)]'
              : 'border-white/15'
          )}
        >
          <Icon size={16} className={item.current ? 'text-cyan-300' : 'text-slate-400'} />
        </div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full pl-16 md:pl-0"
      >
        <Card
          className="
            group relative overflow-hidden p-0
            border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent
            backdrop-blur-xl
            shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]
            transition-all duration-500
            hover:-translate-y-1 hover:border-cyan-400/35
            hover:shadow-[0_24px_50px_-24px_rgba(6,182,212,0.4)]
          "
        >
          <CardContent className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap mb-1">
                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-100 transition-colors">
                    {item.title}
                  </h3>
                  {item.current && <StatusBadge status="live" pulse />}
                </div>
                {item.company && <p className="text-sm font-medium text-slate-300">{item.company}</p>}
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20 whitespace-nowrap">
                {item.duration}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>

            {item.highlights && item.highlights.length > 0 && (
              <ul className="space-y-2 mt-4">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60 mt-1.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export function ProfessionalJourney({ items = journeyItems }: ProfessionalJourneyProps) {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Career"
          title="Professional"
          titleAccent="Journey"
          description="Building production-ready backend systems, AI-powered applications, and full-stack products through independent development and industry internships."
          align="left"
        />

        <div className="relative">
          {/* Glowing timeline spine — left-aligned on mobile, centered on desktop */}
          <div
            className="
              absolute top-0 bottom-0 w-px
              left-5 md:left-1/2 md:-translate-x-1/2
              bg-gradient-to-b from-cyan-500/60 via-indigo-500/30 to-transparent
            "
          />

          <div className="space-y-10 md:space-y-14">
            {items.map((item, i) => (
              <div key={item.id} className="md:flex md:items-start">
                <JourneyCard item={item} side={i % 2 === 0 ? 'left' : 'right'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
