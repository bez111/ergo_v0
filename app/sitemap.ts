import type { MetadataRoute } from "next"
import { mainNavItems } from "@/lib/navigation-data" // Assuming this exports all nav items

const BASE_URL = "https://ergoplatform.org" // Replace with your actual domain

interface NavItem {
  href: string
  children?: NavItem[]
  title?: string // Add title for logging if needed
}

function getAllPaths(navItems: NavItem[]): string[] {
  let paths: string[] = []
  navItems.forEach((item) => {
    if (item.href && item.href !== "#") {
      // Ensure href is valid and not just a placeholder
      paths.push(item.href)
    }
    if (item.children) {
      paths = paths.concat(getAllPaths(item.children))
    }
  })
  return paths
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allNavPaths = getAllPaths(mainNavItems)

  // High priority pages
  const highPriorityPages = [
    { url: "/", priority: 1.0, changeFreq: "daily" as const },
    { url: "/technology/eutxo-model", priority: 0.9, changeFreq: "weekly" as const },
    { url: "/technology/nipopows", priority: 0.9, changeFreq: "weekly" as const },
    { url: "/technology/ergoscript", priority: 0.9, changeFreq: "weekly" as const },
    { url: "/technology/secure-pow", priority: 0.9, changeFreq: "weekly" as const },
    { url: "/technology/privacy-features", priority: 0.9, changeFreq: "weekly" as const },
    { url: "/technology/storage-rent", priority: 0.9, changeFreq: "weekly" as const },
  ]

  // Medium priority pages
  const mediumPriorityPages = [
    { url: "/ecosystem", priority: 0.8, changeFreq: "weekly" as const },
    { url: "/build", priority: 0.8, changeFreq: "weekly" as const },
    { url: "/use", priority: 0.8, changeFreq: "weekly" as const },
    { url: "/learn", priority: 0.8, changeFreq: "weekly" as const },
    { url: "/blog", priority: 0.7, changeFreq: "weekly" as const },
  ]

  // Other navigation pages
  const otherPages = allNavPaths
    .filter(path => !highPriorityPages.some(p => p.url === path) && 
                    !mediumPriorityPages.some(p => p.url === path))
    .map(path => ({ url: path, priority: 0.6, changeFreq: "monthly" as const }))

  const allPages = [...highPriorityPages, ...mediumPriorityPages, ...otherPages]

  const sitemapEntries: MetadataRoute.Sitemap = allPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }))

  return sitemapEntries
}
