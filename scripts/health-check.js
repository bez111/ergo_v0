#!/usr/bin/env node

/**
 * Health Check Script
 * Проверяет работоспособность всех критических путей
 */

const https = require('https');
const http = require('http');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const isHTTPS = BASE_URL.startsWith('https');
const client = isHTTPS ? https : http;

// Критические пути для проверки
const CRITICAL_PATHS = [
  { path: '/', name: 'Homepage', expectedStatus: 200 },
  { path: '/blog', name: 'Blog', expectedStatus: 200 },
  { path: '/docs', name: 'Documentation', expectedStatus: 200 },
  { path: '/use', name: 'Use Cases', expectedStatus: 200 },
  { path: '/technology', name: 'Technology', expectedStatus: 200 },
  { path: '/ecosystem', name: 'Ecosystem', expectedStatus: 200 },
  { path: '/wallet', name: 'Wallet', expectedStatus: 200 },
  { path: '/sitemap.xml', name: 'Sitemap', expectedStatus: 200 },
  { path: '/robots.txt', name: 'Robots.txt', expectedStatus: 200 },
  { path: '/api/health', name: 'Health API', expectedStatus: 200 },
  // Проверка редиректов
  { path: '/Docs', name: 'Old Docs URL', expectedStatus: 404 },
  { path: '/use/use-cases/privacy', name: 'Old Use Case URL', expectedStatus: 301 },
];

// Цвета для консоли
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function checkPath(pathConfig) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const url = new URL(BASE_URL + pathConfig.path);
    
    const options = {
      hostname: url.hostname,
      port: url.port || (isHTTPS ? 443 : 80),
      path: url.pathname + url.search,
      method: 'HEAD',
      timeout: 10000,
      headers: {
        'User-Agent': 'Health-Check-Bot/1.0',
      },
    };

    const req = client.request(options, (res) => {
      const responseTime = Date.now() - startTime;
      const success = res.statusCode === pathConfig.expectedStatus;
      
      resolve({
        ...pathConfig,
        actualStatus: res.statusCode,
        responseTime,
        success,
        headers: res.headers,
      });
    });

    req.on('error', (error) => {
      resolve({
        ...pathConfig,
        actualStatus: 'ERROR',
        responseTime: Date.now() - startTime,
        success: false,
        error: error.message,
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        ...pathConfig,
        actualStatus: 'TIMEOUT',
        responseTime: 10000,
        success: false,
        error: 'Request timeout',
      });
    });

    req.end();
  });
}

async function runHealthCheck() {
  console.log(`${colors.blue}🏥 Starting Health Check for ${BASE_URL}${colors.reset}\n`);
  
  const results = [];
  let totalPassed = 0;
  let totalFailed = 0;
  
  // Проверяем все пути
  for (const pathConfig of CRITICAL_PATHS) {
    const result = await checkPath(pathConfig);
    results.push(result);
    
    if (result.success) {
      totalPassed++;
      console.log(
        `${colors.green}✅${colors.reset} ${result.name.padEnd(20)} ` +
        `[${result.actualStatus}] ${result.responseTime}ms`
      );
    } else {
      totalFailed++;
      console.log(
        `${colors.red}❌${colors.reset} ${result.name.padEnd(20)} ` +
        `[${result.actualStatus}] Expected: ${result.expectedStatus} ` +
        `${result.error || ''}`
      );
    }
  }
  
  // Статистика
  console.log(`\n${colors.blue}📊 Health Check Summary:${colors.reset}`);
  console.log(`Total: ${CRITICAL_PATHS.length}`);
  console.log(`${colors.green}Passed: ${totalPassed}${colors.reset}`);
  console.log(`${colors.red}Failed: ${totalFailed}${colors.reset}`);
  
  // Проверка производительности
  const performanceResults = results.filter(r => r.success && r.responseTime);
  if (performanceResults.length > 0) {
    const avgResponseTime = Math.round(
      performanceResults.reduce((sum, r) => sum + r.responseTime, 0) / performanceResults.length
    );
    const maxResponseTime = Math.max(...performanceResults.map(r => r.responseTime));
    
    console.log(`\n${colors.blue}⚡ Performance Metrics:${colors.reset}`);
    console.log(`Average Response Time: ${avgResponseTime}ms`);
    console.log(`Max Response Time: ${maxResponseTime}ms`);
    
    if (avgResponseTime > 1000) {
      console.log(`${colors.yellow}⚠️  Warning: Average response time is high${colors.reset}`);
    }
  }
  
  // Проверка критических заголовков безопасности
  const homepageResult = results.find(r => r.path === '/');
  if (homepageResult && homepageResult.headers) {
    console.log(`\n${colors.blue}🔒 Security Headers:${colors.reset}`);
    const securityHeaders = [
      'x-frame-options',
      'x-content-type-options',
      'strict-transport-security',
      'content-security-policy',
    ];
    
    securityHeaders.forEach(header => {
      if (homepageResult.headers[header]) {
        console.log(`${colors.green}✅${colors.reset} ${header}: Present`);
      } else {
        console.log(`${colors.yellow}⚠️${colors.reset} ${header}: Missing`);
      }
    });
  }
  
  // Возвращаем код выхода
  process.exit(totalFailed > 0 ? 1 : 0);
}

// Запускаем проверку
runHealthCheck().catch(error => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, error);
  process.exit(1);
}); 