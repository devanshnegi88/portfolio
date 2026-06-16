import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

const badges = [
  'Backend Development',
  'AI & LLM Applications',
  'Agentic RAG Systems',
  'FastAPI & Python',
  'Cloud-Native Solutions',
  'Production Deployments',
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeader title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
            I'm a Backend & AI Engineer focused on building scalable APIs, Agentic
            RAG systems, and AI-powered applications. I enjoy solving real-world
            problems using Python, FastAPI, LLMs, and modern cloud technologies.
            My work emphasizes performance, reliability, and production-ready
            software architecture.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((b, i) => (
              <motion.button
                key={b}
                type="button"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/3 border border-white/6 hover:bg-white/6 hover:border-cyan-500/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
              >
                <span className="text-gradient">{b}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
