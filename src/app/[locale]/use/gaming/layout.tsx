import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { createTechArticleSchema, createFAQSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "gaming",
  ogImage: "/og-gaming.png",
  canonicalPath: "/use/gaming-metaverse",
}

// i18n Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use.gaming.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [SEO.ogImage],
      type: "website",
      url: `https://ergoblockchain.org${SEO.canonicalPath}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [SEO.ogImage],
    },
    alternates: {
      canonical: `https://ergoblockchain.org${SEO.canonicalPath}`,
    },
  }
}

// Layout with Schemas
export default function GamingLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/use/${SEO.slug}`, {
      headline: "Blockchain Gaming on Ergo",
      description: "Build blockchain games with true asset ownership, NFT integration, and play-to-earn mechanics on Ergo.",
      image: SEO.ogImage,
      datePublished: "2024-01-01",
      keywords: ["blockchain gaming", "NFT games", "play-to-earn", "metaverse"],
      about: [
        { name: "Blockchain gaming" },
        { name: "NFT integration" },
        { name: "Play-to-earn" },
      ],
    }),
    createFAQSchema([
      {
        question: "What games are built on Ergo?",
        answer: "Ergo hosts various blockchain games with NFT integration, including collectible card games, strategy games, and play-to-earn experiences."
      },
      {
        question: "How do NFTs work in Ergo games?",
        answer: "Game assets are minted as native Ergo tokens, giving players true ownership that can be traded, sold, or used across compatible games."
      }
    ]),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      {children}
    </>
  )
}
