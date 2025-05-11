/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66abf9',
          400: '#338ff7',
          500: '#0066ff', // Primary blue
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
        secondary: {
          50: '#e6ffff',
          100: '#ccffff',
          200: '#99ffff',
          300: '#66ffff',
          400: '#33ffff',
          500: '#0affff', // Turquoise
          600: '#08cccc',
          700: '#069999',
          800: '#046666',
          900: '#023333',
        },
        accent: {
          50: '#f0e6ff',
          100: '#e1ccff',
          200: '#c399ff',
          300: '#a566ff',
          400: '#8733ff',
          500: '#8a2be2', // Purple
          600: '#6e22b5',
          700: '#531a88',
          800: '#37115b',
          900: '#1c092d',
        },
        dark: {
          100: '#d1d1d3',
          200: '#a3a3a7',
          300: '#76767a',
          400: '#48484e',
          500: '#1a1a22',
          600: '#15151b',
          700: '#101014',
          800: '#0a0a0e',
          900: '#050507',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(10, 255, 255, 0.5), 0 0 10px rgba(138, 43, 226, 0.3)',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 10px rgba(10, 255, 255, 0.8), 0 0 20px rgba(138, 43, 226, 0.5)',
            filter: 'brightness(1.2)'
          },
        },
      },
      boxShadow: {
        'neon-primary': '0 0 5px rgba(0, 102, 255, 0.5), 0 0 20px rgba(0, 102, 255, 0.3)',
        'neon-secondary': '0 0 5px rgba(10, 255, 255, 0.5), 0 0 20px rgba(10, 255, 255, 0.3)',
        'neon-accent': '0 0 5px rgba(138, 43, 226, 0.5), 0 0 20px rgba(138, 43, 226, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom right, rgba(26, 26, 34, 0.8), rgba(15, 15, 20, 0.9)), url("/src/assets/grid-pattern.png")',
      },
    },
  },
  plugins: [],
};