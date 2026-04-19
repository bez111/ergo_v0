import { NextResponse } from 'next/server'
import { generateMultilingualSitemap, sitemapHeaders } from '@/lib/sitemap-utils'

export async function GET() {
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' as const },
    { url: '/use', priority: 0.9, changefreq: 'weekly' as const },
    { url: '/miners', priority: 0.9, changefreq: 'weekly' as const },
    { url: '/hodlers', priority: 0.9, changefreq: 'weekly' as const },
    { url: '/developers', priority: 0.9, changefreq: 'weekly' as const },
    { url: '/technology', priority: 0.9, changefreq: 'weekly' as const },
    { url: '/technology/privacy-features', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/technology/ergoscript', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/technology/eutxo-model', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/technology/nipopows', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/technology/storage-rent', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/technology/oracle-pools', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/technology/native-tokens', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/technology/secure-pow', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/technology/babel-fees', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/technology/subblocks', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/technology/velvet-forks', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/technology/adaptive-emission', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/ecosystem', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/blog', priority: 0.9, changefreq: 'daily' as const },
    { url: '/learn', priority: 0.7, changefreq: 'weekly' as const },
    { url: '/learn/glossary', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/start', priority: 0.7, changefreq: 'weekly' as const },
    { url: '/start/introduction', priority: 0.6, changefreq: 'monthly' as const },
    { url: '/docs', priority: 0.6, changefreq: 'weekly' as const },
    { url: '/wallet', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/start/community', priority: 0.7, changefreq: 'monthly' as const },
    { url: '/start/comparison', priority: 0.7, changefreq: 'monthly' as const },
    { url: '/faq', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/ecosystem/grants', priority: 0.7, changefreq: 'weekly' as const },
    { url: '/ecosystem/map', priority: 0.7, changefreq: 'weekly' as const },
    { url: '/learn/ergoscript', priority: 0.7, changefreq: 'monthly' as const },
    { url: '/learn/research', priority: 0.7, changefreq: 'monthly' as const },
    { url: '/compare', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/playbooks', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/patterns', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/infographics', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/questions', priority: 0.9, changefreq: 'daily' as const },
    { url: '/topics', priority: 0.9, changefreq: 'daily' as const },
    // Agent Economy & Build
    { url: '/agent-economy', priority: 0.9, changefreq: 'weekly' as const },
    { url: '/agent-economy/manifesto', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/agent-economy/vs', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/demos', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/build/agent-payments', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/build/quickstart', priority: 0.8, changefreq: 'weekly' as const },
  ]

  const sitemap = generateMultilingualSitemap(staticPages)

  return new NextResponse(sitemap, { headers: sitemapHeaders })
}