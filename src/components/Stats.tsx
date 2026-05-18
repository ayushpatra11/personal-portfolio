// Server component — data fetched at build time, baked into static HTML.
import { fetchGitHubStats } from '@/lib/github';
import { GITHUB_USERNAME, LEETCODE_USERNAME } from '@/lib/data';
import StatsClient from './StatsClient';

export default async function Stats() {
  const gh = await fetchGitHubStats(GITHUB_USERNAME);
  return <StatsClient gh={gh} leetcodeUsername={LEETCODE_USERNAME} />;
}
