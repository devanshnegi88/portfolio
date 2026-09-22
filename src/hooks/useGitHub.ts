import { useQuery } from '@tanstack/react-query';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
}

async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error('GitHub user fetch failed');
  return res.json();
}

async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=20&type=public`
  );
  if (!res.ok) throw new Error('GitHub repos fetch failed');
  return res.json();
}

export function useGitHubUser(username: string) {
  return useQuery({
    queryKey: ['github-user', username],
    queryFn: () => fetchGitHubUser(username),
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
}

export function useGitHubRepos(username: string) {
  return useQuery({
    queryKey: ['github-repos', username],
    queryFn: () => fetchGitHubRepos(username),
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
}
