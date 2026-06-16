import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { hero, personal } from '../data/portfolioData';

const techChips = ['FastAPI', 'Python', 'LLMs', 'Agentic RAG', 'MongoDB', 'Docker'];

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background premium elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-600/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-custom w-full max-w-6xl mx-auto z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column - Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05] mb-6">
                <span className="text-white">Backend & </span>
                <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  AI Engineer
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              Building scalable backend systems, Agentic RAG applications, AI-powered products, and cloud-native APIs using Python, FastAPI, and modern LLM frameworks.
            </motion.p>

            {/* Tech Chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mt-6"
            >
              {techChips.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded bg-white/[0.03] border border-white/[0.08] text-slate-300 text-xs font-mono tracking-wide hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10 w-full"
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
                aria-label="View Projects"
              >
                View Projects
              </button>
              <a
                href={personal.resume}
                download
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] hover:border-cyan-400/40 text-white font-medium text-sm transition-all duration-200 hover:bg-white/[0.05] hover:-translate-y-0.5"
                aria-label="Download Resume"
              >
                <Download size={16} />
                Resume
              </a>
              <div className="flex items-center gap-3 ml-0 sm:ml-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] hover:border-white/30 text-slate-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[40%] flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[60px] scale-110" />
              
              {/* Concentric rings container */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-[320px] lg:h-[320px] flex items-center justify-center">
                {/* Outermost ring */}
                <div className="absolute inset-0 rounded-full border border-white/[0.1] scale-125"></div>
                
                {/* Middle ring */}
                <div className="absolute inset-0 rounded-full border border-white/[0.06] scale-115"></div>
                
                {/* Inner ring (image container) */}
                <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border border-white/[0.08] shadow-2xl bg-[#0a0a0f]">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
