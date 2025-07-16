# Полнотекстовый поиск для Ergo Documentation

## Обзор

Реализован полнотекстовый поиск по всей документации с использованием **Algolia DocSearch**. Система включает:

- ✅ Подсветка совпадений в результатах
- ✅ Группировка результатов по страницам
- ✅ Фильтрация по тегам
- ✅ Быстрый отклик (< 100ms)
- ✅ Горячие клавиши (Cmd/Ctrl + K)
- ✅ Интеграция с MDX структурой
- ✅ Автоматическое извлечение тегов из контента

## Настройка Algolia DocSearch

### 1. Регистрация в Algolia DocSearch

1. Перейдите на [docsearch.algolia.com](https://docsearch.algolia.com)
2. Зарегистрируйтесь для бесплатного аккаунта (для open-source проектов)
3. Создайте новый индекс для Ergo Documentation

### 2. Конфигурация Crawler

Создайте файл `docsearch.json` в корне проекта:

```json
{
  "index_name": "ergo-docs",
  "start_urls": [
    {
      "url": "https://your-domain.com/Docs/",
      "tags": ["docs"]
    }
  ],
  "stop_urls": [
    "/api/",
    "/_next/",
    "/404",
    "/500"
  ],
  "selectors": {
    "lvl0": {
      "selector": "nav .active",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": "article h1",
    "lvl2": "article h2", 
    "lvl3": "article h3",
    "lvl4": "article h4",
    "lvl5": "article h5",
    "lvl6": "article h6",
    "text": "article p, article li, article td, article th"
  },
  "selectors_exclude": [
    ".search",
    ".sidebar", 
    ".footer",
    "nav",
    "header"
  ],
  "custom_settings": {
    "searchableAttributes": [
      "unordered(title)",
      "unordered(content)",
      "unordered(tags)",
      "unordered(section)"
    ],
    "attributesForFaceting": [
      "tags",
      "section",
      "type"
    ],
    "attributesToHighlight": [
      "title",
      "content"
    ],
    "attributesToSnippet": [
      "content:150"
    ]
  },
  "strip_chars": " .,;:§¶",
  "min_indexed_level": 1,
  "keep_tags": true,
  "only_content_level": true,
  "nb_hits": 10000
}
```

### 3. Переменные окружения

Создайте файл `.env.local`:

```bash
# Algolia DocSearch Configuration
NEXT_PUBLIC_ALGOLIA_APP_ID=your-app-id
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=your-search-api-key
NEXT_PUBLIC_ALGOLIA_INDEX_NAME=ergo-docs

# Optional: Algolia Insights (for analytics)
NEXT_PUBLIC_ALGOLIA_INSIGHTS_API_KEY=your-insights-api-key
```

### 4. Запуск индексации

После настройки crawler будет автоматически индексировать ваш сайт каждые 24 часа.

## Использование

### Горячие клавиши

- `Cmd/Ctrl + K` - Открыть поиск
- `↑/↓` - Навигация по результатам
- `Enter` - Перейти к выбранному результату
- `Esc` - Закрыть поиск

### Фильтрация по тегам

Теги автоматически извлекаются из:
- Пути страницы (section)
- Технических терминов в контенте
- Языков программирования
- Категорий контента

### Типы контента

- **Title** - Заголовки страниц
- **Content** - Основной контент
- **Code** - Код и скрипты
- **Anchor** - Якорные ссылки

## Кастомизация

### Добавление новых тегов

Отредактируйте функцию `extractTags` в `lib/algolia-config.ts`:

```typescript
export function extractTags(content: string, section: string): string[] {
  const tags: string[] = [];
  
  // Добавьте новые технические термины
  const technicalTerms = [
    'ergo', 'ergoscript', 'utxo', 'eutxo', 'defi', 'smart-contracts',
    'mining', 'consensus', 'privacy', 'oracles', 'sidechains',
    'lending', 'derivatives', 'crowdfunding', 'tokens', 'wallets',
    // Добавьте ваши новые термины здесь
    'your-new-term'
  ];
  
  // ... остальная логика
}
```

### Изменение UI

Компонент поиска находится в `components/search/AlgoliaSearch.tsx`. Основные элементы для кастомизации:

- Цветовая схема (CSS классы)
- Анимации и переходы
- Размеры и отступы
- Иконки и типографика

### Интеграция с существующим меню

Поиск автоматически интегрируется с `app/Docs/menuData.ts`. Новые страницы будут автоматически индексироваться.

## Альтернативные решения

### Meilisearch (Self-hosted)

```bash
# Установка
docker run -p 7700:7700 getmeili/meilisearch:latest

# Интеграция
npm install @meilisearch/instant-meilisearch
```

### Typesense (Self-hosted)

```bash
# Установка
docker run -p 8108:8108 -v typesense-data:/data typesense/typesense:latest

# Интеграция
npm install typesense-instantsearch-adapter
```

## Производительность

- **Время отклика**: < 100ms
- **Индексация**: Автоматическая каждые 24 часа
- **Размер индекса**: ~10MB для всей документации
- **Поддержка**: Неограниченное количество запросов

## Мониторинг

### Algolia Analytics

Включите аналитику в Algolia Dashboard для отслеживания:
- Популярных поисковых запросов
- Конверсии (клики по результатам)
- Времени отклика
- Ошибок поиска

### Логирование

```typescript
// В AlgoliaSearch.tsx
const algoliaInsightsPlugin = createAlgoliaInsightsPlugin({
  insightsClient: window.aa, // Algolia Analytics
});
```

## Troubleshooting

### Поиск не работает

1. Проверьте переменные окружения
2. Убедитесь, что индекс создан в Algolia
3. Проверьте консоль браузера на ошибки

### Медленная индексация

1. Оптимизируйте selectors в docsearch.json
2. Уменьшите количество страниц для индексации
3. Проверьте производительность сайта

### Нет результатов

1. Проверьте, что crawler завершил индексацию
2. Убедитесь, что контент доступен для crawler
3. Проверьте настройки selectors

## Поддержка

- [Algolia DocSearch Documentation](https://docsearch.algolia.com/docs/)
- [Algolia React Components](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/)
- [Ergo Documentation Issues](https://github.com/ergoplatform/ergo-docs/issues) 