import { NextResponse } from 'next/server'

// This generates a search index for internal search functionality
// In production, this would be generated at build time
export async function GET() {
  const searchIndex = {
    version: "1.0.0",
    generated: new Date().toISOString(),
    pages: [
      {
        title: "Home",
        url: "/",
        description: "Ergo Platform - PoW/eUTXO blockchain for DeFi, privacy, sound money and autonomous work clearing",
        keywords: ["ergo", "blockchain", "smart contracts", "defi", "cryptocurrency", "autonomous work clearing", "proof of work", "eutxo"],
        content: "Ergo is a proof-of-work eUTXO blockchain for DeFi, privacy, sound money, smart contracts and verifiable autonomous work settlement",
        category: "main"
      },
      {
        title: "Agent Economy",
        url: "/agent-economy",
        description: "Autonomous agents need programmable credit, task-conditioned acceptance, receipt bundles and neutral settlement",
        keywords: ["agent economy", "AI agents", "autonomous work", "programmable credit", "receipt bundles", "MCP", "x402"],
        content: "Ergo provides a testnet-first proof surface for agent payments, receipts, wallet policy and audit-gated settlement",
        category: "agent-economy"
      },
      {
        title: "For Autonomous Agents",
        url: "/agents",
        description: "Agent-native entrypoint for capabilities, llms.txt, discovery, OpenAPI, MCP, receipts, proof APIs and mainnet gate",
        keywords: ["agents", "agent-discoverable", "llms.txt", "MCP", "OpenAPI", "capability manifest", "receipt bundles", "mainnet gate"],
        content: "Agents can find Ergo capabilities, inspect full receipt bundles, call discovery APIs, use MCP, check wallet policy and preserve the audit-gated testnet proof boundary",
        category: "agent-economy"
      },
      {
        title: "Build First Agent Receipt",
        url: "/agent-economy/first-receipt",
        description: "Golden developer path around one full receipt bundle, wallet policy check, OpenAPI, MCP health and mainnet gate",
        keywords: ["first receipt", "full receipt bundle", "wallet policy", "OpenAPI", "MCP", "mainnet gate", "autonomous work clearing"],
        content: "Build around one settled Sage receipt first: check live status, open the full receipt JSON, run policy-check, read OpenAPI, verify MCP health and stop at the audit-gated mainnet boundary",
        category: "agent-economy"
      },
      {
        title: "Autonomous Work Clearing",
        url: "/agent-economy/clearing",
        description: "Why autonomous work needs more than payments: intent, work, credit, predicate, receipt and settlement",
        keywords: ["autonomous work clearing", "agent payments", "task-conditioned payments", "eUTXO settlement", "ErgoScript predicates"],
        content: "Payments move value; clearing resolves obligations; receipts prove work; settlement closes the loop",
        category: "agent-economy"
      },
      {
        title: "Agent Payment Interop",
        url: "/agent-economy/interop",
        description: "x402, AP2, Stripe, marketplaces and Ergo mapped by layer",
        keywords: ["x402", "Google AP2", "Stripe Agentic Commerce", "agent payment interop", "Ergo proof surface"],
        content: "x402 handles payment handshakes, AP2 handles authorization, checkout rails handle commerce, and Ergo targets clearing and proof",
        category: "agent-economy"
      },
      {
        title: "Technology",
        url: "/technology",
        description: "Explore Ergo's innovative blockchain technology",
        keywords: ["utxo", "ergoscript", "sigma protocols", "nipopows", "storage rent"],
        content: "Ergo builds advanced cryptographic features and radically new DeFi functionality on the rock-solid foundations laid by Bitcoin",
        category: "technology"
      },
      {
        title: "Ecosystem",
        url: "/ecosystem",
        description: "Discover the growing Ergo ecosystem",
        keywords: ["dapps", "defi", "nft", "sigmausd", "ergopad", "spectrum"],
        content: "Explore the vibrant ecosystem of applications, tools, and services built on Ergo",
        category: "ecosystem"
      },
      {
        title: "ErgoScript",
        url: "/technology/ergoscript",
        description: "Learn about Ergo's powerful smart contract language",
        keywords: ["ergoscript", "smart contracts", "programming", "sigma protocols"],
        content: "ErgoScript is a powerful and protocol-friendly scripting language for cryptocurrencies",
        category: "technology"
      },
      {
        title: "Storage Rent",
        url: "/technology/storage-rent",
        description: "Understanding Ergo's sustainable storage rent model",
        keywords: ["storage rent", "sustainability", "blockchain economics"],
        content: "Storage rent ensures the long-term sustainability of the Ergo blockchain",
        category: "technology"
      },
      {
        title: "Mining",
        url: "/miners",
        description: "Start mining Ergo with Autolykos",
        keywords: ["mining", "autolykos", "gpu mining", "proof of work"],
        content: "Mine Ergo using consumer-grade GPUs with the ASIC-resistant Autolykos algorithm",
        category: "mining"
      },
      {
        title: "Wallets",
        url: "/wallet",
        description: "Choose the right Ergo wallet for your needs",
        keywords: ["wallets", "nautilus", "ergo mobile", "safew", "satergo"],
        content: "Secure your ERG with various wallet options for desktop, mobile, and browser",
        category: "tools"
      },
      {
        title: "SigmaUSD",
        url: "/ecosystem/sigmausd",
        description: "Algorithmic stablecoin protocol on Ergo",
        keywords: ["sigmausd", "stablecoin", "defi", "algorithmic"],
        content: "SigmaUSD is an algorithmic stablecoin that maintains USD peg through an innovative reserve mechanism",
        category: "defi"
      },
      {
        title: "Documentation",
        url: "/docs",
        description: "Comprehensive Ergo documentation",
        keywords: ["docs", "documentation", "guides", "tutorials", "reference"],
        content: "Complete documentation for developers, users, and miners",
        category: "docs"
      },
      {
        title: "Get Started",
        url: "/start",
        description: "Begin your journey with Ergo",
        keywords: ["getting started", "beginner", "guide", "tutorial"],
        content: "Everything you need to get started with Ergo Platform",
        category: "start"
      }
    ],
    categories: [
      { id: "main", name: "Main Pages", priority: 1 },
      { id: "technology", name: "Technology", priority: 2 },
      { id: "ecosystem", name: "Ecosystem", priority: 3 },
      { id: "defi", name: "DeFi", priority: 4 },
      { id: "mining", name: "Mining", priority: 5 },
      { id: "tools", name: "Tools & Wallets", priority: 6 },
      { id: "docs", name: "Documentation", priority: 7 },
      { id: "start", name: "Getting Started", priority: 8 },
      { id: "agent-economy", name: "Agent Economy", priority: 9 }
    ]
  }
  
  return NextResponse.json(searchIndex, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Content-Type': 'application/json',
    }
  })
}
