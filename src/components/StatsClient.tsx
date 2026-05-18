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

            {/* GitHub contribution graph */}
            <div className="mt-8 pt-5 border-t border-ink-100">
              <p className="text-xs text-ink-300 mb-4 tracking-wide uppercase font-mono">Contribution activity</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/6b6660/ayushpatra11"
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
            <a
              href={`https://leetcode.com/${leetcodeUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity duration-200"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=light&font=Karma&hide=ranking&border=1&radius=4`}
                alt="LeetCode stats"
                className="w-full max-w-sm"
                loading="lazy"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
