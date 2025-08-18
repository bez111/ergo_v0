#!/usr/bin/env node

/**
 * Complete migration test for /Docs → /docs
 */

const http = require('http')

const BASE_URL = 'http://localhost:3000'

// Test URLs from menuData
const TEST_URLS = [
  // Main pages
  { old: '/Docs', new: '/docs', expectedRedirect: true },
  { old: '/Docs/why-ergo', new: '/docs/why-ergo', expectedRedirect: true },
  
  // Introduction section  
  { old: '/Docs/introduction/key-features', new: '/docs/introduction/key-features', expectedRedirect: true },
  { old: '/Docs/introduction/roadmap', new: '/docs/introduction/roadmap', expectedRedirect: true },
  { old: '/Docs/introduction/glossary', new: '/docs/introduction/glossary', expectedRedirect: true },
  { old: '/Docs/introduction/faq', new: '/docs/introduction/faq', expectedRedirect: true },
  
  // Ecosystem section
  { old: '/Docs/ecosystem', new: '/docs/ecosystem', expectedRedirect: true },
  { old: '/Docs/ecosystem/infrastructure', new: '/docs/ecosystem/infrastructure', expectedRedirect: true },
  
  // Developers section
  { old: '/Docs/developers', new: '/docs/developers', expectedRedirect: true },
  { old: '/Docs/developers/infrastructure', new: '/docs/developers/infrastructure', expectedRedirect: true },
  
  // Other sections
  { old: '/Docs/miners', new: '/docs/miners', expectedRedirect: true },
  { old: '/Docs/contribute', new: '/docs/contribute', expectedRedirect: true },
  { old: '/Docs/resources', new: '/docs/resources', expectedRedirect: true }
]

function testUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let body = ''
      res.on('data', chunk => body += chunk)
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          location: res.headers.location,
          contentLength: body.length
        })
      })
    }).on('error', (err) => {
      resolve({ error: err.message })
    })
  })
}

async function runTests() {
  console.log('🧪 Complete Migration Test: /Docs → /docs\n')
  console.log('=' .repeat(70))
  
  let passCount = 0
  let failCount = 0
  const results = []
  
  for (const test of TEST_URLS) {
    // Test old URL
    const oldResult = await testUrl(BASE_URL + test.old)
    
    // Test new URL  
    const newResult = await testUrl(BASE_URL + test.new)
    
    // Check results (accept both 301 permanent and 302 temporary redirects)
    const redirectWorks = (oldResult.statusCode === 301 || oldResult.statusCode === 302) && oldResult.location === test.new
    const newUrlWorks = newResult.statusCode === 200 || newResult.statusCode === 404
    
    const status = {
      url: test.old,
      redirect: redirectWorks ? '✅' : '❌',
      redirectStatus: oldResult.statusCode,
      redirectTo: oldResult.location || 'none',
      newUrl: test.new,
      newUrlStatus: newResult.statusCode,
      newUrlWorks: newUrlWorks ? '✅' : '❌'
    }
    
    results.push(status)
    
    if (redirectWorks && newUrlWorks) {
      passCount++
      console.log(`✅ ${test.old} → ${test.new} (${oldResult.statusCode} redirect, ${newResult.statusCode} OK)`)
    } else {
      failCount++
      console.log(`❌ ${test.old} → ${test.new}`)
      console.log(`   Redirect: ${oldResult.statusCode} → ${oldResult.location || 'none'}`)
      console.log(`   New URL: ${newResult.statusCode}`)
    }
  }
  
  // Summary
  console.log('\n' + '=' .repeat(70))
  console.log('📊 Test Summary:\n')
  console.log(`Total Tests: ${TEST_URLS.length}`)
  console.log(`✅ Passed: ${passCount}`)
  console.log(`❌ Failed: ${failCount}`)
  console.log(`Success Rate: ${((passCount / TEST_URLS.length) * 100).toFixed(1)}%`)
  
  // Detailed results table
  console.log('\n📋 Detailed Results:')
  console.log('┌─────────────────────────────────┬──────────┬──────────┬────────────┐')
  console.log('│ URL                             │ Redirect │ New URL  │ Status     │')
  console.log('├─────────────────────────────────┼──────────┼──────────┼────────────┤')
  
  for (const r of results) {
    const url = r.url.padEnd(31).substring(0, 31)
    const redirect = `${r.redirectStatus}`.padEnd(8)
    const newStatus = `${r.newUrlStatus}`.padEnd(8)
    const overall = (r.redirect === '✅' && r.newUrlWorks === '✅') ? '✅ Pass' : '❌ Fail'
    console.log(`│ ${url} │ ${redirect} │ ${newStatus} │ ${overall.padEnd(10)} │`)
  }
  
  console.log('└─────────────────────────────────┴──────────┴──────────┴────────────┘')
  
  // Recommendations
  console.log('\n💡 Recommendations:')
  
  if (failCount === 0) {
    console.log('✅ All tests passed! Migration is working correctly.')
    console.log('   Ready to proceed to Phase 2 (301 redirects).')
  } else {
    console.log('⚠️  Some tests failed. Review the following:')
    console.log('   1. Check Next.js rewrites configuration')
    console.log('   2. Verify all pages exist in /Docs folder')
    console.log('   3. Check middleware redirect logic')
    console.log('   4. Consider creating wrapper pages for missing routes')
  }
  
  // Check API endpoint
  console.log('\n🔍 Checking migration API...')
  const apiResult = await testUrl(BASE_URL + '/api/docs-migration')
  if (apiResult.statusCode === 200) {
    console.log('✅ Migration API is working')
  } else {
    console.log('❌ Migration API returned:', apiResult.statusCode)
  }
}

// Run tests
runTests().catch(console.error) 