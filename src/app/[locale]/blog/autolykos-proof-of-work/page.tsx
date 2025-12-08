import type { Metadata } from "next"
import AutolykosArticleClient from "./AutolykosArticleClient"
import { siteConfig } from "@/config/site-config"
import {
  createBlogMetadata,
  createTechArticleSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "autolykos-proof-of-work",
  title: "Autolykos: Ergo's Sustainable GPU Mining Algorithm",
  description: "Explore Autolykos, Ergo's memory-hard, ASIC-resistant proof-of-work algorithm. Learn why GPU-friendly mining ensures decentralization and long-term sustainability.",
  ogImage: "/og/autolykos-proof-of-work.png",
  publishedTime: "2024-11-19T00:00:00Z",
  keywords: [
    "Autolykos mining", "Ergo proof-of-work", "ASIC resistant PoW",
    "GPU mining Ergo", "sustainable proof of work", "memory hard PoW",
    "ergo mining algorithm", "decentralized mining", "fair mining", "GPU friendly crypto"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "What is Autolykos and why is it important?",
    answer: "Autolykos is Ergo's memory-hard proof-of-work mining algorithm designed to be ASIC-resistant. It ensures fair mining by requiring significant RAM (4GB+), making it accessible to regular GPU miners rather than specialized hardware manufacturers."
  },
  {
    question: "Can I mine Ergo with a GPU?",
    answer: "Yes, Ergo is designed for GPU mining. Any modern GPU with 4GB+ VRAM can mine ERG profitably. Popular choices include NVIDIA GTX 1660, RTX 3060, and AMD RX 580/5700 series."
  },
  {
    question: "How does Autolykos prevent ASIC dominance?",
    answer: "Autolykos uses memory-hard puzzles that require large amounts of RAM access. This makes ASICs impractical since memory is expensive to integrate, leveling the playing field for consumer GPUs."
  },
  {
    question: "Is Ergo mining profitable in 2024?",
    answer: "Profitability depends on electricity costs and GPU efficiency. Ergo's ASIC resistance means GPUs remain competitive, and the algorithm is power-efficient compared to Bitcoin mining."
  },
  {
    question: "What makes Autolykos sustainable?",
    answer: "Autolykos is more energy-efficient than SHA-256 mining, uses existing consumer hardware (GPUs), and maintains decentralization by preventing mining centralization through ASIC farms."
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
export default function AutolykosProofOfWorkPage() {
  const schemas = [
    {
      ...createTechArticleSchema(`/blog/${SEO.slug}`, {
        headline: SEO.title,
        description: "Autolykos is the Ergo mining algorithm: a memory-hard proof-of-work designed for ASIC-resistant mining, sustainable PoW, and a more decentralised, GPU-friendly Ergo blockchain.",
        image: SEO.ogImage,
        datePublished: "2024-11-19",
        proficiencyLevel: "Intermediate",
        technicalAudience: "Miners, Blockchain Developers, Cryptocurrency Enthusiasts",
        about: [
          { name: "Proof of Work" },
          { name: "GPU Mining" },
          { name: "ASIC Resistance" },
        ],
      }),
      wordCount: 2400,
      timeRequired: "PT10M",
      inLanguage: "en",
      genre: "Educational",
    },
    createBreadcrumbSchema([
      { name: "Blog", href: "/blog" },
      { name: "Autolykos Proof-of-Work", href: `/blog/${SEO.slug}` },
    ]),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <AutolykosArticleClient />
    </>
  )
}
