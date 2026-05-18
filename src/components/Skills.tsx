'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '@/lib/data';

function SkillBadge({ skill, i }: { skill: string; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay: i * 0.04 }}
      className="font-mono text-sm px-3 py-1.5 rounded-lg glass glass-hover text-slate-300 border border-slate-700/50 hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-default"
    >
      {skill}
    </motion.span>
  );
}

function CategoryCard({
  category,
  ci,
}: {
  category: (typeof skillCategories)[0];
  ci: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: ci * 0.1 }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="text-slate-100 font-semibold">{category.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <SkillBadge key={skill} skill={skill} i={i} />
        ))}
      </div>
    </motion.div>
  );
}

// Scrolling ticker of key tools
const ticker = [
  'C++', 'Python', 'Golang', 'BGP', 'OSPF', '5G / OAI',
  'Docker', 'PyTorch', 'Linux', 'ReactJS', 'FastAPI', 'LangChain',
  'Wireshark', 'GDB', 'Valgrind', 'PostgreSQL', 'TypeScript', 'SNNTorch',
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative z-10 py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">05. skills</p>
          <h2 className="section-title text-slate-100">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <CategoryCard key={cat.name} category={cat} ci={ci} />
          ))}
        </div>

        {/* Infinite ticker */}
        <div className="relative overflow-hidden py-4 before:absolute before:left-0 before:inset-y-0 before:w-20 before:bg-gradient-to-r before:from-bg before:to-transparent before:z-10 after:absolute after:right-0 after:inset-y-0 after:w-20 after:bg-gradient-to-l after:from-bg after:to-transparent after:z-10">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4 w-max"
          >
            {[...ticker, ...ticker].map((t, i) => (
              <span
                key={i}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-primary/20 text-primary/60 shrink-0"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
