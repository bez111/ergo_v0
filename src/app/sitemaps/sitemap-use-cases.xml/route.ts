import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://ergoblockchain.org'
  const currentDate = new Date().toISOString()
  
  const useCasePages = [
    { url: '/use', priority: 0.9, changeFreq: 'weekly' },
    // New short URLs (primary)
    { url: '/use/stablecoins', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/privacy', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/bridges', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/daos', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/nfts', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/oracles', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/identity', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/gaming', priority: 0.8, changeFreq: 'monthly' },
    // Other use pages
    { url: '/use/get-erg', priority: 0.7, changeFreq: 'weekly' },
    { url: '/use/babel-fees', priority: 0.7, changeFreq: 'monthly' },
    { url: '/use/guides', priority: 0.7, changeFreq: 'monthly' },
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${useCasePages.map(page => `  <url>
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