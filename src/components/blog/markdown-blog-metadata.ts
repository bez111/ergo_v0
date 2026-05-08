import "server-only"
import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"
import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog")
const ORIGIN = siteConfig.siteUrl

interface ArticleFrontMatter {
  title?: string
  slug?: string
  seo_title?: string
  meta_description?: string
  excerpt?: string
  author?: string
  date_published?: string
  date_modified?: string
  status?: string
  tags?: string[]
  target_keywords?: string[]
}

async function readFrontMatter(slug: string): Promise<ArticleFrontMatter> {
  const file = await fs.readFile(path.join(CONTENT_DIR, `${slug}.md`), "utf-8")
  return matter(file).data as ArticleFrontMatter
}

/**
 * Build Next.js Metadata for a blog post sourced from src/content/blog/<slug>.md.
 * Pulls SEO title, meta description, OG tags, dates and keywords from the
 * article front-matter so the page.tsx for a route stays a one-liner.
 *
 * Pass a `fallbackImage` for OpenGraph if the route has a curated cover.
 */
export async function buildBlogMetadata(opts: {
  slug: string
  locale: string
  fallbackImage?: string
}): Promise<Metadata> {
  const fm = await readFrontMatter(opts.slug)
  const path = `/blog/${opts.slug}`
  const title = fm.seo_title ?? fm.title ?? opts.slug
  const description = fm.meta_description ?? fm.excerpt ?? ""
  const image = opts.fallbackImage ?? `/og/blog/${opts.slug}.png`
  const datePublished = fm.date_published

  return {
    title,
    description,
    alternates: getAlternates(path, opts.locale),
    keywords: fm.target_keywords ?? fm.tags,
    openGraph: {
      type: "article",
      url: getCanonicalUrl(path, opts.locale),
      siteName: "Ergo Platform",
      title,
      description,
      images: [{ url: `${ORIGIN}${image}`, width: 1200, height: 630, alt: title }],
      locale: getOgLocale(opts.locale),
      publishedTime: datePublished ? `${datePublished}T00:00:00Z` : undefined,
      modifiedTime: fm.date_modified ? `${fm.date_modified}T00:00:00Z` : undefined,
      authors: fm.author ? [fm.author] : undefined,
      tags: fm.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${ORIGIN}${image}`],
      site: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  }
}
