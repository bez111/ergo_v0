import "server-only"
import { get, put } from "@vercel/blob"
import { parseBlogMarkdown, type ParsedBlogMarkdown } from "./markdown"
import type { BlogCmsEntry, BlogCmsIndex, BlogCmsStatus } from "./types"

const BLOG_CMS_PREFIX = "cms/blog/v1"
const INDEX_PATH = `${BLOG_CMS_PREFIX}/index.json`

interface SaveHeroInput {
  alt: string
  jpg: Buffer
  webp: Buffer
}

interface SaveBlogCmsArticleInput {
  markdown: string
  parsed: ParsedBlogMarkdown
  status: BlogCmsStatus
  locale?: string
  hero?: SaveHeroInput
}

export function isBlogCmsStorageConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN)
}

export async function getBlogCmsIndex(options: { includeDrafts?: boolean } = {}): Promise<BlogCmsIndex> {
  const empty = emptyIndex()
  if (!isBlogCmsStorageConfigured()) return empty

  const index = (await readJsonBlob<BlogCmsIndex>(INDEX_PATH)) ?? empty
  const entries = (index.entries ?? [])
    .filter((entry) => options.includeDrafts || entry.status === "published")
    .sort(compareEntries)

  return {
    version: 1,
    updatedAt: index.updatedAt ?? new Date(0).toISOString(),
    entries,
  }
}

export async function getBlogCmsArticle(
  slug: string,
  options: { includeDrafts?: boolean } = {},
): Promise<{
  entry: BlogCmsEntry
  markdown: string
  frontMatter: Record<string, unknown>
  body: string
} | null> {
  if (!isBlogCmsStorageConfigured()) return null

  const index = await getBlogCmsIndex({ includeDrafts: options.includeDrafts })
  const entry = index.entries.find((item) => item.slug === slug)
  if (!entry) return null

  const markdown = await readTextBlob(entry.markdownPath)
  if (!markdown) return null

  const parsed = parseBlogMarkdown(markdown, entry.slug)
  return {
    entry,
    markdown,
    frontMatter: {
      ...parsed.frontMatter,
      title: entry.title,
      excerpt: entry.excerpt,
      author: entry.author,
      category: entry.category,
      date_published: entry.date_published,
      date_modified: entry.date_modified,
      tags: entry.tags,
      target_keywords: entry.target_keywords,
    },
    body: parsed.body,
  }
}

export async function saveBlogCmsArticle(input: SaveBlogCmsArticleInput): Promise<BlogCmsEntry> {
  if (!isBlogCmsStorageConfigured()) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not configured")
  }

  const now = new Date().toISOString().replace(/\.\d{3}Z$/, "Z")
  const slug = input.parsed.slug
  const storagePrefix = `${BLOG_CMS_PREFIX}/${slug}`
  const markdownPath = `${storagePrefix}/article.md`
  const bundlePath = `${storagePrefix}/bundle.json`
  const existingIndex = await getBlogCmsIndex({ includeDrafts: true })
  const existing = existingIndex.entries.find((entry) => entry.slug === slug)

  const hero = input.hero
    ? {
        alt: input.hero.alt,
        width: 1200,
        height: 630,
        jpgUrl: await putPublicBlob(`${storagePrefix}/hero.jpg`, input.hero.jpg, "image/jpeg"),
        webpUrl: await putPublicBlob(`${storagePrefix}/hero.webp`, input.hero.webp, "image/webp"),
      }
    : existing?.hero

  const entry: BlogCmsEntry = {
    slug,
    locale: input.locale ?? "en",
    status: input.status,
    title: input.parsed.title,
    excerpt: input.parsed.excerpt,
    author: input.parsed.author,
    category: input.parsed.category,
    date_published: input.parsed.datePublished,
    date_modified: input.parsed.dateModified,
    tags: input.parsed.tags,
    target_keywords: input.parsed.targetKeywords,
    readTime: input.parsed.readTime,
    wordCount: input.parsed.wordCount,
    ...(hero ? { hero } : {}),
    markdownPath,
    bundlePath,
    storagePrefix,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  }

  const bundle = {
    type: "ergo.blog_cms_article.v1",
    entry,
    frontMatter: input.parsed.frontMatter,
    markdown: input.markdown,
  }

  await putPrivateBlob(markdownPath, input.markdown, "text/markdown; charset=utf-8")
  await putPrivateBlob(bundlePath, JSON.stringify(bundle, null, 2), "application/json; charset=utf-8")

  const entries = [
    entry,
    ...existingIndex.entries.filter((item) => item.slug !== slug),
  ].sort(compareEntries)

  await putPrivateBlob(
    INDEX_PATH,
    JSON.stringify({ version: 1, updatedAt: now, entries }, null, 2),
    "application/json; charset=utf-8",
  )

  return entry
}

function emptyIndex(): BlogCmsIndex {
  return {
    version: 1,
    updatedAt: new Date(0).toISOString(),
    entries: [],
  }
}

function compareEntries(a: BlogCmsEntry, b: BlogCmsEntry): number {
  return new Date(b.date_published).getTime() - new Date(a.date_published).getTime()
}

async function putPrivateBlob(path: string, body: string | Buffer, contentType: string): Promise<void> {
  await put(path, body, {
    access: "private",
    allowOverwrite: true,
    contentType,
    cacheControlMaxAge: 60,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  })
}

async function putPublicBlob(path: string, body: Buffer, contentType: string): Promise<string> {
  const blob = await put(path, body, {
    access: "public",
    allowOverwrite: true,
    addRandomSuffix: false,
    contentType,
    cacheControlMaxAge: 60 * 60 * 24 * 365,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  })
  return blob.url
}

async function readJsonBlob<T>(path: string): Promise<T | null> {
  const text = await readTextBlob(path)
  if (!text) return null
  return JSON.parse(text) as T
}

async function readTextBlob(path: string): Promise<string | null> {
  try {
    const result = await get(path, {
      access: "private",
      useCache: false,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    })
    if (!result?.stream) return null
    return new Response(result.stream as ReadableStream<Uint8Array>).text()
  } catch {
    return null
  }
}

