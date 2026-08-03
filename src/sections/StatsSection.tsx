import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { stats, personal } from '../data/portfolioData';
import { useGitHubContributions } from '../hooks/useGitHubContributions';

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(value * eased);
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const display = value % 1 !== 0
    ? count.toFixed(1)
    : Math.round(count).toString();

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export function StatsSection() {
  const gh = useGitHubContributions(personal.githubUsername);

  const displayStats = stats.map((s) => {
    if (s.label === 'Github Contributions') {
      const val = gh.data ?? s.value;
      return { ...s, value: Number(val) };
    }
    return s;
  });
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-transparent to-blue-600/5" />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {displayStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl glass border border-white/5 hover:border-cyan-500/25 transition-all duration-300 group text-center hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-300" />

              <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-mono">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold text-slate-300 mb-1">{stat.label}</div>
              <div className="text-xs text-slate-600 leading-snug">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
