import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/site-config'
import { infographics } from '@/data/infographics'

export async function GET() {
  const baseUrl = siteConfig.siteUrl
  
  // Hub page
  const hubPage = {
    url: '/infographics',
    priority: 0.8,
    changefreq: 'weekly'
  }
  
  // Individual infographic pages
  const infographicPages = infographics.map(infographic => ({
    url: `/infographics/${infographic.slug}`,
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: infographic.publishDate || new Date().toISOString()
  }))

  const allPages = [hubPage, ...infographicPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages.map((page, index) => {
  const infographic = index > 0 ? infographics[index - 1] : null
  const imageTag = infographic ? `
    <image:image>
      <image:loc>${baseUrl}${infographic.fullImageUrl}</image:loc>
      <image:title>${escapeXml(infographic.title)}</image:title>
      <image:caption>${escapeXml(infographic.shortDescription)}</image:caption>
    </image:image>` : ''
  
  return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${'lastmod' in page ? page.lastmod : new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${imageTag}
  </url>`
}).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}

// Helper function to escape XML special characters
function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

