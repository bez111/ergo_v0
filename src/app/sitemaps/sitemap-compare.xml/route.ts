import { NextResponse } from 'next/server'
import { comparisons } from '@/data/comparisons'
import { generateMultilingualSitemap, sitemapHeaders } from '@/lib/sitemap-utils'

export async function GET() {
  const hubPage = {
    url: '/compare',
    priority: 0.8,
    changefreq: 'weekly' as const
  }
  
  const comparisonPages = comparisons.map(comparison => ({
    url: `/compare/ergo-vs-${comparison.slug}`,
    priority: 0.7,
    changefreq: 'monthly' as const,
    lastmod: comparison.publishDate || new Date().toISOString()
  }))

  const allPages = [hubPage, ...comparisonPages]
  const sitemap = generateMultilingualSitemap(allPages)

  return new NextResponse(sitemap, { headers: sitemapHeaders })
}

