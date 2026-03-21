import { Suspense } from "react"
import { blogPosts, categories } from "./_lib/blog-data"
import { BlogHero } from "./_components/blog-hero"
import TrendingNow from "./_components/trending-now"
import BlogClientStable from "./_components/blog-client-stable"
import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { generateKnowledgeGraph } from "@/lib/entity-knowledge-graph"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"


export const revalidate = 300
const pageSize = 12
const siteUrl = siteConfig.siteUrl

export async function generateMetadata({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }): Promise<Metadata> {
  const sp = (await searchParams) || {}
  const pageParam = typeof sp['page'] === "string" ? sp['page'] : Array.isArray(sp['page']) ? sp['page'][0] : undefined
  const page = Math.max(1, Number(pageParam ?? 1) || 1)
  const baseUrl = `${siteUrl}/blog`
  const title = page > 1 ? `Latest News & Insights — Page ${page}` : `Latest News & Insights — Ergo Blog`

  const allowed = new Set(["page", "cat", "sort", "q"]) // whitelist
  const hasJunk = Object.keys(sp).some((k) => !allowed.has(k))

  const twitterHandle = siteConfig.twitterHandle

  const totalPagesMeta = Math.max(1, Math.ceil(blogPosts.length / pageSize))
  const prev = page > 2 ? `${baseUrl}?page=${page - 1}` : page === 2 ? baseUrl : undefined
  const next = page < totalPagesMeta ? `${baseUrl}?page=${page + 1}` : undefined

  return {
    title,
    description: "Deep-dives, tutorials, and ecosystem updates from the Ergo community.",
    alternates: { 
      canonical: baseUrl, // Always point to page 1 for canonical
      types: { "application/rss+xml": "/blog/rss.xml" } 
    },
    other: { 
      ...(prev ? { "link:prev": prev } : {}), 
      ...(next ? { "link:next": next } : {}) 
    },
    openGraph: {
      type: "website",
      siteName: "Ergo Platform",
      locale: "en_US",
      url: page > 1 ? `${baseUrl}?page=${page}` : baseUrl,
      title,
      description: "Deep-dives, tutorials, and ecosystem updates from the Ergo community.",
      images: [{ 
        url: "/og/blog.svg", 
        width: 1200, 
        height: 630, 
        alt: "Ergo Blog - Latest Updates, Research & Guides" 
      }],
    },
    twitter: { 
      card: "summary_large_image", 
      site: twitterHandle, 
      creator: twitterHandle, 
      images: ["/og/blog.svg"] 
    },
    robots: hasJunk || page > 1 
      ? { index: false, follow: true } // noindex for pagination and junk params
      : { 
          index: true, 
          follow: true, 
          googleBot: { 
            "max-image-preview": "large", 
            "max-snippet": -1, 
            "max-video-preview": -1 
          } 
        },
  }
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = (await searchParams) || {}
  const pageParam = typeof sp['page'] === "string" ? sp['page'] : Array.isArray(sp['page']) ? sp['page'][0] : undefined
  const currentPage = Math.max(1, Number(pageParam ?? 1) || 1)

  const allowed = new Set(["page", "cat", "sort", "q"]) // whitelist
  const hasJunk = Object.keys(sp).some((k) => !allowed.has(k))

  // Canonicalize page=1 and strip junk params
  if (hasJunk || (typeof sp?.['page'] !== "undefined" && currentPage === 1)) {
    const clean = currentPage > 1 ? `/blog?page=${currentPage}` : "/blog"
    redirect(clean)
  }

  // Featured + Trending (exclude duplicate)
  const featuredPost = blogPosts[0] ?? null
  const trendingPosts = blogPosts
    .filter((post) => post.trending)
    .filter((post) => !featuredPost || post.id !== featuredPost.id)

  // Non-featured, newest first for consistent SEO order
  const allNonFeatured = blogPosts
    .slice(1) // Skip first post (used as featured)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const total = allNonFeatured.length
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize

  if (start >= total && total > 0) {
    return notFound()
  }

  const initialList = allNonFeatured.slice(start, end)
  const hasMore = end < total

  const topForSchema = allNonFeatured.slice(0, 12)

  const blogId = "https://www.ergoblockchain.org/blog#blog"
  const listId = `https://www.ergoblockchain.org/blog#list-${currentPage}`
  const collectionId = `https://www.ergoblockchain.org/blog?page=${currentPage}#collection`

  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const hasPartPages = Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1)

  const absolutize = (url: string | undefined) => {
    if (!url) return undefined
    if (/^https?:\/\//i.test(url)) return url
    return `https://www.ergoblockchain.org${url.startsWith("/") ? url : `/${url}`}`
  }

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": blogId,
    name: "Ergo Blog",
    url: `${siteConfig.siteUrl}/blog`,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "ergoblockchain.org",
      logo: { "@type": "ImageObject", url: "https://www.ergoblockchain.org/icon-512x512.png", width: 512, height: 512 }
    },
    isPartOf: { "@type": "WebSite", "@id": "https://www.ergoblockchain.org#website" },
    hasPart: hasPartPages.map((p) => ({ "@type": "CollectionPage", "@id": `https://www.ergoblockchain.org/blog?page=${p}#collection` })),
    blogPost: topForSchema.map((p) => {
      const datePublishedISO = new Date(p.date).toISOString()
      const dateModifiedISO = new Date(p.date).toISOString()
      return {
        "@type": "BlogPosting",
        headline: p.title,
        description: p.excerpt,
        image: p.image ? [{ "@type": "ImageObject", url: absolutize(p.image), width: 1200, height: 630 }] : undefined,
        url: `https://www.ergoblockchain.org/blog/${p.slug}`,
        mainEntityOfPage: `https://www.ergoblockchain.org/blog/${p.slug}`,
        datePublished: datePublishedISO,
        dateModified: dateModifiedISO,
        dateCreated: datePublishedISO,
        inLanguage: "en",
        keywords: p.tags?.join(", "),
        articleSection: p.category,
        author: { 
          "@type": "Person", 
          name: p.author.name,
          jobTitle: p.author.role
        },
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
        "@id": `https://www.ergoblockchain.org/blog/${p.slug}`,
        name: p.title,
        url: `https://www.ergoblockchain.org/blog/${p.slug}`,
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
    url: "https://www.ergoblockchain.org/blog",
    isPartOf: { "@type": "Blog", "@id": blogId },
    inLanguage: "en",
    mainEntity: { "@id": listId },
  }

  // Centralized breadcrumbs schema
  const breadcrumbsJsonLd = createBreadcrumbSchema([
    { name: "Blog", href: "/blog" },
  ])

  const websiteSearchJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.ergoblockchain.org#website",
    url: "https://www.ergoblockchain.org",
    name: "Ergo",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.ergoblockchain.org/search?q={query}",
      "query-input": "required name=query",
    },
  }
  
  // Centralized SEO schemas
  const knowledgeGraph = generateKnowledgeGraph("blog")
  
  const faqSchema = createFAQSchema([
    {
      question: "What is the Ergo blog about?",
      answer: "The Ergo blog covers blockchain technology updates, DeFi developments, technical guides, ecosystem news, and research insights about the Ergo platform.",
    },
    {
      question: "How often is new content published?",
      answer: "New articles are published regularly, covering technical updates, ecosystem developments, and educational content about Ergo blockchain.",
    },
    {
      question: "Who writes for the Ergo blog?",
      answer: "Content is created by Ergo core developers, community contributors, ecosystem projects, and technical writers passionate about decentralized technology.",
    },
  ])
  
  // Speakable schema (kept inline as it's specialized)
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.siteUrl}/blog#speakable`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".blog-description"],
    },
    name: "Ergo Blog - Latest Updates",
    description: "News, research, technical guides and ecosystem updates from Ergo blockchain",
    url: `${siteConfig.siteUrl}/blog`,
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* ✅ КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: Proper skip-link */}
      <a 
        href="#main" 
        className="skip-link"
      >
        Skip to main content
      </a>
      {/* All JSON-LD schemas via centralized renderer */}
      {renderSchemaScripts([
        blogJsonLd,
        itemListJsonLd,
        collectionPageJsonLd,
        breadcrumbsJsonLd,
        websiteSearchJsonLd,
        knowledgeGraph,
        faqSchema,
        speakableSchema,
      ])}

      {/* Background Effects */}
      <BackgroundWrapper>
        <main id="main" className="relative z-10" role="main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

          {/* Minimal Header - SEO only, visually hidden like Solana */}
          <header className="sr-only" role="banner">
            <h1 id="blog-h1" className="focus:outline-none" tabIndex={-1}>
              Ergo Blog — Latest News, Research & Guides
            </h1>
            <p>
              Deep-dives, tutorials, and ecosystem updates from the Ergo community.
            </p>
          </header>

          {/* Enhanced FEATURED + TRENDING SECTION */}
          <section className="mb-12 animate-fade-in" aria-labelledby="content-heading">
            <h2 id="content-heading" className="sr-only">Featured article and trending posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8 lg:items-stretch">
              <div role="region" aria-labelledby="featured-heading">
                <h3 id="featured-heading" className="sr-only">Featured article</h3>
                <BlogHero featuredPost={featuredPost} />
              </div>
              <aside aria-labelledby="trending" role="complementary">
                <TrendingNow posts={trendingPosts.slice(0, 3)} categories={categories.map(cat => ({ id: cat, name: cat }))} />
              </aside>
            </div>
          </section>

          {/* Interactive Filters & Articles */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Suspense>
              <BlogClientStable
                posts={blogPosts}
                categories={categories.map(cat => ({ id: cat, name: cat }))}
                page={currentPage}
                pageSize={pageSize}
                total={total}
                hasMore={hasMore}
              />
            </Suspense>
          </div>

        </div>
        </main>
      </BackgroundWrapper>
    </div>
  )
}
