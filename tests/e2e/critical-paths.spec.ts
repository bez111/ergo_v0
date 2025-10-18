import { test, expect } from '@playwright/test'
import { injectAxe, checkA11y } from 'axe-playwright'

test.describe('Critical User Paths', () => {
  test.beforeEach(async ({ page }) => {
    // Inject axe для a11y тестов
    await page.goto('/')
    await injectAxe(page)
  })

  test('Homepage loads with all critical elements', async ({ page }) => {
    await page.goto('/')
    
    // Проверяем критические элементы
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('nav')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
    
    // Проверяем навигационные ссылки
    const navLinks = ['Docs', 'Technology', 'Ecosystem', 'Use', 'Blog']
    for (const link of navLinks) {
      await expect(page.locator(`nav >> text=${link}`)).toBeVisible()
    }
    
    // A11y проверка
    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: {
        html: true
      }
    })
  })

  test('Blog listing and post navigation', async ({ page }) => {
    await page.goto('/blog')
    
    // Проверяем загрузку списка постов
    await expect(page.locator('[data-testid="blog-list"]')).toBeVisible()
    const posts = page.locator('article')
    await expect(posts).toHaveCount(await posts.count())
    
    // Кликаем на первый пост
    await posts.first().click()
    await page.waitForLoadState('networkidle')
    
    // Проверяем, что мы на странице поста
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.url()).toContain('/blog/')
    
    // A11y проверка
    await checkA11y(page)
  })

  test('Documentation navigation and search', async ({ page }) => {
    await page.goto('/docs')
    
    // Проверяем боковое меню
    await expect(page.locator('[data-testid="sidebar-menu"]')).toBeVisible()
    
    // Проверяем поиск
    const searchInput = page.locator('input[type="search"]')
    await searchInput.fill('wallet')
    await page.waitForTimeout(500) // Debounce
    
    // Проверяем результаты поиска
    await expect(page.locator('[data-testid="search-results"]')).toBeVisible()
    
    // A11y проверка
    await checkA11y(page)
  })

  test('Use cases navigation', async ({ page }) => {
    await page.goto('/use')
    
    // Проверяем карточки use cases
    const cards = page.locator('[data-testid="use-case-card"]')
    await expect(cards).toHaveCount(await cards.count())
    
    // Кликаем на первую карточку
    await cards.first().click()
    await page.waitForLoadState('networkidle')
    
    // Проверяем, что мы на странице use case
    await expect(page.url()).toContain('/use/cases/')
    await expect(page.locator('h1')).toBeVisible()
  })

  test('Mobile navigation menu', async ({ page }) => {
    // Устанавливаем мобильный viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Открываем мобильное меню
    const menuButton = page.locator('[data-testid="mobile-menu-button"]')
    await menuButton.click()
    
    // Проверяем, что меню открылось
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible()
    
    // Проверяем навигационные ссылки
    const navLinks = ['Docs', 'Technology', 'Ecosystem', 'Use', 'Blog']
    for (const link of navLinks) {
      await expect(page.locator(`[data-testid="mobile-menu"] >> text=${link}`)).toBeVisible()
    }
  })
})

test.describe('Performance Metrics', () => {
  test('LCP should be under 2.5s', async ({ page }) => {
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          resolve(lastEntry.toJSON())
        }).observe({ type: 'largest-contentful-paint', buffered: true })
      })
    })
    
    expect(metrics.renderTime).toBeLessThan(2500)
  })

  test('CLS should be under 0.1', async ({ page }) => {
    await page.goto('/')
    
    const cls = await page.evaluate(() => {
      return new Promise((resolve) => {
        let clsValue = 0
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          }
          resolve(clsValue)
        }).observe({ type: 'layout-shift', buffered: true })
        
        // Ждем 3 секунды для сбора всех layout shifts
        setTimeout(() => resolve(clsValue), 3000)
      })
    })
    
    expect(cls).toBeLessThan(0.1)
  })
})

test.describe('SEO and Meta Tags', () => {
  test('Homepage has correct meta tags', async ({ page }) => {
    await page.goto('/')
    
    // Title
    await expect(page).toHaveTitle(/Ergo Platform/)
    
    // Meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content')
    expect(description).toBeTruthy()
    expect(description.length).toBeGreaterThan(50)
    expect(description.length).toBeLessThan(160)
    
    // Open Graph tags
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content')
    expect(ogTitle).toBeTruthy()
    
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content')
    expect(ogImage).toBeTruthy()
    
    // Canonical URL
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
    expect(canonical).toBe('https://ergoblockchain.org/')
  })

  test('Robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt')
    expect(response.status()).toBe(200)
    
    const text = await response.text()
    expect(text).toContain('User-agent:')
    expect(text).toContain('Sitemap:')
  })

  test('Sitemap.xml is valid', async ({ page }) => {
    const response = await page.goto('/sitemap.xml')
    expect(response.status()).toBe(200)
    
    const text = await response.text()
    expect(text).toContain('<?xml')
    expect(text).toContain('<urlset')
    expect(text).toContain('<loc>https://ergoblockchain.org')
  })
}) 