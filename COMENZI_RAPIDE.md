# ⚡ Comenzi Rapide - Cabinet Psihologie Website

## 🚀 Comenzi Esențiale

### Instalare și Pornire

```bash
# Instalare dependențe (doar prima dată)
npm install

# Pornire server development
npm run dev

# Website la: http://localhost:3000
```

### Build și Deploy

```bash
# Build pentru producție
npm run build

# Test build local
npm start

# Verificare erori
npm run lint
```

---

## 📁 Editare Fișiere Importante

### Informații Contact

**Fișier:** `components/sections/Contact.tsx`

Linii de modificat:
- **21:** Telefon: `+40 123 456 789`
- **26:** Email: `contact@cabinetpsihologie.ro`
- **31:** WhatsApp link
- **260:** Adresă cabinet completă
- **270:** Link Google Maps

### Date Psiholog

**Fișier:** `components/sections/About.tsx`

Linii de modificat:
- **51:** Nume psiholog + ani experiență
- **10-14:** Educație și credențiale
- **16-22:** Specializări
- **40:** Număr CPR (Colegiul Psihologilor)

### Tarife

**Fișier:** `components/sections/Pricing.tsx`

Linii de modificat:
- **10:** Preț ședință individuală (default: 250 lei)
- **21:** Preț terapie de cuplu (default: 300 lei)
- **41-52:** Prețuri pachete

### SEO și Metadata

**Fișier:** `app/layout.tsx`

Linii de modificat:
- **5:** Title page
- **6:** Description SEO
- **7-18:** Keywords
- **22:** URL site (înlocuiește cabinetpsihologie.ro)

---

## 🎨 Schimbare Culori

**Fișier:** `tailwind.config.ts`

```typescript
// Liniile 11-18 - Paleta de culori
colors: {
  'fundal-principal': '#FDFCFB',  // Alb cald
  'fundal-secundar': '#F5F3F0',   // Bej deschis
  'primar': '#4A7C7E',            // Verde-albastru
  'secundar': '#8B9D83',          // Verde salvie
  'accent-cald': '#C9A87C',       // Auriu
  'text-principal': '#2C3E3F',    // Text închis
  'text-secundar': '#6B7F7E',     // Text mediu
  'alerta-blanda': '#E8D5C4',     // Piersică
}
```

---

## 🖼️ Adăugare Imagini

### Imagini Necesare

Plasați în folderul `public/`:

```
public/
├── favicon.ico          (16x16, 32x32)
├── icon.svg            (logo pentru header)
├── apple-touch-icon.png (180x180)
├── about-photo.jpg     (foto psiholog, 800x1000)
├── hero-bg.jpg         (background hero, 1920x1080)
├── og-image.jpg        (social media, 1200x630)
├── icon-192.png        (PWA, 192x192)
└── icon-512.png        (PWA, 512x512)
```

### Exemplu: Adăugare Foto Psiholog

**Fișier:** `components/sections/About.tsx`

Înlocuiește placeholder-ul (linii 32-50) cu:

```tsx
import Image from 'next/image';

<div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
  <Image
    src="/about-photo.jpg"
    alt="Nume Psiholog - Psihoterapeut București"
    fill
    className="rounded-2xl object-cover shadow-lg"
    priority
  />

  {/* Badge-ul rămâne neschimbat */}
  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg p-4 w-11/12">
    <div className="flex items-center justify-center space-x-2 text-sm">
      <Award className="w-5 h-5 text-accent-cald" />
      <span className="text-text-principal font-medium">
        Membru CPR nr. XXXXX
      </span>
    </div>
  </div>
</div>
```

---

## 📧 Configurare Email (Formular Contact)

### Opțiune 1: EmailJS (Recomandat pentru început)

1. **Înregistrare:** https://www.emailjs.com/
2. **Instalare:**
   ```bash
   npm install @emailjs/browser
   ```

3. **Configurare în `components/sections/Contact.tsx`** (linia 63):

```typescript
import emailjs from '@emailjs/browser';

const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',      // De pe EmailJS dashboard
      'YOUR_TEMPLATE_ID',     // De pe EmailJS dashboard
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        preferredFormat: data.preferredFormat,
        sessionType: data.sessionType,
        message: data.message,
      },
      'YOUR_PUBLIC_KEY'       // De pe EmailJS dashboard
    );

    setSubmitStatus('success');
    reset();
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Opțiune 2: API Route + Nodemailer

Creează `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `Programare nouă: ${body.name}`,
    html: `
      <h2>Cerere de programare</h2>
      <p><strong>Nume:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Telefon:</strong> ${body.phone}</p>
      <p><strong>Format:</strong> ${body.preferredFormat}</p>
      <p><strong>Tip:</strong> ${body.sessionType}</p>
      <p><strong>Mesaj:</strong> ${body.message || 'N/A'}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
```

Adaugă în `.env.local`:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your@email.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@cabinetpsihologie.ro
EMAIL_TO=contact@cabinetpsihologie.ro
```

---

## 🗺️ Adăugare Google Maps

**Fișier:** `components/sections/Contact.tsx` (după linia 267)

```tsx
{/* Google Maps Embed */}
<div className="mt-4 rounded-lg overflow-hidden h-64">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
```

**Cum obții embed code:**
1. Google Maps → caută adresa
2. "Share" → "Embed a map"
3. Copiază codul și extrage `src="..."`

---

## 📊 Google Analytics

**Fișier:** `app/layout.tsx` (înainte de `</head>`)

```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `,
      }}
    />
  </>
)}
```

**Fișier:** `.env.local`
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🚀 Deploy pe Vercel

### Pas cu Pas

```bash
# 1. Instalează Vercel CLI (opțional)
npm i -g vercel

# 2. Inițializează Git (dacă nu e deja)
git init
git add .
git commit -m "Initial commit"

# 3. Push pe GitHub
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main

# 4. Deploy pe Vercel
# Mergi pe vercel.com
# "New Project" → Import GitHub repo → Deploy
```

### Configurare Domeniu Custom

În Vercel Dashboard:
1. Settings → Domains
2. Adaugă domeniul (ex: cabinetpsihologie.ro)
3. Actualizează DNS la provider:
   - **A Record:** @ → 76.76.19.19
   - **CNAME:** www → cname.vercel-dns.com

---

## 🐛 Troubleshooting

### Eroare: "npm: command not found"
```bash
# Instalează Node.js de la: https://nodejs.org/
```

### Eroare: "Port 3000 already in use"
```bash
# Oprește procesul pe port 3000 sau schimbă portul
PORT=3001 npm run dev
```

### Modificările nu apar
```bash
# 1. Salvează fișierul
# 2. Așteaptă 2-3 secunde (hot reload)
# 3. Refresh browser (Cmd+R / Ctrl+R)
# 4. Dacă persistă:
Ctrl+C
npm run dev
```

### Eroare TypeScript
```bash
# Rebuild
rm -rf .next
npm run dev
```

### Cleanup complet
```bash
# Șterge tot și reinstalează
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

---

## 📱 Test Responsive

### În Browser (DevTools)

1. **Chrome/Edge:** F12 → Toggle Device Toolbar (Cmd+Shift+M / Ctrl+Shift+M)
2. **Selectează device:** iPhone, iPad, etc.
3. **Test manual:** Redimensionează fereastra

### Pe Device Real (aceeași WiFi)

1. **Află IP-ul computerului:**
   - Mac: System Preferences → Network
   - Windows: `ipconfig` în CMD

2. **Pe telefon:**
   ```
   http://192.168.1.XXX:3000
   ```

---

## ⚡ Comenzi Git

```bash
# Status
git status

# Add files
git add .

# Commit
git commit -m "Update contact info"

# Push
git push

# Pull latest
git pull
```

---

## 📦 Update Dependencies

```bash
# Verifică dependencies vechi
npm outdated

# Update all (atenție la breaking changes)
npm update

# Update specific package
npm update next
```

---

## 🎯 Checklist Pre-Launch

```bash
# 1. Build success
npm run build

# 2. No lint errors
npm run lint

# 3. Test formular
# Click pe "Trimite cererea de programare"

# 4. Test responsive
# Redimensionează browser sau F12 → Device Mode

# 5. Verifică SEO
# View Page Source → verifică <title>, <meta>
```

---

## 📞 Quick Links

- **📚 Documentație Completă:** README.md
- **🚀 Ghid Pornire Rapidă:** QUICKSTART.md
- **💻 Instalare Detaliată:** INSTALLATION.md
- **📋 Sumar Proiect:** PROJECT_SUMMARY.md

---

## 🆘 Suport

**Roxana Lăudatu**
- 📅 [Calendly - Consultație Gratuită](https://calendly.com/laudatu-roxana/30min)
- ✉️ laudatu.roxana@email.com

---

**Salvați acest fișier pentru referință rapidă! 🌟**
