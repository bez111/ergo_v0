#!/bin/bash

echo "🧪 Тестирование Beehiiv API интеграции..."
echo ""

# Проверяем, что сервер запущен
echo "📡 Проверяем доступность API endpoint..."
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/api/newsletter/subscribe

if [ $? -eq 0 ]; then
    echo " ✅ API endpoint доступен"
else
    echo " ❌ Сервер не запущен. Запустите: npm run dev"
    exit 1
fi

echo ""
echo "📧 Тестируем подписку с тестовым email..."

# Тестируем подписку
RESPONSE=$(curl -s -X POST http://localhost:3000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test+'$(date +%s)'@example.com",
    "source": "api_test",
    "utmSource": "test_script",
    "utmMedium": "curl_test",
    "utmCampaign": "integration_test"
  }')

echo "📋 Ответ API:"
echo "$RESPONSE" | jq . 2>/dev/null || echo "$RESPONSE"

echo ""
echo "🎉 Тест завершен!"
echo ""
echo "📝 Следующие шаги:"
echo "1. Проверьте панель Beehiiv на наличие нового подписчика"
echo "2. Протестируйте формы на сайте: http://localhost:3000"
echo "3. Проверьте формы на разных страницах (главная, блог, технологии)"
