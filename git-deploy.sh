#!/bin/bash

echo "🚀 Deploying changes to GitHub..."
cd /Users/alexanderbezkrovny/Desktop/ERGO5

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📋 Initializing git repository..."
    git init
    git remote add origin https://github.com/Wastelandhub/v0-ergo.git
fi

# Add all changes
echo "➕ Adding changes..."
git add .

# Commit changes
echo "💾 Creating commit..."
git commit -m "feat: Update landing pages and network metrics

- Migrate /holders to /hodlers with improved content structure
- Create /builders page with developer-focused content and tools  
- Create /miners page with mining-specific information
- Centralize network metrics in src/lib/network-metrics.ts
- Update all network data to reflect current explorer.ergoplatform.com values
- Update block reward from 67.5 ERG to 9 ERG
- Update block time to 1.92 min and transactions to 752/day
- Standardize button styles across all pages
- Update Discord links to correct invite URL
- Update blog post dates for SEO freshness
- Fix marketing guide data structure and links
- Update homepage navigation to new landing pages"

# Create and push branch
BRANCH_NAME="feature/landing-pages-update-$(date +%Y%m%d)"
echo "🌿 Creating branch: $BRANCH_NAME"
git checkout -b "$BRANCH_NAME"

echo "🚀 Pushing to GitHub..."
git push -u origin "$BRANCH_NAME"

echo "✅ Done! Branch created: $BRANCH_NAME"
echo "🔗 View on GitHub: https://github.com/Wastelandhub/v0-ergo/tree/$BRANCH_NAME"
echo "📝 Create PR: https://github.com/Wastelandhub/v0-ergo/compare/$BRANCH_NAME"
