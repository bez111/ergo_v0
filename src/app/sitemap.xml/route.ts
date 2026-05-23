import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/site-config'

const sitemapPaths = [
  '/sitemaps/sitemap-pages.xml',
  '/sitemaps/sitemap-blog.xml',
  '/sitemaps/sitemap-ecosystem.xml',
  '/sitemaps/sitemap-technology.xml',
  '/sitemaps/sitemap-use-cases.xml',
  '/sitemaps/sitemap-compare.xml',
  '/sitemaps/sitemap-playbooks.xml',
  '/sitemaps/sitemap-glossary.xml',
  '/sitemaps/sitemap-infographics.xml',
  '/sitemaps/sitemap-questions.xml',
  '/sitemaps/sitemap-topics.xml',
  '/sitemaps/sitemap-images.xml',
  '/news-sitemap.xml',
]

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const lastModified = new Date().toISOString()
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, '')

  const body = sitemapPaths
    .map((path) => {
      return [
        '  <sitemap>',
        `    <loc>${escapeXml(`${baseUrl}${path}`)}</loc>`,
        `    <lastmod>${lastModified}</lastmod>`,
        '  </sitemap>',
      ].join('\n')
    })
    .join('\n')

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    body,
    '</sitemapindex>',
  ].join('\n')

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
