// Sitemap utilities for multilingual support
import { siteConfig } from '@/config/site-config'
import { shouldNoIndex } from '@/lib/seo/noindex-config'

// Active locales for sitemaps — must match i18n/request.ts
export const sitemapLocales = [
  'en', 'ru', 'zh-cn', 'zh-tw',
  'tr', 'ko-kr', 'es', 'pt-br',
  'ja', 'de', 'fr', 'it'
] as const
export type SitemapLocale = typeof sitemapLocales[number]

const BASE_URL = siteConfig.siteUrl

interface PageConfig {
  url: string
  priority?: number
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  lastmod?: string
}

/**
 * Get full URL with locale prefix
 */
export function getLocalizedUrl(path: string, locale: SitemapLocale): string {
  if (locale === 'en') {
    return `${BASE_URL}${path}`
  }
  return `${BASE_URL}/${locale}${path}`
}

/**
 * Generate xhtml:link elements for hreflang
 */
function generateHreflangLinks(path: string): string {
  const links = sitemapLocales.map(locale => {
    const href = getLocalizedUrl(path, locale)
    const hreflang = locale === 'en' ? 'en' : locale
    return `      <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`
  })
  
  // Add x-default pointing to English version
  links.push(`      <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${path}"/>`)
  
  return links.join('\n')
}

/**
 * Generate a single URL entry with all localized versions
 */
export function generateMultilingualUrlEntry(page: PageConfig): string {
  const entries: string[] = []
  const lastmod = page.lastmod || new Date().toISOString()
  const priority = page.priority ?? 0.8
  const changefreq = page.changefreq ?? 'weekly'
  
  for (const locale of sitemapLocales) {
    const loc = getLocalizedUrl(page.url, locale)
    entries.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${generateHreflangLinks(page.url)}
  </url>`)
  }
  
  return entries.join('\n')
}

/**
 * Generate complete sitemap XML with multilingual support
 */
export function generateMultilingualSitemap(pages: PageConfig[]): string {
  const urlEntries = pages.map(page => generateMultilingualUrlEntry(page)).join('\n')
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`
}

/**
 * Standard headers for sitemap responses
 */
export const sitemapHeaders = {
  'Content-Type': 'application/xml',
  'Cache-Control': 'public, max-age=3600, s-maxage=3600'
}

/**
 * Escape XML special characters
 */
export function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

interface ImageConfig {
  loc: string
  title: string
  caption?: string
}

interface PageWithImage extends PageConfig {
  image?: ImageConfig
}

/**
 * Generate URL entry with image support and multilingual hreflang
 */
export function generateMultilingualImageUrlEntry(page: PageWithImage): string {
  const entries: string[] = []
  const lastmod = page.lastmod || new Date().toISOString()
  const priority = page.priority ?? 0.8
  const changefreq = page.changefreq ?? 'weekly'
  
  for (const locale of sitemapLocales) {
    const loc = getLocalizedUrl(page.url, locale)
    const imageTag = page.image ? `
    <image:image>
      <image:loc>${BASE_URL}${page.image.loc}</image:loc>
      <image:title>${escapeXml(page.image.title)}</image:title>${page.image.caption ? `
      <image:caption>${escapeXml(page.image.caption)}</image:caption>` : ''}
    </image:image>` : ''
    
    entries.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${generateHreflangLinks(page.url)}${imageTag}
  </url>`)
  }
  
  return entries.join('\n')
}

/**
 * Generate sitemap with image support
 */
export function generateMultilingualImageSitemap(pages: PageWithImage[]): string {
  const urlEntries = pages.map(page => generateMultilingualImageUrlEntry(page)).join('\n')
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`
}

interface BlogPostConfig {
  url: string
  title: string
  date: string
  lastmod?: string
  priority?: number
}

/**
 * Generate blog sitemap with News schema and multilingual support
 */
export function generateMultilingualBlogSitemap(posts: BlogPostConfig[]): string {
  const entries: string[] = []
  
  for (const post of posts) {
    for (const locale of sitemapLocales) {
      const loc = getLocalizedUrl(post.url, locale)
      const newsLang = locale === 'en' ? 'en' : locale
      
      entries.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${post.lastmod || post.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${post.priority ?? 0.8}</priority>
${generateHreflangLinks(post.url)}
    <news:news>
      <news:publication>
        <news:name>Ergo Platform</news:name>
        <news:language>${newsLang}</news:language>
      </news:publication>
      <news:publication_date>${post.date}</news:publication_date>
      <news:title>${escapeXml(post.title)}</news:title>
    </news:news>
  </url>`)
    }
  }
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${entries.join('\n')}
</urlset>`
}

/**
 * Filter out pages that should not be indexed (noindex)
 * Use this before generating sitemaps to exclude deep/technical pages
 */
export function filterIndexablePages<T extends { url: string }>(pages: T[]): T[] {
  return pages.filter(page => !shouldNoIndex(page.url))
}

/**
 * Generate sitemap with automatic noindex filtering
 */
export function generateFilteredMultilingualSitemap(pages: PageConfig[]): string {
  const indexablePages = filterIndexablePages(pages)
  return generateMultilingualSitemap(indexablePages)
}
