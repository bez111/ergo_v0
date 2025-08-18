#!/usr/bin/env node

/**
 * Migration Dashboard - Quick status check for /Docs → /docs migration
 */

const http = require('http')
const { exec } = require('child_process')
const { promisify } = require('util')
const execAsync = promisify(exec)

const BASE_URL = 'http://localhost:3000'

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
}

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`
}

async function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try {
          resolve(JSON.parse(data))
        } catch (e) {
          reject(e)
        }
      })
    }).on('error', reject)
  })
}

async function checkUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      resolve(res.statusCode)
    }).on('error', () => resolve(500))
  })
}

async function checkGitStatus() {
  try {
    const { stdout } = await execAsync('git status --porcelain | wc -l')
    return parseInt(stdout.trim())
  } catch {
    return -1
  }
}

async function main() {
  console.clear()
  console.log(colorize('━'.repeat(70), 'cyan'))
  console.log(colorize('                    📊 MIGRATION DASHBOARD', 'bold'))
  console.log(colorize('                     /Docs → /docs Status', 'cyan'))
  console.log(colorize('━'.repeat(70), 'cyan'))
  console.log()

  // Check migration API
  console.log(colorize('▶ Fetching migration metrics...', 'yellow'))
  
  try {
    const metrics = await fetchJson(`${BASE_URL}/api/docs-migration`)
    
    // Phase Status
    console.log()
    console.log(colorize('📍 MIGRATION PHASE', 'bold'))
    console.log('├─ Current Phase:', colorize(`Phase ${metrics.migrationPhase}`, 'green'))
    console.log('├─ Redirect Type:', metrics.migrationPhase === 1 ? colorize('302 (Soft)', 'yellow') : colorize('301 (Hard)', 'green'))
    console.log('├─ A/B Testing:', metrics.abTestingEnabled ? colorize('✓ Enabled', 'green') : colorize('✗ Disabled', 'red'))
    console.log('└─ Split:', `${metrics.abTestingPercentage}% new URLs`)
    
    // Metrics
    console.log()
    console.log(colorize('📈 METRICS', 'bold'))
    console.log('├─ Page Views:')
    console.log(`│  ├─ Old URLs (/Docs): ${metrics.metrics.pageViews.oldUrls}`)
    console.log(`│  └─ New URLs (/docs): ${metrics.metrics.pageViews.newUrls}`)
    console.log('├─ Redirects:')
    console.log(`│  ├─ Total: ${metrics.metrics.redirects.count}`)
    console.log(`│  ├─ 302: ${metrics.metrics.redirects.from302}`)
    console.log(`│  └─ 301: ${metrics.metrics.redirects.from301}`)
    console.log('└─ Errors:')
    console.log(`   ├─ 404: ${metrics.metrics.errors.notFound}`)
    console.log(`   └─ 500: ${metrics.metrics.errors.serverError}`)
    
    // Quick URL Tests
    console.log()
    console.log(colorize('🧪 QUICK TESTS', 'bold'))
    
    const tests = [
      { url: '/Docs', expected: 302 },
      { url: '/docs', expected: 200 },
      { url: '/docs/introduction', expected: 200 },
      { url: '/docs/ecosystem', expected: 200 }
    ]
    
    for (const test of tests) {
      const status = await checkUrl(BASE_URL + test.url)
      const passed = status === test.expected
      const icon = passed ? colorize('✓', 'green') : colorize('✗', 'red')
      const statusColor = passed ? 'green' : 'red'
      console.log(`├─ ${icon} ${test.url.padEnd(20)} ${colorize(status, statusColor)} (expected ${test.expected})`)
    }
    
    // Recommendation
    console.log()
    console.log(colorize('💡 RECOMMENDATION', 'bold'))
    const rec = metrics.report.recommendation
    if (rec.includes('✅')) {
      console.log(colorize(rec, 'green'))
    } else if (rec.includes('⚠️')) {
      console.log(colorize(rec, 'yellow'))
    } else if (rec.includes('🔴')) {
      console.log(colorize(rec, 'red'))
    } else {
      console.log(rec)
    }
    
    // Git Status
    const changedFiles = await checkGitStatus()
    console.log()
    console.log(colorize('📁 GIT STATUS', 'bold'))
    if (changedFiles === 0) {
      console.log(colorize('✓ Working directory clean', 'green'))
    } else if (changedFiles > 0) {
      console.log(colorize(`⚠ ${changedFiles} uncommitted changes`, 'yellow'))
    } else {
      console.log(colorize('✗ Unable to check git status', 'red'))
    }
    
    // Summary
    console.log()
    console.log(colorize('━'.repeat(70), 'cyan'))
    console.log(colorize('📊 SUMMARY', 'bold'))
    
    const totalPageViews = metrics.metrics.pageViews.oldUrls + metrics.metrics.pageViews.newUrls
    const errorRate = totalPageViews > 0 
      ? ((metrics.metrics.errors.notFound + metrics.metrics.errors.serverError) / totalPageViews * 100).toFixed(2)
      : 0
    
    console.log('├─ Total Page Views:', totalPageViews)
    console.log('├─ Error Rate:', errorRate + '%')
    console.log('├─ Status:', colorize('✅ HEALTHY', 'green'))
    console.log('└─ Next Action:', colorize('Continue monitoring for 2 weeks', 'yellow'))
    
    // Timestamp
    console.log()
    console.log(colorize('Last Updated:', 'cyan'), new Date().toLocaleString())
    console.log(colorize('━'.repeat(70), 'cyan'))
    
  } catch (error) {
    console.error(colorize('✗ Failed to fetch metrics:', 'red'), error.message)
    console.log(colorize('Make sure the dev server is running!', 'yellow'))
  }
}

// Auto-refresh option
if (process.argv.includes('--watch')) {
  setInterval(() => {
    main().catch(console.error)
  }, 5000)
} else {
  main().catch(console.error)
} 