import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://ergoblockchain.org'
  const currentDate = new Date().toISOString()
  
  const technologyPages = [
    { url: '/technology', priority: 0.9, changeFreq: 'weekly' },
    { url: '/technology/ergoscript', priority: 0.8, changeFreq: 'monthly' },
    { url: '/technology/eutxo', priority: 0.8, changeFreq: 'monthly' },
    { url: '/technology/eutxo-model', priority: 0.8, changeFreq: 'monthly' },
    { url: '/technology/nipopows', priority: 0.8, changeFreq: 'monthly' },
    { url: '/technology/privacy-features', priority: 0.8, changeFreq: 'monthly' },
    { url: '/technology/secure-pow', priority: 0.8, changeFreq: 'monthly' },
    { url: '/technology/storage-rent', priority: 0.8, changeFreq: 'monthly' },
    { url: '/technology/subblocks', priority: 0.8, changeFreq: 'monthly' },
    { url: '/technology/native-tokens', priority: 0.8, changeFreq: 'monthly' },
    { url: '/technology/oracle-pools', priority: 0.8, changeFreq: 'monthly' },
    { url: '/technology/velvet-forks', priority: 0.8, changeFreq: 'monthly' },
    { url: '/technology/adaptive-emission', priority: 0.8, changeFreq: 'monthly' },
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${technologyPages.map(page => `  <url>
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