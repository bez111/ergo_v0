import "server-only"
import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html"
import { AlertTriangle } from "lucide-react"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema } from "@/lib/seo"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BlogHeroImage } from "@/components/blog/blog-hero-image"
import { StickyTOC } from "@/components/blog/sticky-toc"
import { ShareInline } from "@/components/blog/share-inline"
import { ShareCTA } from "@/components/blog/share-cta"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { siteConfig } from "@/config/site-config"

/**
 * Front-matter shape we expect from articles in src/content/blog/<slug>.md.
 * Anything missing falls back to a sensible default — fields are tolerant
 * because the markdown drafts come from outside the codebase.
 */
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

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog")
const ORIGIN = siteConfig.siteUrl

async function loadArticle(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`)
  const raw = await fs.readFile(filePath, "utf-8")
  const { data, content } = matter(raw)
  return { frontMatter: data as ArticleFrontMatter, body: content }
}

/**
 * Pull the FAQ section out of the markdown body so we can render it as an
 * indexed accordion AND emit FAQPage schema. Returns the FAQ Q/A pairs
 * plus the body with the FAQ section stripped.
 */
function extractFaq(body: string): { faq: { q: string; a: string }[]; bodyWithoutFaq: string } {
  const faqMatch = body.match(/^##\s+FAQ\s*$([\s\S]*?)(?=^##\s+|$(?![\r\n]))/im)
  if (!faqMatch) return { faq: [], bodyWithoutFaq: body }

  const faqBlock = faqMatch[1] ?? ""
  const items: { q: string; a: string }[] = []
  const regex = /^###\s+(.+?)\s*$([\s\S]*?)(?=^###\s+|$(?![\r\n]))/gim
  let m: RegExpExecArray | null
  while ((m = regex.exec(faqBlock)) !== null) {
    items.push({ q: (m[1] ?? "").trim(), a: (m[2] ?? "").trim() })
  }
  const bodyWithoutFaq = body.slice(0, faqMatch.index!) + body.slice(faqMatch.index! + faqMatch[0].length)
  return { faq: items, bodyWithoutFaq: bodyWithoutFaq.trim() }
}

/**
 * Strip trailing authoring meta blocks ("## Article JSON-LD draft" /
 * "## Source notes") — they belong in the file as documentation, not in
 * the rendered page.
 */
function stripAuthoringMeta(body: string): string {
  const cuts = ["## Article JSON-LD draft", "## Source notes"]
  let out = body
  for (const heading of cuts) {
    const idx = out.indexOf(heading)
    if (idx >= 0) out = out.slice(0, idx).trimEnd()
  }
  return out
}

/**
 * Strip the H1 (the markdown title) from the body — the page renders its
 * own hero <h1>, we don't want a duplicate inside the body container.
 */
function stripLeadingH1(body: string): string {
  return body.replace(/^#\s+.+?$\n+/m, "")
}

/** Build a TOC from H2 headings in the body so the StickyTOC matches the article. */
function buildToc(body: string): { label: string; href: string }[] {
  const headings: { label: string; href: string }[] = []
  const re = /^##\s+(.+?)\s*$/gm
  let m: RegExpExecArray | null
  while ((m = re.exec(body)) !== null) {
    const label = (m[1] ?? "").trim()
    if (!label) continue
    if (/^FAQ$/i.test(label)) continue
    if (/^TL;?DR$/i.test(label)) continue
    headings.push({ label, href: `#${slugify(label)}` })
  }
  if (headings.length > 0) headings.push({ label: "FAQ", href: "#article-faq" })
  return headings
}

/** GitHub-flavoured heading slug (matches what remark-html emits with our
 *  post-processing for `<h2 id="...">` below). */
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

/** Inject `id="..."` attributes onto every H2/H3 in the rendered HTML so
 *  in-page anchors and the StickyTOC actually scroll to the section. */
function addHeadingAnchors(html: string): string {
  return html.replace(/<(h[23])>(.+?)<\/\1>/g, (_match, tag, inner) => {
    const text = String(inner).replace(/<[^>]+>/g, "")
    const id = slugify(text)
    return `<${tag} id="${id}">${inner}</${tag}>`
  })
}

async function markdownToHtml(md: string): Promise<string> {
  const file = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(md)
  return addHeadingAnchors(String(file))
}

export interface MarkdownBlogPostProps {
  /** File-name slug under src/content/blog (without `.md`). */
  slug: string
  /** Locale segment for canonical / breadcrumb URLs. */
  locale: string
  /** Optional cover image — defaults to /og/blog/<slug>.png if present. */
  heroImage?: string
}

export async function MarkdownBlogPost({ slug, locale, heroImage }: MarkdownBlogPostProps) {
  const { frontMatter, body } = await loadArticle(slug)
  const cleaned = stripLeadingH1(stripAuthoringMeta(body))
  const { faq, bodyWithoutFaq } = extractFaq(cleaned)
  const bodyHtml = await markdownToHtml(bodyWithoutFaq)
  const tocItems = buildToc(bodyWithoutFaq)

  const canonical = `${ORIGIN}/blog/${slug}`
  const title = frontMatter.title ?? slug
  const description = frontMatter.meta_description ?? frontMatter.excerpt ?? ""
  const datePublished = frontMatter.date_published
  const dateModified = frontMatter.date_modified ?? datePublished
  const cover = heroImage ?? `/og/blog/${slug}.png`

  const schemas = [
    createBreadcrumbSchema(
      [
        { name: "Blog", href: "/blog" },
        { name: title, href: `/blog/${slug}` },
      ],
      false
    ),
    createTechArticleSchema(`/blog/${slug}`, {
      headline: title,
      description,
      image: cover,
      datePublished: datePublished ?? "2026-05-08",
      dateModified: dateModified ?? "2026-05-08",
      keywords: frontMatter.target_keywords ?? frontMatter.tags,
    }),
    ...(faq.length > 0
      ? [createFAQSchema(faq.map(({ q, a }) => ({ question: q, answer: a })))]
      : []),
  ]

  return (
    <BackgroundWrapper>
      {renderSchemaScripts(schemas)}
      {tocItems.length > 0 && <StickyTOC items={tocItems} />}

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: title, href: `/blog/${slug}` },
            ]}
            className="mb-8"
          />

          <BlogHeroImage src={cover} alt={`${title} — Ergo Platform`} />

          {/* Hero */}
          <header className="mb-12 mt-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              {title}
            </h1>
            {frontMatter.excerpt && (
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-6">
                {frontMatter.excerpt}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500 font-mono mb-6">
              {frontMatter.author && <span>{frontMatter.author}</span>}
              {datePublished && <span>· Published {datePublished}</span>}
              {dateModified && dateModified !== datePublished && (
                <span>· Updated {dateModified}</span>
              )}
              {frontMatter.tags && frontMatter.tags.length > 0 && (
                <span className="text-neutral-600">· {frontMatter.tags.slice(0, 4).join(" · ")}</span>
              )}
            </div>
            <ShareInline title={title} url={canonical} />
          </header>

          {/* Status / caveat block from front-matter */}
          {frontMatter.status && (
            <aside
              role="note"
              aria-label="Article status"
              className="mb-10 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-sm text-yellow-100/90 leading-relaxed">
                  <strong className="text-yellow-200 font-semibold">Status:</strong> {frontMatter.status}
                </p>
              </div>
            </aside>
          )}

          {/* Body — markdown rendered server-side. Styled via the
              .markdown-article class in globals.css (cyber palette, headings
              with scroll-margin for the StickyTOC, code block styling). */}
          <article
            className="markdown-article max-w-none mb-16"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          {/* FAQ — fully expanded for screen readers + indexable for SEO,
              backed by the FAQPage JSON-LD above. Native <details> so it
              still works without JS. */}
          {faq.length > 0 && (
            <section
              id="article-faq"
              aria-labelledby="article-faq-heading"
              className="mb-16 pt-10 border-t border-neutral-800 scroll-mt-28"
            >
              <h2 id="article-faq-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6">
                FAQ
              </h2>
              <div className="space-y-3">
                {faq.map((item) => (
                  <details
                    key={item.q}
                    className="group border border-neutral-800 rounded-xl bg-black/80 open:bg-neutral-900/40"
                  >
                    <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4 text-left">
                      <span className="font-semibold text-white">{item.q}</span>
                      <span className="text-orange-400 shrink-0 mt-1 transition-transform group-open:rotate-180" aria-hidden="true">▾</span>
                    </summary>
                    <div className="px-5 pb-5 -mt-1 text-gray-300 leading-relaxed whitespace-pre-line">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Share + final CTA */}
          <ShareCTA
            title={title}
            description={description}
            url={canonical}
          />
        </div>
      </div>

      <FinalCTASimple
        title="Build on Ergo"
        description="Subscribe for technical updates on the agent economy stack — SDKs, audits, and new examples."
      />
    </BackgroundWrapper>
  )
}
