import { test, expect } from '@playwright/test'

test.describe('Critical Smoke Paths', () => {
  test('homepage loads with primary navigation and footer', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('h1')).toBeVisible()
    await expect(page.getByRole('navigation', { name: 'Main' })).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()

    for (const label of ['Build', 'Start', 'Use', 'Ecosystem', 'Technology', 'Learn', 'Docs', 'Blog']) {
      await expect(page.getByRole('banner').getByText(label, { exact: true })).toBeVisible()
    }
  })

  test('blog exposes the Agent Economy Manifesto as the featured article', async ({ page }) => {
    await page.goto('/blog')

    await expect(page.getByRole('heading', { name: /Ergo Blog/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /The Agent Economy Manifesto/i }).first()).toHaveAttribute(
      'href',
      '/blog/agent-economy-manifesto',
    )
  })

  test('agent economy page links to the Accord Protocol repository', async ({ page }) => {
    await page.goto('/agent-economy')

    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('a[href="https://github.com/accord-protocol/accord-protocol"]').first()).toBeVisible()
  })

  test('quickstart uses the new Accord Protocol clone target', async ({ page }) => {
    await page.goto('/build/quickstart')

    await expect(page.locator('body')).toContainText('github.com/accord-protocol/accord-protocol')
  })

  test('developer page references Accord Protocol, not the legacy repo name', async ({ page }) => {
    await page.goto('/developers')

    await expect(page.locator('body')).toContainText('accord-protocol')
    await expect(page.locator('a[href="https://github.com/accord-protocol/accord-protocol"]').first()).toBeVisible()
    await expect(page.locator('a[href*="bez111/ergo-agent-economy"]')).toHaveCount(0)
  })

  test('robots and sitemap are accessible', async ({ page }) => {
    const robots = await page.goto('/robots.txt')
    expect(robots?.status()).toBe(200)
    const robotsText = await robots?.text()
    expect(robotsText).toMatch(/User-Agent:/i)
    expect(robotsText).toContain('Sitemap:')

    const sitemap = await page.goto('/sitemap.xml')
    expect(sitemap?.status()).toBe(200)
    const sitemapText = await sitemap?.text()
    expect(sitemapText).toContain('<?xml')
    expect(sitemapText).toContain('<urlset')
  })
})
