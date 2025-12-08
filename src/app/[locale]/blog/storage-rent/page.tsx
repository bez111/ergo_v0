import type { Metadata } from "next"
import { StorageRentArticleClient } from "./StorageRentClient"
import {
  createBlogMetadata,
  createTechArticleSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "storage-rent",
  title: "How Ergo's Storage Rent Solves Blockchain State Bloat",
  description: "Ergo's storage rent charges small fees on dormant accounts, clearing dust and keeping blockchain state manageable. Learn how this ensures long-term sustainability.",
  ogImage: "/og/storage-rent.png",
  publishedTime: "2024-11-14T00:00:00Z",
  keywords: [
    "storage rent", "blockchain state bloat", "ergo demurrage",
    "UTXO scalability", "blockchain sustainability", "decentralization",
    "proof of work", "mining economics", "state management",
    "lost coins recovery", "dust cleanup"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "How much does storage rent cost?",
    answer: "For a basic UTXO without tokens or complex scripts, storage rent is approximately 0.13 ERG every four years. The fee is calculated per-byte, so larger UTXOs cost more."
  },
  {
    question: "How do I avoid paying storage rent?",
    answer: "Simply move your coins once every four years. Any transaction that spends a UTXO resets the storage rent timer. You can also accept the small fee if you prefer not to touch cold storage."
  },
  {
    question: "What happens if my UTXO can't pay the storage rent?",
    answer: "If a UTXO contains less value than the required storage rent fee, it will be completely consumed and removed from the blockchain state. This helps clean up dust and forgotten coins."
  },
  {
    question: "Is storage rent a tax or penalty?",
    answer: "No, it's not a tax or penalty. Storage rent redistributes coins from inactive accounts back into circulation and rewards miners for maintaining blockchain state. It's similar to how cloud storage services charge for ongoing storage costs."
  },
  {
    question: "How does storage rent help decentralization?",
    answer: "By preventing unlimited state growth, storage rent ensures that regular users can continue running full nodes without needing data center resources. This maintains network decentralization and security."
  },
  {
    question: "What is blockchain state bloat?",
    answer: "State bloat occurs when blockchain state (active data nodes must maintain) grows faster than network nodes can handle. Without management, only large data centers could run full nodes, threatening decentralization."
  },
  {
    question: "How does storage rent compare to other blockchains?",
    answer: "Most blockchains have no mechanism to control state growth. Bitcoin has millions of unspendable dust UTXOs. Ergo's storage rent proactively addresses this sustainability challenge."
  },
  {
    question: "Can storage rent be disabled or changed?",
    answer: "Storage rent is a core protocol feature designed for long-term sustainability. Any changes would require network consensus through Ergo's governance mechanisms."
  }
]

// Metadata
export function generateMetadata(): Metadata {
  return createBlogMetadata(
    SEO.slug,
    SEO.title,
    SEO.description,
    SEO.ogImage,
    SEO.publishedTime,
    SEO.keywords
  )
}

// Page Component
export default function StorageRentPage() {
  const schemas = [
    {
      ...createTechArticleSchema(`/blog/${SEO.slug}`, {
        headline: SEO.title,
        description: "Ergo's miners can charge small fees on dormant accounts, clearing dust transactions and ensuring blockchain state stays manageable.",
        image: SEO.ogImage,
        datePublished: "2024-11-14",
        proficiencyLevel: "Intermediate",
        technicalAudience: "Blockchain Developers, Node Operators, Cryptocurrency Users",
        about: [
          { name: "Storage Rent" },
          { name: "Blockchain State Bloat" },
          { name: "UTXO Model" },
          { name: "Demurrage" },
        ],
      }),
      wordCount: 2000,
      timeRequired: "PT8M",
      inLanguage: "en",
      genre: "Educational",
      dependencies: "Ergo blockchain, UTXO model understanding",
    },
    createBreadcrumbSchema([
      { name: "Blog", href: "/blog" },
      { name: "Storage Rent", href: `/blog/${SEO.slug}` },
    ]),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <StorageRentArticleClient />
    </>
  )
}
