import { NextResponse, type NextRequest } from "next/server"
import { revalidatePath, revalidateTag } from "next/cache"
import sharp from "sharp"
import { blogPosts } from "@/app/[locale]/blog/_lib/blog-data"
import { checkBlogAdminAuth, isBlogAdminConfigured } from "@/lib/blog-cms/auth"
import { normalizeBlogSlug, parseBlogMarkdown } from "@/lib/blog-cms/markdown"
import {
  getBlogCmsIndex,
  isBlogCmsStorageConfigured,
  saveBlogCmsArticle,
} from "@/lib/blog-cms/storage"
import type { BlogCmsStatus } from "@/lib/blog-cms/types"

export const runtime = "nodejs"

const LOCALES = ["en", "ru", "de", "fr", "tr", "ko", "zh"]
const MAX_MARKDOWN_BYTES = 1024 * 1024
const MAX_HERO_BYTES = 12 * 1024 * 1024
const MAX_HERO_PIXELS = 40_000_000
const ALLOWED_HERO_TYPES = new Set(["image/avif", "image/jpeg", "image/png", "image/webp"])

export async function GET(request: NextRequest) {
  const auth = checkBlogAdminAuth(request)
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status ?? 401 })
  }

  const index = await getBlogCmsIndex({ includeDrafts: true })
  return NextResponse.json({
    ok: true,
    adminConfigured: isBlogAdminConfigured(),
    storageConfigured: isBlogCmsStorageConfigured(),
    devBypass: Boolean(auth.devBypass),
    entries: index.entries,
    updatedAt: index.updatedAt,
  })
}

export async function POST(request: NextRequest) {
  const auth = checkBlogAdminAuth(request)
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status ?? 401 })
  }

  if (!isBlogCmsStorageConfigured()) {
    return NextResponse.json(
      { ok: false, error: "BLOB_READ_WRITE_TOKEN is not configured" },
      { status: 503 },
    )
  }

  const formData = await request.formData()
  const markdownFile = formData.get("markdown")
  const heroFile = formData.get("hero")
  const status = normalizeStatus(formData.get("status"))
  const slugOverride = normalizeOptionalSlug(formData.get("slug"))

  if (!(markdownFile instanceof File) || markdownFile.size === 0) {
    return NextResponse.json({ ok: false, error: "Markdown file is required" }, { status: 400 })
  }
  if (markdownFile.size > MAX_MARKDOWN_BYTES) {
    return NextResponse.json({ ok: false, error: "Markdown file is too large; max 1 MB" }, { status: 413 })
  }
  if (!isAllowedMarkdownFile(markdownFile)) {
    return NextResponse.json({ ok: false, error: "Markdown file must be .md, .markdown, text/markdown, or text/plain" }, { status: 400 })
  }

  const markdown = await markdownFile.text()
  const parsed = parseBlogMarkdown(markdown, slugOverride)

  if (!parsed.slug) {
    return NextResponse.json({ ok: false, error: "Could not derive a valid slug" }, { status: 400 })
  }

  if (blogPosts.some((post) => post.slug === parsed.slug)) {
    return NextResponse.json(
      { ok: false, error: `Slug "${parsed.slug}" belongs to a static repo article` },
      { status: 409 },
    )
  }

  let hero
  try {
    hero =
      heroFile instanceof File && heroFile.size > 0
        ? await optimizeHeroImage(heroFile, parsed.title)
        : undefined
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Could not process hero image" },
      { status: 400 },
    )
  }

  const entry = await saveBlogCmsArticle({
    markdown,
    parsed,
    status,
    hero,
  })

  revalidateBlogSurfaces(entry.slug)

  return NextResponse.json({
    ok: true,
    entry,
    url: `/blog/${entry.slug}`,
  })
}

async function optimizeHeroImage(file: File, alt: string) {
  if (file.size > MAX_HERO_BYTES) {
    throw new Error("Hero asset is too large; max 12 MB")
  }
  if (!ALLOWED_HERO_TYPES.has(file.type)) {
    throw new Error("Hero asset must be AVIF, JPEG, PNG, or WebP")
  }

  const source = Buffer.from(await file.arrayBuffer())
  const pipeline = sharp(source, { limitInputPixels: MAX_HERO_PIXELS }).resize(1200, 630, {
    fit: "cover",
    position: "attention",
    withoutEnlargement: false,
  })

  const [jpg, webp] = await Promise.all([
    pipeline.clone().jpeg({ quality: 88, progressive: true, mozjpeg: true }).toBuffer(),
    pipeline.clone().webp({ quality: 82 }).toBuffer(),
  ])

  return { alt, jpg, webp }
}

function isAllowedMarkdownFile(file: File): boolean {
  const name = file.name.toLowerCase()
  const type = file.type.toLowerCase()
  return (
    name.endsWith(".md") ||
    name.endsWith(".markdown") ||
    type === "text/markdown" ||
    type === "text/plain"
  )
}

function normalizeStatus(value: FormDataEntryValue | null): BlogCmsStatus {
  return value === "draft" ? "draft" : "published"
}

function normalizeOptionalSlug(value: FormDataEntryValue | null): string | undefined {
  if (typeof value !== "string" || value.trim().length === 0) return undefined
  return normalizeBlogSlug(value)
}

function revalidateBlogSurfaces(slug: string): void {
  revalidateTag("blog-cms", "max")
  revalidatePath("/")
  revalidatePath("/blog")
  revalidatePath(`/blog/${slug}`)
  revalidatePath("/blog/feed.json")
  revalidatePath("/blog/rss.xml")
  revalidatePath("/sitemaps/sitemap-blog.xml")
  revalidatePath("/api/search-index")

  for (const locale of LOCALES) {
    revalidatePath(`/${locale}`)
    revalidatePath(`/${locale}/blog`)
    revalidatePath(`/${locale}/blog/${slug}`)
    revalidatePath(`/${locale}/blog/feed.json`)
    revalidatePath(`/${locale}/blog/rss.xml`)
  }
}
