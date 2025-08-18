#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  red: '\x1b[31m'
};

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

// Files to update
const filesToUpdate = [
  'app/use/use-cases/**/*.tsx',
  'app/docs/**/*.tsx',
  'app/technology/**/*.tsx',
  'app/start/**/*.tsx'
];

let totalUpdates = 0;
let filesUpdated = 0;

console.log(colorize('\n🔄 Updating remaining /Docs links to /docs\n', 'cyan'));

filesToUpdate.forEach(pattern => {
  const files = glob.sync(pattern);
  
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    // Count matches before replacement
    const matches = content.match(/href=["']\/Docs\b/g);
    const matchCount = matches ? matches.length : 0;
    
    if (matchCount > 0) {
      // Replace all /Docs links with /docs
      content = content.replace(/href=(["'])\/Docs\b/g, 'href=$1/docs');
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`${colorize('✓', 'green')} Updated ${colorize(path.relative(process.cwd(), file), 'blue')} (${matchCount} links)`);
        totalUpdates += matchCount;
        filesUpdated++;
      }
    }
  });
});

console.log('\n' + colorize('═'.repeat(50), 'cyan'));
console.log(colorize(`✅ Update Complete!`, 'green'));
console.log(`📊 Files updated: ${colorize(filesUpdated, 'yellow')}`);
console.log(`🔗 Links updated: ${colorize(totalUpdates, 'yellow')}`);
console.log(colorize('═'.repeat(50), 'cyan') + '\n'); 