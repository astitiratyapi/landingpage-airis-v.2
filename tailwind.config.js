/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1b51d8',
          50: '#eef3fe', 100: '#dbe5fd', 200: '#bccffb', 300: '#90aef7',
          400: '#5d83f0', 500: '#1b51d8', 600: '#1742b0', 700: '#16398f',
          800: '#163175', 900: '#152c63',
        },
        navy: {
          DEFAULT: '#0c1f5c',
          700: '#13286e', 800: '#0e2058', 900: '#091640', 950: '#060f2e',
        },
        accent: {
          DEFAULT: '#E86A1A',
          soft: '#fff1e7', 600: '#cf5c13',
        },
        ink: { DEFAULT: '#1f2937', muted: '#4b5563', soft: '#6b7280', faint: '#9ca3af' },
        line: { DEFAULT: '#e5e7eb', soft: '#f1f3f6' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(16,24,40,.05)',
        sm: '0 1px 3px 0 rgba(16,24,40,.08), 0 1px 2px -1px rgba(16,24,40,.06)',
        card: '0 4px 16px -4px rgba(16,24,40,.08), 0 2px 6px -2px rgba(16,24,40,.05)',
        lift: '0 18px 40px -12px rgba(16,24,40,.18), 0 8px 16px -8px rgba(16,24,40,.10)',
        glow: '0 24px 64px -16px rgba(27,81,216,.45)',
      },
    },
  },
  plugins: [],
};
