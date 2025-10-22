# 📘 РУКОВОДСТВО ПО ИСПОЛЬЗОВАНИЮ SEO-СИСТЕМ

## 🎯 БЫСТРЫЙ СТАРТ

### 1. Базовая интеграция на любой странице

```typescript
// app/любая-страница/page.tsx

import { Metadata } from 'next'
import { SchemaTypes, generateCompleteSchema } from '@/lib/schema-ultimate'
import { generateKnowledgeGraph } from '@/lib/entity-knowledge-graph'
import { targetQuestions, generateSnippetHTML } from '@/lib/featured-snippets-optimizer'
import { InternalLinking } from '@/lib/ai-internal-linking'

// 1. Метаданные страницы
export const metadata: Metadata = {
  title: 'Ваш заголовок | Ergo Platform',
  description: 'Описание страницы для SEO',
  keywords: 'ergo, blockchain, ваши ключевики',
  openGraph: {
    title: 'Заголовок для соцсетей',
    description: 'Описание для соцсетей',
    images: ['/api/og?title=Заголовок&description=Описание'],
  },
  alternates: {
    canonical: 'https://ergoblockchain.org/ваша-страница'
  }
}

export default function YourPage() {
  // 2. Генерируем Schema.org разметку
  const schemas = generateCompleteSchema('home', { /* данные */ })
  const knowledgeGraph = generateKnowledgeGraph('home')
  
  return (
    <>
      {/* 3. Вставляем Schema.org */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }}
      />
      
      {/* Ваш контент */}
      <div>Контент страницы</div>
    </>
  )
}
```

---

## 🛠️ ИСПОЛЬЗОВАНИЕ КАЖДОЙ СИСТЕМЫ

### 1️⃣ **Schema.org Разметка**

```typescript
import { SchemaTypes } from '@/lib/schema-ultimate'

// Для главной страницы
const blockchainSchema = SchemaTypes.BlockchainPlatform()
const cryptoSchema = SchemaTypes.Cryptocurrency({
  name: "Ergo",
  ticker: "ERG",
  price: 1.5, // текущая цена
  marketCap: 150000000,
  website: "https://ergoblockchain.org",
  blockchain: "Ergo"
})

// Для страницы майнинга
const miningSchema = SchemaTypes.MiningSoftware()
const howToMineSchema = SchemaTypes.MiningHowTo()

// Для FAQ
const faqSchema = SchemaTypes.FAQSchema([
  { question: "What is Ergo?", answer: "Ergo is..." },
  { question: "How to mine?", answer: "To mine..." }
])

// Для событий
const eventSchema = SchemaTypes.EventSchema({
  name: "ErgoHack VIII",
  description: "Hackathon",
  startDate: "2024-02-01",
  endDate: "2024-02-03",
  location: "Online"
})

// Вставка в страницу
<script 
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

### 2️⃣ **Featured Snippets Оптимизация**

```typescript
import { 
  generateSnippetHTML, 
  optimizeForSnippets,
  targetQuestions 
} from '@/lib/featured-snippets-optimizer'

// Генерация HTML для Featured Snippets
const snippetHTML = generateSnippetHTML(
  "How to mine Ergo?",
  "howto",
  [
    "1. Download wallet",
    "2. Choose mining pool", 
    "3. Download miner",
    "4. Configure",
    "5. Start mining"
  ]
)

// Оптимизация существующего контента
const optimizedContent = optimizeForSnippets(yourContent)

// Использование готовых вопросов
const miningGuide = targetQuestions.howTo.find(q => 
  q.question === "How to mine Ergo?"
)

// Вставка в JSX
<div dangerouslySetInnerHTML={{ __html: snippetHTML }} />
```

### 3️⃣ **Entity SEO & Knowledge Graph**

```typescript
import { 
  generateKnowledgeGraph,
  addEntityMarkup,
  calculateEntitySalience 
} from '@/lib/entity-knowledge-graph'

// Генерация Knowledge Graph
const knowledgeGraph = generateKnowledgeGraph('technology')

// Добавление entity разметки к контенту
const markedContent = addEntityMarkup(
  "Ergo uses ErgoScript and Autolykos algorithm"
)

// Анализ важности entities
const salience = calculateEntitySalience(pageContent)
// Результат: Map { 'Ergo' => 1.0, 'ErgoScript' => 0.8, ... }

// Вставка в страницу
<div dangerouslySetInnerHTML={{ __html: markedContent }} />
```

### 4️⃣ **AI Внутренние Ссылки**

```typescript
import { InternalLinking } from '@/lib/ai-internal-linking'

// Автоматическое добавление ссылок
const linkedContent = InternalLinking.applyInternalLinks(
  yourContent,
  '/current-page-url',
  { maxLinks: 10 }
)

// Получение связанного контента
const relatedPages = InternalLinking.getRelatedContent(
  '/current-page-url',
  5 // количество
)

// Отображение связанных страниц
<div className="related-content">
  <h3>Похожие страницы:</h3>
  {relatedPages.map(page => (
    <Link key={page.id} href={page.url}>
      {page.title}
    </Link>
  ))}
</div>
```

### 5️⃣ **Динамические OG Images**

```typescript
// Использование в метаданных
export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: '/api/og?title=Ergo Mining Guide&description=Complete tutorial&template=technical',
        width: 1200,
        height: 630,
      }
    ]
  }
}

// Параметры для /api/og:
// - title: заголовок
// - description: описание
// - category: категория
// - author: автор
// - date: дата
// - template: default | blog | technical
```

### 6️⃣ **WebP Оптимизация Изображений**

```html
<!-- Вместо обычных изображений -->
<img src="/hero.png" />

<!-- Используйте оптимизированные -->
<img src="/api/image/hero.png?w=800&f=webp&q=85" />

<!-- Или с picture для fallback -->
<picture>
  <source srcset="/api/image/hero.png?f=avif&q=85" type="image/avif" />
  <source srcset="/api/image/hero.png?f=webp&q=85" type="image/webp" />
  <img src="/hero.png" alt="Hero" />
</picture>

<!-- Параметры:
  - w: ширина
  - h: высота
  - f: формат (webp, avif, jpeg, png)
  - q: качество (1-100)
-->
```

### 7️⃣ **Мониторинг SEO**

```typescript
import { 
  initPerformanceMonitoring,
  checkKeywordRankings,
  generateSEOReport 
} from '@/lib/seo-monitoring'

// В app/layout.tsx
useEffect(() => {
  initPerformanceMonitoring() // автоматический трекинг Core Web Vitals
}, [])

// Проверка позиций (для API route)
const rankings = await checkKeywordRankings()

// Генерация отчета
const report = generateSEOReport({
  rankings,
  coreWebVitals: { lcp: 800, fid: 50, cls: 0.01 },
  // ... другие метрики
})
```

---

## 📝 ПРАКТИЧЕСКИЕ ПРИМЕРЫ

### Пример 1: Оптимизация страницы блога

```typescript
// app/blog/[slug]/page.tsx

import { SchemaTypes } from '@/lib/schema-ultimate'
import { optimizeForSnippets } from '@/lib/featured-snippets-optimizer'
import { InternalLinking } from '@/lib/ai-internal-linking'

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  
  return {
    title: `${post.title} | Ergo Blog`,
    description: post.description,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      images: [`/api/og?title=${post.title}&author=${post.author}&template=blog`],
    }
  }
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)
  
  // Оптимизация контента
  const optimizedContent = InternalLinking.applyInternalLinks(
    optimizeForSnippets(post.content),
    `/blog/${params.slug}`
  )
  
  // Schema для блога
  const articleSchema = SchemaTypes.SpeakableSchema({
    headline: post.title,
    summary: post.description,
    url: `https://ergoblockchain.org/blog/${params.slug}`
  })
  
  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: optimizedContent }} />
      </article>
    </>
  )
}
```

### Пример 2: FAQ страница с Featured Snippets

```typescript
// app/faq/page.tsx

import { SchemaTypes } from '@/lib/schema-ultimate'
import { generateOptimizedFAQ } from '@/lib/featured-snippets-optimizer'

const faqs = [
  { q: "What is Ergo?", a: "Ergo is a next-generation..." },
  { q: "How to mine Ergo?", a: "To mine Ergo, you need..." },
  // ...
]

export default function FAQPage() {
  const faqSchema = SchemaTypes.FAQSchema(
    faqs.map(faq => ({ question: faq.q, answer: faq.a }))
  )
  
  const optimizedFAQHTML = generateOptimizedFAQ(faqs)
  
  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div dangerouslySetInnerHTML={{ __html: optimizedFAQHTML }} />
    </>
  )
}
```

---

## 🎯 ЧЕКЛИСТ ВНЕДРЕНИЯ

### Для каждой страницы:

- [ ] Добавить `generateMetadata` или `metadata`
- [ ] Вставить Schema.org разметку
- [ ] Оптимизировать контент для Featured Snippets
- [ ] Добавить внутренние ссылки через AI
- [ ] Использовать динамические OG images
- [ ] Оптимизировать изображения через WebP API

### Глобально:

- [ ] Активировать Service Worker в layout.tsx
- [ ] Добавить автоматические хлебные крошки
- [ ] Настроить мониторинг Core Web Vitals
- [ ] Проверить работу всех sitemap
- [ ] Протестировать AMP версии

---

## 🔍 ПРОВЕРКА РАБОТЫ

### 1. Проверка Schema.org
```bash
# Google Rich Results Test
https://search.google.com/test/rich-results

# Schema.org Validator
https://validator.schema.org/
```

### 2. Проверка Featured Snippets
```bash
# Поиск в Google в инкогнито
"How to mine Ergo" site:ergoblockchain.org
```

### 3. Проверка скорости
```bash
# PageSpeed Insights
https://pagespeed.web.dev/

# Проверка AMP
https://validator.ampproject.org/
```

### 4. Проверка API
```bash
# Search Index
curl http://localhost:3000/api/search-index

# OG Image
http://localhost:3000/api/og?title=Test

# News Sitemap
http://localhost:3000/news-sitemap.xml
```

---

## 💡 СОВЕТЫ

1. **Начните с главных страниц** - /, /wallet, /technology
2. **Используйте готовые вопросы** из targetQuestions
3. **Следите за Core Web Vitals** через мониторинг
4. **Обновляйте контент** для Featured Snippets еженедельно
5. **Тестируйте в Google** каждое изменение

---

## 🆘 ПОМОЩЬ

Если что-то не работает:

1. Проверьте импорты путей
2. Убедитесь что сервер запущен
3. Проверьте консоль браузера
4. Используйте Google Search Console

Вопросы? Спрашивайте! 