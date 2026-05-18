'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const roles = [
  'Software Engineer',
  'Network Enthusiast',
  'Systems Programmer',
  'Open Source Contributor',
];

function TypeWriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, index]);

  return (
    <span className="text-primary font-mono">
      {displayed}
      <span className="blink text-primary">▋</span>
    </span>
  );
}

const badges = [
  { label: 'Google', color: 'text-blue-400 border-blue-400/30' },
  { label: 'Cloudflare', color: 'text-orange-400 border-orange-400/30' },
  { label: 'Canonical', color: 'text-purple-400 border-purple-400/30' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 z-10">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-primary text-sm tracking-[0.25em] uppercase mb-4"
          >
            $ whoami
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-none"
          >
            <span className="gradient-text glow-text-cyan">Ayush</span>
            <br />
            <span className="text-slate-100">Patra</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl mb-6 h-8"
          >
            <TypeWriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-base mb-4 max-w-md leading-relaxed"
          >
            Passionate about computer networking, systems programming, and building
            high-performance infrastructure. MSc CS graduate who loves going deep into
            how the internet actually works.
          </motion.p>

          {/* Interview badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            <span className="text-slate-500 text-xs font-mono self-center">interviewed @</span>
            {badges.map((b) => (
              <span
                key={b.label}
                className={`font-mono text-xs px-3 py-1 rounded-full border ${b.color} glass`}
              >
                {b.label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-bg font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-glow-cyan font-mono text-sm"
            >
              View Projects →
            </a>
            <a
              href="#stats"
              className="px-6 py-3 glass glass-hover text-slate-200 rounded-lg font-mono text-sm transition-all duration-200"
            >
              View Stats
            </a>
          </motion.div>
        </div>

        {/* Photo / visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Rings */}
            <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse-slow scale-110" />
            <div className="absolute inset-0 rounded-full border border-primary/20 scale-105" />
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 glow-cyan" />

            {/* Photo */}
            <div className="absolute inset-3 rounded-full overflow-hidden glass">
              <Image
                src="/images/me.png"
                alt="Ayush Patra"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 rounded-full bg-primary shadow-glow-cyan" />
            </motion.div>
          </div>

          {/* Floating stat chips */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-4 -right-4 glass px-3 py-2 rounded-xl text-xs font-mono"
          >
            <div className="text-primary font-bold text-sm">8.60</div>
            <div className="text-slate-400">CGPA</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute bottom-8 -left-4 glass px-3 py-2 rounded-xl text-xs font-mono"
          >
            <div className="text-success font-bold text-sm">MSc</div>
            <div className="text-slate-400">CS 2025</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-slate-600 text-[10px] tracking-[0.3em] uppercase">scroll</span>
        <motion.div
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
