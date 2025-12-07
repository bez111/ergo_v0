import type { Metadata } from "next"
import BabelFeesArticleClient from "./BabelFeesClient"
import { siteConfig } from "@/config/site-config"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/babel-fees`

export function generateMetadata(): Metadata {
  const title = "Babel Fees: Pay Ergo Transaction Fees in Any Token"
  const description =
    "Learn how Ergo's Babel Fees let users pay transaction fees in any token they hold. Miners still receive ERG through on-chain Babel boxes — true gas abstraction."

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
      images: [{ url: `${origin}/og/babel-fees.png`, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      publishedTime: "2024-11-18T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Ergo Team"],
      tags: ["Babel Fees", "Gas Abstraction", "eUTXO", "DeFi UX"]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og/babel-fees.png`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { 
      index: true, 
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    },
    keywords: [
      "Babel Fees",
      "pay gas in any token",
      "Ergo gas abstraction",
      "eUTXO fees",
      "on-chain fee market",
      "blockchain UX",
      "SigmaUSD fees",
      "transaction fee abstraction",
      "multi-token fees",
      "Ergo DeFi"
    ],
  }
}

export default function BabelFeesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "Babel Fees: Pay Ergo Transaction Fees in Any Token",
    description:
      "Most blockchains force users to keep the native coin just to pay gas. Ergo's Babel Fees turn transaction fees into an on-chain market, so users can pay with almost any token while miners still receive ERG.",
    image: `${origin}/og/babel-fees.png`,
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
    proficiencyLevel: "Intermediate",
    genre: "Educational",
    technicalAudience: ["DeFi Users", "Blockchain Developers", "UX Designers"],
    about: [
      {
        "@type": "Thing",
        name: "Gas Abstraction",
        description: "Allowing users to pay transaction fees in tokens other than the native currency"
      },
      {
        "@type": "Thing",
        name: "eUTXO Model",
        description: "Extended UTXO model enabling smart contracts with deterministic execution"
      },
      {
        "@type": "Thing",
        name: "Transaction Fees",
        sameAs: "https://en.wikipedia.org/wiki/Transaction_cost"
      }
    ]
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What are Babel Fees on Ergo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Babel Fees allow users to pay Ergo transaction fees using any token, not just ERG. Miners create 'Babel boxes' that swap user tokens for ERG, enabling true gas abstraction without requiring users to hold the native coin."
        }
      },
      {
        "@type": "Question",
        name: "How do Babel Fees work technically?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Users submit transactions with tokens as fee payment. Miners run Babel boxes that atomically swap these tokens for ERG at market rates. The transaction is included, miners get ERG, and users spend their preferred token."
        }
      },
      {
        "@type": "Question",
        name: "Which tokens can I use to pay Babel Fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any token with a Babel box liquidity pool can be used. Popular options include SigmaUSD, SigRSV, and other high-liquidity Ergo tokens. Miners choose which tokens to accept based on market demand."
        }
      },
      {
        "@type": "Question",
        name: "Do Babel Fees cost more than regular ERG fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There's typically a small spread to compensate miners for the swap. However, the convenience of not needing to acquire ERG often outweighs this cost, especially for new users or specific token holders."
        }
      },
      {
        "@type": "Question",
        name: "How do Babel Fees compare to other gas abstraction solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike centralized relayer networks or meta-transactions, Babel Fees are fully on-chain and trustless. There's no third party — miners provide the service directly through market-priced Babel boxes."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <BabelFeesArticleClient />
    </>
  )
}


