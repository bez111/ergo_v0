import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/site-config'
import { topics } from '@/data/topics'

export async function GET() {
  const baseUrl = siteConfig.siteUrl
  
  // Hub page
  const hubPage = {
    url: '/topics',
    priority: 0.9,
    changefreq: 'daily',
    lastmod: new Date().toISOString()
  }
  
  // Individual topic pages - these are pillar pages, high priority
  const topicPages = topics.map(topic => ({
    url: `/topics/${topic.slug}`,
    priority: 0.9, // High priority - pillar pages
    changefreq: 'weekly',
    lastmod: topic.updatedDate || topic.publishDate
  }))

  const allPages = [hubPage, ...topicPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
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

