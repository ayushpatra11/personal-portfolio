'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Career', href: '#career' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Stats', href: '#stats' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const prevY = useRef(0);

  // Blur background + hide on scroll-down
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setHidden(y > prevY.current && y > 160 && !open);
      prevY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          scrolled && !open
            ? 'bg-cream-100/90 backdrop-blur-md border-b border-ink-100'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className={`font-display italic text-lg tracking-tight transition-colors ${
              open ? 'text-cream-100' : 'text-ink-900 hover:text-ink-700'
            }`}
          >
            Ayush Patra
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => {
              const isActive = active === href.slice(1);
              return (
                <li key={href} className="relative">
                  <a
                    href={href}
                    className={`text-sm tracking-wide transition-colors duration-200 pb-px ${
                      isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                    }`}
                  >
                    {label}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-ink-900"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
            <li>
              <a
                href="mailto:ayushpatra11@gmail.com"
                className="text-sm text-ink-900 border-b border-ink-900 pb-px hover:text-ink-500 hover:border-ink-500 transition-colors duration-200 tracking-wide"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger — always visible on mobile */}
          <button
            className={`md:hidden transition-colors p-1 z-[200] relative ${
              open ? 'text-cream-100' : 'text-ink-500 hover:text-ink-900'
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <motion.div
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="w-5 h-px bg-current mb-1.5"
            />
            <motion.div
              animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
              transition={{ duration: 0.18 }}
              className="w-5 h-px bg-current mb-1.5"
            />
            <motion.div
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="w-5 h-px bg-current"
            />
          </button>
        </nav>
      </motion.header>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Curtain wipe — black panel sweeps right-to-left, revealing the dark menu */}
            <motion.div
              key="curtain"
              initial={{ x: '100%' }}
              animate={{ x: '-100%' }}
              transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 bg-black z-[150] pointer-events-none md:hidden"
            />

            {/* Menu panel */}
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ delay: 0.25, duration: 0.15 }}
              className="fixed inset-0 bg-ink-900 z-[140] md:hidden flex flex-col px-8 pt-24 pb-12"
            >
              {/* Nav links — large editorial */}
              <nav className="flex-1 flex flex-col justify-center gap-0">
                {links.map(({ label, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.06, duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="group flex items-baseline gap-4 py-4 border-b border-white/10 last:border-0"
                  >
                    <span className="font-mono text-[10px] text-white/30 w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display italic text-4xl text-cream-100 group-hover:text-white transition-colors duration-200">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Bottom contact */}
              <motion.a
                href="mailto:ayushpatra11@gmail.com"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.4 }}
                className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors tracking-wide"
              >
                ayushpatra11@gmail.com →
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
