# 🚀 Ghid de Pornire Rapidă - Cabinet Psihologie Website

## Pași Simpli pentru a Lansa Website-ul

### 1. Instalare (5 minute)

```bash
# Navighează în folderul proiectului
cd cabinet-psihologie

# Instalează dependențele
npm install

# Rulează website-ul local
npm run dev
```

Deschide browser la: **http://localhost:3000**

---

### 2. Personalizare Informații Cabinet (15 minute)

#### A. Informații de Contact

**Fișier: `components/sections/Contact.tsx`**

Găsește și schimbă:
- Telefon: `+40 123 456 789`
- Email: `contact@cabinetpsihologie.ro`
- Adresă: `Strada Exemplu, nr. 123...`
- Link WhatsApp: linia 19

**Fișier: `components/layout/Footer.tsx`**

Actualizează aceleași date la liniile 44-50

#### B. Nume Psiholog și Credențiale

**Fișier: `components/sections/About.tsx`**

Linia 51: Schimbă `[Nume Psiholog]` cu numele real
Linia 51: Schimbă `X ani` cu anii de experiență
Liniile 10-14: Actualizează educația și credențialele
Liniile 16-22: Actualizează specializările
Linia 40: Adaugă numărul real CPR (Colegiul Psihologilor)

#### C. Tarife

**Fișier: `components/sections/Pricing.tsx`**

- Linia 10: Preț ședință individuală (momentan 250 lei)
- Linia 21: Preț terapie de cuplu (momentan 300 lei)
- Linia 41-52: Actualizează prețurile pachetelor

#### D. SEO și Metadata

**Fișier: `app/layout.tsx`**

Liniile 5-8: Actualizează:
- Title
- Description
- Keywords (păstrează relevanța pentru SEO)
- URL-ul site-ului (linia 22)

---

### 3. Adăugare Imagini (10 minute)

Plasează următoarele imagini în folderul `public/`:

#### Imagini Necesare:

1. **Logo și Icon**
   - `favicon.ico` (16x16, 32x32)
   - `icon.svg` (logo SVG pentru header)
   - `apple-touch-icon.png` (180x180)

2. **Foto Psiholog**
   - `about-photo.jpg` (800x1000px recomandată)
   - Actualizează `components/sections/About.tsx` linia 32-50 (șterge placeholder-ul, adaugă `<Image>`)

3. **Hero Background (opțional)**
   - `hero-bg.jpg` (1920x1080px)
   - Optimizează în format WebP

4. **OG Image (Social Media)**
   - `og-image.jpg` (1200x630px)
   - Folosit când cineva partajează site-ul pe Facebook/LinkedIn

5. **PWA Icons**
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)

**Exemplu adăugare imagine în About:**

```tsx
import Image from 'next/image';

// Înlocuiește placeholder-ul (liniile 32-50) cu:
<div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
  <Image
    src="/about-photo.jpg"
    alt="Nume Psiholog - Psihoterapeut"
    fill
    className="rounded-2xl object-cover shadow-lg"
    priority
  />
  {/* Badge-ul rămâne la fel */}
</div>
```

---

### 4. Configurare Formular Contact - Trimitere Email (20 minute)

#### Opțiune A: EmailJS (Gratis, Simplu)

1. Creează cont pe [EmailJS.com](https://www.emailjs.com/)
2. Configurează un serviciu email
3. Creează un template
4. Instalează: `npm install @emailjs/browser`

**În `components/sections/Contact.tsx`** (linia 63):

```typescript
import emailjs from '@emailjs/browser';

const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        preferredFormat: data.preferredFormat,
        sessionType: data.sessionType,
        message: data.message,
      },
      'YOUR_PUBLIC_KEY'
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

#### Opțiune B: API Route Next.js + Nodemailer

Creează `app/api/contact/route.ts` - vezi README pentru detalii complete

---

### 5. Google Analytics (opțional, 5 minute)

1. Creează proprietate Google Analytics
2. Copiază GA4 ID (ex: G-XXXXXXXXXX)
3. Adaugă în `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. Adaugă în `app/layout.tsx` înainte de `</head>`:

```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
    <script dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
      `
    }} />
  </>
)}
```

---

### 6. Google Maps pentru Adresa Cabinetului (opțional, 5 minute)

**În `components/sections/Contact.tsx`** (după linia 267):

```tsx
{/* Google Maps Embed */}
<div className="mt-4 rounded-lg overflow-hidden h-48">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
```

Pentru a obține embed code:
1. Mergi pe Google Maps
2. Caută adresa cabinetului
3. Click "Share" → "Embed a map"
4. Copiază iframe code

---

### 7. Deploy pe Vercel (10 minute)

#### Pași:

1. **Push pe GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Cabinet Psihologie website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Conectează la Vercel**
   - Mergi pe [vercel.com](https://vercel.com)
   - "New Project"
   - Importă repo-ul GitHub
   - Click "Deploy"

3. **Configurare Domeniu Custom**
   - În Vercel Dashboard → Settings → Domains
   - Adaugă domeniul tău (ex: cabinetpsihologie.ro)
   - Actualizează DNS-ul la provider-ul de domeniu:
     - Type: A, Name: @, Value: 76.76.19.19
     - Type: CNAME, Name: www, Value: cname.vercel-dns.com

---

### 8. Checklist Final Înainte de Launch

- [ ] Toate informațiile de contact actualizate
- [ ] Nume psiholog și credențiale reale
- [ ] Număr CPR corect
- [ ] Tarife actuale
- [ ] Program actualizat
- [ ] Formular contact funcțional (test trimis)
- [ ] Imagini profesioniste adăugate
- [ ] Favicon și icons vizibile
- [ ] SEO metadata completă
- [ ] Google Analytics configurat
- [ ] Site testat pe mobile
- [ ] Site testat pe desktop
- [ ] Link-uri social media (dacă există)
- [ ] GDPR și politică confidențialitate (adaugă pagini separate)
- [ ] Test de viteză (PageSpeed Insights - target 90+)

---

## 🆘 Probleme Frecvente

### "npm install" dă eroare
```bash
# Șterge node_modules și încearcă din nou
rm -rf node_modules package-lock.json
npm install
```

### Site-ul nu se actualizează după modificări
```bash
# Oprește server (Ctrl+C) și repornește
npm run dev
```

### Eroare la build
```bash
# Verifică toate importurile și sintaxa TypeScript
npm run lint
```

---

## 📞 Contact pentru Suport

**Roxana Lăudatu**
- 📅 [Programează consultație gratuită](https://calendly.com/laudatu-roxana/30min)
- ✉️ Email: laudatu.roxana@email.com

---

**Succes cu lansarea website-ului! 🎉**
