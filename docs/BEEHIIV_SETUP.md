# Настройка интеграции с Beehiiv

## Обзор

Этот проект интегрирован с Beehiiv для сбора email подписчиков через формы на сайте. Beehiiv - это платформа для создания и управления email рассылками.

## Быстрый старт

1. **Получите API ключи** (см. раздел ниже)
2. **Создайте файл `.env.local`** в корне проекта:
   ```bash
   BEEHIIV_API_KEY=ваш_api_ключ
   BEEHIIV_PUBLICATION_ID=ваш_publication_id
   ```
3. **Перезапустите сервер**: `npm run dev`
4. **Протестируйте**: `node scripts/test-beehiiv.js`

## Получение API ключей

### 1. Войдите в ваш аккаунт Beehiiv
Перейдите на [beehiiv.com](https://beehiiv.com) и войдите в свой аккаунт.

### 2. Получите API ключ
1. Перейдите в **Settings** → **API Keys**
2. Нажмите **Create API Key**
3. Дайте ключу описательное имя (например, "Ergo Website Integration")
4. Скопируйте созданный API ключ

### 3. Найдите Publication ID
1. Перейдите в **Settings** → **General**
2. Найдите **Publication ID** в разделе основной информации
3. Скопируйте этот ID (должен начинаться с `pub_`, например: `pub_12345678-1234-1234-1234-123456789012`)

**Важно:** Publication ID должен иметь формат `pub_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`, а не просто UUID.

## Настройка переменных окружения

Создайте файл `.env.local` в корне проекта и добавьте следующие переменные:

```bash
# Beehiiv Newsletter Integration
BEEHIIV_API_KEY=your_beehiiv_api_key_here
BEEHIIV_PUBLICATION_ID=your_publication_id_here
```

**Важно:** 
- Никогда не коммитьте файл `.env.local` в git
- Используйте реальные значения вместо `your_beehiiv_api_key_here` и `your_publication_id_here`

## Тестирование интеграции

После настройки переменных окружения:

1. Перезапустите сервер разработки:
   ```bash
   npm run dev
   ```

2. Откройте сайт и найдите форму подписки на newsletter (в футере или на страницах блога)

3. Введите тестовый email и нажмите "Subscribe"

4. Проверьте в панели Beehiiv, что подписчик был добавлен

## Формы подписки на сайте

Интеграция работает со следующими формами:

1. **FinalCTASimple** (`src/components/home/final-cta-simple.tsx`)
   - Основная форма подписки, используется на многих страницах
   - UTM метки: `utm_source=website`, `utm_medium=cta_form`, `utm_campaign=ergo_builders_list`

2. **Blog Email Capture** (`src/components/blog/email-capture.tsx`)
   - Отображается на страницах блога как отдельная секция
   - UTM метки: `utm_source=blog`, `utm_medium=email_capture`

3. **Newsletter Section** (`src/components/blog/newsletter-section.tsx`)
   - Встроенная форма в блог-постах
   - UTM метки: `utm_source=blog`, `utm_medium=inline_form`

## API Endpoint

Создан API endpoint `/api/newsletter/subscribe` который:
- Принимает POST запросы с email адресом
- Валидирует email
- Отправляет данные в Beehiiv API
- Возвращает результат подписки

## Обработка ошибок

Система обрабатывает следующие типы ошибок:
- Невалидный email формат
- Уже существующий подписчик
- Ошибки сети
- Ошибки Beehiiv API

## Аналитика

Все события подписки логируются через `newsletter-analytics.ts` для отслеживания:
- Просмотры форм
- Попытки подписки
- Успешные подписки
- Ошибки

## Troubleshooting

### Ошибка "Newsletter service is not configured"
- Проверьте, что переменные `BEEHIIV_API_KEY` и `BEEHIIV_PUBLICATION_ID` установлены в `.env.local`
- Перезапустите сервер после добавления переменных

### Ошибка "Invalid API key"
- Убедитесь, что API ключ скопирован правильно
- Проверьте, что ключ активен в панели Beehiiv

### Подписчики не появляются в Beehiiv
- Проверьте Publication ID
- Убедитесь, что у API ключа есть права на создание подписчиков
- Проверьте логи сервера на наличие ошибок

## Дополнительные возможности

### Кастомные поля
Можно добавить дополнительные поля при подписке, модифицировав вызов API:

```typescript
await subscribeToNewsletter(email, source, {
  custom_fields: {
    signup_page: window.location.pathname,
    user_agent: navigator.userAgent
  }
})
```

### Проверка статуса подписчика
API поддерживает проверку существующих подписчиков через GET запрос:

```
GET /api/newsletter/subscribe?email=user@example.com
```

## Безопасность

- API ключи хранятся только на сервере
- Клиентский код не имеет доступа к API ключам
- Все запросы проходят через наш API endpoint
- Email адреса валидируются перед отправкой
