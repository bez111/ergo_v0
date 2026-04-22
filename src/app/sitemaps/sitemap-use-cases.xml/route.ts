import { NextResponse } from 'next/server'
import { generateMultilingualSitemap, sitemapHeaders, filterIndexablePages } from '@/lib/sitemap-utils'

export async function GET() {
  const useCasePages = [
    { url: '/use', priority: 0.9, changefreq: 'weekly' as const },
    { url: '/use/stablecoins', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/use/privacy', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/use/bridges', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/use/daos', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/use/nfts', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/use/oracles', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/use/identity', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/use/gaming', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/use/get-erg', priority: 0.7, changefreq: 'weekly' as const },
    { url: '/use/babel-fees', priority: 0.7, changefreq: 'monthly' as const },
    { url: '/use/guides', priority: 0.7, changefreq: 'monthly' as const },
  ]

  const sitemap = generateMultilingualSitemap(filterIndexablePages(useCasePages))

  return new NextResponse(sitemap, { headers: sitemapHeaders })
} 