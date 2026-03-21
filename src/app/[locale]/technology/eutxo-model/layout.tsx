import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import {
  createTechArticleSchema,
  createSoftwareAppSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}

const SEO = {
  slug: "eutxo-model",
  ogImage: "/og/technology/eutxo-vs-accounts.png",
  keywords: [
    "eUTXO", "Extended UTXO", "UTXO model", "parallel execution",
    "agentic blockchain", "eUTXO AI agents", "agentic blockchain eUTXO",
    "blockchain for AI agents", "autonomous agent payments eUTXO",
    "smart contracts", "MEV resistance", "composability",
    "Ergo blockchain", "DeFi security", "box model",
    "no reentrancy", "ethereum comparison"
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.eutxo' })

  const title = t('title')
  const description = t('description')

  return {
    title,
    description,
    keywords: SEO.keywords,
    alternates: {
      canonical: `https://www.ergoblockchain.org/technology/${SEO.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://www.ergoblockchain.org/technology/${SEO.slug}`,
      title,
      description,
      images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
  }
}

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
