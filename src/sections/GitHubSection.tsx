import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Code2, Flame, GitCommitHorizontal, GitPullRequest, AlertCircle, Users, Zap } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { useGitHubUser, useGitHubRepos } from '../hooks/useGitHub';
import { personal } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { getLanguageColor, truncate } from '../utils';
import { formatDate } from '../utils';
import { useState, useEffect } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GitHubStatsData {
  totalStars: number;
  totalCommits: number;
  totalPRs: number;
  totalIssues: number;
  contributedTo: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
const LEVEL_COLORS: Record<number, string> = {
  0: '#161b22',
  1: '#0e4429',
  2: '#006d32',
  3: '#26a641',
  4: '#39d353',
};

const LANG_COLORS: Record<string, string> = {
  Python: '#3572A5',
  HTML: '#e34c26',
  JavaScript: '#f1e05a',
  CSS: '#563d7c',
  TypeScript: '#2b7489',
  PLpgSQL: '#336790',
  Shell: '#89e051',
  Dockerfile: '#384d54',
};

function getLangColor(lang: string): string {
  return LANG_COLORS[lang] ?? '#6366f1';
}

// Grade calculation (GitHub-like)
function calcGrade(commits: number, prs: number, issues: number, contribs: number): string {
  const score = commits * 2 + prs * 3 + issues * 1 + contribs * 2;
  if (score >= 800) return 'S';
  if (score >= 400) return 'A+';
  if (score >= 200) return 'A';
  if (score >= 100) return 'B+';
  if (score >= 50)  return 'B';
  return 'C+';
}

// ─── Contribution Graph ───────────────────────────────────────────────────────
function ContributionGraph({ username }: { username: string }) {
  const [weeks, setWeeks] = useState<ContributionDay[][]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [streakStart, setStreakStart] = useState('');
  const [streakEnd, setStreakEnd] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        const json = await res.json();
        const days: ContributionDay[] = json.contributions ?? [];

        // total
        const tot = days.reduce((s, d) => s + d.count, 0);
        setTotal(tot);

        // streaks
        let curStreak = 0, maxStreak = 0, tempStreak = 0;
        let tempStart = '', tempEnd = '';
        let longestStart = '', longestEnd = '';

        for (let i = days.length - 1; i >= 0; i--) {
          if (days[i].count > 0) {
            if (curStreak === 0) setStreakEnd(days[i].date);
            curStreak++;
          } else {
            break;
          }
        }
        // longest streak forward
        for (let i = 0; i < days.length; i++) {
          if (days[i].count > 0) {
            if (tempStreak === 0) tempStart = days[i].date;
            tempStreak++;
            tempEnd = days[i].date;
            if (tempStreak > maxStreak) {
              maxStreak = tempStreak;
              longestStart = tempStart;
              longestEnd = tempEnd;
            }
          } else {
            tempStreak = 0;
          }
        }
        setCurrentStreak(curStreak);
        setLongestStreak(maxStreak);
        if (curStreak > 0) {
          // find streak start
          let s = 0;
          for (let i = days.length - 1; i >= 0; i--) {
            if (days[i].count > 0) { s++; } else break;
          }
          const startIdx = days.length - s;
          if (startIdx >= 0) setStreakStart(days[startIdx].date);
        }

        // build weeks grid (last 52 weeks)
        const last364 = days.slice(-364);
        const chunked: ContributionDay[][] = [];
        for (let i = 0; i < last364.length; i += 7) {
          chunked.push(last364.slice(i, i + 7));
        }
        setWeeks(chunked);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [username]);

  const fmt = (d: string) => {
    if (!d) return '';
    const dt = new Date(d);
    return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  // month labels: find first week where month changes
  const monthLabels: { label: string; col: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const m = new Date(week[0]?.date).getMonth();
    if (m !== lastMonth) {
      monthLabels.push({ label: MONTHS[m], col: wi });
      lastMonth = m;
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl border"
      style={{ background: '#111118', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <GitCommitHorizontal size={16} className="text-indigo-400" />
          <h3 className="text-sm font-semibold text-slate-300">Contribution Activity</h3>
        </div>
        {!loading && (
          <span className="text-xs text-slate-500 font-mono">{total} contributions in the last year</span>
        )}
      </div>

      {/* Streak Stats */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="p-3 rounded-xl text-center" style={{ background: '#0d0d14', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="text-xl font-bold font-mono text-white">{loading ? '—' : total}</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Total Contributions</div>
          <div className="text-[9px] text-slate-600 mt-0.5">Aug 22, 2025 – Present</div>
        </div>
        <div className="p-3 rounded-xl text-center" style={{ background: '#0d0d14', border: '1px solid rgba(99,102,241,0.2)' }}>
          <div className="flex items-center justify-center gap-1">
            <Flame size={14} className="text-indigo-400" />
            <div className="text-xl font-bold font-mono text-indigo-400">{loading ? '—' : currentStreak}</div>
          </div>
          <div className="text-[10px] text-indigo-400/70 mt-0.5">Current Streak</div>
          {!loading && streakStart && streakEnd && (
            <div className="text-[9px] text-slate-600 mt-0.5">{fmt(streakStart)} – {fmt(streakEnd)}</div>
          )}
        </div>
        <div className="p-3 rounded-xl text-center" style={{ background: '#0d0d14', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="text-xl font-bold font-mono text-white">{loading ? '—' : longestStreak}</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Longest Streak</div>
          <div className="text-[9px] text-slate-600 mt-0.5">{longestStreak > 0 ? 'All time' : '—'}</div>
        </div>
      </div>

      {/* Graph */}
      {loading ? (
        <div className="h-28 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div style={{ minWidth: '600px' }}>
            {/* Month labels */}
            <div className="flex mb-1" style={{ paddingLeft: '18px' }}>
              {monthLabels.map(({ label, col }) => (
                <div
                  key={`${label}-${col}`}
                  className="text-[9px] text-slate-600 font-mono"
                  style={{ position: 'relative', left: `${col * 13}px`, minWidth: 0 }}
                >
                  {label}
                </div>
              ))}
            </div>
            {/* Grid */}
            <div className="flex gap-0.5">
              {/* Day labels */}
              <div className="flex flex-col gap-0.5 mr-1">
                {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((d, i) => (
                  <div key={i} className="text-[9px] text-slate-700 font-mono" style={{ height: '11px', lineHeight: '11px', minWidth: '16px' }}>
                    {d}
                  </div>
                ))}
              </div>
              {/* Cells */}
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-0.5">
                  {week.map((day, di) => (
                    <div
                      key={di}
                      title={`${day.date}: ${day.count} contributions`}
                      style={{
                        width: '11px',
                        height: '11px',
                        borderRadius: '2px',
                        background: LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0],
                        cursor: 'default',
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
            {/* Legend */}
            <div className="flex items-center gap-1 mt-2 justify-end">
              <span className="text-[9px] text-slate-700">Less</span>
              {[0, 1, 2, 3, 4].map(l => (
                <div key={l} style={{ width: '10px', height: '10px', borderRadius: '2px', background: LEVEL_COLORS[l] }} />
              ))}
              <span className="text-[9px] text-slate-700">More</span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// ─── GitHub Stats Card ────────────────────────────────────────────────────────
function GitHubStatsCard({ username, stats, loading }: {
  username: string;
  stats: GitHubStatsData | null;
  loading: boolean;
}) {
  const grade = stats ? calcGrade(stats.totalCommits, stats.totalPRs, stats.totalIssues, stats.contributedTo) : '—';

  // Grade ring
  const gradePercent: Record<string, number> = {
    'S': 100, 'A+': 88, 'A': 75, 'B+': 62, 'B': 50, 'C+': 38,
  };
  const pct = gradePercent[grade] ?? 0;
  const r = 32, circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  const statRows = [
    { icon: <Star size={13} className="text-yellow-400" />, label: 'Total Stars Earned:', value: stats?.totalStars ?? 0 },
    { icon: <GitCommitHorizontal size={13} className="text-green-400" />, label: 'Total Commits (last year):', value: stats?.totalCommits ?? 0 },
    { icon: <GitPullRequest size={13} className="text-blue-400" />, label: 'Total PRs:', value: stats?.totalPRs ?? 0 },
    { icon: <AlertCircle size={13} className="text-orange-400" />, label: 'Total Issues:', value: stats?.totalIssues ?? 0 },
    { icon: <Users size={13} className="text-purple-400" />, label: 'Contributed to (last year):', value: stats?.contributedTo ?? 0 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, #111118 0%, #0d1117 100%)',
        border: '1px solid rgba(99,102,241,0.2)',
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <GithubIcon size={16} className="text-indigo-400" />
            <h3 className="text-sm font-semibold" style={{ color: '#58a6ff' }}>
              Devansh Negi's GitHub Stats
            </h3>
          </div>
          {loading ? (
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-4 rounded animate-pulse" style={{ background: 'rgba(255,255,255,0.05)' }} />
              ))}
            </div>
          ) : (
            <div className="space-y-2.5">
              {statRows.map((row) => (
                <div key={row.label} className="flex items-center gap-2 text-xs">
                  {row.icon}
                  <span className="text-slate-400 font-medium">{row.label}</span>
                  <span className="font-bold font-mono text-slate-200 ml-auto">{row.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Grade ring */}
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <div className="relative" style={{ width: '80px', height: '80px' }}>
            <svg width="80" height="80" viewBox="0 0 80 80" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="40" cy="40" r={r} fill="none" stroke="#1e1e2e" strokeWidth="6" />
              <circle
                cx="40" cy="40" r={r} fill="none"
                stroke="url(#gradeGrad)" strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circ}`}
                style={{ transition: 'stroke-dasharray 1s ease' }}
              />
              <defs>
                <linearGradient id="gradeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold font-mono text-indigo-300">{grade}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Most Used Languages ──────────────────────────────────────────────────────
function MostUsedLanguages({ repos, loading }: { repos: any[] | undefined; loading: boolean }) {
  const langMap: Record<string, number> = {};
  repos?.forEach((r) => {
    if (r.language) langMap[r.language] = (langMap[r.language] ?? 0) + 1;
  });

  const total = Object.values(langMap).reduce((s, v) => s + v, 0) || 1;
  const langs = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({ name, count, pct: (count / total) * 100 }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="p-6 rounded-2xl"
      style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Code2 size={16} className="text-indigo-400" />
        <h3 className="text-sm font-semibold text-slate-300">Most Used Languages</h3>
      </div>

      {loading ? (
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-3 rounded animate-pulse" style={{ background: 'rgba(255,255,255,0.05)' }} />
          ))}
        </div>
      ) : (
        <>
          {/* Segmented bar */}
          <div className="flex rounded-full overflow-hidden h-2.5 mb-4">
            {langs.map((l) => (
              <div
                key={l.name}
                style={{ width: `${l.pct}%`, background: getLangColor(l.name) }}
                title={`${l.name}: ${l.pct.toFixed(1)}%`}
              />
            ))}
          </div>
          {/* Legend */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {langs.map((l) => (
              <div key={l.name} className="flex items-center gap-1.5 text-xs">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: getLangColor(l.name) }} />
                <span className="text-slate-400">{l.name}</span>
                <span className="text-slate-600 ml-auto font-mono text-[10px]">{l.pct.toFixed(2)}%</span>
              </div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function GitHubSection() {
  const { data: user, isLoading: userLoading, isError: userError } = useGitHubUser(personal.githubUsername);
  const { data: repos, isLoading: reposLoading } = useGitHubRepos(personal.githubUsername);

  const topRepos = repos
    ? [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6)
    : [];

  // Aggregate stats
  const stats: GitHubStatsData | null = repos && user ? {
    totalStars: repos.reduce((s, r) => s + r.stargazers_count, 0),
    totalCommits: 146, // from GitHub stats image (API doesn't expose easily)
    totalPRs: 20,      // from GitHub stats image
    totalIssues: 0,
    contributedTo: 2,
  } : null;

  return (
    <section id="github" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Open Source"
          title="GitHub"
          titleAccent="Activity"
          description="Real-time data pulled from the GitHub API — repositories, languages, and contribution patterns."
        />

        {userError ? (
          <div className="text-center py-16 text-slate-500">
            <GithubIcon size={40} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">GitHub API rate limit reached. View profile directly.</p>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
            >
              <GithubIcon size={14} />
              View GitHub Profile
            </a>
          </div>
        ) : (
          <>
            {/* Top row: Stats card + Languages */}
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <GitHubStatsCard
                username={personal.githubUsername}
                stats={stats}
                loading={userLoading || reposLoading}
              />
              <MostUsedLanguages repos={repos} loading={reposLoading} />
            </div>

            {/* Contribution Graph */}
            <div className="mb-6">
              <ContributionGraph username={personal.githubUsername} />
            </div>

            {/* User overview stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {userLoading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="p-5 rounded-xl bg-[#111118] border border-white/6 animate-pulse h-24" />
                  ))
                : user && [
                    { label: 'Public Repos', value: user.public_repos, icon: <Zap size={14} className="text-indigo-400" /> },
                    { label: 'Followers', value: user.followers, icon: <Users size={14} className="text-violet-400" /> },
                    { label: 'Following', value: user.following, icon: <Users size={14} className="text-cyan-400" /> },
                    { label: 'Languages', value: Object.keys(
                        repos?.reduce((m: Record<string,number>, r) => {
                          if (r.language) m[r.language] = 1;
                          return m;
                        }, {}) ?? {}
                      ).length, icon: <Code2 size={14} className="text-emerald-400" /> },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="p-5 rounded-xl bg-[#111118] border border-white/6 text-center"
                    >
                      <div className="flex justify-center mb-1">{stat.icon}</div>
                      <div className="text-2xl font-bold font-mono text-white">{stat.value}</div>
                      <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
            </div>

            {/* Top repos */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {reposLoading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#111118] border border-white/6 animate-pulse h-28" />
                  ))
                : topRepos.map((repo, i) => (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="p-4 rounded-xl bg-[#111118] border border-white/6 hover:border-indigo-500/30 transition-all duration-300 group block"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors truncate">
                          {repo.name}
                        </span>
                        <ExternalLink size={12} className="text-slate-600 group-hover:text-indigo-400 flex-shrink-0 mt-0.5 transition-colors" />
                      </div>
                      <p className="text-xs text-slate-600 mb-3 line-clamp-2 leading-relaxed">
                        {repo.description ? truncate(repo.description, 70) : 'No description'}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-slate-600">
                          {repo.language && (
                            <span className="flex items-center gap-1">
                              <span
                                className="w-2 h-2 rounded-full"
                                style={{ background: getLanguageColor(repo.language) }}
                              />
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Star size={11} />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork size={11} />
                            {repo.forks_count}
                          </span>
                        </div>
                        <span className="text-xs text-slate-700">{formatDate(repo.updated_at)}</span>
                      </div>
                    </motion.a>
                  ))}
            </div>

            {/* View all link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/8 hover:border-indigo-500/30 text-slate-400 hover:text-white text-sm font-medium transition-all duration-200"
              >
                <GithubIcon size={15} />
                View all repositories on GitHub
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
