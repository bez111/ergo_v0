/**
 * Import translations from external sources
 * 
 * Imports translated content back into messages/*.json files.
 * Supports CSV and JSON formats from translation services.
 * 
 * Run with: npx ts-node scripts/i18n/import-translations.ts <locale> <input-file>
 * Example: npx ts-node scripts/i18n/import-translations.ts ru translations-ru.csv
 */

import * as fs from 'fs';
import * as path from 'path';

interface TranslationRow {
  key: string;
  translation: string;
}

function parseCSV(content: string): TranslationRow[] {
  const lines = content.split('\n');
  const rows: TranslationRow[] = [];
  
  // Skip header
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]?.trim();
    if (!line) continue;
    
    // Simple CSV parsing (handles quoted strings)
    const matches = line.match(/("([^"]*)")|([^,]+)/g) ?? [];
    if (matches.length >= 5) {
      const rawKey = matches[0] ?? '';
      const rawTranslation = matches[4] ?? '';
      const key = rawKey.replace(/^"|"$/g, '');
      const translation = rawTranslation.replace(/^"|"$/g, '') || '';
      if (key && translation) {
        rows.push({ key, translation });
      }
    }
  }
  
  return rows;
}

function parseJSON(content: string): TranslationRow[] {
  const data = JSON.parse(content);
  return data
    .filter((item: any) => item.key && item.translation)
    .map((item: any) => ({
      key: item.key,
      translation: item.translation,
    }));
}

function setNestedValue(obj: any, keyPath: string, value: string): void {
  const keys = keyPath.split('.');
  let current = obj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]!;
    if (!(key in current)) {
      current[key] = {};
    }
    current = current[key];
  }
  
  const lastKey = keys[keys.length - 1];
  if (!lastKey) return;
  current[lastKey] = value;
}

function importTranslations(locale: string, inputFile: string): void {
  const inputPath = path.resolve(inputFile);
  const outputPath = path.join(process.cwd(), `messages/${locale}.json`);
  
  // Load input file
  const content = fs.readFileSync(inputPath, 'utf-8');
  const isCSV = inputPath.endsWith('.csv');
  
  console.log(`Parsing ${isCSV ? 'CSV' : 'JSON'} file...`);
  const translations = isCSV ? parseCSV(content) : parseJSON(content);
  console.log(`Found ${translations.length} translations`);
  
  // Load existing translations or create new object
  let existing: any = {};
  if (fs.existsSync(outputPath)) {
    existing = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
    console.log(`Loaded existing ${locale}.json`);
  }
  
  // Merge translations
  let added = 0;
  let updated = 0;
  
  translations.forEach(({ key, translation }) => {
    if (!translation.trim()) return;
    
    // Check if key exists
    const keys = key.split('.');
    let current = existing;
    let exists = true;
    
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        exists = false;
        break;
      }
    }
    
    setNestedValue(existing, key, translation);
    
    if (exists && typeof current === 'string') {
      updated++;
    } else {
      added++;
    }
  });
  
  // Write output
  fs.writeFileSync(outputPath, JSON.stringify(existing, null, 2));
  
  console.log(`\nImport complete!`);
  console.log(`  Added: ${added}`);
  console.log(`  Updated: ${updated}`);
  console.log(`  Output: ${outputPath}`);
}

// CLI
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: npx ts-node scripts/i18n/import-translations.ts <locale> <input-file>');
  console.log('Example: npx ts-node scripts/i18n/import-translations.ts ru translations-ru.csv');
  process.exit(1);
}

const localeArg = args[0]!;
const inputFileArg = args[1]!;
importTranslations(localeArg, inputFileArg);

