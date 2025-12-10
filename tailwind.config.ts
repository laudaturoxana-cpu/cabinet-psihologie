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
        // NOUA PALETĂ CALDĂ ȘI EMPATICĂ

        // Fundal - Tonuri calde de bej/cream
        'fundal-principal': '#FFF8F0',  // Cream foarte cald - siguranță
        'fundal-secundar': '#FFF3E6',   // Bej piersică - căldură

        // Culori Primare - Teracotă/Coral moale (empatie, căldură)
        'primar': '#E17B5C',            // Teracotă coral - empatie, căldură
        'primar-dark': '#C96846',       // Teracotă mai închis - stabilitate
        'primar-light': '#F5A589',      // Coral deschis - optimism

        // Culori Secundare - Verde smarald moale (vindecare, speranță)
        'secundar': '#6B9B88',          // Verde smarald moale - vindecare, natură
        'secundar-dark': '#547B6C',     // Verde închis - stabilitate
        'secundar-light': '#8FB5A4',    // Verde mint - freshness

        // Accent - Auriu cald (valoare, lumină)
        'accent-cald': '#D4A574',       // Auriu miere - optimism, lumină
        'accent-roz': '#E8B4A8',        // Roz pudră - afecțiune, blândețe

        // Text
        'text-principal': '#3D3027',    // Maro ciocolată - warm, nu negru rece
        'text-secundar': '#6B5D52',     // Taupe - sofisticat, calm

        // Alerte și notificări
        'alerta-blanda': '#FFE4D6',     // Piersică foarte deschis
        'succes': '#7FB69E',            // Verde mentă
        'atentie': '#F4B860',           // Galben miere
      },
      fontFamily: {
        // FONTURI MODERNE ȘI PRIETENOASE
        'titlu': ['Plus Jakarta Sans', 'sans-serif'],      // Modern, warm, professional
        'paragraf': ['Inter', 'sans-serif'],                // Clean, readable
        'accent': ['Libre Baskerville', 'serif'],           // Elegant pentru citate
      },
      fontSize: {
        'h1-desktop': '3.5rem',   // 56px
        'h1-mobile': '2rem',      // 32px - mai mic pentru mobile
        'h2-desktop': '2.75rem',  // 44px
        'h2-mobile': '1.75rem',   // 28px
        'body': '1.125rem',       // 18px
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
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
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
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(225, 123, 92, 0.1), 0 2px 6px -2px rgba(225, 123, 92, 0.05)',
        'soft-lg': '0 10px 40px -10px rgba(225, 123, 92, 0.15), 0 2px 10px -2px rgba(225, 123, 92, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config
