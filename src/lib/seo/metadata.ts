// Centralized Metadata Generation for Next.js
// Single source of truth for all page metadata

import { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import type { PageSEOConfig } from "./types"

const BASE_URL = siteConfig.siteUrl

/**
 * Creates standardized Next.js Metadata object
 * Use this in all page.tsx files for consistent SEO
 */
export function createMetadata(config: PageSEOConfig): Metadata {
  const {
    title,
    description,
    path,
    ogImage,
    keywords = [],
    noIndex = false,
    locale = "en_US",
    type = "website",
    publishedTime,
    modifiedTime,
    authors = ["Ergo Platform"],
    section,
  } = config

  const url = `${BASE_URL}${path}`
  const imageUrl = ogImage 
    ? (ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`)
    : `${BASE_URL}/og/default.png`

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: authors.map(name => ({ name })),
    creator: "Ergo Platform",
    publisher: "Ergo Platform",
    
    alternates: {
      canonical: url,
    },
    
    openGraph: {
      title,
      description,
      url,
      siteName: "Ergo Platform",
      locale,
      type: type as "website" | "article",
      images: [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: title,
      }],
      ...(type === "article" && {
        publishedTime,
        modifiedTime: modifiedTime || new Date().toISOString(),
        authors,
        section,
      }),
    },
    
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    
    robots: noIndex 
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  }

  return metadata
}

/**
 * Creates metadata for technology pages
 */
export function createTechnologyMetadata(
  slug: string,
  title: string,
  description: string,
  ogImage?: string,
  keywords: string[] = []
): Metadata {
  return createMetadata({
    title: `${title} | Ergo`,
    description,
    path: `/technology/${slug}`,
    ogImage: ogImage || `/og/technology-${slug}.png`,
    keywords: ["Ergo", "blockchain", ...keywords],
    type: "article",
  })
}

/**
 * Creates metadata for use case pages
 */
export function createUseCaseMetadata(
  slug: string,
  title: string,
  description: string,
  ogImage?: string,
  keywords: string[] = []
): Metadata {
  return createMetadata({
    title: `${title} | Ergo`,
    description,
    path: `/use/${slug}`,
    ogImage: ogImage || `/og-${slug}.png`,
    keywords: ["Ergo", "use case", ...keywords],
    type: "website",
  })
}

/**
 * Creates metadata for blog articles
 */
export function createBlogMetadata(
  slug: string,
  title: string,
  description: string,
  ogImage?: string,
  publishedTime?: string,
  keywords: string[] = []
): Metadata {
  return createMetadata({
    title,
    description,
    path: `/blog/${slug}`,
    ogImage: ogImage || `/og/${slug}.png`,
    keywords,
    type: "article",
    ...(publishedTime && { publishedTime }),
    modifiedTime: new Date().toISOString(),
    section: "Technology",
  })
}

/**
 * Creates metadata for hub/collection pages
 */
export function createHubMetadata(
  path: string,
  title: string,
  description: string,
  ogImage?: string,
  keywords: string[] = []
): Metadata {
  return createMetadata({
    title,
    description,
    path,
    ...(ogImage && { ogImage }),
    keywords,
    type: "website",
  })
}

export default createMetadata

