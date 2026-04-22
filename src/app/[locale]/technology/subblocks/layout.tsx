import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import {
  createTechArticleSchema,
  getAlternates,
  getCanonicalUrl
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}

const SEO = {
  slug: "subblocks",
  ogImage: "/og/technology/subblocks.png",
  keywords: [
    "subblocks", "fast confirmations", "Layer 1 scaling",
    "transaction speed", "blockchain scalability", "sub-second finality",
    "Ergo scaling", "throughput", "instant confirmations", "research"
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.subblocks' })

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

export default function SubblocksLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Subblocks: Layer-1 Scaling for Sub-Second Confirmations",
      description: "Research into Ergo's subblock technology for rapid transaction confirmations",
      image: SEO.ogImage,
      datePublished: "2024-01-15",
      proficiencyLevel: "Advanced",
      technicalAudience: "Blockchain researchers and developers",
      about: [
        { name: "Blockchain scalability" },
        { name: "Transaction confirmation" },
        { name: "Layer 1 scaling" },
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
