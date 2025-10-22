import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ergoblockchain.org'
  const currentDate = new Date().toISOString()
  
  const sitemaps = [
    { loc: `${baseUrl}/sitemaps/sitemap-main.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemaps/sitemap-docs.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemaps/sitemap-blog.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemaps/sitemap-ecosystem.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemaps/sitemap-technology.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemaps/sitemap-use.xml`, lastmod: currentDate },
    { loc: `${baseUrl}/sitemaps/sitemap-learn.xml`, lastmod: currentDate },
  ]
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `<sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`
  
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
} 