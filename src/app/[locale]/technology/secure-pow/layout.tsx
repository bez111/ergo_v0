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
  slug: "secure-pow",
  ogImage: "/og/technology/autolykos-proof-of-work.png",
  keywords: [
    "Autolykos", "proof of work", "GPU mining", "ASIC resistant",
    "memory hard", "Ergo mining", "decentralized mining",
    "PoW algorithm", "cryptocurrency mining", "fair mining",
    "energy efficient blockchain"
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.securePow' })

  const title = t('title')
  const description = t('seo.description')

  return {
    title,
    description,
    keywords: SEO.keywords,
    alternates: {
      canonical: `https://ergoblockchain.org/technology/${SEO.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://ergoblockchain.org/technology/${SEO.slug}`,
      title,
      description,
      images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
  }
}

export default function SecurePowLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Autolykos Proof-of-Work Mining Algorithm",
      description: "Technical guide to Ergo's ASIC-resistant, GPU-friendly mining algorithm",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Beginner",
      technicalAudience: "Miners and blockchain enthusiasts",
      about: [
        { name: "Proof of Work" },
        { name: "Cryptocurrency mining" },
        { name: "GPU mining" },
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
