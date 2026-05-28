'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '@/lib/data';

function EduEntry({ item, i }: { item: (typeof education)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="py-7 border-t border-ink-100"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="font-display text-xl text-ink-900">
            <em>{item.institution}</em>
          </h3>
          <p className="text-ink-500 text-sm mt-0.5">
            {item.degree} · {item.field}
          </p>
        </div>
        <span className="font-mono text-xs text-ink-300 shrink-0">{item.period}</span>
      </div>

      <ul className="space-y-1">
        {item.achievements.map((a) => (
          <li key={a} className="text-ink-400 text-sm flex gap-3">
            <span className="text-ink-200 shrink-0">—</span>
            {a}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24 border-t border-ink-100">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20">
        <div className="pt-1 relative">
          <span aria-hidden className="absolute top-0 right-0 font-display font-bold text-[5rem] leading-none text-ink-100 select-none pointer-events-none">
            04
          </span>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: -6 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label relative z-10"
          >
            04 — Education
          </motion.p>
        </div>

        <div>
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: '105%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-3xl md:text-4xl text-ink-900 leading-snug"
            >
              Academic background
            </motion.h2>
          </div>

          <div>
            {education.map((item, i) => (
              <EduEntry key={item.institution} item={item} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
