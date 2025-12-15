#!/usr/bin/env node
/**
 * Export en.json to CSV/JSON format for translation
 * 
 * Usage:
 *   node scripts/i18n/export-for-translation.js [--format csv|json] [--output path]
 * 
 * Options:
 *   --format   Output format: csv (default) or json
 *   --output   Output file path (default: ./translation-export.csv or .json)
 *   --sections Comma-separated list of sections to export (default: all)
 */

const fs = require('fs');
const path = require('path');

// Parse arguments
const args = process.argv.slice(2);
let format = 'csv';
let outputPath = null;
let sections = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--format' && args[i + 1]) {
    format = args[i + 1];
    i++;
  } else if (args[i] === '--output' && args[i + 1]) {
    outputPath = args[i + 1];
    i++;
  } else if (args[i] === '--sections' && args[i + 1]) {
    sections = args[i + 1].split(',').map(s => s.trim());
    i++;
  }
}

// Default output path
if (!outputPath) {
  outputPath = format === 'csv' 
    ? './translation-export.csv' 
    : './translation-export.json';
}

// Load en.json
const enPath = path.join(__dirname, '../../messages/en.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

// Flatten nested object to key paths
function flattenObject(obj, prefix = '') {
  const result = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'string') {
      result.push({
        key: fullKey,
        value: value,
        type: 'string',
        context: getContext(fullKey)
      });
    } else if (Array.isArray(value)) {
      // Handle arrays
      value.forEach((item, index) => {
        if (typeof item === 'string') {
          result.push({
            key: `${fullKey}[${index}]`,
            value: item,
            type: 'array_string',
            context: getContext(fullKey)
          });
        } else if (typeof item === 'object') {
          result.push(...flattenObject(item, `${fullKey}[${index}]`));
        }
      });
    } else if (typeof value === 'object' && value !== null) {
      result.push(...flattenObject(value, fullKey));
    }
  }
  
  return result;
}

// Get context based on key path
function getContext(key) {
  const parts = key.split('.');
  const section = parts[0];
  
  const contexts = {
    'home': 'Homepage content',
    'navigation': 'Navigation menu items',
    'footer': 'Footer content',
    'common': 'Common UI elements',
    'learn': 'Learning section',
    'use': 'Use cases section',
    'start': 'Getting started section',
    'technology': 'Technology pages',
    'ecosystem': 'Ecosystem section',
    'compare': 'Comparison pages',
    'blog': 'Blog section',
    'glossary': 'Glossary terms',
    'infographics': 'Infographic content',
    'minersPage': 'Miners page',
    'holdersPage': 'Holders page',
    'technologyPages': 'Technology detail pages'
  };
  
  return contexts[section] || `${section} section`;
}

// Filter by sections if specified
function filterBySection(items) {
  if (!sections) return items;
  
  return items.filter(item => {
    const topSection = item.key.split('.')[0];
    return sections.some(s => topSection.startsWith(s) || topSection === s);
  });
}

// Export to CSV
function exportCSV(items) {
  const escapeCSV = (str) => {
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };
  
  const header = 'key,english,translation,context,type';
  const rows = items.map(item => {
    return [
      escapeCSV(item.key),
      escapeCSV(item.value),
      '', // Empty translation column
      escapeCSV(item.context),
      item.type
    ].join(',');
  });
  
  return [header, ...rows].join('\n');
}

// Export to JSON (for translation platforms like Crowdin)
function exportJSON(items) {
  const result = {};
  
  items.forEach(item => {
    result[item.key] = {
      message: item.value,
      description: item.context
    };
  });
  
  return JSON.stringify(result, null, 2);
}

// Main execution
console.log('Exporting translations from en.json...\n');

const flattened = flattenObject(en);
const filtered = filterBySection(flattened);

console.log(`Total keys: ${flattened.length}`);
console.log(`Filtered keys: ${filtered.length}`);

let output;
if (format === 'csv') {
  output = exportCSV(filtered);
} else {
  output = exportJSON(filtered);
}

fs.writeFileSync(outputPath, output, 'utf-8');
console.log(`\nExported to: ${outputPath}`);

// Print statistics
const stats = {};
filtered.forEach(item => {
  const section = item.key.split('.')[0];
  stats[section] = (stats[section] || 0) + 1;
});

console.log('\nKeys by section:');
Object.entries(stats)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15)
  .forEach(([section, count]) => {
    console.log(`  ${section}: ${count}`);
  });

console.log('\nDone!');

