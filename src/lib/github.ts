interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  topLanguages: { lang: string; pct: number }[];
}

// Fallback shown if the API is rate-limited during build
const FALLBACK: GitHubStats = {
  publicRepos: 20,
  followers: 0,
  following: 0,
  totalStars: 0,
  topLanguages: [
    { lang: 'C++', pct: 38 },
    { lang: 'Python', pct: 28 },
    { lang: 'JavaScript', pct: 18 },
    { lang: 'TypeScript', pct: 10 },
    { lang: 'HTML', pct: 6 },
  ],
};

export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  const headers: HeadersInit = {
    'User-Agent': 'portfolio-build',
    Accept: 'application/vnd.github.v3+json',
    ...(process.env.GITHUB_TOKEN
      ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
      : {}),
  };

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=stars`, { headers }),
    ]);

    if (!userRes.ok) return FALLBACK;

    const user: GitHubUser = await userRes.json();
    const repos: GitHubRepo[] = reposRes.ok ? await reposRes.json() : [];

    const own = repos.filter((r) => !r.fork);
    const totalStars = own.reduce((s, r) => s + r.stargazers_count, 0);

    const counts: Record<string, number> = {};
    for (const r of own) {
      if (r.language) counts[r.language] = (counts[r.language] ?? 0) + 1;
    }
    const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
    const topLanguages = Object.entries(counts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([lang, count]) => ({ lang, pct: Math.round((count / total) * 100) }));

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      topLanguages,
    };
  } catch {
    return FALLBACK;
  }
}
