import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section id="education" className="pb-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative overflow-hidden max-w-3xl mx-auto
            rounded-2xl border border-white/8 p-5 sm:p-8
            bg-gradient-to-br from-indigo-500/[0.08] via-white/[0.03] to-cyan-500/[0.06]
            backdrop-blur-xl shadow-[0_30px_70px_-30px_rgba(99,102,241,0.35)]
            flex flex-col sm:flex-row items-start gap-4 sm:gap-6
          "
        >
          {/* Ambient glow — same as ContinuousLearningCard */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-indigo-500/10 blur-3xl" />

          {/* Icon */}
          <div className="relative inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 ring-1 ring-indigo-400/25 flex-shrink-0">
            <GraduationCap size={20} className="text-indigo-300" />
          </div>

          {/* Content */}
          <div className="relative">
            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400/70 mb-1">Education</p>
            <h3 className="text-base font-semibold text-white mb-0.5">{education.degree}</h3>
            <p className="text-sm font-medium text-slate-300 mb-2">{education.institution}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar size={11} className="text-cyan-300" />
                {education.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={11} className="text-cyan-300" />
                {education.location}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
