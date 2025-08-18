import Script from 'next/script'

interface SpeakableSchemaProps {
  headline: string
  summary: string
  url: string
  cssSelector?: string[]
}

export function SpeakableSchema({ 
  headline, 
  summary, 
  url,
  cssSelector = ['h1', 'h2', '.summary', '.key-points']
}: SpeakableSchemaProps) {
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": headline,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": cssSelector,
      "xpath": [
        "/html/head/title",
        "/html/head/meta[@name='description']/@content"
      ]
    },
    "url": url
  }

  return (
    <Script
      id="speakable-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      strategy="afterInteractive"
    />
  )
}

// Pre-defined speakable content for key pages
export const speakableContent: Record<string, { cssSelector: string[], summary: string }> = {
  '/': {
    cssSelector: ['h1', '.hero-description', '.key-features'],
    summary: 'Ergo is a resilient blockchain platform for contractual money, featuring advanced cryptographic protocols and sustainable tokenomics.'
  },
  '/technology/ergoscript': {
    cssSelector: ['h1', '.intro-text', '.key-concepts', '.code-example'],
    summary: 'ErgoScript is a powerful scripting language for Ergo blockchain smart contracts, based on Sigma protocols.'
  },
  '/use/use-cases/algorithmic-stablecoins': {
    cssSelector: ['h1', '.overview', '.how-it-works', '.benefits'],
    summary: 'Algorithmic stablecoins on Ergo use the AgeUSD protocol to maintain stable value through over-collateralization.'
  },
  '/docs': {
    cssSelector: ['h1', '.doc-intro', '.getting-started'],
    summary: 'Comprehensive documentation for developers building on Ergo blockchain platform.'
  }
}

// Helper to generate speakable content for articles
export function generateArticleSpeakable(article: {
  title: string
  excerpt: string
  content: string
  url: string
}) {
  // Extract key sentences for voice search
  const sentences = article.content
    .split('.')
    .filter(s => s.length > 50 && s.length < 200)
    .slice(0, 3)
    .join('. ')

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        ".article-summary",
        ".key-takeaways"
      ],
      "xpath": [
        "/html/head/title",
        "//p[1]",
        "//h2[1]/following-sibling::p[1]"
      ]
    },
    "url": article.url,
    "text": sentences
  }
}

export default SpeakableSchema 