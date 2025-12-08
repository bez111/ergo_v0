import type { Metadata } from 'next'
import { DevelopersClient } from './DevelopersClient'
import {
  createHubMetadata,
  createBreadcrumbSchema,
  createFAQSchema,
  createTechArticleSchema,
  createItemListSchema,
  createHowToSchema,
} from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

interface DevelopersPageProps {
  params: Promise<{ locale: string }>
}

// SEO Configuration - Combined best of /builders + /developers
const SEO = {
  path: "/developers",
  title: "Ergo Developers — ErgoScript, SDKs, eUTXO Patterns & API | Build on Ergo",
  description: "Build secure dApps on Ergo. Learn ErgoScript, explore eUTXO patterns, access SDKs (Fleet, AppKit, sigma-rust). No reentrancy attacks, predictable costs, built-in privacy with Sigma protocols.",
  ogImage: "/og/hubs/developers.png",
  keywords: [
    "Ergo developers", "ErgoScript", "eUTXO", "smart contracts",
    "build on Ergo", "Ergo SDK", "Fleet SDK", "sigma-rust", "AppKit",
    "blockchain development", "Sigma protocols", "Ergo API",
    "dApp development", "Ergo patterns", "Ergo playbooks",
    "DeFi development", "Ergo grants", "ErgoScript tutorial"
  ],
}

// Technology Index for ItemList schema
const TECHNOLOGY_INDEX = [
  { name: "Extended UTXO Model", url: "/technology/eutxo-model", description: "Parallel smart contracts with enhanced security" },
  { name: "ErgoScript", url: "/technology/ergoscript", description: "Safe smart contracts with formal verification" },
  { name: "Autolykos Proof-of-Work", url: "/technology/secure-pow", description: "ASIC-resistant GPU mining" },
  { name: "Storage Rent", url: "/technology/storage-rent", description: "Long-term sustainability through state recycling" },
  { name: "Sigma Protocols", url: "/technology/privacy-features", description: "Zero-knowledge proofs and privacy" },
  { name: "NIPoPoWs", url: "/technology/nipopows", description: "Light clients and trustless bridges" },
  { name: "Oracle Pools", url: "/technology/oracle-pools", description: "Decentralized on-chain data feeds" },
  { name: "Native Tokens", url: "/technology/native-tokens", description: "Protocol-level token and NFT support" },
  { name: "Babel Fees", url: "/technology/babel-fees", description: "Pay fees with any token" },
  { name: "Subblocks", url: "/technology/subblocks", description: "Sub-second confirmations (research)" },
  { name: "Velvet Forks", url: "/technology/velvet-forks", description: "Seamless protocol upgrades" },
  { name: "Adaptive Emission", url: "/technology/adaptive-emission", description: "Community-governed monetary policy" },
]

// Quick Start Steps for HowTo schema
const QUICK_START_STEPS = [
  {
    name: "Install Fleet SDK",
    text: "Add Fleet SDK to your JavaScript/TypeScript project with npm install @fleet-sdk/core. Fleet is the most popular SDK for Ergo web development.",
    url: "https://fleet-sdk.github.io/docs/",
  },
  {
    name: "Connect to Ergo testnet",
    text: "Configure your project to connect to Ergo testnet. Get test ERG from the faucet at testnet.ergofaucet.org to start experimenting.",
    url: "https://testnet.ergofaucet.org/",
  },
  {
    name: "Build your first transaction",
    text: "Use TransactionBuilder from Fleet SDK to create, sign, and submit your first Ergo transaction. The eUTXO model ensures deterministic execution.",
    url: "/patterns",
  },
  {
    name: "Deploy a smart contract",
    text: "Write ErgoScript contracts and deploy them to testnet. Use the Ergo Explorer to verify your transactions and contract behavior.",
    url: "/learn/ergoscript",
  },
  {
    name: "Join the developer community",
    text: "Connect with other builders on Discord, get code reviews, share your project, and receive feedback from core Ergo developers.",
    url: "https://discord.gg/ergo-platform-668903786361651200",
  },
]

// FAQ Content - Combined and deduplicated
const FAQ_ITEMS = [
  {
    question: "How do I start building on Ergo?",
    answer: "Start by learning ErgoScript fundamentals, set up the Ergo development environment (Scala/JavaScript SDKs), explore example contracts on GitHub, and join the developer Discord for support. The /learn section has structured paths for new developers."
  },
  {
    question: "What programming languages can I use for Ergo?",
    answer: "ErgoScript is the native smart contract language. For app development, use: Scala/Java (Appkit SDK), JavaScript/TypeScript (Fleet SDK), Rust (sigma-rust), or Python (ergpy). Most developers start with Fleet SDK for web apps."
  },
  {
    question: "Is ErgoScript hard to learn?",
    answer: "ErgoScript has a learning curve different from Solidity. It's functional and declarative rather than imperative. If you know Scala or functional programming, it's easier. The eUTXO model requires new thinking but prevents entire classes of bugs (no reentrancy)."
  },
  {
    question: "What makes Ergo different for developers?",
    answer: "Ergo offers: eUTXO model (no reentrancy attacks, predictable costs), Sigma Protocols (built-in privacy primitives), NiPoPoWs (light clients), and predictable ~$0.01 fees. Smart contracts are safer by design - you can't lose more than what's in a box."
  },
  {
    question: "What is the best SDK for Ergo development?",
    answer: "Fleet SDK (JavaScript/TypeScript) is the most popular choice for web applications and has excellent documentation. For JVM projects, use AppKit (Java/Scala). For Rust projects, use sigma-rust. All SDKs support the full Ergo protocol."
  },
  {
    question: "Where can I find ErgoScript code examples?",
    answer: "Check the /patterns page for copy-paste ready contract patterns, /playbooks for step-by-step guides, and docs.ergoplatform.com for the official reference. GitHub repos of ecosystem projects provide real-world examples."
  },
  {
    question: "Are there grants for Ergo developers?",
    answer: "Yes! The Ergo Foundation offers grants for open-source projects, dApps, tooling, and research. Apply via GitHub or join the developer community to discuss your project. Many successful projects started with community grants."
  }
]

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  return createHubMetadata(SEO.path, SEO.title, SEO.description, SEO.ogImage, SEO.keywords)
}

// Page Component
export default async function DevelopersPage({ params }: DevelopersPageProps) {
  const schemas = [
    // Breadcrumbs
    createBreadcrumbSchema([{ name: "Developers", href: "/developers" }]),
    
    // Main TechArticle schema
    createTechArticleSchema("/developers", {
      headline: SEO.title,
      description: SEO.description,
      image: SEO.ogImage,
      keywords: SEO.keywords,
      proficiencyLevel: "Beginner to Expert",
      technicalAudience: "Developers, Engineers, Technical Founders",
      about: [
        { name: "ErgoScript" },
        { name: "eUTXO Model" },
        { name: "Sigma Protocols" },
        { name: "Blockchain Development" },
        { name: "Smart Contracts" },
      ],
    }),
    
    // ItemList for technology index (important for AI discovery)
    createItemListSchema({
      name: "Ergo Core Technologies",
      description: "Complete index of Ergo's blockchain technologies and features for developers",
      items: TECHNOLOGY_INDEX.map((tech, index) => ({
        name: tech.name,
        url: tech.url,
        description: tech.description,
        position: index + 1,
      })),
    }, "Thing"),
    
    // HowTo schema for quick start
    createHowToSchema({
      name: "Start Building on Ergo",
      description: "Quick start guide for Ergo blockchain development with Fleet SDK",
      totalTime: "PT15M",
      steps: QUICK_START_STEPS,
    }),
    
    // FAQ schema
    createFAQSchema(FAQ_ITEMS),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <DevelopersClient />
    </>
  )
}

