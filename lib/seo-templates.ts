// SEO Content Templates for Ergo Platform
// Optimized for crypto/Web3 compliance and conversions

export interface SEOTemplate {
  title: string
  description: string
  h1: string
  keywords: string[]
  contentStructure: string[]
  faqSuggestions?: Array<{ question: string; answer: string }>
}

// Homepage Template
export const homepageTemplate: SEOTemplate = {
  title: "Ergo Platform - Resilient Blockchain for Contractual Money",
  description: "Ergo is a resilient blockchain platform for contractual money. Build DeFi applications with advanced smart contracts, built-in privacy, and sustainable economics.",
  h1: "Resilient Blockchain for Contractual Money",
  keywords: [
    "ergo blockchain",
    "contractual money", 
    "smart contracts",
    "defi platform",
    "ergoscript",
    "eutxo model",
    "proof of work",
    "blockchain sustainability"
  ],
  contentStructure: [
    "Hero section with value proposition",
    "Core technology pillars (eUTXO, ErgoScript, Storage Rent)",
    "Use cases and applications",
    "Developer resources",
    "Community and ecosystem",
    "Getting started paths"
  ]
}

// Technology Page Templates
export const technologyTemplates = {
  eutxo: {
    title: "eUTXO Model - Extended UTXO for Smart Contracts | Ergo Platform",
    description: "Learn how Ergo's eUTXO model enables powerful smart contracts while maintaining UTXO benefits. Discover the advantages over account-based systems.",
    h1: "eUTXO Model: Extended UTXO for Smart Contracts",
    keywords: [
      "eutxo model",
      "extended utxo",
      "smart contracts",
      "utxo vs account",
      "blockchain architecture",
      "ergo technology"
    ],
    contentStructure: [
      "What is eUTXO?",
      "Advantages over account-based models",
      "Smart contract capabilities",
      "Technical implementation",
      "Use cases and examples",
      "Developer resources"
    ],
    faqSuggestions: [
      {
        question: "What is the eUTXO model?",
        answer: "The eUTXO (extended UTXO) model is Ergo's approach to smart contracts that extends Bitcoin's UTXO model with additional data and script capabilities, enabling complex smart contracts while maintaining UTXO benefits like parallelization and predictable fees."
      },
      {
        question: "How does eUTXO differ from Ethereum's account model?",
        answer: "Unlike Ethereum's account model, eUTXO maintains transaction parallelization, predictable fees, and better privacy. Each transaction output contains both value and arbitrary data, enabling stateful smart contracts without global state."
      }
    ]
  },
  
  ergoscript: {
    title: "ErgoScript - Smart Contract Language | Ergo Platform",
    description: "ErgoScript is Ergo's powerful smart contract language based on Sigma protocols. Build secure, verifiable contracts with advanced cryptographic features.",
    h1: "ErgoScript: Advanced Smart Contract Language",
    keywords: [
      "ergoscript",
      "smart contract language",
      "sigma protocols",
      "zero knowledge proofs",
      "blockchain programming",
      "ergo development"
    ],
    contentStructure: [
      "Introduction to ErgoScript",
      "Sigma protocols foundation",
      "Language features and syntax",
      "Security advantages",
      "Development tools",
      "Code examples and tutorials"
    ]
  }
}

// Documentation Templates
export const docsTemplates = {
  gettingStarted: {
    title: "Getting Started with Ergo Development | Developer Docs",
    description: "Start building on Ergo blockchain. Complete guide for developers including setup, tools, and your first smart contract.",
    h1: "Getting Started with Ergo Development",
    keywords: [
      "ergo development",
      "blockchain development",
      "smart contract tutorial",
      "ergo sdk",
      "developer guide"
    ],
    contentStructure: [
      "Prerequisites and setup",
      "Development environment",
      "First smart contract",
      "Testing and deployment",
      "Next steps and resources"
    ]
  }
}

// Blog Post Templates
export const blogTemplates = {
  technical: {
    title: "{Topic} - Technical Deep Dive | Ergo Blog",
    description: "Deep dive into {topic} on Ergo blockchain. Technical analysis, implementation details, and practical applications.",
    h1: "{Topic}: Technical Deep Dive",
    keywords: [
      "ergo blockchain",
      "technical analysis",
      "blockchain technology",
      "smart contracts"
    ],
    contentStructure: [
      "Introduction and context",
      "Technical overview",
      "Implementation details",
      "Benefits and use cases",
      "Code examples",
      "Conclusion and next steps"
    ]
  },
  
  announcement: {
    title: "{Announcement} | Ergo Platform News",
    description: "Latest news from Ergo Platform: {announcement summary}. Learn about new features, partnerships, and ecosystem developments.",
    h1: "{Announcement}",
    keywords: [
      "ergo news",
      "blockchain updates",
      "ergo platform",
      "cryptocurrency news"
    ],
    contentStructure: [
      "Announcement summary",
      "Key details and features",
      "Impact on ecosystem",
      "Timeline and availability",
      "Community resources"
    ]
  }
}

// Use Case Templates
export const useCaseTemplates = {
  defi: {
    title: "DeFi on Ergo - Decentralized Finance Applications | Use Cases",
    description: "Explore DeFi applications on Ergo blockchain. Learn about DEXs, lending protocols, stablecoins, and yield farming opportunities.",
    h1: "DeFi Applications on Ergo Blockchain",
    keywords: [
      "ergo defi",
      "decentralized finance",
      "ergodex",
      "sigmausd",
      "yield farming",
      "lending protocol"
    ],
    contentStructure: [
      "DeFi landscape on Ergo",
      "Key DeFi applications",
      "Advantages of Ergo for DeFi",
      "Getting started with DeFi",
      "Risk considerations",
      "Future developments"
    ]
  }
}

// SEO Content Rules
export const contentRules = {
  titleLength: { min: 30, max: 60, optimal: 55 },
  descriptionLength: { min: 120, max: 160, optimal: 155 },
  h1Rules: {
    unique: true,
    includeKeyword: true,
    maxLength: 70,
    naturalLanguage: true
  },
  keywordDensity: { min: 0.5, max: 2.5, optimal: 1.5 },
  readabilityScore: { min: 60, optimal: 70 },
  internalLinks: { min: 3, max: 8, optimal: 5 },
  externalLinks: { max: 3 },
  imageAltText: { required: true, includeKeyword: true },
  contentLength: { min: 300, optimal: 1500 }
}

// Generate SEO-optimized content structure
export function generateContentStructure(
  pageType: string,
  topic: string,
  targetKeywords: string[]
): {
  title: string
  description: string
  h1: string
  outline: string[]
  suggestions: string[]
} {
  const suggestions: string[] = []
  
  // Title generation
  let title = `${topic} | Ergo Platform`
  if (title.length > contentRules.titleLength.max) {
    title = `${topic.substring(0, 50)}... | Ergo`
    suggestions.push('Title truncated - consider shorter topic')
  }
  
  // Description generation
  const description = `Learn about ${topic.toLowerCase()} on Ergo blockchain. Comprehensive guide covering implementation, benefits, and practical applications.`
  
  // H1 generation
  const h1 = topic.length <= contentRules.h1Rules.maxLength ? topic : `${topic.substring(0, 65)}...`
  
  // Outline generation based on page type
  let outline: string[] = []
  switch (pageType) {
    case 'technology':
      outline = [
        `What is ${topic}?`,
        'Technical Overview',
        'Key Features and Benefits',
        'Implementation Details',
        'Use Cases and Examples',
        'Developer Resources',
        'Frequently Asked Questions'
      ]
      break
      
    case 'tutorial':
      outline = [
        'Prerequisites',
        'Step-by-Step Guide',
        'Code Examples',
        'Testing and Validation',
        'Troubleshooting',
        'Next Steps',
        'Additional Resources'
      ]
      break
      
    case 'use-case':
      outline = [
        'Overview',
        'Problem Statement',
        'Ergo Solution',
        'Implementation Approach',
        'Benefits and Advantages',
        'Real-World Examples',
        'Getting Started'
      ]
      break
      
    default:
      outline = [
        'Introduction',
        'Key Concepts',
        'Practical Applications',
        'Benefits',
        'Getting Started',
        'Resources'
      ]
  }
  
  // SEO suggestions
  if (targetKeywords.length < 3) {
    suggestions.push('Add more target keywords for better SEO coverage')
  }
  
  if (!targetKeywords.some(keyword => title.toLowerCase().includes(keyword.toLowerCase()))) {
    suggestions.push('Include primary keyword in title')
  }
  
  return {
    title,
    description,
    h1,
    outline,
    suggestions
  }
}

// Validate content for SEO compliance
export function validateSEOContent(content: {
  title: string
  description: string
  h1: string
  body: string
  keywords: string[]
}): {
  score: number
  issues: string[]
  recommendations: string[]
} {
  const issues: string[] = []
  const recommendations: string[] = []
  let score = 100
  
  // Title validation
  if (content.title.length < contentRules.titleLength.min) {
    issues.push('Title too short')
    score -= 10
  }
  if (content.title.length > contentRules.titleLength.max) {
    issues.push('Title too long')
    score -= 10
  }
  
  // Description validation
  if (content.description.length < contentRules.descriptionLength.min) {
    issues.push('Meta description too short')
    score -= 10
  }
  if (content.description.length > contentRules.descriptionLength.max) {
    issues.push('Meta description too long')
    score -= 10
  }
  
  // H1 validation
  if (content.h1 === content.title) {
    issues.push('H1 identical to title')
    score -= 5
  }
  
  // Keyword density check
  const primaryKeyword = content.keywords[0]
  if (primaryKeyword) {
    const keywordCount = (content.body.toLowerCase().match(new RegExp(primaryKeyword.toLowerCase(), 'g')) || []).length
    const wordCount = content.body.split(/\s+/).length
    const density = (keywordCount / wordCount) * 100
    
    if (density < contentRules.keywordDensity.min) {
      recommendations.push('Increase keyword density')
    } else if (density > contentRules.keywordDensity.max) {
      issues.push('Keyword density too high (keyword stuffing)')
      score -= 15
    }
  }
  
  // Content length check
  if (content.body.length < contentRules.contentLength.min) {
    issues.push('Content too short')
    score -= 20
  }
  
  return { score, issues, recommendations }
} 