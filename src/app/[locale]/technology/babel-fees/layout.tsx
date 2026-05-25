import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import {
  createTechArticleSchema,
  createFAQSchema,
  getAlternates,
  getCanonicalUrl
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface Props {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}

const SEO = {
  slug: "babel-fees",
  ogImage: "/og/technology/babel-fees.jpg",
  keywords: [
    "Babel fees", "gas abstraction", "transaction fees", "DeFi UX",
    "token payment", "stablecoin fees", "Ergo DeFi", "fee abstraction",
    "EIP-31", "gasless transactions", "crypto UX", "token economics"
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'babelFees' })

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

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "What are Babel Fees?",
    answer: "Babel Fees allow users to pay transaction fees in tokens other than ERG. Smart contracts facilitate token-to-ERG swaps atomically within the transaction."
  },
  {
    question: "Do I need ERG to use Babel Fees?",
    answer: "No, that's the key benefit. You can transact using only your tokens, and the fee is paid in those tokens through an on-chain market mechanism."
  },
  {
    question: "Which tokens support Babel Fees?",
    answer: "Any Ergo token can potentially be used, but only where a Babel box or liquidity provider is willing to accept that token in exchange for ERG fee coverage."
  },
  {
    question: "How is the exchange rate determined?",
    answer: "The exchange rate is set by the market. Babel boxes specify the rate at which they accept tokens for ERG, creating a competitive fee market."
  }
]

export default function BabelFeesLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Babel Fees: Supported Token Fee Paths",
      description: "How Ergo's Babel Fees enable fee abstraction through supported token-to-ERG paths",
      image: SEO.ogImage,
      datePublished: "2025-08-15",
      dateModified: "2026-04-27",
      proficiencyLevel: "Beginner",
      technicalAudience: "DeFi users and developers",
      about: [
        { name: "Fee abstraction" },
        { name: "DeFi UX" },
        { name: "Token economics" },
      ],
    }),
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      {children}
    </>
  )
}
