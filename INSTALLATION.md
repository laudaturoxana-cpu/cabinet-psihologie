# 📦 Instalare Website Cabinet Psihologie

## ✅ Verificare Înainte de Instalare

### Verificați că aveți următoarele fișiere și foldere:

```
cabinet-psihologie/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CreatorCard.tsx
│   │   ├── FAQ.tsx
│   │   ├── Hero.tsx
│   │   ├── Pricing.tsx
│   │   ├── Problems.tsx
│   │   ├── Process.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   └── ui/
│       ├── Accordion.tsx
│       ├── Button.tsx
│       └── Card.tsx
├── public/
│   ├── manifest.json
│   └── robots.txt
├── .env.example
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── QUICKSTART.md
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Pași de Instalare

### 1. Verificare Node.js

Verificați că aveți Node.js instalat (versiune 18 sau mai nouă):

```bash
node --version
```

Dacă nu aveți Node.js instalat, descărcați de la: https://nodejs.org/

---

### 2. Deschideți Terminal în Folderul Proiectului

**Pe macOS:**
- Deschideți Terminal
- Navigați la folder:
```bash
cd "/Users/roxanalaudatu/Desktop/Claude code site-uri si app-uri/cabinet-psihologie"
```

**Pe Windows:**
- Deschideți Command Prompt sau PowerShell
- Navigați la folder:
```cmd
cd "C:\path\to\cabinet-psihologie"
```

---

### 3. Instalare Dependențe

Rulați comanda:

```bash
npm install
```

**Acest pas poate dura 2-5 minute.** Veți vedea mesaje în terminal despre pachetele instalate.

**Dacă întâmpinați erori:**
```bash
# Ștergeți cache-ul și reinstalați
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

### 4. Rulare Website Local

După instalare, rulați:

```bash
npm run dev
```

**Veți vedea:**
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Ready in xxxms
```

**Deschideți browser la:** http://localhost:3000

---

### 5. Verificare Funcționalitate

Testați următoarele:

#### ✅ Header și Navigare
- [ ] Logo vizibil în header
- [ ] Meniul funcționează (Servicii, Despre, Cum lucrez, Contact)
- [ ] Butonul "Programează prima ședință" navighează la secțiunea Contact
- [ ] Pe mobile: hamburger menu funcționează

#### ✅ Secțiuni
- [ ] Hero - mesaj de bun venit vizibil
- [ ] Probleme - 8 carduri afișate corect
- [ ] Servicii - 3 carduri de servicii
- [ ] Despre - placeholder foto + text
- [ ] Proces - 4 pași timeline
- [ ] Testimoniale - 6 carduri cu citate
- [ ] FAQ - accordion funcționează (click pe întrebări)
- [ ] Tarife - 3 carduri pricing + pachete
- [ ] Contact - formular funcțional

#### ✅ Formular Contact
- [ ] Câmpurile pot fi completate
- [ ] Validarea funcționează (test cu email invalid)
- [ ] Buton "Trimite" schimbă în "Se încarcă..."
- [ ] Mesaj de succes apare după 2 secunde

#### ✅ Creator Card
- [ ] Secțiune separată vizibilă înainte de footer
- [ ] Card vizibil în footer (mărit și proeminent)
- [ ] Link Calendly funcționează

#### ✅ Footer
- [ ] Link-uri de navigare funcționează
- [ ] Informații contact vizibile
- [ ] Contacte urgență afișate

#### ✅ Responsive Design
Testați pe diferite dimensiuni:
- [ ] Desktop (1920px)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

**Cum testez responsive în browser:**
1. Apăsați F12 (DevTools)
2. Click pe icon "Toggle device toolbar" (sau Cmd+Shift+M pe Mac)
3. Selectați diferite dispozitive din dropdown

---

## 🎨 Verificare Vizuală

### Culori Corecte

Verificați că vedeți:
- **Verde-albastru calm** (#4A7C7E) - butoane primare, accent
- **Verde salvie** (#8B9D83) - elemente secundare
- **Auriu discret** (#C9A87C) - Creator Card, accente
- **Bej cald** (#F5F3F0) - fundal secundar
- **Alb cald** (#FDFCFB) - fundal principal

### Fonturi Corecte

- **Titluri:** Cormorant Garamond (serif elegant)
- **Text:** Inter (sans-serif modern)
- **Citate:** Crimson Text (serif italic)

---

## 🔧 Rezolvare Probleme Frecvente

### Problema: "npm: command not found"

**Soluție:** Instalați Node.js de la https://nodejs.org/

---

### Problema: "Port 3000 already in use"

**Soluție:** Schimbați portul:
```bash
PORT=3001 npm run dev
```
Sau închideți aplicația care folosește portul 3000

---

### Problema: "Module not found" erori

**Soluție:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Problema: Modificările nu apar

**Soluție:**
1. Salvați fișierul modificat
2. Așteptați 2-3 secunde (hot reload automat)
3. Refresh browser (Cmd+R sau Ctrl+R)
4. Dacă persistă: opriți server (Ctrl+C) și rulați din nou `npm run dev`

---

### Problema: Eroare TypeScript

**Soluție:**
```bash
# Verificați sintaxa
npm run lint

# Rebuild type definitions
rm -rf .next
npm run dev
```

---

## 📱 Testare pe Dispozitive Reale

### Pe telefon mobil (aceeași rețea WiFi):

1. Aflați IP-ul computerului:
   - **Mac:** System Preferences → Network → WiFi → IP Address
   - **Windows:** `ipconfig` în Command Prompt → IPv4 Address

2. Pe telefon, deschideți browser la:
   ```
   http://IP_COMPUTER:3000
   ```
   Exemplu: `http://192.168.1.100:3000`

---

## ✅ Build pentru Producție

Înainte de deploy, testați build-ul de producție:

```bash
npm run build
```

**Verificați:**
- Build-ul se termină fără erori
- Dimensiunea bundle-urilor (ar trebui < 500KB pentru pagina principală)

**Rulați build local:**
```bash
npm start
```

---

## 📊 Performanță și SEO

### Test Google PageSpeed Insights

1. Mergi la: https://pagespeed.web.dev/
2. Introducă: `http://localhost:3000` (doar după deploy)
3. **Target scores:** Desktop 95+, Mobile 90+

### Test SEO

Verificați în browser source code (View Page Source):
- [ ] `<title>` corect
- [ ] `<meta name="description">` prezent
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`)
- [ ] Schema markup pentru LocalBusiness (opțional, de adăugat)

---

## 🎯 Next Steps

După ce totul funcționează local:

1. **Personalizare:** Urmați [QUICKSTART.md](QUICKSTART.md) pentru personalizare completă
2. **Imagini:** Adăugați imagini profesioniste în `public/`
3. **Email:** Configurați trimiterea formularului
4. **Deploy:** Urmați instrucțiunile de deploy din README.md

---

## 📞 Suport

Dacă întâmpinați probleme:

1. Verificați [QUICKSTART.md](QUICKSTART.md) pentru pași detaliat
2. Citiți [README.md](README.md) pentru documentație completă
3. Contactați:
   - **Roxana Lăudatu**
   - 📅 [Calendly](https://calendly.com/laudatu-roxana/30min)
   - ✉️ laudatu.roxana@email.com

---

**Succes! 🚀**

Website-ul este complet funcțional și gata de personalizare.
