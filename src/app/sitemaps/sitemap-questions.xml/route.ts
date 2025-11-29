import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/site-config'
import { questions } from '@/data/questions'

export async function GET() {
  const baseUrl = siteConfig.siteUrl
  
  // Hub page
  const hubPage = {
    url: '/questions',
    priority: 0.9,
    changefreq: 'daily'
  }
  
  // Individual question pages - sorted by priority
  const questionPages = questions
    .sort((a, b) => a.priority - b.priority)
    .map(question => ({
      url: `/questions/${question.slug}`,
      priority: question.priority === 1 ? 0.8 : question.priority === 2 ? 0.7 : 0.6,
      changefreq: 'weekly',
      lastmod: question.updatedDate || question.publishDate
    }))

  const allPages = [hubPage, ...questionPages]

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

