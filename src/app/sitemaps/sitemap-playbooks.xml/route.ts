import { NextResponse } from 'next/server'
import { playbooks } from '@/data/playbooks'
import { generateCanonicalSitemap, sitemapHeaders, filterIndexablePages } from '@/lib/sitemap-utils'

export async function GET() {
  const hubPage = {
    url: '/playbooks',
    priority: 0.8,
    changefreq: 'weekly' as const
  }
  
  const playbookPages = playbooks.map(playbook => ({
    url: `/playbooks/${playbook.slug}`,
    priority: 0.7,
    changefreq: 'monthly' as const,
    lastmod: playbook.updatedDate || playbook.publishDate || new Date().toISOString()
  }))

  const allPages = [hubPage, ...playbookPages]
  const sitemap = generateCanonicalSitemap(filterIndexablePages(allPages))

  return new NextResponse(sitemap, { headers: sitemapHeaders })
}
