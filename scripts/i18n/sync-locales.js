#!/usr/bin/env node
/**
 * Sync locale files with en.json (find missing keys)
 * 
 * Usage:
 *   node scripts/i18n/sync-locales.js [--locale ru] [--report]
 * 
 * Options:
 *   --locale   Specific locale to check (default: all)
 *   --report   Generate detailed report
 *   --fill     Fill missing keys with English values (for manual translation)
 */

const fs = require('fs');
const path = require('path');

// Parse arguments
const args = process.argv.slice(2);
let targetLocale = null;
let generateReport = false;
let fillMissing = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--locale' && args[i + 1]) {
    targetLocale = args[i + 1];
    i++;
  } else if (args[i] === '--report') {
    generateReport = true;
  } else if (args[i] === '--fill') {
    fillMissing = true;
  }
}

const messagesDir = path.join(__dirname, '../../messages');

// Get all locale files
function getLocaleFiles() {
  return fs.readdirSync(messagesDir)
    .filter(f => f.endsWith('.json') && f !== 'en.json')
    .map(f => f.replace('.json', ''));
}

// Flatten object
function flattenObject(obj, prefix = '') {
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'string') {
      result[fullKey] = value;
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === 'string') {
          result[`${fullKey}[${index}]`] = item;
        } else if (typeof item === 'object') {
          Object.assign(result, flattenObject(item, `${fullKey}[${index}]`));
        }
      });
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenObject(value, fullKey));
    }
  }
  
  return result;
}

// Unflatten object
function unflattenObject(flat) {
  const result = {};
  
  for (const [key, value] of Object.entries(flat)) {
    const parts = key.split(/\.|\[|\]/).filter(Boolean);
    let current = result;
    
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      const nextPart = parts[i + 1];
      
      if (!current[part]) {
        current[part] = /^\d+$/.test(nextPart) ? [] : {};
      }
      current = current[part];
    }
    
    const lastPart = parts[parts.length - 1];
    current[lastPart] = value;
  }
  
  return result;
}

// Load en.json
const enPath = path.join(messagesDir, 'en.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf-8'));
const enFlat = flattenObject(en);

console.log(`English keys: ${Object.keys(enFlat).length}\n`);

// Check locales
const locales = targetLocale ? [targetLocale] : getLocaleFiles();
const report = [];

for (const locale of locales) {
  const localePath = path.join(messagesDir, `${locale}.json`);
  
  if (!fs.existsSync(localePath)) {
    console.log(`${locale}: File not found`);
    continue;
  }
  
  const localeData = JSON.parse(fs.readFileSync(localePath, 'utf-8'));
  const localeFlat = flattenObject(localeData);
  
  // Find missing keys
  const missing = [];
  const extra = [];
  
  for (const key of Object.keys(enFlat)) {
    if (!localeFlat[key]) {
      missing.push(key);
    }
  }
  
  for (const key of Object.keys(localeFlat)) {
    if (!enFlat[key]) {
      extra.push(key);
    }
  }
  
  const coverage = ((Object.keys(localeFlat).length - extra.length) / Object.keys(enFlat).length * 100).toFixed(1);
  
  console.log(`${locale}: ${Object.keys(localeFlat).length} keys, ${missing.length} missing, ${extra.length} extra (${coverage}% coverage)`);
  
  if (generateReport && missing.length > 0) {
    report.push({
      locale,
      coverage,
      missing: missing.slice(0, 100), // Limit for readability
      missingCount: missing.length,
      extra: extra.slice(0, 20),
      extraCount: extra.length,
    });
  }
  
  // Fill missing keys with English values
  if (fillMissing && missing.length > 0) {
    const filled = { ...localeFlat };
    
    for (const key of missing) {
      filled[key] = `[EN] ${enFlat[key]}`; // Mark as untranslated
    }
    
    const result = unflattenObject(filled);
    fs.writeFileSync(localePath, JSON.stringify(result, null, 2), 'utf-8');
    console.log(`  -> Filled ${missing.length} missing keys`);
  }
}

// Generate report file
if (generateReport && report.length > 0) {
  const reportPath = path.join(__dirname, '../../i18n-sync-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`\nReport saved to: i18n-sync-report.json`);
  
  // Also print summary
  console.log('\n=== Missing Keys Summary ===\n');
  for (const r of report) {
    console.log(`\n${r.locale} (${r.coverage}% coverage, ${r.missingCount} missing):`);
    
    // Group by section
    const sections = {};
    for (const key of r.missing) {
      const section = key.split('.')[0];
      sections[section] = (sections[section] || 0) + 1;
    }
    
    Object.entries(sections)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .forEach(([section, count]) => {
        console.log(`  ${section}: ${count} missing`);
      });
  }
}

console.log('\nDone!');

