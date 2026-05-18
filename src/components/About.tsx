'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const pillars = [
  { label: 'SDN', body: 'LXD, MAAS, OVN, Kubernetes — and the kernel network config underneath all of it.' },
  { label: 'Systems', body: 'Low-latency C++ at Layer 4, runtime profiling at 2,500 calls/second, Satellite and ORAN stacks.' },
  { label: 'Research', body: 'MSc dissertation on neuromorphic routing for NoC architectures. ML applied to network traffic analysis.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="max-w-5xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20">
        {/* Label */}
        <div className="pt-1">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            01 — About
          </motion.p>
        </div>

        {/* Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl text-ink-900 mb-6 leading-snug"
          >
            I care about{' '}
            <em>how things work</em>{' '}
            at the lowest level.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-500 space-y-4 leading-relaxed mb-12"
          >
            <p>
              At Hughes Systique I worked on Layer 4 for Satellite Communication and ORAN stacks,
              the kind of work where a 1% improvement in call success rate means something real.
              I wrote critical code modules in C++ and ran profilers at 2,500 calls per second,
              and fixed faults I couldn&apos;t reproduce in a simulator.
            </p>
            <p>
              My MSc at Manchester pushed me towards neuromorphic computing and machine learning.
              I&apos;m equally comfortable in a terminal as I am in a research paper.
            </p>
            <p>
              I am currently working on a personal CLI tool to support Canonical&apos;s networking
              suite (LXD, MAAS, OVN and K8s), allowing them to supervise kernel network config
              and obtain resources without clashes.
            </p>
          </motion.div>

          <div className="space-y-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex gap-6 items-start pt-6 border-t border-ink-100"
              >
                <span className="font-display italic text-ink-300 text-sm w-24 shrink-0 pt-0.5">
                  {p.label}
                </span>
                <p className="text-ink-500 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
