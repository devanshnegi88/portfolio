import { motion } from 'framer-motion';
import {
  Download,
  Mail,
  MapPin,
  Server,
  Brain,
  Layers3,
  Boxes,
  Network,
  Bot,
  Sparkles,
  Cloud,
} from 'lucide-react';
import { useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personal } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

const description = [
  "I'm a Backend & AI Engineer focused on building scalable backend systems, AI-powered applications, and end-to-end full-stack products.",
  "Over the past two years, I've continuously designed and developed real-world projects involving FastAPI, React, LangChain, LangGraph, Retrieval-Augmented Generation (RAG), PostgreSQL, Redis, Docker, and modern LLM frameworks.",
  'I enjoy solving engineering challenges by designing clean architectures, building reliable APIs, integrating AI into production workflows, and creating software that is scalable, maintainable, and user-focused.',
  "I'm always exploring distributed systems, Agentic AI, backend architecture, cloud deployment, and modern software engineering practices while continuously improving my skills through projects and internships.",
];

const interests = [
  { label: 'Backend Engineering', icon: Server },
  { label: 'Artificial Intelligence', icon: Brain },
  { label: 'Full-Stack Development', icon: Layers3 },
  { label: 'System Design', icon: Boxes },
  { label: 'Distributed Systems', icon: Network },
  { label: 'Agentic AI', icon: Bot },
  { label: 'Generative AI', icon: Sparkles },
  { label: 'Cloud Architecture', icon: Cloud },
];

const technicalFocus = [
  'FastAPI',
  'Python',
  'React',
  'Node.js',
  'LangGraph',
  'LangChain',
  'PostgreSQL',
  'Redis',
  'Docker',
];

const numericStats = [
  { value: 2, suffix: '+', label: 'Years', sub: 'Hands-on Building' },
  { value: 10, suffix: '+', label: 'Projects', sub: 'Production-style Projects' },
  { value: 4, suffix: '', label: 'Internships', sub: 'Real-world Experience' },
];

function StatCard({
  value,
  suffix,
  label,
  sub,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  index: number;
}) {
  const { ref, inView } = useInView(0.4);
  const { count, start } = useCountUp(value, 1600, false);

  useEffect(() => {
    if (inView) start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl glass border border-white/6 p-5 sm:p-6 text-center hover:border-cyan-500/30 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-cyan-500/0 group-hover:from-indigo-500/[0.06] group-hover:to-cyan-500/[0.06] transition-all duration-500" />
      <div className="relative text-3xl sm:text-4xl font-bold text-white font-mono mb-1">
        {Math.round(count)}
        {suffix}
      </div>
      <div className="relative text-sm font-semibold text-slate-200 mb-1">{label}</div>
      <div className="relative text-xs text-slate-500 leading-snug">{sub}</div>
    </motion.div>
  );
}

function FocusStatCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl glass border border-white/6 p-5 sm:p-6 text-center hover:border-violet-500/30 transition-colors duration-300 flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-indigo-500/0 group-hover:from-violet-500/[0.06] group-hover:to-indigo-500/[0.06] transition-all duration-500" />
      <div className="relative text-sm font-semibold text-slate-200 mb-2.5">Focus</div>
      <div className="relative flex flex-wrap justify-center gap-1.5">
        {['Backend', 'AI', 'Full-Stack'].map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-md text-[11px] font-mono tracking-wide bg-white/[0.04] border border-white/[0.08] text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[min(500px,80vw)] h-[min(500px,80vw)] rounded-full bg-indigo-600/5 blur-[130px]" />
        <div className="absolute bottom-0 right-1/5 w-[min(450px,75vw)] h-[min(450px,75vw)] rounded-full bg-cyan-600/5 blur-[110px]" />
      </div>

      <div className="container-custom">
        <SectionHeader eyebrow="Engineering Profile" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
          {/* Left — profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 h-fit"
          >
            <div className="relative rounded-3xl glass border border-white/6 p-6 shadow-2xl shadow-black/30">
              {/* Image */}
              <div className="relative mb-5">
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-[40px] scale-105" />
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a0a0f]">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Floating location badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-strong border border-white/10 text-xs font-medium text-slate-200 whitespace-nowrap shadow-lg">
                  <MapPin size={12} className="text-cyan-400" />
                  {personal.location}
                </div>
              </div>

              <div className="text-center mt-6 mb-5">
                <h3 className="text-lg font-semibold text-white">{personal.name}</h3>
                <p className="text-sm text-slate-400 mt-0.5">Backend &amp; AI Engineer</p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-2.5">
                <a
                  href={personal.resume}
                  download
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
                >
                  <Download size={16} />
                  Download Resume
                </a>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] hover:border-cyan-400/40 text-white font-medium text-sm transition-all duration-200 hover:bg-white/[0.05] hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  Contact Me
                </button>
              </div>

              {/* Socials */}
              <div className="flex items-center justify-center gap-3 mt-5 pt-5 border-t border-white/[0.06]">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.1] hover:border-white/30 text-slate-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <GithubIcon size={17} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.1] hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <LinkedinIcon size={17} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-white leading-snug mb-6 max-w-2xl">
                Backend &amp; AI Engineer building{' '}
                <span className="text-gradient">production-ready software</span> and intelligent
                applications.
              </h3>

              <div className="space-y-4 max-w-2xl">
                {description.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    className="text-slate-400 text-sm sm:text-base leading-relaxed"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Core Interests */}
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-4">
                <span className="w-4 h-px bg-indigo-400" />
                Core Interests
              </p>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((item, i) => (
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ scale: 1.04 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-200 cursor-default"
                  >
                    <item.icon size={13} className="text-cyan-400" />
                    {item.label}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Technical Focus */}
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-4">
                <span className="w-4 h-px bg-indigo-400" />
                Technical Focus
              </p>
              <div className="flex flex-wrap gap-2.5">
                {technicalFocus.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ scale: 1.04 }}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300 text-xs font-mono tracking-wide hover:border-violet-500/30 hover:bg-violet-500/5 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated statistic cards
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {numericStats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
          <FocusStatCard />
        </div> */}
      </div>
    </section>
  );
}