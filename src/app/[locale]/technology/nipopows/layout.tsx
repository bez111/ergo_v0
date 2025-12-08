import { Metadata } from "next"
import {
  createTechnologyMetadata,
  createTechArticleSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "nipopows",
  title: "NIPoPoWs: Light Clients & Bridges",
  description: "Non-Interactive Proofs of Proof-of-Work enable instant mobile sync and trustless cross-chain bridges. Verify blockchain in seconds.",
  ogImage: "/og/technology/nipopows-explained.png",
  keywords: [
    "NIPoPoWs", "Non-Interactive Proofs of Proof-of-Work", "light clients",
    "mobile wallet", "cross-chain bridges", "blockchain interoperability",
    "SPV", "succinct proofs", "sidechains", "Rosen Bridge"
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
export default function NipopowsLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "NIPoPoWs: Non-Interactive Proofs of Proof-of-Work",
      description: "How NIPoPoWs enable light clients and trustless cross-chain bridges on Ergo",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Advanced",
      technicalAudience: "Blockchain researchers and developers",
      about: [
        { name: "Light client" },
        { name: "Cross-chain bridge" },
        { name: "Blockchain interoperability" },
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
