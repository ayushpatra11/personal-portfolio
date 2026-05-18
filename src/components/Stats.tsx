'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GITHUB_USERNAME, LEETCODE_USERNAME } from '@/lib/data';

const highlights = [
  { value: '97%', label: 'Call success rate — Layer 4 C++ allocation algorithm' },
  { value: '99.1%', label: 'Call completion under 2,500 calls/second load' },
  { value: '~30%', label: 'Efficiency gain from calibration safeguards' },
  { value: '87%', label: 'ML intrusion detection accuracy (UNSW-NB15 dataset)' },
  { value: '92.6%', label: 'CNN image classification accuracy on CIFAR' },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const ghStats =
    `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}` +
    `&show_icons=true&hide_border=true&bg_color=f7f4ef&title_color=1a1815&icon_color=6b6660&text_color=6b6660&hide_title=false`;

  const ghLangs =
    `https://github-readme-stats.vercel.app/api/top-langs?username=${GITHUB_USERNAME}` +
    `&layout=compact&hide_border=true&bg_color=f7f4ef&title_color=1a1815&text_color=6b6660`;

  const leetUrl =
    `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=light&font=source_code_pro&ext=heatmap&border=0&radius=4`;

  return (
    <section id="stats" className="max-w-5xl mx-auto px-6 py-24 border-t border-ink-100">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20">
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

          {/* Career metrics */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <p className="section-label mb-4">Career highlights</p>
            <div className="space-y-0">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-baseline gap-6 py-3.5 border-t border-ink-100"
                >
                  <span className="font-display italic text-2xl text-ink-900 w-20 shrink-0">
                    {h.value}
                  </span>
                  <span className="text-ink-500 text-sm">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-10"
          >
            <p className="section-label mb-4">GitHub</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ghStats} alt="GitHub stats" className="w-full rounded" loading="lazy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ghLangs} alt="Top languages" className="w-full rounded" loading="lazy" />
            </div>
          </motion.div>

          {/* LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="section-label mb-4">LeetCode</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={leetUrl} alt="LeetCode stats" className="w-full max-w-md rounded" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
