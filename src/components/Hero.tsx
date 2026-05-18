'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const marqueeItems = [
  'Software Engineer',
  'University of Manchester',
  'Hughes Systique',
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-16"
    >
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
        <div>
          <motion.p {...fade(0)} className="section-label mb-6">
            Software Engineer · Manchester, UK
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="font-display text-6xl md:text-7xl lg:text-8xl text-ink-900 leading-[1.05] mb-6"
          >
            Ayush
            <br />
            <em>Patra.</em>
          </motion.h1>

          <motion.p {...fade(0.2)} className="text-ink-500 text-lg max-w-xl leading-relaxed mb-8">
            Software engineer with a background in{' '}
            <em className="font-display italic text-ink-700">Software Defined Networking</em> —
            two years building low-latency systems for satellite communication and ORAN
            infrastructure at Hughes Systique, and an MSc in Advanced Computer Science
            from the University of Manchester.
          </motion.p>

          <motion.div {...fade(0.3)} className="flex flex-wrap gap-6 items-center">
            <a
              href="#projects"
              className="text-sm text-ink-900 border-b border-ink-900 pb-px hover:text-ink-500 hover:border-ink-500 transition-colors duration-200"
            >
              View work ↓
            </a>
            <a
              href="mailto:ayushpatra11@gmail.com"
              className="text-sm text-ink-500 hover:text-ink-900 transition-colors duration-200"
            >
              Get in touch →
            </a>
          </motion.div>
        </div>

        {/* Photo with parallax */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ y: photoY }}
          className="hidden md:block"
        >
          <div className="relative w-52 h-64 rounded-sm overflow-hidden bg-cream-200">
            <Image
              src="/images/me.png"
              alt="Ayush Patra"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Marquee ribbon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-16 border-t border-b border-ink-100 py-3 overflow-hidden"
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-0"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-mono text-[11px] text-ink-300 tracking-wide">
              {item}
              <span className="mx-8 text-ink-200">·</span>
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="flex justify-center mt-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut', repeatDelay: 0.4 }}
          className="w-px h-10 bg-ink-200"
        />
      </motion.div>

      {/* Thin rule at bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: 'left' }}
        className="divider mt-6"
      />
    </section>
  );
}
