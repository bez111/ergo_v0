import { NextResponse } from 'next/server'
import { infographics } from '@/data/infographics'
import { generateMultilingualImageSitemap, sitemapHeaders, filterIndexablePages } from '@/lib/sitemap-utils'

export async function GET() {
  const hubPage = {
    url: '/infographics',
    priority: 0.8,
    changefreq: 'weekly' as const
  }
  
  const infographicPages = infographics.map(infographic => ({
    url: `/infographics/${infographic.slug}`,
    priority: 0.7,
    changefreq: 'monthly' as const,
    lastmod: infographic.publishDate || new Date().toISOString(),
    image: {
      loc: infographic.fullImageUrl,
      title: infographic.title,
      caption: infographic.shortDescription
    }
  }))

  const allPages = [hubPage, ...infographicPages]
  const sitemap = generateMultilingualImageSitemap(filterIndexablePages(allPages))

  return new NextResponse(sitemap, { headers: sitemapHeaders })
}

