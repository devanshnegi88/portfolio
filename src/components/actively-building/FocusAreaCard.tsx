import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import type { FocusArea } from '@/data/activelyBuildingData';

export function FocusAreaCard({ area, index }: { area: FocusArea; index: number }) {
  const Icon = area.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group h-full"
    >
      <Card
        className="
          relative h-full overflow-hidden p-0
          border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent
          backdrop-blur-xl
          transition-all duration-500
          hover:border-cyan-400/35
          hover:shadow-[0_20px_45px_-20px_rgba(6,182,212,0.35)]
        "
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardContent className="flex flex-col items-start gap-3.5 p-5">
          <div
            className="
              inline-flex items-center justify-center w-11 h-11 rounded-xl
              bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 ring-1 ring-indigo-400/25
              text-cyan-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
            "
          >
            <Icon size={19} />
          </div>
          <p className="text-sm font-medium text-slate-200 leading-snug group-hover:text-white transition-colors">
            {area.label}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
