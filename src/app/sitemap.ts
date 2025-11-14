import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl

  return [
    {
      url: `${baseUrl}/sitemap-pages.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-blog.xml`, 
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-ecosystem.xml`,
      lastModified: new Date(),
    }
  ]
}
