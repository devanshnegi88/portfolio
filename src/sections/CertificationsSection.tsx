import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { certificationItems } from '../data/certificationsData';
import { CertificationCard } from '../components/certifications/CertificationCard';
import { ContinuousLearningCard } from '../components/certifications/ContinuousLearningCard';

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-indigo-300 mb-5"
          >
            <Trophy size={13} />
            Professional Certifications
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Professional <span className="text-gradient">Certifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base leading-relaxed max-w-2xl mx-auto"
          >
            Professional certifications that strengthen my expertise in Backend Engineering, Artificial Intelligence,
            and Modern Software Development.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-3 text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto"
          >
            Continuously learning modern Backend Engineering, Artificial Intelligence, Cloud Technologies, and
            Software Development through industry-recognized certifications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {certificationItems.map((cert, i) => (
            <CertificationCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        <ContinuousLearningCard />
      </div>
    </section>
  );
}
