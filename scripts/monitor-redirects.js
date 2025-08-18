#!/usr/bin/env node

/**
 * Monitor Redirects Script
 * Проверяет работу всех редиректов и генерирует отчет
 */

const http = require('http');
const https = require('https');

// Цвета для консоли
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

// Тесты для редиректов
const REDIRECT_TESTS = [
  // Фаза 1: Очистка параметров
  {
    name: 'Remove page=1 parameter',
    from: '/?page=1',
    expected: '/',
    expectedCode: 301
  },
  {
    name: 'Remove UTM parameters',
    from: '/blog?utm_source=test&utm_medium=email',
    expected: '/blog',
    expectedCode: 301
  },
  {
    name: 'Remove multiple tracking parameters',
    from: '/ecosystem?fbclid=123&gclid=456&ref=twitter',
    expected: '/ecosystem',
    expectedCode: 301
  },
  
  // Фаза 2: Мягкие редиректы (если включены в middleware)
  {
    name: 'Soft redirect: stablecoins',
    from: '/use/use-cases/algorithmic-stablecoins',
    expected: '/use/cases/stablecoins',
    expectedCode: 302,
    skip: true // Пока пропускаем, так как требует обновления middleware
  },
  
  // Другие редиректы
  {
    name: 'Remove trailing slash',
    from: '/technology/',
    expected: '/technology',
    expectedCode: 301
  },
  {
    name: 'Legacy pagination redirect',
    from: '/blog/page/1',
    expected: '/blog',
    expectedCode: 301
  }
];

// Функция для проверки редиректа
function testRedirect(test) {
  return new Promise((resolve) => {
    const url = `http://localhost:3000${test.from}`;
    
    http.get(url, { followRedirect: false }, (res) => {
      const location = res.headers.location || '';
      const statusCode = res.statusCode;
      
      // Проверяем код ответа
      const codeMatch = statusCode === test.expectedCode;
      
      // Для редиректов проверяем location
      let locationMatch = true;
      if (statusCode === 301 || statusCode === 302) {
        // Убираем домен из location для сравнения
        const cleanLocation = location.replace(/^https?:\/\/[^\/]+/, '');
        locationMatch = cleanLocation === test.expected;
      }
      
      const passed = codeMatch && locationMatch;
      
      resolve({
        name: test.name,
        from: test.from,
        expected: test.expected,
        expectedCode: test.expectedCode,
        actualCode: statusCode,
        actualLocation: location,
        passed,
        skipped: test.skip
      });
    }).on('error', (err) => {
      resolve({
        name: test.name,
        from: test.from,
        expected: test.expected,
        expectedCode: test.expectedCode,
        error: err.message,
        passed: false,
        skipped: test.skip
      });
    });
  });
}

// Главная функция
async function runTests() {
  console.log(`${colors.blue}🔍 Testing Redirects...${colors.reset}\n`);
  
  const results = [];
  let passed = 0;
  let failed = 0;
  let skipped = 0;
  
  for (const test of REDIRECT_TESTS) {
    if (test.skip) {
      skipped++;
      console.log(`${colors.yellow}⏭️  SKIPPED: ${test.name}${colors.reset}`);
      continue;
    }
    
    const result = await testRedirect(test);
    results.push(result);
    
    if (result.passed) {
      passed++;
      console.log(`${colors.green}✅ PASSED: ${test.name}${colors.reset}`);
      console.log(`   ${test.from} → ${result.actualLocation || test.expected} (${result.actualCode})`);
    } else {
      failed++;
      console.log(`${colors.red}❌ FAILED: ${test.name}${colors.reset}`);
      console.log(`   From: ${test.from}`);
      console.log(`   Expected: ${test.expected} (${test.expectedCode})`);
      console.log(`   Actual: ${result.actualLocation || 'no redirect'} (${result.actualCode})`);
      if (result.error) {
        console.log(`   Error: ${result.error}`);
      }
    }
    console.log();
  }
  
  // Сводка
  console.log(`${colors.blue}📊 Summary:${colors.reset}`);
  console.log(`${colors.green}Passed: ${passed}${colors.reset}`);
  console.log(`${colors.red}Failed: ${failed}${colors.reset}`);
  console.log(`${colors.yellow}Skipped: ${skipped}${colors.reset}`);
  
  // Генерируем отчет
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: REDIRECT_TESTS.length,
      passed,
      failed,
      skipped
    },
    results: results.filter(r => !r.skipped),
    phases: {
      phase1: {
        name: 'Parameter Cleaning',
        status: 'active',
        tests: results.filter(r => r.name.includes('parameter') || r.name.includes('UTM'))
      },
      phase2: {
        name: 'Soft Redirects',
        status: 'pending',
        tests: results.filter(r => r.name.includes('Soft redirect'))
      },
      phase3: {
        name: 'Lowercase Migration',
        status: 'planned',
        tests: []
      }
    }
  };
  
  // Сохраняем отчет
  const fs = require('fs');
  fs.writeFileSync('redirect-monitor-report.json', JSON.stringify(report, null, 2));
  console.log(`\n${colors.green}📝 Report saved to redirect-monitor-report.json${colors.reset}`);
  
  // Возвращаем код выхода
  process.exit(failed > 0 ? 1 : 0);
}

// Проверяем, что сервер запущен
http.get('http://localhost:3000', (res) => {
  runTests();
}).on('error', (err) => {
  console.error(`${colors.red}❌ Server not running on localhost:3000${colors.reset}`);
  console.error(`Please start the server with: npm run dev`);
  process.exit(1);
}); 