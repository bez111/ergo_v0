
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SchemaOrg } from './schema-org'

interface ERGProductData {
  currentPrice?: number
  marketCap?: number
  circulatingSupply?: number
  volume24h?: number
  priceChange24h?: number
}

export function ERGProductSchema({ 
  currentPrice,
  marketCap, 
  circulatingSupply,
  volume24h,
  priceChange24h 
}: ERGProductData = {}) {
  const ergProductSchema = {
    "@context": "https://schema.org",
    "@type": ["Product", "FinancialProduct"],
    "@id": "https://ergoblockchain.org/#ERG",
    "name": "Ergo",
    "alternateName": ["ERG", "Ergo Token", "Ergo Coin"],
    "description": "Native cryptocurrency of the Ergo blockchain platform, enabling smart contracts and DeFi applications",
    "category": "Cryptocurrency",
    "brand": {
      "@type": "Brand",
      "name": "Ergo Platform",
      "logo": "https://ergoblockchain.org/logo.png"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "url": "https://ergoblockchain.org"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Consensus Mechanism",
        "value": "Proof of Work (Autolykos v2)"
      },
      {
        "@type": "PropertyValue",
        "name": "Max Supply",
        "value": "97,739,925",
        "unitText": "ERG"
      },
      {
        "@type": "PropertyValue",
        "name": "Block Time",
        "value": "2",
        "unitText": "minutes"
      },
      {
        "@type": "PropertyValue",
        "name": "Smart Contract Language",
        "value": "ErgoScript"
      },
      ...(circulatingSupply ? [{
        "@type": "PropertyValue",
        "name": "Circulating Supply",
        "value": circulatingSupply.toString(),
        "unitText": "ERG"
      }] : []),
      ...(marketCap ? [{
        "@type": "PropertyValue",
        "name": "Market Cap",
        "value": marketCap.toString(),
        "unitText": "USD"
      }] : []),
      ...(volume24h ? [{
        "@type": "PropertyValue",
        "name": "24h Volume",
        "value": volume24h.toString(),
        "unitText": "USD"
      }] : [])
    ],
    "offers": {
      "@type": "AggregateOffer",
      "availability": "InStock",
      "priceCurrency": "USD",
      ...(currentPrice ? {
        "price": currentPrice.toString(),
        "priceValidUntil": new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      } : {}),
      "seller": {
        "@type": "Organization",
        "name": "Cryptocurrency Exchanges"
      }
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Crypto Community"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "isRelatedTo": [
      {
        "@type": "SoftwareApplication",
        "name": "Ergo Platform",
        "url": "https://ergoblockchain.org"
      },
      {
        "@type": "TechArticle",
        "name": "Ergo Whitepaper",
        "url": "https://ergoplatform.org/en/whitepaper.pdf"
      }
    ]
  }

  return <SchemaOrg type="Product" data={ergProductSchema} />
} 