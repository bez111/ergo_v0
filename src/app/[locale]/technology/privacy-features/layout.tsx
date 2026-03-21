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
  slug: "privacy-features",
  ogImage: "/og/technology/sigma-protocols-explained.png",
  keywords: [
    "Sigma protocols", "zero knowledge proofs", "ZKP", "ring signatures",
    "ErgoMixer", "blockchain privacy", "confidential transactions",
    "privacy coins", "optional privacy", "cryptographic privacy"
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.privacyFeatures' })

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

export default function PrivacyFeaturesLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Sigma Protocols: Zero-Knowledge Privacy on Ergo",
      description: "Comprehensive guide to Ergo's privacy features including Sigma protocols and ErgoMixer",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Intermediate",
      technicalAudience: "Privacy advocates and cryptographers",
      about: [
        { name: "Zero-knowledge proof" },
        { name: "Cryptographic privacy" },
        { name: "Ring signatures" },
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
