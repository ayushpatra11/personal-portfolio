'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '@/lib/data';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24 border-t border-ink-100">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20">
        <div className="pt-1">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: -6 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            05 — Skills
          </motion.p>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl text-ink-900 mb-8 leading-snug"
          >
            Tools &amp; technologies
          </motion.h2>

          <div className="space-y-8">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + ci * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 pt-5 border-t border-ink-100"
              >
                <span className="font-display italic text-ink-300 text-sm w-36 shrink-0 pt-0.5">
                  {cat.name}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, si) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.25, delay: 0.3 + ci * 0.08 + si * 0.03 }}
                      className="tag"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
