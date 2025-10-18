import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://ergoblockchain.org'
  const currentDate = new Date().toISOString()
  
  const staticPages = [
    { url: '/', priority: 1.0, changeFreq: 'daily' },
    { url: '/ecosystem', priority: 0.9, changeFreq: 'weekly' },
    { url: '/technology', priority: 0.9, changeFreq: 'weekly' },
    { url: '/use', priority: 0.9, changeFreq: 'weekly' },
    { url: '/wallet', priority: 0.8, changeFreq: 'weekly' },
    { url: '/start', priority: 0.8, changeFreq: 'weekly' },
    { url: '/learn', priority: 0.8, changeFreq: 'weekly' },
    { url: '/events', priority: 0.7, changeFreq: 'weekly' },
    { url: '/start/introduction', priority: 0.7, changeFreq: 'monthly' },
    { url: '/start/community', priority: 0.7, changeFreq: 'monthly' },
    { url: '/start/comparison', priority: 0.7, changeFreq: 'monthly' },
    { url: '/start/faq', priority: 0.7, changeFreq: 'monthly' },
    { url: '/ecosystem/grants', priority: 0.7, changeFreq: 'weekly' },
    { url: '/ecosystem/map', priority: 0.7, changeFreq: 'weekly' },
    { url: '/ecosystem/mining', priority: 0.7, changeFreq: 'weekly' },
    { url: '/learn/ergoscript', priority: 0.7, changeFreq: 'monthly' },
    { url: '/learn/faq', priority: 0.7, changeFreq: 'monthly' },
    { url: '/learn/research', priority: 0.7, changeFreq: 'monthly' },
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
} 