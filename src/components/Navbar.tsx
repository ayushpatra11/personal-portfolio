'use client';

import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-md border-b border-ink-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display italic text-ink-900 text-lg tracking-tight hover:text-ink-700 transition-colors"
        >
          Ayush Patra
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-ink-500 hover:text-ink-900 transition-colors duration-200 tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:ayushpatra11@gmail.com"
              className="text-sm text-ink-900 border-b border-ink-900 pb-px hover:text-ink-500 hover:border-ink-500 transition-colors duration-200 tracking-wide"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-ink-500 hover:text-ink-900 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-px bg-current transition-all mb-1.5 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <div className={`w-5 h-px bg-current transition-all mb-1.5 ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-px bg-current transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream-100 border-t border-ink-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {[...links, { label: 'Contact', href: 'mailto:ayushpatra11@gmail.com' }].map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-ink-500 hover:text-ink-900 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
