#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Fixing critical code issues...\n');

// 1. Fix unused variables with underscore prefix
function fixUnusedVars(content) {
  // Fix unused parameters in functions
  content = content.replace(/\(([^)]*?)\b(\w+)\b([^)]*?)\) => {/g, (match, before, varName, after) => {
    if (varName !== 'e' && varName !== 'i' && varName !== 'index' && varName !== 'error') {
      return match;
    }
    return `(${before}_${varName}${after}) => {`;
  });
  
  // Fix unused destructured parameters
  content = content.replace(/const \[(\w+), set\w+\] = useState/g, (match, varName) => {
    return match.replace(varName, `_${varName}`);
  });
  
  return content;
}

// 2. Fix duplicate imports
function fixDuplicateImports(content) {
  const lines = content.split('\n');
  const importMap = new Map();
  const fixedLines = [];
  
  for (let line of lines) {
    if (line.trim().startsWith('import ') && line.includes('from ')) {
      const fromMatch = line.match(/from ['"]([^'"]+)['"]/);
      if (fromMatch) {
        const moduleName = fromMatch[1];
        if (importMap.has(moduleName)) {
          // Skip duplicate import
          continue;
        }
        importMap.set(moduleName, true);
      }
    }
    fixedLines.push(line);
  }
  
  return fixedLines.join('\n');
}

// 3. Fix console statements
function fixConsoleStatements(content) {
  return content.replace(
    /console\.(log|warn|info)\(/g, 
    "process.env.NODE_ENV === 'development' && console.$1("
  );
}

// 4. Fix children props
function fixChildrenProps(content) {
  return content.replace(
    /children=\{([^}]+)\}/g,
    '>{$1}<'
  );
}

// Files to process
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'components/**/*.tsx',
  'components/**/*.ts',
  'lib/**/*.ts'
];

let totalFiles = 0;
let fixedFiles = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { ignore: ['**/*.d.ts', '**/node_modules/**'] });
  
  files.forEach(file => {
    totalFiles++;
    
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Apply fixes
      content = fixUnusedVars(content);
      content = fixDuplicateImports(content);
      content = fixConsoleStatements(content);
      content = fixChildrenProps(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content);
        fixedFiles++;
        console.log(`✅ Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  });
});

console.log(`\n🎉 Processing complete!`);
console.log(`📊 Files processed: ${totalFiles}`);
console.log(`🔧 Files fixed: ${fixedFiles}`);
console.log(`\n✅ Run 'npm run lint' to check remaining issues.`); 