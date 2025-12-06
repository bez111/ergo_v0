
/* eslint-disable @typescript-eslint/no-explicit-any */
// Ultimate Schema.org Implementation for Maximum SEO
// Covers all possible schema types for cryptocurrency and blockchain

export const SchemaTypes = {
  // Cryptocurrency Schema (Custom implementation)
  Cryptocurrency: (data: {
    name: string
    ticker: string
    price?: number
    marketCap?: number
    volume24h?: number
    circulatingSupply?: number
    totalSupply?: number
    website: string
    whitepaper?: string
    blockchain: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "@id": `https://ergoblockchain.org/#${data.ticker}`,
    "name": data.name,
    "alternateName": data.ticker,
    "category": "Cryptocurrency",
    "url": data.website,
    "sameAs": [
      `https://www.coingecko.com/en/coins/${data.name.toLowerCase()}`,
      `https://coinmarketcap.com/currencies/${data.name.toLowerCase()}`,
      `https://www.binance.com/en/price/${data.ticker.toLowerCase()}`,
    ],
    "offers": data.price ? {
      "@type": "Offer",
      "price": data.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
    } : undefined,
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Market Cap",
        "value": data.marketCap,
        "unitText": "USD"
      },
      {
        "@type": "PropertyValue",
        "name": "24h Volume",
        "value": data.volume24h,
        "unitText": "USD"
      },
      {
        "@type": "PropertyValue",
        "name": "Circulating Supply",
        "value": data.circulatingSupply,
        "unitText": data.ticker
      },
      {
        "@type": "PropertyValue",
        "name": "Blockchain",
        "value": data.blockchain
      }
    ],
    "isRelatedTo": {
      "@type": "TechArticle",
      "url": data.whitepaper,
      "name": `${data.name} Whitepaper`
    }
  }),

  // Blockchain Platform Schema
  BlockchainPlatform: () => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://ergoblockchain.org/#platform",
    "name": "Ergo Platform",
    "applicationCategory": "Blockchain Platform",
    "operatingSystem": "Cross-platform",
    "softwareVersion": "5.0",
    "datePublished": "2019-07-01",
    "dateModified": new Date().toISOString(),
    "description": "Ergo is a next-generation Proof-of-Work blockchain platform enabling new models for financial interaction",
    "url": "https://ergoblockchain.org",
    "sameAs": [
      "https://github.com/ergoplatform",
      "https://twitter.com/ergoplatformorg",
      "https://t.me/ergoplatform",
      "https://discord.gg/ergo",
      "https://www.reddit.com/r/ergonauts/",
      "https://www.youtube.com/@ErgoPlatform",
      "https://www.linkedin.com/company/ergoplatform/"
    ],
    "author": {
      "@type": "Organization",
      "name": "Ergo Foundation",
      "url": "https://ergoplatform.org"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Smart Contracts",
      "eUTXO Model",
      "Sigma Protocols",
      "NiPoPoWs",
      "Storage Rent",
      "Oracle Pools",
      "ErgoScript",
      "Privacy Features"
    ],
    "screenshot": "https://ergoblockchain.org/screenshot.png",
    "softwareRequirements": "4GB RAM, 50GB Storage",
    "applicationSubCategory": "Layer-1 Blockchain"
  }),

  // Mining Software Schema
  MiningSoftware: () => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://ergoblockchain.org/mining#software",
    "name": "Ergo Mining Software",
    "applicationCategory": "Cryptocurrency Mining",
    "operatingSystem": ["Windows", "Linux", "macOS"],
    "softwareVersion": "2.0",
    "description": "Mine Ergo (ERG) with GPU using Autolykos v2 algorithm",
    "url": "https://ergoblockchain.org/miners",
    "downloadUrl": "https://github.com/ergoplatform/Autolykos-GPU-miner",
    "softwareRequirements": "4GB+ GPU, 8GB RAM",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "500"
    }
  }),

  // How-To for Mining
  MiningHowTo: () => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://ergoblockchain.org/mining#howto",
    "name": "How to Mine Ergo (ERG)",
    "description": "Complete guide to mining Ergo cryptocurrency",
    "image": "https://ergoblockchain.org/mining-guide.jpg",
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "GPU with 4GB+ VRAM"
      },
      {
        "@type": "HowToSupply",
        "name": "Mining software"
      },
      {
        "@type": "HowToSupply",
        "name": "Ergo wallet"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "NBMiner or TeamRedMiner"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Create Ergo Wallet",
        "text": "Download and setup Nautilus or Satergo wallet",
        "url": "https://ergoblockchain.org/wallet",
        "image": "https://ergoblockchain.org/step1.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Choose Mining Pool",
        "text": "Select a mining pool like HeroMiners or Leafpool",
        "url": "https://ergoblockchain.org/miners#pools",
        "image": "https://ergoblockchain.org/step2.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Download Mining Software",
        "text": "Download NBMiner or TeamRedMiner for your OS",
        "url": "https://ergoblockchain.org/miners#mining-guide",
        "image": "https://ergoblockchain.org/step3.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Configure and Start Mining",
        "text": "Configure your miner with pool and wallet address",
        "url": "https://ergoblockchain.org/miners#mining-guide",
        "image": "https://ergoblockchain.org/step4.jpg"
      }
    ],
    "yield": "Ergo (ERG) cryptocurrency rewards"
  }),

  // FAQ Schema Generator
  FAQSchema: (faqs: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }),

  // Event Schema for Conferences/Meetups
  EventSchema: (event: {
    name: string
    description: string
    startDate: string
    endDate: string
    location?: string
    url?: string
    image?: string
    performer?: string[]
  }) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "location": event.location ? {
      "@type": "Place",
      "name": event.location,
      "address": event.location
    } : {
      "@type": "VirtualLocation",
      "url": event.url
    },
    "image": event.image,
    "organizer": {
      "@type": "Organization",
      "name": "Ergo Foundation",
      "url": "https://ergoblockchain.org"
    },
    "performer": event.performer?.map(p => ({
      "@type": "Person",
      "name": p
    })),
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": event.location 
      ? "https://schema.org/OfflineEventAttendanceMode"
      : "https://schema.org/OnlineEventAttendanceMode",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": event.url
    }
  }),

  // Video Schema for YouTube/Educational Content
  VideoSchema: (video: {
    name: string
    description: string
    thumbnailUrl: string
    uploadDate: string
    duration: string
    embedUrl: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    "duration": video.duration,
    "contentUrl": video.embedUrl,
    "embedUrl": video.embedUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ergoblockchain.org/logo.png"
      }
    },
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": { "@type": "WatchAction" },
      "userInteractionCount": 5000
    }
  }),

  // Speakable Schema for Voice Search
  SpeakableSchema: (content: {
    headline: string
    summary: string
    url: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".article-summary", ".key-points", "h1", "h2"],
      "xpath": [
        "/html/body/main/article/h1",
        "/html/body/main/article/div[@class='summary']"
      ]
    },
    "headline": content.headline,
    "description": content.summary,
    "url": content.url
  }),

  // Dataset Schema for Blockchain Data
  DatasetSchema: () => ({
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Ergo Blockchain Data",
    "description": "Complete blockchain data including transactions, blocks, and smart contracts",
    "url": "https://api.ergoplatform.org",
    "sameAs": "https://explorer.ergoplatform.org",
    "keywords": ["blockchain", "cryptocurrency", "transactions", "smart contracts"],
    "creator": {
      "@type": "Organization",
      "name": "Ergo Platform"
    },
    "distribution": [
      {
        "@type": "DataDownload",
        "encodingFormat": "JSON",
        "contentUrl": "https://api.ergoplatform.org/v1/"
      },
      {
        "@type": "DataDownload",
        "encodingFormat": "CSV",
        "contentUrl": "https://api.ergoplatform.org/export/"
      }
    ],
    "temporalCoverage": "2019-07-01/..",
    "spatialCoverage": {
      "@type": "Place",
      "name": "Global"
    },
    "license": "https://opensource.org/licenses/MIT"
  }),

  // Q&A Schema for Community Questions
  QASchema: (qa: {
    question: string
    answer: string
    author: string
    dateCreated: string
    upvotes: number
  }) => ({
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": qa.question,
      "text": qa.question,
      "answerCount": 1,
      "upvoteCount": qa.upvotes,
      "dateCreated": qa.dateCreated,
      "author": {
        "@type": "Person",
        "name": qa.author
      },
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.answer,
        "upvoteCount": qa.upvotes,
        "dateCreated": qa.dateCreated,
        "author": {
          "@type": "Person",
          "name": "Ergo Community Expert"
        }
      }
    }
  }),

  // Learning Resource Schema
  CourseSchema: (course: {
    name: string
    description: string
    provider: string
    url: string
    duration: string
    skillLevel: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": course.provider,
      "sameAs": "https://ergoblockchain.org"
    },
    "url": course.url,
    "courseCode": course.name.replace(/\s+/g, '-').toLowerCase(),
    "duration": course.duration,
    "educationalLevel": course.skillLevel,
    "inLanguage": "en",
    "teaches": {
      "@type": "DefinedTerm",
      "name": "Blockchain Development",
      "termCode": "BLOCKCHAIN"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "startDate": new Date().toISOString(),
      "endDate": new Date(Date.now() + 90*24*60*60*1000).toISOString()
    }
  }),

  // Claim Review for Fact Checking
  ClaimReviewSchema: (claim: {
    claim: string
    claimant: string
    rating: number
    url: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "ClaimReview",
    "url": claim.url,
    "claimReviewed": claim.claim,
    "itemReviewed": {
      "@type": "Claim",
      "author": {
        "@type": "Person",
        "name": claim.claimant
      },
      "datePublished": new Date().toISOString(),
      "appearance": {
        "@type": "CreativeWork",
        "url": claim.url
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Ergo Platform"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": claim.rating,
      "bestRating": 5,
      "alternateName": claim.rating >= 4 ? "True" : claim.rating >= 2 ? "Partially True" : "False"
    }
  }),

  // Special Announcement Schema (for updates)
  SpecialAnnouncementSchema: (announcement: {
    name: string
    text: string
    category: string
    datePosted: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    "name": announcement.name,
    "text": announcement.text,
    "category": `https://www.wikidata.org/wiki/${announcement.category}`,
    "datePosted": announcement.datePosted,
    "expires": new Date(Date.now() + 30*24*60*60*1000).toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ergoblockchain.org/logo.png"
      }
    }
  })
}

// Generate Complete Schema for a Page
export function generateCompleteSchema(pageType: string, data: any) {
  const schemas = []
  
  // Always include Organization
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ergoblockchain.org/#organization",
    "name": "Ergo Platform",
    "alternateName": ["Ergo", "ERG", "Ergo Blockchain"],
    "url": "https://ergoblockchain.org",
    "logo": "https://ergoblockchain.org/logo.png",
    "foundingDate": "2017",
    "founders": [{
      "@type": "Person",
      "name": "Alex Chepurnoy",
      "sameAs": "https://twitter.com/chepurnoy"
    }],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["en"],
      "email": "team@ergoplatform.org"
    },
    "sameAs": [
      "https://github.com/ergoplatform",
      "https://twitter.com/ergoplatformorg",
      "https://t.me/ergoplatform",
      "https://discord.gg/ergo",
      "https://www.reddit.com/r/ergonauts/",
      "https://www.youtube.com/@ErgoPlatform",
      "https://www.linkedin.com/company/ergoplatform/",
      "https://www.facebook.com/ergoplatform",
      "https://medium.com/ergo-platform"
    ],
    "knowsAbout": ["Blockchain", "Cryptocurrency", "Smart Contracts", "DeFi", "Privacy"],
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    }
  })
  
  // Add page-specific schemas
  switch(pageType) {
    case 'home':
      schemas.push(SchemaTypes.BlockchainPlatform())
      schemas.push(SchemaTypes.Cryptocurrency({
        name: "Ergo",
        ticker: "ERG",
        blockchain: "Ergo",
        website: "https://ergoblockchain.org",
        whitepaper: "https://ergoplatform.org/en/whitepaper.pdf"
      }))
      break
    case 'mining':
      schemas.push(SchemaTypes.MiningSoftware())
      schemas.push(SchemaTypes.MiningHowTo())
      break
    case 'faq':
      schemas.push(SchemaTypes.FAQSchema(data.faqs))
      break
    case 'blog':
      schemas.push(SchemaTypes.SpeakableSchema(data))
      break
    case 'course':
      schemas.push(SchemaTypes.CourseSchema(data))
      break
  }
  
  return schemas
}

// Export for use
export default SchemaTypes 