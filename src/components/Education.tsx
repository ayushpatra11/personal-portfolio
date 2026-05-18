'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { education } from '@/lib/data';

function EduCard({ item, i }: { item: (typeof education)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      className="glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-cyan flex flex-col gap-4"
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="relative w-12 h-12 shrink-0 rounded-xl overflow-hidden glass border border-slate-700">
          <Image src={item.logo} alt={item.institution} fill className="object-contain p-1" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-slate-100 font-semibold leading-tight">{item.institution}</h3>
          <p className="text-primary font-mono text-sm mt-0.5">{item.degree}</p>
          <p className="text-slate-400 text-sm">{item.field}</p>
        </div>

        <span className="font-mono text-slate-500 text-xs shrink-0 text-right">{item.period}</span>
      </div>

      <div className="border-t border-slate-800 pt-4">
        <ul className="space-y-1.5">
          {item.achievements.map((a) => (
            <li key={a} className="flex gap-2 text-sm text-slate-400">
              <span className="text-primary shrink-0">✦</span>
              {a}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">04. education</p>
          <h2 className="section-title text-slate-100">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <EduCard key={item.institution} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
