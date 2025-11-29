import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/site-config'
import { glossaryTerms } from '@/data/glossary'

export async function GET() {
  const baseUrl = siteConfig.siteUrl
  
  // Hub page
  const hubPage = {
    url: '/learn/glossary',
    priority: 0.8,
    changefreq: 'weekly'
  }
  
  // Individual glossary term pages
  const termPages = glossaryTerms.map(term => ({
    url: `/learn/glossary/${term.slug}`,
    priority: 0.6,
    changefreq: 'monthly',
    lastmod: term.updatedDate || term.publishDate || new Date().toISOString()
  }))

  const allPages = [hubPage, ...termPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${'lastmod' in page ? page.lastmod : new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}

