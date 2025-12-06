#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * Broken Links Checker Script
 * 
 * Checks for broken internal and external links in the Ergo website.
 * 
 * Usage:
 *   node scripts/check-links.js [--external] [--url=http://localhost:3000]
 * 
 * Options:
 *   --external    Also check external links (slower)
 *   --url=URL     Base URL to check (default: http://localhost:3000)
 *   --ecosystem   Only check ecosystem page external links
 * 
 * Prerequisites:
 *   npm install -g broken-link-checker
 *   # or
 *   npx broken-link-checker
 */

const { execSync, spawn } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const checkExternal = args.includes('--external');
const ecosystemOnly = args.includes('--ecosystem');
const urlArg = args.find(a => a.startsWith('--url='));
const baseUrl = urlArg ? urlArg.split('=')[1] : 'http://localhost:3000';

console.log('🔗 Ergo Website Link Checker');
console.log('============================\n');

// Key pages to check
const keyPages = [
  '/',
  '/start',
  '/learn',
  '/use',
  '/compare',
  '/miners',
  '/hodlers',
  '/ecosystem',
  '/playbooks',
  '/patterns',
  '/topics',
  '/questions',
  '/blog',
  '/infographics',
];

// Check if blc is installed
try {
  execSync('which blc', { stdio: 'ignore' });
} catch {
  console.log('⚠️  broken-link-checker not found. Installing...');
  try {
    execSync('npm install -g broken-link-checker', { stdio: 'inherit' });
  } catch (e) {
    console.error('Failed to install broken-link-checker. Please run:');
    console.error('  npm install -g broken-link-checker');
    process.exit(1);
  }
}

async function checkPage(url, options = {}) {
  return new Promise((resolve) => {
    const args = [url, '--ordered'];
    
    if (!options.external) {
      args.push('--exclude-external');
    }
    
    args.push('--filter-level', '3');
    args.push('--host-requests', '10');
    args.push('--requests', '30');
    
    console.log(`\n📄 Checking: ${url}`);
    
    const blc = spawn('blc', args, { stdio: ['ignore', 'pipe', 'pipe'] });
    
    let output = '';
    let brokenCount = 0;
    
    blc.stdout.on('data', (data) => {
      const text = data.toString();
      output += text;
      
      // Count broken links
      const matches = text.match(/BROKEN/g);
      if (matches) {
        brokenCount += matches.length;
      }
      
      // Show broken links immediately
      if (text.includes('BROKEN')) {
        process.stdout.write(text);
      }
    });
    
    blc.stderr.on('data', (data) => {
      // Ignore stderr noise
    });
    
    blc.on('close', (code) => {
      if (brokenCount > 0) {
        console.log(`  ❌ Found ${brokenCount} broken link(s)`);
      } else {
        console.log(`  ✅ All links OK`);
      }
      resolve({ url, brokenCount, output });
    });
    
    // Timeout after 60 seconds
    setTimeout(() => {
      blc.kill();
      console.log(`  ⏱️  Timeout - skipping`);
      resolve({ url, brokenCount: 0, output: 'timeout' });
    }, 60000);
  });
}

async function main() {
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Check external: ${checkExternal ? 'Yes' : 'No'}`);
  console.log(`Pages to check: ${ecosystemOnly ? '/ecosystem only' : keyPages.length}`);
  
  // Check if server is running
  try {
    execSync(`curl -s -o /dev/null -w "%{http_code}" ${baseUrl}`, { stdio: 'pipe' });
  } catch {
    console.error(`\n❌ Cannot connect to ${baseUrl}`);
    console.error('   Please start the dev server first: npm run dev');
    process.exit(1);
  }
  
  const results = [];
  
  if (ecosystemOnly) {
    // Only check ecosystem external links
    const result = await checkPage(`${baseUrl}/ecosystem`, { external: true });
    results.push(result);
  } else {
    // Check all key pages
    for (const page of keyPages) {
      const result = await checkPage(`${baseUrl}${page}`, { external: checkExternal });
      results.push(result);
    }
  }
  
  // Summary
  console.log('\n\n📊 Summary');
  console.log('==========');
  
  const totalBroken = results.reduce((sum, r) => sum + r.brokenCount, 0);
  const pagesWithBroken = results.filter(r => r.brokenCount > 0);
  
  if (totalBroken === 0) {
    console.log('✅ All links are working!');
  } else {
    console.log(`❌ Found ${totalBroken} broken link(s) across ${pagesWithBroken.length} page(s):`);
    pagesWithBroken.forEach(r => {
      console.log(`   - ${r.url}: ${r.brokenCount} broken`);
    });
  }
  
  process.exit(totalBroken > 0 ? 1 : 0);
}

main().catch(console.error);
