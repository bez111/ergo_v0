#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unused-vars */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Patterns to find and replace
const patterns = [
  {
    // JSON-LD scripts
    find: /dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\(([^}]+)\)\s*\}\}/g,
    replace: 'dangerouslySetInnerHTML={createSafeJsonLd(JSON.stringify($1))}'
  },
  {
    // Other HTML content
    find: /dangerouslySetInnerHTML=\{\{\s*__html:\s*([^}]+)\s*\}\}/g,
    replace: 'dangerouslySetInnerHTML={createSafeHtml($1)}'
  }
];

// Import statement to add
const importStatement = 'import { createSafeJsonLd, createSafeHtml } from "@/lib/sanitize-html";';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Apply replacements
  patterns.forEach(pattern => {
    if (pattern.find.test(content)) {
      content = content.replace(pattern.find, pattern.replace);
      modified = true;
    }
  });
  
  // Add import if we made changes and it's not already there
  if (modified && !content.includes('createSafeJsonLd') && !content.includes('createSafeHtml')) {
    // Find the last import statement
    const importRegex = /^import\s+.*?;$/gm;
    const imports = content.match(importRegex);
    
    if (imports && imports.length > 0) {
      const lastImport = imports[imports.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      const insertIndex = lastImportIndex + lastImport.length;
      
      content = content.slice(0, insertIndex) + '\n' + importStatement + content.slice(insertIndex);
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  }
  
  return false;
}

function main() {
  console.log('🔍 Finding files with dangerouslySetInnerHTML...');
  
  // Find all TSX and TS files in app directory
  const files = glob.sync('app/**/*.{ts,tsx}', { 
    ignore: ['**/node_modules/**', '**/.next/**'] 
  });
  
  let fixedCount = 0;
  
  files.forEach(file => {
    try {
      if (processFile(file)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  });
  
  console.log(`\n🎉 Fixed ${fixedCount} files!`);
  console.log('\n⚠️  Please review the changes and test thoroughly.');
  console.log('💡 You may need to adjust some imports manually.');
}

if (require.main === module) {
  main();
} 