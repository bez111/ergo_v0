import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import {
  createTechArticleSchema,
  createSoftwareAppSchema,
  getAlternates,
  getCanonicalUrl
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}

const SEO = {
  slug: "oracle-pools",
  ogImage: "/og/technology/oracle-pools.png",
  keywords: [
    "Oracle Pools", "decentralized oracles", "price feeds", "DeFi oracles",
    "blockchain oracles", "Ergo oracles", "data feeds", "on-chain aggregation",
    "SigmaUSD", "permissionless oracles"
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.oraclePools' })

  const title = t('title')
  const description = t('description')

  return {
    title,
    description,
    keywords: SEO.keywords,
    alternates: getAlternates(`/technology/${SEO.slug}`, locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl(`/technology/${SEO.slug}`, locale),
      title,
      description,
      images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
  }
}

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
