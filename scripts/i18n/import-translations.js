#!/usr/bin/env node
/**
 * Import translations from CSV/JSON back to messages/*.json
 * 
 * Usage:
 *   node scripts/i18n/import-translations.js --locale ru --input translated.csv
 * 
 * Options:
 *   --locale   Target locale (e.g., ru, de, fr)
 *   --input    Input file path (CSV or JSON)
 *   --merge    Merge with existing translations (default: true)
 *   --dry-run  Show what would be changed without writing
 */

const fs = require('fs');
const path = require('path');

// Parse arguments
const args = process.argv.slice(2);
let locale = null;
let inputPath = null;
let merge = true;
let dryRun = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--locale' && args[i + 1]) {
    locale = args[i + 1];
    i++;
  } else if (args[i] === '--input' && args[i + 1]) {
    inputPath = args[i + 1];
    i++;
  } else if (args[i] === '--no-merge') {
    merge = false;
  } else if (args[i] === '--dry-run') {
    dryRun = true;
  }
}

if (!locale || !inputPath) {
  console.error('Usage: node import-translations.js --locale <locale> --input <file>');
  process.exit(1);
}

// Load existing locale file if merging
const localePath = path.join(__dirname, `../../messages/${locale}.json`);
let existingMessages = {};

if (merge && fs.existsSync(localePath)) {
  existingMessages = JSON.parse(fs.readFileSync(localePath, 'utf-8'));
  console.log(`Loaded existing ${locale}.json with ${countKeys(existingMessages)} keys`);
}

// Count keys in object
function countKeys(obj) {
  let count = 0;
  for (const value of Object.values(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      count += countKeys(value);
    } else {
      count++;
    }
  }
  return count;
}

// Set nested value by key path
function setNestedValue(obj, keyPath, value) {
  const parts = keyPath.split(/\.|\[|\]/).filter(Boolean);
  let current = obj;
  
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    const nextPart = parts[i + 1];
    
    if (!current[part]) {
      // Create array or object based on next key
      current[part] = /^\d+$/.test(nextPart) ? [] : {};
    }
    current = current[part];
  }
  
  const lastPart = parts[parts.length - 1];
  current[lastPart] = value;
}

// Parse CSV
function parseCSV(content) {
  const lines = content.split('\n');
  const header = lines[0].split(',');
  
  const keyIndex = header.indexOf('key');
  const translationIndex = header.indexOf('translation');
  
  if (keyIndex === -1 || translationIndex === -1) {
    throw new Error('CSV must have "key" and "translation" columns');
  }
  
  const translations = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    
    // Simple CSV parsing (handles quoted values)
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.replace(/""/g, '"'));
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.replace(/""/g, '"'));
    
    const key = values[keyIndex];
    const translation = values[translationIndex];
    
    if (key && translation && translation.trim()) {
      translations.push({ key, translation });
    }
  }
  
  return translations;
}

// Parse JSON (Crowdin format)
function parseJSON(content) {
  const data = JSON.parse(content);
  const translations = [];
  
  for (const [key, value] of Object.entries(data)) {
    // Handle both { message: "..." } format and direct strings
    const translation = typeof value === 'object' ? value.message : value;
    if (translation && translation.trim()) {
      translations.push({ key, translation });
    }
  }
  
  return translations;
}

// Main execution
console.log(`Importing translations for locale: ${locale}`);
console.log(`Input file: ${inputPath}\n`);

// Read input file
const content = fs.readFileSync(inputPath, 'utf-8');
const isJSON = inputPath.endsWith('.json');

let translations;
try {
  translations = isJSON ? parseJSON(content) : parseCSV(content);
} catch (error) {
  console.error('Error parsing input file:', error.message);
  process.exit(1);
}

console.log(`Found ${translations.length} translations\n`);

// Build result object
const result = merge ? { ...existingMessages } : {};
let addedCount = 0;
let updatedCount = 0;

for (const { key, translation } of translations) {
  // Check if key exists
  const exists = getNestedValue(result, key) !== undefined;
  
  setNestedValue(result, key, translation);
  
  if (exists) {
    updatedCount++;
  } else {
    addedCount++;
  }
  
  if (dryRun && (addedCount + updatedCount) <= 10) {
    console.log(`  ${exists ? 'UPDATE' : 'ADD'}: ${key.substring(0, 50)}...`);
  }
}

// Get nested value by key path
function getNestedValue(obj, keyPath) {
  const parts = keyPath.split(/\.|\[|\]/).filter(Boolean);
  let current = obj;
  
  for (const part of parts) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  
  return current;
}

console.log(`\nAdded: ${addedCount} new keys`);
console.log(`Updated: ${updatedCount} existing keys`);
console.log(`Total keys in result: ${countKeys(result)}`);

if (dryRun) {
  console.log('\n[DRY RUN] No files were written.');
} else {
  fs.writeFileSync(localePath, JSON.stringify(result, null, 2), 'utf-8');
  console.log(`\nWritten to: ${localePath}`);
}

console.log('\nDone!');

