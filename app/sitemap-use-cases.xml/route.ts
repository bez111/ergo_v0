import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://ergoblockchain.org'
  const currentDate = new Date().toISOString()
  
  const useCasePages = [
    { url: '/use', priority: 0.9, changeFreq: 'weekly' },
    { url: '/use/use-cases/algorithmic-stablecoins', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/use-cases/privacy-confidentiality', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/use-cases/cross-chain-bridges', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/use-cases/daos-alternative-economies', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/use-cases/nfts-digital-assets', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/use-cases/oracles-data-feeds', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/use-cases/identity-reputation', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/use-cases/gaming-metaverse', priority: 0.8, changeFreq: 'monthly' },
    { url: '/use/get-erg', priority: 0.7, changeFreq: 'weekly' },
    { url: '/use/mining', priority: 0.7, changeFreq: 'weekly' },
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