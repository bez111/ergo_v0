#!/usr/bin/env node
/**
 * FULL content extraction from TypeScript data files to JSON
 * Extracts ALL translatable fields, not just surface-level ones
 */

const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, '..', 'messages');
const srcDir = path.join(__dirname, '..', 'src');

// Helper to read JSON file
function readJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return {};
  }
}

// Helper to write JSON file
function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

// Helper to deep merge objects
function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      target[key] = target[key] || {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

console.log('=== FULL Content Extraction ===\n');

// ============================================
// 1. ECOSYSTEM DATA - Full extraction
// ============================================
console.log('1. Extracting FULL ecosystem data...');

const ecosystemDataPath = path.join(srcDir, 'app', '[locale]', 'ecosystem', '_data.ts');
const ecosystemContent = fs.readFileSync(ecosystemDataPath, 'utf8');

// Parse projects from TS file
const projectsMatch = ecosystemContent.match(/export const projects[\s\S]*?\[([\s\S]*)\]/);
let ecosystemData = {};

if (projectsMatch) {
  // Use regex to extract individual project objects
  const projectRegex = /\{\s*id:\s*(\d+)[\s\S]*?slug:\s*["']([^"']+)["'][\s\S]*?name:\s*["']([^"']+)["'][\s\S]*?description:\s*["']([^"']+)["'][\s\S]*?(?:longDescription:\s*`([^`]*)`)?[\s\S]*?(?:features:\s*\[([\s\S]*?)\])?[\s\S]*?(?:faq:\s*\[([\s\S]*?)\]\s*(?:,\s*(?:relatedTags|technologies|\})|\s*\}))?/g;
  
  let match;
  while ((match = projectRegex.exec(ecosystemContent)) !== null) {
    const slug = match[2];
    const name = match[3];
    const description = match[4];
    const longDescription = match[5] ? match[5].trim() : undefined;
    
    // Parse features array
    let features = [];
    if (match[6]) {
      const featuresStr = match[6];
      const featureMatches = featuresStr.match(/["']([^"']+)["']/g);
      if (featureMatches) {
        features = featureMatches.map(f => f.replace(/["']/g, ''));
      }
    }
    
    // Parse FAQ array
    let faq = [];
    if (match[7]) {
      const faqStr = match[7];
      const faqRegex = /question:\s*["']([^"']+)["'][\s\S]*?answer:\s*["']([^"']+)["']/g;
      let faqMatch;
      while ((faqMatch = faqRegex.exec(faqStr)) !== null) {
        faq.push({ question: faqMatch[1], answer: faqMatch[2] });
      }
    }
    
    ecosystemData[slug] = {
      name,
      description,
      ...(longDescription && { longDescription }),
      ...(features.length > 0 && { features }),
      ...(faq.length > 0 && { faq })
    };
  }
}

// Fallback: require the actual module
try {
  const { projects } = require(ecosystemDataPath.replace('.ts', ''));
  projects.forEach(p => {
    ecosystemData[p.slug] = {
      name: p.name,
      description: p.description,
      ...(p.longDescription && { longDescription: p.longDescription }),
      ...(p.features && { features: p.features }),
      ...(p.faq && { faq: p.faq })
    };
  });
} catch (e) {
  console.log('  Note: Could not require ecosystem _data.ts directly, using regex parsing');
}

console.log(`  Extracted ${Object.keys(ecosystemData).length} ecosystem projects with full content`);

// ============================================
// 2. GLOSSARY DATA - Full extraction
// ============================================
console.log('2. Extracting FULL glossary data...');

let glossaryTerms = {};
try {
  const { glossaryTerms: terms } = require(path.join(srcDir, 'data', 'glossary.ts'));
  terms.forEach(term => {
    glossaryTerms[term.slug] = {
      term: term.term,
      shortDefinition: term.shortDefinition,
      ...(term.fullDefinition && { fullDefinition: term.fullDefinition }),
      ...(term.keyPoints && { keyPoints: term.keyPoints }),
      ...(term.useCases && { useCases: term.useCases }),
      ...(term.technicalDetails && { technicalDetails: term.technicalDetails }),
      ...(term.commonMisconceptions && { commonMisconceptions: term.commonMisconceptions }),
      ...(term.faq && { faq: term.faq })
    };
  });
  console.log(`  Extracted ${Object.keys(glossaryTerms).length} glossary terms with full content`);
} catch (e) {
  console.log('  Error extracting glossary:', e.message);
}

// ============================================
// 3. TOPICS DATA - Full extraction
// ============================================
console.log('3. Extracting FULL topics data...');

let topicsData = {};
try {
  const { topics } = require(path.join(srcDir, 'data', 'topics.ts'));
  topics.forEach(topic => {
    topicsData[topic.slug] = {
      title: topic.title,
      subtitle: topic.subtitle,
      ...(topic.heroStatement && { heroStatement: topic.heroStatement }),
      ...(topic.keyDifferentiators && { keyDifferentiators: topic.keyDifferentiators }),
      ...(topic.sections && { sections: topic.sections }),
      ...(topic.faq && { faq: topic.faq }),
      ...(topic.conclusion && { conclusion: topic.conclusion })
    };
  });
  console.log(`  Extracted ${Object.keys(topicsData).length} topics with full content`);
} catch (e) {
  console.log('  Error extracting topics:', e.message);
}

// ============================================
// 4. QUESTIONS DATA - Full extraction
// ============================================
console.log('4. Extracting FULL questions data...');

let questionsData = {};
try {
  const { questions } = require(path.join(srcDir, 'data', 'questions.ts'));
  questions.forEach(q => {
    questionsData[q.slug] = {
      query: q.query,
      shortAnswer: q.shortAnswer,
      ...(q.detailedAnswer && { detailedAnswer: q.detailedAnswer }),
      ...(q.sections && { sections: q.sections }),
      ...(q.keyTakeaways && { keyTakeaways: q.keyTakeaways }),
      ...(q.faq && { faq: q.faq })
    };
  });
  console.log(`  Extracted ${Object.keys(questionsData).length} questions with full content`);
} catch (e) {
  console.log('  Error extracting questions:', e.message);
}

// ============================================
// 5. PLAYBOOKS DATA - Full extraction
// ============================================
console.log('5. Extracting FULL playbooks data...');

let playbooksData = {};
try {
  const { playbooks } = require(path.join(srcDir, 'data', 'playbooks.ts'));
  playbooks.forEach(p => {
    playbooksData[p.slug] = {
      title: p.title,
      subtitle: p.subtitle,
      ...(p.introduction && { introduction: p.introduction }),
      ...(p.steps && { steps: p.steps }),
      ...(p.tips && { tips: p.tips }),
      ...(p.warnings && { warnings: p.warnings }),
      ...(p.conclusion && { conclusion: p.conclusion }),
      ...(p.faq && { faq: p.faq })
    };
  });
  console.log(`  Extracted ${Object.keys(playbooksData).length} playbooks with full content`);
} catch (e) {
  console.log('  Error extracting playbooks:', e.message);
}

// ============================================
// 6. PATTERNS DATA - Full extraction
// ============================================
console.log('6. Extracting FULL patterns data...');

let patternsData = {};
try {
  const { devPatterns } = require(path.join(srcDir, 'data', 'dev-patterns.ts'));
  devPatterns.forEach(p => {
    patternsData[p.slug] = {
      title: p.title,
      description: p.description,
      ...(p.problem && { problem: p.problem }),
      ...(p.solution && { solution: p.solution }),
      ...(p.implementation && { implementation: p.implementation }),
      ...(p.codeExample && { codeExample: p.codeExample }),
      ...(p.benefits && { benefits: p.benefits }),
      ...(p.considerations && { considerations: p.considerations }),
      ...(p.relatedPatterns && { relatedPatterns: p.relatedPatterns })
    };
  });
  console.log(`  Extracted ${Object.keys(patternsData).length} patterns with full content`);
} catch (e) {
  console.log('  Error extracting patterns:', e.message);
}

// ============================================
// 7. INFOGRAPHICS DATA - Full extraction
// ============================================
console.log('7. Extracting FULL infographics data...');

let infographicItems = {};
try {
  const { infographics } = require(path.join(srcDir, 'data', 'infographics.ts'));
  infographics.forEach(i => {
    infographicItems[i.slug] = {
      title: i.title,
      shortDescription: i.shortDescription,
      ...(i.subtitle && { subtitle: i.subtitle }),
      ...(i.longDescription && { longDescription: i.longDescription }),
      ...(i.keyPoints && { keyPoints: i.keyPoints })
    };
  });
  console.log(`  Extracted ${Object.keys(infographicItems).length} infographics with full content`);
} catch (e) {
  console.log('  Error extracting infographics:', e.message);
}

// ============================================
// SAVE TO EN FILES
// ============================================
console.log('\n=== Saving to EN files ===\n');

// Save ecosystem.json
const enEcosystemPath = path.join(messagesDir, 'en', 'ecosystem.json');
const enEcosystem = readJSON(enEcosystemPath);
enEcosystem.ecosystemData = ecosystemData;
writeJSON(enEcosystemPath, enEcosystem);
console.log('Saved ecosystem.json with full ecosystemData');

// Save content-hubs.json
const enContentHubsPath = path.join(messagesDir, 'en', 'content-hubs.json');
const enContentHubs = readJSON(enContentHubsPath);
enContentHubs.glossaryTerms = glossaryTerms;
enContentHubs.topicsData = topicsData;
enContentHubs.questionsData = questionsData;
enContentHubs.playbooksData = playbooksData;
enContentHubs.patternsData = patternsData;
enContentHubs.infographicItems = infographicItems;
writeJSON(enContentHubsPath, enContentHubs);
console.log('Saved content-hubs.json with full content');

// ============================================
// SYNC TO RU (structure only, keep EN values for new keys)
// ============================================
console.log('\n=== Syncing structure to RU ===\n');

function syncLocale(locale) {
  // Sync ecosystem.json
  const localeEcosystemPath = path.join(messagesDir, locale, 'ecosystem.json');
  const localeEcosystem = readJSON(localeEcosystemPath);
  
  // Keep existing translations but add missing keys with EN values
  const syncedEcosystemData = {};
  for (const slug in ecosystemData) {
    const enData = ecosystemData[slug];
    const existingData = (localeEcosystem.ecosystemData || {})[slug] || {};
    
    syncedEcosystemData[slug] = {
      // Keep original English name for brand consistency
      name: enData.name, // Always use English name for projects
      description: existingData.description || enData.description,
      ...(enData.longDescription && { longDescription: existingData.longDescription || enData.longDescription }),
      ...(enData.features && { features: existingData.features || enData.features }),
      ...(enData.faq && { faq: existingData.faq || enData.faq })
    };
  }
  localeEcosystem.ecosystemData = syncedEcosystemData;
  writeJSON(localeEcosystemPath, localeEcosystem);
  console.log(`Synced ${locale}/ecosystem.json (project names kept in English)`);
  
  // Sync content-hubs.json
  const localeContentHubsPath = path.join(messagesDir, locale, 'content-hubs.json');
  const localeContentHubs = readJSON(localeContentHubsPath);
  
  // Sync each data type
  const dataTypes = [
    { key: 'glossaryTerms', data: glossaryTerms },
    { key: 'topicsData', data: topicsData },
    { key: 'questionsData', data: questionsData },
    { key: 'playbooksData', data: playbooksData },
    { key: 'patternsData', data: patternsData },
    { key: 'infographicItems', data: infographicItems }
  ];
  
  for (const { key, data } of dataTypes) {
    const syncedData = {};
    for (const slug in data) {
      const enItem = data[slug];
      const existingItem = (localeContentHubs[key] || {})[slug] || {};
      
      // Deep merge: keep existing translations, add missing keys with EN values
      syncedData[slug] = {};
      for (const field in enItem) {
        if (existingItem[field] !== undefined) {
          syncedData[slug][field] = existingItem[field];
        } else {
          syncedData[slug][field] = enItem[field];
        }
      }
    }
    localeContentHubs[key] = syncedData;
  }
  
  writeJSON(localeContentHubsPath, localeContentHubs);
  console.log(`Synced ${locale}/content-hubs.json`);
}

syncLocale('ru');

console.log('\n=== Done! ===');
console.log('\nNext steps:');
console.log('1. Upload updated en/*.json to Crowdin');
console.log('2. Translate new content');
console.log('3. Download translations back to ru/*.json');

