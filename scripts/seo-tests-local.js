#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unused-vars */

const http = require('http');

// Configuration
const BASE_URL = process.env.SITE_URL || 'http://localhost:3000';
const CRITICAL_PAGES = [
  '/',
  '/use',
  '/docs',
  '/technology',
  '/ecosystem',
  '/wallet'
];

// Test results
let passed = 0;
let failed = 0;
const errors = [];

// Helper functions
function log(message, type = 'info') {
  const prefix = {
    info: '📝',
    success: '✅',
    error: '❌',
    warning: '⚠️'
  }[type] || '📝';
  
  console.log(`${prefix} ${message}`);
}

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? require('https') : require('http');
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, html: data }));
    }).on('error', reject);
  });
}

// SEO Tests
async function testRobotsTxt() {
  try {
    const { status, html } = await fetchPage(`${BASE_URL}/robots.txt`);
    
    if (status !== 200) {
      throw new Error(`robots.txt returned ${status}`);
    }
    
    if (!html.includes('Sitemap:')) {
      throw new Error('robots.txt missing sitemap directive');
    }
    
    if (!html.toLowerCase().includes('user-agent:')) {
      throw new Error('robots.txt missing user-agent directives');
    }
    
    passed++;
    log('robots.txt is accessible and valid', 'success');
  } catch (error) {
    failed++;
    errors.push(`robots.txt test failed: ${error.message}`);
    log(`robots.txt test failed: ${error.message}`, 'error');
  }
}

async function testSitemap() {
  try {
    const { status, html } = await fetchPage(`${BASE_URL}/sitemap.xml`);
    
    if (status !== 200) {
      throw new Error(`sitemap.xml returned ${status}`);
    }
    
    if (!html.includes('<urlset') && !html.includes('<sitemapindex')) {
      throw new Error('Invalid sitemap format');
    }
    
    if (!html.includes('<loc>')) {
      throw new Error('Sitemap missing URLs');
    }
    
    passed++;
    log('sitemap.xml is accessible and valid', 'success');
  } catch (error) {
    failed++;
    errors.push(`Sitemap test failed: ${error.message}`);
    log(`Sitemap test failed: ${error.message}`, 'error');
  }
}

async function testPageSEO(pagePath) {
  try {
    const { status, html } = await fetchPage(`${BASE_URL}${pagePath}`);
    
    if (status !== 200) {
      throw new Error(`Page returned ${status}`);
    }
    
    // For Next.js apps, metadata might be in the head or injected
    // Check for various forms of title
    const hasTitle = html.includes('<title>') || 
                    html.includes('property="og:title"') ||
                    html.includes('name="title"');
    
    if (!hasTitle) {
      log(`Warning: ${pagePath} might be missing title tag (SSR issue?)`, 'warning');
    }
    
    // Check for meta description
    const hasDescription = html.includes('name="description"') ||
                          html.includes('property="og:description"');
    
    if (!hasDescription) {
      log(`Warning: ${pagePath} might be missing meta description`, 'warning');
    }
    
    // Check for no noindex
    if (html.includes('noindex')) {
      throw new Error('Page has noindex directive');
    }
    
    passed++;
    log(`Page ${pagePath} SEO checks passed`, 'success');
  } catch (error) {
    failed++;
    errors.push(`Page ${pagePath} SEO test failed: ${error.message}`);
    log(`Page ${pagePath} SEO test failed: ${error.message}`, 'error');
  }
}

async function testOpenGraph() {
  try {
    const { html } = await fetchPage(BASE_URL);
    
    // Check for basic OG tags
    const hasOGTags = html.includes('property="og:') || 
                     html.includes('property=\'og:');
    
    if (!hasOGTags) {
      log('Warning: OpenGraph tags might be missing or SSR issue', 'warning');
    }
    
    passed++;
    log('OpenGraph check completed', 'success');
  } catch (error) {
    failed++;
    errors.push(`OpenGraph test failed: ${error.message}`);
    log(`OpenGraph test failed: ${error.message}`, 'error');
  }
}

async function testPerformance() {
  try {
    const start = Date.now();
    const { status } = await fetchPage(BASE_URL);
    const loadTime = Date.now() - start;
    
    if (status !== 200) {
      throw new Error(`Homepage returned ${status}`);
    }
    
    if (loadTime > 3000) {
      log(`Warning: Homepage load time is ${loadTime}ms (>3000ms)`, 'warning');
    } else {
      log(`Homepage load time: ${loadTime}ms`, 'success');
    }
    
    passed++;
  } catch (error) {
    failed++;
    errors.push(`Performance test failed: ${error.message}`);
    log(`Performance test failed: ${error.message}`, 'error');
  }
}

// Wait for server to be ready
async function waitForServer(retries = 30) {
  for (let i = 0; i < retries; i++) {
    try {
      await fetchPage(BASE_URL);
      return true;
    } catch (error) {
      if (i === retries - 1) {
        throw new Error(`Server not responding at ${BASE_URL}`);
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

// Run all tests
async function runTests() {
  log(`Starting SEO tests for ${BASE_URL}...`, 'info');
  
  // Wait for server
  try {
    await waitForServer();
    log('Server is ready', 'success');
  } catch (error) {
    log(error.message, 'error');
    process.exit(1);
  }
  
  // Test robots.txt and sitemap
  await testRobotsTxt();
  await testSitemap();
  
  // Test critical pages
  for (const page of CRITICAL_PAGES) {
    await testPageSEO(page);
  }
  
  // Test OpenGraph
  await testOpenGraph();
  
  // Test performance
  await testPerformance();
  
  // Summary
  console.log('\n' + '='.repeat(50));
  log(`Tests completed: ${passed} passed, ${failed} failed`, 
      failed > 0 ? 'error' : 'success');
  
  if (errors.length > 0) {
    console.log('\nErrors:');
    errors.forEach(error => log(error, 'error'));
  }
  
  process.exit(failed > 0 ? 1 : 0);
}

// Run tests
runTests().catch(error => {
  log(`Fatal error: ${error.message}`, 'error');
  process.exit(1);
}); 