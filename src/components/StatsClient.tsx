'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { GitHubStats } from '@/lib/github';

const highlights = [
  { value: '97%', label: 'Call success rate — Layer 4 C++ allocation algorithm' },
  { value: '99.1%', label: 'Call completion under 2,500 calls/second load' },
  { value: '~30%', label: 'Efficiency gain from calibration safeguards' },
  { value: '87%', label: 'ML intrusion detection accuracy (UNSW-NB15 dataset)' },
  { value: '92.6%', label: 'CNN image classification accuracy on CIFAR' },
];

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="py-4 border-t border-ink-100">
      <div className="font-display italic text-2xl text-ink-900">{value}</div>
      <div className="text-xs text-ink-300 mt-0.5">{label}</div>
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
                href={`https://github.com/${gh ? 'ayushpatra11' : 'ayushpatra11'}`}
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

            {/* Language breakdown */}
            {gh.topLanguages.length > 0 && (
              <div className="mt-6 pt-5 border-t border-ink-100">
                <p className="text-xs text-ink-300 mb-3 tracking-wide uppercase font-mono">Top languages</p>
                <div className="space-y-2.5">
                  {gh.topLanguages.map(({ lang, pct }) => (
                    <div key={lang} className="flex items-center gap-4">
                      <span className="text-sm text-ink-500 w-24 shrink-0">{lang}</span>
                      <div className="flex-1 h-px bg-ink-100 relative">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={inView ? { scaleX: 1 } : {}}
                          transition={{ duration: 0.8, delay: 0.7 }}
                          style={{ width: `${pct}%`, transformOrigin: 'left' }}
                          className="absolute top-0 left-0 h-px bg-ink-500"
                        />
                      </div>
                      <span className="font-mono text-xs text-ink-300 w-8 text-right">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <p className="section-label mb-4">LeetCode</p>
            <a
              href={`https://leetcode.com/${leetcodeUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col gap-3 p-6 border border-ink-100 rounded-sm hover:border-ink-300 transition-colors duration-200 group w-full max-w-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-display italic text-ink-700 text-lg">{leetcodeUsername}</span>
                <svg
                  className="w-4 h-4 text-ink-300 group-hover:text-ink-700 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-xs text-ink-300">View full profile &amp; solve history on LeetCode →</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
