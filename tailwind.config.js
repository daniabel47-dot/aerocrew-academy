/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        aero: {
          dark: '#050a08',
          surface: '#0c1512',
          surfaceLight: '#14221d',
          border: '#1b3028',
          borderHover: '#26453a',
          green: {
            950: '#021a14',
            900: '#042f2e',
            800: '#064e3b',
            700: '#065f46',
            600: '#059669',
            500: '#10b981',
            400: '#34d399',
          },
          gold: {
            700: '#92400e',
            600: '#b45309',
            500: '#d97706',
            400: '#f59e0b',
            300: '#fbbf24',
            200: '#fde68a',
            100: '#fef3c7',
            50: '#fffbeb',
          }
        },
        cockpit: {
          950: '#050a08',
          900: '#0b1411',
          850: '#101c18',
          800: '#162520',
          700: '#20372e',
          600: '#2d4b3f',
          border: '#182d24',
          borderBright: '#2a4c3e',
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 15px -3px rgba(245, 158, 11, 0.25)',
        'green-glow': '0 0 15px -3px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
};
