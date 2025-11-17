import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl

  return [
    {
      url: `${baseUrl}/sitemaps/sitemap-pages.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemaps/sitemap-blog.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemaps/sitemap-ecosystem.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemaps/sitemap-technology.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemaps/sitemap-use-cases.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/news-sitemap.xml`,
      lastModified: new Date(),
    },
  ]
}
