/**
 * Script to extract ALL translatable content from TypeScript data files to JSON
 * This version properly parses the TypeScript files
 */

const fs = require('fs');
const path = require('path');

// Helper function to extract objects from TS arrays
function extractArrayItems(content, arrayName) {
  // Find the array and extract each object
  const items = [];
  
  // Match objects with slug field
  const objectRegex = /\{\s*slug:\s*"([^"]+)"[\s\S]*?\n\s*\}/g;
  let match;
  
  while ((match = objectRegex.exec(content)) !== null) {
    const objStr = match[0];
    const slug = match[1];
    
    // Extract common fields
    const item = { slug };
    
    const titleMatch = objStr.match(/title:\s*"([^"]+)"/);
    if (titleMatch) item.title = titleMatch[1];
    
    const subtitleMatch = objStr.match(/subtitle:\s*"([^"]+)"/);
    if (subtitleMatch) item.subtitle = subtitleMatch[1];
    
    const shortDescMatch = objStr.match(/shortDescription:\s*"([^"]+)"/);
    if (shortDescMatch) item.shortDescription = shortDescMatch[1];
    
    const descMatch = objStr.match(/description:\s*"([^"]+)"/);
    if (descMatch && !item.shortDescription) item.description = descMatch[1];
    
    const queryMatch = objStr.match(/query:\s*"([^"]+)"/);
    if (queryMatch) item.query = queryMatch[1];
    
    const shortAnswerMatch = objStr.match(/shortAnswer:\s*"([^"]+)"/);
    if (shortAnswerMatch) item.shortAnswer = shortAnswerMatch[1];
    
    const termMatch = objStr.match(/term:\s*"([^"]+)"/);
    if (termMatch) item.term = termMatch[1];
    
    const shortDefMatch = objStr.match(/shortDefinition:\s*"([^"]+)"/);
    if (shortDefMatch) item.shortDefinition = shortDefMatch[1];
    
    const nameMatch = objStr.match(/name:\s*"([^"]+)"/);
    if (nameMatch) item.name = nameMatch[1];
    
    const heroStatementMatch = objStr.match(/heroStatement:\s*"([^"]+)"/);
    if (heroStatementMatch) item.heroStatement = heroStatementMatch[1];
    
    items.push(item);
  }
  
  return items;
}

// Process each data file
function processFile(filePath, keyField = 'slug') {
  const content = fs.readFileSync(filePath, 'utf8');
  const items = extractArrayItems(content);
  
  const result = {};
  items.forEach(item => {
    if (item[keyField]) {
      const key = item[keyField];
      delete item[keyField];
      
      // Only include if there's actual translatable content
      if (Object.keys(item).length > 0) {
        result[key] = item;
      }
    }
  });
  
  return result;
}

// Main execution
console.log('Extracting content from TypeScript files...\n');

// Read existing files
const contentHubsPath = 'messages/en/content-hubs.json';
const ecosystemPath = 'messages/en/ecosystem.json';

let contentHubs = JSON.parse(fs.readFileSync(contentHubsPath, 'utf8'));
let ecosystemJson = JSON.parse(fs.readFileSync(ecosystemPath, 'utf8'));

// Process topics
const topicsContent = fs.readFileSync('src/data/topics.ts', 'utf8');
const topicsData = {};

// Find main topic exports
const topicMatches = topicsContent.matchAll(/export const (\w+)Topic[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?subtitle:\s*"([^"]+)"/g);
for (const match of topicMatches) {
  const [, , slug, title, subtitle] = match;
  topicsData[slug] = { title, subtitle };
}

// Also try to match topics array items
const topicArrayMatches = topicsContent.matchAll(/\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*subtitle:\s*"([^"]+)"/g);
for (const match of topicArrayMatches) {
  const [, slug, title, subtitle] = match;
  if (!topicsData[slug]) {
    topicsData[slug] = { title, subtitle };
  }
}

console.log(`Topics: ${Object.keys(topicsData).length} items`);

// Process questions
const questionsData = processFile('src/data/questions.ts');
console.log(`Questions: ${Object.keys(questionsData).length} items`);

// Process playbooks
const playbooksData = processFile('src/data/playbooks.ts');
console.log(`Playbooks: ${Object.keys(playbooksData).length} items`);

// Process patterns
const patternsData = processFile('src/data/dev-patterns.ts');
console.log(`Patterns: ${Object.keys(patternsData).length} items`);

// Process glossary
const glossaryData = processFile('src/data/glossary.ts');
console.log(`Glossary: ${Object.keys(glossaryData).length} items`);

// Process infographics
const infographicsData = processFile('src/data/infographics.ts');
console.log(`Infographics: ${Object.keys(infographicsData).length} items`);

// Process ecosystem
const ecosystemData = processFile('src/app/[locale]/ecosystem/_data.ts');
console.log(`Ecosystem: ${Object.keys(ecosystemData).length} items`);

// Merge with existing data (existing takes precedence to preserve manual edits)
contentHubs.topicsData = { ...topicsData, ...contentHubs.topicsData };
contentHubs.questionsData = { ...questionsData, ...contentHubs.questionsData };
contentHubs.playbooksData = { ...playbooksData, ...contentHubs.playbooksData };
contentHubs.patternsData = { ...patternsData, ...contentHubs.patternsData };
contentHubs.glossaryTerms = { ...glossaryData, ...contentHubs.glossaryTerms };
contentHubs.infographicItems = { ...infographicsData, ...contentHubs.infographicItems };

ecosystemJson.ecosystemData = { ...ecosystemData, ...ecosystemJson.ecosystemData };

// Write files
fs.writeFileSync(contentHubsPath, JSON.stringify(contentHubs, null, 2), 'utf8');
console.log(`\nUpdated ${contentHubsPath} (${fs.statSync(contentHubsPath).size} bytes)`);

fs.writeFileSync(ecosystemPath, JSON.stringify(ecosystemJson, null, 2), 'utf8');
console.log(`Updated ${ecosystemPath} (${fs.statSync(ecosystemPath).size} bytes)`);

// Copy to ru folder
fs.copyFileSync(contentHubsPath, 'messages/ru/content-hubs.json');
fs.copyFileSync(ecosystemPath, 'messages/ru/ecosystem.json');
console.log('\nCopied to messages/ru/');

console.log('\nDone! Now you can translate the Russian files.');

