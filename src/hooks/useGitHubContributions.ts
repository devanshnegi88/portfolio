import { useQuery } from '@tanstack/react-query';

async function fetchContributions(username: string) {
  const res = await fetch(`/api/github-contributions?username=${encodeURIComponent(username)}`);
  if (!res.ok) throw new Error('Failed to fetch contributions');
  const data = await res.json();
  return data.contributions ?? 0;
}

export function useGitHubContributions(username?: string) {
  return useQuery({
    queryKey: ['github-contributions', username],
    queryFn: () => fetchContributions(username || ''),
    enabled: Boolean(username),
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 1,
  });
}
