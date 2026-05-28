'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const pillars = [
  { label: 'Networking', body: 'TCP/IP, BGP, OSPF, ORAN — focused on the protocol layers where system performance is actually decided.' },
  { label: 'Systems', body: 'Low-latency C++ at Layer 4, runtime profiling under 2,500 calls/second, satellite communication and ORAN stacks.' },
  { label: 'Research', body: 'MSc dissertation on neuromorphic routing for NoC architectures. Machine learning applied to network traffic classification.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="max-w-5xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20">
        {/* Label */}
        <div className="pt-1 relative">
          <span aria-hidden className="absolute top-0 right-0 font-display font-bold text-[5rem] leading-none text-ink-100 select-none pointer-events-none">
            01
          </span>
          <motion.p
            initial={{ opacity: 0, x: -6 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label relative z-10"
          >
            01 — About
          </motion.p>
        </div>

        {/* Content */}
        <div>
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: '105%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-3xl md:text-4xl text-ink-900 leading-snug"
            >
              I care about{' '}
              <em>how things work</em>{' '}
              at the lowest level.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-500 space-y-4 leading-relaxed mb-12"
          >
            <p>
              At Hughes Systique, I worked on Layer 4 for satellite communication and ORAN
              stacks — the kind of work where a 1% improvement in call success rate means
              something real. I wrote critical C++ modules, profiled under loads of 2,500 calls
              per second, and fixed faults that could not be reproduced in a simulator.
            </p>
            <p>
              My MSc at Manchester deepened my interest in neuromorphic computing and machine
              learning. I am equally at home in a terminal as I am in a research paper.
            </p>
            <p>
              I am currently building netvisor, a personal CLI tool for orchestrating kernel
              network configuration across environments that use LXD, MAAS, OVN and Kubernetes
              — designed to surface conflicts and prevent resource allocation clashes.
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
