/**
 * Script to split monolithic translation JSON into namespaced files
 */

const fs = require('fs');
const path = require('path');

// Namespace mapping - which keys go into which file
const namespaceMapping = {
  'common': [
    'common', 'navigation', 'errors', 'language', 'icu', 'validation', 
    'success', 'search', 'notFound', 'general', 'components', 'ui-kit', 'uiKit'
  ],
  'home': [
    'hero', 'buildForScale', 'madeForMassAdoption', 'poweredByErgoHome', 
    'joinCommunityHome', 'faqSimpleHome', 'valueProposition', 'testimonials', 
    'socialProof', 'featureComparison', 'ecosystemSection', 'communitySection', 
    'finalCta', 'audiencePaths', 'blogSection', 'subscribeSection', 
    'ecosystemShowcase', 'ctaSection', 'whatMakesDifferent', 'quickActions'
  ],
  'miners': ['minersPage', 'mining'],
  'hodlers': ['holdersPage'],
  'wallet': ['wallet', 'walletClient'],
  'ecosystem': [
    'ecosystem', 'ecosystemPage', 'ecosystemGrants', 'ecosystemMap', 
    'ecosystemMining', 'ecosystemData', 'ecosystemClient', 'mapClient'
  ],
  'faq': ['faq', 'faqPage', 'learnFaq', 'startFaq', 'faqData'],
  'learn': [
    'learn', 'learnErgoscript', 'learnGuides', 'learnGuidesConsensus', 
    'learnGuidesOraclePool', 'learnGuidesPrivacyFeatures', 'learnGuidesStorageRent', 
    'learnResearch', 'glossary', 'glossaryTermPage'
  ],
  'technology': ['technology', 'technologyPages', 'privacyFeatures', 'babelFees'],
  'start': [
    'start', 'startIntroduction', 'startCommunity', 'startComparison', 
    'startQuiz', 'startClient', 'comparisonClient', 'introductionClient', 
    'comparison', 'quiz', 'introduction'
  ],
  'developers': [
    'developersPage', 'docs', 'docsMenu', 'docsResources', 
    'playground', 'resources', 'sections'
  ],
  'use': [
    'use', 'usePages', 'useBabelFees', 'useBridges', 'useDaos', 
    'useGaming', 'useGetErg', 'useGuides', 'useIdentity', 'useMining', 
    'useNfts', 'useOracles', 'usePrivacy', 'useStablecoins', 'useCasesData', 'getErg',
    'useCases'
  ],
  'blog': ['blog'],
  'seo': ['seo', 'footer'],
  'community': ['community', 'communityClient'],
  'content-hubs': [
    'questionsData', 'topicsData', 'playbooksData', 'patternsData',
    'questionsHub', 'topicsHub', 'patternsHub', 'playbooksHub',
    'topicPage', 'questionPage', 'patternPage', 'playbookPage',
    'glossaryTerms'
  ],
  'infographics': ['infographicDetail', 'infographicsPage'],
  'manifesto': ['manifesto', 'corePillars', 'whyErgo'],
  'compare': ['compare', 'comparePageClient'],
  'newsletter': ['newsletter'],
  'events': ['events']
};

function splitTranslations(sourceFile, targetDir) {
  // Read source JSON
  const sourceData = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));
  
  // Create target directory
  fs.mkdirSync(targetDir, { recursive: true });
  
  // Track which keys were processed
  const processedKeys = new Set();
  
  // Split into namespaces
  for (const [namespace, keys] of Object.entries(namespaceMapping)) {
    const namespaceData = {};
    
    for (const key of keys) {
      if (sourceData[key] !== undefined) {
        namespaceData[key] = sourceData[key];
        processedKeys.add(key);
      }
    }
    
    // Only write if there's data
    if (Object.keys(namespaceData).length > 0) {
      const targetFile = path.join(targetDir, `${namespace}.json`);
      fs.writeFileSync(
        targetFile, 
        JSON.stringify(namespaceData, null, 2),
        'utf8'
      );
      console.log(`Created: ${targetFile} (${Object.keys(namespaceData).length} keys)`);
    }
  }
  
  // Check for unmapped keys
  const allKeys = Object.keys(sourceData);
  const unmappedKeys = allKeys.filter(key => !processedKeys.has(key));
  
  if (unmappedKeys.length > 0) {
    console.log('\nUnmapped keys (added to misc.json):');
    console.log(unmappedKeys.join(', '));
    
    // Create misc.json for unmapped keys
    const miscData = {};
    for (const key of unmappedKeys) {
      miscData[key] = sourceData[key];
    }
    const miscFile = path.join(targetDir, 'misc.json');
    fs.writeFileSync(miscFile, JSON.stringify(miscData, null, 2), 'utf8');
    console.log(`Created: ${miscFile} (${unmappedKeys.length} keys)`);
  }
  
  console.log(`\nTotal: ${allKeys.length} keys processed`);
}

// Run for English
const messagesDir = path.join(__dirname, '..', 'messages');
splitTranslations(
  path.join(messagesDir, 'en.json'),
  path.join(messagesDir, 'en')
);

// Run for Chinese
splitTranslations(
  path.join(messagesDir, 'zh-cn.json'),
  path.join(messagesDir, 'zh-cn')
);

console.log('\nDone! Now update src/i18n/request.ts to load from namespace files.');

