# 🚀 Instrucțiuni Push pe GitHub

## ✅ Ce am făcut deja:

1. ✅ Git repository inițializat
2. ✅ Toate fișierele adăugate (37 fișiere)
3. ✅ Commit creat cu mesaj detaliat
4. ✅ Branch redenumit în `main`
5. ✅ Remote GitHub adăugat

---

## 📤 Cum să faci PUSH pe GitHub

### Opțiunea 1: Folosind GitHub Desktop (Recomandat - Cel mai simplu)

1. **Descarcă GitHub Desktop** (dacă nu îl ai deja):
   - Mergi la: https://desktop.github.com/
   - Descarcă și instalează

2. **Deschide GitHub Desktop**

3. **Add Existing Repository:**
   - File → Add Local Repository
   - Selectează folder-ul: `/Users/roxanalaudatu/Desktop/Claude code site-uri si app-uri/cabinet-psihologie`
   - Click "Add Repository"

4. **Publish Repository:**
   - Click "Publish repository" în toolbar
   - Verifică că numele este: `cabinet-psihologie`
   - Asigură-te că este pe contul: `laudaturoxana-cpu`
   - Click "Publish Repository"

✅ **GATA!** Repository-ul este acum pe GitHub!

---

### Opțiunea 2: Folosind Terminal cu Personal Access Token

#### Pas 1: Creează un Personal Access Token

1. **Mergi pe GitHub:**
   - https://github.com/settings/tokens

2. **Generate new token (classic):**
   - Click "Generate new token (classic)"
   - Note: "Cabinet Psihologie Website"
   - Expiration: 90 days (sau custom)
   - Select scopes: ✅ **repo** (toate sub-opțiunile)
   - Click "Generate token"

3. **Copiază token-ul:**
   - ⚠️ **IMPORTANT:** Salvează-l undeva sigur!
   - Va arăta așa: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx`

#### Pas 2: Push pe GitHub

Deschide Terminal și rulează:

```bash
cd "/Users/roxanalaudatu/Desktop/Claude code site-uri si app-uri/cabinet-psihologie"

git push -u origin main
```

Când îți cere:
- **Username:** `laudaturoxana-cpu`
- **Password:** Lipește token-ul tău (ghp_xxxxx...)

✅ **GATA!** Codul este pe GitHub!

---

### Opțiunea 3: Folosind SSH (Pentru utilizatori avansați)

#### Pas 1: Generează SSH Key

```bash
ssh-keygen -t ed25519 -C "laudatu.roxana@email.com"
# Apasă Enter pentru toate (acceptă default)
```

#### Pas 2: Adaugă SSH Key pe GitHub

```bash
# Copiază cheia publică
cat ~/.ssh/id_ed25519.pub | pbcopy
```

Mergi pe GitHub:
- Settings → SSH and GPG keys → New SSH key
- Paste cheia copiată
- Click "Add SSH key"

#### Pas 3: Schimbă remote URL la SSH

```bash
cd "/Users/roxanalaudatu/Desktop/Claude code site-uri si app-uri/cabinet-psihologie"

git remote set-url origin git@github.com:laudaturoxana-cpu/cabinet-psihologie.git

git push -u origin main
```

✅ **GATA!** Acum poți face push fără parolă!

---

## 🔍 Verificare Succes

După push, verifică pe GitHub:

1. **Mergi la:**
   https://github.com/laudaturoxana-cpu/cabinet-psihologie

2. **Verifică:**
   - ✅ 37 fișiere vizibile
   - ✅ Commit message corect
   - ✅ Toate folderele (app, components, public)
   - ✅ Fișierele MD (README, START_HERE, etc.)

---

## 🎯 După Push - Deploy pe Vercel

### Pasul 1: Conectează-te la Vercel

1. **Mergi pe:**
   https://vercel.com

2. **Sign up/Login:**
   - Folosește "Continue with GitHub"
   - Autorizează Vercel să acceseze repo-urile tale

### Pasul 2: Import Project

1. **New Project** (buton mare)

2. **Import Git Repository:**
   - Găsește: `laudaturoxana-cpu/cabinet-psihologie`
   - Click "Import"

3. **Configure Project:**
   - Framework Preset: **Next.js** (detectat automat)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Environment Variables** (opțional):
   - Dacă ai `.env` variabile, adaugă-le aici
   - Pentru început, poți sări acest pas

5. **Deploy:**
   - Click "Deploy"
   - Așteaptă 2-3 minute

✅ **GATA!** Website-ul este LIVE!

### Pasul 3: Obții URL-ul

Vercel îți va da un URL temporar:
```
https://cabinet-psihologie-xxxxx.vercel.app
```

Testează site-ul la acest URL!

---

## 🌐 Adăugare Domeniu Custom (Opțional)

### Dacă ai un domeniu (ex: cabinetpsihologie.ro)

1. **În Vercel Dashboard:**
   - Selectează proiectul
   - Settings → Domains
   - Add Domain: `cabinetpsihologie.ro`

2. **Configurează DNS la provider-ul de domeniu:**

   **Varianta A - Folosind A Records:**
   ```
   Type: A
   Name: @
   Value: 76.76.19.19
   TTL: 3600

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

   **Varianta B - Folosind CNAME (mai simplu):**
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   TTL: 3600

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

3. **Așteaptă propagare DNS:**
   - 10 minute - 24 ore (de obicei 10-30 minute)

4. **Verifică:**
   - https://cabinetpsihologie.ro
   - https://www.cabinetpsihologie.ro

✅ **GATA!** Website-ul este live pe domeniul tău!

---

## 🆘 Troubleshooting

### "fatal: could not read Username"
→ Folosește GitHub Desktop (Opțiunea 1) sau Personal Access Token (Opțiunea 2)

### "Authentication failed"
→ Verifică că token-ul PAT este corect copiat (include tot, inclusiv `ghp_`)

### "Repository not found"
→ Verifică că repository-ul `cabinet-psihologie` există pe GitHub la `laudaturoxana-cpu`

### "Permission denied (publickey)"
→ SSH key-ul nu este configurat corect. Folosește Opțiunea 1 sau 2 în schimb.

### Build failed pe Vercel
→ Verifică că `package.json` și toate fișierele sunt pe GitHub
→ Verifică logs în Vercel Dashboard → Deployments → View Error

---

## ✅ Checklist Complet

- [ ] Repository push pe GitHub (una din opțiunile 1-3)
- [ ] Verificat pe github.com că fișierele sunt acolo
- [ ] Conectat cont Vercel cu GitHub
- [ ] Import proiect în Vercel
- [ ] Deploy reușit (așteptat 2-3 min)
- [ ] Testat site-ul pe URL Vercel
- [ ] (Opțional) Adăugat domeniu custom
- [ ] (Opțional) Configurat DNS
- [ ] (Opțional) Verificat site pe domeniu propriu

---

## 📞 Suport

Dacă întâmpini probleme:

1. **GitHub Issues:**
   - Creează un issue pe repo
   - Descrie problema cu screenshot

2. **Vercel Support:**
   - Vercel Dashboard → Help
   - Documentație: https://vercel.com/docs

3. **Contact Direct:**
   - Roxana Lăudatu
   - 📧 laudatu.roxana@email.com

---

## 🎉 Felicitări!

După ce faci push și deploy, vei avea:
- ✅ Cod backup pe GitHub
- ✅ Website live pe internet
- ✅ HTTPS automat (SSL)
- ✅ Deploy automat la fiecare push
- ✅ Analytics integrat (Vercel)

**Mult succes! 🚀**

---

**Website creat de Roxana Lăudatu**
*Specialist AI Business & Prompt Engineering*

Vrei un website similar?
👉 [Programează consultație gratuită](https://calendly.com/laudatu-roxana/30min)
