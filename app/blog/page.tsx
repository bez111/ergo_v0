import { blogPosts, categories } from "./_lib/blog-data"
import { BlogHero } from "./_components/blog-hero"
// import { BlogToolbar } from "./_components/blog-toolbar"
import BlogListSSR from "./_components/blog-list-ssr"
import TrendingNow from "./_components/trending-now"
import { BlogPagination } from "./_components/blog-pagination"
import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { SchemaTypes } from "@/lib/schema-ultimate"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"


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
  
  // Добавляем продвинутые SEO схемы
  const knowledgeGraph = generateKnowledgeGraph('blog')
  
  const faqSchema = SchemaTypes.FAQSchema([
    {
      question: "What is the Ergo blog about?",
      answer: "The Ergo blog covers blockchain technology updates, DeFi developments, technical guides, ecosystem news, and research insights about the Ergo platform."
    },
    {
      question: "How often is new content published?",
      answer: "New articles are published regularly, covering technical updates, ecosystem developments, and educational content about Ergo blockchain."
    },
    {
      question: "Who writes for the Ergo blog?",
      answer: "Content is created by Ergo core developers, community contributors, ecosystem projects, and technical writers passionate about decentralized technology."
    }
  ])
  
  const speakableSchema = SchemaTypes.SpeakableSchema({
    headline: "Ergo Blog - Latest Updates",
    summary: "News, research, technical guides and ecosystem updates from Ergo blockchain",
    url: "https://ergoblockchain.org/blog"
  })

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* ✅ КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: Proper skip-link */}
      <a 
        href="#main" 
        className="skip-link"
      >
        Skip to main content
      </a>
      {/* Существующие схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSearchJsonLd) }} />
      
      {/* Новые продвинутые схемы */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <main id="main" className="relative z-10" role="main">
        <div className="max-w-7xl mx-auto px-4 py-8">


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
          <section className="mb-12" aria-labelledby="content-heading">
            <h2 id="content-heading" className="sr-only">Featured article and trending posts</h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1" role="region" aria-labelledby="featured-heading">
                <h3 id="featured-heading" className="sr-only">Featured article</h3>
                <div className="relative min-h-[400px]">
                  <BlogHero featuredPost={featuredPost} />
                </div>
              </div>
              <aside className="w-full lg:w-80" aria-labelledby="trending" role="complementary">
                <TrendingNow posts={trendingPosts.slice(0, 3)} categories={categories} />
              </aside>
            </div>
          </section>

          {/* ✅ КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ: ARIA Live Region для динамических обновлений */}
          <section 
            aria-labelledby="blog-posts"
            aria-live="polite"
            aria-busy="false"
            className="transition-opacity duration-200"
          >
            <h2 id="blog-posts" className="sr-only">
              {currentPage > 1 ? `Blog posts page ${currentPage}` : 'All blog posts'}
            </h2>
            
            <BlogListSSR posts={initialList} categories={categories} />
            
            {/* ✅ НОВОЕ: Proper pagination component */}
            <BlogPagination 
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl="/blog"
            />
          </section>

        </div>
      </main>
    </div>
  )
}
