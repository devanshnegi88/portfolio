import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const badges = [
  'Backend Engineering',
  'Artificial Intelligence',
  'Full-Stack Development',
  'Cloud Technologies',
  'Software Engineering',
];

export function ContinuousLearningCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mt-6 md:mt-8"
    >
      <Card
        className="
          relative overflow-hidden border-white/8 p-0
          bg-gradient-to-br from-indigo-500/[0.08] via-white/[0.03] to-cyan-500/[0.06]
          backdrop-blur-xl shadow-[0_30px_70px_-30px_rgba(99,102,241,0.35)]
        "
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl" />

        <CardContent className="relative p-5 sm:p-7 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 ring-1 ring-indigo-400/25 mb-3">
            <GraduationCap size={18} className="text-indigo-300" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Continuous Learning</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto mb-5">
            Committed to continuously improving my engineering skills through hands-on development, professional
            certifications, and modern software engineering practices.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {badges.map((badge) => (
              <motion.span
                key={badge}
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.9 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="
                  inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04]
                  px-3 py-1 text-[11px] font-medium text-slate-200
                "
              >
                <CheckCircle2 size={13} className="text-cyan-300" />
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
