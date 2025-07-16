"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Search, X, Tag, FileText, ArrowUp, ArrowDown, Command, Eye, Pin, Trash2, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { menuData } from '@/app/Docs/menuData';
import { SearchPreview } from './SearchPreview';
import { useSearchHistory } from '@/hooks/use-search-history';

interface SearchHit {
  objectID: string;
  title: string;
  content: string;
  url: string;
  section: string;
  tags: string[];
  type: 'title' | 'content' | 'code' | 'anchor';
  _snippetResult?: {
    content?: {
      value: string;
      matchLevel: string;
    };
    title?: {
      value: string;
      matchLevel: string;
    };
  };
}

interface GroupedSearchResult {
  pageUrl: string;
  pageTitle: string;
  pageSection: string;
  hits: SearchHit[];
  totalHits: number;
  visibleHits: number;
  expanded: boolean;
  relevanceScore: number;
}

interface SearchResult {
  hits: SearchHit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  query: string;
}

// Build search index from menu data and file system
function buildSearchIndex() {
  const index: SearchHit[] = [];
  
  // Additional content descriptions for better search
  const contentDescriptions: Record<string, string> = {
    '/Docs/why-ergo': 'Learn why Ergo is a unique blockchain platform with advanced features like eUTXO, ErgoScript, and privacy. Ergo combines the best of Bitcoin and Ethereum with innovative proof-of-work mining, smart contracts, and privacy features. Discover how Ergo\'s design philosophy prioritizes decentralization, security, and user sovereignty.',
    '/Docs/introduction/key-features': 'Explore Ergo\'s key features including eUTXO model, ErgoScript, NIPoPoWs, and privacy features. The eUTXO model provides better security and scalability than traditional account-based models. ErgoScript enables powerful smart contracts with formal verification. NIPoPoWs allow lightweight clients to verify transactions without downloading the full blockchain.',
    '/Docs/introduction/roadmap': 'Ergo development roadmap and future plans for scaling, privacy, and ecosystem growth. The roadmap includes Layer 2 solutions, enhanced privacy features, cross-chain bridges, and developer tooling improvements. Community governance and decentralized funding mechanisms are key priorities.',
    '/Docs/introduction/research-whitepapers': 'Research papers and whitepapers about Ergo blockchain technology and protocols. Academic research covers consensus mechanisms, privacy protocols, smart contract formal verification, and economic models. Papers are peer-reviewed and contribute to blockchain science.',
    '/Docs/introduction/entities': 'Organizations and entities in the Ergo ecosystem including Ergo Foundation and community groups. The Ergo Foundation supports development, education, and adoption. Community DAOs and working groups focus on specific areas like DeFi, privacy, and developer experience.',
    '/Docs/introduction/wallets': 'Wallets for storing and managing ERG tokens and interacting with Ergo blockchain. Official wallets include Yoroi and Nautilus with features like multi-sig, hardware wallet support, and DeFi integration. Third-party wallets provide additional functionality and user choice.',
    '/Docs/introduction/resources': 'Resources for learning about Ergo including documentation, tools, and community links. Comprehensive guides cover everything from basic concepts to advanced development. Developer tools include SDKs, APIs, and testing frameworks. Community resources include forums, Discord, and GitHub repositories.',
    '/Docs/contribute': 'How to contribute to Ergo development, documentation, and community. Contribution opportunities include code development, documentation writing, testing, community management, and financial support. The project welcomes developers, researchers, designers, and community organizers.',
    '/Docs/introduction/events': 'Ergo community events, meetups, and conferences. Regular events include ErgoHack hackathons, community calls, developer workshops, and global meetups. Events focus on education, collaboration, and ecosystem growth.',
    '/Docs/introduction/glossary': 'Glossary of Ergo blockchain terms and technical concepts. Comprehensive definitions cover blockchain fundamentals, Ergo-specific terminology, and advanced concepts. Each term includes examples and related concepts for better understanding.',
    '/Docs/introduction/faq': 'Frequently asked questions about Ergo blockchain and ecosystem. Common questions cover mining, staking, smart contracts, privacy features, and getting started. Answers are updated regularly based on community feedback.',
    '/Docs/ecosystem/infrastructure': 'Infrastructure projects and tools in the Ergo ecosystem. Includes node operators, indexers, oracles, and developer tooling. Infrastructure supports DeFi protocols, privacy features, and cross-chain functionality.',
    '/Docs/ecosystem/financial': 'Financial applications and DeFi protocols built on Ergo. DeFi ecosystem includes lending, derivatives, crowdfunding, and yield farming. Protocols leverage Ergo\'s security and privacy features for innovative financial products.',
    '/Docs/ecosystem/privacy': 'Privacy features and applications on Ergo blockchain. Privacy tools include Sigma protocols, zero-knowledge proofs, and confidential transactions. Applications range from private payments to confidential DeFi protocols.',
    '/Docs/ecosystem/nfts': 'NFT projects and gaming applications on Ergo. NFT ecosystem includes art, collectibles, gaming assets, and utility tokens. Gaming applications leverage Ergo\'s smart contracts for provably fair games and asset ownership.',
    '/Docs/ecosystem/ai': 'Artificial Intelligence applications and integrations with Ergo. AI projects include prediction markets, automated trading, and data analysis tools. Integration focuses on decentralized AI and machine learning on blockchain.',
    '/Docs/ecosystem/daos': 'Decentralized Autonomous Organizations on Ergo. DAOs use smart contracts for governance, funding, and decision-making. Examples include development funding, community governance, and project management.',
    '/Docs/ecosystem/applications': 'Applications and dApps built on Ergo blockchain. Applications range from simple utilities to complex DeFi protocols. Developer tools and documentation support rapid application development.',
    '/Docs/ecosystem/tooling': 'Developer tools and utilities for Ergo development. Tooling includes SDKs, APIs, testing frameworks, and deployment tools. Developer experience focuses on ease of use and comprehensive documentation.',
    '/Docs/ecosystem/Standards': 'Standards and protocols in the Ergo ecosystem. Standards ensure interoperability between applications and protocols. Includes token standards, privacy protocols, and cross-chain communication.',
    '/Docs/introduction/autolykos': 'Autolykos v2 proof-of-work algorithm used by Ergo for mining. Autolykos is memory-hard and ASIC-resistant, designed for fair distribution and decentralization. The algorithm requires significant memory, making specialized hardware less advantageous than general-purpose computers.',
    '/Docs/miners/resources': 'Resources for Ergo miners including guides and tools. Mining resources include software, hardware recommendations, pool information, and profitability calculators. Community support helps new miners get started.',
    // Add descriptions for DeFi pages
    '/Docs/ecosystem/financial/defi': 'Decentralized Finance (DeFi) protocols on Ergo including lending, derivatives, crowdfunding, and yield farming. DeFi ecosystem leverages Ergo\'s security and privacy features for innovative financial products.',
    '/Docs/ecosystem/financial/defi/duckpools': 'Decentralized lending pools on Ergo. DuckPools enables users to lend and borrow assets with transparent, on-chain protocols.',
    '/Docs/ecosystem/financial/defi/sigmafi': 'P2P DeFi bond market for collateralized loans on Ergo. SigmaFi enables peer-to-peer lending with smart contract automation.',
    '/Docs/ecosystem/financial/defi/exle': 'Experimental lending engine for DeFi on Ergo. EXLE provides innovative lending mechanisms and risk management.',
    '/Docs/ecosystem/financial/defi/micro-credit': 'Micro-loans for individuals and small businesses on Ergo. Expand access to DeFi with small-scale lending protocols.',
    '/Docs/ecosystem/financial/defi/flash-loans': 'Instant, collateral-free loans for advanced DeFi strategies and arbitrage on Ergo.',
    '/Docs/ecosystem/financial/defi/mutual-credit': 'Peer-to-peer credit protocols for trustless, decentralized borrowing and lending circles.',
    '/Docs/ecosystem/financial/defi/sigmao': 'Advanced options and derivatives protocol on Ergo. SigmaO enables complex financial instruments.',
    '/Docs/ecosystem/financial/defi/optionpools': 'Pooled options trading on Ergo. OptionPools provides decentralized options trading with liquidity pools.',
    '/Docs/ecosystem/financial/defi/trustless-prediction-markets': '100% trustless, permissionless prediction markets powered by the UTXO model. Make markets on any on-chain data with automatic verification.',
    '/Docs/ecosystem/financial/defi/perpetual-tokens': 'Tokens designed to persist indefinitely on-chain, enabled by ErgoScript. Perpetual tokens can only be removed via garbage collection.',
    '/Docs/ecosystem/financial/defi/multi-stage-protocols': 'Protocols enabling advanced DeFi logic through scripts that reference each other across stages. Supports complex interactions and persistent state.',
    '/Docs/ecosystem/financial/defi/ergoraffle': 'Decentralized raffle and crowdfunding platform on Ergo. ErgoRaffle enables transparent fundraising and prize distribution.',
    '/Docs/ecosystem/financial/defi/sigma-subscriptions': 'Subscription-based crowdfunding protocol on Ergo. Sigma Subscriptions enables recurring, programmable donations.',
    '/Docs/ecosystem/financial/defi/revenue-sharing': 'Modular solution for decentralized profit/revenue sharing on Ergo. Includes distribution, staking, and income contracts.',
    '/Docs/ecosystem/financial/defi/buyback-guarantees': 'Protocols that guarantee token buybacks, stabilizing price and providing investors with additional profit assurance.',
    '/Docs/ecosystem/financial/defi/insurance': 'Decentralized insurance protocols to protect user funds and profits from hacks, bugs, or unexpected events in the DeFi ecosystem.',
    '/Docs/ecosystem/financial/defi/ico': 'Initial Coin Offerings (ICOs) allow projects to raise funds and distribute tokens to early supporters in a transparent, on-chain process.',
    '/Docs/ecosystem/financial/defi/index-coins': 'Index coins track the value of a basket of assets, providing diversified exposure and simplified portfolio management for DeFi users.',
    '/Docs/ecosystem/financial/defi/pow-tokens': 'Proof-of-Work tokens are mined or earned through computational work, enabling new incentive models and decentralized distribution.',
    '/Docs/ecosystem/financial/defi/bonding-curve': 'Bonding curves are mathematical mechanisms for dynamic token pricing and supply, enabling continuous fundraising and automated market making.',
    // Add descriptions for privacy pages
    '/Docs/ecosystem/privacy/ergomixer': 'Privacy-focused mixing protocol on Ergo. ErgoMixer enables confidential transactions and privacy protection.',
    '/Docs/ecosystem/privacy/sigmajoin': 'SigmaJoin protocol for privacy-preserving transactions on Ergo. Enables confidential transfers and privacy protection.',
    '/Docs/ecosystem/privacy/stealth-addresses': 'Stealth addresses for enhanced privacy on Ergo. Provides additional layers of privacy protection for transactions.',
    // Add descriptions for tooling pages
    '/Docs/ecosystem/tooling/arbit': 'Arbit tooling for Ergo development. Provides utilities and frameworks for building on Ergo.',
    '/Docs/ecosystem/tooling/celaut': 'Celaut tooling and utilities for Ergo ecosystem. Developer tools and frameworks.',
    '/Docs/ecosystem/tooling/crux-finance': 'Crux Finance tooling for DeFi development on Ergo. Financial protocol development tools.',
    '/Docs/ecosystem/tooling/grid-trading': 'Grid trading tools and utilities for Ergo. Automated trading strategies and tools.',
    '/Docs/ecosystem/tooling/netnotes': 'NetNotes tooling for Ergo development. Note-taking and documentation tools.',
    '/Docs/ecosystem/tooling/off-the-grid': 'Off-the-grid tools for Ergo development. Decentralized and privacy-focused development tools.',
    '/Docs/ecosystem/tooling/moria-finance': 'Moria Finance tooling for DeFi development on Ergo. Financial protocol development frameworks.',
    '/Docs/ecosystem/tooling/ergonames': 'ErgoNames service for human-readable addresses on Ergo. Domain name system for Ergo blockchain.',
    '/Docs/ecosystem/tooling/reputation-system': 'Reputation system tools for Ergo ecosystem. Community reputation and trust mechanisms.',
    '/Docs/ecosystem/tooling/trading': 'Trading tools and utilities for Ergo. Automated trading and market analysis tools.',
    '/Docs/ecosystem/tooling/sigmarand': 'SigmaRand tooling for random number generation on Ergo. Cryptographic randomness tools.',
    '/Docs/ecosystem/tooling/tutorial': 'Tutorial tools and guides for Ergo development. Educational resources and learning materials.',
    // Add descriptions for infrastructure pages
    '/Docs/ecosystem/infrastructure/oracles': 'Oracle infrastructure for Ergo blockchain. Provides external data feeds and price oracles for DeFi protocols.',
    '/Docs/ecosystem/infrastructure/rosen-bridge': 'Rosen Bridge for cross-chain interoperability. Enables asset transfers between Ergo and other blockchains.',
    '/Docs/ecosystem/infrastructure/sidechains': 'Sidechain infrastructure for Ergo. Layer 2 solutions and scaling mechanisms.',
    // Add descriptions for financial pages
    '/Docs/ecosystem/financial/degenerate-finance': 'Degenerate Finance protocols on Ergo. High-risk, high-reward DeFi protocols and gaming applications.',
    '/Docs/ecosystem/financial/degenerate-finance/auctioncoin': 'AuctionCoin - auction-based token distribution on Ergo. Innovative token sale mechanisms.',
    '/Docs/ecosystem/financial/degenerate-finance/grand-gambit': 'Grand Gambit - high-risk DeFi protocol on Ergo. Advanced trading and speculation tools.',
    '/Docs/ecosystem/financial/degenerate-finance/hodlbox': 'HodlBox - HODL-based DeFi protocol on Ergo. Long-term holding incentives and rewards.',
    '/Docs/ecosystem/financial/degenerate-finance/hodlcoin': 'HodlCoin - HODL incentivized token on Ergo. Penalty-based holding mechanisms.',
    '/Docs/ecosystem/financial/degenerate-finance/lotteries': 'Lottery protocols on Ergo. Decentralized lottery and gambling applications.',
    '/Docs/ecosystem/financial/degenerate-finance/obolflip': 'ObolFlip - coin flip protocol on Ergo. Provably fair gambling applications.',
    '/Docs/ecosystem/financial/degenerate-finance/optioncoin': 'OptionCoin - options-based token on Ergo. Call option token distribution.',
    '/Docs/ecosystem/financial/degenerate-finance/the-field': 'The Field - gaming protocol on Ergo. Interactive gaming and gambling applications.',
    '/Docs/ecosystem/financial/dex': 'Decentralized Exchanges (DEX) on Ergo. Automated market makers and trading protocols.',
    '/Docs/ecosystem/financial/dex/analog-ergo': 'Analog Ergo DEX. Decentralized exchange for Ergo ecosystem.',
    '/Docs/ecosystem/financial/dex/crystal-pool': 'Crystal Pool DEX. Automated market maker for Ergo tokens.',
    '/Docs/ecosystem/financial/dex/guapswap': 'GuapSwap DEX. Decentralized exchange with advanced features.',
    '/Docs/ecosystem/financial/dex/machina': 'Machina DEX. Automated market maker and trading protocol.',
    '/Docs/ecosystem/financial/dex/mew': 'MEW DEX. Multi-exchange wallet integration.',
    '/Docs/ecosystem/financial/dex/palmyra': 'Palmyra DEX. Decentralized exchange with liquidity pools.',
    '/Docs/ecosystem/financial/dex/single-tx-swap': 'Single Transaction Swap protocol. Atomic swap implementation.',
    '/Docs/ecosystem/financial/dex/spectrum': 'Spectrum DEX. Comprehensive decentralized exchange platform.',
    '/Docs/ecosystem/financial/monetary-systems': 'Monetary systems and stablecoins on Ergo. Alternative currency and stable value protocols.',
    '/Docs/ecosystem/financial/monetary-systems/chaincash': 'ChainCash - algorithmic stablecoin on Ergo. Decentralized stable value protocol.',
    '/Docs/ecosystem/financial/monetary-systems/lets': 'LETS - Local Exchange Trading System on Ergo. Community-based exchange networks.',
    '/Docs/ecosystem/financial/monetary-systems/gluon': 'Gluon - monetary protocol on Ergo. Alternative currency and exchange mechanisms.',
    // Add descriptions for applications pages
    '/Docs/ecosystem/applications/email-client': 'Email client for blocked internet on Ergo. Decentralized communication tools.',
    '/Docs/ecosystem/applications/tabbypos': 'TabbyPOS - point of sale system on Ergo. Merchant payment solutions.',
    '/Docs/ecosystem/applications/zenGateGlobal': 'ZenGate Global - global payment solutions on Ergo. Cross-border payment protocols.',
    // Add descriptions for gaming pages
    '/Docs/ecosystem/gaming': 'Gaming applications and protocols on Ergo. Provably fair games and gaming infrastructure.',
    // Add descriptions for NFTs pages
    '/Docs/ecosystem/nfts/pandaV': 'PandaV NFT platform on Ergo. Digital art and collectibles marketplace.',
    '/Docs/ecosystem/nfts/skyharbor': 'SkyHarbor NFT marketplace on Ergo. Comprehensive NFT trading platform.',
    // Add descriptions for introduction pages
    '/Docs/introduction/eutxo': 'Extended Unspent Transaction Output (eUTXO) model on Ergo. Advanced UTXO model with enhanced capabilities.',
    '/Docs/introduction/nipopows': 'Non-Interactive Proofs of Proof-of-Work (NIPoPoWs) on Ergo. Lightweight client verification.',
    '/Docs/introduction/storage-rent': 'Storage rent mechanism on Ergo. Economic incentives for blockchain state management.',
    '/Docs/introduction/utxo-state': 'UTXO state management on Ergo. Understanding how state is stored and managed.',
    '/Docs/introduction/utxo-vs-account': 'UTXO vs Account model comparison. Understanding different blockchain architectures.',
    '/Docs/introduction/light-clients': 'Light client implementations on Ergo. Simplified blockchain access and verification.',
    '/Docs/introduction/light-miners': 'Light mining protocols on Ergo. Simplified mining for resource-constrained devices.',
    '/Docs/introduction/nipopow-sidechains': 'NIPoPoW sidechains on Ergo. Cross-chain verification and interoperability.',
    '/Docs/introduction/ergosummit': 'Ergo Summit events and conferences. Community gatherings and developer events.',
    '/Docs/introduction/ergo-foundation': 'Ergo Foundation organization and governance. Foundation structure and mission.',
    '/Docs/introduction/audit': 'Security audits and verification on Ergo. Code review and security assessment processes.',
    '/Docs/introduction/cbdc': 'Central Bank Digital Currency (CBDC) research on Ergo. Government digital currency exploration.',
    '/Docs/introduction/devdao': 'Developer DAO on Ergo. Decentralized developer organization and governance.',
    '/Docs/introduction/misconceptions': 'Common misconceptions about Ergo. Clarifying misunderstandings and myths.',
    '/Docs/introduction/privacy': 'Privacy features on Ergo. Confidential transactions and privacy protection.',
    '/Docs/introduction/privacy-guide': 'Privacy guide for Ergo users. How to maintain privacy and security.',
    '/Docs/introduction/sigmanauts': 'Sigmanauts program on Ergo. Community ambassador and education program.',
    '/Docs/introduction/social-contract': 'Social contract of Ergo. Community values and principles.',
    '/Docs/miners/Miner-Tooling': 'Mining tools and utilities for Ergo. Software and hardware for miners.',
  };

  // Image descriptions and alt-text for image search
  const imageDescriptions: Record<string, string> = {
    'DistributionTx.png': 'Distribution transaction diagram showing how ERG tokens are distributed in the Ergo ecosystem. Visual representation of token economics and distribution mechanisms.',
    'FundingTx.png': 'Funding transaction illustration demonstrating how projects receive funding through transparent on-chain mechanisms. Shows the funding flow and governance structure.',
    'fee-3d.png': '3D visualization of storage rent fee structure in Ergo blockchain. Shows how fees are calculated and distributed to maintain network security and efficiency.',
    'ergo-logo.png': 'Official Ergo blockchain logo and branding. Represents the Ergo ecosystem and community identity.',
    'blockchain-diagram.png': 'Blockchain architecture diagram showing Ergo\'s unique features including eUTXO model, ErgoScript, and consensus mechanism.',
    'mining-hardware.png': 'Mining hardware and equipment used for Ergo mining. Shows different types of mining setups and hardware configurations.',
    'privacy-protocol.png': 'Privacy protocol diagram illustrating Sigma protocols, stealth addresses, and confidential transactions on Ergo.',
    'defi-protocols.png': 'DeFi protocols visualization showing lending, derivatives, and crowdfunding applications built on Ergo blockchain.',
    'smart-contract.png': 'Smart contract diagram demonstrating ErgoScript programming and formal verification processes.',
    'consensus-flow.png': 'Consensus mechanism flow chart showing Autolykos v2 proof-of-work algorithm and block validation process.',
    'utxo-model.png': 'UTXO model diagram comparing traditional UTXO with Ergo\'s extended UTXO (eUTXO) model and its advantages.',
    'oracle-network.png': 'Oracle network diagram showing how external data feeds are integrated into Ergo blockchain for DeFi applications.',
    'sidechain-bridge.png': 'Sidechain bridge illustration demonstrating cross-chain interoperability and asset transfers between Ergo and other blockchains.',
    'wallet-security.png': 'Wallet security diagram showing multi-signature setups, hardware wallet integration, and security best practices for Ergo wallets.',
    'mining-pool.png': 'Mining pool visualization showing how miners collaborate and share rewards in the Ergo network.',
    'governance-structure.png': 'Governance structure diagram illustrating community decision-making processes and DAO governance in the Ergo ecosystem.'
  };
  
  // Function to process menu sections (existing pages with href)
  function processMenuSection(section: any, parentSection: string = '') {
    const sectionPath = parentSection ? `${parentSection} > ${section.title}` : section.title;
    
    // Check for href (direct link) or items (subsections)
    if (section.href) {
      const description = contentDescriptions[section.href] || section.description || section.title;
      index.push({
        objectID: section.href,
        title: section.title,
        content: description,
        url: section.href,
        section: sectionPath,
        tags: extractTags(section.title + ' ' + description, sectionPath),
        type: getContentType(section.href, section.title),
      });
    }
    
    // Process sub-items
    if (section.items) {
      section.items.forEach((item: any) => processMenuSection(item, sectionPath));
    }
  }
  
  // Process existing menu data
  menuData.forEach(section => processMenuSection(section));
  
  // Add all existing pages from file system that don't have href in menuData
  const existingPages = [
    // DeFi pages
    '/Docs/ecosystem/financial/defi/duckpools',
    '/Docs/ecosystem/financial/defi/sigmafi',
    '/Docs/ecosystem/financial/defi/exle',
    '/Docs/ecosystem/financial/defi/micro-credit',
    '/Docs/ecosystem/financial/defi/flash-loans',
    '/Docs/ecosystem/financial/defi/mutual-credit',
    '/Docs/ecosystem/financial/defi/sigmao',
    '/Docs/ecosystem/financial/defi/optionpools',
    '/Docs/ecosystem/financial/defi/trustless-prediction-markets',
    '/Docs/ecosystem/financial/defi/perpetual-tokens',
    '/Docs/ecosystem/financial/defi/multi-stage-protocols',
    '/Docs/ecosystem/financial/defi/ergoraffle',
    '/Docs/ecosystem/financial/defi/sigma-subscriptions',
    '/Docs/ecosystem/financial/defi/revenue-sharing',
    '/Docs/ecosystem/financial/defi/buyback-guarantees',
    '/Docs/ecosystem/financial/defi/insurance',
    '/Docs/ecosystem/financial/defi/ico',
    '/Docs/ecosystem/financial/defi/index-coins',
    '/Docs/ecosystem/financial/defi/pow-tokens',
    '/Docs/ecosystem/financial/defi/bonding-curve',
    // Privacy pages
    '/Docs/ecosystem/privacy/ergomixer',
    '/Docs/ecosystem/privacy/sigmajoin',
    '/Docs/ecosystem/privacy/stealth-addresses',
    // Tooling pages
    '/Docs/ecosystem/tooling/arbit',
    '/Docs/ecosystem/tooling/celaut',
    '/Docs/ecosystem/tooling/crux-finance',
    '/Docs/ecosystem/tooling/grid-trading',
    '/Docs/ecosystem/tooling/netnotes',
    '/Docs/ecosystem/tooling/off-the-grid',
    '/Docs/ecosystem/tooling/moria-finance',
    '/Docs/ecosystem/tooling/ergonames',
    '/Docs/ecosystem/tooling/reputation-system',
    '/Docs/ecosystem/tooling/trading',
    '/Docs/ecosystem/tooling/sigmarand',
    '/Docs/ecosystem/tooling/tutorial',
    // Infrastructure pages
    '/Docs/ecosystem/infrastructure/oracles',
    '/Docs/ecosystem/infrastructure/rosen-bridge',
    '/Docs/ecosystem/infrastructure/sidechains',
    // Financial pages
    '/Docs/ecosystem/financial/degenerate-finance',
    '/Docs/ecosystem/financial/degenerate-finance/auctioncoin',
    '/Docs/ecosystem/financial/degenerate-finance/grand-gambit',
    '/Docs/ecosystem/financial/degenerate-finance/hodlbox',
    '/Docs/ecosystem/financial/degenerate-finance/hodlcoin',
    '/Docs/ecosystem/financial/degenerate-finance/lotteries',
    '/Docs/ecosystem/financial/degenerate-finance/obolflip',
    '/Docs/ecosystem/financial/degenerate-finance/optioncoin',
    '/Docs/ecosystem/financial/degenerate-finance/the-field',
    '/Docs/ecosystem/financial/dex',
    '/Docs/ecosystem/financial/dex/analog-ergo',
    '/Docs/ecosystem/financial/dex/crystal-pool',
    '/Docs/ecosystem/financial/dex/guapswap',
    '/Docs/ecosystem/financial/dex/machina',
    '/Docs/ecosystem/financial/dex/mew',
    '/Docs/ecosystem/financial/dex/palmyra',
    '/Docs/ecosystem/financial/dex/single-tx-swap',
    '/Docs/ecosystem/financial/dex/spectrum',
    '/Docs/ecosystem/financial/monetary-systems',
    '/Docs/ecosystem/financial/monetary-systems/chaincash',
    '/Docs/ecosystem/financial/monetary-systems/lets',
    '/Docs/ecosystem/financial/monetary-systems/gluon',
    // Applications pages
    '/Docs/ecosystem/applications/email-client',
    '/Docs/ecosystem/applications/tabbypos',
    '/Docs/ecosystem/applications/zenGateGlobal',
    // Gaming pages
    '/Docs/ecosystem/gaming',
    // NFTs pages
    '/Docs/ecosystem/nfts/pandaV',
    '/Docs/ecosystem/nfts/skyharbor',
    // Introduction pages
    '/Docs/introduction/eutxo',
    '/Docs/introduction/nipopows',
    '/Docs/introduction/storage-rent',
    '/Docs/introduction/light-clients',
    '/Docs/introduction/howey-test',
    '/Docs/introduction/misconceptions',
    '/Docs/introduction/privacy',
    '/Docs/introduction/privacy-guide',
    '/Docs/introduction/sigmanauts',
    '/Docs/introduction/social-contract',
  ];
  
  // Add pages that exist but don't have href in menuData
  existingPages.forEach(pagePath => {
    const description = contentDescriptions[pagePath];
    if (description) {
      const title = pagePath.split('/').pop()?.replace(/-/g, ' ') || '';
      const section = pagePath.split('/').slice(2, -1).join(' > ');
      
      index.push({
        objectID: pagePath,
        title: title.charAt(0).toUpperCase() + title.slice(1),
        content: description,
        url: pagePath,
        section: section,
        tags: extractTags(title + ' ' + description, section),
        type: getContentType(pagePath, title),
      });
    }
  });

  // Add image search entries
  Object.entries(imageDescriptions).forEach(([imageName, description]) => {
    index.push({
      objectID: `image-${imageName}`,
      title: `Image: ${imageName.replace('.png', '').replace(/-/g, ' ')}`,
      content: description,
      url: `/public/${imageName}`,
      section: 'Images & Diagrams',
      tags: extractTags(description, 'Images & Diagrams'),
      type: 'content' as const,
    });
  });
  
  // Log the total number of pages in search index
  console.log(`Search index built with ${index.length} pages`);
  console.log('Pages in index:', index.map(hit => hit.url).slice(0, 10));
  
  return index;
}

// Extract tags from content
function extractTags(content: string, section: string): string[] {
  const tags: string[] = [];
  
  // Extract tags from section path
  const sectionParts = section.toLowerCase().split(' > ');
  tags.push(...sectionParts);
  
  // Extract common technical terms
  const technicalTerms = [
    'ergo', 'ergoscript', 'utxo', 'eutxo', 'defi', 'smart-contracts',
    'mining', 'consensus', 'privacy', 'oracles', 'sidechains',
    'lending', 'derivatives', 'crowdfunding', 'tokens', 'wallets',
    'financial', 'ecosystem', 'introduction', 'developers', 'miners',
    'autolykos', 'proof-of-work', 'pow', 'nipopows', 'storage-rent'
  ];
  
  const contentLower = content.toLowerCase();
  technicalTerms.forEach(term => {
    if (contentLower.includes(term)) {
      tags.push(term);
    }
  });
  
  return [...new Set(tags)]; // Remove duplicates
}

// Determine content type
function getContentType(url: string, title: string): 'title' | 'content' | 'code' | 'anchor' {
  if (url.includes('#') || title.startsWith('#')) return 'anchor';
  if (title.toLowerCase().includes('code') || title.toLowerCase().includes('script')) return 'code';
  if (url.split('/').length <= 3) return 'title';
  return 'content';
}

// Enhanced search function with improved relevance and grouping
function searchInIndex(query: string, index: SearchHit[]): GroupedSearchResult[] {
  if (!query.trim()) return [];
  
  // Define synonyms for better search
  const synonyms: Record<string, string[]> = {
    'ergo': ['ergo', 'erg', 'blockchain', 'cryptocurrency'],
    'defi': ['defi', 'decentralized finance', 'lending', 'borrowing', 'yield'],
    'utxo': ['utxo', 'eutxo', 'unspent transaction output', 'transaction model'],
    'ergoscript': ['ergoscript', 'smart contract', 'script', 'programming'],
    'mining': ['mining', 'autolykos', 'proof of work', 'pow', 'consensus'],
    'privacy': ['privacy', 'sigma', 'confidential', 'private', 'stealth'],
    'oracles': ['oracles', 'data feeds', 'external data', 'price feeds'],
    'sidechains': ['sidechains', 'layer 2', 'scaling', 'off-chain'],
    'lending': ['lending', 'borrowing', 'loans', 'credit', 'duckpools'],
    'derivatives': ['derivatives', 'options', 'futures', 'synthetics'],
    'crowdfunding': ['crowdfunding', 'fundraising', 'ico', 'tokensale'],
    'wallets': ['wallets', 'yoroi', 'nautilus', 'storage', 'keys'],
    'consensus': ['consensus', 'autolykos', 'mining', 'proof of work'],
    'smart contracts': ['smart contracts', 'ergoscript', 'programming', 'automation'],
    'nipopows': ['nipopows', 'light clients', 'verification', 'proofs'],
    'storage rent': ['storage rent', 'fees', 'economic model', 'incentives']
  };
  
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(' ').filter(word => word.length > 0);
  
  // Expand query with synonyms
  const expandedQueryWords = [...queryWords];
  queryWords.forEach(word => {
    const wordSynonyms = synonyms[word] || [];
    expandedQueryWords.push(...wordSynonyms);
  });
  
  const results: Array<SearchHit & { score: number }> = [];
  
  console.log('Searching with query words:', queryWords);
  console.log('Expanded query words:', expandedQueryWords);
  
  index.forEach(hit => {
    let score = 0;
    let titleMatch = false;
    let contentMatch = false;
    let tagsMatch = false;
    let sectionMatch = false;
    let exactMatch = false;
    
    // Check each query word and its synonyms
    expandedQueryWords.forEach(word => {
      // Exact title match (highest weight)
      if (hit.title.toLowerCase() === word) {
        score += 20;
        titleMatch = true;
        exactMatch = true;
      }
      // Title starts with word
      else if (hit.title.toLowerCase().startsWith(word)) {
        score += 15;
        titleMatch = true;
      }
      // Title contains word
      else if (hit.title.toLowerCase().includes(word)) {
        score += 10;
        titleMatch = true;
      }
      
      // Content exact match
      if (hit.content.toLowerCase() === word) {
        score += 15;
        contentMatch = true;
        exactMatch = true;
      }
      // Content contains word
      else if (hit.content.toLowerCase().includes(word)) {
        score += 5;
        contentMatch = true;
      }
      
      // Tags exact match
      if (hit.tags.some(tag => tag.toLowerCase() === word)) {
        score += 12;
        tagsMatch = true;
        exactMatch = true;
      }
      // Tags contains word
      else if (hit.tags.some(tag => tag.toLowerCase().includes(word))) {
        score += 8;
        tagsMatch = true;
      }
      
      // Section contains word
      if (hit.section.toLowerCase().includes(word)) {
        score += 3;
        sectionMatch = true;
      }
    });
    
    // Bonus for multiple matches
    if (titleMatch && contentMatch) score += 5;
    if (titleMatch && tagsMatch) score += 3;
    if (exactMatch) score += 10;
    
    // Bonus for recent/important content
    if (hit.type === 'title') score += 2;
    if (hit.url.includes('/introduction/')) score += 1;
    
    if (score > 0) {
      results.push({ ...hit, score });
    }
  });
  
  // Sort by score (highest first)
  results.sort((a, b) => b.score - a.score);
  
  // Group results by page
  const groupedResults = new Map<string, GroupedSearchResult>();
  
  results.forEach(hit => {
    if (!groupedResults.has(hit.url)) {
      groupedResults.set(hit.url, {
        pageUrl: hit.url,
        pageTitle: hit.title,
        pageSection: hit.section,
        hits: [],
        totalHits: 0,
        visibleHits: 0,
        expanded: false,
        relevanceScore: 0
      });
    }
    
    const group = groupedResults.get(hit.url)!;
    group.hits.push(hit);
    group.totalHits++;
    group.relevanceScore = Math.max(group.relevanceScore, hit.score);
  });
  
  // Convert to array and sort by relevance
  const finalResults = Array.from(groupedResults.values());
  finalResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
  
  // Limit results to top 20 pages
  return finalResults.slice(0, 20);
}

// Create enhanced snippets with context around matches
function createEnhancedSnippet(content: string, queryWords: string[], title: string): string {
  const contentLower = content.toLowerCase();
  let bestSnippet = '';
  let bestScore = 0;
  
  // Try to find the best matching context for each query word
  queryWords.forEach(word => {
    const wordIndex = contentLower.indexOf(word);
    if (wordIndex !== -1) {
      // Calculate context around the match
      const contextStart = Math.max(0, wordIndex - 100);
      const contextEnd = Math.min(content.length, wordIndex + word.length + 100);
      
      let snippet = content.substring(contextStart, contextEnd);
      
      // Add ellipsis if we're not at the beginning/end
      if (contextStart > 0) snippet = '...' + snippet;
      if (contextEnd < content.length) snippet = snippet + '...';
      
      // Calculate snippet quality score
      let snippetScore = 0;
      queryWords.forEach(qw => {
        if (snippet.toLowerCase().includes(qw)) {
          snippetScore += qw.length; // Longer words get higher score
        }
      });
      
      // Bonus for multiple query words in snippet
      const matchedWords = queryWords.filter(qw => snippet.toLowerCase().includes(qw));
      snippetScore += matchedWords.length * 10;
      
      if (snippetScore > bestScore) {
        bestScore = snippetScore;
        bestSnippet = snippet;
      }
    }
  });
  
  // If no good snippet found, fall back to title-based snippet
  if (!bestSnippet) {
    bestSnippet = `Learn about ${title.toLowerCase()} and related topics.`;
  }
  
  return bestSnippet;
}

// Highlight text with search terms
function highlightText(text: string, query: string): string {
  if (!query.trim()) return text;
  
  const queryWords = query.toLowerCase().split(' ').filter(word => word.length > 0);
  let highlightedText = text;
  
  // Sort words by length (longer words first) to avoid partial matches
  const sortedWords = queryWords.sort((a, b) => b.length - a.length);
  
  sortedWords.forEach(word => {
    const regex = new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-500/30 text-yellow-200 px-1 rounded">$1</mark>');
  });
  
  return highlightedText;
}

export function LocalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<GroupedSearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [selectedContentType, setSelectedContentType] = useState<string>('all');
  
  const searchIndex = useRef<SearchHit[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Content type filters
  const contentTypes = [
    { id: 'all', label: 'All', icon: '📄', description: 'All content types' },
    { id: 'documentation', label: 'Documentation', icon: '📚', description: 'Technical documentation and guides' },
    { id: 'code', label: 'Code', icon: '💻', description: 'ErgoScript, Sigma, and code examples' },
    { id: 'guides', label: 'Guides', icon: '📖', description: 'Tutorials and how-to guides' },
    { id: 'api', label: 'API', icon: '🔧', description: 'API documentation and references' }
  ];

  // Code-related terms for enhanced search
  const codeTerms = [
    'ergoscript', 'sigma', 'nipopows', 'autolykos', 'eutxo', 'utxo',
    'consensus', 'proof-of-work', 'pow', 'smart contract', 'script',
    'programming', 'blockchain', 'cryptography', 'hash', 'signature',
    'transaction', 'block', 'mining', 'wallet', 'key', 'address',
    'token', 'nft', 'defi', 'oracle', 'sidechain', 'privacy',
    'confidential', 'stealth', 'mixing', 'zero-knowledge', 'zk',
    'formal verification', 'type system', 'compiler', 'interpreter'
  ];

  // Image-related terms for image search
  const imageTerms = [
    'diagram', 'chart', 'graph', 'visualization', 'illustration',
    'flowchart', 'architecture', 'structure', 'model', 'design',
    'blockchain diagram', 'consensus flow', 'utxo model', 'mining setup',
    'privacy protocol', 'defi protocols', 'smart contract', 'oracle network',
    'sidechain bridge', 'wallet security', 'governance structure',
    'distribution transaction', 'funding transaction', 'storage rent',
    'hardware', 'equipment', 'setup', 'configuration', 'network'
  ];

  // Popular queries and suggestions
  const popularQueries = [
    'mining', 'defi', 'privacy', 'wallets', 'ergoscript',
    'utxo', 'oracles', 'sidechains', 'smart contracts',
    'consensus', 'autolykos', 'sigma', 'nipopows',
    'lending', 'derivatives', 'crowdfunding', 'storage rent',
    'diagram', 'visualization', 'architecture', 'flowchart'
  ];

  // Related topics for smart suggestions
  const relatedTopics: Record<string, string[]> = {
    'mining': ['autolykos', 'consensus', 'proof-of-work', 'hardware'],
    'defi': ['lending', 'derivatives', 'crowdfunding', 'yield farming'],
    'privacy': ['sigma', 'stealth-addresses', 'confidential', 'mixing'],
    'wallets': ['yoroi', 'nautilus', 'keys', 'security'],
    'ergoscript': ['smart contracts', 'programming', 'sigma', 'scripting'],
    'utxo': ['eutxo', 'transaction model', 'state management'],
    'oracles': ['data feeds', 'external data', 'price feeds'],
    'sidechains': ['layer 2', 'scaling', 'off-chain', 'interoperability'],
    'smart contracts': ['ergoscript', 'automation', 'programming'],
    'consensus': ['autolykos', 'proof-of-work', 'mining', 'security'],
    'lending': ['borrowing', 'duckpools', 'credit', 'loans'],
    'derivatives': ['options', 'futures', 'synthetics', 'trading'],
    'crowdfunding': ['ico', 'fundraising', 'tokensale', 'grants'],
    'diagram': ['visualization', 'chart', 'graph', 'illustration'],
    'visualization': ['diagram', 'chart', 'graph', 'architecture'],
    'architecture': ['structure', 'design', 'model', 'diagram'],
    'flowchart': ['flow', 'process', 'diagram', 'visualization']
  };

  // Initialize search index
  useEffect(() => {
    try {
      searchIndex.current = buildSearchIndex();
      setError(null);
      console.log('Search index initialized with', searchIndex.current.length, 'pages');
    } catch (e: any) {
      setError(e?.message || 'Search index build failed');
      console.error('Search index build error:', e);
    }
  }, []);

  // Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to load search history:', e);
      }
    }
  }, []);

  // Save search history to localStorage
  const saveSearchHistory = (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    
    const newHistory = [
      searchTerm,
      ...searchHistory.filter(item => item !== searchTerm)
    ].slice(0, 10); // Keep only last 10 searches
    
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  // Remove item from search history
  const removeFromHistory = (historyItem: string) => {
    const newHistory = searchHistory.filter(item => item !== historyItem);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  // Clear all search history
  const clearAllHistory = () => {
    if (window.confirm('Are you sure you want to clear all search history?')) {
      setSearchHistory([]);
      localStorage.removeItem('searchHistory');
    }
  };

  // Generate suggestions based on query
  const generateSuggestions = useCallback((query: string) => {
    if (!query.trim() || query.length < 1) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const queryLower = query.toLowerCase();
    const suggestions: string[] = [];

    // Add popular queries that match
    popularQueries.forEach(term => {
      if (term.toLowerCase().includes(queryLower)) {
        suggestions.push(term);
      }
    });

    // Add code terms that match
    codeTerms.forEach(term => {
      if (term.toLowerCase().includes(queryLower)) {
        suggestions.push(term);
      }
    });

    // Add image terms that match
    imageTerms.forEach(term => {
      if (term.toLowerCase().includes(queryLower)) {
        suggestions.push(term);
      }
    });

    // Add related topics
    Object.entries(relatedTopics).forEach(([topic, related]) => {
      if (topic.toLowerCase().includes(queryLower)) {
        suggestions.push(...related);
      }
    });

    // Add from search history
    searchHistory.forEach(historyItem => {
      if (historyItem.toLowerCase().includes(queryLower) && !suggestions.includes(historyItem)) {
        suggestions.push(historyItem);
      }
    });

    // Remove duplicates and limit to 8 suggestions
    const uniqueSuggestions = [...new Set(suggestions)].slice(0, 8);
    setSuggestions(uniqueSuggestions);
    setShowSuggestions(uniqueSuggestions.length > 0);
    setSelectedSuggestionIndex(-1);
  }, [searchHistory]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to open search
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsOpen(true);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
      
      // Escape to close search
      if (event.key === 'Escape' && isOpen) {
        event.preventDefault();
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle modal close and reset
  const handleCloseModal = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
    setSelectedTags([]);
    setExpandedGroups(new Set());
    setSuggestions([]);
    setShowSuggestions(false);
    setSelectedSuggestionIndex(-1);
    setSelectedContentType('all');
  };

  // Search function with minimum query length
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim() || searchQuery.trim().length < 2) {
      setResults([]);
      return;
    }
    if (error) return;
    
    console.log('Searching for:', searchQuery, 'in', searchIndex.current.length, 'pages');
    const searchResults = searchInIndex(searchQuery, searchIndex.current);
    console.log('Found', searchResults.length, 'result groups');
    setResults(searchResults);
    
    // Save to search history
    saveSearchHistory(searchQuery);
  }, [error]);

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    // Generate suggestions
    generateSuggestions(value);
    
    // Perform search if query is long enough
    if (value.length >= 2) {
      performSearch(value);
    } else {
      setResults([]);
    }
  };

  // Handle keyboard navigation in suggestions
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedSuggestionIndex >= 0 && suggestions[selectedSuggestionIndex]) {
          handleSuggestionClick(suggestions[selectedSuggestionIndex]);
        }
        break;
      case 'Tab':
        if (selectedSuggestionIndex >= 0 && suggestions[selectedSuggestionIndex]) {
          e.preventDefault();
          handleSuggestionClick(suggestions[selectedSuggestionIndex]);
        }
        break;
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    setSelectedSuggestionIndex(-1);
    performSearch(suggestion);
  };

  // Handle search history click
  const handleHistoryClick = (historyItem: string) => {
    setQuery(historyItem);
    setShowSuggestions(false);
    performSearch(historyItem);
  };

  // Handle content type filter
  const handleContentTypeFilter = (contentType: string) => {
    setSelectedContentType(contentType);
  };

  // Handle tag selection
  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Handle group expansion
  const handleExpandGroup = (pageUrl: string) => {
    setExpandedGroups(prev => {
      const newSet = new Set(prev);
      if (newSet.has(pageUrl)) {
        newSet.delete(pageUrl);
      } else {
        newSet.add(pageUrl);
      }
      return newSet;
    });
  };

  // Handle result click - close modal and navigate
  const handleResultClick = () => {
    handleCloseModal();
  };

  // Get all unique tags from results
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    results.forEach(group => {
      group.hits.forEach(hit => {
        hit.tags.forEach(tag => tagSet.add(tag));
      });
    });
    return Array.from(tagSet).sort();
  }, [results]);

  // Filter results by selected tags and content type
  const filteredResults = useMemo(() => {
    let filtered = results;
    
    // Filter by content type
    if (selectedContentType !== 'all') {
      filtered = filtered.filter(group => 
        group.hits.some(hit => {
          const url = hit.url.toLowerCase();
          const title = hit.title.toLowerCase();
          const content = hit.content.toLowerCase();
          
          switch (selectedContentType) {
            case 'code':
              return url.includes('/ergoscript') || 
                     url.includes('/code') || 
                     title.includes('ergoscript') ||
                     title.includes('sigma') ||
                     content.includes('ergoscript') ||
                     content.includes('sigma') ||
                     hit.type === 'code';
            case 'documentation':
              return url.includes('/introduction') || 
                     url.includes('/docs') ||
                     title.includes('documentation') ||
                     title.includes('guide');
            case 'guides':
              return url.includes('/guides') || 
                     url.includes('/tutorial') ||
                     title.includes('guide') ||
                     title.includes('tutorial') ||
                     title.includes('how-to');
            case 'api':
              return url.includes('/api') || 
                     url.includes('/reference') ||
                     title.includes('api') ||
                     title.includes('reference');
            default:
              return true;
          }
        })
      );
    }
    
    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(group => 
        group.hits.some(hit => 
          selectedTags.some(selectedTag => 
            hit.tags.includes(selectedTag)
          )
        )
      );
    }
    
    return filtered;
  }, [results, selectedTags, selectedContentType]);

  return (
    <>
      {/* Search Bar - Updated to match the image design */}
      <div className="relative w-full max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            onClick={() => setIsOpen(true)}
            readOnly
            className="w-full pl-12 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-full text-gray-300 placeholder-gray-400 focus:outline-none focus:border-cyan-400/60 transition-colors duration-200 cursor-pointer"
          />
          {/* Keyboard shortcut hint */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-gray-500">
            <kbd className="px-1.5 py-0.5 bg-neutral-700 rounded text-gray-300">⌘</kbd>
            <kbd className="px-1.5 py-0.5 bg-neutral-700 rounded text-gray-300">K</kbd>
          </div>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-4 p-4 bg-red-900 text-red-300 rounded-lg border border-red-700">
          <b>Search error:</b> {error}
        </div>
      )}

      {/* Search Modal */}
      {isOpen && !error && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 animate-in fade-in duration-200">
          <div ref={modalRef} className="w-full max-w-4xl mx-4 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl max-h-[80vh] flex flex-col animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-700">
              <div className="flex items-center gap-3 flex-1 relative">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Search documentation... (min 2 characters)"
                  className="w-full bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                  autoFocus
                />
                
                {/* Autocomplete Suggestions */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-800 border border-neutral-600 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <button
                          onClick={() => handleSuggestionClick(suggestion)}
                          className={`flex-1 text-left px-4 py-3 hover:bg-neutral-700 transition-colors duration-150 ${
                            index === selectedSuggestionIndex 
                              ? 'bg-neutral-700 text-white' 
                              : 'text-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Search className="w-4 h-4 text-gray-500" />
                            <span>{suggestion}</span>
                            {searchHistory.includes(suggestion) && (
                              <span className="ml-auto text-xs text-gray-500">Recent</span>
                            )}
                          </div>
                        </button>
                        {searchHistory.includes(suggestion) && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromHistory(suggestion);
                            }}
                            className="p-2 hover:bg-neutral-700 rounded-full transition-colors duration-200 mr-2"
                            title="Remove from history"
                          >
                            <Trash2 className="w-3 h-3 text-gray-500 hover:text-red-400" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-neutral-800 rounded-lg transition-colors duration-200"
                title="Close (Esc)"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Content Type Filters */}
            <div className="px-6 py-3 border-b border-neutral-700">
              <div className="flex flex-wrap gap-2">
                {contentTypes.map((contentType) => (
                  <button
                    key={contentType.id}
                    onClick={() => handleContentTypeFilter(contentType.id)}
                    className={`px-3 py-2 rounded-lg transition-colors duration-200 text-sm flex items-center gap-2 ${
                      selectedContentType === contentType.id
                        ? 'bg-cyan-600 text-white'
                        : 'bg-neutral-700 text-gray-300 hover:bg-neutral-600'
                    }`}
                    title={contentType.description}
                  >
                    <span>{contentType.icon}</span>
                    <span>{contentType.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tag Filters */}
            {query && query.length >= 2 && allTags.length > 0 && (
              <div className="px-6 py-3 border-b border-neutral-700">
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 10).map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`px-3 py-1 text-xs rounded-full transition-colors duration-200 ${
                        selectedTags.includes(tag)
                          ? 'bg-cyan-600 text-white'
                          : 'bg-neutral-700 text-gray-300 hover:bg-neutral-600'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Search History (when no query or results) */}
              {(!query || query.length < 2) && searchHistory.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Recent searches</h3>
                  <div className="space-y-2">
                    {searchHistory.slice(0, 5).map((historyItem, index) => (
                      <div key={index} className="flex items-center justify-between bg-neutral-800/50 rounded-lg hover:bg-neutral-800/70 transition-colors duration-200">
                        <button
                          onClick={() => handleHistoryClick(historyItem)}
                          className="flex-1 text-left p-3 text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          <div className="flex items-center gap-2">
                            <Search className="w-4 h-4 text-gray-500" />
                            <span>{historyItem}</span>
                          </div>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromHistory(historyItem);
                          }}
                          className="p-2 hover:bg-neutral-700 rounded-full transition-colors duration-200 mr-2"
                          title="Remove from history"
                        >
                          <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-400" />
                        </button>
                      </div>
                    ))}
                    {searchHistory.length > 0 && (
                      <button
                        onClick={clearAllHistory}
                        className="w-full text-center text-sm text-red-400 hover:text-red-300 transition-colors duration-200 py-2"
                      >
                        Clear All History
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Popular Queries (when no query) */}
              {(!query || query.length < 2) && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Popular searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularQueries.slice(0, 8).map((query, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(query)}
                        className="px-3 py-2 bg-neutral-800/50 rounded-lg hover:bg-neutral-800/70 transition-colors duration-200 text-gray-300 hover:text-white text-sm"
                      >
                        {query}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {query && query.length >= 2 && (
                <div className="mb-4 text-sm text-gray-400">
                  {filteredResults.length > 0 ? (
                    `${filteredResults.reduce((sum, group) => sum + group.totalHits, 0)} matching documents`
                  ) : (
                    'No results found'
                  )}
                  {selectedContentType !== 'all' && (
                    <span className="ml-2 text-cyan-400">
                      • Filtered by {contentTypes.find(ct => ct.id === selectedContentType)?.label}
                    </span>
                  )}
                </div>
              )}

              {/* Search Results */}
              {query && query.length >= 2 && filteredResults.length > 0 && (
                <div className="space-y-4">
                  {filteredResults.map((group, groupIndex) => (
                    <Link 
                      key={group.pageUrl} 
                      href={group.pageUrl}
                      onClick={handleResultClick}
                      className="block bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-800/70 transition-colors duration-200 cursor-pointer"
                    >
                      <h3 className="font-semibold text-white mb-2">
                        {group.pageTitle}
                      </h3>
                      <p className="text-sm text-gray-400 mb-3">{group.pageSection}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {group.hits[0]?.tags.slice(0, 5).map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-neutral-700 text-gray-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="text-sm text-gray-300">
                        {group.hits.slice(0, expandedGroups.has(group.pageUrl) ? group.totalHits : 3).map((hit, hitIndex) => (
                          <div key={hitIndex} className="mb-2">
                            <span dangerouslySetInnerHTML={{ __html: highlightText(hit.content, query) }} />
                          </div>
                        ))}
                      </div>
                      
                      {/* Show more/less button */}
                      {group.totalHits > 3 && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleExpandGroup(group.pageUrl);
                          }}
                          className="mt-3 text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-200"
                        >
                          {expandedGroups.has(group.pageUrl) 
                            ? `Show less` 
                            : `${group.totalHits - 3} more on this page`
                          }
                        </button>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 