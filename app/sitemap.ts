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
  // High priority pages - updated frequently, critical for SEO
  const criticalRoutes: MetadataRoute.Sitemap = [
    { 
      url: baseUrl, 
      lastModified: new Date(), 
      changeFrequency: 'daily', 
      priority: 1.0 
    },
    { 
      url: `${baseUrl}/start`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/wallet`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/use/get-erg`, 
      lastModified: new Date(), 
      changeFrequency: 'daily', 
      priority: 0.9 
    },
  ]
  
  // Important content pages
  const importantRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/technology`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/ecosystem`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/learn`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/learn/faq`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/Docs`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/use`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/use/mining`, changeFrequency: 'weekly' as const, priority: 0.7 },
  ].map(route => ({ ...route, lastModified: new Date() }))
  
  // Secondary pages
  const secondaryRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/events`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${baseUrl}/learn/ergoscript`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/learn/research`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/ecosystem/mining`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${baseUrl}/ecosystem/grants`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/technology/eutxo`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/technology/ergoscript`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/technology/nipopows`, changeFrequency: 'monthly' as const, priority: 0.6 },
  ].map(route => ({ ...route, lastModified: new Date() }))

  // Documentation pages with lower priority
  const docsRoutes: MetadataRoute.Sitemap = flattenDocs(menuData).map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path.includes('/developers') ? 0.6 : 0.5,
  }))

  // Blog posts - higher priority for recent posts
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post, index) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt || new Date().toISOString()),
    changeFrequency: index < 5 ? 'weekly' as const : 'monthly' as const,
    priority: index < 5 ? 0.7 : 0.5,
  }))

  return [...criticalRoutes, ...importantRoutes, ...secondaryRoutes, ...docsRoutes, ...blogRoutes]
}
