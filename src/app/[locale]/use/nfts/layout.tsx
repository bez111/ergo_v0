import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { createTechArticleSchema, createFAQSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "nfts",
  ogImage: "/og-nfts.png",
  canonicalPath: "/use/nfts-digital-assets",
}

// i18n Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use.nfts.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [SEO.ogImage],
      type: "website",
      url: `https://www.ergoblockchain.org${SEO.canonicalPath}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [SEO.ogImage],
    },
    alternates: {
      canonical: `https://www.ergoblockchain.org${SEO.canonicalPath}`,
    },
  }
}

// Layout with Schemas
export default function NFTsLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/use/${SEO.slug}`, {
      headline: "NFTs on Ergo: Native Digital Assets",
      description: "Create and trade NFTs as first-class native tokens on Ergo. Low fees, instant minting, full ownership.",
      image: SEO.ogImage,
      datePublished: "2024-01-01",
      keywords: ["Ergo NFT", "NFT marketplace", "digital collectibles", "native tokens", "SkyHarbor"],
      about: [
        { name: "NFT" },
        { name: "Digital collectibles" },
        { name: "Native tokens" },
      ],
    }),
    createFAQSchema([
      {
        question: "How do I mint NFTs on Ergo?",
        answer: "Mint NFTs using platforms like SkyHarbor or Ergo Auction House. Connect your wallet, upload media, set metadata, and pay a small ERG fee."
      },
      {
        question: "Why are Ergo NFTs different?",
        answer: "Ergo NFTs are native tokens, not smart contract records. This means lower fees, better security, and true ownership without contract dependencies."
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
