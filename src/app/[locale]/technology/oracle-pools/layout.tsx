import { Metadata } from "next"
import {
  createTechnologyMetadata,
  createTechArticleSchema,
  createSoftwareAppSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "oracle-pools",
  title: "Oracle Pools: Decentralized Data Feeds",
  description: "Protocol-native decentralized oracles on Ergo. Reliable price feeds for DeFi without centralized operators or single points of failure.",
  ogImage: "/og/technology/oracle-pools.png",
  keywords: [
    "Oracle Pools", "decentralized oracles", "price feeds", "DeFi oracles",
    "blockchain oracles", "Ergo oracles", "data feeds", "on-chain aggregation",
    "SigmaUSD", "permissionless oracles"
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
export default function OraclePoolsLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Oracle Pools: Decentralized Data Feeds on Ergo",
      description: "How Ergo's native oracle pools provide reliable, decentralized price feeds for DeFi",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Intermediate",
      technicalAudience: "DeFi developers",
      about: [
        { name: "Oracle" },
        { name: "DeFi" },
        { name: "Price feeds" },
      ],
    }),
    createSoftwareAppSchema({
      name: "Ergo Oracle Pools",
      description: "Decentralized oracle infrastructure for reliable price feeds",
      applicationCategory: "Blockchain Infrastructure",
    }),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      {children}
    </>
  )
}
