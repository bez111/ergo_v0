import { Metadata } from "next"
import {
  createTechnologyMetadata,
  createTechArticleSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "secure-pow",
  title: "Autolykos PoW: GPU Mining Algorithm",
  description: "Explore Autolykos v2, Ergo's memory-hard ASIC-resistant proof-of-work. GPU-friendly mining for true decentralization and energy efficiency.",
  ogImage: "/og/technology/autolykos-proof-of-work.png",
  keywords: [
    "Autolykos", "proof of work", "GPU mining", "ASIC resistant",
    "memory hard", "Ergo mining", "decentralized mining",
    "PoW algorithm", "cryptocurrency mining", "fair mining",
    "energy efficient blockchain"
  ],
}

// Metadata Export
export const metadata: Metadata = createTechnologyMetadata(
  SEO.slug,
  SEO.title,
  SEO.description,
  SEO.ogImage,
  SEO.keywords
)

// Layout with Schemas
export default function SecurePowLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Autolykos Proof-of-Work Mining Algorithm",
      description: "Technical guide to Ergo's ASIC-resistant, GPU-friendly mining algorithm",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Beginner",
      technicalAudience: "Miners and blockchain enthusiasts",
      about: [
        { name: "Proof of Work" },
        { name: "Cryptocurrency mining" },
        { name: "GPU mining" },
      ],
    }),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      {children}
    </>
  )
}
