import { NextResponse } from 'next/server'
import { generateMultilingualSitemap, sitemapHeaders, filterIndexablePages } from '@/lib/sitemap-utils'

export async function GET() {
  const ecosystemPages = [
    { url: '/ecosystem/spectrum', priority: 0.7, changefreq: 'weekly' as const },
    { url: '/ecosystem/sigmausd', priority: 0.7, changefreq: 'weekly' as const },
    { url: '/ecosystem/rosen-bridge', priority: 0.7, changefreq: 'weekly' as const },
    { url: '/ecosystem/ergomixer', priority: 0.7, changefreq: 'weekly' as const },
    { url: '/ecosystem/paideia', priority: 0.7, changefreq: 'weekly' as const },
    { url: '/ecosystem/duckpools', priority: 0.7, changefreq: 'weekly' as const },
  ]

  const sitemap = generateMultilingualSitemap(filterIndexablePages(ecosystemPages))

  return new NextResponse(sitemap, { headers: sitemapHeaders })
}
