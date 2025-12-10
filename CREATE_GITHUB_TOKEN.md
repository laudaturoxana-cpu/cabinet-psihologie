# 🔑 Cum să Creezi un GitHub Personal Access Token

## De ce ai nevoie de token?

GitHub nu mai acceptă autentificare cu parolă pentru Git operations. Trebuie să folosești un Personal Access Token (PAT).

---

## 📋 Pași pentru Creare Token (2 minute)

### 1. Mergi pe GitHub Settings

Deschide în browser:
```
https://github.com/settings/tokens
```

SAU:
1. github.com
2. Click pe avatar-ul tău (dreapta sus)
3. Settings
4. În meniul stâng, scroll jos: **Developer settings**
5. **Personal access tokens** → **Tokens (classic)**

---

### 2. Generează Token Nou

Click pe: **"Generate new token"** → **"Generate new token (classic)"**

---

### 3. Configurare Token

**Note (numele token-ului):**
```
Cabinet Psihologie Deploy
```

**Expiration:**
- Selectează: **90 days** (sau No expiration dacă vrei)

**Select scopes** - Bifează DOAR:
- ✅ **repo** (va bifa automat toate sub-opțiunile)
  - ✅ repo:status
  - ✅ repo_deployment
  - ✅ public_repo
  - ✅ repo:invite
  - ✅ security_events

**NU e nevoie de alte scopes!**

---

### 4. Generează și Copiază

1. Scroll jos
2. Click: **"Generate token"**
3. 🔴 **IMPORTANT:** Token-ul va apărea O SINGURĂ DATĂ!
4. Click pe icon-ul de copy sau selectează tot textul
5. Va arăta așa: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

### 5. Salvează Token-ul Temporar

**Lipește token-ul undeva TEMPORAR:**
- Notes app pe Mac
- TextEdit
- Un fișier temporar

⚠️ **NU-L PARTAJA cu nimeni!**
⚠️ **NU-L pune pe GitHub în cod!**

---

## 🚀 Folosire Token pentru Push

### Metoda 1: Prin Terminal

```bash
# Navighează la proiect
cd "/Users/roxanalaudatu/Desktop/Claude code site-uri si app-uri/cabinet-psihologie"

# Încearcă push
git push -u origin main
```

**Când îți cere:**
```
Username for 'https://github.com': laudaturoxana-cpu
Password for 'https://laudaturoxana-cpu@github.com': [LIPESTE TOKEN-ul AICI]
```

⚠️ **La Password:** Lipește token-ul `ghp_xxxxx...`, NU parola GitHub!

**Token-ul va fi salvat în macOS Keychain, nu va mai trebui să-l introduci!**

---

### Metoda 2: Update Remote URL cu Token

```bash
cd "/Users/roxanalaudatu/Desktop/Claude code site-uri si app-uri/cabinet-psihologie"

# Configurează URL cu token
git remote set-url origin https://ghp_YOUR_TOKEN_HERE@github.com/laudaturoxana-cpu/cabinet-psihologie.git

# Push (nu va mai cere autentificare)
git push -u origin main
```

**Înlocuiește `ghp_YOUR_TOKEN_HERE` cu token-ul tău real!**

---

## ✅ Verificare Succes

După push, verifică pe GitHub:

```
https://github.com/laudaturoxana-cpu/cabinet-psihologie
```

Ar trebui să vezi:
- ✅ 38 fișiere
- ✅ 2 commits
- ✅ README.md cu conținut
- ✅ Toate folderele: app/, components/, public/

---

## 🔒 Securitate Token

### ✅ Bune Practici:

- Token-ul este salvat în macOS Keychain (sigur)
- Expiră după 90 zile (recomandabil)
- Poate fi revocat oricând de pe GitHub
- Are acces DOAR la repositories, nu la întregul cont

### ❌ NU Face:

- ❌ Nu trimite token-ul prin email
- ❌ Nu-l lipești în cod
- ❌ Nu-l pui în fișiere care merg pe GitHub
- ❌ Nu-l partajezi cu alte persoane

---

## 🔄 Dacă Pierzi Token-ul

Nu-i problemă! Pur și simplu:
1. Mergi pe: https://github.com/settings/tokens
2. Generează un token NOU
3. Folosește noul token

Token-ul vechi va expira automat.

---

## 🆘 Troubleshooting

### "remote: Support for password authentication was removed"

✅ **Soluție:** Folosești parola în loc de token
- La "Password:", lipește token-ul `ghp_xxxxx...`

---

### "remote: Permission to laudaturoxana-cpu/cabinet-psihologie.git denied"

✅ **Soluție:** Token-ul nu are permisiuni
- Verifică că ai bifat **repo** când ai creat token-ul
- Sau creează un token nou cu permisiunile corecte

---

### "fatal: Authentication failed"

✅ **Soluție:** Token-ul este greșit sau expirat
- Verifică că ai copiat tot token-ul (include `ghp_`)
- Creează un token nou dacă a expirat

---

## 📞 Ajutor

Dacă întâmpini probleme:
- Citește: GIT_PUSH_INSTRUCTIONS.md → Opțiunea 1 (GitHub Desktop - cel mai simplu!)
- Email: laudatu.roxana@email.com

---

**Mult succes! 🚀**
