#!/bin/bash
cd ~/Desktop/ERGO5

echo "🚀 Starting ERGO5 development server..."
echo "📦 Checking dependencies..."

# Ensure we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📥 Installing dependencies..."
    npm install
fi

# Generate version info
echo "📝 Generating version info..."
node scripts/generate-version.js

# Try to start the server using npx
echo "🏃 Starting Next.js server..."
npx --yes next dev
