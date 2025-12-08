import { Metadata } from "next"
import {
  createTechnologyMetadata,
  createTechArticleSchema,
  createFAQSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "babel-fees",
  title: "Babel Fees: Pay TX Fees in Any Token",
  description: "Pay Ergo transaction fees in any token without holding ERG. Babel fees enable seamless DeFi UX by allowing fee payment in stablecoins, NFTs, or custom tokens.",
  ogImage: "/og/technology/babel-fees.png",
  keywords: [
    "Babel fees", "gas abstraction", "transaction fees", "DeFi UX",
    "token payment", "stablecoin fees", "Ergo DeFi", "fee abstraction",
    "EIP-31", "gasless transactions", "crypto UX", "token economics"
  ],
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
    answer: "Any token on Ergo can potentially be used for Babel Fees. The availability depends on liquidity providers willing to accept those tokens in exchange for ERG."
  },
  {
    question: "How is the exchange rate determined?",
    answer: "The exchange rate is set by the market. Babel boxes specify the rate at which they accept tokens for ERG, creating a competitive fee market."
  }
]

// Metadata Export
export const metadata: Metadata = createTechnologyMetadata(
  SEO.slug,
  SEO.title,
  SEO.description,
  SEO.ogImage,
  SEO.keywords
)

// Layout with Schemas
export default function BabelFeesLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Babel Fees: Pay Transaction Fees in Any Token",
      description: "How Ergo's Babel Fees enable gasless UX by allowing fee payment in any token",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
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

