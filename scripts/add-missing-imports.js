#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files that need the import
const filesToFix = [
  'app/blog/_components/blog-schema.tsx',
  'app/docs/introduction/key-features/page.tsx',
  'app/docs/page.tsx',
  'app/ecosystem/grants/page.tsx',
  'app/ecosystem/map/page.tsx',
  'app/ecosystem/page.tsx',
  'app/events/page.tsx',
  'app/learn/ergoscript/page.tsx',
  'app/learn/faq/page.tsx',
  'app/learn/guides/page.tsx',
  'app/learn/page.tsx',
  'app/learn/research/page.tsx',
  'app/start/community/page.tsx',
  'app/start/comparison/page.tsx',
  'app/start/faq/page.tsx',
  'app/start/introduction/page.tsx',
  'app/start/page.tsx',
  'app/start/quiz/page.tsx',
  'app/technology/TechnologyClient.tsx',
  'app/technology/adaptive-emission/layout.tsx',
  'app/technology/ergoscript/layout.tsx',
  'app/technology/eutxo-model/layout.tsx',
  'app/technology/native-tokens/layout.tsx',
  'app/technology/nipopows/layout.tsx',
  'app/technology/oracle-pools/layout.tsx',
  'app/technology/page.tsx',
  'app/technology/privacy-features/layout.tsx',
  'app/technology/secure-pow/layout.tsx',
  'app/technology/storage-rent/layout.tsx',
  'app/technology/subblocks/layout.tsx',
  'app/technology/velvet-forks/layout.tsx',
  'app/use/babel-fees/page.tsx',
  'app/use/get-erg/page.tsx',
  'app/use/guides/page.tsx',
  'app/use/mining/page.tsx',
  'app/use/page.tsx',
  'app/wallet/page.tsx'
];

const importStatement = 'import { createSafeJsonLd } from "@/lib/sanitize-html";';

function addImportToFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if import already exists
  if (content.includes('createSafeJsonLd')) {
    if (content.includes('import { createSafeJsonLd }') || content.includes('import {createSafeJsonLd}')) {
      console.log(`Import already exists in: ${filePath}`);
      return false;
    }
  }

  // Find the best place to add the import
  const lines = content.split('\n');
  let insertIndex = 0;
  let hasImports = false;

  // Find the last import statement
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('import ') && !line.includes('type Metadata')) {
      hasImports = true;
      insertIndex = i + 1;
    } else if (hasImports && !line.startsWith('import ') && line !== '') {
      break;
    }
  }

  // If no imports found, add after "use client" or at the beginning
  if (!hasImports) {
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('"use client"') || lines[i].includes("'use client'")) {
        insertIndex = i + 1;
        break;
      }
    }
  }

  // Insert the import
  lines.splice(insertIndex, 0, importStatement);
  
  const newContent = lines.join('\n');
  fs.writeFileSync(filePath, newContent);
  
  console.log(`Added import to: ${filePath}`);
  return true;
}

console.log('Adding missing imports...');
let fixedCount = 0;

filesToFix.forEach(filePath => {
  if (addImportToFile(filePath)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`); 