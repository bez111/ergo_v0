#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("node:fs")
const path = require("node:path")
const matter = require("gray-matter")

const ROOT = path.join(__dirname, "..")
const BLOG_DIR = path.join(ROOT, "src", "content", "blog")
const OUTPUT_FILE = path.join(ROOT, "public", "search-index.json")

function stripMarkdown(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#+\s*/gm, "")
    .replace(/[*_~>]+/g, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim()
}

function stripAuthoringMeta(markdown) {
  const cuts = ["## Article JSON-LD draft", "## Source notes"]
  let out = markdown
  for (const heading of cuts) {
    const idx = out.indexOf(heading)
    if (idx >= 0) out = out.slice(0, idx).trimEnd()
  }
  return out
}

function extractTags(content, section, frontmatterTags = []) {
  const tags = new Set(frontmatterTags)
  const sectionParts = section.toLowerCase().split(" > ").filter(Boolean)
  sectionParts.forEach((part) => tags.add(part))

  const technicalTerms = [
    "ergo",
    "ergoscript",
    "utxo",
    "eutxo",
    "defi",
    "smart-contracts",
    "mining",
    "consensus",
    "privacy",
    "oracles",
    "sidechains",
    "lending",
    "derivatives",
    "tokens",
    "wallets",
    "sage",
    "accord",
    "mcp",
    "agent",
  ]

  const contentLower = content.toLowerCase()
  technicalTerms.forEach((term) => {
    if (contentLower.includes(term)) tags.add(term)
  })

  return [...tags]
}

function getContentType(url, title) {
  if (url.includes("#") || title.startsWith("#")) return "anchor"
  if (title.toLowerCase().includes("code") || title.toLowerCase().includes("script")) return "code"
  if (url.split("/").filter(Boolean).length <= 2) return "title"
  return "content"
}

function getEnglishBlogFiles() {
  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => path.join(BLOG_DIR, entry.name))
}

function toIsoDate(raw) {
  if (!raw) return null
  const parsed = Date.parse(raw)
  return Number.isFinite(parsed) ? new Date(parsed).toISOString() : null
}

function readBlogEntry(filePath) {
  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)
  const slug = path.basename(filePath, ".md")
  const articleMarkdown = stripAuthoringMeta(content)
  const cleanContent = stripMarkdown(articleMarkdown)
  const title = data.title || data.seo_title || slug
  const section = data.category || "Blog"
  const tags = extractTags(cleanContent, section, Array.isArray(data.tags) ? data.tags : [])
  const url = `/blog/${slug}`

  const lastModified =
    toIsoDate(data.date_modified) || toIsoDate(data.date_published) || fs.statSync(filePath).mtime.toISOString()

  return {
    objectID: url,
    title,
    content: cleanContent,
    description: data.excerpt || data.meta_description || cleanContent.slice(0, 240),
    url,
    section,
    tags,
    type: getContentType(url, title),
    headings: Array.from(articleMarkdown.matchAll(/^##+\s+(.+?)\s*$/gm)).map((match) => match[1]),
    frontmatter: data,
    lastModified,
  }
}

function buildSearchIndexFromFiles() {
  console.log("Building static search index...")

  const searchIndex = getEnglishBlogFiles().map(readBlogEntry)

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true })
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchIndex, null, 2))

  console.log(`Search index built with ${searchIndex.length} entries`)
  console.log(`Output: ${OUTPUT_FILE}`)

  const stats = {
    total: searchIndex.length,
    byType: {},
    bySection: {},
    tags: new Set(),
  }

  searchIndex.forEach((entry) => {
    stats.byType[entry.type] = (stats.byType[entry.type] || 0) + 1
    stats.bySection[entry.section] = (stats.bySection[entry.section] || 0) + 1
    entry.tags.forEach((tag) => stats.tags.add(tag))
  })

  console.log("Statistics:")
  console.log("By type:", stats.byType)
  console.log("By section:", stats.bySection)
  console.log("Unique tags:", stats.tags.size)

  return searchIndex
}

async function uploadToAlgolia(searchIndex) {
  const appId = process.env.ALGOLIA_APP_ID
  const apiKey = process.env.ALGOLIA_ADMIN_API_KEY
  const indexName = process.env.ALGOLIA_INDEX_NAME || "ergo-docs"

  if (!appId || !apiKey) {
    console.log("Algolia credentials not provided, skipping upload")
    return
  }

  try {
    console.log("Uploading to Algolia...")

    const response = await fetch(`https://${appId}.algolia.net/1/indexes/${indexName}/batch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Algolia-API-Key": apiKey,
        "X-Algolia-Application-Id": appId,
      },
      body: JSON.stringify({
        requests: searchIndex.map((entry) => ({
          action: "updateObject",
          body: entry,
        })),
      }),
    })

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.status}`)
    }

    const result = await response.json()
    console.log("Successfully uploaded to Algolia")
    console.log(`Task ID: ${result.taskID}`)
  } catch (error) {
    console.error("Failed to upload to Algolia:", error.message)
  }
}

if (require.main === module) {
  const searchIndex = buildSearchIndexFromFiles()

  if (process.env.NODE_ENV === "production") {
    uploadToAlgolia(searchIndex)
  }
}

module.exports = { buildSearchIndexFromFiles, uploadToAlgolia }
