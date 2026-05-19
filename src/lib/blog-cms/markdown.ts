import matter from "gray-matter"

export interface ParsedBlogMarkdown {
  slug: string
  frontMatter: Record<string, unknown>
  body: string
  title: string
  excerpt: string
  author: string
  category: string
  datePublished: string
  dateModified: string
  tags: string[]
  targetKeywords: string[]
  readTime: number
  wordCount: number
}

const WORDS_PER_MINUTE = 220

export function normalizeBlogSlug(value: string): string {
  const raw = value
    .trim()
    .replace(/^https?:\/\/[^/]+\/blog\//i, "")
    .replace(/^\/?blog\//i, "")
    .replace(/\.md$/i, "")

  return raw
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .slice(0, 90)
}

export function parseBlogMarkdown(markdown: string, slugOverride?: string): ParsedBlogMarkdown {
  const { data, content } = matter(markdown)
  const today = new Date().toISOString().slice(0, 10)

  const title = stringValue(data.title) ?? extractH1(content) ?? "Untitled article"
  const slug = normalizeBlogSlug(slugOverride ?? stringValue(data.slug) ?? title)
  const excerpt =
    stringValue(data.excerpt) ??
    stringValue(data.meta_description) ??
    firstParagraph(content) ??
    "Ergo ecosystem update."
  const author = stringValue(data.author) ?? "Developer Relations"
  const category = stringValue(data.category) ?? "Build Log"
  const datePublished = dateStringValue(data.date_published) ?? dateStringValue(data.date) ?? today
  const dateModified = dateStringValue(data.date_modified) ?? datePublished
  const tags = stringList(data.tags)
  const targetKeywords = stringList(data.target_keywords)
  const wordCount = countWords(content)
  const readTime = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))

  return {
    slug,
    frontMatter: {
      ...data,
      title,
      slug: `/blog/${slug}`,
      excerpt,
      author,
      category,
      date_published: datePublished,
      date_modified: dateModified,
      tags,
      target_keywords: targetKeywords,
    },
    body: content,
    title,
    excerpt,
    author,
    category,
    datePublished,
    dateModified,
    tags,
    targetKeywords,
    readTime,
    wordCount,
  }
}

function stringValue(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : undefined
}

function dateStringValue(value: unknown): string | undefined {
  if (value instanceof Date && Number.isFinite(value.getTime())) {
    return value.toISOString().slice(0, 10)
  }
  return stringValue(value)
}

function stringList(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean)
}

function extractH1(body: string): string | undefined {
  const match = body.match(/^#\s+(.+?)\s*$/m)
  return match?.[1]?.trim()
}

function firstParagraph(body: string): string | undefined {
  const paragraph = body
    .replace(/^#\s+.+?$/gm, "")
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .find((part) => part && !part.startsWith("```") && !part.startsWith("|"))

  if (!paragraph) return undefined
  return paragraph
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 240)
}

function countWords(body: string): number {
  const text = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")

  return text.split(/\s+/).filter(Boolean).length
}
