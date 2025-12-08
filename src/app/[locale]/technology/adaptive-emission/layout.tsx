import { Metadata } from "next"
import {
  createTechnologyMetadata,
  createTechArticleSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "adaptive-emission",
  title: "Adaptive Emission: Governance & Economics",
  description: "Community-governed monetary policy on Ergo. Miner voting adjusts emission, storage rent ensures perpetual sustainability.",
  ogImage: "/og/technology/adaptive-emission.png",
  keywords: [
    "adaptive emission", "Ergo tokenomics", "miner governance",
    "emission schedule", "cryptocurrency governance", "EIP-27",
    "soft fork voting", "monetary policy", "sustainable blockchain",
    "re-emission"
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
export default function AdaptiveEmissionLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Adaptive Emission: Ergo's Governance-Driven Economics",
      description: "How Ergo's emission schedule adapts through miner governance for long-term sustainability",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Intermediate",
      technicalAudience: "Economists and governance researchers",
      about: [
        { name: "Cryptocurrency economics" },
        { name: "Blockchain governance" },
        { name: "Token emission" },
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
