#!/bin/bash

# Script pentru Push pe GitHub - Cabinet Psihologie
# Creat de: Roxana Lăudatu

echo "╔══════════════════════════════════════════════════════════╗"
echo "║  🚀 PUSH CABINET PSIHOLOGIE PE GITHUB                   ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Eroare: Nu ești în directorul proiectului!"
    echo "Rulează: cd '/Users/roxanalaudatu/Desktop/Claude code site-uri si app-uri/cabinet-psihologie'"
    exit 1
fi

echo "📂 Directory: $(pwd)"
echo ""

# Check Git status
echo "📊 Git Status:"
git status --short
echo ""

# Check commits
echo "📝 Commits ready to push:"
git log --oneline -3
echo ""

# Show remote
echo "🌐 GitHub Repository:"
git remote get-url origin
echo ""

echo "══════════════════════════════════════════════════════════"
echo ""
echo "🔐 ACUM VA TREBUI SĂ TE AUTENTIFICI:"
echo ""
echo "Când vei rula comanda de push, se va deschide browser-ul"
echo "pentru autentificare GitHub."
echo ""
echo "SAU"
echo ""
echo "Dacă îți cere Username și Password în terminal:"
echo "  - Username: laudaturoxana-cpu"
echo "  - Password: folosește un Personal Access Token (nu parola GitHub!)"
echo ""
echo "══════════════════════════════════════════════════════════"
echo ""

read -p "Apasă ENTER pentru a face PUSH pe GitHub..."

echo ""
echo "🚀 Pushing to GitHub..."
echo ""

# Try to push
git push -u origin main

# Check if push was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "╔══════════════════════════════════════════════════════════╗"
    echo "║  ✅ SUCCESS! Codul este acum pe GitHub!                 ║"
    echo "╚══════════════════════════════════════════════════════════╝"
    echo ""
    echo "🌐 Verifică repository-ul:"
    echo "   https://github.com/laudaturoxana-cpu/cabinet-psihologie"
    echo ""
    echo "🚀 NEXT STEP: Deploy pe Vercel"
    echo "   1. Mergi pe: https://vercel.com"
    echo "   2. Sign in with GitHub"
    echo "   3. Import: laudaturoxana-cpu/cabinet-psihologie"
    echo "   4. Click Deploy"
    echo "   5. Așteaptă 2-3 minute"
    echo "   6. ✅ Website LIVE!"
    echo ""
else
    echo ""
    echo "╔══════════════════════════════════════════════════════════╗"
    echo "║  ⚠️  PUSH FAILED - CONFIGURARE NECESARĂ                 ║"
    echo "╚══════════════════════════════════════════════════════════╝"
    echo ""
    echo "📋 Soluții:"
    echo ""
    echo "OPȚIUNEA 1 (RECOMANDAT): GitHub Desktop"
    echo "  1. Descarcă: https://desktop.github.com"
    echo "  2. Instalează și deschide GitHub Desktop"
    echo "  3. File → Add Local Repository"
    echo "  4. Selectează: '/Users/roxanalaudatu/Desktop/Claude code site-uri si app-uri/cabinet-psihologie'"
    echo "  5. Click: Publish Repository"
    echo "  6. ✅ GATA!"
    echo ""
    echo "OPȚIUNEA 2: Personal Access Token"
    echo "  1. Mergi pe: https://github.com/settings/tokens"
    echo "  2. Generate new token (classic)"
    echo "  3. Bifează: repo (toate sub-opțiunile)"
    echo "  4. Generate token și copiază-l"
    echo "  5. Rulează din nou acest script"
    echo "  6. La Password: lipește token-ul (ghp_xxxxx...)"
    echo ""
    echo "OPȚIUNEA 3: SSH Keys"
    echo "  Citește: GIT_PUSH_INSTRUCTIONS.md → Opțiunea 3"
    echo ""
fi
