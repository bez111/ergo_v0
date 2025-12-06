#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * Тестовый скрипт для проверки интеграции с Beehiiv
 * Запуск: node scripts/test-beehiiv.js
 */

const { BeehiivAPI } = require('../src/lib/beehiiv-api.ts')

async function testBeehiivIntegration() {
  console.log('🧪 Тестирование интеграции с Beehiiv...\n')

  // Проверяем переменные окружения
  const apiKey = process.env.BEEHIIV_API_KEY
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID

  if (!apiKey || !publicationId) {
    console.error('❌ Ошибка: Переменные окружения не настроены')
    console.log('Убедитесь, что в .env.local установлены:')
    console.log('- BEEHIIV_API_KEY')
    console.log('- BEEHIIV_PUBLICATION_ID')
    console.log('\nСм. docs/BEEHIIV_SETUP.md для инструкций')
    process.exit(1)
  }

  console.log('✅ Переменные окружения найдены')
  console.log(`📊 Publication ID: ${publicationId}`)
  console.log(`🔑 API Key: ${apiKey.substring(0, 8)}...`)

  // Создаем экземпляр API
  const api = new BeehiivAPI(apiKey, publicationId)

  try {
    // Тест 1: Получение статистики
    console.log('\n📈 Тест 1: Получение статистики подписчиков...')
    const stats = await api.getSubscriptionStats()
    
    if (stats.success) {
      console.log('✅ Статистика получена успешно')
      console.log('📊 Данные:', JSON.stringify(stats.data, null, 2))
    } else {
      console.log('⚠️  Не удалось получить статистику:', stats.error)
    }

    // Тест 2: Подписка тестового email
    const testEmail = `test+${Date.now()}@example.com`
    console.log(`\n📧 Тест 2: Подписка тестового email (${testEmail})...`)
    
    const subscribeResult = await api.subscribe({
      email: testEmail,
      utm_source: 'test_script',
      utm_medium: 'api_test',
      utm_campaign: 'integration_test'
    })

    if (subscribeResult.success) {
      console.log('✅ Подписка выполнена успешно')
      console.log('📧 Результат:', JSON.stringify(subscribeResult.data, null, 2))
    } else {
      console.log('⚠️  Ошибка подписки:', subscribeResult.error)
    }

    // Тест 3: Проверка статуса подписчика
    console.log(`\n🔍 Тест 3: Проверка статуса подписчика...`)
    const statusResult = await api.getSubscriberStatus(testEmail)
    
    if (statusResult.success) {
      console.log('✅ Статус проверен успешно')
      console.log('👤 Данные подписчика:', JSON.stringify(statusResult.data, null, 2))
    } else {
      console.log('⚠️  Не удалось проверить статус:', statusResult.error)
    }

    console.log('\n🎉 Тестирование завершено!')
    console.log('\n📝 Следующие шаги:')
    console.log('1. Проверьте панель Beehiiv на наличие нового подписчика')
    console.log('2. Протестируйте формы на сайте')
    console.log('3. Настройте welcome email в Beehiiv (опционально)')

  } catch (error) {
    console.error('\n❌ Критическая ошибка:', error.message)
    console.log('\n🔧 Возможные причины:')
    console.log('- Неверный API ключ')
    console.log('- Неверный Publication ID')
    console.log('- Проблемы с сетью')
    console.log('- Ограничения API Beehiiv')
    process.exit(1)
  }
}

// Запуск тестов
if (require.main === module) {
  testBeehiivIntegration()
}
