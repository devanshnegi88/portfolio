import { motion } from 'framer-motion';
import { Award, Briefcase, BookOpen ,ExternalLink} from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import type { Certification } from '../types';

const typeConfig = {
  work: { icon: Briefcase, label: 'Work', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  course: { icon: BookOpen, label: 'Course', color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
  project: { icon: Award, label: 'Project', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
};

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const cfg = typeConfig[cert.type];
  const Icon = cfg.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-5 rounded-2xl bg-[#111118] border border-white/6 hover:border-indigo-500/20 transition-all duration-300 group flex items-start gap-4"
    >
      <div className={`p-2.5 rounded-xl border ${cfg.bg} flex-shrink-0`}>
        <Icon size={16} className={cfg.color} />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-white leading-snug mb-1 group-hover:text-indigo-100 transition-colors">
          {cert.title}
        </h3>
        <p className="text-xs text-slate-400">{cert.issuer}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className={`text-xs font-medium ${cfg.color}`}>{cfg.label}</span>
          <span className="text-slate-700">·</span>
          <span className="text-xs text-slate-600">{cert.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications &"
          titleAccent="Recognition"
        />

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
