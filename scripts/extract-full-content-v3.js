#!/usr/bin/env node
/**
 * FULL content extraction - V3
 * Properly extracts ALL fields from TypeScript data files
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

// Extract string values from regex
function extractString(content, pattern) {
  const match = content.match(pattern);
  return match ? match[1] : undefined;
}

// Extract template literal
function extractTemplateLiteral(content, fieldName) {
  const regex = new RegExp(`${fieldName}:\\s*\`([^\`]*)\``, 's');
  const match = content.match(regex);
  return match ? match[1].trim() : undefined;
}

// Extract array of strings
function extractStringArray(content, fieldName) {
  const regex = new RegExp(`${fieldName}:\\s*\\[([\\s\\S]*?)\\]\\s*(?:,|\\})`, '');
  const match = content.match(regex);
  if (!match) return [];
  
  const items = match[1].match(/["']([^"']+)["']/g);
  return items ? items.map(i => i.replace(/["']/g, '')) : [];
}

console.log('=== FULL Content Extraction V3 ===\n');

// ============================================
// 1. TOPICS - Full extraction
// ============================================
console.log('1. Extracting FULL topics data...');

const topicsPath = path.join(srcDir, 'data', 'topics.ts');
const topicsContent = fs.readFileSync(topicsPath, 'utf8');
let topicsData = {};

// Split by topic objects
const topicChunks = topicsContent.split(/\n\s*\{\s*\n?\s*slug:\s*["']/);

for (let i = 1; i < topicChunks.length; i++) {
  const chunk = '{ slug: "' + topicChunks[i];
  
  const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  
  const title = extractString(chunk, /title:\s*["']([^"']+)["']/);
  const subtitle = extractString(chunk, /subtitle:\s*["']([^"']+)["']/);
  const heroStatement = extractString(chunk, /heroStatement:\s*["']([^"']+)["']/);
  
  // introduction and whatMakesUnique are regular strings (can be multi-line in source)
  const introMatch = chunk.match(/introduction:\s*["']([^"]+)["']/s);
  const introduction = introMatch ? introMatch[1].trim() : undefined;
  
  const uniqueMatch = chunk.match(/whatMakesUnique:\s*["']([^"]+)["']/s);
  const whatMakesUnique = uniqueMatch ? uniqueMatch[1].trim() : undefined;
  
  const keyDifferentiators = extractStringArray(chunk, 'keyDifferentiators');
  
  // Extract sections array
  const sectionsMatch = chunk.match(/sections:\s*\[([\s\S]*?)\]\s*,\s*(?:startHere|buildWithIt|philosophy)/);
  let sections = [];
  if (sectionsMatch) {
    const sectionRegex = /\{\s*id:\s*["']([^"']+)["']\s*,\s*title:\s*["']([^"']+)["']\s*,\s*description:\s*["']([^"']+)["']\s*\}/g;
    let sectionMatch;
    while ((sectionMatch = sectionRegex.exec(sectionsMatch[1])) !== null) {
      sections.push({
        id: sectionMatch[1],
        title: sectionMatch[2],
        description: sectionMatch[3]
      });
    }
  }
  
  // Extract keyTerms array
  const keyTermsMatch = chunk.match(/keyTerms:\s*\[([\s\S]*?)\]\s*,\s*(?:relatedQuestions|relatedTopics)/);
  let keyTerms = [];
  if (keyTermsMatch) {
    const termRegex = /\{\s*term:\s*["']([^"']+)["']\s*,\s*slug:\s*["']([^"']+)["']\s*,\s*shortDefinition:\s*["']([^"']+)["']\s*\}/g;
    let termMatch;
    while ((termMatch = termRegex.exec(keyTermsMatch[1])) !== null) {
      keyTerms.push({
        term: termMatch[1],
        slug: termMatch[2],
        shortDefinition: termMatch[3]
      });
    }
  }

  topicsData[slug] = {
    title: title || slug,
    subtitle: subtitle || '',
    ...(heroStatement && { heroStatement }),
    ...(introduction && { introduction }),
    ...(whatMakesUnique && { whatMakesUnique }),
    ...(keyDifferentiators.length > 0 && { keyDifferentiators }),
    ...(sections.length > 0 && { sections }),
    ...(keyTerms.length > 0 && { keyTerms })
  };
}

console.log(`  Extracted ${Object.keys(topicsData).length} topics`);
const sampleTopic = topicsData['ergo-defi'];
if (sampleTopic) {
  console.log(`  ergo-defi fields: ${Object.keys(sampleTopic).join(', ')}`);
}

// ============================================
// 2. QUESTIONS - Full extraction
// ============================================
console.log('2. Extracting FULL questions data...');

const questionsPath = path.join(srcDir, 'data', 'questions.ts');
const questionsContent = fs.readFileSync(questionsPath, 'utf8');
let questionsData = {};

const questionChunks = questionsContent.split(/\n\s*\{\s*\n?\s*slug:\s*["']/);

for (let i = 1; i < questionChunks.length; i++) {
  const chunk = '{ slug: "' + questionChunks[i];
  
  const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  
  const query = extractString(chunk, /query:\s*["']([^"']+)["']/);
  const shortAnswer = extractString(chunk, /shortAnswer:\s*["']([^"']+)["']/);
  const seoTitle = extractString(chunk, /seoTitle:\s*["']([^"']+)["']/);
  const seoDescription = extractString(chunk, /seoDescription:\s*["']([^"']+)["']/);
  const category = extractString(chunk, /category:\s*["']([^"']+)["']/);
  const keyPoints = extractStringArray(chunk, 'keyPoints');

  questionsData[slug] = {
    query: query || slug,
    shortAnswer: shortAnswer || '',
    ...(seoTitle && { seoTitle }),
    ...(seoDescription && { seoDescription }),
    ...(category && { category }),
    ...(keyPoints.length > 0 && { keyPoints })
  };
}

console.log(`  Extracted ${Object.keys(questionsData).length} questions`);
const sampleQuestion = questionsData['how-to-build-defi-on-ergo'];
if (sampleQuestion) {
  console.log(`  how-to-build-defi-on-ergo fields: ${Object.keys(sampleQuestion).join(', ')}`);
}

// ============================================
// 3. PLAYBOOKS - Full extraction
// ============================================
console.log('3. Extracting FULL playbooks data...');

const playbooksPath = path.join(srcDir, 'data', 'playbooks.ts');
const playbooksContent = fs.readFileSync(playbooksPath, 'utf8');
let playbooksData = {};

const playbookChunks = playbooksContent.split(/\n\s*\{\s*\n?\s*slug:\s*["']/);

for (let i = 1; i < playbookChunks.length; i++) {
  const chunk = '{ slug: "' + playbookChunks[i];
  
  const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  
  const title = extractString(chunk, /title:\s*["']([^"']+)["']/);
  const subtitle = extractString(chunk, /subtitle:\s*["']([^"']+)["']/);
  const heroDescription = extractString(chunk, /heroDescription:\s*["']([^"']+)["']/);
  const problemStatement = extractString(chunk, /problemStatement:\s*["']([^"']+)["']/);
  const solution = extractString(chunk, /solution:\s*["']([^"']+)["']/);
  const seoTitle = extractString(chunk, /seoTitle:\s*["']([^"']+)["']/);
  const seoDescription = extractString(chunk, /seoDescription:\s*["']([^"']+)["']/);
  const difficulty = extractString(chunk, /difficulty:\s*["']([^"']+)["']/);
  const timeToComplete = extractString(chunk, /timeToComplete:\s*["']([^"']+)["']/);
  
  // Extract steps array
  const stepsMatch = chunk.match(/steps:\s*\[([\s\S]*?)\]\s*,\s*(?:relatedInfographicTags|featuredInfographics|caseStudies)/);
  let steps = [];
  if (stepsMatch) {
    // Split by step objects
    const stepParts = stepsMatch[1].split(/\n\s*\{\s*\n?\s*title:/);
    for (let j = 1; j < stepParts.length; j++) {
      const stepChunk = '{ title:' + stepParts[j];
      const stepTitle = extractString(stepChunk, /title:\s*["']([^"']+)["']/);
      const stepDesc = extractString(stepChunk, /description:\s*["']([^"']+)["']/);
      const stepDuration = extractString(stepChunk, /duration:\s*["']([^"']+)["']/);
      
      if (stepTitle && stepDesc) {
        steps.push({
          title: stepTitle,
          description: stepDesc,
          ...(stepDuration && { duration: stepDuration })
        });
      }
    }
  }

  playbooksData[slug] = {
    title: title || slug,
    subtitle: subtitle || '',
    ...(heroDescription && { heroDescription }),
    ...(problemStatement && { problemStatement }),
    ...(solution && { solution }),
    ...(seoTitle && { seoTitle }),
    ...(seoDescription && { seoDescription }),
    ...(difficulty && { difficulty }),
    ...(timeToComplete && { timeToComplete }),
    ...(steps.length > 0 && { steps })
  };
}

console.log(`  Extracted ${Object.keys(playbooksData).length} playbooks`);
const samplePlaybook = playbooksData['escape-financial-repression'];
if (samplePlaybook) {
  console.log(`  escape-financial-repression fields: ${Object.keys(samplePlaybook).join(', ')}`);
}

// ============================================
// 4. PATTERNS - Full extraction
// ============================================
console.log('4. Extracting FULL patterns data...');

const patternsPath = path.join(srcDir, 'data', 'dev-patterns.ts');
const patternsContent = fs.readFileSync(patternsPath, 'utf8');
let patternsData = {};

const patternChunks = patternsContent.split(/\n\s*\{\s*\n?\s*slug:\s*["']/);

for (let i = 1; i < patternChunks.length; i++) {
  const chunk = '{ slug: "' + patternChunks[i];
  
  const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  
  const title = extractString(chunk, /title:\s*["']([^"']+)["']/);
  const description = extractString(chunk, /description:\s*["']([^"']+)["']/);
  const problemStatement = extractTemplateLiteral(chunk, 'problemStatement') || extractString(chunk, /problemStatement:\s*["']([^"']+)["']/);
  const solutionSummary = extractTemplateLiteral(chunk, 'solutionSummary') || extractString(chunk, /solutionSummary:\s*["']([^"']+)["']/);
  const seoTitle = extractString(chunk, /seoTitle:\s*["']([^"']+)["']/);
  const seoDescription = extractString(chunk, /seoDescription:\s*["']([^"']+)["']/);
  const difficulty = extractString(chunk, /difficulty:\s*["']([^"']+)["']/);
  
  // Extract implementationSteps
  const implStepsMatch = chunk.match(/implementationSteps:\s*\[([\s\S]*?)\]\s*,\s*(?:benefits|codeExamples|relatedPatterns|prerequisites)/);
  let implementationSteps = [];
  if (implStepsMatch) {
    const stepParts = implStepsMatch[1].split(/\n\s*\{\s*\n?\s*title:/);
    for (let j = 1; j < stepParts.length; j++) {
      const stepChunk = '{ title:' + stepParts[j];
      const stepTitle = extractString(stepChunk, /title:\s*["']([^"']+)["']/);
      const stepDesc = extractString(stepChunk, /description:\s*["']([^"']+)["']/);
      if (stepTitle && stepDesc) {
        implementationSteps.push({ title: stepTitle, description: stepDesc });
      }
    }
  }
  
  // Extract benefits
  const benefits = extractStringArray(chunk, 'benefits');
  
  // Extract considerations
  const considerations = extractStringArray(chunk, 'considerations');

  patternsData[slug] = {
    title: title || slug,
    description: description || '',
    ...(problemStatement && { problemStatement }),
    ...(solutionSummary && { solutionSummary }),
    ...(seoTitle && { seoTitle }),
    ...(seoDescription && { seoDescription }),
    ...(difficulty && { difficulty }),
    ...(implementationSteps.length > 0 && { implementationSteps }),
    ...(benefits.length > 0 && { benefits }),
    ...(considerations.length > 0 && { considerations })
  };
}

console.log(`  Extracted ${Object.keys(patternsData).length} patterns`);
const samplePattern = patternsData['ergo-nft-minting-guide'];
if (samplePattern) {
  console.log(`  ergo-nft-minting-guide fields: ${Object.keys(samplePattern).join(', ')}`);
}

// ============================================
// 5. GLOSSARY - Full extraction  
// ============================================
console.log('5. Extracting FULL glossary data...');

const glossaryPath = path.join(srcDir, 'data', 'glossary.ts');
const glossaryContent = fs.readFileSync(glossaryPath, 'utf8');
let glossaryTerms = {};

const termChunks = glossaryContent.split(/\n\s*\{\s*\n?\s*slug:\s*["']/);

for (let i = 1; i < termChunks.length; i++) {
  const chunk = '{ slug: "' + termChunks[i];
  
  const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  
  const term = extractString(chunk, /term:\s*["']([^"']+)["']/);
  const shortDefinition = extractString(chunk, /shortDefinition:\s*["']([^"']+)["']/);
  const fullDefinition = extractTemplateLiteral(chunk, 'fullDefinition');
  const seoTitle = extractString(chunk, /seoTitle:\s*["']([^"']+)["']/);
  const seoDescription = extractString(chunk, /seoDescription:\s*["']([^"']+)["']/);
  const keyPoints = extractStringArray(chunk, 'keyPoints');
  const useCases = extractStringArray(chunk, 'useCases');
  const commonMisconceptions = extractStringArray(chunk, 'commonMisconceptions');
  
  // Extract FAQ
  const faqMatch = chunk.match(/faq:\s*\[([\s\S]*?)\]\s*(?:,\s*(?:relatedTerms|publishDate|categories)|\s*\})/);
  let faq = [];
  if (faqMatch) {
    const faqRegex = /\{\s*question:\s*["']([^"']+)["']\s*,\s*answer:\s*["']([^"']+)["']\s*\}/g;
    let faqItem;
    while ((faqItem = faqRegex.exec(faqMatch[1])) !== null) {
      faq.push({ question: faqItem[1], answer: faqItem[2] });
    }
  }

  glossaryTerms[slug] = {
    term: term || slug,
    shortDefinition: shortDefinition || '',
    ...(fullDefinition && { fullDefinition }),
    ...(seoTitle && { seoTitle }),
    ...(seoDescription && { seoDescription }),
    ...(keyPoints.length > 0 && { keyPoints }),
    ...(useCases.length > 0 && { useCases }),
    ...(commonMisconceptions.length > 0 && { commonMisconceptions }),
    ...(faq.length > 0 && { faq })
  };
}

console.log(`  Extracted ${Object.keys(glossaryTerms).length} glossary terms`);
const sampleGlossary = glossaryTerms['autolykos'];
if (sampleGlossary) {
  console.log(`  autolykos fields: ${Object.keys(sampleGlossary).join(', ')}`);
}

// ============================================
// 6. ECOSYSTEM - Full extraction
// ============================================
console.log('6. Extracting FULL ecosystem data...');

const ecosystemPath = path.join(srcDir, 'app', '[locale]', 'ecosystem', '_data.ts');
const ecosystemContent = fs.readFileSync(ecosystemPath, 'utf8');
let ecosystemData = {};

const projectChunks = ecosystemContent.split(/\n\s*\{\s*\n?\s*id:\s*\d+/);

for (let i = 1; i < projectChunks.length; i++) {
  const chunk = '{ id: 1' + projectChunks[i];
  
  const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  
  const name = extractString(chunk, /name:\s*["']([^"']+)["']/);
  const description = extractString(chunk, /description:\s*["']([^"']+)["']/);
  const longDescription = extractTemplateLiteral(chunk, 'longDescription');
  const features = extractStringArray(chunk, 'features');
  
  // Extract FAQ
  const faqMatch = chunk.match(/faq:\s*\[([\s\S]*?)\]\s*(?:,\s*(?:relatedTags|technologies)|\s*\})/);
  let faq = [];
  if (faqMatch) {
    const faqRegex = /\{\s*question:\s*["']([^"']+)["']\s*,\s*answer:\s*["']([^"']+)["']\s*\}/g;
    let faqItem;
    while ((faqItem = faqRegex.exec(faqMatch[1])) !== null) {
      faq.push({ question: faqItem[1], answer: faqItem[2] });
    }
  }

  ecosystemData[slug] = {
    name: name || slug,
    description: description || '',
    ...(longDescription && { longDescription }),
    ...(features.length > 0 && { features }),
    ...(faq.length > 0 && { faq })
  };
}

console.log(`  Extracted ${Object.keys(ecosystemData).length} ecosystem projects`);
const sampleEco = ecosystemData['rosen-bridge'];
if (sampleEco) {
  console.log(`  rosen-bridge fields: ${Object.keys(sampleEco).join(', ')}`);
}

// ============================================
// 7. INFOGRAPHICS
// ============================================
console.log('7. Extracting FULL infographics data...');

const infographicsPath = path.join(srcDir, 'data', 'infographics.ts');
const infographicsContent = fs.readFileSync(infographicsPath, 'utf8');
let infographicItems = {};

const infographicChunks = infographicsContent.split(/\n\s*\{\s*\n?\s*slug:\s*["']/);

for (let i = 1; i < infographicChunks.length; i++) {
  const chunk = '{ slug: "' + infographicChunks[i];
  
  const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  
  const title = extractString(chunk, /title:\s*["']([^"']+)["']/);
  const shortDescription = extractString(chunk, /shortDescription:\s*["']([^"']+)["']/);
  const subtitle = extractString(chunk, /subtitle:\s*["']([^"']+)["']/);

  infographicItems[slug] = {
    title: title || slug,
    shortDescription: shortDescription || '',
    ...(subtitle && { subtitle })
  };
}

console.log(`  Extracted ${Object.keys(infographicItems).length} infographics`);

// ============================================
// 8. COMPARISONS - Full extraction
// ============================================
console.log('8. Extracting FULL comparisons data...');

const comparisonsPath = path.join(srcDir, 'data', 'comparisons.ts');
const comparisonsContent = fs.readFileSync(comparisonsPath, 'utf8');
let comparisonsData = {};

// Split by opening braces with slug: pattern inside array
const comparisonChunks = comparisonsContent.split(/\n\s*\{\s*\n?\s*slug:\s*["']/);

for (let i = 1; i < comparisonChunks.length; i++) {
  const chunk = '{ slug: "' + comparisonChunks[i];
  
  const slugMatch = chunk.match(/slug:\s*["']([^"']+)["']/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  
  const name = extractString(chunk, /name:\s*["']([^"']+)["']/);
  const seoTitle = extractString(chunk, /seoTitle:\s*["']([^"']+)["']/);
  const seoDescription = extractString(chunk, /seoDescription:\s*["']([^"']+)["']/);
  
  // Extract summary
  const headlineMatch = chunk.match(/summary:\s*\{[\s\S]*?headline:\s*["']([^"']+)["']/);
  const subheadlineMatch = chunk.match(/summary:\s*\{[\s\S]*?subheadline:\s*["']([^"']+)["']/);
  const headline = headlineMatch ? headlineMatch[1] : undefined;
  const subheadline = subheadlineMatch ? subheadlineMatch[1] : undefined;
  
  // Extract summary points
  const pointsMatch = chunk.match(/points:\s*\[([\s\S]*?)\]\s*,?\s*\}/);
  let summaryPoints = [];
  if (pointsMatch) {
    const pointRegex = /\{\s*title:\s*["']([^"']+)["']\s*,\s*description:\s*["']([^"']+)["']/g;
    let pointMatch;
    while ((pointMatch = pointRegex.exec(pointsMatch[1])) !== null) {
      summaryPoints.push({ title: pointMatch[1], description: pointMatch[2] });
    }
  }
  
  // Extract sections - handle multi-line content with commas
  const sectionsMatch = chunk.match(/sections:\s*\[([\s\S]*?)\]\s*,\s*(?:relatedTags)/);
  let sections = [];
  if (sectionsMatch) {
    // Split by section objects
    const sectionParts = sectionsMatch[1].split(/\n\s*\{\s*\n?\s*title:/);
    for (let j = 1; j < sectionParts.length; j++) {
      const sectionChunk = '{ title:' + sectionParts[j];
      const sTitle = extractString(sectionChunk, /title:\s*["']([^"']+)["']/);
      const sContent = extractString(sectionChunk, /content:\s*["']([^"']+)["']/);
      const sAdvantage = extractString(sectionChunk, /ergoAdvantage:\s*["']([^"']+)["']/);
      if (sTitle && sContent) {
        sections.push({
          title: sTitle,
          content: sContent,
          ...(sAdvantage && { ergoAdvantage: sAdvantage })
        });
      }
    }
  }
  
  // Extract FAQ - handle multi-line answers
  const faqMatch = chunk.match(/faq:\s*\[([\s\S]*?)\]\s*,\s*(?:publishDate)/);
  let faq = [];
  if (faqMatch) {
    const faqParts = faqMatch[1].split(/\n\s*\{\s*\n?\s*question:/);
    for (let j = 1; j < faqParts.length; j++) {
      const faqChunk = '{ question:' + faqParts[j];
      const fQuestion = extractString(faqChunk, /question:\s*["']([^"']+)["']/);
      const fAnswer = extractString(faqChunk, /answer:\s*["']([^"']+)["']/);
      if (fQuestion && fAnswer) {
        faq.push({ question: fQuestion, answer: fAnswer });
      }
    }
  }

  comparisonsData[slug] = {
    name: name || slug,
    seoTitle: seoTitle || '',
    seoDescription: seoDescription || '',
    summary: {
      ...(headline && { headline }),
      ...(subheadline && { subheadline }),
      ...(summaryPoints.length > 0 && { points: summaryPoints })
    },
    ...(sections.length > 0 && { sections }),
    ...(faq.length > 0 && { faq })
  };
}

console.log(`  Extracted ${Object.keys(comparisonsData).length} comparisons`);
const sampleComp = comparisonsData['bitcoin'];
if (sampleComp) {
  console.log(`  bitcoin fields: ${Object.keys(sampleComp).join(', ')}`);
  console.log(`  bitcoin summary.points: ${sampleComp.summary?.points?.length || 0} items`);
  console.log(`  bitcoin sections: ${sampleComp.sections?.length || 0} items`);
  console.log(`  bitcoin faq: ${sampleComp.faq?.length || 0} items`);
}

// ============================================
// 9. USE CASES - Full extraction
// ============================================
console.log('9. Extracting FULL use cases data...');

const useCasesPath = path.join(srcDir, 'app', '[locale]', 'use', '_data.ts');
const useCasesContent = fs.readFileSync(useCasesPath, 'utf8');
let useCasesFullData = {};

const useCaseChunks = useCasesContent.split(/\n\s*\{\s*\n?\s*id:\s*["']/);

for (let i = 1; i < useCaseChunks.length; i++) {
  const chunk = '{ id: "' + useCaseChunks[i];
  
  const idMatch = chunk.match(/id:\s*["']([^"']+)["']/);
  if (!idMatch) continue;
  const id = idMatch[1];
  
  const title = extractString(chunk, /title:\s*["']([^"']+)["']/);
  const subtitle = extractString(chunk, /subtitle:\s*["']([^"']+)["']/);
  const description = extractString(chunk, /description:\s*["']([^"']+)["']/);

  useCasesFullData[id] = {
    title: title || id,
    subtitle: subtitle || '',
    description: description || ''
  };
}

console.log(`  Extracted ${Object.keys(useCasesFullData).length} use cases`);

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
console.log(`Saved content-hubs.json`);

// Save compare.json - add comparisonItems
const enComparePath = path.join(messagesDir, 'en', 'compare.json');
const enCompare = readJSON(enComparePath);
enCompare.comparisonItems = comparisonsData;
writeJSON(enComparePath, enCompare);
console.log(`Saved compare.json with ${Object.keys(comparisonsData).length} comparisons`);

// Save use.json - update useCasesData
const enUsePath = path.join(messagesDir, 'en', 'use.json');
const enUse = readJSON(enUsePath);
enUse.useCasesData = useCasesFullData;
writeJSON(enUsePath, enUse);
console.log(`Saved use.json with ${Object.keys(useCasesFullData).length} use cases`);

// ============================================
// SYNC TO RU (preserve existing translations, add new with EN values)
// ============================================
console.log('\n=== Syncing to RU ===\n');

function deepSyncObject(enObj, ruObj) {
  const result = {};
  for (const key in enObj) {
    const enVal = enObj[key];
    const ruVal = ruObj ? ruObj[key] : undefined;
    
    if (Array.isArray(enVal)) {
      // For arrays, check if we have translation
      if (Array.isArray(ruVal) && ruVal.length === enVal.length) {
        result[key] = ruVal;
      } else {
        result[key] = enVal;
      }
    } else if (typeof enVal === 'object' && enVal !== null) {
      // Recurse for objects
      result[key] = deepSyncObject(enVal, ruVal);
    } else {
      // Primitive: use existing translation if different, otherwise use EN
      if (ruVal !== undefined && ruVal !== enVal) {
        result[key] = ruVal;
      } else {
        result[key] = enVal;
      }
    }
  }
  return result;
}

// Sync ecosystem
const ruEcosystemPath = path.join(messagesDir, 'ru', 'ecosystem.json');
const ruEcosystem = readJSON(ruEcosystemPath);
const existingRuEcosystemData = ruEcosystem.ecosystemData || {};

const syncedEcosystemData = {};
for (const slug in ecosystemData) {
  const enData = ecosystemData[slug];
  const ruData = existingRuEcosystemData[slug] || {};
  
  syncedEcosystemData[slug] = deepSyncObject(enData, ruData);
  // Always keep English name for brand consistency
  syncedEcosystemData[slug].name = enData.name;
}
ruEcosystem.ecosystemData = syncedEcosystemData;
writeJSON(ruEcosystemPath, ruEcosystem);
console.log(`Synced ru/ecosystem.json (${Object.keys(syncedEcosystemData).length} projects)`);

// Sync content-hubs
const ruContentHubsPath = path.join(messagesDir, 'ru', 'content-hubs.json');
const ruContentHubs = readJSON(ruContentHubsPath);

function syncDataSection(enData, ruData) {
  const synced = {};
  for (const slug in enData) {
    synced[slug] = deepSyncObject(enData[slug], (ruData || {})[slug]);
  }
  return synced;
}

ruContentHubs.glossaryTerms = syncDataSection(glossaryTerms, ruContentHubs.glossaryTerms);
ruContentHubs.topicsData = syncDataSection(topicsData, ruContentHubs.topicsData);
ruContentHubs.questionsData = syncDataSection(questionsData, ruContentHubs.questionsData);
ruContentHubs.playbooksData = syncDataSection(playbooksData, ruContentHubs.playbooksData);
ruContentHubs.patternsData = syncDataSection(patternsData, ruContentHubs.patternsData);
ruContentHubs.infographicItems = syncDataSection(infographicItems, ruContentHubs.infographicItems);

writeJSON(ruContentHubsPath, ruContentHubs);
console.log(`Synced ru/content-hubs.json`);

// Sync compare.json
const ruComparePath = path.join(messagesDir, 'ru', 'compare.json');
const ruCompare = readJSON(ruComparePath);
ruCompare.comparisonItems = syncDataSection(comparisonsData, ruCompare.comparisonItems);
writeJSON(ruComparePath, ruCompare);
console.log(`Synced ru/compare.json (${Object.keys(comparisonsData).length} comparisons)`);

// Sync use.json
const ruUsePath = path.join(messagesDir, 'ru', 'use.json');
const ruUse = readJSON(ruUsePath);
ruUse.useCasesData = syncDataSection(useCasesFullData, ruUse.useCasesData);
writeJSON(ruUsePath, ruUse);
console.log(`Synced ru/use.json (${Object.keys(useCasesFullData).length} use cases)`);

// ============================================
// STATS
// ============================================
console.log('\n=== Extraction Complete ===');
console.log('\nContent extracted to messages/en/:');
console.log(`  ecosystem.json:`);
console.log(`    - ${Object.keys(ecosystemData).length} projects with: name, description, longDescription, features, faq`);
console.log(`  content-hubs.json:`);
console.log(`    - ${Object.keys(glossaryTerms).length} glossary terms with: term, shortDefinition, keyPoints, useCases, faq`);
console.log(`    - ${Object.keys(topicsData).length} topics with: title, subtitle, heroStatement, introduction, whatMakesUnique, keyDifferentiators, sections, keyTerms`);
console.log(`    - ${Object.keys(questionsData).length} questions with: query, shortAnswer, seoTitle, seoDescription, category, keyPoints`);
console.log(`    - ${Object.keys(playbooksData).length} playbooks with: title, subtitle, heroDescription, problemStatement, solution, steps`);
console.log(`    - ${Object.keys(patternsData).length} patterns with: title, description, problemStatement, solutionSummary, implementationSteps, benefits`);
console.log(`    - ${Object.keys(infographicItems).length} infographics with: title, shortDescription, subtitle`);
console.log(`  compare.json:`);
console.log(`    - ${Object.keys(comparisonsData).length} comparisons with: seoTitle, seoDescription, summary (headline, subheadline, points), sections, faq`);
console.log(`  use.json:`);
console.log(`    - ${Object.keys(useCasesFullData).length} use cases with: title, subtitle, description`);

console.log('\nNext steps:');
console.log('1. Upload updated en/*.json files to Crowdin');
console.log('2. Translate the new content');
console.log('3. Download to messages/ru/');

