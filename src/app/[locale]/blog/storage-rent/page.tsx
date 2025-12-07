import type { Metadata } from "next"
import { StorageRentArticleClient } from "./StorageRentClient"
import { siteConfig } from "@/config/site-config"

const origin = siteConfig.siteUrl
const url = `${origin}/blog/storage-rent`

export function generateMetadata(): Metadata {
  const title = "How Ergo's Storage Rent Solves Blockchain State Bloat"
  const description = "Ergo's storage rent charges small fees on dormant accounts, clearing dust and keeping blockchain state manageable. Learn how this ensures long-term sustainability."
  
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
      images: [{ url: `${origin}/og/storage-rent.png`, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      publishedTime: "2024-11-14T00:00:00Z",
      modifiedTime: new Date().toISOString(),
      authors: ["Ergo Team"],
      tags: ["Storage Rent", "State Bloat", "Scalability", "Sustainability"]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og/storage-rent.png`],
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
      "storage rent",
      "blockchain state bloat", 
      "ergo demurrage",
      "UTXO scalability",
      "blockchain sustainability",
      "decentralization",
      "proof of work",
      "mining economics",
      "state management",
      "lost coins recovery",
      "dust cleanup"
    ],
  }
}

export default function StorageRentPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: "How Ergo's Storage Rent Solves Blockchain State Bloat",
    description: "Ergo's miners can charge small fees on dormant accounts, clearing dust transactions and ensuring blockchain state stays manageable.",
    image: `${origin}/og/storage-rent.png`,
    datePublished: "2024-11-14T00:00:00Z",
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
    wordCount: 2000,
    timeRequired: "PT8M",
    inLanguage: "en",
    dependencies: "Ergo blockchain, UTXO model understanding",
    proficiencyLevel: "Intermediate", 
    genre: "Educational",
    technicalAudience: ["Blockchain Developers", "Node Operators", "Cryptocurrency Users"],
    about: [
      {
        "@type": "Thing",
        name: "Storage Rent",
        description: "A blockchain mechanism to prevent state bloat through demurrage fees on dormant UTXOs"
      },
      {
        "@type": "Thing",
        name: "Blockchain State Bloat",
        sameAs: "https://en.wikipedia.org/wiki/Blockchain_scalability"
      },
      {
        "@type": "Thing", 
        name: "UTXO Model",
        sameAs: "https://en.wikipedia.org/wiki/Unspent_transaction_output"
      },
      {
        "@type": "Thing",
        name: "Demurrage",
        sameAs: "https://en.wikipedia.org/wiki/Demurrage_(currency)"
      }
    ]
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 2, name: "Storage Rent", item: url },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does storage rent cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a basic UTXO without tokens or complex scripts, storage rent is approximately 0.13 ERG every four years. The fee is calculated per-byte, so larger UTXOs cost more."
        }
      },
      {
        "@type": "Question", 
        name: "How do I avoid paying storage rent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply move your coins once every four years. Any transaction that spends a UTXO resets the storage rent timer. You can also accept the small fee if you prefer not to touch cold storage."
        }
      },
      {
        "@type": "Question",
        name: "What happens if my UTXO can't pay the storage rent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If a UTXO contains less value than the required storage rent fee, it will be completely consumed and removed from the blockchain state. This helps clean up dust and forgotten coins."
        }
      },
      {
        "@type": "Question",
        name: "Is storage rent a tax or penalty?",
        acceptedAnswer: {
          "@type": "Answer", 
          text: "No, it's not a tax or penalty. Storage rent redistributes coins from inactive accounts back into circulation and rewards miners for maintaining blockchain state. It's similar to how cloud storage services charge for ongoing storage costs."
        }
      },
      {
        "@type": "Question",
        name: "How does storage rent help decentralization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By preventing unlimited state growth, storage rent ensures that regular users can continue running full nodes without needing data center resources. This maintains network decentralization and security."
        }
      },
      {
        "@type": "Question",
        name: "What is blockchain state bloat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "State bloat occurs when blockchain state (active data nodes must maintain) grows faster than network nodes can handle. Without management, only large data centers could run full nodes, threatening decentralization."
        }
      },
      {
        "@type": "Question",
        name: "How does storage rent compare to other blockchains?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most blockchains have no mechanism to control state growth. Bitcoin has millions of unspendable dust UTXOs. Ergo's storage rent proactively addresses this sustainability challenge."
        }
      },
      {
        "@type": "Question",
        name: "Can storage rent be disabled or changed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Storage rent is a core protocol feature designed for long-term sustainability. Any changes would require network consensus through Ergo's governance mechanisms."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <StorageRentArticleClient />
    </>
  )
}
