# 📑 Index - Documentație Cabinet Psihologie Website

## 🎯 Start Aici

### Nou în proiect? Citește în această ordine:

1. **[INSTALLATION.md](INSTALLATION.md)** ⚡ ÎNCEPE AICI
   - Verificare cerințe sistem
   - Instalare pas cu pas
   - Pornire server local
   - Troubleshooting probleme comune
   - **Timp:** 10 minute

2. **[QUICKSTART.md](QUICKSTART.md)** 🚀 PERSONALIZARE
   - Schimbare informații contact
   - Actualizare date psiholog
   - Modificare tarife
   - Adăugare imagini
   - Configurare email formular
   - **Timp:** 30-60 minute

3. **[README.md](README.md)** 📚 DOCUMENTAȚIE COMPLETĂ
   - Caracteristici detaliate
   - Structură cod
   - Personalizare avansată
   - Deploy pe Vercel
   - SEO și performance
   - **Timp:** Referință (20+ minute citit)

4. **[COMENZI_RAPIDE.md](COMENZI_RAPIDE.md)** ⚡ REFERINȚĂ
   - Comenzi npm esențiale
   - Snippets cod pentru modificări comune
   - Troubleshooting rapid
   - Links și resurse
   - **Timp:** Bookmark (consultare rapidă)

5. **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** 📋 OVERVIEW
   - Ce a fost livrat
   - Funcționalități implementate
   - Design decisions
   - Valoare proiect
   - **Timp:** 10 minute

---

## 📂 Structură Proiect

### Fișiere Configurare

```
cabinet-psihologie/
├── .env.example              # Template variabile environment
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore rules
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies și scripts
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

### Documentație

```
├── COMENZI_RAPIDE.md         # Quick reference comenzi
├── INDEX.md                  # Acest fișier
├── INSTALLATION.md           # Ghid instalare
├── PROJECT_SUMMARY.md        # Sumar proiect
├── QUICKSTART.md             # Ghid pornire rapidă
└── README.md                 # Documentație principală
```

### Cod Sursă

```
├── app/
│   ├── globals.css           # Stiluri globale
│   ├── layout.tsx            # Layout principal + SEO
│   ├── page.tsx              # Pagina principală
│   └── sitemap.ts            # Sitemap generator
├── components/
│   ├── layout/
│   │   ├── Footer.tsx        # Footer + Creator Card integrat
│   │   └── Header.tsx        # Header sticky + navigation
│   ├── sections/
│   │   ├── About.tsx         # Despre psiholog
│   │   ├── Contact.tsx       # Formular contact
│   │   ├── CreatorCard.tsx   # Card Roxana Lăudatu
│   │   ├── FAQ.tsx           # Întrebări frecvente
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Pricing.tsx       # Tarife și pachete
│   │   ├── Problems.tsx      # Probleme cu care ajută
│   │   ├── Process.tsx       # Procesul terapeutic
│   │   ├── Services.tsx      # Servicii oferite
│   │   └── Testimonials.tsx  # Testimoniale clienți
│   └── ui/
│       ├── Accordion.tsx     # Componenta accordion
│       ├── Button.tsx        # Componenta buton
│       └── Card.tsx          # Componenta card
└── public/
    ├── manifest.json         # PWA manifest
    └── robots.txt            # SEO robots
```

---

## 🎨 Ghid Vizual - Ce Să Editezi

### 1️⃣ Informații Cabinet (PRIORITATE ÎNALTĂ)

| Ce modifici | Fișier | Linie | Dificultate |
|------------|--------|-------|-------------|
| Telefon | `components/sections/Contact.tsx` | 21 | ⭐ Ușor |
| Email | `components/sections/Contact.tsx` | 26 | ⭐ Ușor |
| Adresă | `components/sections/Contact.tsx` | 260 | ⭐ Ușor |
| WhatsApp | `components/sections/Contact.tsx` | 31 | ⭐ Ușor |
| Telefon (footer) | `components/layout/Footer.tsx` | 44 | ⭐ Ușor |
| Email (footer) | `components/layout/Footer.tsx` | 50 | ⭐ Ușor |

### 2️⃣ Date Psiholog (PRIORITATE ÎNALTĂ)

| Ce modifici | Fișier | Linie | Dificultate |
|------------|--------|-------|-------------|
| Nume psiholog | `components/sections/About.tsx` | 51 | ⭐ Ușor |
| Ani experiență | `components/sections/About.tsx` | 51 | ⭐ Ușor |
| Educație | `components/sections/About.tsx` | 10-14 | ⭐ Ușor |
| Specializări | `components/sections/About.tsx` | 16-22 | ⭐ Ușor |
| Număr CPR | `components/sections/About.tsx` | 40 | ⭐ Ușor |

### 3️⃣ Tarife (PRIORITATE MEDIE)

| Ce modifici | Fișier | Linie | Dificultate |
|------------|--------|-------|-------------|
| Preț individual | `components/sections/Pricing.tsx` | 10 | ⭐ Ușor |
| Preț cuplu | `components/sections/Pricing.tsx` | 21 | ⭐ Ușor |
| Pachete | `components/sections/Pricing.tsx` | 41-52 | ⭐ Ușor |

### 4️⃣ SEO (PRIORITATE MEDIE)

| Ce modifici | Fișier | Linie | Dificultate |
|------------|--------|-------|-------------|
| Title | `app/layout.tsx` | 5 | ⭐ Ușor |
| Description | `app/layout.tsx` | 6 | ⭐⭐ Mediu |
| Keywords | `app/layout.tsx` | 7-18 | ⭐⭐ Mediu |
| URL site | `app/layout.tsx` | 22 | ⭐ Ușor |

### 5️⃣ Design (OPȚIONAL)

| Ce modifici | Fișier | Linie | Dificultate |
|------------|--------|-------|-------------|
| Culori | `tailwind.config.ts` | 11-18 | ⭐⭐ Mediu |
| Fonts | `app/globals.css` | 7 | ⭐⭐⭐ Avansat |
| Logo | `components/layout/Header.tsx` | 42-56 | ⭐⭐⭐ Avansat |

---

## 🔍 Găsește Rapid

### Vreau să...

**...instalez proiectul**
→ [INSTALLATION.md](INSTALLATION.md) → Secțiunea "Pași de Instalare"

**...schimb telefonul și email-ul**
→ [QUICKSTART.md](QUICKSTART.md) → Secțiunea "2A. Informații de Contact"

**...adaug logo și imagini**
→ [QUICKSTART.md](QUICKSTART.md) → Secțiunea "3. Adăugare Imagini"

**...configurez formularul să trimită email**
→ [COMENZI_RAPIDE.md](COMENZI_RAPIDE.md) → Secțiunea "Configurare Email"

**...schimb culorile site-ului**
→ [COMENZI_RAPIDE.md](COMENZI_RAPIDE.md) → Secțiunea "Schimbare Culori"

**...deploy pe Vercel**
→ [QUICKSTART.md](QUICKSTART.md) → Secțiunea "7. Deploy pe Vercel"

**...adaug Google Maps**
→ [COMENZI_RAPIDE.md](COMENZI_RAPIDE.md) → Secțiunea "Adăugare Google Maps"

**...configurez Google Analytics**
→ [COMENZI_RAPIDE.md](COMENZI_RAPIDE.md) → Secțiunea "Google Analytics"

**...înțeleg ce a fost făcut**
→ [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

**...rezolv o eroare**
→ [INSTALLATION.md](INSTALLATION.md) → Secțiunea "Rezolvare Probleme"
→ [COMENZI_RAPIDE.md](COMENZI_RAPIDE.md) → Secțiunea "Troubleshooting"

---

## ⚡ Comenzi Rapide Esențiale

```bash
# Instalare (prima dată)
npm install

# Pornire server
npm run dev
# → http://localhost:3000

# Build producție
npm run build

# Verificare erori
npm run lint

# Cleanup (dacă apar probleme)
rm -rf node_modules package-lock.json .next
npm install
```

---

## 📊 Workflow Recomandat

### Zi 1: Setup și Verificare (1 oră)

1. ✅ Instalare dependențe
2. ✅ Pornire server local
3. ✅ Verificare funcționalitate în browser
4. ✅ Test responsive (mobile/desktop)

### Zi 2: Personalizare Conținut (2 ore)

1. ✅ Actualizare informații contact
2. ✅ Modificare date psiholog
3. ✅ Schimbare tarife
4. ✅ Ajustare texte (dacă necesar)

### Zi 3: Imagini și Branding (1 oră)

1. ✅ Pregătire imagini (logo, foto, etc.)
2. ✅ Adăugare în folder `public/`
3. ✅ Integrare în componente
4. ✅ Test vizual

### Zi 4: Funcționalitate Email (1 oră)

1. ✅ Setup EmailJS sau Nodemailer
2. ✅ Configurare formular
3. ✅ Test trimitere
4. ✅ Verificare primire email

### Zi 5: Deploy (30 minute)

1. ✅ Push pe GitHub
2. ✅ Deploy pe Vercel
3. ✅ Configurare domeniu
4. ✅ Test final pe site live

**Total timp:** ~5.5 ore distribuite pe 5 zile

---

## 🎯 Checklist Complet

### Pre-Launch

- [ ] Toate informațiile de contact actualizate
- [ ] Nume psiholog și credențiale reale
- [ ] Număr CPR corect în About și Footer
- [ ] Tarife actuale în Pricing
- [ ] Program actualizat în Contact
- [ ] Formular contact funcțional (trimite email)
- [ ] Logo și favicon adăugate
- [ ] Foto psiholog adăugată
- [ ] SEO metadata completată
- [ ] Google Analytics configurat (opțional)
- [ ] Google Maps adăugat (opțional)
- [ ] Test pe mobile
- [ ] Test pe desktop
- [ ] Test formular (trimite și primește)
- [ ] Build de producție funcționează
- [ ] Nu există erori în consolă

### Post-Launch

- [ ] Domeniu custom configurat
- [ ] HTTPS activ
- [ ] Test performance (PageSpeed)
- [ ] Test SEO (Google Search Console)
- [ ] Monitorizare Analytics
- [ ] Backup cod pe GitHub
- [ ] Documentație actualizată (dacă modificări)

---

## 🆘 Probleme Frecvente

| Problemă | Soluție | Link |
|----------|---------|------|
| npm nu funcționează | Instalează Node.js | [nodejs.org](https://nodejs.org) |
| Port 3000 ocupat | Schimbă portul: `PORT=3001 npm run dev` | [COMENZI_RAPIDE.md](COMENZI_RAPIDE.md) |
| Modificările nu apar | Refresh browser sau restart server | [INSTALLATION.md](INSTALLATION.md) |
| Erori TypeScript | `rm -rf .next && npm run dev` | [COMENZI_RAPIDE.md](COMENZI_RAPIDE.md) |
| Formular nu trimite | Verifică configurare EmailJS | [QUICKSTART.md](QUICKSTART.md) |

---

## 📞 Contact și Suport

### Pentru Întrebări Tehnice

**Roxana Lăudatu**
- 📅 [Programează consultație gratuită](https://calendly.com/laudatu-roxana/30min)
- ✉️ laudatu.roxana@email.com

### Resurse Externe

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Docs:** https://react.dev
- **Vercel Deploy:** https://vercel.com/docs

---

## 🌟 Tips Pro

### Înainte de a Face Modificări

1. **Backup:** Salvează o copie a fișierului original
2. **Test:** Rulează `npm run dev` înainte și după modificări
3. **Git:** Commit frecvent cu mesaje clare
4. **Browser:** Folosește DevTools (F12) pentru debugging

### Pentru Performanță Maximă

1. **Imagini:** Optimizează cu TinyPNG sau similar
2. **Fonts:** Folosește doar greutățile necesare
3. **Code:** Nu șterge comentariile (ajută la înțelegere)
4. **Build:** Testează build de producție înainte de deploy

### Pentru SEO Optimal

1. **Title:** Maxim 60 caractere
2. **Description:** 150-160 caractere
3. **Keywords:** Relevante pentru București și psihologie
4. **Alt text:** Pentru toate imaginile

---

## 📚 Glosar Termeni

- **npm:** Node Package Manager (gestionare dependențe)
- **build:** Compilare cod pentru producție
- **deploy:** Publicare site pe internet
- **localhost:** Server local (computerul tău)
- **responsive:** Design adaptat mobile/desktop
- **SEO:** Search Engine Optimization
- **PWA:** Progressive Web App
- **TypeScript:** JavaScript cu type safety
- **Component:** Bucată reutilizabilă de UI
- **Props:** Date pasate între componente

---

## 🎉 Felicitări!

Ai acum un website profesional, complet funcțional, gata de personalizare și lansare!

**Următorii pași:**
1. Citește [INSTALLATION.md](INSTALLATION.md)
2. Rulează `npm install` și `npm run dev`
3. Explorează site-ul în browser
4. Începe personalizarea cu [QUICKSTART.md](QUICKSTART.md)

**Mult succes! 🚀**

---

**Website creat cu ❤️ de Roxana Lăudatu**
*Specialist AI Business & Prompt Engineering*

[Programează consultație gratuită](https://calendly.com/laudatu-roxana/30min) pentru website-ul tău!
