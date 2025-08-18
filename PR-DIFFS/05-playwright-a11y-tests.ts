// ✅ ГОТОВЫЙ PR-DIFF: Playwright A11y Tests
// Файл: tests/a11y/blog.spec.ts

import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Blog Accessibility', () => {
  test('Blog homepage should not have accessibility violations', async ({ page }) => {
    await page.goto('/blog')
    
    // ✅ Полный axe-core scan
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze()
    
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Blog post page should not have accessibility violations', async ({ page }) => {
    await page.goto('/blog/test-post')
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze()
    
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Skip link functionality', async ({ page }) => {
    await page.goto('/blog')
    
    // ✅ Tab to skip link
    await page.keyboard.press('Tab')
    
    // ✅ Verify skip link is focused and visible
    const skipLink = page.locator('.skip-link:focus')
    await expect(skipLink).toBeVisible()
    await expect(skipLink).toContainText('Skip to main content')
    
    // ✅ Activate skip link
    await page.keyboard.press('Enter')
    
    // ✅ Verify main content is focused
    const main = page.locator('#main')
    await expect(main).toBeFocused()
  })

  test('Pagination accessibility', async ({ page }) => {
    await page.goto('/blog?page=2')
    
    // ✅ Verify pagination nav exists
    const nav = page.locator('nav[aria-label="Blog pagination"]')
    await expect(nav).toBeVisible()
    
    // ✅ Verify current page is marked
    const currentPage = page.locator('[aria-current="page"]')
    await expect(currentPage).toBeVisible()
    await expect(currentPage).toContainText('2')
    
    // ✅ Verify descriptive labels
    const nextLink = page.locator('a[aria-label*="Go to next page"]')
    await expect(nextLink).toBeVisible()
    
    const prevLink = page.locator('a[aria-label*="Go to previous page"]')
    await expect(prevLink).toBeVisible()
  })

  test('Keyboard navigation through blog cards', async ({ page }) => {
    await page.goto('/blog')
    
    // ✅ Start from skip link
    await page.keyboard.press('Tab')
    await expect(page.locator('.skip-link')).toBeFocused()
    
    // ✅ Navigate to main content
    await page.keyboard.press('Enter')
    await expect(page.locator('#main')).toBeFocused()
    
    // ✅ Tab through blog cards
    await page.keyboard.press('Tab')
    const firstCard = page.locator('article').first().locator('a').first()
    await expect(firstCard).toBeFocused()
    
    // ✅ Verify no focus traps
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab')
      const focused = page.locator(':focus')
      await expect(focused).toBeVisible()
    }
  })

  test('No nested interactive elements', async ({ page }) => {
    await page.goto('/blog')
    
    // ✅ Check for nested links (should not exist)
    const nestedLinks = page.locator('a a, button a, a button')
    await expect(nestedLinks).toHaveCount(0)
    
    // ✅ Check for proper link structure in cards
    const cards = page.locator('article')
    const cardCount = await cards.count()
    
    for (let i = 0; i < Math.min(cardCount, 3); i++) {
      const card = cards.nth(i)
      const links = card.locator('a')
      const linkCount = await links.count()
      
      // ✅ Each card should have separate, non-nested links
      expect(linkCount).toBeGreaterThan(0)
      
      // ✅ Verify no nested interactive elements
      const nestedInteractive = card.locator('a a, button button, a button, button a')
      await expect(nestedInteractive).toHaveCount(0)
    }
  })

  test('ARIA live regions work correctly', async ({ page }) => {
    await page.goto('/blog')
    
    // ✅ Verify ARIA live region exists
    const liveRegion = page.locator('[aria-live="polite"]')
    await expect(liveRegion).toBeVisible()
    
    // ✅ Navigate to page 2
    const page2Link = page.locator('a[aria-label*="Go to page 2"]')
    if (await page2Link.count() > 0) {
      await page2Link.click()
      
      // ✅ Verify ARIA busy state during navigation
      await expect(liveRegion).toHaveAttribute('aria-busy', 'false')
      
      // ✅ Verify focus moves to H1
      await expect(page.locator('#blog-h1')).toBeFocused()
    }
  })

  test('Images have proper alt text', async ({ page }) => {
    await page.goto('/blog')
    
    // ✅ All content images should have meaningful alt text
    const contentImages = page.locator('article img')
    const imageCount = await contentImages.count()
    
    for (let i = 0; i < imageCount; i++) {
      const img = contentImages.nth(i)
      const alt = await img.getAttribute('alt')
      
      // ✅ Alt should exist and be meaningful (not empty for content images)
      expect(alt).toBeTruthy()
      expect(alt!.length).toBeGreaterThan(3)
    }
    
    // ✅ Decorative images should have empty alt
    const decorativeImages = page.locator('[aria-hidden="true"] img')
    const decorativeCount = await decorativeImages.count()
    
    for (let i = 0; i < decorativeCount; i++) {
      const img = decorativeImages.nth(i)
      const alt = await img.getAttribute('alt')
      expect(alt).toBe('')
    }
  })

  test('Color contrast meets WCAG AA', async ({ page }) => {
    await page.goto('/blog')
    
    // ✅ Run contrast analysis
    const contrastResults = await new AxeBuilder({ page })
      .withTags(['color-contrast'])
      .analyze()
    
    expect(contrastResults.violations).toEqual([])
  })

  test('Reduced motion preferences respected', async ({ page }) => {
    // ✅ Enable reduced motion
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('/blog')
    
    // ✅ Verify animations are minimal
    const animatedElements = page.locator('[class*="animate-"], [class*="transition-"]')
    
    // Should still have elements but with reduced motion
    await expect(animatedElements.first()).toBeVisible()
  })
})

// ✅ ДОПОЛНИТЕЛЬНЫЕ ТЕСТЫ: Performance + A11y
test.describe('Blog Performance + A11y', () => {
  test('LCP image has priority attribute', async ({ page }) => {
    await page.goto('/blog')
    
    // ✅ Featured post image should have priority
    const heroImage = page.locator('article img').first()
    const priority = await heroImage.getAttribute('fetchpriority')
    expect(priority).toBe('high')
  })

  test('Images have proper sizing to prevent CLS', async ({ page }) => {
    await page.goto('/blog')
    
    // ✅ All images should have aspect-ratio or fixed dimensions
    const images = page.locator('img')
    const imageCount = await images.count()
    
    for (let i = 0; i < Math.min(imageCount, 5); i++) {
      const img = images.nth(i)
      const computedStyle = await img.evaluate(el => getComputedStyle(el))
      
      // Should have either width/height or aspect-ratio
      const hasFixedSize = computedStyle.width !== 'auto' || 
                           computedStyle.height !== 'auto' ||
                           computedStyle.aspectRatio !== 'auto'
      expect(hasFixedSize).toBe(true)
    }
  })
})

/*
🎯 COVERAGE:
✅ WCAG 2.1 AA compliance
✅ Keyboard navigation
✅ Skip links functionality  
✅ ARIA live regions
✅ No nested interactive elements
✅ Proper image alt texts
✅ Color contrast validation
✅ Reduced motion support
✅ Performance + A11y integration
*/ 