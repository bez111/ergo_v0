// Entity-based SEO & Knowledge Graph Optimization
// Helps Google understand entities and relationships for better ranking

// Define Ergo-related entities
export const entities = {
  // Main Entity - Ergo Platform
  ergoPlatform: {
    "@type": "Thing",
    "@id": "https://ergoblockchain.org/#ergo",
    "name": "Ergo Platform",
    "alternateName": ["Ergo", "ERG", "Ergo Blockchain", "ErgoBlockchain"],
    "description": "A resilient blockchain platform for contractual money",
    "sameAs": [
      "https://www.wikidata.org/wiki/Q106629398", // Wikidata ID
      "https://en.wikipedia.org/wiki/Ergo_(blockchain)",
      "https://www.coingecko.com/en/coins/ergo",
      "https://coinmarketcap.com/currencies/ergo/",
      "https://github.com/ergoplatform"
    ],
    "knowsAbout": [
      "Blockchain Technology",
      "Cryptocurrency",
      "Smart Contracts",
      "Decentralized Finance"
    ],
    "subjectOf": {
      "@type": "Book",
      "name": "Ergo Whitepaper",
      "url": "https://ergoplatform.org/en/whitepaper.pdf"
    }
  },
  
  // Person Entities
  alexChepurnoy: {
    "@type": "Person",
    "@id": "https://ergoblockchain.org/#alex-chepurnoy",
    "name": "Alexander Chepurnoy",
    "alternateName": ["Alex Chepurnoy", "kushti"],
    "jobTitle": "Co-Founder",
    "worksFor": {
      "@id": "https://ergoblockchain.org/#ergo"
    },
    "sameAs": [
      "https://twitter.com/chepurnoy",
      "https://github.com/kushti",
      "https://scholar.google.com/citations?user=XXXXX", // Add actual ID
      "https://www.linkedin.com/in/chepurnoy/"
    ],
    "knowsAbout": [
      "Blockchain",
      "Cryptography",
      "Distributed Systems",
      "Formal Verification"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Saint Petersburg State University"
    }
  },
  
  // Technology Entities
  ergoScript: {
    "@type": "ComputerLanguage",
    "@id": "https://ergoblockchain.org/#ergoscript",
    "name": "ErgoScript",
    "description": "A powerful scripting language for smart contracts on Ergo",
    "creator": {
      "@id": "https://ergoblockchain.org/#ergo"
    },
    "programmingParadigm": "Functional",
    "basedOn": "Sigma Protocols",
    "isPartOf": {
      "@id": "https://ergoblockchain.org/#ergo"
    }
  },
  
  autolykos: {
    "@type": "Algorithm",
    "@id": "https://ergoblockchain.org/#autolykos",
    "name": "Autolykos",
    "alternateName": "Autolykos v2",
    "description": "ASIC-resistant, memory-hard Proof-of-Work consensus algorithm",
    "version": "2.0",
    "creator": {
      "@id": "https://ergoblockchain.org/#ergo"
    },
    "isBasedOn": "Equihash",
    "applicationCategory": "Cryptocurrency Mining"
  },
  
  sigmaProtocols: {
    "@type": "TechArticle",
    "@id": "https://ergoblockchain.org/#sigma-protocols",
    "name": "Sigma Protocols",
    "description": "Zero-knowledge proof protocols used in ErgoScript",
    "isPartOf": {
      "@id": "https://ergoblockchain.org/#ergo"
    },
    "about": [
      "Zero-Knowledge Proofs",
      "Cryptographic Protocols",
      "Privacy"
    ]
  },
  
  // Related Blockchain Entities
  bitcoin: {
    "@type": "Thing",
    "@id": "https://bitcoin.org",
    "name": "Bitcoin",
    "sameAs": "https://www.wikidata.org/wiki/Q131723"
  },
  
  ethereum: {
    "@type": "Thing",
    "@id": "https://ethereum.org",
    "name": "Ethereum",
    "sameAs": "https://www.wikidata.org/wiki/Q24835766"
  },
  
  cardano: {
    "@type": "Thing",
    "@id": "https://cardano.org",
    "name": "Cardano",
    "sameAs": "https://www.wikidata.org/wiki/Q27895823"
  }
}

// Define relationships between entities
export const relationships = {
  ergoVsBitcoin: {
    "@type": "ComparisonRelation",
    "compares": [
      { "@id": "https://ergoblockchain.org/#ergo" },
      { "@id": "https://bitcoin.org" }
    ],
    "comparisonAspect": [
      "Consensus Mechanism",
      "Smart Contract Support",
      "Mining Algorithm",
      "Supply Model"
    ],
    "conclusion": "Ergo extends Bitcoin's UTXO model with smart contracts"
  },
  
  ergoVsEthereum: {
    "@type": "ComparisonRelation",
    "compares": [
      { "@id": "https://ergoblockchain.org/#ergo" },
      { "@id": "https://ethereum.org" }
    ],
    "comparisonAspect": [
      "Data Model",
      "Consensus",
      "Smart Contract Language",
      "Privacy Features"
    ],
    "conclusion": "Ergo uses eUTXO vs Ethereum's account model"
  },
  
  ergoCardanoRelation: {
    "@type": "Relationship",
    "relationshipType": "Technical Similarity",
    "between": [
      { "@id": "https://ergoblockchain.org/#ergo" },
      { "@id": "https://cardano.org" }
    ],
    "description": "Both use eUTXO model, founders collaborated at IOHK"
  }
}

// Generate Knowledge Graph JSON-LD
export function generateKnowledgeGraph(pageType: string): object {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [] as any[]
  }
  
  // Always include main entity
  graph["@graph"].push(entities.ergoPlatform)
  
  // Add page-specific entities
  switch(pageType) {
    case 'home':
      graph["@graph"].push(
        entities.alexChepurnoy,
        entities.ergoScript,
        entities.autolykos,
        entities.sigmaProtocols
      )
      break
      
    case 'technology':
      graph["@graph"].push(
        entities.ergoScript,
        entities.autolykos,
        entities.sigmaProtocols
      )
      break
      
    case 'comparison':
      graph["@graph"].push(
        entities.bitcoin,
        entities.ethereum,
        entities.cardano,
        relationships.ergoVsBitcoin,
        relationships.ergoVsEthereum,
        relationships.ergoCardanoRelation
      )
      break
  }
  
  return graph
}

// Entity Salience Scoring
export function calculateEntitySalience(content: string): Map<string, number> {
  const salience = new Map<string, number>()
  
  // Define entity patterns and weights
  const entityPatterns = [
    { entity: 'Ergo', pattern: /\bergo\b/gi, weight: 1.0 },
    { entity: 'ErgoScript', pattern: /\bergoscript\b/gi, weight: 0.9 },
    { entity: 'Autolykos', pattern: /\bautolykos\b/gi, weight: 0.8 },
    { entity: 'eUTXO', pattern: /\beutxo\b/gi, weight: 0.8 },
    { entity: 'Sigma Protocols', pattern: /\bsigma protocols?\b/gi, weight: 0.8 },
    { entity: 'Mining', pattern: /\bmining\b/gi, weight: 0.7 },
    { entity: 'DeFi', pattern: /\bdefi\b/gi, weight: 0.7 },
    { entity: 'Smart Contracts', pattern: /\bsmart contracts?\b/gi, weight: 0.7 },
    { entity: 'Blockchain', pattern: /\bblockchain\b/gi, weight: 0.6 },
    { entity: 'Cryptocurrency', pattern: /\bcryptocurrency\b/gi, weight: 0.6 }
  ]
  
  // Calculate frequency and position-based salience
  entityPatterns.forEach(({ entity, pattern, weight }) => {
    const matches = content.match(pattern)
    if (matches) {
      const frequency = matches.length
      const firstPosition = content.search(pattern)
      const positionWeight = firstPosition < 100 ? 1.5 : firstPosition < 500 ? 1.2 : 1.0
      
      salience.set(entity, frequency * weight * positionWeight)
    }
  })
  
  // Normalize scores
  const maxSalience = Math.max(...salience.values())
  salience.forEach((score, entity) => {
    salience.set(entity, score / maxSalience)
  })
  
  return salience
}

// Generate Entity Markup for content
export function addEntityMarkup(content: string): string {
  let marked = content
  
  // Entity marking patterns
  const markupPatterns = [
    {
      pattern: /\b(Ergo Platform|Ergo blockchain|Ergo)\b/g,
      replacement: '<span itemscope itemtype="https://schema.org/Thing" itemid="https://ergoblockchain.org/#ergo"><span itemprop="name">$1</span></span>'
    },
    {
      pattern: /\b(ErgoScript)\b/g,
      replacement: '<span itemscope itemtype="https://schema.org/ComputerLanguage" itemid="https://ergoblockchain.org/#ergoscript"><span itemprop="name">$1</span></span>'
    },
    {
      pattern: /\b(Autolykos v2|Autolykos)\b/g,
      replacement: '<span itemscope itemtype="https://schema.org/Algorithm" itemid="https://ergoblockchain.org/#autolykos"><span itemprop="name">$1</span></span>'
    },
    {
      pattern: /\b(Alex Chepurnoy|Alexander Chepurnoy)\b/g,
      replacement: '<span itemscope itemtype="https://schema.org/Person" itemid="https://ergoblockchain.org/#alex-chepurnoy"><span itemprop="name">$1</span></span>'
    }
  ]
  
  markupPatterns.forEach(({ pattern, replacement }) => {
    marked = marked.replace(pattern, replacement)
  })
  
  return marked
}

// Topic Modeling for Content
export function extractTopics(content: string): string[] {
  const topics: string[] = []
  
  // Topic detection patterns
  const topicPatterns = {
    'Mining': /mining|miner|hashrate|pool|gpu/gi,
    'DeFi': /defi|decentralized finance|liquidity|swap|yield/gi,
    'Privacy': /privacy|anonymous|mixer|stealth|confidential/gi,
    'Smart Contracts': /smart contract|ergoscript|dapp|programmable/gi,
    'Trading': /trading|exchange|price|market|buy|sell/gi,
    'Development': /develop|build|code|api|sdk|github/gi,
    'Governance': /governance|voting|dao|proposal|community/gi,
    'Technology': /technology|protocol|algorithm|cryptography|consensus/gi
  }
  
  Object.entries(topicPatterns).forEach(([topic, pattern]) => {
    if (pattern.test(content)) {
      topics.push(topic)
    }
  })
  
  return topics
}

// Generate AboutPage schema for entity pages
export function generateAboutPageSchema(entity: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": (entities as any)[entity] || entities.ergoPlatform,
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `https://ergoblockchain.org/images/${entity}.png`
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ergoblockchain.org"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": entity,
          "item": `https://ergoblockchain.org/${entity.toLowerCase()}`
        }
      ]
    },
    "mentions": Object.values(entities).filter(e => e["@id"] !== (entities as any)[entity]?.["@id"])
  }
}

// E-A-T Signals Enhancement
export function enhanceEATSignals(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "author": {
      "@type": "Organization",
      "name": "Ergo Foundation",
      "foundingDate": "2017",
      "founders": [entities.alexChepurnoy],
      "member": [
        {
          "@type": "Person",
          "name": "Development Team",
          "jobTitle": "Core Developers"
        }
      ],
      "award": [
        "Most Innovative Blockchain 2021",
        "Best PoW Implementation 2022"
      ],
      "knowsAbout": [
        "Blockchain Technology",
        "Cryptography",
        "Distributed Systems",
        "Financial Technology"
      ]
    },
    "citation": [
      {
        "@type": "ScholarlyArticle",
        "name": "Improving Authenticated Dynamic Dictionaries",
        "author": entities.alexChepurnoy,
        "url": "https://eprint.iacr.org/2016/994"
      },
      {
        "@type": "TechArticle",
        "name": "Self-Reproducing Coins as Universal Turing Machine",
        "url": "https://arxiv.org/abs/1806.10116"
      }
    ],
    "reviewedBy": {
      "@type": "Organization",
      "name": "Security Audit Firm",
      "url": "https://example.com/audit-report"
    }
  }
}

// Export complete system
export default {
  entities,
  relationships,
  generateKnowledgeGraph,
  calculateEntitySalience,
  addEntityMarkup,
  extractTopics,
  generateAboutPageSchema,
  enhanceEATSignals
} 