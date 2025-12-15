/**
 * Complete extraction script for ALL translatable content
 */

const fs = require('fs');

// Helper to extract items with any key field
function extractItems(content, keyField = 'slug') {
  const result = {};
  
  // Match objects with the key field
  const keyRegex = new RegExp(keyField + ':\\s*"([^"]+)"', 'g');
  let keyMatch;
  
  while ((keyMatch = keyRegex.exec(content)) !== null) {
    const key = keyMatch[1];
    const startIdx = content.lastIndexOf('{', keyMatch.index);
    let braceCount = 1;
    let endIdx = keyMatch.index;
    
    for (let i = keyMatch.index; i < content.length && braceCount > 0; i++) {
      if (content[i] === '{') braceCount++;
      if (content[i] === '}') braceCount--;
      endIdx = i;
    }
    
    const objStr = content.substring(startIdx, endIdx + 1);
    
    // Extract common fields
    const item = {};
    
    const fields = [
      'title', 'subtitle', 'description', 'shortDescription', 
      'query', 'shortAnswer', 'term', 'shortDefinition',
      'name', 'heroStatement', 'question', 'answer'
    ];
    
    fields.forEach(field => {
      const match = objStr.match(new RegExp(field + ':\\s*["\']([^"\']+)["\']'));
      if (match) item[field] = match[1];
    });
    
    if (Object.keys(item).length > 0) {
      result[key] = item;
    }
  }
  
  return result;
}

console.log('=== Extracting ALL content ===\n');

// 1. Extract FAQ
const faqContent = fs.readFileSync('src/data/faq.ts', 'utf8');
const faqData = extractItems(faqContent, 'id');
console.log('FAQ items:', Object.keys(faqData).length);

// 2. Extract wallets
const walletContent = fs.readFileSync('src/app/[locale]/wallet/_data.ts', 'utf8');
const walletsData = extractItems(walletContent, 'id');
console.log('Wallet items:', Object.keys(walletsData).length);

// 3. Extract miners data (sections, not items)
const minersContent = fs.readFileSync('src/app/[locale]/miners/_data.ts', 'utf8');
const minersData = extractItems(minersContent, 'id');
console.log('Miners items:', Object.keys(minersData).length);

// 4. Extract hodlers data
const hodlersContent = fs.readFileSync('src/app/[locale]/hodlers/_data.ts', 'utf8');
const hodlersData = extractItems(hodlersContent, 'id');
console.log('Hodlers items:', Object.keys(hodlersData).length);

// 5. Extract use cases
const useContent = fs.readFileSync('src/app/[locale]/use/_data.ts', 'utf8');
const useData = extractItems(useContent, 'slug');
console.log('Use cases:', Object.keys(useData).length);

// Update JSON files
const faqPath = 'messages/en/faq.json';
const faqJson = JSON.parse(fs.readFileSync(faqPath, 'utf8'));
faqJson.faqData = { ...faqData, ...faqJson.faqData };
fs.writeFileSync(faqPath, JSON.stringify(faqJson, null, 2), 'utf8');
console.log('\nUpdated', faqPath);

const walletPath = 'messages/en/wallet.json';
const walletJson = JSON.parse(fs.readFileSync(walletPath, 'utf8'));
walletJson.walletsData = { ...walletsData, ...walletJson.walletsData };
fs.writeFileSync(walletPath, JSON.stringify(walletJson, null, 2), 'utf8');
console.log('Updated', walletPath);

const minersPath = 'messages/en/miners.json';
const minersJson = JSON.parse(fs.readFileSync(minersPath, 'utf8'));
minersJson.minersData = { ...minersData, ...minersJson.minersData };
fs.writeFileSync(minersPath, JSON.stringify(minersJson, null, 2), 'utf8');
console.log('Updated', minersPath);

const hodlersPath = 'messages/en/hodlers.json';
const hodlersJson = JSON.parse(fs.readFileSync(hodlersPath, 'utf8'));
hodlersJson.holdersData = { ...hodlersData, ...hodlersJson.holdersData };
fs.writeFileSync(hodlersPath, JSON.stringify(hodlersJson, null, 2), 'utf8');
console.log('Updated', hodlersPath);

const usePath = 'messages/en/use.json';
const useJson = JSON.parse(fs.readFileSync(usePath, 'utf8'));
useJson.useCasesData = { ...useData, ...useJson.useCasesData };
fs.writeFileSync(usePath, JSON.stringify(useJson, null, 2), 'utf8');
console.log('Updated', usePath);

// Copy to ru/
['faq.json', 'wallet.json', 'miners.json', 'hodlers.json', 'use.json'].forEach(file => {
  fs.copyFileSync(`messages/en/${file}`, `messages/ru/${file}`);
});
console.log('\nCopied to messages/ru/');

console.log('\nDone!');

