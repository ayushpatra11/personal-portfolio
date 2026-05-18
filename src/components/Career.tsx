'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { career } from '@/lib/data';

function CareerEntry({ item, i }: { item: (typeof career)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.12 }}
      className="py-8 border-t border-ink-100"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
        <div>
          <h3 className="font-display text-xl text-ink-900">
            <em>{item.role}</em>
          </h3>
          <p className="text-ink-500 text-sm mt-0.5">{item.company} · {item.location}</p>
        </div>
        <span className="font-mono text-xs text-ink-300 shrink-0">{item.period}</span>
      </div>

      <ul className="space-y-2 mb-4">
        {item.description.map((d, j) => (
          <li key={j} className="text-ink-500 text-sm leading-relaxed flex gap-3">
            <span className="text-ink-200 mt-0.5 shrink-0">—</span>
            {d}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Career() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="career" className="max-w-5xl mx-auto px-6 py-24 border-t border-ink-100">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20">
        <div className="pt-1">
          <motion.p
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            03 — Career
          </motion.p>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl text-ink-900 mb-2 leading-snug"
          >
            Experience
          </motion.h2>

          <div>
            {career.map((item, i) => (
              <CareerEntry key={item.company + item.period} item={item} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
