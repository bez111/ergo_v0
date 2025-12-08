import { Metadata } from "next"
import { playbooks, playbookClusters } from "@/data/playbooks"
import { PlaybooksHubClient } from "./PlaybooksHubClient"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createCollectionSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

const origin = siteConfig.siteUrl
const url = `${origin}/playbooks`

// SEO Configuration
const SEO = {
  title: "Ergo Playbooks — Step-by-Step Guides for DeFi, Privacy & Mining | Ergo",
  description: "Step-by-step guides for building on Ergo. DeFi, privacy, mining, NFTs — choose your path and start shipping. Curated resources & tutorials.",
  keywords: [
    "Ergo playbooks", "Ergo guides", "Ergo tutorials", "DeFi guide",
    "crypto privacy guide", "GPU mining guide", "Ergo development", "blockchain tutorials"
  ],
}

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  openGraph: {
    title: "Ergo Playbooks — Step-by-Step Guides for DeFi, Privacy & Mining",
    description: SEO.description,
    type: "website",
    url: "https://ergoblockchain.org/playbooks",
    siteName: "Ergo Blockchain",
    images: [{ url: "https://ergoblockchain.org/og/hubs/playbooks.png", width: 1200, height: 630, alt: "Ergo Playbooks - Step-by-Step Guides" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergo Playbooks — Step-by-Step Guides",
    description: "Step-by-step guides for building on Ergo. DeFi, privacy, mining — choose your path and start shipping.",
    images: ["https://ergoblockchain.org/og/hubs/playbooks.png"]
  },
  alternates: { canonical: "https://ergoblockchain.org/playbooks" },
}

export default function PlaybooksPage() {
  // ItemList schema for playbooks (complex, kept structured)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    name: "Ergo Development Playbooks",
    description: "Step-by-step guides for building on Ergo blockchain. DeFi, privacy, mining, NFTs and more.",
    numberOfItems: playbooks.length,
    itemListElement: playbooks.map((playbook, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        "@id": `${origin}/playbooks/${playbook.slug}`,
        name: playbook.title,
        description: playbook.heroDescription,
        url: `${origin}/playbooks/${playbook.slug}`,
        provider: { "@type": "Organization", name: "Ergo Platform", url: origin },
        educationalLevel: playbook.difficulty === "beginner" ? "Beginner" : 
                          playbook.difficulty === "intermediate" ? "Intermediate" : "Advanced",
        timeRequired: playbook.timeToComplete,
      }
    }))
  }

  const schemas = [
    itemListSchema,
    createCollectionSchema({
      name: "Ergo Playbooks",
      description: SEO.description,
      url: "/playbooks",
    }),
    createBreadcrumbSchema([{ name: "Playbooks", href: "/playbooks" }]),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <PlaybooksHubClient playbooks={playbooks} clusters={playbookClusters} />
    </>
  )
}
