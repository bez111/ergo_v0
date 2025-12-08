import { Metadata } from "next"
import {
  createTechnologyMetadata,
  createTechArticleSchema,
  createSoftwareAppSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "eutxo-model",
  title: "eUTXO Model: Parallel Smart Contracts",
  description: "Learn how Ergo's Extended UTXO model enables parallel execution, MEV resistance, and composable DeFi. No re-entrancy attacks by design.",
  ogImage: "/og/technology/eutxo-vs-accounts.png",
  keywords: [
    "eUTXO", "Extended UTXO", "UTXO model", "parallel execution",
    "smart contracts", "MEV resistance", "composability",
    "Ergo blockchain", "DeFi security", "box model",
    "no reentrancy", "ethereum comparison"
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
export default function EUTXOModelLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Extended UTXO Model on Ergo Blockchain",
      description: "Comprehensive guide to Ergo's eUTXO model for parallel smart contract execution",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Intermediate",
      technicalAudience: "Developers and blockchain researchers",
      about: [
        { name: "UTXO" },
        { name: "Smart contracts" },
        { name: "Blockchain scalability" },
      ],
    }),
    createSoftwareAppSchema({
      name: "Ergo eUTXO Smart Contracts",
      description: "Extended UTXO model for parallel, composable smart contracts",
      applicationCategory: "Blockchain Platform",
    }),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      {children}
    </>
  )
}
