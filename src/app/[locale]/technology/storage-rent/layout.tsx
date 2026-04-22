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
  slug: "storage-rent",
  ogImage: "/og/technology/storage-rent.png",
  keywords: [
    "storage rent", "state bloat", "blockchain sustainability",
    "demurrage", "Ergo tokenomics", "lost coins recovery",
    "miner revenue", "UTXO maintenance", "blockchain economics",
    "long-term sustainability"
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.storageRent' })

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
