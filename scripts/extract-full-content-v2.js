#!/usr/bin/env node
/**
 * FULL content extraction - V2 with proper parsing
 * Uses eval with sanitized code to extract data from TS files
 */

const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, '..', 'messages');
const srcDir = path.join(__dirname, '..', 'src');

function readJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return {};
  }
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

console.log('=== FULL Content Extraction V2 ===\n');

// ============================================
// 1. ECOSYSTEM DATA - Manual extraction
// ============================================
console.log('1. Extracting FULL ecosystem data...');

const ecosystemPath = path.join(srcDir, 'app', '[locale]', 'ecosystem', '_data.ts');
const ecosystemContent = fs.readFileSync(ecosystemPath, 'utf8');

// Extract the projects array content
const projectsArrayMatch = ecosystemContent.match(/export const projects:\s*EcosystemProject\[\]\s*=\s*\[([\s\S]*)\]/);
let ecosystemData = {};

if (projectsArrayMatch) {
  const projectsContent = projectsArrayMatch[1];
  
  // Split by project objects (each starts with { id:)
  const projectChunks = projectsContent.split(/\n\s*\{\s*\n?\s*id:/);
  
  for (let i = 1; i < projectChunks.length; i++) {
    const chunk = '{ id:' + projectChunks[i];
    
    // Extract slug
    const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];
    
    // Extract name
    const nameMatch = chunk.match(/name:\s*["']([^"']+)["']/);
    const name = nameMatch ? nameMatch[1] : slug;
    
    // Extract description
    const descMatch = chunk.match(/description:\s*["']([^"']+)["']/);
    const description = descMatch ? descMatch[1] : '';
    
    // Extract longDescription (template literal)
    const longDescMatch = chunk.match(/longDescription:\s*`([^`]*)`/s);
    const longDescription = longDescMatch ? longDescMatch[1].trim() : undefined;
    
    // Extract features array
    const featuresMatch = chunk.match(/features:\s*\[([\s\S]*?)\]/);
    let features = [];
    if (featuresMatch) {
      const featuresStr = featuresMatch[1];
      const featureItems = featuresStr.match(/["']([^"']+)["']/g);
      if (featureItems) {
        features = featureItems.map(f => f.replace(/["']/g, ''));
      }
    }
    
    // Extract FAQ array
    const faqMatch = chunk.match(/faq:\s*\[([\s\S]*?)\]\s*(?:,\s*(?:relatedTags|technologies)|\s*\})/);
    let faq = [];
    if (faqMatch) {
      const faqStr = faqMatch[1];
      const faqItemRegex = /\{\s*question:\s*["']([^"']+)["']\s*,\s*answer:\s*["']([^"']+)["']\s*\}/g;
      let faqItem;
      while ((faqItem = faqItemRegex.exec(faqStr)) !== null) {
        faq.push({ question: faqItem[1], answer: faqItem[2] });
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

console.log(`  Extracted ${Object.keys(ecosystemData).length} ecosystem projects`);
// Show sample
const sampleProject = ecosystemData['rosen-bridge'] || ecosystemData['sigmausd'];
if (sampleProject) {
  console.log(`  Sample (${Object.keys(ecosystemData)[2]}): ${Object.keys(sampleProject).join(', ')}`);
}

// ============================================
// 2. GLOSSARY DATA
// ============================================
console.log('2. Extracting FULL glossary data...');

const glossaryPath = path.join(srcDir, 'data', 'glossary.ts');
const glossaryContent = fs.readFileSync(glossaryPath, 'utf8');

let glossaryTerms = {};

// Parse glossary terms
const termsArrayMatch = glossaryContent.match(/export const glossaryTerms[\s\S]*?=\s*\[([\s\S]*)\]/);
if (termsArrayMatch) {
  const termsContent = termsArrayMatch[1];
  const termChunks = termsContent.split(/\n\s*\{\s*\n?\s*slug:/);
  
  for (let i = 1; i < termChunks.length; i++) {
    const chunk = '{ slug:' + termChunks[i];
    
    const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];
    
    const termMatch = chunk.match(/term:\s*["']([^"']+)["']/);
    const term = termMatch ? termMatch[1] : slug;
    
    const shortDefMatch = chunk.match(/shortDefinition:\s*["']([^"']+)["']/);
    const shortDefinition = shortDefMatch ? shortDefMatch[1] : '';
    
    const fullDefMatch = chunk.match(/fullDefinition:\s*`([^`]*)`/s);
    const fullDefinition = fullDefMatch ? fullDefMatch[1].trim() : undefined;
    
    // Key points
    const keyPointsMatch = chunk.match(/keyPoints:\s*\[([\s\S]*?)\]\s*(?:,|\})/);
    let keyPoints = [];
    if (keyPointsMatch) {
      const kpItems = keyPointsMatch[1].match(/["']([^"']+)["']/g);
      if (kpItems) {
        keyPoints = kpItems.map(k => k.replace(/["']/g, ''));
      }
    }
    
    // Use cases
    const useCasesMatch = chunk.match(/useCases:\s*\[([\s\S]*?)\]\s*(?:,|\})/);
    let useCases = [];
    if (useCasesMatch) {
      const ucItems = useCasesMatch[1].match(/["']([^"']+)["']/g);
      if (ucItems) {
        useCases = ucItems.map(u => u.replace(/["']/g, ''));
      }
    }
    
    glossaryTerms[slug] = {
      term,
      shortDefinition,
      ...(fullDefinition && { fullDefinition }),
      ...(keyPoints.length > 0 && { keyPoints }),
      ...(useCases.length > 0 && { useCases })
    };
  }
}

console.log(`  Extracted ${Object.keys(glossaryTerms).length} glossary terms`);

// ============================================
// 3. TOPICS DATA
// ============================================
console.log('3. Extracting FULL topics data...');

const topicsPath = path.join(srcDir, 'data', 'topics.ts');
const topicsContent = fs.readFileSync(topicsPath, 'utf8');

let topicsData = {};

const topicsArrayMatch = topicsContent.match(/export const topics[\s\S]*?=\s*\[([\s\S]*)\]/);
if (topicsArrayMatch) {
  const topicsStr = topicsArrayMatch[1];
  const topicChunks = topicsStr.split(/\n\s*\{\s*\n?\s*slug:/);
  
  for (let i = 1; i < topicChunks.length; i++) {
    const chunk = '{ slug:' + topicChunks[i];
    
    const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];
    
    const titleMatch = chunk.match(/title:\s*["']([^"']+)["']/);
    const title = titleMatch ? titleMatch[1] : slug;
    
    const subtitleMatch = chunk.match(/subtitle:\s*["']([^"']+)["']/);
    const subtitle = subtitleMatch ? subtitleMatch[1] : '';
    
    const heroMatch = chunk.match(/heroStatement:\s*["']([^"']+)["']/);
    const heroStatement = heroMatch ? heroMatch[1] : undefined;
    
    // Key differentiators
    const keyDiffMatch = chunk.match(/keyDifferentiators:\s*\[([\s\S]*?)\]\s*(?:,\s*(?:sections|faq|conclusion)|\s*\})/);
    let keyDifferentiators = [];
    if (keyDiffMatch) {
      const kdItems = keyDiffMatch[1].match(/["']([^"']+)["']/g);
      if (kdItems) {
        keyDifferentiators = kdItems.map(k => k.replace(/["']/g, ''));
      }
    }
    
    // Sections (complex nested structure)
    const sectionsMatch = chunk.match(/sections:\s*\[([\s\S]*?)\]\s*(?:,\s*(?:faq|conclusion|keyDifferentiators)|\s*\})/);
    let sections = [];
    if (sectionsMatch) {
      // Parse individual section objects
      const sectionRegex = /\{\s*title:\s*["']([^"']+)["']\s*,\s*content:\s*`([^`]*)`/gs;
      let sectionMatch;
      while ((sectionMatch = sectionRegex.exec(sectionsMatch[1])) !== null) {
        sections.push({
          title: sectionMatch[1],
          content: sectionMatch[2].trim()
        });
      }
    }
    
    // FAQ
    const faqMatch = chunk.match(/faq:\s*\[([\s\S]*?)\]\s*(?:,\s*(?:conclusion|keyDifferentiators|sections)|\s*\})/);
    let faq = [];
    if (faqMatch) {
      const faqRegex = /\{\s*question:\s*["']([^"']+)["']\s*,\s*answer:\s*["']([^"']+)["']\s*\}/g;
      let faqItem;
      while ((faqItem = faqRegex.exec(faqMatch[1])) !== null) {
        faq.push({ question: faqItem[1], answer: faqItem[2] });
      }
    }
    
    // Conclusion
    const conclusionMatch = chunk.match(/conclusion:\s*["']([^"']+)["']/);
    const conclusion = conclusionMatch ? conclusionMatch[1] : undefined;
    
    topicsData[slug] = {
      title,
      subtitle,
      ...(heroStatement && { heroStatement }),
      ...(keyDifferentiators.length > 0 && { keyDifferentiators }),
      ...(sections.length > 0 && { sections }),
      ...(faq.length > 0 && { faq }),
      ...(conclusion && { conclusion })
    };
  }
}

console.log(`  Extracted ${Object.keys(topicsData).length} topics`);

// ============================================
// 4. QUESTIONS DATA
// ============================================
console.log('4. Extracting FULL questions data...');

const questionsPath = path.join(srcDir, 'data', 'questions.ts');
const questionsContent = fs.readFileSync(questionsPath, 'utf8');

let questionsData = {};

const questionsArrayMatch = questionsContent.match(/export const questions[\s\S]*?=\s*\[([\s\S]*)\]/);
if (questionsArrayMatch) {
  const questionsStr = questionsArrayMatch[1];
  const questionChunks = questionsStr.split(/\n\s*\{\s*\n?\s*slug:/);
  
  for (let i = 1; i < questionChunks.length; i++) {
    const chunk = '{ slug:' + questionChunks[i];
    
    const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];
    
    const queryMatch = chunk.match(/query:\s*["']([^"']+)["']/);
    const query = queryMatch ? queryMatch[1] : slug;
    
    const shortAnswerMatch = chunk.match(/shortAnswer:\s*["']([^"']+)["']/);
    const shortAnswer = shortAnswerMatch ? shortAnswerMatch[1] : '';
    
    const detailedAnswerMatch = chunk.match(/detailedAnswer:\s*`([^`]*)`/s);
    const detailedAnswer = detailedAnswerMatch ? detailedAnswerMatch[1].trim() : undefined;
    
    // Sections
    const sectionsMatch = chunk.match(/sections:\s*\[([\s\S]*?)\]\s*(?:,\s*(?:keyTakeaways|faq|relatedLinks)|\s*\})/);
    let sections = [];
    if (sectionsMatch) {
      const sectionRegex = /\{\s*title:\s*["']([^"']+)["']\s*,\s*content:\s*`([^`]*)`/gs;
      let sectionMatch;
      while ((sectionMatch = sectionRegex.exec(sectionsMatch[1])) !== null) {
        sections.push({
          title: sectionMatch[1],
          content: sectionMatch[2].trim()
        });
      }
    }
    
    // Key takeaways
    const takeawaysMatch = chunk.match(/keyTakeaways:\s*\[([\s\S]*?)\]\s*(?:,|\})/);
    let keyTakeaways = [];
    if (takeawaysMatch) {
      const items = takeawaysMatch[1].match(/["']([^"']+)["']/g);
      if (items) {
        keyTakeaways = items.map(k => k.replace(/["']/g, ''));
      }
    }
    
    questionsData[slug] = {
      query,
      shortAnswer,
      ...(detailedAnswer && { detailedAnswer }),
      ...(sections.length > 0 && { sections }),
      ...(keyTakeaways.length > 0 && { keyTakeaways })
    };
  }
}

console.log(`  Extracted ${Object.keys(questionsData).length} questions`);

// ============================================
// 5. PLAYBOOKS DATA
// ============================================
console.log('5. Extracting FULL playbooks data...');

const playbooksPath = path.join(srcDir, 'data', 'playbooks.ts');
const playbooksContent = fs.readFileSync(playbooksPath, 'utf8');

let playbooksData = {};

const playbooksArrayMatch = playbooksContent.match(/export const playbooks[\s\S]*?=\s*\[([\s\S]*)\]/);
if (playbooksArrayMatch) {
  const playbooksStr = playbooksArrayMatch[1];
  const playbookChunks = playbooksStr.split(/\n\s*\{\s*\n?\s*slug:/);
  
  for (let i = 1; i < playbookChunks.length; i++) {
    const chunk = '{ slug:' + playbookChunks[i];
    
    const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];
    
    const titleMatch = chunk.match(/title:\s*["']([^"']+)["']/);
    const title = titleMatch ? titleMatch[1] : slug;
    
    const subtitleMatch = chunk.match(/subtitle:\s*["']([^"']+)["']/);
    const subtitle = subtitleMatch ? subtitleMatch[1] : '';
    
    const introMatch = chunk.match(/introduction:\s*`([^`]*)`/s);
    const introduction = introMatch ? introMatch[1].trim() : undefined;
    
    // Steps (complex nested)
    const stepsMatch = chunk.match(/steps:\s*\[([\s\S]*?)\]\s*(?:,\s*(?:tips|warnings|conclusion|faq)|\s*\})/);
    let steps = [];
    if (stepsMatch) {
      const stepRegex = /\{\s*title:\s*["']([^"']+)["']\s*,\s*content:\s*`([^`]*)`/gs;
      let stepMatch;
      while ((stepMatch = stepRegex.exec(stepsMatch[1])) !== null) {
        steps.push({
          title: stepMatch[1],
          content: stepMatch[2].trim()
        });
      }
    }
    
    // Tips
    const tipsMatch = chunk.match(/tips:\s*\[([\s\S]*?)\]\s*(?:,|\})/);
    let tips = [];
    if (tipsMatch) {
      const items = tipsMatch[1].match(/["']([^"']+)["']/g);
      if (items) {
        tips = items.map(t => t.replace(/["']/g, ''));
      }
    }
    
    // Conclusion
    const conclusionMatch = chunk.match(/conclusion:\s*`([^`]*)`/s);
    const conclusion = conclusionMatch ? conclusionMatch[1].trim() : undefined;
    
    playbooksData[slug] = {
      title,
      subtitle,
      ...(introduction && { introduction }),
      ...(steps.length > 0 && { steps }),
      ...(tips.length > 0 && { tips }),
      ...(conclusion && { conclusion })
    };
  }
}

console.log(`  Extracted ${Object.keys(playbooksData).length} playbooks`);

// ============================================
// 6. PATTERNS DATA
// ============================================
console.log('6. Extracting FULL patterns data...');

const patternsPath = path.join(srcDir, 'data', 'dev-patterns.ts');
const patternsContent = fs.readFileSync(patternsPath, 'utf8');

let patternsData = {};

const patternsArrayMatch = patternsContent.match(/export const devPatterns[\s\S]*?=\s*\[([\s\S]*)\]/);
if (patternsArrayMatch) {
  const patternsStr = patternsArrayMatch[1];
  const patternChunks = patternsStr.split(/\n\s*\{\s*\n?\s*slug:/);
  
  for (let i = 1; i < patternChunks.length; i++) {
    const chunk = '{ slug:' + patternChunks[i];
    
    const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];
    
    const titleMatch = chunk.match(/title:\s*["']([^"']+)["']/);
    const title = titleMatch ? titleMatch[1] : slug;
    
    const descMatch = chunk.match(/description:\s*["']([^"']+)["']/);
    const description = descMatch ? descMatch[1] : '';
    
    const problemMatch = chunk.match(/problem:\s*`([^`]*)`/s);
    const problem = problemMatch ? problemMatch[1].trim() : undefined;
    
    const solutionMatch = chunk.match(/solution:\s*`([^`]*)`/s);
    const solution = solutionMatch ? solutionMatch[1].trim() : undefined;
    
    const implMatch = chunk.match(/implementation:\s*`([^`]*)`/s);
    const implementation = implMatch ? implMatch[1].trim() : undefined;
    
    // Benefits
    const benefitsMatch = chunk.match(/benefits:\s*\[([\s\S]*?)\]\s*(?:,|\})/);
    let benefits = [];
    if (benefitsMatch) {
      const items = benefitsMatch[1].match(/["']([^"']+)["']/g);
      if (items) {
        benefits = items.map(b => b.replace(/["']/g, ''));
      }
    }
    
    // Considerations
    const considerationsMatch = chunk.match(/considerations:\s*\[([\s\S]*?)\]\s*(?:,|\})/);
    let considerations = [];
    if (considerationsMatch) {
      const items = considerationsMatch[1].match(/["']([^"']+)["']/g);
      if (items) {
        considerations = items.map(c => c.replace(/["']/g, ''));
      }
    }
    
    patternsData[slug] = {
      title,
      description,
      ...(problem && { problem }),
      ...(solution && { solution }),
      ...(implementation && { implementation }),
      ...(benefits.length > 0 && { benefits }),
      ...(considerations.length > 0 && { considerations })
    };
  }
}

console.log(`  Extracted ${Object.keys(patternsData).length} patterns`);

// ============================================
// 7. INFOGRAPHICS DATA
// ============================================
console.log('7. Extracting FULL infographics data...');

const infographicsPath = path.join(srcDir, 'data', 'infographics.ts');
const infographicsContent = fs.readFileSync(infographicsPath, 'utf8');

let infographicItems = {};

const infographicsArrayMatch = infographicsContent.match(/export const infographics[\s\S]*?=\s*\[([\s\S]*)\]/);
if (infographicsArrayMatch) {
  const infographicsStr = infographicsArrayMatch[1];
  const infographicChunks = infographicsStr.split(/\n\s*\{\s*\n?\s*slug:/);
  
  for (let i = 1; i < infographicChunks.length; i++) {
    const chunk = '{ slug:' + infographicChunks[i];
    
    const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];
    
    const titleMatch = chunk.match(/title:\s*["']([^"']+)["']/);
    const title = titleMatch ? titleMatch[1] : slug;
    
    const shortDescMatch = chunk.match(/shortDescription:\s*["']([^"']+)["']/);
    const shortDescription = shortDescMatch ? shortDescMatch[1] : '';
    
    const subtitleMatch = chunk.match(/subtitle:\s*["']([^"']+)["']/);
    const subtitle = subtitleMatch ? subtitleMatch[1] : undefined;
    
    infographicItems[slug] = {
      title,
      shortDescription,
      ...(subtitle && { subtitle })
    };
  }
}

console.log(`  Extracted ${Object.keys(infographicItems).length} infographics`);

// ============================================
// SAVE TO EN FILES
// ============================================
console.log('\n=== Saving to EN files ===\n');

// Save ecosystem.json
const enEcosystemPath = path.join(messagesDir, 'en', 'ecosystem.json');
const enEcosystem = readJSON(enEcosystemPath);
enEcosystem.ecosystemData = ecosystemData;
writeJSON(enEcosystemPath, enEcosystem);
console.log(`Saved ecosystem.json with ${Object.keys(ecosystemData).length} projects`);

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
console.log(`Saved content-hubs.json with full content`);

// ============================================
// SYNC TO RU
// ============================================
console.log('\n=== Syncing to RU ===\n');

// Sync ecosystem.json
const ruEcosystemPath = path.join(messagesDir, 'ru', 'ecosystem.json');
const ruEcosystem = readJSON(ruEcosystemPath);
const existingRuEcosystemData = ruEcosystem.ecosystemData || {};

const syncedEcosystemData = {};
for (const slug in ecosystemData) {
  const enData = ecosystemData[slug];
  const ruData = existingRuEcosystemData[slug] || {};
  
  syncedEcosystemData[slug] = {
    name: enData.name, // Keep English brand names
    description: ruData.description && ruData.description !== enData.description ? ruData.description : enData.description,
    ...(enData.longDescription && { 
      longDescription: ruData.longDescription || enData.longDescription 
    }),
    ...(enData.features && { 
      features: ruData.features || enData.features 
    }),
    ...(enData.faq && { 
      faq: ruData.faq || enData.faq 
    })
  };
}
ruEcosystem.ecosystemData = syncedEcosystemData;
writeJSON(ruEcosystemPath, ruEcosystem);
console.log(`Synced ru/ecosystem.json (${Object.keys(syncedEcosystemData).length} projects, English names preserved)`);

// Sync content-hubs.json
const ruContentHubsPath = path.join(messagesDir, 'ru', 'content-hubs.json');
const ruContentHubs = readJSON(ruContentHubsPath);

function syncDataSection(enData, ruExisting, keyName) {
  const synced = {};
  for (const slug in enData) {
    const en = enData[slug];
    const ru = (ruExisting || {})[slug] || {};
    
    synced[slug] = {};
    for (const field in en) {
      // Keep existing Russian translation if it differs from English
      if (ru[field] !== undefined && JSON.stringify(ru[field]) !== JSON.stringify(en[field])) {
        synced[slug][field] = ru[field];
      } else {
        synced[slug][field] = en[field];
      }
    }
  }
  return synced;
}

ruContentHubs.glossaryTerms = syncDataSection(glossaryTerms, ruContentHubs.glossaryTerms, 'glossaryTerms');
ruContentHubs.topicsData = syncDataSection(topicsData, ruContentHubs.topicsData, 'topicsData');
ruContentHubs.questionsData = syncDataSection(questionsData, ruContentHubs.questionsData, 'questionsData');
ruContentHubs.playbooksData = syncDataSection(playbooksData, ruContentHubs.playbooksData, 'playbooksData');
ruContentHubs.patternsData = syncDataSection(patternsData, ruContentHubs.patternsData, 'patternsData');
ruContentHubs.infographicItems = syncDataSection(infographicItems, ruContentHubs.infographicItems, 'infographicItems');

writeJSON(ruContentHubsPath, ruContentHubs);
console.log(`Synced ru/content-hubs.json`);

// ============================================
// STATISTICS
// ============================================
console.log('\n=== Extraction Complete ===\n');
console.log('Content extracted:');
console.log(`  - Ecosystem projects: ${Object.keys(ecosystemData).length}`);
console.log(`  - Glossary terms: ${Object.keys(glossaryTerms).length}`);
console.log(`  - Topics: ${Object.keys(topicsData).length}`);
console.log(`  - Questions: ${Object.keys(questionsData).length}`);
console.log(`  - Playbooks: ${Object.keys(playbooksData).length}`);
console.log(`  - Patterns: ${Object.keys(patternsData).length}`);
console.log(`  - Infographics: ${Object.keys(infographicItems).length}`);

console.log('\nNext steps:');
console.log('1. Upload en/ecosystem.json and en/content-hubs.json to Crowdin');
console.log('2. Translate the new content');
console.log('3. Download translations to ru/');

