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

  // Add static pages not in navigation, or dynamic pages from a CMS/DB
  const staticPages = [
    "/",
    // Add other important static pages here if they are not in mainNavItems
    // e.g., '/privacy-policy', '/terms-of-service'
  ]

  const uniquePaths = Array.from(new Set([...staticPages, ...allNavPaths]))

  const sitemapEntries: MetadataRoute.Sitemap = uniquePaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(), // Or fetch this dynamically if possible
    changeFrequency: "weekly", // Adjust as needed
    priority: path === "/" ? 1 : 0.8, // Adjust as needed
  }))

  return sitemapEntries
}
