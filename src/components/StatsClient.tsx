'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { GitHubStats } from '@/lib/github';

const highlights = [
  { value: '97%', label: 'Call success rate — Layer 4 C++ allocation algorithm' },
  { value: '99.1%', label: 'Call completion rate under 2,500 calls/second load' },
  { value: '~30%', label: 'Calibration efficiency gain from resource safeguards' },
  { value: '87%', label: 'ML intrusion detection accuracy on UNSW-NB15 dataset' },
  { value: '92.6%', label: 'CNN image classification accuracy on CIFAR' },
];

interface LeetCodeData {
  total: number;
  easy: number;
  medium: number;
  hard: number;
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="py-4 border-t border-ink-100">
      <div className="font-display italic text-2xl text-ink-900">{value}</div>
      <div className="text-xs text-ink-300 mt-0.5">{label}</div>
    </div>
  );
}

function LeetCodeCard({ username }: { username: string }) {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

    fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`, {
      signal: controller.signal,
    })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) =>
        setData({
          total: d.solvedProblem,
          easy: d.easySolved,
          medium: d.mediumSolved,
          hard: d.hardSolved,
        })
      )
      .catch(() => setFailed(true))
      .finally(() => clearTimeout(timeout));

    return () => controller.abort();
  }, [username]);

  return (
    <div className="border border-ink-100 rounded-sm p-6 max-w-sm">
      <div className="flex items-baseline justify-between mb-1">
        <a
          href={`https://leetcode.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display italic text-ink-700 text-lg hover:text-ink-900 transition-colors"
        >
          {username}
        </a>
        <span className="text-xs text-ink-300">leetcode.com ↗</span>
      </div>

      {!data && !failed && (
        <div className="pt-5 border-t border-ink-100 space-y-3 mt-4">
          <div className="h-8 bg-ink-100/60 rounded animate-pulse w-16" />
          <div className="h-3 bg-ink-100/60 rounded animate-pulse w-28" />
          <div className="flex gap-6 pt-3">
            {[20, 16, 12].map((w) => (
              <div key={w} className={`h-3 bg-ink-100/60 rounded animate-pulse w-${w}`} />
            ))}
          </div>
        </div>
      )}

      {data && (
        <>
          <div className="py-4 border-t border-ink-100 mt-4">
            <div className="font-display italic text-3xl text-ink-900">{data.total}</div>
            <div className="text-xs text-ink-300 mt-0.5 tracking-wide uppercase font-mono">problems solved</div>
          </div>
          <div className="grid grid-cols-3 pt-4 border-t border-ink-100 gap-2">
            <div>
              <div className="font-mono text-sm text-ink-700">{data.easy}</div>
              <div className="text-xs text-ink-300 mt-0.5">Easy</div>
            </div>
            <div>
              <div className="font-mono text-sm text-ink-700">{data.medium}</div>
              <div className="text-xs text-ink-300 mt-0.5">Medium</div>
            </div>
            <div>
              <div className="font-mono text-sm text-ink-700">{data.hard}</div>
              <div className="text-xs text-ink-300 mt-0.5">Hard</div>
            </div>
          </div>
        </>
      )}

      {failed && (
        <a
          href={`https://leetcode.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block pt-5 border-t border-ink-100 mt-4 text-sm text-ink-500 hover:text-ink-900 transition-colors"
        >
          View solve history on LeetCode →
        </a>
      )}
    </div>
  );
}

export default function StatsClient({
  gh,
  leetcodeUsername,
}: {
  gh: GitHubStats;
  leetcodeUsername: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stats" className="max-w-5xl mx-auto px-6 py-24 border-t border-ink-100">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20">
        {/* Label */}
        <div className="pt-1">
          <motion.p
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            06 — Stats
          </motion.p>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl text-ink-900 mb-10 leading-snug"
          >
            By the numbers
          </motion.h2>

          {/* Career highlights */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-14"
          >
            <p className="section-label mb-1">Career highlights</p>
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="flex items-baseline gap-6 py-3.5 border-t border-ink-100"
              >
                <span className="font-display italic text-2xl text-ink-900 w-20 shrink-0">{h.value}</span>
                <span className="text-ink-500 text-sm">{h.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-14"
          >
            <p className="section-label mb-1">
              GitHub —{' '}
              <a
                href="https://github.com/ayushpatra11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-400 hover:text-ink-900 transition-colors border-b border-ink-200 pb-px normal-case"
              >
                github.com/ayushpatra11
              </a>
            </p>

            <div className="grid grid-cols-3 gap-0 mt-2">
              <Stat label="public repos" value={gh.publicRepos} />
              <Stat label="total stars" value={gh.totalStars} />
              <Stat label="followers" value={gh.followers} />
            </div>

            {/* GitHub contribution graph */}
            <div className="mt-8 pt-5 border-t border-ink-100">
              <p className="text-xs text-ink-300 mb-4 tracking-wide uppercase font-mono">Contribution activity</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/2d6a4f/ayushpatra11"
                alt="GitHub contribution graph"
                className="w-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <p className="section-label mb-4">LeetCode</p>
            <LeetCodeCard username={leetcodeUsername} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
