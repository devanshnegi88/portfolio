import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { CertificationItem } from '@/data/certificationsData';

interface CertificationCardProps {
  cert: CertificationItem;
  index: number;
}

export function CertificationCard({ cert, index }: CertificationCardProps) {
  const { title, issuer, date, description, skills, credentialUrl, orgInitials, accent } = cert;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group h-full cert-card-glow rounded-xl"
    >
      <Card
        className="
          relative z-[1] h-full flex flex-col p-0 overflow-hidden
          border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent
          backdrop-blur-xl
          shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]
          transition-shadow duration-500
          group-hover:shadow-[0_30px_60px_-24px_rgba(6,182,212,0.35)]
        "
      >
        <CardContent className="flex flex-col flex-1 p-6">
          {/* Top row: logo + verified badge */}
          <div className="flex items-start justify-between mb-5">
            <div
              className={cn(
                'flex items-center justify-center w-14 h-14 rounded-2xl border font-mono font-bold text-sm bg-gradient-to-br',
                accent.from,
                accent.to,
                accent.text,
                accent.ring,
                'ring-1'
              )}
            >
              {orgInitials}
            </div>

            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium ring-1',
                accent.text,
                accent.ring
              )}
            >
              <CheckCircle2 size={12} />
              Verified
            </span>
          </div>

          {/* Title + issuer + date */}
          <h3 className="text-base sm:text-lg font-semibold text-white leading-snug mb-1 group-hover:text-cyan-100 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
            <span className="font-medium text-slate-300">{issuer}</span>
            <span className="text-slate-700">·</span>
            <span>{date}</span>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed mb-5">{description}</p>

          {/* Animated skill chips */}
          <motion.div
            className="flex flex-wrap gap-1.5 mb-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 + index * 0.05 } },
            }}
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 6, scale: 0.9 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="tag text-[10px]"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="mt-auto pt-1">
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative w-full inline-flex items-center justify-center gap-1.5 rounded-lg
                overflow-hidden px-4 py-2.5
                bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500
                text-sm font-semibold text-white
                shadow-[0_0_0_1px_rgba(139,92,246,0.4),0_8px_28px_-6px_rgba(99,102,241,0.6)]
                transition-all duration-300
                hover:shadow-[0_0_0_1px_rgba(139,92,246,0.6),0_12px_36px_-6px_rgba(99,102,241,0.8)]
                hover:scale-[1.02] hover:brightness-110
                active:scale-[0.98]
              "
            >
              {/* Shine overlay */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
              View Certificate
              <ArrowRight size={15} />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
