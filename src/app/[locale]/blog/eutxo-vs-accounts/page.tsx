import type { Metadata } from "next"
import { EutxoVsAccountsClient } from "./EutxoVsAccountsClient"
import { siteConfig } from "@/config/site-config"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/eutxo-vs-accounts`

export function generateMetadata(): Metadata {
  const title = "Two Blockchain Models: Why Ergo Chose Differently"
  const description = "Deterministic execution, explicit state transitions, and auditable privacy patterns — how Ergo's eUTXO model differs from Ethereum's account model for secure, scalable DeFi."
  
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
      images: [{ url: `${origin}/og/eutxo-vs-accounts.png`, width: 1200, height: 630 }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      images: [`${origin}/og/eutxo-vs-accounts.png`],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
    keywords: [
      "ergo blockchain",
      "eutxo model",
      "ethereum accounts",
      "smart contracts",
      "ergoscript",
      "blockchain comparison",
      "deterministic execution",
      "sigma protocols",
      "defi security"
    ],
  }
}

export default function EutxoVsAccountsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "Two Blockchain Models: Why Ergo Chose Differently",
    description: "Deterministic execution, explicit state transitions, and auditable privacy patterns — how Ergo's eUTXO model differs from Ethereum's account model for secure, scalable DeFi.",
    image: `${origin}/og/eutxo-vs-accounts.png`,
    datePublished: "2024-11-07T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: origin
    },
    publisher: {
      "@type": "Organization", 
      name: "Ergo Platform",
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-ergo.svg`
      }
    },
    mainEntityOfPage: url,
    wordCount: 1800,
    timeRequired: "PT7M",
    inLanguage: "en",
    dependencies: "Basic blockchain knowledge, understanding of smart contracts",
    proficiencyLevel: "Intermediate", 
    genre: "Educational",
    technicalAudience: ["Blockchain Developers", "Smart Contract Developers", "DeFi Builders"],
    about: [
      {
        "@type": "Thing",
        name: "eUTXO Model",
        description: "Extended UTXO model that enables smart contracts with deterministic execution"
      },
      {
        "@type": "Thing",
        name: "Account Model",
        sameAs: "https://en.wikipedia.org/wiki/Ethereum#Accounts"
      },
      {
        "@type": "Thing", 
        name: "Smart Contracts",
        sameAs: "https://en.wikipedia.org/wiki/Smart_contract"
      },
      {
        "@type": "Thing",
        name: "Blockchain Scalability",
        sameAs: "https://en.wikipedia.org/wiki/Blockchain_scalability"
      }
    ]
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "eUTXO vs Accounts", item: url },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the core difference between eUTXO and accounts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "eUTXO targets specific boxes with immutable code per box and explicit state transitions; accounts update a global mutable state. eUTXO reduces cross‑contract interference and enables safe parallelism on disjoint boxes."
        }
      },
      {
        "@type": "Question", 
        name: "Is eUTXO private by default?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Privacy is optional but powerful: Sigma protocols enable confidential yet auditable flows (mixing, ring/threshold proofs, selective disclosure)."
        }
      },
      {
        "@type": "Question",
        name: "How does composability work without global state?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Through explicit patterns (singleton/state boxes), off‑chain transaction builders, and well‑defined invariants. Composition is more explicit, outcomes more predictable."
        }
      },
      {
        "@type": "Question",
        name: "Why does parallelism improve on eUTXO?",
        acceptedAnswer: {
          "@type": "Answer", 
          text: "Independent transactions that spend different boxes do not contend on a shared ledger cell; conflicts localize to specific boxes instead of rippling across a global state."
        }
      },
      {
        "@type": "Question",
        name: "Where should developers start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Begin with the eUTXO intro, ErgoScript examples, and try the eUTXO visualizer to understand explicit state transitions."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <EutxoVsAccountsClient />
    </>
  )
}
