import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ayush Patra — Software Engineer',
  description:
    'Personal portfolio of Ayush Patra — Software Engineer with a passion for networking, systems programming, and distributed infrastructure. Interviewed at Google, Cloudflare, and Canonical.',
  keywords: ['Ayush Patra', 'software engineer', 'networking', 'portfolio', 'Cloudflare', 'Google'],
  authors: [{ name: 'Ayush Patra' }],
  openGraph: {
    title: 'Ayush Patra — Software Engineer',
    description: 'Software Engineer passionate about networking & systems programming.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ayushpatra11',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-bg text-slate-100 antialiased">{children}</body>
    </html>
  );
}
