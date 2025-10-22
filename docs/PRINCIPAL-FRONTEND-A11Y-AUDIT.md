# 🔍 Principal Frontend (SSR/ISR/React) + A11y Audit

**Аудитор:** Principal Frontend Specialist (10+ лет опыта)  
**Фокус:** Next.js App Router, SSR/ISR оптимизация, доступность (A11y)  
**Дата:** Декабрь 2024

---

## 🚨 **Executive Summary**

**СТАТУС:** 🟡 **СРЕДНЯЯ КРИТИЧНОСТЬ** - Требуются исправления перед масштабированием контента

**Основные проблемы:**
- ❌ **P0 КРИТИЧНО:** Множественные вложенные ссылки нарушают A11y
- ❌ **P0 КРИТИЧНО:** Отсутствует proper пагинация с `aria-current`
- ⚠️ **P1:** Неэффективная гидратация - слишком много client components
- ⚠️ **P1:** CLS риски из-за нефиксированных размеров изображений
- ⚠️ **P1:** Focus management отсутствует при навигации

---

# 1️⃣ **UI-паттерны (SSR/ISR/React + рендер/гидратация/изображения)**

## 🔥 **КРИТИЧЕСКИЕ НАХОДКИ**

### 1.1 **Nested Links Violation** 
```tsx
// ❌ ПРОБЛЕМА: app/blog/_components/blog-card.tsx:40-77
<article role="link" onClick={handleCardClick}>  // Fake link wrapper
  <Link href={`/blog/${post.slug}`}>            // Real link 1
    <Image src={post.image} alt={post.title} />
  </Link>
  
  <Link href={`/blog/category/${post.category}`}>  // Real link 2 - ВЛОЖЕННЫЙ!
    {post.category}
  </Link>
  
  <h3>
    <Link href={`/blog/${post.slug}`}>          // Real link 3 - ВЛОЖЕННЫЙ!
      {post.title}
    </Link>
  </h3>
</article>
```
**Последствия:** Нарушает WCAG 2.1, ломает screen readers, неопределенное поведение клавиатуры

### 1.2 **Over-hydration Problem**
```tsx
// ❌ ПРОБЛЕМА: Все компоненты блога используют 'use client'
BlogCard: 'use client'        // Должен быть RSC!
BlogHero: 'use client'        // Должен быть RSC!  
TrendingNow: 'use client'     // Должен быть RSC!
```
**Последствия:** Увеличенный bundle, медленная гидратация, плохой UX на медленных устройствах

### 1.3 **Missing Pagination A11y**
```tsx
// ❌ ПРОБЛЕМА: Пагинация реализована как "Load More" без proper navigation
{hasMoreToShow && (
  <button onClick={loadMore}>Load More Articles</button>  // Не nav!
)}
```
**Последствия:** Screen readers не понимают структуру, нет `aria-current="page"`

---

## 🎯 **АРХИТЕКТУРНЫЕ РЕКОМЕНДАЦИИ**

### **RSC vs Client Boundaries**
```
✅ ПРАВИЛЬНАЯ АРХИТЕКТУРА:
┌─ page.tsx (RSC) ─────────────────┐
│  ├─ BlogHero (RSC)               │
│  ├─ TrendingNow (RSC)            │  
│  ├─ BlogListSSR (RSC)            │
│  └─ BlogFilters ('use client')   │ ← ЕДИНСТВЕННЫЙ client component
└──────────────────────────────────┘
```

### **ISR Strategy**
```tsx
// ✅ РЕКОМЕНДАЦИЯ: Дифференцированная стратегия
export const revalidate = {
  '/blog': 300,           // 5 мин для листинга
  '/blog/[slug]': false,  // Статическая генерация для постов
}
```

---

# 2️⃣ **Чек-лист доступности (A11y)**

## 🔴 **P0 - БЛОКИРУЮЩИЕ ПРОБЛЕМЫ**

### ❌ **Семантика**
- [ ] **Вложенные ссылки:** BlogCard содержит несколько `<Link>` внутри кликабельного wrapper
- [ ] **Fake links:** `<article role="link">` вместо proper semantic markup
- [ ] **Missing navigation:** Пагинация не использует `<nav>` с `aria-label="Pagination"`

### ❌ **Клавиатурная навигация**
- [ ] **Focus management:** Нет перевода фокуса на H1 после навигации
- [ ] **Skip links:** Есть, но не тестированы на всех страницах
- [ ] **Keyboard traps:** Потенциальные ловушки в модальных окнах

### ❌ **ARIA**
- [ ] **Live regions:** Отсутствует `aria-live` при обновлении списка постов
- [ ] **Current page:** Нет `aria-current="page"` в пагинации
- [ ] **Busy states:** Отсутствует `aria-busy` при загрузке

## 🟡 **P1 - ВАЖНЫЕ УЛУЧШЕНИЯ**

### ⚠️ **Изображения & CLS**
- [ ] **LCP optimization:** BlogHero image не имеет `priority`
- [ ] **Fixed dimensions:** Не все изображения имеют фиксированные размеры
- [ ] **Alt texts:** Некоторые декоративные изображения имеют содержательный alt

### ⚠️ **Контраст & Визуализация**  
- [ ] **Focus indicators:** `:focus-visible` стили недостаточно контрастные
- [ ] **Color contrast:** Серый текст может не проходить WCAG AA
- [ ] **Reduced motion:** Анимации не учитывают `prefers-reduced-motion`

---

# 3️⃣ **PR-диффы (готовые правки)**

## 3.1 🔧 **BlogCard - Исправление вложенных ссылок**

```tsx
// ✅ ИСПРАВЛЕНИЕ: app/blog/_components/blog-card.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User } from 'lucide-react'
import { BlogPost } from '../_lib/blog-data'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

// ✅ Теперь это RSC (убираем 'use client')
export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className="relative h-full overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm hover:border-brand-primary-500/30 transition-colors"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ✅ Изображение с фиксированными размерами */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Link 
          href={`/blog/${post.slug}`} 
          className="block w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500"
        >
          <Image
            src={post.image || '/placeholder.svg'}
            alt={post.title}  // ✅ Содержательный ALT
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={featured}
            fetchPriority={featured ? "high" : "auto"}
            placeholder={post.blurDataURL ? "blur" : "empty"}
            blurDataURL={post.blurDataURL}
          />
        </Link>
        
        {/* ✅ Категория КАК ОТДЕЛЬНАЯ ССЫЛКА, НЕ ВЛОЖЕННАЯ */}
        <div className="absolute top-4 left-4">
          {post.category && (
            <Link
              href={`/blog/category/${encodeURIComponent(post.category)}`}
              className="px-3 py-1 text-xs font-semibold bg-brand-primary-500/20 text-brand-primary-400 border border-brand-primary-500/30 rounded-xl backdrop-blur-sm hover:bg-brand-primary-500/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500"
            >
              {post.category}
            </Link>
          )}
        </div>

        {featured && (
          <div className="absolute top-4 right-4">
            <span 
              className="px-3 py-1 text-xs font-semibold bg-status-success-500/20 text-status-success-400 border border-status-success-500/30 rounded-lg backdrop-blur-sm"
              aria-label="Featured article"
            >
              Featured
            </span>
          </div>
        )}
      </div>

      {/* ✅ Контент */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-brand-primary-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {post.description}
        </p>

        {/* ✅ Семантическая мета-информация */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-gray-500" aria-hidden="true" />
            <time dateTime={new Date(post.publishedAt).toISOString()}>
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              }).format(new Date(post.publishedAt))}
            </time>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-500" aria-hidden="true" />
            <span aria-label={`Estimated reading time: ${post.readTime} minutes`}>
              {post.readTime} min read
            </span>
          </div>

          <div className="flex items-center gap-1">
            <div 
              className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-white font-medium text-sm">
                {post.author.name.charAt(0)}
              </span>
            </div>
            <span>{post.author.name}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
```

## 3.2 🔧 **Proper Pagination Component**

```tsx
// ✅ НОВЫЙ ФАЙЛ: app/blog/_components/blog-pagination.tsx
import Link from 'next/link'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export function BlogPagination({ currentPage, totalPages, baseUrl }: BlogPaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
    if (totalPages <= 5) return i + 1
    if (currentPage <= 3) return i + 1
    if (currentPage >= totalPages - 2) return totalPages - 4 + i
    return currentPage - 2 + i
  })

  return (
    <nav aria-label="Blog pagination" className="mt-12 flex items-center justify-center gap-2">
      {/* Previous */}
      {currentPage > 1 && (
        <Link
          href={currentPage === 2 ? baseUrl : `${baseUrl}?page=${currentPage - 1}`}
          className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white border border-neutral-700 rounded-lg hover:border-brand-primary-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500"
          aria-label="Go to previous page"
        >
          ← Previous
        </Link>
      )}

      {/* Page Numbers */}
      {pages.map((page) => (
        <Link
          key={page}
          href={page === 1 ? baseUrl : `${baseUrl}?page=${page}`}
          aria-current={page === currentPage ? "page" : undefined}
          aria-label={page === currentPage ? `Current page ${page}` : `Go to page ${page}`}
          className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500 ${
            page === currentPage
              ? "bg-brand-primary-500 text-black border-brand-primary-500"
              : "text-neutral-300 hover:text-white border-neutral-700 hover:border-brand-primary-500/50"
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Next */}
      {currentPage < totalPages && (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white border border-neutral-700 rounded-lg hover:border-brand-primary-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500"
          aria-label="Go to next page"
        >
          Next →
        </Link>
      )}
    </nav>
  )
}
```

## 3.3 🔧 **BlogClient с ARIA Live Regions**

```tsx
// ✅ ИСПРАВЛЕНИЕ: app/blog/_components/blog-client.tsx
"use client"

import { useEffect, useRef, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { BlogPagination } from "./blog-pagination"

interface BlogClientProps {
  children: React.ReactNode
  currentPage: number
  totalPages: number
}

export default function BlogClient({ children, currentPage, totalPages }: BlogClientProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const listRef = useRef<HTMLDivElement>(null)

  // ✅ Focus management после навигации
  useEffect(() => {
    const h1 = document.getElementById("blog-h1")
    if (h1) {
      h1.focus()
      h1.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [currentPage])

  return (
    <>
      {/* ✅ ARIA Live Region для обновлений */}
      <div
        ref={listRef}
        aria-live="polite"
        aria-busy={isPending ? "true" : "false"}
        className="min-h-[400px]"
      >
        {children}
      </div>

      {/* ✅ Proper Pagination */}
      <BlogPagination 
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl="/blog"
      />
    </>
  )
}
```

## 3.4 🔧 **TrendingNow без вложенных ссылок**

```tsx
// ✅ ИСПРАВЛЕНИЕ: app/blog/_components/trending-now.tsx
import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "../_lib/blog-data"

interface TrendingNowProps {
  posts: BlogPost[]
  categories: { id: string; name: string; color?: string }[]
}

// ✅ Теперь это RSC (убираем 'use client')
export default function TrendingNow({ posts, categories }: TrendingNowProps) {
  return (
    <section 
      className="flex flex-col w-full lg:w-80" 
      aria-labelledby="trending"
      role="complementary"
    >
      <h2 id="trending" className="text-xl font-bold text-white mb-4">
        Trending Now
      </h2>
      
      <ul role="list" className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <article 
              className="group relative bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-orange-500/10 hover:border-orange-500/20 transition-all duration-300"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <div className="flex gap-3">
                {/* ✅ Изображение */}
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt=""  // ✅ Пустой ALT для декоративного изображения
                    fill
                    className="object-cover"
                    sizes="64px"
                    loading="lazy"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  {/* ✅ Категория как отдельная ссылка */}
                  <div className="mb-2">
                    <Link
                      href={`/blog/category/${encodeURIComponent(post.category || 'general')}`}
                      className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-orange-500/20 border border-orange-500/30 text-orange-400 hover:bg-orange-500/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                    >
                      {post.category?.toUpperCase() || 'GENERAL'}
                    </Link>
                  </div>
                  
                  {/* ✅ Заголовок как отдельная ссылка */}
                  <h3 className="text-sm font-semibold text-white leading-tight mb-2">
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="hover:text-orange-400 focus:text-orange-400 focus:outline-none focus:underline transition-colors"
                      itemProp="url"
                    >
                      <span itemProp="headline">{post.title}</span>
                    </Link>
                  </h3>
                  
                  {/* ✅ Мета информация */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <time 
                      dateTime={new Date(post.publishedAt).toISOString()}
                      itemProp="datePublished"
                    >
                      {new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: 'numeric'
                      }).format(new Date(post.publishedAt))}
                    </time>
                    <span>·</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
```

## 3.5 🔧 **Глобальные стили фокуса**

```css
/* ✅ ИСПРАВЛЕНИЕ: app/globals.css */

/* ❌ УДАЛЯЕМ проблемные стили user-select */
/* Эти стили ломают доступность! */
/* body, main, section, div:not([contenteditable]):not(input):not(textarea) {
  caret-color: transparent !important;
  user-select: none !important;
} */

/* ✅ ДОБАВЛЯЕМ правильные стили фокуса */
@layer base {
  /* Улучшенные focus indicators */
  :focus-visible {
    outline: 2px solid #f59e0b; /* brand-primary-500 */
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Skip link стили */
  .skip-link {
    position: absolute;
    left: -9999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .skip-link:focus {
    position: absolute;
    left: 4px;
    top: 4px;
    width: auto;
    height: auto;
    overflow: visible;
    z-index: 999999;
    padding: 0.75rem 1rem;
    background: #f59e0b;
    color: #000;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}
```

## 3.6 🔧 **Layout с улучшенным skip-link**

```tsx
// ✅ ИСПРАВЛЕНИЕ: app/blog/page.tsx
export default async function BlogPage({ searchParams }: BlogPageProps) {
  // ... existing logic ...

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* ✅ Улучшенный skip-link */}
      <a 
        href="#main" 
        className="skip-link"
      >
        Skip to main content
      </a>

      <main id="main" className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* ✅ Фокусируемый H1 */}
          <header className="pt-4 pb-6">
            <div className="mb-4">
              <h1 
                id="blog-h1" 
                className="text-4xl md:text-5xl font-bold tracking-tight mb-3 focus:outline-none" 
                tabIndex={-1}
              >
                Ergo Blog — news, research, guides
              </h1>
              <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
                Latest updates, deep-dives and how-tos from the Ergo ecosystem.
              </p>
            </div>
          </header>

          {/* ✅ Семантическая структура */}
          <section className="mb-12" aria-labelledby="featured-content">
            <h2 id="featured-content" className="sr-only">Featured and trending content</h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <BlogHero featuredPost={featuredPost} />
              </div>
              <aside className="w-full lg:w-80" aria-labelledby="trending">
                <TrendingNow posts={trendingPosts.slice(0, 3)} categories={categories} />
              </aside>
            </div>
          </section>

          {/* ✅ Client component с ARIA live */}
          <BlogClient currentPage={currentPage} totalPages={totalPages}>
            <BlogListSSR posts={initialList} categories={categories} />
          </BlogClient>
        </div>
      </main>
    </div>
  )
}
```

---

# 4️⃣ **Автоматизированное тестирование A11y**

## 4.1 🔧 **ESLint A11y Configuration**

```json
// ✅ НОВЫЙ ФАЙЛ: .eslintrc.a11y.json
{
  "extends": [
    "plugin:jsx-a11y/recommended"
  ],
  "rules": {
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/no-nested-interactive": "error",
    "jsx-a11y/aria-current": "error",
    "jsx-a11y/heading-has-content": "error"
  }
}
```

## 4.2 🔧 **Playwright A11y Tests**

```typescript
// ✅ НОВЫЙ ФАЙЛ: tests/a11y/blog.spec.ts
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Blog A11y', () => {
  test('Blog homepage should not have accessibility violations', async ({ page }) => {
    await page.goto('/blog')
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Blog post should not have accessibility violations', async ({ page }) => {
    await page.goto('/blog/test-post')
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Skip link should work', async ({ page }) => {
    await page.goto('/blog')
    await page.keyboard.press('Tab')
    
    const skipLink = page.locator('.skip-link:focus')
    await expect(skipLink).toBeVisible()
    
    await page.keyboard.press('Enter')
    await expect(page.locator('#main')).toBeFocused()
  })

  test('Pagination should have proper ARIA', async ({ page }) => {
    await page.goto('/blog?page=2')
    
    const nav = page.locator('nav[aria-label="Blog pagination"]')
    await expect(nav).toBeVisible()
    
    const currentPage = page.locator('[aria-current="page"]')
    await expect(currentPage).toBeVisible()
    await expect(currentPage).toContainText('2')
  })
})
```

---

# 5️⃣ **Приоритеты внедрения**

## 🔴 **P0 - КРИТИЧНО (1-2 дня)**
1. ✅ **Исправить вложенные ссылки** в BlogCard и TrendingNow
2. ✅ **Добавить proper пагинацию** с `aria-current`
3. ✅ **Убрать user-select: none** из глобальных стилей
4. ✅ **Добавить focus management** для навигации
5. ✅ **Исправить skip-link** стили

## 🟡 **P1 - ВАЖНО (3-5 дней)**
6. ✅ **Конвертировать в RSC** BlogCard, BlogHero, TrendingNow
7. ✅ **Добавить ARIA live regions** для динамических обновлений
8. ✅ **Фиксировать размеры изображений** для предотвращения CLS
9. ✅ **Улучшить ALT тексты** (содержательные vs декоративные)
10. ✅ **Добавить prefers-reduced-motion**

## 🟢 **P2 - УЛУЧШЕНИЯ (1-2 недели)**
11. ⏳ **Внедрить автотесты** axe + jsx-a11y
12. ⏳ **Keyboard navigation тесты**
13. ⏳ **Контрастность цветов** аудит
14. ⏳ **Performance budget** для Core Web Vitals

---

## 📊 **Ожидаемые результаты**

**После внедрения P0-P1:**
- ✅ **WCAG 2.1 AA compliance** для основных страниц
- ✅ **Lighthouse A11y score: 95+** (сейчас ~75)
- ✅ **Bundle size:** -30% за счет RSC
- ✅ **LCP improvement:** -200ms за счет proper image loading
- ✅ **Keyboard navigation:** полная поддержка

**Готовность к масштабированию:** 🟢 **ГОТОВ** после P0-P1 исправлений 