# План реализации полнотекстового поиска для Ergo Documentation

## 🎯 Цели

Реализовать полнотекстовый поиск по всей документации с:
- ✅ Подсветкой совпадений
- ✅ Группировкой результатов по страницам  
- ✅ Тегами и фильтрацией
- ✅ Быстрым откликом (< 100ms)
- ✅ Горячими клавишами (Cmd/Ctrl + K)
- ✅ Интеграцией с MDX структурой

## 🏗️ Архитектура решения

### Выбранное решение: Algolia DocSearch

**Преимущества:**
- Готовое решение для документации
- Отличная производительность
- Встроенная поддержка MDX
- Бесплатно для open-source проектов
- Автоматическая индексация

**Альтернативы:**
- Meilisearch (self-hosted)
- Typesense (self-hosted)
- Elasticsearch (overkill)

## 📋 Этапы реализации

### Этап 1: Настройка Algolia DocSearch ✅

1. **Регистрация в Algolia DocSearch**
   - Перейти на [docsearch.algolia.com](https://docsearch.algolia.com)
   - Зарегистрироваться для бесплатного аккаунта
   - Создать новый индекс "ergo-docs"

2. **Конфигурация crawler**
   - Создать `docsearch.json` в корне проекта
   - Настроить selectors для MDX контента
   - Указать start_urls и stop_urls

3. **Переменные окружения**
   ```bash
   NEXT_PUBLIC_ALGOLIA_APP_ID=your-app-id
   NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=your-search-api-key
   NEXT_PUBLIC_ALGOLIA_INDEX_NAME=ergo-docs
   ```

### Этап 2: Интеграция в Next.js ✅

1. **Установка зависимостей**
   ```bash
   npm install @algolia/autocomplete-js @algolia/autocomplete-theme-classic
   ```

2. **Создание компонента поиска**
   - `components/search/AlgoliaSearch.tsx` - основной компонент
   - `components/search/AlgoliaSearchReal.tsx` - с реальным API
   - `lib/algolia-config.ts` - конфигурация

3. **Интеграция в layout**
   - Добавить в `app/Docs/layout.tsx`
   - Позиционирование между header и контентом

### Этап 3: Автоматическая индексация ✅

1. **Скрипт индексации**
   - `scripts/build-search-index.js` - извлечение из MDX
   - Автоматическое извлечение тегов
   - Определение типов контента

2. **Интеграция с CI/CD**
   ```bash
   npm run build:search
   ```

3. **Загрузка в Algolia**
   - Автоматическая загрузка при деплое
   - Обновление индекса каждые 24 часа

### Этап 4: Кастомизация UI ✅

1. **Дизайн в стиле Ergo**
   - Темная тема
   - Минималистичный дизайн
   - Анимации и переходы

2. **Горячие клавиши**
   - `Cmd/Ctrl + K` - открыть поиск
   - `↑/↓` - навигация
   - `Enter` - выбор
   - `Esc` - закрыть

3. **Фильтрация по тегам**
   - Автоматическое извлечение тегов
   - Фильтрация результатов
   - Визуальные индикаторы

## 🔧 Техническая реализация

### Компоненты

```typescript
// Основной компонент поиска
<AlgoliaSearch />

// Конфигурация
const algoliaConfig = {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  searchApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
  // ... настройки поиска
};
```

### Индексация контента

```javascript
// Автоматическое извлечение тегов
function extractTags(content, section) {
  const tags = [];
  // Извлечение из пути страницы
  // Извлечение технических терминов
  // Извлечение языков программирования
  return tags;
}

// Определение типа контента
function getContentType(url, title) {
  if (url.includes('#')) return 'anchor';
  if (title.includes('code')) return 'code';
  if (url.split('/').length <= 3) return 'title';
  return 'content';
}
```

### Структура данных

```typescript
interface SearchHit {
  objectID: string;
  title: string;
  content: string;
  url: string;
  section: string;
  tags: string[];
  type: 'title' | 'content' | 'code' | 'anchor';
  _snippetResult?: {
    content?: { value: string; matchLevel: string; };
    title?: { value: string; matchLevel: string; };
  };
}
```

## 🚀 Инструкции по развертыванию

### 1. Настройка Algolia

1. Зарегистрируйтесь на [docsearch.algolia.com](https://docsearch.algolia.com)
2. Создайте новый индекс для вашего сайта
3. Получите API ключи из Algolia Dashboard

### 2. Конфигурация переменных окружения

Создайте `.env.local`:
```bash
NEXT_PUBLIC_ALGOLIA_APP_ID=your-app-id
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=your-search-api-key
NEXT_PUBLIC_ALGOLIA_INDEX_NAME=ergo-docs
```

### 3. Настройка crawler

Создайте `docsearch.json`:
```json
{
  "index_name": "ergo-docs",
  "start_urls": [
    {
      "url": "https://your-domain.com/Docs/",
      "tags": ["docs"]
    }
  ],
  "selectors": {
    "lvl0": { "selector": "nav .active", "global": true },
    "lvl1": "article h1",
    "lvl2": "article h2",
    "text": "article p, article li"
  }
}
```

### 4. Запуск индексации

```bash
# Сборка поискового индекса
npm run build:search

# Или полная индексация
npm run search:index
```

## 📊 Мониторинг и аналитика

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

## 🔄 Обновление контента

### Автоматическая индексация

1. **При добавлении новых страниц:**
   - Crawler автоматически индексирует новые URL
   - Обновление каждые 24 часа

2. **При изменении существующих страниц:**
   - Автоматическое обновление индекса
   - Сохранение истории изменений

3. **Ручная индексация:**
   ```bash
   npm run build:search
   ```

### Добавление новых тегов

Отредактируйте `lib/algolia-config.ts`:
```typescript
const technicalTerms = [
  'ergo', 'ergoscript', 'utxo', 'eutxo', 'defi',
  // Добавьте новые термины
  'your-new-term'
];
```

## 🎨 Кастомизация UI

### Цветовая схема

```css
/* Основные цвета */
.search-modal {
  @apply bg-neutral-900 border-neutral-700;
}

.search-result {
  @apply bg-neutral-800/50 hover:bg-neutral-800;
}

.search-highlight {
  @apply bg-cyan-600/20 border-cyan-500/50;
}
```

### Анимации

```css
.search-transition {
  @apply transition-all duration-300;
}

.search-backdrop {
  @apply backdrop-blur-sm;
}
```

## 🐛 Troubleshooting

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

## 📈 Производительность

### Метрики

- **Время отклика**: < 100ms
- **Размер индекса**: ~10MB для всей документации
- **Количество запросов**: Неограниченно
- **Индексация**: Автоматическая каждые 24 часа

### Оптимизация

1. **Кэширование результатов**
2. **Ленивая загрузка**
3. **Дебаунсинг запросов**
4. **Предзагрузка популярных запросов**

## 🔮 Будущие улучшения

### Планируемые функции

1. **Поиск по коду**
   - Подсветка синтаксиса
   - Фильтрация по языкам программирования

2. **Персонализация**
   - История поиска
   - Избранные результаты
   - Персональные рекомендации

3. **Расширенная аналитика**
   - Популярные запросы
   - Конверсия поиска
   - A/B тестирование

4. **Интеграция с другими системами**
   - GitHub Issues
   - Discord/Telegram
   - Stack Overflow

## 📚 Ресурсы

- [Algolia DocSearch Documentation](https://docsearch.algolia.com/docs/)
- [Algolia React Components](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/)
- [Ergo Documentation](https://docs.ergoplatform.org/)
- [Next.js Documentation](https://nextjs.org/docs)

## 🤝 Поддержка

- Создайте issue в [GitHub](https://github.com/ergoplatform/ergo-docs/issues)
- Обратитесь в [Discord](https://discord.gg/ergo)
- Проверьте [FAQ](https://docs.ergoplatform.org/faq) 