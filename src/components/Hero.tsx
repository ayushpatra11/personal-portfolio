'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

const revealEase = [0.76, 0, 0.24, 1] as const;

const marqueeItems = [
  'Software Engineer',
  'University of Manchester',
  'Hughes Systique',
];

function MagneticLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 14, restDelta: 0.01 });
  const y = useSpring(0, { stiffness: 180, damping: 14, restDelta: 0.01 });

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

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
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="section-label mb-6"
          >
            Software Engineer · Manchester, UK
          </motion.p>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-ink-900 leading-[1.05] mb-6">
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.1, ease: revealEase }}
              >
                Ayush
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.22, ease: revealEase }}
              >
                <em>Patra.</em>
              </motion.span>
            </div>
          </h1>

          <div className="overflow-hidden mb-8">
            <motion.p
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.85, delay: 0.38, ease: revealEase }}
              className="text-ink-500 text-lg max-w-xl leading-relaxed"
            >
              Software engineer with a background in{' '}
              <em className="font-display italic text-ink-700">Software Defined Networking</em> —
              two years building low-latency systems for satellite communication and ORAN
              infrastructure at Hughes Systique, and an MSc in Advanced Computer Science
              from the University of Manchester.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <MagneticLink
              href="#projects"
              className="text-sm text-ink-900 border-b border-ink-900 pb-px hover:text-ink-500 hover:border-ink-500 transition-colors duration-200"
            >
              View work ↓
            </MagneticLink>
            <MagneticLink
              href="mailto:ayushpatra11@gmail.com"
              className="text-sm text-ink-500 hover:text-ink-900 transition-colors duration-200"
            >
              Get in touch →
            </MagneticLink>
          </motion.div>
        </div>

        {/* Photo: parallax + clip-path reveal */}
        <motion.div
          style={{ y: photoY }}
          className="hidden md:block"
        >
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.1, delay: 0.3, ease: revealEase }}
            className="relative w-52 h-64 rounded-sm overflow-hidden bg-cream-200"
          >
            <Image
              src="/images/me.png"
              alt="Ayush Patra"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
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
