'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/lib/data';

function ProjectRow({ project, i }: { project: (typeof projects)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      className="group grid md:grid-cols-[1fr_auto] gap-4 items-start py-7 border-t border-ink-100 hover:bg-cream-200/40 -mx-4 px-4 rounded transition-colors duration-300"
    >
      <div>
        <div className="flex items-baseline gap-3 mb-2">
          <span className="font-mono text-[10px] text-ink-300 group-hover:text-ink-500 transition-colors duration-300">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="font-display text-lg text-ink-900 group-hover:italic transition-all duration-200">
            {project.title}
          </h3>
        </div>
        <p className="text-ink-500 text-sm leading-relaxed mb-3 pl-7">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 pl-7">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-ink-300 hover:text-ink-900 transition-colors duration-200 shrink-0 mt-1 tracking-wide"
        >
          GitHub ↗
        </a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24 border-t border-ink-100">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20">
        <div className="pt-1 relative">
          <span aria-hidden className="absolute top-0 right-0 font-display font-bold text-[5rem] leading-none text-ink-100 select-none pointer-events-none">
            02
          </span>
          <motion.p
            initial={{ opacity: 0, x: -6 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            ref={ref}
            transition={{ duration: 0.5 }}
            className="section-label relative z-10"
          >
            02 — Projects
          </motion.p>
        </div>

        <div>
          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: '105%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-3xl md:text-4xl text-ink-900 leading-snug"
            >
              Selected work
            </motion.h2>
          </div>

          <div>
            {projects.map((p, i) => (
              <ProjectRow key={p.title} project={p} i={i} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm text-ink-300"
          >
            More on{' '}
            <a
              href="https://github.com/ayushpatra11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-500 hover:text-ink-900 transition-colors border-b border-ink-200 pb-px"
            >
              github.com/ayushpatra11
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
