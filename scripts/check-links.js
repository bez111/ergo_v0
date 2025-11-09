#!/usr/bin/env node

/**
 * Скрипт для проверки доступности всех внешних ссылок на сайте
 * Проверяет основные категории ссылок и создает отчет
 */

const https = require('https');
const http = require('http');

// Основные категории ссылок для проверки
const linksToCheck = {
  // Социальные сети
  social: {
    'Twitter': 'https://x.com/BuildOnErgo',
    'Discord': 'https://discord.com/invite/ergo-platform-668903786361651200',
    'Telegram': 'https://t.me/ergoplatform',
    'GitHub': 'https://github.com/ergoplatform',
    'Forum': 'https://forum.ergoplatform.org',
    'Reddit': 'https://reddit.com/r/ergonauts',
    'YouTube': 'https://youtube.com/@ergoplatform'
  },
  
  // Кошельки
  wallets: {
    'Nautilus Wallet': 'https://nautilus-wallet.org',
    'Satergo': 'https://satergo.com',
    'Android Wallet': 'https://play.google.com/store/apps/details?id=org.ergoplatform.android',
    'iOS Wallet': 'https://apps.apple.com/app/ergo-wallet/id1542086230',
    'SAFEW': 'https://github.com/ThierryM1212/SAFEW',
    'Ledger': 'https://www.ledger.com'
  },
  
  // Инструменты разработки
  dev_tools: {
    'ErgoScript Playground': 'https://playground.ergoplatform.com',
    'Ergo AppKit': 'https://github.com/ergoplatform/ergo-appkit',
    'Chrome Extension': 'https://chrome.google.com/webstore/detail/nautilus-wallet'
  },
  
  // API и документация
  api: {
    'Beehiiv API': 'https://api.beehiiv.com/v2',
    'Schema.org': 'https://schema.org'
  }
}

// Функция для проверки доступности ссылки
function checkLink(url, timeout = 10000) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;
    
    const options = {
      method: 'HEAD',
      timeout: timeout,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ErgoLinkChecker/1.0)'
      }
    };

    const req = client.request(url, options, (res) => {
      resolve({
        url,
        status: res.statusCode,
        success: res.statusCode >= 200 && res.statusCode < 400,
        redirected: res.statusCode >= 300 && res.statusCode < 400,
        headers: res.headers
      });
    });

    req.on('error', (err) => {
      resolve({
        url,
        status: null,
        success: false,
        error: err.message
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        status: null,
        success: false,
        error: 'Timeout'
      });
    });

    req.end();
  });
}

// Основная функция проверки
async function checkAllLinks() {
  console.log('🔍 Проверка доступности ссылок на сайте Ergo...\n');
  
  const results = {
    total: 0,
    successful: 0,
    failed: 0,
    details: {}
  };

  for (const [category, links] of Object.entries(linksToCheck)) {
    console.log(`📂 Категория: ${category.toUpperCase()}`);
    results.details[category] = {};
    
    for (const [name, url] of Object.entries(links)) {
      process.stdout.write(`   Проверяем ${name}... `);
      
      const result = await checkLink(url);
      results.total++;
      
      if (result.success) {
        results.successful++;
        console.log(`✅ OK (${result.status})`);
        results.details[category][name] = { status: 'success', code: result.status };
      } else {
        results.failed++;
        const error = result.error || `HTTP ${result.status}`;
        console.log(`❌ FAILED (${error})`);
        results.details[category][name] = { status: 'failed', error };
      }
    }
    console.log('');
  }

  // Итоговый отчет
  console.log('📊 ИТОГОВЫЙ ОТЧЕТ:');
  console.log(`✅ Успешно: ${results.successful}/${results.total}`);
  console.log(`❌ Не работают: ${results.failed}/${results.total}`);
  console.log(`📈 Процент успеха: ${((results.successful/results.total)*100).toFixed(1)}%\n`);

  // Детальный отчет по неработающим ссылкам
  if (results.failed > 0) {
    console.log('❌ НЕРАБОТАЮЩИЕ ССЫЛКИ:');
    for (const [category, links] of Object.entries(results.details)) {
      for (const [name, result] of Object.entries(links)) {
        if (result.status === 'failed') {
          console.log(`   • ${category}/${name}: ${result.error}`);
        }
      }
    }
    console.log('');
  }

  // Рекомендации
  console.log('💡 РЕКОМЕНДАЦИИ:');
  console.log('1. Проверьте неработающие ссылки и обновите их');
  console.log('2. Для временно недоступных сервисов добавьте fallback');
  console.log('3. Регулярно запускайте эту проверку');
  
  // Сохранение отчета
  const reportData = {
    timestamp: new Date().toISOString(),
    summary: {
      total: results.total,
      successful: results.successful,
      failed: results.failed,
      successRate: ((results.successful/results.total)*100).toFixed(1) + '%'
    },
    details: results.details
  };
  
  require('fs').writeFileSync('link-check-report.json', JSON.stringify(reportData, null, 2));
  console.log('\n📄 Детальный отчет сохранен в link-check-report.json');
}

// Запуск проверки
if (require.main === module) {
  checkAllLinks().catch(console.error);
}
