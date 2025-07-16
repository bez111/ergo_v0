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
  
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(' ').filter(word => word.length > 0);
  const results: Array<SearchHit & { score: number }> = [];
  
  console.log('Searching with query words:', queryWords);
  
  index.forEach(hit => {
    let score = 0;
    let titleMatch = false;
    let contentMatch = false;
    let tagsMatch = false;
    let sectionMatch = false;
    
    // Check each query word
    queryWords.forEach(word => {
      // Title matches (highest weight) - also check partial matches
      if (hit.title.toLowerCase().includes(word) || 
          hit.title.toLowerCase().startsWith(word) ||
          word.length > 2 && hit.title.toLowerCase().includes(word.substring(0, word.length - 1))) {
        score += 10;
        titleMatch = true;
      }
      
      // Content matches (medium weight) - also check partial matches
      if (hit.content.toLowerCase().includes(word) ||
          word.length > 2 && hit.content.toLowerCase().includes(word.substring(0, word.length - 1))) {
        score += 5;
        contentMatch = true;
      }
      
      // Tags matches (high weight) - also check partial matches
      if (hit.tags.some(tag => tag.toLowerCase().includes(word) ||
          word.length > 2 && tag.toLowerCase().includes(word.substring(0, word.length - 1)))) {
        score += 8;
        tagsMatch = true;
      }
      
      // Section matches (low weight) - also check partial matches
      if (hit.section.toLowerCase().includes(word) ||
          word.length > 2 && hit.section.toLowerCase().includes(word.substring(0, word.length - 1))) {
        score += 3;
        sectionMatch = true;
      }
    });
    
    // Bonus for exact matches
    if (hit.title.toLowerCase() === queryLower) score += 20;
    if (hit.content.toLowerCase().includes(queryLower)) score += 15;
    
    // Bonus for type relevance
    if (hit.type === 'title') score += 2;
    
    if (score > 0) {
      console.log('Match found:', hit.title, 'with score:', score);
      // Create enhanced snippet with context around matches
      let snippet = createEnhancedSnippet(hit.content, queryWords, hit.title);
      
      results.push({
        ...hit,
        content: snippet,
        score
      });
    }
  });
  
  console.log('Total matches found:', results.length);
  
  // Sort by score (highest first)
  results.sort((a, b) => b.score - a.score);
  
  // Group results by page
  const groupedResults: Record<string, GroupedSearchResult> = {};
  
  results.forEach(hit => {
    const pageUrl = hit.url.split('#')[0]; // Remove anchor
    const pageTitle = hit.title;
    const pageSection = hit.section;
    
    if (!groupedResults[pageUrl]) {
      groupedResults[pageUrl] = {
        pageUrl,
        pageTitle,
        pageSection,
        hits: [],
        totalHits: 0,
        visibleHits: 0,
        expanded: false,
        relevanceScore: 0
      };
    }
    
    groupedResults[pageUrl].hits.push(hit);
    groupedResults[pageUrl].totalHits++;
    groupedResults[pageUrl].relevanceScore += hit.score;
  });
  
  // Convert to array and sort by relevance
  const groupedArray = Object.values(groupedResults);
  groupedArray.sort((a, b) => b.relevanceScore - a.relevanceScore);
  
  // Set initial visible hits (show first 3 per page)
  groupedArray.forEach(group => {
    group.visibleHits = Math.min(3, group.totalHits);
  });
  
  return groupedArray;
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
  
  const searchIndex = useRef<SearchHit[]>([]);

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
  }, [error]);

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
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
    setIsOpen(false);
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

  // Filter results by selected tags
  const filteredResults = useMemo(() => {
    if (selectedTags.length === 0) return results;
    return results.filter(group => 
      group.hits.some(hit => 
        selectedTags.some(selectedTag => 
          hit.tags.includes(selectedTag)
        )
      )
    );
  }, [results, selectedTags]);

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors duration-200 text-gray-300 hover:text-white"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-neutral-700 rounded">
          <Command className="w-3 h-3" />
          K
        </kbd>
      </button>

      {/* Error message */}
      {error && (
        <div className="mt-4 p-4 bg-red-900 text-red-300 rounded-lg border border-red-700">
          <b>Search error:</b> {error}
        </div>
      )}

      {/* Search Modal */}
      {isOpen && !error && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 animate-in fade-in duration-200">
          <div className="w-full max-w-4xl mx-4 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl max-h-[80vh] flex flex-col animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-700">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={handleSearchChange}
                  placeholder="Search documentation... (min 2 characters)"
                  className="w-full bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-neutral-800 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
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
              {query && query.length >= 2 && (
                <div className="mb-4 text-sm text-gray-400">
                  {filteredResults.length > 0 ? (
                    `${filteredResults.reduce((sum, group) => sum + group.totalHits, 0)} matching documents`
                  ) : (
                    'No results found'
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