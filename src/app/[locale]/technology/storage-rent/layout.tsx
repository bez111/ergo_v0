import { Metadata } from "next"
import {
  createTechnologyMetadata,
  createTechArticleSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "storage-rent",
  title: "Storage Rent: Sustainable Blockchain",
  description: "Discover how Ergo's storage rent prevents state bloat and ensures long-term sustainability. Lost coins are recycled, miners earn forever.",
  ogImage: "/og/technology/storage-rent.png",
  keywords: [
    "storage rent", "state bloat", "blockchain sustainability",
    "demurrage", "Ergo tokenomics", "lost coins recovery",
    "miner revenue", "UTXO maintenance", "blockchain economics",
    "long-term sustainability"
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
export default function StorageRentLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Storage Rent: Ergo's Solution to State Bloat",
      description: "How storage rent ensures blockchain sustainability and prevents infinite state growth",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Intermediate",
      technicalAudience: "Developers and economists",
      about: [
        { name: "Blockchain economics" },
        { name: "State management" },
        { name: "Cryptocurrency sustainability" },
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
