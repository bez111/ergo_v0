import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import {
  createTechArticleSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}

const SEO = {
  slug: "adaptive-emission",
  ogImage: "/og/technology/adaptive-emission.png",
  keywords: [
    "adaptive emission", "Ergo tokenomics", "miner governance",
    "emission schedule", "cryptocurrency governance", "EIP-27",
    "soft fork voting", "monetary policy", "sustainable blockchain",
    "re-emission"
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.adaptiveEmission' })

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

export default function AdaptiveEmissionLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Adaptive Emission: Ergo's Governance-Driven Economics",
      description: "How Ergo's emission schedule adapts through miner governance for long-term sustainability",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Intermediate",
      technicalAudience: "Economists and governance researchers",
      about: [
        { name: "Cryptocurrency economics" },
        { name: "Blockchain governance" },
        { name: "Token emission" },
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
