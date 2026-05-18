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

  // Scroll detection: blur background + hide on scroll-down
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setHidden(y > prevY.current && y > 160);
      prevY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <motion.header
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-cream-100/90 backdrop-blur-md border-b border-ink-100' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display italic text-ink-900 text-lg tracking-tight hover:text-ink-700 transition-colors"
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

        {/* Hamburger */}
        <button
          className="md:hidden text-ink-500 hover:text-ink-900 transition-colors p-1"
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

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden bg-cream-100/95 backdrop-blur-md border-t border-ink-100"
          >
            <ul className="flex flex-col px-6 py-3">
              {[...links, { label: 'Contact', href: 'mailto:ayushpatra11@gmail.com' }].map(
                ({ label, href }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-sm text-ink-500 hover:text-ink-900 transition-colors border-b border-ink-100 last:border-0"
                    >
                      {label}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
