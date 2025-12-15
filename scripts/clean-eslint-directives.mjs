#!/usr/bin/env node
/**
 * Script to clean up eslint-disable directives for rules that have been disabled globally
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const srcDir = './src';
let removedCount = 0;
let filesModified = 0;

// Rules that are now globally disabled and don't need per-file disables
const disabledRules = [
  'react-hooks/static-components',
  'react-hooks/use-memo',
  'react-hooks/component-hook-factories',
  'react-hooks/preserve-manual-memoization',
  'react-hooks/incompatible-library',
  'react-hooks/error-boundaries',
  'react-hooks/set-state-in-effect',
  'react-hooks/purity',
  'react-hooks/refs',
  'react-hooks/immutability',
  'react-hooks/unsupported-syntax',
  'react-compiler/react-compiler',
];

function processFile(filePath) {
  const ext = extname(filePath);
  if (!['.ts', '.tsx', '.js', '.jsx'].includes(ext)) return;

  let content = readFileSync(filePath, 'utf-8');
  const originalContent = content;
  const lines = content.split('\n');
  const newLines = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Check if this is an eslint-disable comment
    const disableMatch = line.match(/^\s*(\/\*\s*eslint-disable|\/\/\s*eslint-disable)/);
    
    if (disableMatch) {
      // Extract the rules being disabled
      const rulesMatch = line.match(/eslint-disable[^*\/]*([@\w\/-]+(?:\s*,\s*[@\w\/-]+)*)/);
      
      if (rulesMatch) {
        const rules = rulesMatch[1].split(',').map(r => r.trim());
        
        // Filter out the globally disabled rules
        const remainingRules = rules.filter(r => !disabledRules.includes(r));
        
        if (remainingRules.length === 0) {
          // All rules in this directive are now globally disabled, remove the entire comment
          removedCount++;
          
          // Check if it's a block comment that might span or be on a single line
          if (line.includes('/*') && line.includes('*/')) {
            // Single line block comment, skip entirely
            continue;
          } else if (line.includes('//')) {
            // Single line comment, skip entirely
            continue;
          }
        } else if (remainingRules.length < rules.length) {
          // Some rules are now globally disabled, update the comment
          const isBlockComment = line.includes('/*');
          const isNextLine = line.includes('eslint-disable-next-line');
          
          if (isBlockComment) {
            line = `/* eslint-disable ${remainingRules.join(', ')} */`;
          } else if (isNextLine) {
            line = `// eslint-disable-next-line ${remainingRules.join(', ')}`;
          } else {
            line = `// eslint-disable ${remainingRules.join(', ')}`;
          }
          removedCount++;
        }
      }
    }
    
    newLines.push(line);
  }

  const newContent = newLines.join('\n');
  
  if (newContent !== originalContent) {
    writeFileSync(filePath, newContent, 'utf-8');
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

console.log('Cleaning up eslint-disable directives for globally disabled rules...');
walkDir(srcDir);
console.log(`\nDone! Made ${removedCount} changes in ${filesModified} files.`);

