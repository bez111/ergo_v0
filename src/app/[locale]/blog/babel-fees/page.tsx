import type { Metadata } from "next"
import BabelFeesArticleClient from "./BabelFeesClient"
import { siteConfig } from "@/config/site-config"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/babel-fees`

export function generateMetadata(): Metadata {
  const title = "Ergo’s Babel Fees Explained: Pay Crypto Transaction Fees In Any Token"
  const description =
    "Learn how Ergo’s Babel Fees let users pay transaction fees in almost any token they hold, while miners still receive ERG via on-chain Babel boxes."

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
      "Babel Fees",
      "pay gas in any token",
      "Ergo gas abstraction",
      "eUTXO fees",
      "on-chain fee market",
      "blockchain UX",
      "SigmaUSD fees",
    ],
  }
}

export default function BabelFeesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "Ergo’s Babel Fees Explained: Pay Crypto Transaction Fees In Any Token",
    description:
      "Most blockchains force users to keep the native coin just to pay gas. Ergo’s Babel Fees turn transaction fees into an on-chain market, so users can pay with almost any token while miners still receive ERG.",
    image: `${origin}/og/blog-default.svg`,
    datePublished: "2024-11-18T00:00:00Z",
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
    wordCount: 2200,
    timeRequired: "PT9M",
    inLanguage: "en",
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "Babel Fees", item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <BabelFeesArticleClient />
    </>
  )
}


