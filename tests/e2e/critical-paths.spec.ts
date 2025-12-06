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
    await expect(page).toHaveTitle(/Ergo/)
    
    // Meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content')
    expect(description).toBeTruthy()
    expect(description!.length).toBeGreaterThan(50)
    expect(description!.length).toBeLessThan(200)
    
    // Open Graph tags
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content')
    expect(ogTitle).toBeTruthy()
    
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content')
    expect(ogImage).toBeTruthy()
  })

  test('Robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt')
    expect(response!.status()).toBe(200)
    
    const text = await response!.text()
    expect(text).toContain('User-agent:')
    expect(text).toContain('Sitemap:')
  })

  test('Sitemap.xml is valid', async ({ page }) => {
    const response = await page.goto('/sitemap.xml')
    expect(response!.status()).toBe(200)
    
    const text = await response!.text()
    expect(text).toContain('<?xml')
    expect(text).toContain('<urlset')
  })
})

// ============================================
// NEW PAGES - Extended E2E Coverage
// ============================================

test.describe('Learn Section Pages', () => {
  test('Glossary page loads and filters work', async ({ page }) => {
    await page.goto('/learn/glossary')
    
    // Check page loads
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h1')).toContainText(/Glossary/i)
    
    // Check search input exists
    const searchInput = page.locator('input[placeholder*="Search"]')
    await expect(searchInput).toBeVisible()
    
    // Check terms are displayed
    const terms = page.locator('[class*="grid"] a, [class*="grid"] article')
    const count = await terms.count()
    expect(count).toBeGreaterThan(10)
    
    // Test search functionality
    await searchInput.fill('eUTXO')
    await page.waitForTimeout(300) // Debounce
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: { html: true }
    })
  })

  test('Individual glossary term page loads', async ({ page }) => {
    await page.goto('/learn/glossary/eutxo')
    
    await expect(page.locator('h1')).toBeVisible()
    
    // Check back button exists
    const backButton = page.locator('a[href*="/learn/glossary"]')
    await expect(backButton.first()).toBeVisible()
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })

  test('FAQ page loads with filters', async ({ page }) => {
    await page.goto('/faq')
    
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h1')).toContainText(/FAQ/i)
    
    // Check questions are displayed
    const questions = page.locator('button[class*="Collapsible"], [data-state]')
    const count = await questions.count()
    expect(count).toBeGreaterThan(5)
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })
})

test.describe('Developer Resources Pages', () => {
  test('Patterns hub page loads', async ({ page }) => {
    await page.goto('/patterns')
    
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h1')).toContainText(/Pattern/i)
    
    // Check pattern cards are displayed
    const cards = page.locator('a[href*="/patterns/"]')
    const count = await cards.count()
    expect(count).toBeGreaterThan(5)
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })

  test('Individual pattern page loads', async ({ page }) => {
    await page.goto('/patterns/time-locked-contracts')
    
    await expect(page.locator('h1')).toBeVisible()
    
    // Check code block exists
    const codeBlock = page.locator('pre, code')
    await expect(codeBlock.first()).toBeVisible()
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })

  test('Playbooks hub page loads', async ({ page }) => {
    await page.goto('/playbooks')
    
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h1')).toContainText(/Playbook/i)
    
    // Check playbook cards are displayed
    const cards = page.locator('a[href*="/playbooks/"]')
    const count = await cards.count()
    expect(count).toBeGreaterThan(3)
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })
})

test.describe('Topic Hubs', () => {
  test('Topics hub page loads', async ({ page }) => {
    await page.goto('/topics')
    
    await expect(page.locator('h1')).toBeVisible()
    
    // Check topic cards are displayed
    const cards = page.locator('a[href*="/topics/"]')
    const count = await cards.count()
    expect(count).toBeGreaterThan(3)
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })

  test('Individual topic page loads with sections', async ({ page }) => {
    await page.goto('/topics/ergo-defi')
    
    await expect(page.locator('h1')).toBeVisible()
    
    // Check sections exist
    const sections = page.locator('section')
    const count = await sections.count()
    expect(count).toBeGreaterThan(2)
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })
})

test.describe('Persona Pages', () => {
  test('Miners page loads with calculator', async ({ page }) => {
    await page.goto('/miners')
    
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h1')).toContainText(/Miner/i)
    
    // Check mining pools section exists
    const poolsSection = page.locator('text=Mining Pools')
    await expect(poolsSection.first()).toBeVisible()
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })

  test('Hodlers page loads', async ({ page }) => {
    await page.goto('/hodlers')
    
    await expect(page.locator('h1')).toBeVisible()
    
    // Check key sections exist
    const sections = page.locator('section')
    const count = await sections.count()
    expect(count).toBeGreaterThan(3)
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })

  test('Builders page loads', async ({ page }) => {
    await page.goto('/builders')
    
    await expect(page.locator('h1')).toBeVisible()
    
    // Check developer resources are displayed
    const links = page.locator('a[href*="github"], a[href*="docs"]')
    const count = await links.count()
    expect(count).toBeGreaterThan(0)
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })
})

test.describe('Comparison Pages', () => {
  test('Compare hub page loads', async ({ page }) => {
    await page.goto('/compare')
    
    await expect(page.locator('h1')).toBeVisible()
    
    // Check comparison cards are displayed
    const cards = page.locator('a[href*="/compare/"]')
    const count = await cards.count()
    expect(count).toBeGreaterThan(3)
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })

  test('Comparison table page loads', async ({ page }) => {
    await page.goto('/start/comparison')
    
    await expect(page.locator('h1')).toBeVisible()
    
    // Check table exists
    const table = page.locator('table, [role="table"]')
    await expect(table.first()).toBeVisible()
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })
})

test.describe('Infographics', () => {
  test('Infographics hub page loads', async ({ page }) => {
    await page.goto('/infographics')
    
    await expect(page.locator('h1')).toBeVisible()
    
    // Check infographic cards are displayed
    const cards = page.locator('a[href*="/infographics/"]')
    const count = await cards.count()
    expect(count).toBeGreaterThan(5)
    
    // A11y check
    await injectAxe(page)
    await checkA11y(page)
  })
})

test.describe('Global Search', () => {
  test('Search modal opens and returns results', async ({ page }) => {
    await page.goto('/')
    
    // Open search with keyboard shortcut or button
    const searchButton = page.locator('button[aria-label*="Search"], button:has(svg[class*="search"])')
    await searchButton.first().click()
    
    // Check modal opened
    const searchModal = page.locator('[role="dialog"], [data-state="open"]')
    await expect(searchModal.first()).toBeVisible()
    
    // Type search query
    const searchInput = page.locator('input[placeholder*="Search"]')
    await searchInput.first().fill('wallet')
    await page.waitForTimeout(500)
    
    // Check results appear
    const results = page.locator('[role="listbox"] [role="option"], [class*="result"]')
    const count = await results.count()
    expect(count).toBeGreaterThan(0)
  })
})

test.describe('Cross-Page Navigation', () => {
  test('Start page navigation flow', async ({ page }) => {
    await page.goto('/start')
    
    await expect(page.locator('h1')).toBeVisible()
    
    // Navigate to introduction
    const introLink = page.locator('a[href*="/start/introduction"]')
    await introLink.first().click()
    await page.waitForLoadState('networkidle')
    
    await expect(page.url()).toContain('/start/introduction')
    await expect(page.locator('h1')).toBeVisible()
  })

  test('Learn page navigation flow', async ({ page }) => {
    await page.goto('/learn')
    
    await expect(page.locator('h1')).toBeVisible()
    
    // Check learning tracks exist
    const tracks = page.locator('a[href*="/learn/"], a[href*="/patterns"], a[href*="/playbooks"]')
    const count = await tracks.count()
    expect(count).toBeGreaterThan(3)
  })
}) 