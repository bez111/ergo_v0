import { Metadata } from "next"
import {
  createTechnologyMetadata,
  createTechArticleSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "subblocks",
  title: "Subblocks: Sub-Second Confirmations",
  description: "Layer-1 scaling with sub-second transaction confirmations. No trusted sequencers, full security, seamless integration with existing contracts.",
  ogImage: "/og/technology/subblocks.png",
  keywords: [
    "subblocks", "fast confirmations", "Layer 1 scaling",
    "transaction speed", "blockchain scalability", "sub-second finality",
    "Ergo scaling", "throughput", "instant confirmations", "research"
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
export default function SubblocksLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Subblocks: Layer-1 Scaling for Sub-Second Confirmations",
      description: "Research into Ergo's subblock technology for rapid transaction confirmations",
      image: SEO.ogImage,
      datePublished: "2024-01-15",
      proficiencyLevel: "Advanced",
      technicalAudience: "Blockchain researchers and developers",
      about: [
        { name: "Blockchain scalability" },
        { name: "Transaction confirmation" },
        { name: "Layer 1 scaling" },
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
