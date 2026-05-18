import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#030712',
          surface: '#0f172a',
          card: '#111827',
          border: '#1e293b',
        },
        primary: {
          DEFAULT: '#22d3ee',
          dark: '#0891b2',
          glow: 'rgba(34,211,238,0.15)',
        },
        secondary: '#818cf8',
        accent: '#a78bfa',
        success: '#34d399',
        warn: '#f59e0b',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px rgba(34,211,238,0.3)' },
          to: { boxShadow: '0 0 25px rgba(34,211,238,0.6), 0 0 50px rgba(34,211,238,0.2)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)
        `,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(34,211,238,0.3)',
        'glow-indigo': '0 0 20px rgba(129,140,248,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
