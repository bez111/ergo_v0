#!/usr/bin/env node

/**
 * Complete Redirect Testing Script
 * Проверяет ВСЕ редиректы из всех фаз
 */

const http = require('http');

// Цвета для консоли
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

// Полный список тестов
const TESTS = {
  phase1: {
    name: 'Phase 1: Parameter Cleaning',
    tests: [
      {
        name: 'Remove page=1',
        url: '/?page=1',
        expectedCode: 301,
        expectedPath: '/'
      },
      {
        name: 'Remove UTM parameters',
        url: '/blog?utm_source=test&utm_medium=email',
        expectedCode: 301,
        expectedPath: '/blog'
      },
      {
        name: 'Remove tracking parameters',
        url: '/ecosystem?fbclid=123&gclid=456',
        expectedCode: 301,
        expectedPath: '/ecosystem'
      },
      {
        name: 'Remove multiple parameters',
        url: '/use?page=1&utm_source=test&ref=twitter',
        expectedCode: 301,
        expectedPath: '/use'
      }
    ]
  },
  phase2: {
    name: 'Phase 2: Soft Redirects (New URLs)',
    tests: [
      {
        name: 'Stablecoins redirect',
        url: '/use/cases/stablecoins',
        expectedCode: 307,
        expectedPath: '/use/use-cases/algorithmic-stablecoins'
      },
      {
        name: 'Privacy redirect',
        url: '/use/cases/privacy',
        expectedCode: 307,
        expectedPath: '/use/use-cases/privacy-confidentiality'
      },
      {
        name: 'Bridges redirect',
        url: '/use/cases/bridges',
        expectedCode: 307,
        expectedPath: '/use/use-cases/cross-chain-bridges'
      },
      {
        name: 'DAOs redirect',
        url: '/use/cases/daos',
        expectedCode: 307,
        expectedPath: '/use/use-cases/daos-alternative-economies'
      },
      {
        name: 'NFTs redirect',
        url: '/use/cases/nfts',
        expectedCode: 307,
        expectedPath: '/use/use-cases/nfts-digital-assets'
      },
      {
        name: 'Oracles redirect',
        url: '/use/cases/oracles',
        expectedCode: 307,
        expectedPath: '/use/use-cases/oracles-data-feeds'
      },
      {
        name: 'Identity redirect',
        url: '/use/cases/identity',
        expectedCode: 307,
        expectedPath: '/use/use-cases/identity-reputation'
      },
      {
        name: 'Gaming redirect',
        url: '/use/cases/gaming',
        expectedCode: 307,
        expectedPath: '/use/use-cases/gaming-metaverse'
      }
    ]
  },
  phase3: {
    name: 'Phase 3: Migration Readiness',
    tests: [
      {
        name: '/docs still accessible',
        url: '/docs',
        expectedCode: 200,
        expectedPath: null // No redirect expected
      },
      {
        name: 'Trailing slash removal',
        url: '/technology/',
        expectedCode: 301,
        expectedPath: '/technology'
      },
      {
        name: 'Legacy pagination',
        url: '/blog/page/1',
        expectedCode: 301,
        expectedPath: '/blog'
      }
    ]
  }
};

// Функция для теста одного URL
async function testUrl(test, port = 3001) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: port,
      path: test.url,
      method: 'HEAD',
      headers: {
        'User-Agent': 'Test-Script/1.0'
      }
    };

    const req = http.request(options, (res) => {
      const result = {
        name: test.name,
        url: test.url,
        expectedCode: test.expectedCode,
        actualCode: res.statusCode,
        location: res.headers.location,
        passed: false
      };

      // Проверяем код ответа
      if (res.statusCode === test.expectedCode) {
        // Для редиректов проверяем location
        if (test.expectedPath && res.headers.location) {
          const cleanLocation = res.headers.location.replace(/^https?:\/\/[^\/]+/, '');
          result.passed = cleanLocation === test.expectedPath;
        } else if (!test.expectedPath && res.statusCode === 200) {
          // Для 200 ответов без редиректа
          result.passed = true;
        }
      }

      resolve(result);
    });

    req.on('error', (err) => {
      resolve({
        name: test.name,
        url: test.url,
        error: err.message,
        passed: false
      });
    });

    req.end();
  });
}

// Главная функция
async function runTests() {
  console.log(`${colors.blue}🚀 TESTING ALL IA IMPROVEMENTS${colors.reset}\n`);
  
  let totalPassed = 0;
  let totalFailed = 0;
  
  for (const [phaseKey, phase] of Object.entries(TESTS)) {
    console.log(`${colors.blue}━━━ ${phase.name} ━━━${colors.reset}`);
    
    for (const test of phase.tests) {
      const result = await testUrl(test);
      
      if (result.passed) {
        totalPassed++;
        console.log(`${colors.green}✅ ${test.name}${colors.reset}`);
        console.log(`   ${test.url} → ${result.location || 'OK'}`);
      } else {
        totalFailed++;
        console.log(`${colors.red}❌ ${test.name}${colors.reset}`);
        console.log(`   Expected: ${test.expectedCode} → ${test.expectedPath || 'no redirect'}`);
        console.log(`   Got: ${result.actualCode} → ${result.location || 'no redirect'}`);
        if (result.error) {
          console.log(`   Error: ${result.error}`);
        }
      }
    }
    console.log();
  }
  
  // Итоговая статистика
  console.log(`${colors.blue}━━━ SUMMARY ━━━${colors.reset}`);
  console.log(`${colors.green}✅ Passed: ${totalPassed}${colors.reset}`);
  console.log(`${colors.red}❌ Failed: ${totalFailed}${colors.reset}`);
  console.log(`${colors.blue}📊 Success Rate: ${Math.round(totalPassed / (totalPassed + totalFailed) * 100)}%${colors.reset}`);
  
  // Сохраняем отчет
  const report = {
    timestamp: new Date().toISOString(),
    phases: {
      phase1: {
        name: 'Parameter Cleaning',
        status: 'ACTIVE',
        tests: TESTS.phase1.tests.length,
        passed: TESTS.phase1.tests.filter(t => t.passed).length
      },
      phase2: {
        name: 'Soft Redirects',
        status: 'READY',
        tests: TESTS.phase2.tests.length,
        passed: TESTS.phase2.tests.filter(t => t.passed).length
      },
      phase3: {
        name: 'Migration Plan',
        status: 'PREPARED',
        tests: TESTS.phase3.tests.length,
        passed: TESTS.phase3.tests.filter(t => t.passed).length
      }
    },
    totalTests: totalPassed + totalFailed,
    passed: totalPassed,
    failed: totalFailed,
    successRate: Math.round(totalPassed / (totalPassed + totalFailed) * 100)
  };
  
  const fs = require('fs');
  fs.writeFileSync('ia-test-report.json', JSON.stringify(report, null, 2));
  console.log(`\n${colors.green}📝 Report saved to ia-test-report.json${colors.reset}`);
  
  process.exit(totalFailed > 0 ? 1 : 0);
}

// Проверяем, что сервер запущен
http.get('http://localhost:3001', (res) => {
  runTests();
}).on('error', (err) => {
  console.error(`${colors.red}❌ Server not running on localhost:3001${colors.reset}`);
  console.error(`Please start the server with: npm run dev`);
  process.exit(1);
}); 