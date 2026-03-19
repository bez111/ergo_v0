import type { SearchHit, GroupedSearchResult } from './search-types'

// Build search index from menu data and file system
export function buildSearchIndex(): SearchHit[] {
  const index: SearchHit[] = [];

  // Additional content descriptions for better search
  const contentDescriptions: Record<string, string> = {
    '/docs/why-ergo': 'Learn why Ergo is a unique blockchain platform with advanced features like eUTXO, ErgoScript, and privacy. Ergo combines the best of Bitcoin and Ethereum with innovative proof-of-work mining, smart contracts, and privacy features. Discover how Ergo\'s design philosophy prioritizes decentralization, security, and user sovereignty.',
    '/docs/introduction/key-features': 'Explore Ergo\'s key features including eUTXO model, ErgoScript, NIPoPoWs, and privacy features. The eUTXO model provides better security and scalability than traditional account-based models. ErgoScript enables powerful smart contracts with formal verification. NIPoPoWs allow lightweight clients to verify transactions without downloading the full blockchain.',
    '/docs/introduction/roadmap': 'Ergo development roadmap and future plans for scaling, privacy, and ecosystem growth. The roadmap includes Layer 2 solutions, enhanced privacy features, cross-chain bridges, and developer tooling improvements. Community governance and decentralized funding mechanisms are key priorities.',
    '/docs/introduction/research-whitepapers': 'Research papers and whitepapers about Ergo blockchain technology and protocols. Academic research covers consensus mechanisms, privacy protocols, smart contract formal verification, and economic models. Papers are peer-reviewed and contribute to blockchain science.',
    '/docs/introduction/entities': 'Organizations and entities in the Ergo ecosystem including Ergo Foundation and community groups. The Ergo Foundation supports development, education, and adoption. Community DAOs and working groups focus on specific areas like DeFi, privacy, and developer experience.',
    '/docs/introduction/wallets': 'Wallets for storing and managing ERG tokens and interacting with Ergo blockchain. Official wallets include Yoroi and Nautilus with features like multi-sig, hardware wallet support, and DeFi integration. Third-party wallets provide additional functionality and user choice.',
    '/docs/introduction/resources': 'Resources for learning about Ergo including documentation, tools, and community links. Comprehensive guides cover everything from basic concepts to advanced development. Developer tools include SDKs, APIs, and testing frameworks. Community resources include forums, Discord, and GitHub repositories.',
    '/docs/contribute': 'How to contribute to Ergo development, documentation, and community. Contribution opportunities include code development, documentation writing, testing, community management, and financial support. The project welcomes developers, researchers, designers, and community organizers.',
    '/docs/introduction/events': 'Ergo community events, meetups, and conferences. Regular events include ErgoHack hackathons, community calls, developer workshops, and global meetups. Events focus on education, collaboration, and ecosystem growth.',
    '/learn/glossary': 'Glossary of Ergo blockchain terms and technical concepts. Comprehensive definitions cover blockchain fundamentals, Ergo-specific terminology, and advanced concepts. Each term includes examples and related concepts for better understanding.',
    '/docs/introduction/faq': 'Frequently asked questions about Ergo blockchain and ecosystem. Common questions cover mining, staking, smart contracts, privacy features, and getting started. Answers are updated regularly based on community feedback.',
    '/docs/ecosystem/infrastructure': 'Infrastructure projects and tools in the Ergo ecosystem. Includes node operators, indexers, oracles, and developer tooling. Infrastructure supports DeFi protocols, privacy features, and cross-chain functionality.',
    '/docs/ecosystem/financial': 'Financial applications and DeFi protocols built on Ergo. DeFi ecosystem includes lending, derivatives, crowdfunding, and yield farming. Protocols leverage Ergo\'s security and privacy features for innovative financial products.',
    '/docs/ecosystem/privacy': 'Privacy features and applications on Ergo blockchain. Privacy tools include Sigma protocols, zero-knowledge proofs, and confidential transactions. Applications range from private payments to confidential DeFi protocols.',
    '/docs/ecosystem/nfts': 'NFT projects and gaming applications on Ergo. NFT ecosystem includes art, collectibles, gaming assets, and utility tokens. Gaming applications leverage Ergo\'s smart contracts for provably fair games and asset ownership.',
    '/docs/ecosystem/ai': 'Artificial Intelligence applications and integrations with Ergo. AI projects include prediction markets, automated trading, and data analysis tools. Integration focuses on decentralized AI and machine learning on blockchain.',
    '/docs/ecosystem/daos': 'Decentralized Autonomous Organizations on Ergo. DAOs use smart contracts for governance, funding, and decision-making. Examples include development funding, community governance, and project management.',
    '/docs/ecosystem/applications': 'Applications and dApps built on Ergo blockchain. Applications range from simple utilities to complex DeFi protocols. Developer tools and documentation support rapid application development.',
    '/docs/ecosystem/tooling': 'Developer tools and utilities for Ergo development. Tooling includes SDKs, APIs, testing frameworks, and deployment tools. Developer experience focuses on ease of use and comprehensive documentation.',
    '/docs/ecosystem/Standards': 'Standards and protocols in the Ergo ecosystem. Standards ensure interoperability between applications and protocols. Includes token standards, privacy protocols, and cross-chain communication.',
    '/docs/introduction/autolykos': 'Autolykos v2 proof-of-work algorithm used by Ergo for mining. Autolykos is memory-hard and ASIC-resistant, designed for fair distribution and decentralization. The algorithm requires significant memory, making specialized hardware less advantageous than general-purpose computers.',
    '/docs/miners/resources': 'Resources for Ergo miners including guides and tools. Mining resources include software, hardware recommendations, pool information, and profitability calculators. Community support helps new miners get started.',
    '/docs/ecosystem/financial/defi': 'Decentralized Finance (DeFi) protocols on Ergo including lending, derivatives, crowdfunding, and yield farming. DeFi ecosystem leverages Ergo\'s security and privacy features for innovative financial products.',
    '/docs/ecosystem/financial/defi/duckpools': 'Decentralized lending pools on Ergo. DuckPools enables users to lend and borrow assets with transparent, on-chain protocols.',
    '/docs/ecosystem/financial/defi/sigmafi': 'P2P DeFi bond market for collateralized loans on Ergo. SigmaFi enables peer-to-peer lending with smart contract automation.',
    '/docs/ecosystem/financial/defi/exle': 'Experimental lending engine for DeFi on Ergo. EXLE provides innovative lending mechanisms and risk management.',
    '/docs/ecosystem/financial/defi/micro-credit': 'Micro-loans for individuals and small businesses on Ergo. Expand access to DeFi with small-scale lending protocols.',
    '/docs/ecosystem/financial/defi/flash-loans': 'Instant, collateral-free loans for advanced DeFi strategies and arbitrage on Ergo.',
    '/docs/ecosystem/financial/defi/mutual-credit': 'Peer-to-peer credit protocols for trustless, decentralized borrowing and lending circles.',
    '/docs/ecosystem/financial/defi/sigmao': 'Advanced options and derivatives protocol on Ergo. SigmaO enables complex financial instruments.',
    '/docs/ecosystem/financial/defi/optionpools': 'Pooled options trading on Ergo. OptionPools provides decentralized options trading with liquidity pools.',
    '/docs/ecosystem/financial/defi/trustless-prediction-markets': '100% trustless, permissionless prediction markets powered by the UTXO model. Make markets on any on-chain data with automatic verification.',
    '/docs/ecosystem/financial/defi/perpetual-tokens': 'Tokens designed to persist indefinitely on-chain, enabled by ErgoScript. Perpetual tokens can only be removed via garbage collection.',
    '/docs/ecosystem/financial/defi/multi-stage-protocols': 'Protocols enabling advanced DeFi logic through scripts that reference each other across stages. Supports complex interactions and persistent state.',
    '/docs/ecosystem/financial/defi/ergoraffle': 'Decentralized raffle and crowdfunding platform on Ergo. ErgoRaffle enables transparent fundraising and prize distribution.',
    '/docs/ecosystem/financial/defi/sigma-subscriptions': 'Subscription-based crowdfunding protocol on Ergo. Sigma Subscriptions enables recurring, programmable donations.',
    '/docs/ecosystem/financial/defi/revenue-sharing': 'Modular solution for decentralized profit/revenue sharing on Ergo. Includes distribution, staking, and income contracts.',
    '/docs/ecosystem/financial/defi/buyback-guarantees': 'Protocols that guarantee token buybacks, stabilizing price and providing investors with additional profit assurance.',
    '/docs/ecosystem/financial/defi/insurance': 'Decentralized insurance protocols to protect user funds and profits from hacks, bugs, or unexpected events in the DeFi ecosystem.',
    '/docs/ecosystem/financial/defi/ico': 'Initial Coin Offerings (ICOs) allow projects to raise funds and distribute tokens to early supporters in a transparent, on-chain process.',
    '/docs/ecosystem/financial/defi/index-coins': 'Index coins track the value of a basket of assets, providing diversified exposure and simplified portfolio management for DeFi users.',
    '/docs/ecosystem/financial/defi/pow-tokens': 'Proof-of-Work tokens are mined or earned through computational work, enabling new incentive models and decentralized distribution.',
    '/docs/ecosystem/financial/defi/bonding-curve': 'Bonding curves are mathematical mechanisms for dynamic token pricing and supply, enabling continuous fundraising and automated market making.',
    '/docs/ecosystem/privacy/ergomixer': 'Privacy-focused mixing protocol on Ergo. ErgoMixer enables confidential transactions and privacy protection.',
    '/docs/ecosystem/privacy/sigmajoin': 'SigmaJoin protocol for privacy-preserving transactions on Ergo. Enables confidential transfers and privacy protection.',
    '/docs/ecosystem/privacy/stealth-addresses': 'Stealth addresses for enhanced privacy on Ergo. Provides additional layers of privacy protection for transactions.',
    '/docs/ecosystem/tooling/arbit': 'Arbit tooling for Ergo development. Provides utilities and frameworks for building on Ergo.',
    '/docs/ecosystem/tooling/celaut': 'Celaut tooling and utilities for Ergo ecosystem. Developer tools and frameworks.',
    '/docs/ecosystem/tooling/crux-finance': 'Crux Finance tooling for DeFi development on Ergo. Financial protocol development tools.',
    '/docs/ecosystem/tooling/grid-trading': 'Grid trading tools and utilities for Ergo. Automated trading strategies and tools.',
    '/docs/ecosystem/tooling/netnotes': 'NetNotes tooling for Ergo development. Note-taking and documentation tools.',
    '/docs/ecosystem/tooling/off-the-grid': 'Off-the-grid tools for Ergo development. Decentralized and privacy-focused development tools.',
    '/docs/ecosystem/tooling/moria-finance': 'Moria Finance tooling for DeFi development on Ergo. Financial protocol development frameworks.',
    '/docs/ecosystem/tooling/ergonames': 'ErgoNames service for human-readable addresses on Ergo. Domain name system for Ergo blockchain.',
    '/docs/ecosystem/tooling/reputation-system': 'Reputation system tools for Ergo ecosystem. Community reputation and trust mechanisms.',
    '/docs/ecosystem/tooling/trading': 'Trading tools and utilities for Ergo. Automated trading and market analysis tools.',
    '/docs/ecosystem/tooling/sigmarand': 'SigmaRand tooling for random number generation on Ergo. Cryptographic randomness tools.',
    '/docs/ecosystem/tooling/tutorial': 'Tutorial tools and guides for Ergo development. Educational resources and learning materials.',
    '/docs/ecosystem/infrastructure/oracles': 'Oracle infrastructure for Ergo blockchain. Provides external data feeds and price oracles for DeFi protocols.',
    '/docs/ecosystem/infrastructure/rosen-bridge': 'Rosen Bridge for cross-chain interoperability. Enables asset transfers between Ergo and other blockchains.',
    '/docs/ecosystem/infrastructure/sidechains': 'Sidechain infrastructure for Ergo. Layer 2 solutions and scaling mechanisms.',
    '/docs/ecosystem/financial/degenerate-finance': 'Degenerate Finance protocols on Ergo. High-risk, high-reward DeFi protocols and gaming applications.',
    '/docs/ecosystem/financial/degenerate-finance/auctioncoin': 'AuctionCoin - auction-based token distribution on Ergo. Innovative token sale mechanisms.',
    '/docs/ecosystem/financial/degenerate-finance/grand-gambit': 'Grand Gambit - high-risk DeFi protocol on Ergo. Advanced trading and speculation tools.',
    '/docs/ecosystem/financial/degenerate-finance/hodlbox': 'HodlBox - HODL-based DeFi protocol on Ergo. Long-term holding incentives and rewards.',
    '/docs/ecosystem/financial/degenerate-finance/hodlcoin': 'HodlCoin - HODL incentivized token on Ergo. Penalty-based holding mechanisms.',
    '/docs/ecosystem/financial/degenerate-finance/lotteries': 'Lottery protocols on Ergo. Decentralized lottery and gambling applications.',
    '/docs/ecosystem/financial/degenerate-finance/obolflip': 'ObolFlip - coin flip protocol on Ergo. Provably fair gambling applications.',
    '/docs/ecosystem/financial/degenerate-finance/optioncoin': 'OptionCoin - options-based token on Ergo. Call option token distribution.',
    '/docs/ecosystem/financial/degenerate-finance/the-field': 'The Field - gaming protocol on Ergo. Interactive gaming and gambling applications.',
    '/docs/ecosystem/financial/dex': 'Decentralized Exchanges (DEX) on Ergo. Automated market makers and trading protocols.',
    '/docs/ecosystem/financial/dex/analog-ergo': 'Analog Ergo DEX. Decentralized exchange for Ergo ecosystem.',
    '/docs/ecosystem/financial/dex/crystal-pool': 'Crystal Pool DEX. Automated market maker for Ergo tokens.',
    '/docs/ecosystem/financial/dex/guapswap': 'GuapSwap DEX. Decentralized exchange with advanced features.',
    '/docs/ecosystem/financial/dex/machina': 'Machina DEX. Automated market maker and trading protocol.',
    '/docs/ecosystem/financial/dex/mew': 'MEW DEX. Multi-exchange wallet integration.',
    '/docs/ecosystem/financial/dex/palmyra': 'Palmyra DEX. Decentralized exchange with liquidity pools.',
    '/docs/ecosystem/financial/dex/single-tx-swap': 'Single Transaction Swap protocol. Atomic swap implementation.',
    '/docs/ecosystem/financial/dex/spectrum': 'Spectrum DEX. Comprehensive decentralized exchange platform.',
    '/docs/ecosystem/financial/monetary-systems': 'Monetary systems and stablecoins on Ergo. Alternative currency and stable value protocols.',
    '/docs/ecosystem/financial/monetary-systems/chaincash': 'ChainCash - algorithmic stablecoin on Ergo. Decentralized stable value protocol.',
    '/docs/ecosystem/financial/monetary-systems/lets': 'LETS - Local Exchange Trading System on Ergo. Community-based exchange networks.',
    '/docs/ecosystem/financial/monetary-systems/gluon': 'Gluon - monetary protocol on Ergo. Alternative currency and exchange mechanisms.',
    '/docs/ecosystem/applications/email-client': 'Email client for blocked internet on Ergo. Decentralized communication tools.',
    '/docs/ecosystem/applications/tabbypos': 'TabbyPOS - point of sale system on Ergo. Merchant payment solutions.',
    '/docs/ecosystem/applications/zenGateGlobal': 'ZenGate Global - global payment solutions on Ergo. Cross-border payment protocols.',
    '/docs/ecosystem/gaming': 'Gaming applications and protocols on Ergo. Provably fair games and gaming infrastructure.',
    '/docs/ecosystem/nfts/pandaV': 'PandaV NFT platform on Ergo. Digital art and collectibles marketplace.',
    '/docs/ecosystem/nfts/skyharbor': 'SkyHarbor NFT marketplace on Ergo. Comprehensive NFT trading platform.',
    '/docs/introduction/eutxo': 'Extended Unspent Transaction Output (eUTXO) model on Ergo. Advanced UTXO model with enhanced capabilities.',
    '/docs/introduction/nipopows': 'Non-Interactive Proofs of Proof-of-Work (NIPoPoWs) on Ergo. Lightweight client verification.',
    '/docs/introduction/storage-rent': 'Storage rent mechanism on Ergo. Economic incentives for blockchain state management.',
    '/docs/introduction/utxo-state': 'UTXO state management on Ergo. Understanding how state is stored and managed.',
    '/docs/introduction/utxo-vs-account': 'UTXO vs Account model comparison. Understanding different blockchain architectures.',
    '/docs/introduction/light-clients': 'Light client implementations on Ergo. Simplified blockchain access and verification.',
    '/docs/introduction/light-miners': 'Light mining protocols on Ergo. Simplified mining for resource-constrained devices.',
    '/docs/introduction/nipopow-sidechains': 'NIPoPoW sidechains on Ergo. Cross-chain verification and interoperability.',
    '/docs/introduction/ergosummit': 'Ergo Summit events and conferences. Community gatherings and developer events.',
    '/docs/introduction/ergo-foundation': 'Ergo Foundation organization and governance. Foundation structure and mission.',
    '/docs/introduction/audit': 'Security audits and verification on Ergo. Code review and security assessment processes.',
    '/docs/introduction/cbdc': 'Central Bank Digital Currency (CBDC) research on Ergo. Government digital currency exploration.',
    '/docs/introduction/devdao': 'Developer DAO on Ergo. Decentralized developer organization and governance.',
    '/docs/introduction/misconceptions': 'Common misconceptions about Ergo. Clarifying misunderstandings and myths.',
    '/docs/introduction/privacy': 'Privacy features on Ergo. Confidential transactions and privacy protection.',
    '/docs/introduction/privacy-guide': 'Privacy guide for Ergo users. How to maintain privacy and security.',
    '/docs/introduction/sigmanauts': 'Sigmanauts program on Ergo. Community ambassador and education program.',
    '/docs/introduction/social-contract': 'Social contract of Ergo. Community values and principles.',
    '/docs/miners/Miner-Tooling': 'Mining tools and utilities for Ergo. Software and hardware for miners.',
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

  function processMenuSection(section: { title: string; href?: string; description?: string; items?: typeof section[] }, parentSection: string = '') {
    const sectionPath = parentSection ? `${parentSection} > ${section.title}` : section.title;

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

    if (section.items) {
      section.items.forEach((item) => processMenuSection(item, sectionPath));
    }
  }

  const existingPages = [
    '/docs/ecosystem/financial/defi/duckpools',
    '/docs/ecosystem/financial/defi/sigmafi',
    '/docs/ecosystem/financial/defi/exle',
    '/docs/ecosystem/financial/defi/micro-credit',
    '/docs/ecosystem/financial/defi/flash-loans',
    '/docs/ecosystem/financial/defi/mutual-credit',
    '/docs/ecosystem/financial/defi/sigmao',
    '/docs/ecosystem/financial/defi/optionpools',
    '/docs/ecosystem/financial/defi/trustless-prediction-markets',
    '/docs/ecosystem/financial/defi/perpetual-tokens',
    '/docs/ecosystem/financial/defi/multi-stage-protocols',
    '/docs/ecosystem/financial/defi/ergoraffle',
    '/docs/ecosystem/financial/defi/sigma-subscriptions',
    '/docs/ecosystem/financial/defi/revenue-sharing',
    '/docs/ecosystem/financial/defi/buyback-guarantees',
    '/docs/ecosystem/financial/defi/insurance',
    '/docs/ecosystem/financial/defi/ico',
    '/docs/ecosystem/financial/defi/index-coins',
    '/docs/ecosystem/financial/defi/pow-tokens',
    '/docs/ecosystem/financial/defi/bonding-curve',
    '/docs/ecosystem/privacy/ergomixer',
    '/docs/ecosystem/privacy/sigmajoin',
    '/docs/ecosystem/privacy/stealth-addresses',
    '/docs/ecosystem/tooling/arbit',
    '/docs/ecosystem/tooling/celaut',
    '/docs/ecosystem/tooling/crux-finance',
    '/docs/ecosystem/tooling/grid-trading',
    '/docs/ecosystem/tooling/netnotes',
    '/docs/ecosystem/tooling/off-the-grid',
    '/docs/ecosystem/tooling/moria-finance',
    '/docs/ecosystem/tooling/ergonames',
    '/docs/ecosystem/tooling/reputation-system',
    '/docs/ecosystem/tooling/trading',
    '/docs/ecosystem/tooling/sigmarand',
    '/docs/ecosystem/tooling/tutorial',
    '/docs/ecosystem/infrastructure/oracles',
    '/docs/ecosystem/infrastructure/rosen-bridge',
    '/docs/ecosystem/infrastructure/sidechains',
    '/docs/ecosystem/financial/degenerate-finance',
    '/docs/ecosystem/financial/degenerate-finance/auctioncoin',
    '/docs/ecosystem/financial/degenerate-finance/grand-gambit',
    '/docs/ecosystem/financial/degenerate-finance/hodlbox',
    '/docs/ecosystem/financial/degenerate-finance/hodlcoin',
    '/docs/ecosystem/financial/degenerate-finance/lotteries',
    '/docs/ecosystem/financial/degenerate-finance/obolflip',
    '/docs/ecosystem/financial/degenerate-finance/optioncoin',
    '/docs/ecosystem/financial/degenerate-finance/the-field',
    '/docs/ecosystem/financial/dex',
    '/docs/ecosystem/financial/dex/analog-ergo',
    '/docs/ecosystem/financial/dex/crystal-pool',
    '/docs/ecosystem/financial/dex/guapswap',
    '/docs/ecosystem/financial/dex/machina',
    '/docs/ecosystem/financial/dex/mew',
    '/docs/ecosystem/financial/dex/palmyra',
    '/docs/ecosystem/financial/dex/single-tx-swap',
    '/docs/ecosystem/financial/dex/spectrum',
    '/docs/ecosystem/financial/monetary-systems',
    '/docs/ecosystem/financial/monetary-systems/chaincash',
    '/docs/ecosystem/financial/monetary-systems/lets',
    '/docs/ecosystem/financial/monetary-systems/gluon',
    '/docs/ecosystem/applications/email-client',
    '/docs/ecosystem/applications/tabbypos',
    '/docs/ecosystem/applications/zenGateGlobal',
    '/docs/ecosystem/gaming',
    '/docs/ecosystem/nfts/pandaV',
    '/docs/ecosystem/nfts/skyharbor',
    '/docs/introduction/eutxo',
    '/docs/introduction/nipopows',
    '/docs/introduction/storage-rent',
    '/docs/introduction/light-clients',
    '/docs/introduction/howey-test',
    '/docs/introduction/misconceptions',
    '/docs/introduction/privacy',
    '/docs/introduction/privacy-guide',
    '/docs/introduction/sigmanauts',
    '/docs/introduction/social-contract',
  ];

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

  // suppress unused warning — processMenuSection is available for callers who pass menu data
  void processMenuSection;

  return index;
}

export function extractTags(content: string, section: string): string[] {
  const tags: string[] = [];

  const sectionParts = section.toLowerCase().split(' > ');
  tags.push(...sectionParts);

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

  return [...new Set(tags)];
}

export function getContentType(url: string, title: string): 'title' | 'content' | 'code' | 'anchor' {
  if (url.includes('#') || title.startsWith('#')) return 'anchor';
  if (title.toLowerCase().includes('code') || title.toLowerCase().includes('script')) return 'code';
  if (url.split('/').length <= 3) return 'title';
  return 'content';
}

export function searchInIndex(query: string, index: SearchHit[]): GroupedSearchResult[] {
  if (!query.trim()) return [];

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

  const expandedQueryWords = [...queryWords];
  queryWords.forEach(word => {
    const wordSynonyms = synonyms[word] || [];
    expandedQueryWords.push(...wordSynonyms);
  });

  const results: Array<SearchHit & { score: number }> = [];

  index.forEach(hit => {
    let score = 0;
    let titleMatch = false;
    let contentMatch = false;
    let tagsMatch = false;
    let sectionMatch = false;
    let exactMatch = false;

    expandedQueryWords.forEach(word => {
      if (hit.title.toLowerCase() === word) {
        score += 20; titleMatch = true; exactMatch = true;
      } else if (hit.title.toLowerCase().startsWith(word)) {
        score += 15; titleMatch = true;
      } else if (hit.title.toLowerCase().includes(word)) {
        score += 10; titleMatch = true;
      }

      if (hit.content.toLowerCase() === word) {
        score += 15; contentMatch = true; exactMatch = true;
      } else if (hit.content.toLowerCase().includes(word)) {
        score += 5; contentMatch = true;
      }

      if (hit.tags.some(tag => tag.toLowerCase() === word)) {
        score += 12; tagsMatch = true; exactMatch = true;
      } else if (hit.tags.some(tag => tag.toLowerCase().includes(word))) {
        score += 8; tagsMatch = true;
      }

      if (hit.section.toLowerCase().includes(word)) {
        score += 3; sectionMatch = true;
      }
    });

    if (titleMatch && contentMatch) score += 5;
    if (titleMatch && tagsMatch) score += 3;
    if (exactMatch) score += 10;
    if (hit.type === 'title') score += 2;
    if (hit.url.includes('/introduction/')) score += 1;
    // suppress unused warning
    void sectionMatch;

    if (score > 0) {
      results.push({ ...hit, score });
    }
  });

  results.sort((a, b) => b.score - a.score);

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

  const finalResults = Array.from(groupedResults.values());
  finalResults.sort((a, b) => b.relevanceScore - a.relevanceScore);

  return finalResults.slice(0, 20);
}

export function createEnhancedSnippet(content: string, queryWords: string[], title: string): string {
  const contentLower = content.toLowerCase();
  let bestSnippet = '';
  let bestScore = 0;

  queryWords.forEach(word => {
    const wordIndex = contentLower.indexOf(word);
    if (wordIndex !== -1) {
      const contextStart = Math.max(0, wordIndex - 100);
      const contextEnd = Math.min(content.length, wordIndex + word.length + 100);

      let snippet = content.substring(contextStart, contextEnd);

      if (contextStart > 0) snippet = '...' + snippet;
      if (contextEnd < content.length) snippet = snippet + '...';

      let snippetScore = 0;
      queryWords.forEach(qw => {
        if (snippet.toLowerCase().includes(qw)) {
          snippetScore += qw.length;
        }
      });

      const matchedWords = queryWords.filter(qw => snippet.toLowerCase().includes(qw));
      snippetScore += matchedWords.length * 10;

      if (snippetScore > bestScore) {
        bestScore = snippetScore;
        bestSnippet = snippet;
      }
    }
  });

  if (!bestSnippet) {
    bestSnippet = `Learn about ${title.toLowerCase()} and related topics.`;
  }

  return bestSnippet;
}

export function highlightText(text: string, query: string): string {
  if (!query.trim()) return text;

  const queryWords = query.toLowerCase().split(' ').filter(word => word.length > 0);
  let highlightedText = text;

  const sortedWords = queryWords.sort((a, b) => b.length - a.length);

  sortedWords.forEach(word => {
    const regex = new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-500/30 text-yellow-200 px-1 rounded">$1</mark>');
  });

  return highlightedText;
}
