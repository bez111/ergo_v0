import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/site-config'

export async function GET() {
  const baseUrl = siteConfig.siteUrl
  
  // Ecosystem projects and tools
  const ecosystemPages = [
    { url: '/ecosystem/spectrum', priority: 0.7, changefreq: 'weekly' },
    { url: '/ecosystem/sigmausd', priority: 0.7, changefreq: 'weekly' },
    { url: '/ecosystem/rosen-bridge', priority: 0.7, changefreq: 'weekly' },
    { url: '/ecosystem/ergomixer', priority: 0.7, changefreq: 'weekly' },
    { url: '/ecosystem/paideia', priority: 0.7, changefreq: 'weekly' },
    { url: '/ecosystem/duckpools', priority: 0.7, changefreq: 'weekly' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ecosystemPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
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
