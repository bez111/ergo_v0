import { Organization, WebSite } from '@/types/schema'

export const ORGANIZATION_SCHEMA: Organization = {
  '@type': 'Organization',
  name: 'Ergo Platform',
  url: 'https://ergoplatform.org',
  logo: 'https://ergoplatform.org/logo.png',
  description: 'A resilient platform for contractual money. Ergo Blockchain provides the tools for people to secure financial interactions.',
  sameAs: [
    'https://twitter.com/ergoplatform',
    'https://github.com/ergoplatform',
    'https://discord.gg/ergo',
    'https://www.reddit.com/r/ergonauts/',
    'https://t.me/ergoplatform',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    url: 'https://ergoplatform.org/community/discussion',
  },
}

export const WEBSITE_SCHEMA: WebSite = {
  '@type': 'WebSite',
  name: 'Ergo Platform',
  url: 'https://ergoplatform.org',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ergoplatform.org/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const DEFAULT_KEYWORDS = [
  'ergo',
  'blockchain',
  'cryptocurrency',
  'smart contracts',
  'eutxo',
  'proof-of-work',
  'ergoscript',
  'sigma protocols',
  'defi',
  'privacy',
  'decentralized applications',
  'contractual money',
  'cryptocurrency platform',
  'blockchain technology',
  'decentralized finance',
] 