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
  slug: "velvet-forks",
  ogImage: "/og/technology/velvet-forks.png",
  keywords: [
    "velvet forks", "protocol upgrades", "backward compatibility",
    "soft forks", "blockchain evolution", "seamless upgrades",
    "no hard forks", "network consensus", "Ergo upgrades",
    "protocol evolution"
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'technology.velvetForks' })

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

export default function VelvetForksLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Velvet Forks: Seamless Protocol Upgrades",
      description: "How Ergo enables backward-compatible protocol upgrades without hard forks",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Advanced",
      technicalAudience: "Protocol developers and researchers",
      about: [
        { name: "Protocol upgrades" },
        { name: "Blockchain governance" },
        { name: "Soft forks" },
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
