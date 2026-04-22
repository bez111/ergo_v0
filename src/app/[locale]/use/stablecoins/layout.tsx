import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { createTechArticleSchema, createHowToSchema, createFAQSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "stablecoins",
  ogImage: "/og-stablecoins.png",
  canonicalPath: "/use/stablecoins",
}

// i18n Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'use.stablecoins.seo' })
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [SEO.ogImage],
      type: "website",
      url: getCanonicalUrl(SEO.canonicalPath, locale),
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [SEO.ogImage],
    },
    alternates: getAlternates(SEO.canonicalPath, locale),
  }
}

// Layout with Schemas
export default function StablecoinsLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/use/${SEO.slug}`, {
      headline: "Algorithmic Stablecoins on Ergo",
      description: "SigmaUSD and other algorithmic stablecoins on Ergo. Decentralized, collateral-backed stability without centralized reserves.",
      image: SEO.ogImage,
      datePublished: "2024-01-01",
      keywords: ["SigmaUSD", "algorithmic stablecoin", "Ergo stablecoin", "DeFi"],
      about: [
        { name: "Algorithmic stablecoins" },
        { name: "SigmaUSD" },
        { name: "DeFi" },
      ],
    }),
    createHowToSchema({
      name: "How to Use SigmaUSD on Ergo",
      description: "Step-by-step guide to minting and using SigmaUSD stablecoin",
      steps: [
        { name: "Set up Wallet", text: "Download and configure an Ergo wallet like Nautilus" },
        { name: "Get ERG", text: "Acquire ERG from exchanges or mining" },
        { name: "Access SigmaUSD", text: "Visit the SigmaUSD dApp and connect your wallet" },
        { name: "Manage Positions", text: "Mint SigUSD by providing ERG collateral" },
      ],
    }),
    createFAQSchema([
      {
        question: "What is SigmaUSD?",
        answer: "SigmaUSD is an algorithmic stablecoin on Ergo, backed by ERG collateral and maintained through a reserve ratio mechanism."
      },
      {
        question: "How is SigmaUSD different from other stablecoins?",
        answer: "SigmaUSD is fully decentralized with no centralized reserves. It uses an algorithmic approach with ERG as collateral."
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
