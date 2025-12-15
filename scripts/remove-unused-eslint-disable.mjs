#!/usr/bin/env node
/**
 * Script to remove unused eslint-disable directives
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const srcDir = './src';
let removedCount = 0;
let filesModified = 0;

function processFile(filePath) {
  const ext = extname(filePath);
  if (!['.ts', '.tsx', '.js', '.jsx'].includes(ext)) return;

  let content = readFileSync(filePath, 'utf-8');
  const originalContent = content;

  // Remove eslint-disable comments that are on their own line
  // Pattern: line starting with // eslint-disable or /* eslint-disable
  const patterns = [
    // Single line eslint-disable-next-line
    /^\s*\/\/\s*eslint-disable-next-line\s+[^\n]+\s*\n/gm,
    // Single line eslint-disable
    /^\s*\/\/\s*eslint-disable\s+[^\n]+\s*\n/gm,
    // Block comment eslint-disable
    /^\s*\/\*\s*eslint-disable\s+[^*]+\s*\*\/\s*\n/gm,
  ];

  for (const pattern of patterns) {
    const matches = content.match(pattern);
    if (matches) {
      removedCount += matches.length;
    }
    content = content.replace(pattern, '');
  }

  if (content !== originalContent) {
    writeFileSync(filePath, content, 'utf-8');
    filesModified++;
    console.log(`Modified: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      if (!['node_modules', '.next', 'out', '.git'].includes(file)) {
        walkDir(filePath);
      }
    } else {
      processFile(filePath);
    }
  }
}

console.log('Removing unused eslint-disable directives...');
walkDir(srcDir);
console.log(`\nDone! Removed ${removedCount} directives from ${filesModified} files.`);

