import { Metadata } from "next"
import {
  createTechnologyMetadata,
  createTechArticleSchema,
  createFAQSchema,
  createSoftwareAppSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

// SEO Configuration
const SEO = {
  slug: "ergoscript",
  title: "ErgoScript: Secure Smart Contract Language",
  description: "Learn ErgoScript programming for secure DeFi applications. Build unhackable smart contracts with built-in Sigma protocols, formal verification, and no reentrancy vulnerabilities.",
  ogImage: "/og/technology/ergoscript-introduction.png",
  keywords: [
    "ErgoScript", "smart contract language", "eUTXO", "formal verification",
    "cryptography", "DeFi", "blockchain development", "sigma protocols",
    "blockchain programming", "secure contracts", "re-entrancy protection",
    "Ergo blockchain", "cryptocurrency development"
  ],
}

// FAQ Content
const FAQ_ITEMS = [
  {
    question: "What is ErgoScript?",
    answer: "ErgoScript is Ergo's smart contract language based on Sigma protocols. It enables powerful, flexible, and secure smart contracts while maintaining the benefits of the UTXO model."
  },
  {
    question: "Is ErgoScript similar to other smart contract languages?",
    answer: "ErgoScript is unique, combining functional programming with cryptographic protocols. It's more secure than Solidity, preventing reentrancy attacks by design."
  },
  {
    question: "How do I learn ErgoScript?",
    answer: "Start with the official tutorials, use the ErgoScript playground for practice, and reference the documentation. Basic Scala knowledge helps but isn't required."
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
export default function ErgoScriptLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    createTechArticleSchema(`/technology/${SEO.slug}`, {
      headline: "ErgoScript: Smart Contract Programming Language",
      description: "Comprehensive guide to building secure smart contracts on Ergo with ErgoScript",
      image: SEO.ogImage,
      datePublished: "2023-01-15",
      proficiencyLevel: "Intermediate",
      technicalAudience: "Smart contract developers and blockchain programmers",
      about: [
        { name: "Smart contracts" },
        { name: "Functional programming" },
        { name: "Cryptographic protocols" },
      ],
    }),
    createFAQSchema(FAQ_ITEMS),
    createSoftwareAppSchema({
      name: "ErgoScript",
      description: "Secure smart contract language for Ergo blockchain with Sigma protocols",
      applicationCategory: "Programming Language",
    }),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      {children}
    </>
  )
}
