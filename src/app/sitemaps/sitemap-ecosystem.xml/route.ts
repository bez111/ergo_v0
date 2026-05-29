import { NextResponse } from 'next/server'
import { projects } from '@/app/[locale]/ecosystem/_data'
import { generateCanonicalSitemap, sitemapHeaders, filterIndexablePages } from '@/lib/sitemap-utils'

export async function GET() {
  const ecosystemPages = projects
    .filter(project => project.status !== 'NOT_OPERATING')
    .map(project => ({
      url: `/ecosystem/${project.slug}`,
      priority: project.status === 'OPERATIONAL' ? 0.7 : 0.55,
      changefreq: 'monthly' as const,
      lastmod: project.lastVerified ? `${project.lastVerified}T00:00:00.000Z` : undefined,
    }))

  const sitemap = generateCanonicalSitemap(filterIndexablePages(ecosystemPages))

  return new NextResponse(sitemap, { headers: sitemapHeaders })
}
