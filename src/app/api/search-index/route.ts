import { NextResponse } from 'next/server'
import { getAllBlogPostsWithUploaded } from '@/app/[locale]/blog/_lib/uploaded-posts'
import { menuData } from '@/app/[locale]/docs/menuData'

// Generate a comprehensive search index for SEO and site search
export async function GET() {
  const baseUrl = 'https://www.ergoblockchain.org'
  const posts = await getAllBlogPostsWithUploaded()
  
  // Index blog posts
  const blogIndex = posts.map(post => ({
    id: `blog-${post.slug}`,
    type: 'blog',
    title: post.title,
    description: post.excerpt,
    content: post.excerpt,
    url: `/blog/${post.slug}`,
    absoluteUrl: `${baseUrl}/blog/${post.slug}`,
    image: post.image,
    author: post.author.name,
    category: post.category,
    tags: post.tags ?? [],
    publishedAt: post.date,
    updatedAt: post.lastUpdated ?? post.date,
    readTime: post.readTime,
    priority: 0.7,
    changeFrequency: 'weekly',
    keywords: [...(post.tags ?? []), post.category, 'ergo', 'blockchain', 'blog'].join(', ')
  }))
  
  // Index documentation pages
  interface MenuItem {
    href?: string
    label?: string
    description?: string
    items?: MenuItem[]
  }
  
  const docsIndex: Record<string, unknown>[] = []
  const flattenDocs = (items: MenuItem[], parent = '') => {
    items.forEach((item: MenuItem) => {
      if (item.href && item.label) {
        docsIndex.push({
          id: `doc-${item.href}`,
          type: 'documentation',
          title: item.label,
          description: item.description || `Documentation for ${item.label}`,
          url: item.href,
          absoluteUrl: `${baseUrl}${item.href}`,
          parent: parent,
          priority: item.href.includes('/developers') ? 0.6 : 0.5,
          changeFrequency: 'monthly',
          keywords: [item.label.toLowerCase(), 'documentation', 'ergo', 'guide'].join(', ')
        })
      }
      if (item.items) {
        flattenDocs(item.items, item.label || '')
      }
    })
  }
  flattenDocs(menuData as MenuItem[])
  
  // Index main pages with enhanced SEO data
  const mainPages = [
    {
      id: 'home',
      type: 'page',
      title: 'Ergo - PoW/eUTXO Blockchain for DeFi and Autonomous Work',
      description: 'Ergo combines PoW/eUTXO smart contracts, DeFi, privacy, sound money, and a public proof surface where autonomous work gets paid, proven and settled.',
      url: '/',
      absoluteUrl: baseUrl,
      priority: 1.0,
      changeFrequency: 'daily',
      keywords: 'ergo, blockchain, defi, cryptocurrency, smart contracts, eutxo, privacy, sound money, autonomous work clearing, proof surface, receipt bundles',
      schema: ['Organization', 'WebSite']
    },
    {
      id: 'wallet',
      type: 'page',
      title: 'Ergo Wallets - Desktop, Mobile & Hardware Solutions',
      description: 'Choose from trusted Ergo wallets: Nautilus for dApps, Satergo for full nodes, hardware wallets for cold storage.',
      url: '/wallet',
      absoluteUrl: `${baseUrl}/wallet`,
      priority: 0.9,
      changeFrequency: 'weekly',
      keywords: 'ergo wallet, nautilus, satergo, hardware wallet, crypto wallet',
      schema: ['CollectionPage', 'SoftwareApplication']
    },
    {
      id: 'technology',
      type: 'page',
      title: 'Ergo Technology - eUTXO, ErgoScript, Sigma Protocols',
      description: 'Explore Ergo\'s innovative technology: eUTXO model for parallel execution, ErgoScript for secure contracts, Sigma protocols for privacy.',
      url: '/technology',
      absoluteUrl: `${baseUrl}/technology`,
      priority: 0.8,
      changeFrequency: 'monthly',
      keywords: 'eutxo, ergoscript, sigma protocols, autolykos, nipopows, storage rent',
      schema: ['TechArticle', 'FAQPage']
    },
    {
      id: 'ecosystem',
      type: 'page',
      title: 'Ergo Ecosystem - DeFi, NFTs, Privacy Tools',
      description: 'Discover the Ergo ecosystem: DeFi protocols, NFT marketplaces, privacy tools, and community projects.',
      url: '/ecosystem',
      absoluteUrl: `${baseUrl}/ecosystem`,
      priority: 0.8,
      changeFrequency: 'weekly',
      keywords: 'ergo ecosystem, defi, nfts, privacy, dapps, projects',
      schema: ['CollectionPage', 'ItemList']
    },
    {
      id: 'ergo-watch',
      type: 'page',
      title: 'Ergo Watch - Live Ergo Network Metrics',
      description: 'Runtime-safe Ergo network metrics, mining distribution, emission progress, SigmaUSD state, mempool activity, token lookup and prototype agent-economy analytics.',
      url: '/ergo-watch',
      absoluteUrl: `${baseUrl}/ergo-watch`,
      priority: 0.85,
      changeFrequency: 'daily',
      keywords: 'ergo watch, ergo metrics, hashrate, emission, sigusd, mempool, tokens, agent economy metrics',
      schema: ['Dataset', 'CollectionPage']
    },
    {
      id: 'learn',
      type: 'page',
      title: 'Learn Ergo - Tutorials, Guides & Educational Resources',
      description: 'Master Ergo blockchain: ErgoScript tutorials, comprehensive FAQ, research papers, technical guides.',
      url: '/learn',
      absoluteUrl: `${baseUrl}/learn`,
      priority: 0.8,
      changeFrequency: 'weekly',
      keywords: 'learn ergo, tutorials, guides, education, ergoscript tutorial',
      schema: ['Course', 'LearningResource']
    },
    {
      id: 'freedom-seekers',
      type: 'page',
      title: 'Freedom Seekers - Self-Custody, Privacy and Financial Sovereignty',
      description: 'A path for users who want to control their money: wallets, privacy, getting ERG and long-term self-custody.',
      url: '/hodlers',
      absoluteUrl: `${baseUrl}/hodlers`,
      priority: 0.75,
      changeFrequency: 'weekly',
      keywords: 'freedom seekers, self custody, privacy, wallet, get erg, financial sovereignty',
      schema: ['CollectionPage']
    },
    {
      id: 'cypherpunks',
      type: 'page',
      title: 'Cypherpunks - ErgoScript, Privacy and Unstoppable Contracts',
      description: 'A builder path for cypherpunks: ErgoScript, developer resources, smart-contract patterns and privacy-preserving dApps.',
      url: '/developers',
      absoluteUrl: `${baseUrl}/developers`,
      priority: 0.85,
      changeFrequency: 'weekly',
      keywords: 'cypherpunks, ergoscript, developers, privacy dapps, smart contracts, patterns',
      schema: ['CollectionPage', 'TechArticle']
    },
    {
      id: 'miners',
      type: 'page',
      title: 'Miners - GPU-Friendly Proof of Work on Ergo',
      description: 'Mining path for Ergo: Autolykos, GPU mining, mining guides, hashrate, emission and live mining metrics.',
      url: '/miners',
      absoluteUrl: `${baseUrl}/miners`,
      priority: 0.85,
      changeFrequency: 'weekly',
      keywords: 'miners, mining ergo, autolykos, gpu mining, hashrate, emission',
      schema: ['HowTo', 'CollectionPage']
    },
    {
      id: 'agent-builders',
      type: 'page',
      title: 'Agent Builders - Autonomous Agent Payments on Ergo',
      description: 'A path for building autonomous agents that pay, verify work and settle through Accord, demos and Ergo Watch agent metrics.',
      url: '/agent-economy',
      absoluteUrl: `${baseUrl}/agent-economy`,
      priority: 0.9,
      changeFrequency: 'weekly',
      keywords: 'agent builders, agent economy, accord protocol, x402, mcp, receipts, autonomous work clearing, programmable credit',
      schema: ['TechArticle', 'SoftwareApplication']
    },
    {
      id: 'agents-capability-surface',
      type: 'page',
      title: 'For Autonomous Agents - Ergo Capability Surface',
      description: 'Agent-native entrypoint for llms.txt, capability manifest, discovery API, OpenAPI, MCP, receipt bundles, proof APIs, wallet policy and mainnet gate.',
      url: '/agents',
      absoluteUrl: `${baseUrl}/agents`,
      priority: 0.95,
      changeFrequency: 'weekly',
      keywords: 'agent-discoverable website, AI agent capabilities, llms.txt, MCP endpoint, OpenAPI, proof API, full receipt bundle, autonomous work clearing, mainnet gate',
      schema: ['WebPage', 'SoftwareApplication', 'Dataset']
    },
    {
      id: 'agent-service-publish',
      type: 'page',
      title: 'Publish Agent Service - Ergo Provider Manifest Validation',
      description: 'Validate an Ergo agent service manifest before registry review: capabilities, pricing, accepted payment rails, predicates, receipt expectations, evidence, and testnet-only posture.',
      url: '/agents/publish',
      absoluteUrl: `${baseUrl}/agents/publish`,
      priority: 0.85,
      changeFrequency: 'weekly',
      keywords: 'publish agent service, Ergo agent registry, provider manifest, autonomous work services, receipt-backed provider, testnet Note, agent service validation',
      schema: ['HowTo', 'SoftwareApplication', 'Dataset']
    },
    {
      id: 'agent-provider-onboarding',
      type: 'page',
      title: 'Provider Onboarding - Ergo Agent Service Golden Path',
      description: 'Golden path for provider agents on Ergo: manifest validation, MCP publish contract, job acceptance, quote scaffold, receipt expectation, wallet boundary and operator review.',
      url: '/agents/onboarding',
      absoluteUrl: `${baseUrl}/agents/onboarding`,
      priority: 0.9,
      changeFrequency: 'weekly',
      keywords: 'Ergo provider onboarding, agent service manifest, MCP publish service, autonomous work provider, receipt-backed jobs, wallet boundary, operator review',
      schema: ['HowTo', 'SoftwareApplication', 'Dataset']
    },
    {
      id: 'agent-reputation',
      type: 'page',
      title: 'Agent Reputation Graph - Ergo Receipt-Derived Trust',
      description: 'Inspect receipt-derived reputation signals for Ergo agent services: full receipts, testnet settlements, verifier coverage, disputes, evidence links, and mainnet boundaries.',
      url: '/agents/reputation',
      absoluteUrl: `${baseUrl}/agents/reputation`,
      priority: 0.9,
      changeFrequency: 'weekly',
      keywords: 'agent reputation graph, receipt-derived trust, Ergo autonomous work, settlement evidence, verifier coverage, agent service reputation, testnet receipts',
      schema: ['WebPage', 'SoftwareApplication', 'Dataset']
    },
    {
      id: 'agent-job-acceptance',
      type: 'page',
      title: 'Accept Agent Job - Ergo Worker Intent Validation',
      description: 'Validate an Ergo agent job acceptance intent before operator assignment: job id, required capabilities, proposed output terms, receipt expectations, evidence, and testnet-only posture.',
      url: '/jobs/accept',
      absoluteUrl: `${baseUrl}/jobs/accept`,
      priority: 0.85,
      changeFrequency: 'weekly',
      keywords: 'accept agent job, Ergo jobs board, autonomous work bounties, receipt-backed job, job acceptance intent, testnet Note, worker agent validation',
      schema: ['HowTo', 'SoftwareApplication', 'Dataset']
    },
    {
      id: 'agent-job-quote',
      type: 'page',
      title: 'Quote Agent Job - Ergo Agreement and Receipt Handoff',
      description: 'Scaffold an Ergo agent job quote after acceptance: quote terms, Agreement draft, receipt expectation, settlement boundary, testnet Note rail, and operator approval.',
      url: '/jobs/quote',
      absoluteUrl: `${baseUrl}/jobs/quote`,
      priority: 0.85,
      changeFrequency: 'weekly',
      keywords: 'quote agent job, Ergo agreement draft, receipt handoff, autonomous work quote, testnet Note, settlement boundary, agent job quote validation',
      schema: ['HowTo', 'SoftwareApplication', 'Dataset']
    },
    {
      id: 'agent-economy-start',
      type: 'page',
      title: 'Start Building the Ergo Agent Economy',
      description: 'The fastest path through Ergo agent-economy live proof, Proof Explorer, developer launch kit, machine discovery, OpenAPI and the mainnet gate.',
      url: '/agent-economy/start',
      absoluteUrl: `${baseUrl}/agent-economy/start`,
      priority: 0.9,
      changeFrequency: 'weekly',
      keywords: 'Ergo Agent Economy start, proof API, discovery descriptor, OpenAPI, developer launch path, mainnet gate',
      schema: ['TechArticle', 'SoftwareApplication']
    },
    {
      id: 'agent-economy-live',
      type: 'page',
      title: 'Agent Economy Live Hub',
      description: 'A public live cockpit for Sage receipts, MCP health, wallet-agent policy checks, widget state, signer status, and audit-gated mainnet posture.',
      url: '/agent-economy/live',
      absoluteUrl: `${baseUrl}/agent-economy/live`,
      priority: 0.9,
      changeFrequency: 'hourly',
      keywords: 'Agent Economy live hub, Sage receipts, MCP health, wallet-agent policy, mainnet gate, Ergo live proof',
      schema: ['SoftwareApplication', 'Dataset']
    },
    {
      id: 'agent-economy-launch-kit',
      type: 'page',
      title: 'Agent Economy Developer Launch Kit',
      description: 'A five-minute developer path and JSON Schema-backed contract for Ergo agent-economy surfaces: live status, receipt bundles, wallet-agent policy checks, MCP, services and Sage widget.',
      url: '/agent-economy/launch-kit',
      absoluteUrl: `${baseUrl}/agent-economy/launch-kit`,
      priority: 0.9,
      changeFrequency: 'weekly',
      keywords: 'agent economy launch kit, developer launch kit schema, Sage widget, policy-check, MCP, receipt bundle, Ergo developer services',
      schema: ['TechArticle', 'SoftwareApplication']
    },
    {
      id: 'agent-economy-first-receipt',
      type: 'page',
      title: 'Build First Agent Receipt',
      description: 'A golden developer path around one settled testnet receipt: live status, full receipt JSON, wallet policy check, OpenAPI, MCP health and mainnet gate.',
      url: '/agent-economy/first-receipt',
      absoluteUrl: `${baseUrl}/agent-economy/first-receipt`,
      priority: 0.9,
      changeFrequency: 'weekly',
      keywords: 'build first receipt, full receipt bundle, agent payment receipt, wallet policy check, MCP health, OpenAPI, mainnet gate, autonomous work clearing',
      schema: ['HowTo', 'SoftwareApplication', 'Dataset']
    },
    {
      id: 'agent-economy-clearing',
      type: 'page',
      title: 'Autonomous Work Clearing on Ergo',
      description: 'Canonical explanation of why autonomous agents need more than payments: intent, work, credit, predicates, receipts and PoW/eUTXO settlement.',
      url: '/agent-economy/clearing',
      absoluteUrl: `${baseUrl}/agent-economy/clearing`,
      priority: 0.9,
      changeFrequency: 'weekly',
      keywords: 'autonomous work clearing, agent payments, programmable credit, task-conditioned payments, receipt bundles, eUTXO settlement, ErgoScript predicates',
      schema: ['TechArticle', 'SoftwareApplication']
    },
    {
      id: 'agent-economy-interop',
      type: 'page',
      title: 'Agent Payment Interop: x402, AP2, Stripe, Marketplaces, and Ergo',
      description: 'Comparison page mapping x402 payment handshakes, AP2 authorization, Stripe checkout, marketplaces, and Ergo clearing/proof surfaces.',
      url: '/agent-economy/interop',
      absoluteUrl: `${baseUrl}/agent-economy/interop`,
      priority: 0.88,
      changeFrequency: 'weekly',
      keywords: 'x402, Google AP2, Stripe Agentic Commerce, NEAR Agent Market, agent payment interop, autonomous work clearing, Ergo proof surface',
      schema: ['TechArticle', 'FAQPage']
    },
    {
      id: 'agent-economy-proof-explorer',
      type: 'page',
      title: 'Agent Economy Proof Explorer',
      description: 'A human and machine-readable evidence board for Sage full receipt bundles, signed Accord conformance evidence, MCP health, widget state and closed mainnet gates.',
      url: '/agent-economy/proofs',
      absoluteUrl: `${baseUrl}/agent-economy/proofs`,
      priority: 0.9,
      changeFrequency: 'hourly',
      keywords: 'Agent Economy proof explorer, Sage receipt bundle, Accord conformance evidence, MCP health, proof API, testnet proof',
      schema: ['Dataset', 'SoftwareApplication']
    },
    {
      id: 'agent-economy-roadmap',
      type: 'page',
      title: 'Agent Economy Roadmap',
      description: 'Strategic roadmap for Ergo Agent Economy live proof, developer surfaces, wallet-agent references, external review gates and audit-bound mainnet identity.',
      url: '/agent-economy/roadmap',
      absoluteUrl: `${baseUrl}/agent-economy/roadmap`,
      priority: 0.9,
      changeFrequency: 'weekly',
      keywords: 'Agent Economy roadmap, helicopter view, live proof surface, Sage widget, wallet-agent reference, mainnet gate, external audit',
      schema: ['TechArticle', 'Dataset']
    },
    {
      id: 'ergo-connect-wallet-boundary',
      type: 'page',
      title: 'ErgoConnect Wallet Boundary',
      description: 'TrustConnect-style CAIP-native wallet boundary spec for Ergo autonomous work: ErgoAuth proof, ErgoPay handoff, wallet policy, reduced transactions, receipt expectations and audit-gated mainnet posture.',
      url: '/build/ergo-connect',
      absoluteUrl: `${baseUrl}/build/ergo-connect`,
      priority: 0.85,
      changeFrequency: 'weekly',
      keywords: 'ErgoConnect, Ergo wallet connect, CAIP Ergo namespace, ErgoAuth, ErgoPay, wallet policy, AI agent wallet, autonomous work settlement, receipt-backed signing',
      schema: ['SoftwareApplication', 'Dataset', 'TechArticle']
    },
    {
      id: 'community',
      type: 'page',
      title: 'Community - No VC, No Premine, Built by Ergo Contributors',
      description: 'Community path for people who want to join Ergo: forums, Discord, ecosystem projects, manifesto and contribution channels.',
      url: '/start/community',
      absoluteUrl: `${baseUrl}/start/community`,
      priority: 0.8,
      changeFrequency: 'weekly',
      keywords: 'ergo community, no premine, no vc, fair launch, contributors, discord, forum',
      schema: ['Organization', 'CollectionPage']
    },
    {
      id: 'start',
      type: 'page',
      title: 'Start Your Ergo Journey - Beginner\'s Guide',
      description: 'New to Ergo? Start here! Learn the basics, get a wallet, understand the technology, or begin mining.',
      url: '/start',
      absoluteUrl: `${baseUrl}/start`,
      priority: 0.9,
      changeFrequency: 'weekly',
      keywords: 'start ergo, beginner guide, getting started, ergo tutorial',
      schema: ['HowTo', 'ItemList']
    },
    {
      id: 'faq',
      type: 'page',
      title: 'Ergo FAQ - Frequently Asked Questions',
      description: 'Comprehensive answers about Ergo: eUTXO, ErgoScript, privacy, tokenomics, wallets, mining and more.',
      url: '/learn/faq',
      absoluteUrl: `${baseUrl}/learn/faq`,
      priority: 0.8,
      changeFrequency: 'monthly',
      keywords: 'ergo faq, questions, answers, help, support',
      schema: ['FAQPage', 'BreadcrumbList']
    }
  ]
  
  // Combine all indexes
  const searchIndex = {
    version: '1.0.0',
    generated: new Date().toISOString(),
    totalItems: blogIndex.length + docsIndex.length + mainPages.length,
    index: {
      pages: mainPages,
      blog: blogIndex,
      docs: docsIndex
    },
    stats: {
      totalPages: mainPages.length,
      totalBlogPosts: blogIndex.length,
      totalDocs: docsIndex.length,
      lastUpdated: new Date().toISOString()
    }
  }
  
  return NextResponse.json(searchIndex, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'Content-Type': 'application/json'
    }
  })
}
