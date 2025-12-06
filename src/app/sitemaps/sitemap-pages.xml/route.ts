import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/site-config'

export async function GET() {
  const baseUrl = siteConfig.siteUrl

  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/use', priority: 0.9, changefreq: 'weekly' },
    { url: '/miners', priority: 0.9, changefreq: 'weekly' },
    { url: '/hodlers', priority: 0.9, changefreq: 'weekly' },
    { url: '/builders', priority: 0.9, changefreq: 'weekly' },
    { url: '/technology', priority: 0.9, changefreq: 'weekly' },
    { url: '/technology/privacy-features', priority: 0.8, changefreq: 'weekly' },
    { url: '/technology/ergoscript', priority: 0.8, changefreq: 'weekly' },
    { url: '/technology/eutxo-model', priority: 0.8, changefreq: 'weekly' },
    { url: '/technology/nipopows', priority: 0.8, changefreq: 'weekly' },
    { url: '/technology/storage-rent', priority: 0.8, changefreq: 'weekly' },
    { url: '/technology/oracle-pools', priority: 0.8, changefreq: 'weekly' },
    { url: '/technology/native-tokens', priority: 0.8, changefreq: 'weekly' },
    { url: '/technology/secure-pow', priority: 0.8, changefreq: 'weekly' },
    { url: '/technology/babel-fees', priority: 0.8, changefreq: 'weekly' },
    { url: '/technology/subblocks', priority: 0.8, changefreq: 'weekly' },
    { url: '/technology/velvet-forks', priority: 0.8, changefreq: 'weekly' },
    { url: '/technology/adaptive-emission', priority: 0.8, changefreq: 'weekly' },
    { url: '/ecosystem', priority: 0.8, changefreq: 'weekly' },
    { url: '/blog', priority: 0.9, changefreq: 'daily' },
    { url: '/learn', priority: 0.7, changefreq: 'weekly' },
    { url: '/learn/glossary', priority: 0.8, changefreq: 'weekly' },
    { url: '/start', priority: 0.7, changefreq: 'weekly' },
    { url: '/start/introduction', priority: 0.6, changefreq: 'monthly' },
    { url: '/docs', priority: 0.6, changefreq: 'weekly' },
    { url: '/wallet', priority: 0.8, changefreq: 'weekly' },
    { url: '/start/community', priority: 0.7, changefreq: 'monthly' },
    { url: '/start/comparison', priority: 0.7, changefreq: 'monthly' },
    { url: '/faq', priority: 0.8, changefreq: 'weekly' },
    { url: '/ecosystem/grants', priority: 0.7, changefreq: 'weekly' },
    { url: '/ecosystem/map', priority: 0.7, changefreq: 'weekly' },
    { url: '/miners', priority: 0.8, changefreq: 'weekly' },
    { url: '/learn/ergoscript', priority: 0.7, changefreq: 'monthly' },
    { url: '/learn/research', priority: 0.7, changefreq: 'monthly' },
    { url: '/compare', priority: 0.8, changefreq: 'weekly' },
    { url: '/playbooks', priority: 0.8, changefreq: 'weekly' },
    { url: '/patterns', priority: 0.8, changefreq: 'weekly' },
    { url: '/infographics', priority: 0.8, changefreq: 'weekly' },
    { url: '/questions', priority: 0.9, changefreq: 'daily' },
    { url: '/topics', priority: 0.9, changefreq: 'daily' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
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