'use client';

import { useState, useEffect } from 'react';
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
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-mono text-primary font-bold text-lg tracking-tight"
        >
          <span className="text-slate-400">&lt;</span>
          AP
          <span className="text-slate-400"> /&gt;</span>
        </motion.a>

        {/* Desktop links */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex items-center gap-6"
        >
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`font-mono text-sm transition-colors duration-200 relative group ${
                  active === href ? 'text-primary' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                <span className="text-primary/60 mr-0.5 text-xs">
                  {String(links.findIndex((l) => l.href === href) + 1).padStart(2, '0')}.
                </span>
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${
                    active === href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:ayushpatra11@gmail.com"
              className="font-mono text-sm px-4 py-2 border border-primary/50 text-primary rounded hover:bg-primary/10 transition-all duration-200"
            >
              Contact
            </a>
          </li>
        </motion.ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-6 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-800"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="font-mono text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
