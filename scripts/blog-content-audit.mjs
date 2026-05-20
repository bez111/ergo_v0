import { readdirSync, readFileSync } from "node:fs"
import { basename, join } from "node:path"
import matter from "gray-matter"

const ROOT = process.cwd()
const BLOG_DIR = join(ROOT, "src/content/blog")
const BLOG_DATA = join(ROOT, "src/app/[locale]/blog/_lib/blog-data.ts")
const failures = []

function normalizeTitle(value) {
  return value
    .toLowerCase()
    .replace(/['"“”‘’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

function addFailure(message) {
  failures.push(message)
}

function getMarkdownEntries() {
  return readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => {
      const file = join(BLOG_DIR, entry.name)
      const { data } = matter(readFileSync(file, "utf8"))
      const slug = basename(entry.name, ".md")

      return {
        source: "markdown",
        slug,
        title: data.title || data.seo_title || slug,
      }
    })
}

function getBlogDataEntries() {
  const source = readFileSync(BLOG_DATA, "utf8")
  const start = source.indexOf("export const blogPosts")
  const end = source.indexOf("export const categories")
  const blogPostsSource = source.slice(start, end > start ? end : undefined)
  const entries = []
  const entryPattern = /slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'/g
  let match

  while ((match = entryPattern.exec(blogPostsSource))) {
    entries.push({
      source: "blog-data",
      slug: match[1],
      title: match[2],
    })
  }

  return entries
}

function assertNoDuplicates(entries, field, normalizer = (value) => value) {
  const seen = new Map()

  for (const entry of entries) {
    const raw = entry[field]
    if (!raw) continue
    const key = normalizer(raw)
    const existing = seen.get(key)

    if (existing) {
      addFailure(
        `duplicate ${field}: "${raw}" in ${entry.source}:${entry.slug} and ${existing.source}:${existing.slug}`,
      )
    } else {
      seen.set(key, entry)
    }
  }
}

const markdownEntries = getMarkdownEntries()
const blogDataEntries = getBlogDataEntries()

assertNoDuplicates(markdownEntries, "slug")
assertNoDuplicates(markdownEntries, "title", normalizeTitle)
assertNoDuplicates(blogDataEntries, "slug")
assertNoDuplicates(blogDataEntries, "title", normalizeTitle)

if (failures.length > 0) {
  console.error("blog content audit failed")
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log("blog content audit clean")
console.log(`markdown posts = ${markdownEntries.length}`)
console.log(`blog-data posts = ${blogDataEntries.length}`)
