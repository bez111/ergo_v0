#!/usr/bin/env node

/**
 * Test script for /Docs → /docs migration
 * Tests all documentation URLs to ensure proper redirects and rewrites
 */

const http = require('http');

// Configuration
const BASE_URL = 'http://localhost:3000';
const DELAY = 5000; // Wait 5 seconds for server to start

// URLs to test
const DOCS_URLS = [
  // Main documentation pages
  { path: '/Docs', expectedStatus: 302, redirectTo: '/docs' },
  { path: '/docs', expectedStatus: 200 },
  
  // Introduction section
  { path: '/Docs/introduction', expectedStatus: 302, redirectTo: '/docs/introduction' },
  { path: '/docs/introduction', expectedStatus: 200 },
  { path: '/docs/introduction/key-features', expectedStatus: 200 },
  { path: '/docs/introduction/glossary', expectedStatus: 200 },
  { path: '/docs/introduction/faq', expectedStatus: 200 },
  
  // Ecosystem section
  { path: '/Docs/ecosystem', expectedStatus: 302, redirectTo: '/docs/ecosystem' },
  { path: '/docs/ecosystem', expectedStatus: 200 },
  { path: '/docs/ecosystem/daos', expectedStatus: 200 },
  { path: '/docs/ecosystem/nfts', expectedStatus: 200 },
  { path: '/docs/ecosystem/privacy', expectedStatus: 200 },
  
  // Developers section
  { path: '/Docs/developers', expectedStatus: 302, redirectTo: '/docs/developers' },
  { path: '/docs/developers', expectedStatus: 200 },
  { path: '/docs/developers/tutorials', expectedStatus: 200 },
  { path: '/docs/developers/resources', expectedStatus: 200 },
  
  // Miners section
  { path: '/Docs/miners', expectedStatus: 302, redirectTo: '/docs/miners' },
  { path: '/docs/miners', expectedStatus: 200 },
  
  // Other sections
  { path: '/Docs/contribute', expectedStatus: 302, redirectTo: '/docs/contribute' },
  { path: '/docs/contribute', expectedStatus: 200 },
  { path: '/Docs/why-ergo', expectedStatus: 302, redirectTo: '/docs/why-ergo' },
  { path: '/docs/why-ergo', expectedStatus: 200 },
];

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

// Test a single URL
function testUrl(urlInfo) {
  return new Promise((resolve) => {
    const url = `${BASE_URL}${urlInfo.path}`;
    
    http.get(url, { followRedirect: false }, (res) => {
      const status = res.statusCode;
      const location = res.headers.location;
      
      let result = {
        path: urlInfo.path,
        status: status,
        expected: urlInfo.expectedStatus,
        location: location,
        passed: false,
        message: ''
      };
      
      // Check status code
      if (status === urlInfo.expectedStatus) {
        result.passed = true;
        
        // Check redirect location if expected
        if (urlInfo.redirectTo && location !== urlInfo.redirectTo) {
          result.passed = false;
          result.message = `Wrong redirect: ${location} (expected: ${urlInfo.redirectTo})`;
        } else {
          result.message = 'OK';
        }
      } else {
        result.message = `Wrong status: ${status} (expected: ${urlInfo.expectedStatus})`;
      }
      
      resolve(result);
    }).on('error', (err) => {
      resolve({
        path: urlInfo.path,
        status: 'ERROR',
        expected: urlInfo.expectedStatus,
        passed: false,
        message: err.message
      });
    });
  });
}

// Run all tests
async function runTests() {
  console.log(`${colors.blue}========================================${colors.reset}`);
  console.log(`${colors.blue}Testing /Docs → /docs Migration${colors.reset}`);
  console.log(`${colors.blue}========================================${colors.reset}\n`);
  
  console.log(`Waiting ${DELAY/1000} seconds for server to start...\n`);
  await new Promise(resolve => setTimeout(resolve, DELAY));
  
  let passed = 0;
  let failed = 0;
  
  for (const urlInfo of DOCS_URLS) {
    const result = await testUrl(urlInfo);
    
    if (result.passed) {
      console.log(`${colors.green}✓${colors.reset} ${result.path} → ${result.status} ${result.message}`);
      if (result.location) {
        console.log(`  ↳ Redirects to: ${result.location}`);
      }
      passed++;
    } else {
      console.log(`${colors.red}✗${colors.reset} ${result.path} → ${result.status} ${result.message}`);
      failed++;
    }
  }
  
  console.log(`\n${colors.blue}========================================${colors.reset}`);
  console.log(`${colors.blue}Test Results${colors.reset}`);
  console.log(`${colors.blue}========================================${colors.reset}`);
  console.log(`${colors.green}Passed: ${passed}${colors.reset}`);
  console.log(`${colors.red}Failed: ${failed}${colors.reset}`);
  console.log(`Total: ${passed + failed}`);
  
  const successRate = ((passed / (passed + failed)) * 100).toFixed(1);
  console.log(`Success Rate: ${successRate}%`);
  
  if (failed === 0) {
    console.log(`\n${colors.green}🎉 All tests passed!${colors.reset}`);
  } else {
    console.log(`\n${colors.yellow}⚠️  Some tests failed. Please review the results above.${colors.reset}`);
  }
  
  process.exit(failed === 0 ? 0 : 1);
}

// Run the tests
runTests().catch(console.error); 