/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.jsx',
    './resources/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        bordeaux: {
          50:  '#fdf2f4',
          100: '#fce7ea',
          200: '#f8d2d8',
          300: '#f2adb7',
          400: '#e87f90',
          500: '#d9546a',
          600: '#c43050',
          700: '#a5203f',
          800: '#7e1c37',
          900: '#5c1a30',
          950: '#3d0d1e',
        },
        gold: {
          50:  '#fdf9ee',
          100: '#faf0d0',
          200: '#f4de9d',
          300: '#edc764',
          400: '#e6b030',
          500: '#d49418',
          600: '#b87313',
          700: '#905413',
          800: '#764416',
          900: '#643917',
          950: '#3a1e09',
        },
        cream: {
          50:  '#fdfcf8',
          100: '#f9f6ef',
          200: '#f2ece0',
          300: '#e8dece',
          400: '#d9c9b0',
          500: '#c8b091',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
