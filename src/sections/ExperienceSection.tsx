import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { StatusBadge } from '../components/StatusBadge';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Career"
          title="Work"
          titleAccent="Experience"
          description="Real-world engineering work across production systems, internships, and self-directed projects."
          align="left"
        />

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-14 md:pl-20"
              >
                <div className="absolute left-2 md:left-4 top-1.5 w-4 h-4 rounded-full border-2 border-cyan-500 bg-[#0A0A0F] flex items-center justify-center">
                  <div className={`w-1.5 h-1.5 rounded-full ${exp.current ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                </div>

                <div className="p-6 rounded-2xl glass border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                        {exp.current && <StatusBadge status="live" pulse />}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                        <span className="font-medium text-slate-300">{exp.company}</span>
                        <span className="text-slate-600">·</span>
                        <span>{exp.type}</span>
                        <span className="text-slate-600">·</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60 mt-1.5 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
