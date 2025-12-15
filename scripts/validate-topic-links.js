#!/usr/bin/env node
/**
 * Topic Links Validator
 * 
 * Validates all internal URLs in topics.ts:
 * - Checks that pages exist in the filesystem
 * - Detects old URL patterns (e.g., /use/cases/* instead of /use/*)
 * - Reports broken links and suggests fixes
 * 
 * Usage: node scripts/validate-topic-links.js
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Known URL patterns that should be flagged as outdated
const DEPRECATED_PATTERNS = [
  { pattern: /^\/use\/cases\//, replacement: '/use/', message: 'Old URL structure: use /use/* instead of /use/cases/*' },
  { pattern: /^\/use\/use-cases\//, replacement: '/use/', message: 'Old URL structure: use /use/* instead of /use/use-cases/*' },
];

// External URL prefixes that we skip validation for
const EXTERNAL_PREFIXES = ['http://', 'https://'];

// Read topics data
function getTopicsData() {
  const topicsPath = path.join(__dirname, '../src/data/topics.ts');
  const content = fs.readFileSync(topicsPath, 'utf-8');
  
  // Extract all URL strings from the file
  const urlPattern = /url:\s*["']([^"']+)["']/g;
  const urls = [];
  let match;
  
  while ((match = urlPattern.exec(content)) !== null) {
    urls.push(match[1]);
  }
  
  return urls;
}

// Check if a route exists in the app directory
async function routeExists(urlPath) {
  const appDir = path.join(__dirname, '../src/app/[locale]');
  
  // Remove leading slash and split into segments
  const segments = urlPath.replace(/^\//, '').split('/');
  
  // Build possible file paths
  const possiblePaths = [
    // Direct page.tsx
    path.join(appDir, ...segments, 'page.tsx'),
    // Dynamic route [slug]/page.tsx
    path.join(appDir, ...segments.slice(0, -1), '[slug]', 'page.tsx'),
    // Nested dynamic [category]/[slug]/page.tsx
    path.join(appDir, ...segments.slice(0, -2), '[category]', '[slug]', 'page.tsx'),
    // MDX content
    path.join(__dirname, '../content', ...segments, 'index.md'),
    path.join(__dirname, '../content', ...segments, 'index.mdx'),
  ];
  
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return { exists: true, path: p };
    }
  }
  
  // Also check for dynamic routes with different param names
  const dynamicPatterns = await glob(
    path.join(appDir, '**', 'page.tsx'),
    { ignore: ['**/node_modules/**'] }
  );
  
  for (const filePath of dynamicPatterns) {
    const relativePath = path.relative(appDir, filePath);
    const routeParts = relativePath.replace('/page.tsx', '').split(path.sep);
    
    // Check if the URL could match this dynamic route
    if (routeParts.length === segments.length) {
      let matches = true;
      for (let i = 0; i < routeParts.length; i++) {
        const routePart = routeParts[i];
        const segmentPart = segments[i];
        
        // Dynamic segment (e.g., [slug]) matches anything
        if (routePart.startsWith('[') && routePart.endsWith(']')) {
          continue;
        }
        
        if (routePart !== segmentPart) {
          matches = false;
          break;
        }
      }
      
      if (matches) {
        return { exists: true, path: filePath };
      }
    }
  }
  
  return { exists: false, path: null };
}

// Check for deprecated URL patterns
function checkDeprecatedPattern(url) {
  for (const { pattern, replacement, message } of DEPRECATED_PATTERNS) {
    if (pattern.test(url)) {
      const suggestedUrl = url.replace(pattern, replacement);
      return { deprecated: true, message, suggestedUrl };
    }
  }
  return { deprecated: false };
}

// Main validation
async function validateTopicLinks() {
  console.log('Topic Links Validator');
  console.log('=====================\n');
  
  const urls = getTopicsData();
  const internalUrls = urls.filter(url => !EXTERNAL_PREFIXES.some(p => url.startsWith(p)));
  
  console.log(`Found ${urls.length} total URLs (${internalUrls.length} internal)\n`);
  
  const results = {
    valid: [],
    broken: [],
    deprecated: [],
    external: urls.filter(url => EXTERNAL_PREFIXES.some(p => url.startsWith(p)))
  };
  
  // Validate each internal URL
  for (const url of internalUrls) {
    // Check for deprecated patterns first
    const deprecationCheck = checkDeprecatedPattern(url);
    if (deprecationCheck.deprecated) {
      results.deprecated.push({
        url,
        message: deprecationCheck.message,
        suggestedUrl: deprecationCheck.suggestedUrl
      });
      continue;
    }
    
    // Check if route exists
    const { exists, path: filePath } = await routeExists(url);
    if (exists) {
      results.valid.push({ url, filePath });
    } else {
      results.broken.push({ url });
    }
  }
  
  // Report results
  console.log('RESULTS');
  console.log('-------\n');
  
  console.log(`Valid links: ${results.valid.length}`);
  console.log(`Broken links: ${results.broken.length}`);
  console.log(`Deprecated patterns: ${results.deprecated.length}`);
  console.log(`External links: ${results.external.length}\n`);
  
  if (results.broken.length > 0) {
    console.log('\nBROKEN LINKS (pages not found):');
    console.log('--------------------------------');
    for (const { url } of results.broken) {
      console.log(`  - ${url}`);
    }
  }
  
  if (results.deprecated.length > 0) {
    console.log('\nDEPRECATED URL PATTERNS:');
    console.log('------------------------');
    for (const { url, message, suggestedUrl } of results.deprecated) {
      console.log(`  - ${url}`);
      console.log(`    ${message}`);
      console.log(`    Suggested: ${suggestedUrl}\n`);
    }
  }
  
  // Topic completeness check
  console.log('\nTOPIC COMPLETENESS CHECK:');
  console.log('-------------------------');
  
  const topicsPath = path.join(__dirname, '../src/data/topics.ts');
  const content = fs.readFileSync(topicsPath, 'utf-8');
  
  // Extract topic slugs
  const slugPattern = /slug:\s*["']([^"']+)["']/g;
  const topics = [];
  let slugMatch;
  
  while ((slugMatch = slugPattern.exec(content)) !== null) {
    topics.push(slugMatch[1]);
  }
  
  for (const topicSlug of topics) {
    // Count resources per section
    const topicBlock = content.split(`slug: "${topicSlug}"`)[1]?.split('slug: "')[0] || '';
    
    const startHereCount = (topicBlock.match(/startHere:\s*\[/g) || []).length > 0 
      ? (topicBlock.split('startHere:')[1]?.split('],')[0]?.match(/type:/g) || []).length 
      : 0;
    
    const keyTermsCount = (topicBlock.split('keyTerms:')[1]?.split('],')[0]?.match(/term:/g) || []).length;
    const questionsCount = (topicBlock.split('relatedQuestions:')[1]?.split('],')[0]?.match(/question:/g) || []).length;
    
    const issues = [];
    if (startHereCount < 2) issues.push(`Only ${startHereCount} startHere resources (min: 2)`);
    if (keyTermsCount < 4) issues.push(`Only ${keyTermsCount} keyTerms (min: 4)`);
    if (questionsCount < 2) issues.push(`Only ${questionsCount} relatedQuestions (min: 2)`);
    
    if (issues.length > 0) {
      console.log(`\n  ${topicSlug}:`);
      issues.forEach(issue => console.log(`    - ${issue}`));
    }
  }
  
  console.log('\n');
  
  // Exit with error code if there are broken or deprecated links
  if (results.broken.length > 0 || results.deprecated.length > 0) {
    process.exit(1);
  }
  
  console.log('All topic links validated successfully!\n');
}

validateTopicLinks().catch(err => {
  console.error('Validation error:', err);
  process.exit(1);
});

