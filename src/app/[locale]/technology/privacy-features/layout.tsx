import { Metadata } from "next"
import {
  createTechnologyMetadata,
  createTechArticleSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "privacy-features",
  title: "Sigma Protocols: Zero-Knowledge Privacy",
  description: "Native zero-knowledge proofs and ring signatures on Ergo. Optional privacy with ErgoMixer, confidential assets, and Sigma protocols.",
  ogImage: "/og/technology/sigma-protocols-explained.png",
  keywords: [
    "Sigma protocols", "zero knowledge proofs", "ZKP", "ring signatures",
    "ErgoMixer", "blockchain privacy", "confidential transactions",
    "privacy coins", "optional privacy", "cryptographic privacy"
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
export default function PrivacyFeaturesLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Sigma Protocols: Zero-Knowledge Privacy on Ergo",
      description: "Comprehensive guide to Ergo's privacy features including Sigma protocols and ErgoMixer",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Intermediate",
      technicalAudience: "Privacy advocates and cryptographers",
      about: [
        { name: "Zero-knowledge proof" },
        { name: "Cryptographic privacy" },
        { name: "Ring signatures" },
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
