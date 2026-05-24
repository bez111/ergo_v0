import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/site-config'
import { sitemapHeaders, escapeXml } from '@/lib/sitemap-utils'

const BASE_URL = siteConfig.siteUrl

interface ImageEntry {
  pageUrl: string
  imageLoc: string
  title: string
  caption?: string
}

// Curated set of indexable images: each lives on a real page and represents
// the page's primary visual. Generic OG fallbacks are not included.
const IMAGES: ImageEntry[] = [
  // Hub pages
  { pageUrl: '/', imageLoc: '/og-image.png', title: 'Ergo — The Agentic Blockchain', caption: 'Layer-1 PoW blockchain for autonomous agent payments' },
  { pageUrl: '/agent-economy', imageLoc: '/og/agent-economy.jpg', title: 'Ergo Agent Economy — Notes, Reserves, Trackers', caption: 'Open-source stack for autonomous agent commerce' },
  { pageUrl: '/agent-economy/start', imageLoc: '/og/agent-economy.jpg', title: 'Start Building the Ergo Agent Economy', caption: 'Fastest path through live proof, proof APIs, launch kit, and mainnet gate' },
  { pageUrl: '/agent-economy/live', imageLoc: '/og/agent-economy.jpg', title: 'Ergo Agent Economy Live Hub', caption: 'Operational cockpit for Sage, MCP, receipts, wallet-agent policy, and mainnet gate' },
  { pageUrl: '/agent-economy/launch-kit', imageLoc: '/og/agent-economy.jpg', title: 'Ergo Agent Economy Developer Launch Kit', caption: 'Five-minute path for live status, receipts, policy checks, MCP, and Sage widget' },
  { pageUrl: '/agent-economy/proofs', imageLoc: '/og/agent-economy.jpg', title: 'Ergo Agent Economy Proof Explorer', caption: 'Evidence board for receipt bundles, signed conformance, MCP health, widget state, and gates' },
  { pageUrl: '/agent-economy/roadmap', imageLoc: '/og/agent-economy.jpg', title: 'Ergo Agent Economy Roadmap', caption: 'Strategic map for live proof, next repo work, external review gates, and later provider registry work' },
  { pageUrl: '/build/agent-payments', imageLoc: '/og/agent-economy.jpg', title: 'Agent Payment Architecture on Ergo', caption: 'Reserve + Note + Tracker + Acceptance Predicate primitives' },
  { pageUrl: '/build/quickstart', imageLoc: '/og/agent-economy.jpg', title: 'Agent Payment Quickstart — Fleet SDK in 10 minutes', caption: 'First Ergo transaction in under 10 minutes' },
  { pageUrl: '/build/services', imageLoc: '/og/hubs/developers.jpg', title: 'Ergo Developer Services', caption: 'Faucet, inspectors, receipt verifier, hash tool, and service status API' },
  { pageUrl: '/demos', imageLoc: '/og/agent-economy.jpg', title: 'Live Agent Payment Demos on Ergo Testnet', caption: 'Three working demos with Fleet SDK code' },

  // Technology pages
  { pageUrl: '/technology/eutxo-model', imageLoc: '/og/technology/eutxo-vs-accounts.jpg', title: 'Extended UTXO Model on Ergo', caption: 'Programmable UTXO with smart contract logic' },
  { pageUrl: '/technology/babel-fees', imageLoc: '/og/babel-fees.jpg', title: 'Babel Fees — Pay Transaction Fees with Any Token', caption: 'Revolutionary fee abstraction on Ergo' },
  { pageUrl: '/technology/storage-rent', imageLoc: '/og/technology/storage-rent.jpg', title: 'Storage Rent — State Bloat Solution', caption: 'Sustainable blockchain economics' },
  { pageUrl: '/technology/nipopows', imageLoc: '/og/nipopows-explained.jpg', title: 'NIPoPoWs — Light Client Cryptography', caption: 'Non-Interactive Proofs of Proof-of-Work' },
  { pageUrl: '/technology/oracle-pools', imageLoc: '/og/oracle-pools-explained.jpg', title: 'Oracle Pools on Ergo', caption: 'Decentralized data feeds' },
  { pageUrl: '/technology/ergoscript', imageLoc: '/og/ergoscript-introduction.jpg', title: 'ErgoScript — Sigma Smart Contracts', caption: 'First-class Sigma protocols for ZK contracts' },
  { pageUrl: '/technology/secure-pow', imageLoc: '/og/autolykos-proof-of-work.jpg', title: 'Autolykos v2 — ASIC-Resistant PoW', caption: 'GPU-friendly mining algorithm' },
  { pageUrl: '/technology/native-tokens', imageLoc: '/og/technology/native-tokens.jpg', title: 'Native Tokens on Ergo', caption: 'Tokens as first-class blockchain primitives' },

  // Use cases
  { pageUrl: '/use/stablecoins', imageLoc: '/og/use/og-stablecoins.jpg', title: 'Algorithmic Stablecoins on Ergo', caption: 'SigmaUSD and decentralized stablecoins' },
  { pageUrl: '/use/privacy', imageLoc: '/og/use/og-privacy.jpg', title: 'Privacy on Ergo — Sigma Protocols & Mixers', caption: 'Financial privacy with cryptographic primitives' },
  { pageUrl: '/use/bridges', imageLoc: '/og/use/og-bridges.jpg', title: 'Cross-Chain Bridges on Ergo', caption: 'Multi-signature decentralized bridges' },
  { pageUrl: '/use/daos', imageLoc: '/og/use/og-daos.jpg', title: 'DAOs & Alternative Economies on Ergo', caption: 'Composable DAO infrastructure' },
  { pageUrl: '/use/nfts', imageLoc: '/og/use/og-nfts.jpg', title: 'NFTs & Digital Assets on Ergo', caption: 'On-chain metadata and protocol royalties' },
  { pageUrl: '/use/oracles', imageLoc: '/og/use/og-oracles.jpg', title: 'Oracles & Data Feeds on Ergo', caption: 'Real-world data on-chain' },
  { pageUrl: '/use/identity', imageLoc: '/og/use/og-identity.jpg', title: 'Identity & Reputation on Ergo', caption: 'Self-sovereign identity systems' },
  { pageUrl: '/use/gaming', imageLoc: '/og/use/og-gaming.jpg', title: 'Gaming & Metaverse on Ergo', caption: 'Next-gen gaming assets' },

  // Hubs
  { pageUrl: '/wallet', imageLoc: '/og/hubs/wallet.jpg', title: 'Ergo Wallets — 7 Secure Options', caption: 'Hardware, mobile, browser wallet comparison' },
  { pageUrl: '/ecosystem', imageLoc: '/og/hubs/ecosystem.jpg', title: 'Ergo Ecosystem — DeFi, NFTs, Tools', caption: 'Active projects on Ergo blockchain' },
  { pageUrl: '/developers', imageLoc: '/og/hubs/developers.jpg', title: 'Build on Ergo — Developer Hub', caption: 'SDKs, docs, and resources for builders' },
  { pageUrl: '/miners', imageLoc: '/og-image.png', title: 'Mine ERG — Autolykos GPU Mining', caption: 'Mining guide and profitability calculator' },
  { pageUrl: '/hodlers', imageLoc: '/og/hubs/hodlers.jpg', title: 'HODL ERG — Long-term Storage', caption: 'Wallet security and self-custody' },
  { pageUrl: '/compare', imageLoc: '/og/hubs/compare.jpg', title: 'Ergo vs Other L1 Blockchains', caption: 'Comparisons with Bitcoin, Ethereum, Solana, Cardano, and more' },
  { pageUrl: '/playbooks', imageLoc: '/og/hubs/playbooks.jpg', title: 'Builder Playbooks — Step-by-Step Guides', caption: 'Complete tutorials for building on Ergo' },
  { pageUrl: '/learn', imageLoc: '/og/hubs/learn.jpg', title: 'Learn Ergo — Glossary, FAQ, Research', caption: 'Educational resources for all levels' },
  { pageUrl: '/topics', imageLoc: '/og/hubs/topics.jpg', title: 'Ergo Topics — Curated Content Hubs', caption: 'Topic-clustered knowledge base' },
  { pageUrl: '/questions', imageLoc: '/og/hubs/q&a.jpg', title: 'Ergo Q&A — Answered Questions', caption: 'Common questions with detailed answers' },
  { pageUrl: '/infographics', imageLoc: '/og/hubs/marketing.jpg', title: 'Ergo Infographics — Visual Guides', caption: 'PoW, eUTXO, storage rent, privacy infographics' },
]

export async function GET() {
  const urlEntries = IMAGES.map((img) => `  <url>
    <loc>${BASE_URL}${img.pageUrl}</loc>
    <image:image>
      <image:loc>${BASE_URL}${img.imageLoc}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>${img.caption ? `
      <image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
    </image:image>
  </url>`).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`

  return new NextResponse(xml, { headers: sitemapHeaders })
}
