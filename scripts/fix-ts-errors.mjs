#!/usr/bin/env node
/**
 * Script to fix common TypeScript errors automatically
 * Uses TypeScript compiler API to apply code fixes
 */

import ts from 'typescript';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const projectRoot = process.cwd();

// Get TypeScript errors
function getTypeScriptErrors() {
  try {
    const result = execSync('npx tsc --noEmit 2>&1', { 
      encoding: 'utf-8',
      maxBuffer: 50 * 1024 * 1024 
    });
    return result;
  } catch (e) {
    return e.stdout || '';
  }
}

// Parse errors from tsc output
function parseErrors(output) {
  const errors = [];
  const lines = output.split('\n');
  
  for (const line of lines) {
    // Format: src/file.tsx(10,5): error TS6133: 'foo' is declared but its value is never read.
    const match = line.match(/^(.+)\((\d+),(\d+)\): error (TS\d+): (.+)$/);
    if (match) {
      errors.push({
        file: match[1],
        line: parseInt(match[2]),
        column: parseInt(match[3]),
        code: match[4],
        message: match[5]
      });
    }
  }
  
  return errors;
}

// Group errors by file
function groupByFile(errors) {
  const grouped = {};
  for (const error of errors) {
    if (!grouped[error.file]) {
      grouped[error.file] = [];
    }
    grouped[error.file].push(error);
  }
  return grouped;
}

// Fix TS6133 (unused variable) by removing the declaration
function fixUnusedVariable(content, error) {
  const lines = content.split('\n');
  const lineIndex = error.line - 1;
  const line = lines[lineIndex];
  
  if (!line) return content;
  
  // Extract variable name from error message
  const varMatch = error.message.match(/'([^']+)'/);
  if (!varMatch) return content;
  const varName = varMatch[1];
  
  // Handle different patterns
  
  // Pattern 1: Unused import in destructure: { used, unused } from 'x'
  const importDestructure = line.match(/import\s*\{([^}]+)\}\s*from/);
  if (importDestructure) {
    const imports = importDestructure[1].split(',').map(s => s.trim());
    const filtered = imports.filter(imp => {
      const name = imp.split(/\s+as\s+/).pop().trim();
      return name !== varName;
    });
    
    if (filtered.length === 0) {
      // Remove entire import line
      lines.splice(lineIndex, 1);
    } else {
      // Update import
      lines[lineIndex] = line.replace(importDestructure[1], ' ' + filtered.join(', ') + ' ');
    }
    return lines.join('\n');
  }
  
  // Pattern 2: Unused const/let/var in destructure
  const destructure = line.match(/(const|let|var)\s*\{([^}]+)\}\s*=/);
  if (destructure) {
    const vars = destructure[2].split(',').map(s => s.trim());
    const filtered = vars.filter(v => {
      const name = v.split(':')[0].trim();
      return name !== varName;
    });
    
    if (filtered.length === 0) {
      // Can't remove entire line (still need the assignment), prefix with underscore
      lines[lineIndex] = line.replace(new RegExp(`\\b${varName}\\b`), `_${varName}`);
    } else {
      lines[lineIndex] = line.replace(destructure[2], ' ' + filtered.join(', ') + ' ');
    }
    return lines.join('\n');
  }
  
  // Pattern 3: Unused parameter - prefix with underscore
  const funcParam = line.match(/\(([^)]*)\)/);
  if (funcParam && line.includes(varName)) {
    lines[lineIndex] = line.replace(new RegExp(`\\b${varName}\\b(?=\\s*[,):=])`), `_${varName}`);
    return lines.join('\n');
  }
  
  // Pattern 4: Simple unused const/let - prefix with underscore
  if (line.match(new RegExp(`(const|let|var)\\s+${varName}\\b`))) {
    lines[lineIndex] = line.replace(new RegExp(`\\b${varName}\\b`), `_${varName}`);
    return lines.join('\n');
  }
  
  return content;
}

// Fix TS6192 (all imports unused) - remove entire import line
function fixUnusedImports(content, error) {
  const lines = content.split('\n');
  const lineIndex = error.line - 1;
  
  // Remove the import line
  if (lines[lineIndex]?.trim().startsWith('import')) {
    lines.splice(lineIndex, 1);
  }
  
  return lines.join('\n');
}

// Fix TS4111 (index signature access) - convert dot notation to bracket notation
function fixIndexSignature(content, error) {
  const lines = content.split('\n');
  const lineIndex = error.line - 1;
  const line = lines[lineIndex];
  
  if (!line) return content;
  
  // Extract property name from error
  const propMatch = error.message.match(/Property '([^']+)'/);
  if (!propMatch) return content;
  const propName = propMatch[1];
  
  // Replace .propName with ['propName']
  lines[lineIndex] = line.replace(
    new RegExp(`\\.${propName}\\b`), 
    `['${propName}']`
  );
  
  return lines.join('\n');
}

// Fix TS2307 (cannot find module @/src/...) - fix import path
function fixModulePath(content, error) {
  if (!error.message.includes('@/src/')) return content;
  
  // Replace @/src/ with @/
  return content.replace(/@\/src\//g, '@/');
}

// Main fix function
async function fixFile(filePath, errors) {
  if (!existsSync(filePath)) return false;
  
  let content = readFileSync(filePath, 'utf-8');
  const originalContent = content;
  
  // Sort errors by line number descending (fix from bottom to top)
  errors.sort((a, b) => b.line - a.line);
  
  for (const error of errors) {
    switch (error.code) {
      case 'TS6133': // Unused variable
        content = fixUnusedVariable(content, error);
        break;
      case 'TS6192': // All imports unused
        content = fixUnusedImports(content, error);
        break;
      case 'TS4111': // Index signature
        content = fixIndexSignature(content, error);
        break;
      case 'TS2307': // Module not found
        content = fixModulePath(content, error);
        break;
    }
  }
  
  if (content !== originalContent) {
    writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  
  return false;
}

// Main
async function main() {
  console.log('Getting TypeScript errors...');
  const output = getTypeScriptErrors();
  const errors = parseErrors(output);
  
  console.log(`Found ${errors.length} errors`);
  
  // Filter to fixable errors
  const fixableErrors = errors.filter(e => 
    ['TS6133', 'TS6192', 'TS4111', 'TS2307'].includes(e.code)
  );
  
  console.log(`${fixableErrors.length} are auto-fixable`);
  
  const grouped = groupByFile(fixableErrors);
  let fixedFiles = 0;
  
  for (const [file, fileErrors] of Object.entries(grouped)) {
    const fullPath = path.join(projectRoot, file);
    if (await fixFile(fullPath, fileErrors)) {
      fixedFiles++;
      console.log(`Fixed: ${file}`);
    }
  }
  
  console.log(`\nFixed ${fixedFiles} files`);
}

main().catch(console.error);
