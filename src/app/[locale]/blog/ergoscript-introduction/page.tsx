import type { Metadata } from "next"
import ErgoScriptArticleClient from "./ErgoScriptArticleClient"
import { siteConfig } from "@/config/site-config"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/ergoscript-introduction`

export function generateMetadata(): Metadata {
  const title = "ErgoScript in 30 Minutes: A Practical Introduction to Ergo’s Smart Contract Language"
  const description =
    "Learn how ErgoScript, the Ergo blockchain’s functional smart contract language, powers secure, stateless dApps in the eUTXO model."

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
      "ErgoScript introduction",
      "Ergo smart contracts",
      "eUTXO scripting language",
      "functional smart contracts",
      "Ergo developer guide",
    ],
  }
}

export default function ErgoScriptIntroductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "ErgoScript in 30 Minutes: A Practical Introduction to Ergo’s Smart Contract Language",
    description:
      "ErgoScript is the Ergo blockchain’s functional smart contract language designed for the eUTXO model. This article explains its design, differences from Solidity, and practical dApp patterns.",
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
    wordCount: 2600,
    timeRequired: "PT12M",
    inLanguage: "en",
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "ErgoScript Introduction", item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <ErgoScriptArticleClient />
    </>
  )
}


