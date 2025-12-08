import { Metadata } from "next"
import {
  createTechnologyMetadata,
  createTechArticleSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "velvet-forks",
  title: "Velvet Forks: Seamless Protocol Upgrades",
  description: "Upgrade Ergo protocol without hard forks. Backward-compatible changes, gradual adoption, no network splits or ecosystem fragmentation.",
  ogImage: "/og/technology/velvet-forks.png",
  keywords: [
    "velvet forks", "protocol upgrades", "backward compatibility",
    "soft forks", "blockchain evolution", "seamless upgrades",
    "no hard forks", "network consensus", "Ergo upgrades",
    "protocol evolution"
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
export default function VelvetForksLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Velvet Forks: Seamless Protocol Upgrades",
      description: "How Ergo enables backward-compatible protocol upgrades without hard forks",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Advanced",
      technicalAudience: "Protocol developers and researchers",
      about: [
        { name: "Protocol upgrades" },
        { name: "Blockchain governance" },
        { name: "Soft forks" },
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
