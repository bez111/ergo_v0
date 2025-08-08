import { MetadataRoute } from 'next'
import { menuData } from '@/app/Docs/menuData'
import { blogPosts } from '@/app/blog/_lib/blog-data'

const baseUrl = 'https://ergoblockchain.org'

function flattenDocs(menu: any[]): string[] {
  const links: string[] = []
  const walk = (items: any[]) => {
    for (const item of items) {
      if (item.href) links.push(item.href)
      if (item.items) walk(item.items)
    }
  }
  walk(menu)
  return Array.from(new Set(links))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/start',
    '/technology',
    '/ecosystem',
    '/use',
    '/Docs',
    '/blog',
  ].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 }))

  const docsRoutes: MetadataRoute.Sitemap = flattenDocs(menuData).map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt || new Date().toISOString()),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...docsRoutes, ...blogRoutes]
}
