import { blogPosts, categories } from "./_lib/blog-data"
import { BlogHero } from "./_components/blog-hero"
import BlogClient from "./_components/blog-client"
import BlogListSSR from "./_components/blog-list-ssr"
import TrendingNow from "./_components/trending-now"
import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import Link from "next/link"


export const revalidate = 300
const pageSize = 12

export async function generateMetadata({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }): Promise<Metadata> {
  const sp = (await searchParams) || {}
  const pageParam = typeof sp.page === "string" ? sp.page : Array.isArray(sp.page) ? sp.page[0] : undefined
  const page = Math.max(1, Number(pageParam ?? 1) || 1)
  const baseUrl = "https://ergoblockchain.org/blog"
  const title = page > 1 ? `Ergo Blog — Page ${page}` : `Ergo Blog — news, research, guides`

  const allowed = new Set(["page"]) // whitelist
  const hasJunk = Object.keys(sp).some((k) => !allowed.has(k))

  const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@ergoplatform"

  const totalPagesMeta = Math.max(1, Math.ceil(blogPosts.filter((p)=>!p.featured).length / pageSize))
  const prev = page > 2 ? `${baseUrl}?page=${page - 1}` : page === 2 ? baseUrl : undefined
  const next = page < totalPagesMeta ? `${baseUrl}?page=${page + 1}` : undefined

  return {
    title,
    description: "Latest updates, deep-dives and how-tos from the Ergo ecosystem.",
    alternates: { canonical: page > 1 ? `${baseUrl}?page=${page}` : baseUrl, types: { "application/rss+xml": "/blog/rss.xml" } },
    other: { ...(prev ? { "link:prev": prev } : {}), ...(next ? { "link:next": next } : {}) },
    openGraph: {
      type: "website",
      siteName: "Ergo",
      locale: "en_US",
      url: page > 1 ? `${baseUrl}?page=${page}` : baseUrl,
      title,
      description: "News, research and guides.",
      images: [{ url: "https://ergoblockchain.org/og/blog.png", width: 1200, height: 630, alt: "Ergo Blog" }],
    },
    twitter: { card: "summary_large_image", site: twitterHandle, creator: twitterHandle, images: ["https://ergoblockchain.org/og/blog.png"] },
    robots: hasJunk ? { index: false, follow: true } : { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  }
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = (await searchParams) || {}
  const pageParam = typeof sp.page === "string" ? sp.page : Array.isArray(sp.page) ? sp.page[0] : undefined
  const currentPage = Math.max(1, Number(pageParam ?? 1) || 1)

  const allowed = new Set(["page"]) // whitelist
  const hasJunk = Object.keys(sp).some((k) => !allowed.has(k))
  const baseUrl = "https://ergoblockchain.org/blog"

  // Canonicalize page=1 and strip junk params
  if (hasJunk || (typeof sp?.page !== "undefined" && currentPage === 1)) {
    const clean = currentPage > 1 ? `/blog?page=${currentPage}` : "/blog"
    redirect(clean)
  }

  // Featured + Trending (exclude duplicate)
  const featuredPost = blogPosts.find((p) => p.featured) ?? null
  const trendingPosts = blogPosts
    .filter((post) => post.trending)
    .filter((post) => !featuredPost || post.id !== featuredPost.id)

  // Non-featured, newest first for consistent SEO order
  const allNonFeatured = blogPosts
    .filter((p) => !p.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  const total = allNonFeatured.length
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize

  if (start >= total && total > 0) {
    return notFound()
  }

  const initialList = allNonFeatured.slice(start, end)
  const hasMore = end < total

  const topForSchema = allNonFeatured.slice(0, 12)

  const blogId = "https://ergoblockchain.org/blog#blog"
  const listId = `https://ergoblockchain.org/blog#list-${currentPage}`
  const collectionId = `https://ergoblockchain.org/blog?page=${currentPage}#collection`

  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const hasPartPages = Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1)

  const absolutize = (url: string | undefined) => {
    if (!url) return undefined
    if (/^https?:\/\//i.test(url)) return url
    return `https://ergoblockchain.org${url.startsWith("/") ? url : `/${url}`}`
  }

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": blogId,
    name: "Ergo Blog",
    url: "https://ergoblockchain.org/blog",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "ergoblockchain.org",
      logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/icon-512x512.png", width: 512, height: 512 }
    },
    isPartOf: { "@type": "WebSite", "@id": "https://ergoblockchain.org#website" },
    hasPart: hasPartPages.map((p) => ({ "@type": "CollectionPage", "@id": `https://ergoblockchain.org/blog?page=${p}#collection` })),
    blogPost: topForSchema.map((p) => {
      const datePublishedISO = new Date(p.publishedAt).toISOString()
      const dateModifiedISO = new Date(p.updatedAt || p.publishedAt).toISOString()
      return {
        "@type": "BlogPosting",
        headline: p.title,
        description: p.description,
        image: p.image ? [{ "@type": "ImageObject", url: absolutize(p.image), width: 1200, height: 630 }] : undefined,
        url: `https://ergoblockchain.org/blog/${p.slug}`,
        mainEntityOfPage: `https://ergoblockchain.org/blog/${p.slug}`,
        datePublished: datePublishedISO,
        dateModified: dateModifiedISO,
        dateCreated: datePublishedISO,
        inLanguage: "en",
        keywords: p.tags?.join(", "),
        articleSection: categories.find((c) => c.id === p.category)?.name || p.category,
        author: { "@type": "Person", name: p.author.name },
        isPartOf: { "@type": "Blog", "@id": blogId },
        ...(typeof p.readTime === "number" ? { timeRequired: `PT${p.readTime}M` } : {}),
      }
    }),
  }

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": listId,
    itemListOrder: "http://schema.org/ItemListOrderDescending",
    numberOfItems: initialList.length,
    itemListElement: initialList.map((p, index) => ({
      "@type": "ListItem",
      position: start + index + 1,
      item: {
        "@type": "BlogPosting",
        "@id": `https://ergoblockchain.org/blog/${p.slug}`,
        name: p.title,
        url: `https://ergoblockchain.org/blog/${p.slug}`,
        isPartOf: { "@type": "Blog", "@id": blogId },
      },
    })),
    mainEntityOfPage: collectionId,
  }

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": collectionId,
    name: "Ergo Blog",
    url: "https://ergoblockchain.org/blog",
    isPartOf: { "@type": "Blog", "@id": blogId },
    inLanguage: "en",
    mainEntity: { "@id": listId },
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ergoblockchain.org/blog#breadcrumbs",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ergoblockchain.org/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://ergoblockchain.org/blog" },
    ],
  }

  const websiteSearchJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ergoblockchain.org#website",
    url: "https://ergoblockchain.org",
    name: "Ergo",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ergoblockchain.org/search?q={query}",
      "query-input": "required name=query",
    },
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-brand-primary-600 text-white px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-400 focus:ring-offset-2 focus:ring-offset-black"
      >
        Skip to main content
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSearchJsonLd) }} />

      <main id="main" className="relative z-10" role="main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* Enhanced breadcrumbs + actions */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <nav aria-label="Breadcrumb navigation" className="text-sm text-neutral-400">
              <ol className="flex gap-2" role="list">
                <li role="listitem">
                  <Link 
                    href="/" 
                    className="hover:text-brand-primary-400 focus:text-brand-primary-400 focus:outline-none focus:underline transition-colors"
                    aria-label="Go to homepage"
                  >
                    Home
                  </Link>
                </li>
                <li role="presentation" className="text-neutral-500" aria-hidden="true">/</li>
                <li role="listitem" aria-current="page" className="text-neutral-200 font-medium">
                  Blog
                </li>
              </ol>
            </nav>
            <div className="flex items-center gap-3" role="group" aria-label="Blog actions">
              <Link 
                href="/newsletter" 
                className="text-sm text-neutral-200 hover:text-brand-primary-400 focus:text-brand-primary-400 underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-brand-primary-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1 transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </Link>
              <a 
                href="/blog/rss.xml" 
                rel="alternate noopener noreferrer" 
                className="text-sm text-neutral-400 hover:text-brand-primary-400 focus:text-brand-primary-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-400 focus:ring-offset-2 focus:ring-offset-black rounded px-1 transition-colors"
                aria-label="RSS feed"
                type="application/rss+xml"
              >
                RSS
              </a>
            </div>
          </div>

          {/* Enhanced HERO SECTION */}
          <header className="pt-4 pb-6" role="banner">
            <div className="mb-4">
              <h1 id="blog-h1" className="text-4xl md:text-5xl font-bold tracking-tight mb-3 focus:outline-none" tabIndex={-1}>
                Ergo Blog — news, research, guides
              </h1>
              <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
                Latest updates, deep-dives and how-tos from the Ergo ecosystem.
              </p>
            </div>
          </header>

          {/* Enhanced FEATURED + TRENDING SECTION */}
          <section className="pb-6" aria-labelledby="content-heading">
            <h2 id="content-heading" className="sr-only">Featured article and trending posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-9" role="region" aria-labelledby="featured-heading">
                <h3 id="featured-heading" className="sr-only">Featured article</h3>
                <div className="relative">
                  <BlogHero featuredPost={featuredPost} />
                </div>
              </div>
              <aside className="lg:col-span-3" aria-labelledby="trending" role="complementary">
                <TrendingNow posts={trendingPosts.slice(0, 3)} categories={categories} />
              </aside>
            </div>
          </section>

          <BlogClient
            posts={initialList}
            categories={categories}
            page={currentPage}
            pageSize={pageSize}
            total={total}
            hasMore={hasMore}
          >
            <BlogListSSR posts={initialList} categories={categories} />
          </BlogClient>

          {/* Enhanced SSR Pagination */}
          <nav aria-label="Blog pagination" className="mt-8 flex items-center justify-center gap-2" role="navigation">
            <div className="flex items-center gap-2">
              {currentPage > 1 && (
                <Link 
                  rel="prev" 
                  href={currentPage === 2 ? "/blog" : `/blog?page=${currentPage - 1}`}
                  className="flex items-center px-4 py-2 rounded-lg border border-neutral-700 hover:border-brand-primary-500/50 focus:border-brand-primary-500 focus:outline-none focus:ring-2 focus:ring-brand-primary-400 focus:ring-offset-2 focus:ring-offset-black text-neutral-200 hover:text-white transition-all"
                  aria-label={`Go to previous page, page ${currentPage - 1}`}
                >
                  <span aria-hidden="true">←</span>
                  <span className="ml-2">Previous</span>
                </Link>
              )}
              
              <div className="flex items-center gap-1" role="list" aria-label="Page numbers">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + Math.max(1, currentPage - 2))
                  .filter((p) => p >= 1 && p <= totalPages)
                  .map((p) => (
                    <Link 
                      key={p} 
                      href={p === 1 ? "/blog" : `/blog?page=${p}`}
                      aria-current={p === currentPage ? "page" : undefined}
                      className={`px-3 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary-400 focus:ring-offset-2 focus:ring-offset-black ${
                        p === currentPage 
                          ? "border-brand-primary-500 text-brand-primary-400 bg-brand-primary-500/10 font-medium" 
                          : "border-neutral-700 hover:border-brand-primary-500/50 text-neutral-200 hover:text-white"
                      }`}
                      aria-label={p === currentPage ? `Current page, page ${p}` : `Go to page ${p}`}
                      role="listitem"
                    >
                      {p}
                    </Link>
                  ))}
              </div>
              
              {currentPage < totalPages && (
                <Link 
                  rel="next" 
                  href={`/blog?page=${currentPage + 1}`}
                  className="flex items-center px-4 py-2 rounded-lg border border-neutral-700 hover:border-brand-primary-500/50 focus:border-brand-primary-500 focus:outline-none focus:ring-2 focus:ring-brand-primary-400 focus:ring-offset-2 focus:ring-offset-black text-neutral-200 hover:text-white transition-all"
                  aria-label={`Go to next page, page ${currentPage + 1}`}
                >
                  <span className="mr-2">Next</span>
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </main>
    </div>
  )
}
