'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
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

          <motion.p {...fade(0.2)} className="text-ink-500 text-lg max-w-xl leading-relaxed mb-4">
            Software engineer with a background in{' '}
            <em className="font-display italic text-ink-700">telecoms and networking</em> —
            two years building low-latency systems for 5G infrastructure at Hughes Systique,
            now finishing an MSc in Advanced Computer Science at the University of Manchester.
          </motion.p>

          <motion.p {...fade(0.25)} className="text-ink-300 text-sm mb-8">
            Interviewed at{' '}
            <span className="text-ink-500">Google</span>,{' '}
            <span className="text-ink-500">Cloudflare</span> &amp;{' '}
            <span className="text-ink-500">Canonical</span>.
          </motion.p>

          <motion.div {...fade(0.35)} className="flex flex-wrap gap-6 items-center">
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

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:block"
        >
          <div className="relative w-52 h-64 rounded-sm overflow-hidden bg-cream-200">
            <Image
              src="/images/me.jpg"
              alt="Ayush Patra"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Thin rule at bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: 'left' }}
        className="divider mt-20"
      />
    </section>
  );
}
