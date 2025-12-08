import type { Metadata } from "next"
import NiPoPoWsExplainedClient from "./NiPoPoWsExplainedClient"
import {
  createBlogMetadata,
  createTechArticleSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "nipopows-explained",
  title: "NiPoPoWs: Trustless Light Clients & Bridges on Ergo",
  description: "Learn how NiPoPoWs (Non-Interactive Proofs of Proof-of-Work) enable lightweight blockchain verification, stateless clients, and trustless cross-chain bridges on Ergo.",
  ogImage: "/og/nipopows-explained.png",
  publishedTime: "2024-01-15T00:00:00Z",
  keywords: [
    "nipopow", "non-interactive proofs of proof-of-work", "ergo nipopow",
    "popow", "proof-of-work light client", "lightweight blockchain proofs",
    "blockchain scalability", "trustless bridges", "superblocks",
    "succinct proofs", "bitcoin spv", "stateless clients", "interoperability"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "What are NiPoPoWs?",
    answer: "Non-Interactive Proofs of Proof-of-Work (NiPoPoWs) are cryptographic proofs that allow verification of blockchain properties without downloading the entire chain. They use superblocks to create compact proofs that maintain security guarantees."
  },
  {
    question: "How do NiPoPoWs differ from Bitcoin's SPV?",
    answer: "Unlike SPV which requires downloading all block headers, NiPoPoWs use superblocks to create logarithmically-sized proofs. This makes them much more efficient for light clients and cross-chain applications."
  },
  {
    question: "What are the main use cases for NiPoPoWs?",
    answer: "NiPoPoWs enable trustless light clients, cross-chain bridges, mobile wallets, IoT applications, and any scenario where you need to verify blockchain state without full node requirements."
  },
  {
    question: "How do NiPoPoWs enable cross-chain bridges?",
    answer: "NiPoPoWs allow one blockchain to verify events on another without trusting intermediaries. A smart contract on Chain B can verify a transaction happened on Ergo by checking a compact NiPoPoW proof, enabling trustless asset transfers."
  },
  {
    question: "What are superblocks in NiPoPoWs?",
    answer: "Superblocks are rare blocks with unusually high proof-of-work difficulty. They form a 'spine' of the blockchain that can be verified quickly. The probability of finding superblocks follows a geometric distribution, enabling logarithmic proof sizes."
  },
  {
    question: "Can NiPoPoWs work with Bitcoin?",
    answer: "Bitcoin's block headers don't natively support NiPoPoWs. Ergo was designed from the start with NiPoPoW-friendly headers, making it one of the few PoW chains with native support for these proofs."
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
export default function NiPoPoWsExplainedPage() {
  const schemas = [
    {
      ...createTechArticleSchema(`/blog/${SEO.slug}`, {
        headline: SEO.title,
        description: SEO.description,
        image: SEO.ogImage,
        datePublished: "2024-01-15",
        about: [
          { name: "Non-Interactive Proofs of Proof-of-Work" },
          { name: "Light Client" },
          { name: "Cross-Chain Bridge" },
        ],
      }),
      wordCount: 1200,
      timeRequired: "PT8M",
      inLanguage: "en",
    },
    createBreadcrumbSchema([
      { name: "Blog", href: "/blog" },
      { name: "NiPoPoWs Explained", href: `/blog/${SEO.slug}` },
    ]),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <NiPoPoWsExplainedClient />
    </>
  )
}
