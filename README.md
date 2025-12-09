# Cabinet Psihologie - Website Profesional

Website modern, empatic și profesionist pentru cabinet de psihologie și psihoterapie din România. Construit cu Next.js 14, React 18, TypeScript și Tailwind CSS.

## 🎯 Caracteristici Principale

### Design & UX
- **Paleta de culori liniștitoare**: Verde-albastru calm, salvie, tonuri calde bej
- **Tipografie eleganță**: Cormorant Garamond pentru titluri, Inter pentru text
- **Layout one-page**: Navigare fluidă între secțiuni
- **Responsive design**: Optimizat pentru toate dispozitivele (mobile, tablet, desktop)
- **Animații subtile**: Framer Motion pentru scroll reveals și micro-interacțiuni

### Secțiuni

1. **Hero** - Mesaj empatic de validare imediată
2. **Probleme** - 8 carduri cu situații specifice (anxietate, depresie, traume, etc.)
3. **Servicii** - Psihoterapie individuală, terapie de cuplu, evaluare gratuită
4. **Despre** - Prezentare psiholog cu credențiale și specializări
5. **Proces** - Timeline transparentă cu pașii terapiei
6. **Testimoniale** - Povești reale de la clienți (confidențialitate protejată)
7. **FAQ** - 8 întrebări frecvente cu răspunsuri oneste
8. **Tarife** - Prețuri clare cu pachete avantajoase
9. **Contact** - Formular funcțional + alternative contact + hartă
10. **Creator Card** - Secțiune dedicată + integrare în footer

### Funcționalități Tehnice

- ✅ Formular contact cu validare (React Hook Form + Zod)
- ✅ Mesaje de eroare empatice
- ✅ Smooth scroll navigation
- ✅ Sticky header cu blur effect
- ✅ Mobile menu responsive
- ✅ SEO optimizat complet
- ✅ Meta tags pentru social media
- ✅ Accessibility (WCAG compliant)
- ✅ Performance optimizat (target Lighthouse 95+)

## 🚀 Instalare și Rulare

### Cerințe
- Node.js 18+
- npm sau yarn

### Pași

1. **Instalare dependențe**
```bash
npm install
```

2. **Rulare în development**
```bash
npm run dev
```

Website-ul va fi disponibil la: `http://localhost:3000`

3. **Build pentru producție**
```bash
npm run build
npm start
```

4. **Linting**
```bash
npm run lint
```

## 📁 Structură Proiect

```
cabinet-psihologie/
├── app/
│   ├── globals.css          # Stiluri globale + Tailwind
│   ├── layout.tsx            # Layout principal cu metadata SEO
│   └── page.tsx              # Pagina principală (one-page)
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Header sticky cu navigare
│   │   └── Footer.tsx        # Footer cu Creator Card integrat
│   ├── sections/
│   │   ├── Hero.tsx          # Secțiune hero
│   │   ├── Problems.tsx      # Probleme cu care ajută
│   │   ├── Services.tsx      # Servicii oferite
│   │   ├── About.tsx         # Despre psiholog
│   │   ├── Process.tsx       # Procesul terapeutic
│   │   ├── Testimonials.tsx  # Testimoniale clienți
│   │   ├── FAQ.tsx           # Întrebări frecvente
│   │   ├── Pricing.tsx       # Tarife și pachete
│   │   ├── Contact.tsx       # Formular contact
│   │   └── CreatorCard.tsx   # Card creator Roxana Lăudatu
│   └── ui/
│       ├── Button.tsx        # Componenta buton reutilizabilă
│       ├── Card.tsx          # Componenta card reutilizabilă
│       └── Accordion.tsx     # Componenta accordion pentru FAQ
├── public/                   # Fișiere statice (imagini, fonts)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

## 🎨 Paleta de Culori

```css
--fundal-principal: #FDFCFB  /* Alb cald */
--fundal-secundar: #F5F3F0   /* Bej foarte deschis */
--primar: #4A7C7E            /* Verde-albastru liniștitor */
--secundar: #8B9D83          /* Verde salvie */
--accent-cald: #C9A87C       /* Auriu discret */
--text-principal: #2C3E3F    /* Gri-verde închis */
--text-secundar: #6B7F7E     /* Gri-verde mediu */
--alerta-blanda: #E8D5C4     /* Piersică */
```

## 📝 Personalizare

### 1. Informații Cabinet

Editează următoarele fișiere pentru a actualiza informațiile:

**app/layout.tsx** - Metadata SEO (titlu, descriere, keywords)

**components/sections/About.tsx** - Nume psiholog, credențiale, specializări

**components/sections/Contact.tsx** - Telefon, email, adresă, program

**components/sections/Pricing.tsx** - Tarife actualizate

### 2. Modificare Culori

Editează `tailwind.config.ts` în secțiunea `colors`:

```typescript
colors: {
  'primar': '#YOUR_COLOR',
  'secundar': '#YOUR_COLOR',
  // etc.
}
```

### 3. Adăugare Imagini

Plasează imaginile în folder-ul `public/` și actualizează referințele:

- Logo: `public/logo.svg`
- Foto psiholog: `public/about-photo.jpg`
- Hero background: `public/hero-bg.jpg`
- OG Image: `public/og-image.jpg`

### 4. Formular Contact - Backend Integration

În `components/sections/Contact.tsx`, funcția `onSubmit` este pregătită pentru integrare cu backend:

```typescript
const onSubmit = async (data: ContactFormData) => {
  // Înlocuiește cu API call real
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  // Handle response
};
```

## 🔍 SEO & Performance

### Meta Tags
- ✅ Title și description optimizate
- ✅ Keywords relevante
- ✅ Open Graph pentru social media
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Robots.txt friendly

### Performance
- ✅ Lazy loading imagini
- ✅ Code splitting automat (Next.js)
- ✅ Fonts optimizate (Google Fonts cu preconnect)
- ✅ CSS minimal și scoped
- ✅ JavaScript diferit

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Focus states vizibile
- ✅ Contrast optim text/background
- ✅ Keyboard navigation

## 📱 Responsive Breakpoints

```
Mobile:  320px - 767px   (single column)
Tablet:  768px - 1023px  (2 columns)
Desktop: 1024px+         (full layout, 3 columns)
Large:   1440px+         (max-width 1320px container)
```

## 🌐 Deploy

### Vercel (Recomandat)

1. Push codul pe GitHub
2. Conectează repo la [Vercel](https://vercel.com)
3. Deploy automat la fiecare push

### Alte Platforme

Website-ul poate fi deploiat pe orice platformă care suportă Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- DigitalOcean App Platform

## 📄 License & Credits

### Website creat de **ROXANA LĂUDATU**
**Specialist AI Business & Prompt Engineering**

Vrei un website similar pentru business-ul tău?
- 📅 [Programează consultație gratuită](https://calendly.com/laudatu-roxana/30min)
- ✉️ Contact: laudatu.roxana@email.com

---

### Tehnologii Folosite

- **Next.js 14** - React Framework
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Hook Form** - Form Management
- **Zod** - Schema Validation
- **Lucide React** - Icons

---

## 📞 Support

Pentru întrebări sau probleme tehnice:
- Email: laudatu.roxana@email.com
- Website: [Link la site-ul tău]

---

**© 2025 Cabinet Psihologie. Toate drepturile rezervate.**
**Website creat de Roxana Lăudatu - [calendly.com/laudatu-roxana/30min](https://calendly.com/laudatu-roxana/30min)**
