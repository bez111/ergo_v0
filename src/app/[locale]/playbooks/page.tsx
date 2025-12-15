import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { playbooks, playbookClusters } from "@/data/playbooks"
import { PlaybooksHubClient } from "./PlaybooksHubClient"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createCollectionSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
}

const origin = siteConfig.siteUrl
const url = `${origin}/playbooks`

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'playbooksPage.seo' })

  const title = t('title')
  const description = t('description')

  return {
    title,
    description,
    keywords: ["Ergo playbooks", "Ergo guides", "Ergo tutorials", "DeFi guide", "crypto privacy guide", "GPU mining guide", "Ergo development", "blockchain tutorials"],
    openGraph: {
      title,
      description,
      type: "website",
      url: getCanonicalUrl('/playbooks', locale),
      siteName: "Ergo Blockchain",
      images: [{ url: "https://ergoblockchain.org/og/hubs/playbooks.png", width: 1200, height: 630, alt: "Ergo Playbooks - Step-by-Step Guides" }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://ergoblockchain.org/og/hubs/playbooks.png"]
    },
    alternates: getAlternates('/playbooks', locale),
  }
}

export default async function PlaybooksPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'playbooksPage.seo' })
  
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
      description: t('description'),
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
