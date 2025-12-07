import type { Metadata } from "next"
import ErgoScriptArticleClient from "./ErgoScriptArticleClient"
import { siteConfig } from "@/config/site-config"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/ergoscript-introduction`

export function generateMetadata(): Metadata {
  const title = "ErgoScript Tutorial: Smart Contracts on Ergo Blockchain"
  const description =
    "Learn ErgoScript, Ergo's functional smart contract language for the eUTXO model. Build secure, deterministic dApps with this practical developer guide."

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
      images: [{ url: `${origin}/og/ergoscript-introduction.png`, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      publishedTime: "2024-11-18T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Ergo Team"],
      tags: ["ErgoScript", "Smart Contracts", "eUTXO", "Developer Guide"]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og/ergoscript-introduction.png`],
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
      "ErgoScript introduction",
      "Ergo smart contracts",
      "eUTXO scripting language",
      "functional smart contracts",
      "Ergo developer guide",
      "ErgoScript tutorial",
      "blockchain programming",
      "Scala smart contracts",
      "UTXO smart contracts",
      "Ergo dApp development"
    ],
  }
}

export default function ErgoScriptIntroductionPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "ErgoScript Tutorial: Smart Contracts on Ergo Blockchain",
    description:
      "ErgoScript is the Ergo blockchain's functional smart contract language designed for the eUTXO model. This article explains its design, differences from Solidity, and practical dApp patterns.",
    image: `${origin}/og/ergoscript-introduction.png`,
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
    dependencies: "Basic programming knowledge, understanding of blockchain concepts",
    proficiencyLevel: "Intermediate",
    genre: "Tutorial",
    technicalAudience: ["Blockchain Developers", "Smart Contract Engineers", "Solidity Developers"],
    about: [
      {
        "@type": "Thing",
        name: "ErgoScript",
        description: "A functional smart contract language for the Ergo blockchain"
      },
      {
        "@type": "Thing",
        name: "Smart Contracts",
        sameAs: "https://en.wikipedia.org/wiki/Smart_contract"
      },
      {
        "@type": "Thing",
        name: "eUTXO Model",
        description: "Extended UTXO model enabling smart contracts with deterministic execution"
      }
    ]
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ErgoScript?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ErgoScript is Ergo's native smart contract language, a subset of Scala designed for the eUTXO model. It's functional, declarative, and enables secure, predictable contract execution."
        }
      },
      {
        "@type": "Question",
        name: "How is ErgoScript different from Solidity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ErgoScript uses the UTXO model (not accounts), is functional (not imperative), offers deterministic gas costs, and prevents reentrancy attacks by design. Contracts define spending conditions rather than global state changes."
        }
      },
      {
        "@type": "Question",
        name: "Do I need to know Scala to learn ErgoScript?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basic programming knowledge is helpful, but you don't need deep Scala expertise. ErgoScript uses a small subset of Scala syntax focused on predicate logic and cryptographic operations."
        }
      },
      {
        "@type": "Question",
        name: "What tools are available for ErgoScript development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key tools include Ergo Playground (browser-based IDE), Ergo AppKit (JVM SDK), Fleet SDK (TypeScript), and ergo-lib (Rust). Visual Studio Code has community extensions for syntax highlighting."
        }
      },
      {
        "@type": "Question",
        name: "What can I build with ErgoScript?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can build DEXes, lending protocols, NFT marketplaces, DAOs, stablecoins, oracle systems, and any dApp requiring trustless logic. ErgoScript's Sigma protocols also enable privacy-preserving applications."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <ErgoScriptArticleClient />
    </>
  )
}


