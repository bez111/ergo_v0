import { NextResponse } from 'next/server'
import { generateMultilingualSitemap, sitemapHeaders, filterIndexablePages } from '@/lib/sitemap-utils'

export async function GET() {
  const technologyPages = [
    { url: '/technology', priority: 0.9, changefreq: 'weekly' as const },
    { url: '/technology/ergoscript', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/technology/eutxo', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/technology/eutxo-model', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/technology/nipopows', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/technology/privacy-features', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/technology/secure-pow', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/technology/storage-rent', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/technology/subblocks', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/technology/native-tokens', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/technology/oracle-pools', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/technology/velvet-forks', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/technology/adaptive-emission', priority: 0.8, changefreq: 'monthly' as const },
  ]

  const sitemap = generateMultilingualSitemap(filterIndexablePages(technologyPages))

  return new NextResponse(sitemap, { headers: sitemapHeaders })
} 