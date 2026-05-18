'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { career } from '@/lib/data';

function CareerCard({ item, i }: { item: (typeof career)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />

      {/* Node */}
      <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-glow-cyan ring-4 ring-bg" />

      <div className="glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-cyan">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-slate-100 font-semibold text-lg">{item.role}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-primary font-mono text-sm">{item.company}</span>
              {item.current && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-success/15 text-success border border-success/30">
                  current
                </span>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-slate-400 text-xs">{item.period}</div>
            <div className="font-mono text-slate-500 text-xs mt-0.5">{item.location}</div>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-4">
          {item.description.map((d, j) => (
            <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
              <span className="text-primary mt-1 shrink-0">▹</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Career() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="career" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">03. career</p>
          <h2 className="section-title text-slate-100">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4" />
        </motion.div>

        <div className="max-w-3xl">
          {career.map((item, i) => (
            <CareerCard key={item.company + item.period} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
