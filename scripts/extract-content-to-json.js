/**
 * Script to extract translatable content from TypeScript data files to JSON
 * Run: node scripts/extract-content-to-json.js
 */

const fs = require('fs');
const path = require('path');

// Helper to safely require TS files (they export plain objects)
function loadTsData(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Extract the array/object after the export
  return content;
}

// Extract topics
function extractTopics() {
  const content = fs.readFileSync('src/data/topics.ts', 'utf8');
  const result = {};
  
  // Match each topic object
  const topicRegex = /{\s*slug:\s*"([^"]+)"[^}]*title:\s*"([^"]+)"[^}]*subtitle:\s*"([^"]+)"[^}]*heroStatement:\s*"([^"]+)"/gs;
  let match;
  
  while ((match = topicRegex.exec(content)) !== null) {
    const [, slug, title, subtitle, heroStatement] = match;
    result[slug] = { title, subtitle, heroStatement };
  }
  
  return result;
}

// Extract questions
function extractQuestions() {
  const content = fs.readFileSync('src/data/questions.ts', 'utf8');
  const result = {};
  
  const questionRegex = /slug:\s*"([^"]+)"[\s\S]*?query:\s*"([^"]+)"[\s\S]*?shortAnswer:\s*"([^"]+)"/g;
  let match;
  
  while ((match = questionRegex.exec(content)) !== null) {
    const [, slug, query, shortAnswer] = match;
    result[slug] = { query, shortAnswer };
  }
  
  return result;
}

// Extract playbooks
function extractPlaybooks() {
  const content = fs.readFileSync('src/data/playbooks.ts', 'utf8');
  const result = {};
  
  const playbookRegex = /slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?subtitle:\s*"([^"]+)"/g;
  let match;
  
  while ((match = playbookRegex.exec(content)) !== null) {
    const [, slug, title, subtitle] = match;
    result[slug] = { title, subtitle };
  }
  
  return result;
}

// Extract patterns
function extractPatterns() {
  const content = fs.readFileSync('src/data/dev-patterns.ts', 'utf8');
  const result = {};
  
  const patternRegex = /slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?shortDescription:\s*"([^"]+)"/g;
  let match;
  
  while ((match = patternRegex.exec(content)) !== null) {
    const [, slug, title, shortDescription] = match;
    result[slug] = { title, shortDescription };
  }
  
  return result;
}

// Extract glossary terms
function extractGlossary() {
  const content = fs.readFileSync('src/data/glossary.ts', 'utf8');
  const result = {};
  
  const termRegex = /slug:\s*"([^"]+)"[\s\S]*?term:\s*"([^"]+)"[\s\S]*?shortDefinition:\s*"([^"]+)"/g;
  let match;
  
  while ((match = termRegex.exec(content)) !== null) {
    const [, slug, term, shortDefinition] = match;
    result[slug] = { term, shortDefinition };
  }
  
  return result;
}

// Extract infographics
function extractInfographics() {
  const content = fs.readFileSync('src/data/infographics.ts', 'utf8');
  const result = {};
  
  const infoRegex = /slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?shortDescription:\s*"([^"]+)"/g;
  let match;
  
  while ((match = infoRegex.exec(content)) !== null) {
    const [, slug, title, shortDescription] = match;
    result[slug] = { title, shortDescription };
  }
  
  return result;
}

// Extract ecosystem projects
function extractEcosystem() {
  const content = fs.readFileSync('src/app/[locale]/ecosystem/_data.ts', 'utf8');
  const result = {};
  
  const projectRegex = /slug:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"/g;
  let match;
  
  while ((match = projectRegex.exec(content)) !== null) {
    const [, slug, name, description] = match;
    result[slug] = { name, description };
  }
  
  return result;
}

// Main execution
console.log('Extracting content from TypeScript files...\n');

const topics = extractTopics();
const questions = extractQuestions();
const playbooks = extractPlaybooks();
const patterns = extractPatterns();
const glossary = extractGlossary();
const infographics = extractInfographics();
const ecosystem = extractEcosystem();

console.log(`Topics: ${Object.keys(topics).length} items`);
console.log(`Questions: ${Object.keys(questions).length} items`);
console.log(`Playbooks: ${Object.keys(playbooks).length} items`);
console.log(`Patterns: ${Object.keys(patterns).length} items`);
console.log(`Glossary: ${Object.keys(glossary).length} items`);
console.log(`Infographics: ${Object.keys(infographics).length} items`);
console.log(`Ecosystem: ${Object.keys(ecosystem).length} items`);

// Read existing content-hubs.json
const contentHubsPath = 'messages/en/content-hubs.json';
const contentHubs = JSON.parse(fs.readFileSync(contentHubsPath, 'utf8'));

// Update with extracted data
contentHubs.topicsData = { ...contentHubs.topicsData, ...topics };
contentHubs.questionsData = { ...contentHubs.questionsData, ...questions };
contentHubs.playbooksData = { ...contentHubs.playbooksData, ...playbooks };
contentHubs.patternsData = { ...contentHubs.patternsData, ...patterns };
contentHubs.glossaryTerms = { ...contentHubs.glossaryTerms, ...glossary };
contentHubs.infographicItems = { ...contentHubs.infographicItems, ...infographics };

// Write back
fs.writeFileSync(contentHubsPath, JSON.stringify(contentHubs, null, 2), 'utf8');
console.log(`\nUpdated ${contentHubsPath}`);

// Update ecosystem.json
const ecosystemPath = 'messages/en/ecosystem.json';
const ecosystemJson = JSON.parse(fs.readFileSync(ecosystemPath, 'utf8'));
ecosystemJson.ecosystemData = { ...ecosystemJson.ecosystemData, ...ecosystem };
fs.writeFileSync(ecosystemPath, JSON.stringify(ecosystemJson, null, 2), 'utf8');
console.log(`Updated ${ecosystemPath}`);

console.log('\nDone! Now copy these files to messages/ru/ for translation.');

