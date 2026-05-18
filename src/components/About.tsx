'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const highlights = [
  {
    icon: '🌐',
    title: 'Networking',
    body: 'Deep interest in TCP/IP internals, BGP routing, DNS, HTTP/3 and the protocols that power the modern internet.',
  },
  {
    icon: '⚙️',
    title: 'Systems',
    body: 'Passionate about low-level programming — kernel internals, memory management, high-performance I/O, and eBPF.',
  },
  {
    icon: '🚀',
    title: 'Performance',
    body: 'Obsessed with latency. From zero-copy networking to cache-friendly data structures, every nanosecond counts.',
  },
  {
    icon: '🔬',
    title: 'Research',
    body: 'CERN CMS Trainee, MSc graduate — combining academic rigour with engineering pragmatism.',
  },
];

function Card({ icon, title, body, i }: { icon: string; title: string; body: string; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="glass glass-hover rounded-2xl p-6 transition-all duration-300"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-slate-100 font-semibold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">01. about</p>
          <h2 className="section-title text-slate-100">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-slate-400 leading-relaxed"
          >
            <p>
              I'm <span className="text-slate-100 font-medium">Ayush Patra</span>, a software
              engineer with an MSc in Computer Science (2025) and a deep fascination for
              everything that happens <em>below the application layer</em>. From how a DNS
              query resolves in milliseconds to how BGP routes traffic across the entire
              internet — I love it all.
            </p>
            <p>
              My journey has taken me from writing full-stack web apps to digging into kernel
              networking and high-performance systems. I've had the privilege of interviewing
              with <span className="text-blue-400">Google</span>,{' '}
              <span className="text-orange-400">Cloudflare</span>, and{' '}
              <span className="text-purple-400">Canonical</span> — companies that define the
              infrastructure the internet runs on.
            </p>
            <p>
              When I'm not writing code, I'm reading RFCs, experimenting with network
              simulators, or contributing to open-source networking tools.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/ayushpatra11"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-patra-31b36119b/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-secondary hover:text-secondary/80 transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <Card key={h.title} {...h} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
