import { Organization, WebSite, SoftwareApplication, Product, Event, Person } from '@/types/schema'

export const ORGANIZATION_SCHEMA: Organization = {
  '@type': 'Organization',
  name: 'Ergo Platform',
  url: 'https://www.ergoblockchain.org',
  logo: 'https://www.ergoblockchain.org/logo.png',
  description: 'Ergo is a next-generation smart contract platform that ensures the economic freedom of ordinary people through secure, accessible, and decentralized financial tools.',
  sameAs: [
    'https://twitter.com/ergoplatformorg',
    'https://github.com/ergoplatform',
    'https://t.me/ergoplatform',
    'https://discord.gg/ergo-platform-668903786361651200'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@ergoblockchain.org',
    availableLanguage: ['English', 'Russian']
  }
}

export const WEBSITE_SCHEMA: WebSite = {
  '@type': 'WebSite',
  name: 'Ergo Platform',
  url: 'https://www.ergoblockchain.org',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.ergoblockchain.org/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

export const WALLET_SCHEMA: SoftwareApplication = {
  '@type': 'SoftwareApplication',
  name: 'Nautilus Wallet',
  description: 'A secure and user-friendly wallet for the Ergo blockchain',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  downloadUrl: 'https://nautiluswallet.app',
  version: '1.0.0',
  author: {
    '@type': 'Organization',
    name: 'Ergo Platform',
    url: 'https://www.ergoblockchain.org'
  }
}

export const ERG_TOKEN_SCHEMA: Product = {
  '@type': 'Product',
  name: 'ERG Token',
  description: 'The native cryptocurrency of the Ergo blockchain',
  image: 'https://www.ergoblockchain.org/erg-token.png',
  brand: {
    '@type': 'Brand',
    name: 'Ergo Platform'
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  }
}

export const ERGO_SUMMIT_SCHEMA: Event = {
  '@type': 'Event',
  name: 'Ergo Summit 2024',
  description: 'Annual conference for the Ergo community',
  startDate: '2024-09-01',
  endDate: '2024-09-03',
  location: {
    '@type': 'Place',
    name: 'Virtual Event',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Online',
      addressCountry: 'Worldwide'
    }
  },
  organizer: {
    '@type': 'Organization',
    name: 'Ergo Platform',
    url: 'https://www.ergoblockchain.org'
  }
}

export const TEAM_MEMBER_SCHEMA: Person = {
  '@type': 'Person',
  name: 'Alexander Chepurnoy',
  jobTitle: 'Founder',
  description: 'Co-founder of Ergo Platform and experienced blockchain developer',
  image: 'https://www.ergoblockchain.org/team/alexander.jpg',
  url: 'https://www.ergoblockchain.org/team/alexander',
  sameAs: [
    'https://twitter.com/chepurnoy',
    'https://github.com/chepurnoy'
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Ergo Platform',
    url: 'https://www.ergoblockchain.org'
  }
}

export const DEFAULT_KEYWORDS = [
  'Ergo Platform',
  'blockchain',
  'cryptocurrency',
  'smart contracts',
  'eUTXO',
  'ErgoScript',
  'mining',
  'wallet',
  'DeFi',
  'privacy',
  'security',
  'scalability',
  'proof of work',
  'NIPoPoWs',
  'storage rent',
  'Sigma protocols',
  'zero-knowledge proofs',
  'Layer 1',
  'Layer 2',
  'cross-chain',
  'interoperability',
  'governance',
  'community',
  'development',
  'research',
  'education',
  'tutorials',
  'documentation',
  'API',
  'SDK',
  'tools',
  'ecosystem',
  'partners',
  'grants',
  'bounties',
  'contributors',
  'roadmap',
  'updates',
  'news',
  'blog',
  'events',
  'conferences',
  'meetups',
  'discord',
  'telegram',
  'twitter',
  'github',
  'reddit',
  'youtube',
  'medium'
] 