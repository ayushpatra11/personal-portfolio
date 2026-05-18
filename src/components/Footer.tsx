'use client';

const links = [
  { label: 'GitHub', href: 'https://github.com/ayushpatra11' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayushpatra11' },
  { label: 'Twitter', href: 'https://twitter.com/ayushpatra11' },
  { label: 'Email', href: 'mailto:ayushpatra11@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="font-display italic text-ink-300 text-sm">
          Ayush Patra · Manchester, UK
        </p>

        <ul className="flex flex-wrap gap-6">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-sm text-ink-400 hover:text-ink-900 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-ink-200 font-mono hidden sm:block">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
