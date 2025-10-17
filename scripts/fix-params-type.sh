#!/bin/bash
# Fix params type from { locale: string } to Promise<{ locale: string }>

echo "Fixing params type in all files..."

# Find and replace in all .tsx files
find app -name "*.tsx" -type f -exec sed -i '' \
  's/params: { locale: string }/params: Promise<{ locale: string }>/g' {} \;

echo "✅ Done! Fixed params type to Promise<{ locale: string }>"

