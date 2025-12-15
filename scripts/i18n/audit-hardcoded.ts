/**
 * i18n Audit Script
 * 
 * Scans all page components for hardcoded strings that should be localized.
 * Run with: npx ts-node scripts/i18n/audit-hardcoded.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';

interface AuditResult {
  file: string;
  hasUseTranslations: boolean;
  hardcodedStrings: string[];
  lineNumbers: number[];
}

// Patterns that indicate hardcoded strings
const HARDCODED_PATTERNS = [
  // JSX text content (excluding components and variables)
  />\s*[A-Z][a-zA-Z\s]{10,}</g,
  // String literals in JSX attributes like title="...", description="..."
  /(?:title|description|placeholder|label|alt)=["'][A-Z][^"']{10,}["']/g,
  // Array of objects with hardcoded text
  /{\s*(?:title|name|description|text):\s*["'][A-Z][^"']{10,}["']/g,
];

// Patterns that indicate already localized
const LOCALIZED_PATTERNS = [
  /useTranslations\(/,
  /t\(['"]/,
  /t\.raw\(/,
];

function scanFile(filePath: string): AuditResult {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  const hasUseTranslations = LOCALIZED_PATTERNS.some(pattern => pattern.test(content));
  const hardcodedStrings: string[] = [];
  const lineNumbers: number[] = [];
  
  lines.forEach((line, index) => {
    // Skip imports, comments, and already localized lines
    if (line.trim().startsWith('import') || 
        line.trim().startsWith('//') || 
        line.trim().startsWith('*') ||
        /t\(|t\.raw\(/.test(line)) {
      return;
    }
    
    // Check for hardcoded strings
    HARDCODED_PATTERNS.forEach(pattern => {
      const matches = line.match(pattern);
      if (matches) {
        matches.forEach(match => {
          if (!hardcodedStrings.includes(match)) {
            hardcodedStrings.push(match.substring(0, 80) + (match.length > 80 ? '...' : ''));
            lineNumbers.push(index + 1);
          }
        });
      }
    });
  });
  
  return {
    file: filePath,
    hasUseTranslations,
    hardcodedStrings,
    lineNumbers,
  };
}

function generateReport(results: AuditResult[]): void {
  const needsWork = results.filter(r => r.hardcodedStrings.length > 0);
  const fullyLocalized = results.filter(r => r.hasUseTranslations && r.hardcodedStrings.length === 0);
  const notLocalized = results.filter(r => !r.hasUseTranslations);
  
  console.log('\n=== i18n AUDIT REPORT ===\n');
  console.log(`Total files scanned: ${results.length}`);
  console.log(`Fully localized: ${fullyLocalized.length}`);
  console.log(`Needs work: ${needsWork.length}`);
  console.log(`Not using translations: ${notLocalized.length}`);
  
  if (needsWork.length > 0) {
    console.log('\n--- FILES NEEDING WORK ---\n');
    needsWork.forEach(r => {
      console.log(`\n${r.file}`);
      console.log(`  Uses translations: ${r.hasUseTranslations ? 'Yes' : 'No'}`);
      console.log(`  Hardcoded strings found: ${r.hardcodedStrings.length}`);
      r.hardcodedStrings.slice(0, 5).forEach((str, i) => {
        console.log(`    Line ${r.lineNumbers[i]}: ${str}`);
      });
      if (r.hardcodedStrings.length > 5) {
        console.log(`    ... and ${r.hardcodedStrings.length - 5} more`);
      }
    });
  }
  
  // Generate JSON report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: results.length,
      fullyLocalized: fullyLocalized.length,
      needsWork: needsWork.length,
      notLocalized: notLocalized.length,
    },
    files: needsWork.map(r => ({
      path: r.file,
      hasUseTranslations: r.hasUseTranslations,
      hardcodedCount: r.hardcodedStrings.length,
    })),
  };
  
  fs.writeFileSync('i18n-audit-report.json', JSON.stringify(report, null, 2));
  console.log('\nDetailed report saved to: i18n-audit-report.json');
}

// Main execution
const pagesDir = path.join(process.cwd(), 'src/app/[locale]');
const pageFiles = glob.sync(`${pagesDir}/**/*.tsx`, {
  ignore: ['**/layout.tsx', '**/loading.tsx', '**/_*.tsx']
});

console.log(`Scanning ${pageFiles.length} page files...`);

const results = pageFiles.map(scanFile);
generateReport(results);

