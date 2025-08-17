#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const BASE_URL = process.env.SITE_URL || 'https://ergoblockchain.org';
const CRITICAL_PAGES = [
  '/',
  '/use',
  '/Docs',
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
    https.get(url, (res) => {
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
    
    // Check for title tag
    if (!html.includes('<title>')) {
      throw new Error('Missing <title> tag');
    }
    
    // Check for meta description
    if (!html.includes('name="description"')) {
      throw new Error('Missing meta description');
    }
    
    // Check for canonical
    if (!html.includes('rel="canonical"')) {
      log(`Warning: ${pagePath} missing canonical tag`, 'warning');
    }
    
    // Check for OG tags
    if (!html.includes('property="og:title"')) {
      throw new Error('Missing OG tags');
    }
    
    // Check for no noindex
    if (html.includes('noindex')) {
      throw new Error('Page has noindex directive');
    }
    
    // Check for structured data
    if (!html.includes('application/ld+json')) {
      log(`Warning: ${pagePath} missing structured data`, 'warning');
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
    
    const requiredOGTags = [
      'og:title',
      'og:description',
      'og:image',
      'og:url',
      'og:type',
      'og:site_name'
    ];
    
    for (const tag of requiredOGTags) {
      if (!html.includes(`property="${tag}"`)) {
        throw new Error(`Missing ${tag} tag`);
      }
    }
    
    passed++;
    log('OpenGraph tags are complete', 'success');
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

// Run all tests
async function runTests() {
  log('Starting SEO tests...', 'info');
  
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
    process.exit(1);
  }
  
  process.exit(0);
}

// Run tests
runTests().catch(error => {
  log(`Fatal error: ${error.message}`, 'error');
  process.exit(1);
}); 