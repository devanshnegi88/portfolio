import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section id="education" className="pb-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto p-6 rounded-2xl bg-[#111118] border border-white/6 flex items-start gap-5"
        >
          <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex-shrink-0">
            <GraduationCap size={20} className="text-indigo-400" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-1">Education</p>
            <h3 className="text-base font-semibold text-white mb-0.5">{education.degree}</h3>
            <p className="text-sm font-medium text-slate-300 mb-2">{education.institution}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={11} />
                {education.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={11} />
                {education.location}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
