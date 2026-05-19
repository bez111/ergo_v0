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
      title: 'Ergo Platform - Resilient DeFi Blockchain for the People',
      description: 'Ergo: PoW blockchain with eUTXO smart contracts, built-in privacy via Sigma protocols, and sustainable tokenomics.',
      url: '/',
      absoluteUrl: baseUrl,
      priority: 1.0,
      changeFrequency: 'daily',
      keywords: 'ergo, blockchain, defi, cryptocurrency, smart contracts, eutxo, privacy',
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
      keywords: 'agent builders, agent economy, accord protocol, x402, mcp, agent payments, programmable credit',
      schema: ['TechArticle', 'SoftwareApplication']
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
