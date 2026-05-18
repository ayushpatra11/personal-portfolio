'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GITHUB_USERNAME, LEETCODE_USERNAME } from '@/lib/data';

const theme = 'transparent';
const primaryColor = '22d3ee';
const secondaryColor = '818cf8';
const textColor = '94a3b8';
const bgColor = '0f172a';

function StatCard({
  title,
  children,
  i,
}: {
  title: string;
  children: React.ReactNode;
  i: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      className="glass rounded-2xl p-6 hover:shadow-glow-cyan transition-all duration-300"
    >
      <h3 className="font-mono text-sm text-slate-400 mb-4 tracking-widest uppercase">{title}</h3>
      {children}
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const ghStatsUrl =
    `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}` +
    `&show_icons=true&theme=${theme}&hide_border=true` +
    `&title_color=${primaryColor}&icon_color=${secondaryColor}&text_color=${textColor}&bg_color=${bgColor}00`;

  const ghLangUrl =
    `https://github-readme-stats.vercel.app/api/top-langs?username=${GITHUB_USERNAME}` +
    `&layout=compact&theme=${theme}&hide_border=true` +
    `&title_color=${primaryColor}&text_color=${textColor}&bg_color=${bgColor}00`;

  const ghStreakUrl =
    `https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USERNAME}` +
    `&theme=transparent&hide_border=true` +
    `&ring=${primaryColor}&fire=${secondaryColor}&currStreakLabel=${primaryColor}&sideLabels=${textColor}&dates=${textColor}&stroke=${primaryColor}20`;

  const leetUrl =
    `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}` +
    `?theme=dark&font=source_code_pro&ext=heatmap` +
    `&border=0&radius=12`;

  return (
    <section id="stats" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">06. stats</p>
          <h2 className="section-title text-slate-100">
            By The <span className="gradient-text">Numbers</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub stats */}
          <StatCard title="GitHub Activity" i={0}>
            <div className="space-y-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ghStatsUrl}
                alt="GitHub Stats"
                className="w-full rounded-lg"
                loading="lazy"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ghStreakUrl}
                alt="GitHub Streak"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </StatCard>

          {/* Top languages */}
          <StatCard title="Top Languages" i={1}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ghLangUrl}
              alt="Top Languages"
              className="w-full rounded-lg mb-4"
              loading="lazy"
            />
            <div className="mt-4 space-y-2">
              {[
                { lang: 'C++', pct: 45, color: 'bg-blue-500' },
                { lang: 'Python', pct: 30, color: 'bg-yellow-400' },
                { lang: 'TypeScript', pct: 15, color: 'bg-secondary' },
                { lang: 'Go', pct: 10, color: 'bg-primary' },
              ].map(({ lang, pct, color }) => (
                <div key={lang} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-slate-400 w-24">{lang}</span>
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${pct}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full ${color} rounded-full`}
                    />
                  </div>
                  <span className="font-mono text-xs text-slate-500 w-8">{pct}%</span>
                </div>
              ))}
            </div>
          </StatCard>

          {/* LeetCode */}
          <StatCard title="LeetCode" i={2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={leetUrl}
              alt="LeetCode Stats"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </StatCard>

          {/* Highlights */}
          <StatCard title="Career Highlights" i={3}>
            <div className="space-y-4">
              {[
                { value: '97%', label: 'Call success rate (Layer 4 C++ algo)', color: 'text-primary' },
                { value: '99.1%', label: 'Call completion under 2,500 calls/sec', color: 'text-success' },
                { value: '~30%', label: 'Efficiency gain via calibration', color: 'text-secondary' },
                { value: '87%', label: 'ML intrusion detection accuracy', color: 'text-warn' },
                { value: '92.6%', label: 'CNN CIFAR classification accuracy', color: 'text-accent' },
              ].map(({ value, label, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className={`font-mono font-bold text-xl ${color} w-20 shrink-0`}>{value}</span>
                  <span className="text-slate-400 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </StatCard>
        </div>
      </div>
    </section>
  );
}
