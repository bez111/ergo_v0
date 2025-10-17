#!/usr/bin/env node
/**
 * Script to fix Framer Motion children prop errors
 * Converts: <Component children={content} />
 * To: <Component>{content}</Component>
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all files with children prop usage
const files = execSync(
  'find app -name "*.tsx" -type f -exec grep -l "children={" {} \\;',
  { encoding: 'utf-8' }
)
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`Found ${files.length} files with children prop usage\n`);

let totalFixed = 0;

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf-8');
  const original = content;
  let fixedInFile = 0;

  // Pattern 1: Self-closing tags with children prop
  // <CodeBlock language="typescript" children={`code`} />
  // → <CodeBlock language="typescript">{`code`}</CodeBlock>
  
  // Match: <ComponentName ...props children={content} />
  const selfClosingPattern = /<(\w+)([^>]*?)\s+children=\{([^}]+)\}\s*\/>/g;
  
  content = content.replace(selfClosingPattern, (match, componentName, props, childrenContent) => {
    fixedInFile++;
    // Remove trailing spaces from props
    props = props.trim();
    const propsStr = props ? ` ${props}` : '';
    return `<${componentName}${propsStr}>\n    {${childrenContent}}\n  </${componentName}>`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`✅ Fixed ${fixedInFile} instances in: ${file}`);
    totalFixed += fixedInFile;
  }
});

console.log(`\n🎉 Total fixed: ${totalFixed} children prop usages across ${files.length} files`);

