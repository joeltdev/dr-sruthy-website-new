import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#b9d8ff',
          300: '#8cbfff',
          400: '#5aa0ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        pastel: {
          blue: '#e7f0ff',
          azure: '#eaf4ff',
          mint: '#e7fff6'
        }
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        smooth: '0 2px 8px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)',
        'smooth-md': '0 8px 24px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(15, 23, 42, 0.06)',
        'smooth-lg': '0 16px 40px rgba(15, 23, 42, 0.10), 0 2px 12px rgba(15, 23, 42, 0.06)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        floatY: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        drift: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(6px, -8px) scale(1.02)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      animation: {
        'float-slow': 'floatY 8s ease-in-out infinite',
        'drift-slow': 'drift 14s ease-in-out infinite',
        'drift-slower': 'drift 22s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config

