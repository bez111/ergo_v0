import { blogPosts, categories } from "./_lib/blog-data"
import { BlogHero } from "./_components/blog-hero"
import BlogClient from "./_components/blog-client"
import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"

export const revalidate = 300

export function generateMetadata({ searchParams }: { searchParams?: { page?: string } }): Metadata {
  const pageParam = searchParams?.page
  const page = Math.max(1, Number(pageParam ?? 1) || 1)
  const baseUrl = "https://ergoblockchain.org/blog"
  const canonical = page > 1 ? `${baseUrl}?page=${page}` : baseUrl
  const title = page > 1 ? `Ergo Blog — Page ${page}` : `Ergo Blog — news, research, guides`

  const prev = page > 2 ? `${baseUrl}?page=${page - 1}` : page === 2 ? baseUrl : undefined

  return {
    title,
    description: "Latest updates, deep-dives and how-tos from the Ergo ecosystem.",
    alternates: { canonical, types: { "application/rss+xml": "/blog/rss.xml" } },
    openGraph: {
      type: "website",
      siteName: "Ergo",
      locale: "en_US",
      url: canonical,
      title,
      description: "News, research and guides.",
      images: [{ url: "/og/blog.png", width: 1200, height: 630, alt: "Ergo Blog" }],
    },
    twitter: { card: "summary_large_image", site: "@ergoplatform", creator: "@ergoplatform" },
    robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    other: {
      ...(prev ? { "link:prev": prev } : {}),
    },
  }
}

export default function BlogPage({ searchParams }: { searchParams?: { page?: string } }) {
  const pageSize = 12
  const currentPage = Math.max(1, Number(searchParams?.page ?? 1) || 1)

  if (searchParams && "page" in searchParams && currentPage === 1) {
    redirect("/blog")
  }

  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0]
  const trendingPosts = blogPosts
    .filter((post) => post.trending)
    .filter((post) => post.id !== featuredPost.id)

  const allNonFeatured = blogPosts.filter((p) => !p.featured)
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

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": blogId,
    name: "Ergo Blog",
    url: "https://ergoblockchain.org/blog",
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", "@id": "https://ergoblockchain.org#website" },
    blogPost: topForSchema.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      image: p.image ? [{ "@type": "ImageObject", url: p.image, width: 1200, height: 630 }] : undefined,
      url: `https://ergoblockchain.org/blog/${p.slug}`,
      mainEntityOfPage: `https://ergoblockchain.org/blog/${p.slug}`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt || p.publishedAt,
      inLanguage: "en",
      keywords: p.tags?.join(", "),
      articleSection: categories.find((c) => c.id === p.category)?.name || p.category,
      author: { "@type": "Person", name: p.author.name },
      publisher: {
        "@type": "Organization",
        name: "ergoblockchain.org",
        logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/favicon.ico" },
      },
    })),
  }

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": listId,
    itemListOrder: "Ascending",
    numberOfItems: initialList.length,
    itemListElement: initialList.map((p, index) => ({
      "@type": "ListItem",
      position: start + index + 1,
      item: {
        "@type": "BlogPosting",
        "@id": `https://ergoblockchain.org/blog/${p.slug}`,
        name: p.title,
        url: `https://ergoblockchain.org/blog/${p.slug}`,
      },
    })),
  }

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `https://ergoblockchain.org/blog?page=${currentPage}#collection`,
    name: "Ergo Blog",
    url: "https://ergoblockchain.org/blog",
    isPartOf: { "@type": "Blog", "@id": blogId },
    inLanguage: "en",
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="mb-4">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
          </div>
          <h1 className="sr-only">Ergo Blog</h1>
          <div className="relative">
            <BlogHero featuredPost={featuredPost} trendingPosts={trendingPosts} />
          </div>

          <BlogClient
            posts={initialList}
            categories={categories}
            page={currentPage}
            pageSize={pageSize}
            total={total}
            hasMore={hasMore}
          />
        </div>
      </div>
    </div>
  )
}
