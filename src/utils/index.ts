export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function getLanguageColor(lang: string): string {
  const colors: Record<string, string> = {
    TypeScript: '#3178C6',
    JavaScript: '#F7DF1E',
    Python: '#3776AB',
    HTML: '#E34F26',
    CSS: '#1572B6',
    Vue: '#4FC08D',
    Rust: '#CE422B',
    Go: '#00ADD8',
    Java: '#B07219',
    Shell: '#89E051',
  };
  return colors[lang] ?? '#6366F1';
}

export function truncate(str: string, n: number): string {
  return str.length > n ? str.slice(0, n - 1) + '…' : str;
}
