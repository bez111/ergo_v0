#!/usr/bin/env node
/**
 * Fix multi-line children prop patterns
 */

const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync(
  'find app -name "*.tsx" -type f -exec grep -l "children={" {} \\;',
  { encoding: 'utf-8' }
)
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`Processing ${files.length} files...\n`);

let totalFixed = 0;

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf-8');
  const original = content;
  let fixedInFile = 0;

  // Fix multi-line children patterns by finding and replacing them
  // Pattern: <Tag ...props\n    children={`...`}\n  />
  
  // Split into lines for easier processing
  const lines = content.split('\n');
  const newLines = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Check if this line has "children={" 
    if (line.includes('children={')) {
      // Check if previous line has opening tag
      if (i > 0 && newLines[newLines.length - 1].trim().startsWith('<')) {
        const prevLine = newLines[newLines.length - 1];
        
        // Extract tag name from previous line
        const tagMatch = prevLine.match(/<(\w+)/);
        if (tagMatch) {
          const tagName = tagMatch[1];
          
          // Find the closing /> or >
          let j = i;
          let childrenContent = '';
          let foundClosing = false;
          
          // Extract children content
          const childrenMatch = line.match(/children=\{(.+)\}/);
          if (childrenMatch) {
            childrenContent = childrenMatch[1];
            
            // Check if it closes on same line
            if (line.includes('/>')) {
              // Single line multiline children
              const indent = prevLine.match(/^(\s*)/)[1];
              newLines[newLines.length - 1] = prevLine.replace(/\s*>?\s*$/, '>');
              newLines.push(`${indent}  {${childrenContent}}`);
              newLines.push(`${indent}</${tagName}>`);
              fixedInFile++;
              i++;
              continue;
            }
          } else {
            // Multi-line children content
            childrenContent = line.match(/children=\{(.+)/)[1];
            j = i + 1;
            
            // Collect all lines until we find the closing
            while (j < lines.length) {
              if (lines[j].includes('/>') || lines[j].includes('}')) {
                const remaining = lines[j].match(/([^}]*)\}/);
                if (remaining) {
                  childrenContent += '\n' + remaining[1];
                }
                break;
              }
              childrenContent += '\n' + lines[j];
              j++;
            }
            
            // Reconstruct
            const indent = prevLine.match(/^(\s*)/)[1];
            newLines[newLines.length - 1] = prevLine.replace(/\s*$/, '>');
            newLines.push(`${indent}  {${childrenContent}}`);
            newLines.push(`${indent}</${tagName}>`);
            fixedInFile++;
            i = j + 1;
            continue;
          }
        }
      }
    }
    
    newLines.push(line);
    i++;
  }

  if (fixedInFile > 0) {
    content = newLines.join('\n');
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`✅ ${file}: ${fixedInFile} fixes`);
    totalFixed += fixedInFile;
  }
});

console.log(`\n✅ Total fixed: ${totalFixed}`);

