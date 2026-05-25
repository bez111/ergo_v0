import { siteConfig } from '@/config/site-config'

interface ERGData {
  currentPrice?: number
  marketCap?: number
  circulatingSupply?: number
  volume24h?: number
}

/**
 * Schema.org markup for ERG token. Uses both FinancialProduct and Product
 * because crypto assets straddle both categories. Live price/market data is
 * optional — only emitted when the homepage passes it in.
 *
 * No aggregateRating/review (Google penalizes synthetic ratings).
 */
export function ERGProductSchema({
  currentPrice,
  marketCap,
  circulatingSupply,
  volume24h,
}: ERGData = {}) {
  const ergSchema = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'FinancialProduct'],
    '@id': `${siteConfig.siteUrl}/#ERG`,
    name: 'Ergo (ERG)',
    alternateName: ['ERG', 'Ergo Token', 'Ergo Coin'],
    description:
      'Native cryptocurrency of the Ergo PoW/eUTXO network, used for settlement, fees, smart contracts, receipt-bearing workflows, Babel Fees and storage rent.',
    category: 'Cryptocurrency',
    image: `${siteConfig.siteUrl}/og-image.png`,
    url: siteConfig.siteUrl,
    brand: {
      '@type': 'Brand',
      name: 'Ergo Platform',
      logo: `${siteConfig.siteUrl}/logo.png`,
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      url: siteConfig.siteUrl,
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Symbol', value: 'ERG' },
      { '@type': 'PropertyValue', name: 'Consensus Mechanism', value: 'Proof of Work (Autolykos v2)' },
      { '@type': 'PropertyValue', name: 'Max Supply', value: '97739925', unitText: 'ERG' },
      { '@type': 'PropertyValue', name: 'Block Time', value: '120', unitText: 'seconds' },
      { '@type': 'PropertyValue', name: 'Smart Contract Language', value: 'ErgoScript' },
      { '@type': 'PropertyValue', name: 'Launch Date', value: '2019-07-01' },
      { '@type': 'PropertyValue', name: 'Fair Launch', value: 'true' },
      { '@type': 'PropertyValue', name: 'Pre-mine', value: 'false' },
      ...(circulatingSupply
        ? [{ '@type': 'PropertyValue', name: 'Circulating Supply', value: String(circulatingSupply), unitText: 'ERG' }]
        : []),
      ...(marketCap
        ? [{ '@type': 'PropertyValue', name: 'Market Cap', value: String(marketCap), unitText: 'USD' }]
        : []),
      ...(volume24h
        ? [{ '@type': 'PropertyValue', name: '24h Volume', value: String(volume24h), unitText: 'USD' }]
        : []),
    ],
    ...(currentPrice
      ? {
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
            price: String(currentPrice),
          },
        }
      : {}),
    isRelatedTo: [
      {
        '@type': 'SoftwareApplication',
        name: 'Ergo Platform',
        url: siteConfig.siteUrl,
        applicationCategory: 'Blockchain',
      },
      {
        '@type': 'CreativeWork',
        name: 'Ergo Whitepaper',
        url: 'https://ergoplatform.org/en/whitepaper.pdf',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ergSchema) }}
    />
  )
}
