/**
 * Export i18n keys for translation
 * 
 * Exports all keys from en.json in formats suitable for:
 * - Professional translators (CSV)
 * - Translation management systems (JSON with context)
 * - AI translation (structured JSON)
 * 
 * Run with: npx ts-node scripts/i18n/export-for-translation.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface TranslationEntry {
  key: string;
  value: string;
  context: string;
  maxLength?: number;
}

function flattenObject(obj: any, prefix = '', context = ''): TranslationEntry[] {
  const entries: TranslationEntry[] = [];
  
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];
    
    if (typeof value === 'string') {
      entries.push({
        key: fullKey,
        value: value,
        context: context || guessContext(fullKey),
        maxLength: value.length * 1.5, // Allow 50% expansion for translations
      });
    } else if (typeof value === 'object' && value !== null) {
      // Determine context from key name
      let newContext = context;
      if (key.includes('seo')) newContext = 'SEO metadata - keep concise';
      else if (key.includes('title')) newContext = 'Page or section title';
      else if (key.includes('description')) newContext = 'Description text';
      else if (key.includes('button')) newContext = 'Button label - keep short';
      else if (key.includes('faq')) newContext = 'FAQ content';
      else if (key.includes('error')) newContext = 'Error message';
      
      entries.push(...flattenObject(value, fullKey, newContext));
    }
  }
  
  return entries;
}

function guessContext(key: string): string {
  if (key.includes('.seo.')) return 'SEO metadata';
  if (key.includes('.title')) return 'Title';
  if (key.includes('.description')) return 'Description';
  if (key.includes('.button')) return 'Button label';
  if (key.includes('.faq.')) return 'FAQ content';
  if (key.includes('.error')) return 'Error message';
  if (key.includes('.placeholder')) return 'Input placeholder';
  return 'General content';
}

function exportToCSV(entries: TranslationEntry[], outputPath: string): void {
  const header = 'Key,English,Context,Max Length,Translation\n';
  const rows = entries.map(e => 
    `"${e.key}","${e.value.replace(/"/g, '""')}","${e.context}",${e.maxLength || ''},`
  ).join('\n');
  
  fs.writeFileSync(outputPath, header + rows);
  console.log(`CSV exported to: ${outputPath}`);
}

function exportToJSON(entries: TranslationEntry[], outputPath: string): void {
  const structured = entries.map(e => ({
    key: e.key,
    source: e.value,
    context: e.context,
    maxLength: e.maxLength,
    translation: '', // To be filled by translator
  }));
  
  fs.writeFileSync(outputPath, JSON.stringify(structured, null, 2));
  console.log(`JSON exported to: ${outputPath}`);
}

function exportBySection(entries: TranslationEntry[], outputDir: string): void {
  const sections: Record<string, TranslationEntry[]> = {};
  
  entries.forEach(e => {
    const section = e.key.split('.')[0] || 'misc';
    if (!sections[section]) sections[section] = [];
    sections[section].push(e);
  });
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  for (const section in sections) {
    const filePath = path.join(outputDir, `${section}.json`);
    fs.writeFileSync(filePath, JSON.stringify(sections[section], null, 2));
  }
  
  console.log(`Sections exported to: ${outputDir}/`);
  console.log(`  Total sections: ${Object.keys(sections).length}`);
}

function generateStats(entries: TranslationEntry[]): void {
  const totalWords = entries.reduce((sum, e) => 
    sum + e.value.split(/\s+/).length, 0
  );
  const totalChars = entries.reduce((sum, e) => sum + e.value.length, 0);
  
  console.log('\n=== TRANSLATION STATISTICS ===');
  console.log(`Total keys: ${entries.length}`);
  console.log(`Total words: ${totalWords.toLocaleString()}`);
  console.log(`Total characters: ${totalChars.toLocaleString()}`);
  console.log(`Estimated cost (@ $0.10/word): $${(totalWords * 0.10).toFixed(2)}`);
  console.log(`Estimated cost (@ $0.05/word): $${(totalWords * 0.05).toFixed(2)}`);
}

// Main execution
const messagesPath = path.join(process.cwd(), 'messages/en.json');
const outputDir = path.join(process.cwd(), 'scripts/i18n/exports');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Loading en.json...');
const enJson = JSON.parse(fs.readFileSync(messagesPath, 'utf-8'));

console.log('Flattening keys...');
const entries = flattenObject(enJson);

generateStats(entries);

console.log('\nExporting...');
exportToCSV(entries, path.join(outputDir, 'all-keys.csv'));
exportToJSON(entries, path.join(outputDir, 'all-keys.json'));
exportBySection(entries, path.join(outputDir, 'by-section'));

console.log('\nDone! Use these files for translation services or AI translation.');

