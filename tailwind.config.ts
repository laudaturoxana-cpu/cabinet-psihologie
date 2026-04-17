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
        // PALETĂ MODERNĂ CABINET PSIHOLOGIE — Forest Green + Sandy Beige

        // Fundal - Ivory cald și crem aurit
        'fundal-principal': '#f7f5f1',  // Ivory pur - spațiu, puritate
        'fundal-secundar': '#f5edd8',   // Champagne cald - secțiuni alternante
        'fundal-cald': '#f0e6cc',       // Auriu palid - accente calde

        // Culori Primare - Verde Forest (liniște, echilibru, natură)
        'primar': '#3f5e55',            // Verde forest - calm, echilibru
        'primar-dark': '#2f4a43',       // Verde adânc - stabilitate, încredere
        'primar-light': '#587d74',      // Verde mediu - deschidere, speranță

        // Culori Secundare - Bej Nisipos (căldură, naturalness)
        'secundar': '#cbb89a',          // Bej nisipos - căldură, naturalness
        'secundar-dark': '#b5a285',     // Bej mai închis - grounding
        'secundar-light': '#ddd0ba',    // Bej deschis - prospețime

        // Auriu Șampanie — noua culoare de acțiune (caldă, premium)
        'auriu': '#c9a96e',             // Champagne gold — CTA, accente premium
        'auriu-dark': '#a8834a',        // Burnished gold — hover, profunzime
        'auriu-light': '#e8d5b0',       // Pale gold — backgrounds calde

        // Text
        'text-principal': '#2e2e2e',    // Aproape negru - lizibilitate maximă
        'text-secundar': '#5e5a52',     // Gri cald - profesional, calm
        'text-alb': '#f7f5f1',          // Alb ivory - pe fundal verde/auriu

        // Alerte și notificări
        'alerta-blanda': '#f0e6cc',     // Auriu palid
        'succes': '#4a7c6f',            // Verde forest variant
        'atentie': '#c9a96e',           // Gold atenție
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
        'soft': '0 2px 15px -3px rgba(63, 94, 85, 0.1), 0 2px 6px -2px rgba(63, 94, 85, 0.05)',
        'soft-lg': '0 10px 40px -10px rgba(63, 94, 85, 0.15), 0 2px 10px -2px rgba(63, 94, 85, 0.08)',
        'gold': '0 4px 20px -4px rgba(201, 169, 110, 0.4), 0 2px 8px -2px rgba(201, 169, 110, 0.25)',
        'gold-lg': '0 10px 40px -8px rgba(201, 169, 110, 0.5)',
      },
    },
  },
  plugins: [],
}
export default config
