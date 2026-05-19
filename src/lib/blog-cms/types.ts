export type BlogCmsStatus = "draft" | "published"

export interface BlogCmsHero {
  alt: string
  width: number
  height: number
  jpgUrl: string
  webpUrl: string
}

export interface BlogCmsEntry {
  slug: string
  locale: string
  status: BlogCmsStatus
  title: string
  excerpt: string
  author: string
  category: string
  date_published: string
  date_modified: string
  tags: string[]
  target_keywords: string[]
  readTime: number
  wordCount: number
  hero?: BlogCmsHero
  markdownPath: string
  bundlePath: string
  storagePrefix: string
  createdAt: string
  updatedAt: string
}

export interface BlogCmsIndex {
  version: 1
  updatedAt: string
  entries: BlogCmsEntry[]
}

