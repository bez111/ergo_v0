import type { Metadata } from "next"
import AutolykosArticleClient from "./AutolykosArticleClient"
import { siteConfig } from "@/config/site-config"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/autolykos-proof-of-work`

export function generateMetadata(): Metadata {
  const title = "Autolykos Proof-of-Work: Why Ergo’s Mining Algorithm Is Sustainable"
  const description =
    "Explore Autolykos, Ergo’s memory-hard, ASIC-resistant proof-of-work algorithm designed for GPU-friendly, sustainable mining and decentralised security."

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Ergo Blockchain",
      title,
      description,
      images: [{ url: `${origin}/og/blog-default.svg`, width: 1200, height: 630 }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      images: [`${origin}/og/blog-default.svg`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    keywords: [
      "Autolykos mining",
      "Ergo proof-of-work",
      "ASIC resistant PoW",
      "GPU mining Ergo",
      "sustainable proof of work",
      "memory hard PoW",
    ],
  }
}

export default function AutolykosProofOfWorkPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "Autolykos Proof-of-Work: Why Ergo’s Mining Algorithm Is Sustainable",
    description:
      "Autolykos is the Ergo mining algorithm: a memory-hard proof-of-work designed for ASIC-resistant mining, sustainable PoW, and a more decentralised, GPU-friendly Ergo blockchain.",
    image: `${origin}/og/blog-default.svg`,
    datePublished: "2024-11-19T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: origin,
    },
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-ergo.svg`,
      },
    },
    mainEntityOfPage: url,
    wordCount: 2400,
    timeRequired: "PT10M",
    inLanguage: "en",
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "Autolykos Proof-of-Work", item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <AutolykosArticleClient />
    </>
  )
}


