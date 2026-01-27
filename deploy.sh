#!/usr/bin/env bash
set -euo pipefail

echo "=========================================="
echo "🚀 Kupuri Studios - Auto Deployment Script"
echo "=========================================="
echo ""

# Navigate to project directory
cd /root/clawd/kupuri-studios-landing

echo "📂 Project Directory: $(pwd)"
echo ""

# Ensure we are on main
CURRENT_BRANCH="$(git branch --show-current)"
echo "🌿 Current Branch: ${CURRENT_BRANCH}"
echo ""

if [[ "${CURRENT_BRANCH}" != "main" ]]; then
  echo "🔄 Switching to main branch..."
  git checkout main
  echo "✅ Switched to main branch"
  echo ""
fi

# Stage all files
echo "📝 Staging files..."
git add -A

# If nothing changed, exit cleanly
if git diff --cached --quiet; then
  echo "✅ No changes to deploy."
  exit 0
fi

# Create a detailed commit message
COMMIT_MESSAGE="deploy: production ready

- Mexico City Night hero
- Copper/metallic branding (Ocean Blue, Soft Lavender, Warm Coral)
- 4 ecosystem cards (SYNTHIA™, Kupuri Studios, THE PAULI EFFECT, JAZZ APP)
- Glassmorphism design (premium dark aesthetic)
- Full Spanish/English copy
- Mobile-responsive

Deployment by automation
Session: $(date +%Y-%m-%d)"

echo "💾 Creating commit..."
git commit -m "$COMMIT_MESSAGE"

echo "🚀 Pushing to GitHub (no force)..."
git push origin main

echo "✅ Push successful!"

echo "=========================================="
echo "🎂 Deployment Complete!"
echo "=========================================="
echo ""
echo "📊 Next Steps:"
echo "1. Wait for your platform auto-deploy (Vercel/Netlify/etc)"
echo "2. GitHub URL: https://github.com/executiveusa/kupuri-studios-landing"
echo ""
