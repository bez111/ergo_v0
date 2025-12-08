import { Metadata } from "next"
import {
  createTechnologyMetadata,
  createTechArticleSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "native-tokens",
  title: "Native Tokens & NFTs: First-Class Assets",
  description: "Create tokens and NFTs in one transaction without smart contracts. Protocol-level security, minimal fees, instant DeFi compatibility.",
  ogImage: "/og/technology/native-tokens.png",
  keywords: [
    "native tokens", "NFTs", "Ergo tokens", "EIP-4", "token creation",
    "digital assets", "NFT minting", "first-class tokens",
    "protocol-level tokens", "no smart contract tokens"
  ],
}

// Metadata Export
export const metadata: Metadata = createTechnologyMetadata(
  SEO.slug,
  SEO.title,
  SEO.description,
  SEO.ogImage,
  SEO.keywords
)

// Layout with Schemas
export default function NativeTokensLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "Native Tokens & NFTs on Ergo Blockchain",
      description: "How to create first-class tokens and NFTs without smart contracts on Ergo",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Beginner",
      technicalAudience: "Token creators and NFT artists",
      about: [
        { name: "Digital tokens" },
        { name: "NFT" },
        { name: "Token creation" },
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
