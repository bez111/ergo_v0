import "server-only"
import fs from "node:fs/promises"
import path from "node:path"
import { Link } from "@/i18n/navigation"
import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html"
import { AlertTriangle, ChevronDown, ListOrdered, Sparkles } from "lucide-react"
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

/**
 * Resolve the markdown source for a post in the user's locale.
 *
 *   src/content/blog/<locale>/<slug>.md  ← preferred
 *   src/content/blog/<slug>.md           ← English fallback
 *
 * Translated files preserve the original frontmatter shape; only the
 * `title` / `excerpt` / `meta_description` and body text get localized.
 * Code blocks, URLs, technical terms (Reserve / Note / Tracker / etc.)
 * stay verbatim per the translation script.
 */
async function loadArticle(slug: string, locale = "en") {
  const localized = path.join(CONTENT_DIR, locale, `${slug}.md`)
  const fallback = path.join(CONTENT_DIR, `${slug}.md`)
  const fallbackArticle = await readArticleFile(fallback)

  if (locale === "en" || !(await fileExists(localized))) {
    return fallbackArticle
  }

  const localizedArticle = await readArticleFile(localized)
  if (articleTimestamp(fallbackArticle.frontMatter) > articleTimestamp(localizedArticle.frontMatter)) {
    return fallbackArticle
  }

  return localizedArticle
}

async function readArticleFile(filePath: string) {
  const raw = await fs.readFile(filePath, "utf-8")
  const { data, content } = matter(raw)
  return { frontMatter: data as ArticleFrontMatter, body: content }
}

function articleTimestamp(frontMatter: ArticleFrontMatter): number {
  const raw = frontMatter.date_modified ?? frontMatter.date_published
  if (!raw) return 0

  const parsed = Date.parse(raw)
  return Number.isFinite(parsed) ? parsed : 0
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
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

/** Tables in longform articles are useful, but on phones their intrinsic
 * column widths can widen the whole document. Keep the table intact and put
 * horizontal scrolling on a dedicated wrapper instead. */
function wrapTables(html: string): string {
  return html.replace(/<table>([\s\S]*?)<\/table>/g, (_match, inner) => {
    return `<div class="md-table-scroll scroll-shadow-x"><table>${inner}</table></div>`
  })
}

/**
 * Wrap each H2 + its body in a card-style <section>. Mirrors the visual
 * pattern used in /blog/babel-fees: heading on its own, content inside a
 * rounded `bg-black border border-white/20 rounded-3xl p-8` container.
 *
 * Operates on the HTML string after markdown → HTML conversion. The resulting
 * markup is still semantic; the wrapping is purely presentational.
 */
function wrapH2Sections(html: string): string {
  // Split on H2 starts. We preserve any leading content before the first H2.
  const parts = html.split(/(?=<h2\b)/)
  if (parts.length <= 1) return html
  const [intro, ...sections] = parts

  const wrapped = sections
    .map((sec) => {
      const m = sec.match(/^(<h2[^>]*>[\s\S]*?<\/h2>)([\s\S]*)$/)
      if (!m) return sec
      const [, heading, body] = m
      const safeBody = (body ?? "").trim()
      if (!safeBody) return `<section class="md-section">${heading}</section>`
      return `<section class="md-section">${heading}<div class="md-card">${safeBody}</div></section>`
    })
    .join("\n")
  return (intro ?? "") + wrapped
}

/** Pull the TL;DR section out of the markdown so we can render it as a card
 *  grid (icon + title + body), matching the babel-fees TL;DR design. The
 *  TL;DR section is detected by a `## TL;DR` heading; each entry is an `###`
 *  sub-heading + paragraph. Returns the pulled items + the body with the
 *  TL;DR block stripped. */
function extractTldr(body: string): { tldr: { title: string; body: string }[]; bodyWithoutTldr: string } {
  const match = body.match(/^##\s+TL;?DR\s*$([\s\S]*?)(?=^##\s+|$(?![\r\n]))/im)
  if (!match) return { tldr: [], bodyWithoutTldr: body }
  const block = match[1] ?? ""
  const items: { title: string; body: string }[] = []
  const re = /^###\s+(.+?)\s*$([\s\S]*?)(?=^###\s+|$(?![\r\n]))/gim
  let m: RegExpExecArray | null
  while ((m = re.exec(block)) !== null) {
    items.push({ title: (m[1] ?? "").trim(), body: (m[2] ?? "").trim() })
  }
  // If no H3 sub-items were found, fall back to first 4 list items.
  if (items.length === 0) {
    const listRe = /^[*-]\s+(.+?)$/gm
    let lm: RegExpExecArray | null
    while ((lm = listRe.exec(block)) !== null && items.length < 4) {
      const line = (lm[1] ?? "").trim()
      const splitIdx = line.indexOf(":")
      if (splitIdx > 0) {
        items.push({ title: line.slice(0, splitIdx).trim(), body: line.slice(splitIdx + 1).trim() })
      } else {
        items.push({ title: line, body: "" })
      }
    }
  }
  const bodyWithoutTldr = body.slice(0, match.index!) + body.slice(match.index! + match[0].length)
  return { tldr: items, bodyWithoutTldr: bodyWithoutTldr.trim() }
}

async function markdownToHtml(md: string): Promise<string> {
  const file = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(md)
  return wrapH2Sections(wrapTables(addHeadingAnchors(String(file))))
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
  const { frontMatter, body } = await loadArticle(slug, locale)
  const cleaned = stripLeadingH1(stripAuthoringMeta(body))
  const { faq, bodyWithoutFaq } = extractFaq(cleaned)
  const { tldr, bodyWithoutTldr } = extractTldr(bodyWithoutFaq)
  const bodyHtml = await markdownToHtml(bodyWithoutTldr)
  // TOC reflects the post-extraction body (no TL;DR / FAQ in it).
  const tocItems = buildToc(bodyWithoutTldr)

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

          {/* TL;DR — card grid mirroring babel-fees. Only renders if the
              markdown actually carries a `## TL;DR` block. */}
          {tldr.length > 0 && (
            <section className="mb-12" aria-labelledby="tldr-heading">
              <h2 id="tldr-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-orange-400" aria-hidden="true" />
                TL;DR
              </h2>
              <div className="grid gap-3">
                {tldr.map((item) => (
                  <div
                    key={item.title}
                    className="bg-black border border-white/10 rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-orange-400 shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                        {item.body && (
                          <p className="text-gray-300 text-sm leading-relaxed">{item.body}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Article Contents card — fallback for screens narrower than 2xl
              (matches the babel-fees pattern; the StickyTOC only appears on
              very wide screens). */}
          {tocItems.length > 0 && (
            <section className="mb-12 2xl:hidden">
              <div className="bg-black/80 border border-orange-500/20 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <ListOrdered className="w-5 h-5 text-orange-400" aria-hidden="true" />
                  <h2 className="text-lg font-semibold text-white m-0">Article Contents</h2>
                </div>
                <nav aria-label="Article contents">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm list-none p-0 m-0">
                    {tocItems.map((item) => (
                      <li key={item.href} className="m-0">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-orange-400 transition-colors py-1 inline-block"
                        >
                          → {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </section>
          )}

          {/* Body — markdown rendered server-side. The post-processing in
              wrapH2Sections() wraps each H2 + its content in a .md-section /
              .md-card pair so each section gets the babel-fees-style card
              treatment. Styles live in globals.css. */}
          <article
            className="markdown-article max-w-none mb-16"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          {/* FAQ — Card-style accordion matching the babel-fees layout. Uses
              native <details>/<summary> so it stays SSR-friendly and works
              without JS. The expanded answer is in the static HTML, backed
              by the FAQPage JSON-LD above. */}
          {faq.length > 0 && (
            <section
              id="article-faq"
              aria-labelledby="article-faq-heading"
              className="mb-16 scroll-mt-28"
            >
              <h2 id="article-faq-heading" className="text-2xl sm:text-3xl font-bold text-white mb-8">
                ❓ Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faq.map((item) => (
                  <details
                    key={item.q}
                    className="group bg-black border border-white/10 rounded-2xl"
                  >
                    <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4 hover:bg-black/70 transition-colors rounded-2xl">
                      <h3 className="text-lg font-semibold text-white pr-4 m-0">{item.q}</h3>
                      <ChevronDown
                        className="w-5 h-5 text-neutral-400 shrink-0 transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-gray-300 leading-relaxed whitespace-pre-line">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Sources & status footer — visible references that satisfy
              Google's helpful-content guidance ("complete description,
              sourcing and expertise"). Built from front-matter + a small
              constellation of canonical Ergo / Accord / x402 references
              that apply to every article in this cluster. */}
          <section
            aria-labelledby="article-sources-heading"
            className="mb-16 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6"
          >
            <h2 id="article-sources-heading" className="text-xl font-bold text-white mb-4">
              Sources &amp; status
            </h2>
            <dl className="text-sm text-gray-300 space-y-3 m-0">
              {frontMatter.status && (
                <div>
                  <dt className="font-semibold text-orange-300 inline">Implementation status. </dt>
                  <dd className="inline">{frontMatter.status}</dd>
                </div>
              )}
              <div>
                <dt className="font-semibold text-orange-300 inline">Code &amp; specs. </dt>
                <dd className="inline">
                  <a href="https://github.com/accord-protocol/accord-protocol" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">Accord Protocol repo</a>
                  {" · "}
                  <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">Ergo node</a>
                  {" · "}
                  <a href="https://docs.ergoplatform.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">Ergo docs</a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-orange-300 inline">External context. </dt>
                <dd className="inline">
                  <a href="https://docs.cdp.coinbase.com/x402/welcome" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">x402 (Coinbase)</a>
                  {" · "}
                  <a href="https://stripe.com/use-cases/agentic-commerce" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">Stripe Agentic Commerce</a>
                  {" · "}
                  <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">MCP</a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-orange-300 inline">Trust posture. </dt>
                <dd className="inline">
                  <Link href="/legal/security" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">Responsible disclosure</Link>
                  {" · "}
                  <Link href="/legal/risk" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">Risk disclosure</Link>
                  {" · "}
                  <Link href="/legal/official-domains" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">Official domains</Link>
                </dd>
              </div>
              {dateModified && (
                <div>
                  <dt className="font-semibold text-orange-300 inline">Last reviewed. </dt>
                  <dd className="inline font-mono text-neutral-300">{dateModified}</dd>
                </div>
              )}
            </dl>
          </section>

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
