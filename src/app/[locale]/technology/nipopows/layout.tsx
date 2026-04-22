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
  slug: "nipopows",
  ogImage: "/og/technology/nipopows-explained.png",
  keywords: [
    "NIPoPoWs", "Non-Interactive Proofs of Proof-of-Work", "light clients",
    "mobile wallet", "cross-chain bridges", "blockchain interoperability",
    "SPV", "succinct proofs", "sidechains", "Rosen Bridge"
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.nipopows' })

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

export default function NipopowsLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "NIPoPoWs: Non-Interactive Proofs of Proof-of-Work",
      description: "How NIPoPoWs enable light clients and trustless cross-chain bridges on Ergo",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Advanced",
      technicalAudience: "Blockchain researchers and developers",
      about: [
        { name: "Light client" },
        { name: "Cross-chain bridge" },
        { name: "Blockchain interoperability" },
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
