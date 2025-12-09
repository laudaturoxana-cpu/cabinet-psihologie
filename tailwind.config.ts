import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fundal-principal': '#FDFCFB',
        'fundal-secundar': '#F5F3F0',
        'primar': '#4A7C7E',
        'secundar': '#8B9D83',
        'accent-cald': '#C9A87C',
        'text-principal': '#2C3E3F',
        'text-secundar': '#6B7F7E',
        'alerta-blanda': '#E8D5C4',
      },
      fontFamily: {
        'titlu': ['Cormorant Garamond', 'serif'],
        'paragraf': ['Inter', 'sans-serif'],
        'accent': ['Crimson Text', 'serif'],
      },
      fontSize: {
        'h1-desktop': '3.5rem',
        'h1-mobile': '2.25rem',
        'h2-desktop': '2.5rem',
        'h2-mobile': '1.875rem',
        'body': '1.125rem',
      },
      lineHeight: {
        'relaxed-custom': '1.75',
      },
      maxWidth: {
        'container': '1320px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
