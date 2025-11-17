import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/site-config'
import { blogPosts } from '@/app/[locale]/blog/_lib/blog-data'

export async function GET() {
  const baseUrl = siteConfig.siteUrl
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${blogPosts.map(post => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.lastUpdated || post.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <news:news>
      <news:publication>
        <news:name>Ergo Platform</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${post.date}</news:publication_date>
      <news:title>${post.title}</news:title>
    </news:news>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}
