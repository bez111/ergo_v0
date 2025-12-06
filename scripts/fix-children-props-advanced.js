#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Advanced script to fix ALL Framer Motion and CodeBlock children prop errors
 */

const fs = require('fs');
const { execSync } = require('child_process');

// Get all files with children= usage
const files = execSync(
  'find app -name "*.tsx" -type f -exec grep -l "children=" {} \\;',
  { encoding: 'utf-8' }
)
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`Found ${files.length} files to process\n`);

let totalFixed = 0;
let filesModified = 0;

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf-8');
  const original = content;
  let fixedInFile = 0;

  // Pattern 1: Single-line self-closing
  // <CodeBlock language="typescript" children={`code`} />
  const pattern1 = /<(\w+)([^>]*?)\s+children=\{([^}]+)\}\s*\/>/g;
  content = content.replace(pattern1, (match, tag, props, children) => {
    fixedInFile++;
    props = props.trim();
    const propsStr = props ? ` ${props}` : '';
    return `<${tag}${propsStr}>{${children}}</${tag}>`;
  });

  // Pattern 2: Multi-line children (backticks)
  // <CodeBlock language="typescript"
  //   children={`
  //     code
  //   `}
  // />
  const pattern2 = /<(\w+)([^>]*?)\n\s+children=\{(`[^`]*`)\}\s*\/>/gm;
  content = content.replace(pattern2, (match, tag, props, children) => {
    fixedInFile++;
    props = props.trim();
    const propsStr = props ? ` ${props}` : '';
    return `<${tag}${propsStr}>\n    {${children}}\n  </${tag}>`;
  });

  // Pattern 3: String.raw children
  // children={String.raw`...`}
  const pattern3 = /<(\w+)([^>]*?)\n\s+children=\{(String\.raw`[^`]*`)\}\s*\/>/gm;
  content = content.replace(pattern3, (match, tag, props, children) => {
    fixedInFile++;
    props = props.trim();
    const propsStr = props ? ` ${props}` : '';
    return `<${tag}${propsStr}>\n    {${children}}\n  </${tag}>`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`✅ ${file}: ${fixedInFile} fixes`);
    totalFixed += fixedInFile;
    filesModified++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Files modified: ${filesModified}`);
console.log(`   Total fixes: ${totalFixed}`);
console.log(`\n🎉 Done! Run 'npm run build' to verify.`);

