import Head from 'next/head'

interface AutoMetaProps {
  title: string
  description?: string
  keywords?: string[]
  path: string
  image?: string
  noindex?: boolean
  priority?: number
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

// Generate intelligent meta descriptions based on page content
function generateDescription(title: string, path: string): string {
  const descriptions: Record<string, string> = {
    '/': 'Ergo Platform - A next-generation Proof-of-Work blockchain featuring smart contracts, DeFi primitives, and sustainable economics through storage rent.',
    '/technology': 'Explore Ergo\'s innovative technology stack: UTXO model, ErgoScript, Sigma protocols, NIPoPoWs, and storage rent for blockchain sustainability.',
    '/ecosystem': 'Discover the Ergo ecosystem: DeFi protocols, NFT platforms, developer tools, wallets, and community projects building on Ergo blockchain.',
    '/start': 'Get started with Ergo: Set up wallets, acquire ERG, explore DeFi, start mining, or build dApps on the most advanced UTXO blockchain.',
    '/Docs': 'Comprehensive Ergo documentation: Technical guides, tutorials, API references, and resources for developers, miners, and users.',
    '/blog': 'Latest Ergo news, updates, technical articles, community highlights, and insights into blockchain technology and DeFi innovations.',
    '/use': 'Real-world Ergo use cases: DeFi applications, privacy tools, oracle pools, NFT marketplaces, and innovative blockchain solutions.',
    '/build': 'Build on Ergo: Developer resources, ErgoScript tutorials, SDK documentation, and tools for creating decentralized applications.',
  }
  
  // Return specific description or generate based on title
  return descriptions[path] || `${title} on Ergo Platform - Explore advanced blockchain technology, DeFi solutions, and decentralized applications.`
}

// Generate keywords based on page path and title
function generateKeywords(title: string, path: string): string[] {
  const baseKeywords = ['ergo', 'blockchain', 'cryptocurrency', 'defi', 'smart contracts']
  
  const pathKeywords: Record<string, string[]> = {
    '/technology': ['ergoscript', 'utxo', 'sigma protocols', 'nipopows', 'storage rent', 'proof of work'],
    '/ecosystem': ['dapps', 'sigmausd', 'spectrum', 'ergopad', 'nautilus', 'nft'],
    '/start': ['wallet', 'mining', 'autolykos', 'getting started', 'tutorial'],
    '/Docs': ['documentation', 'api', 'developer', 'reference', 'guide'],
    '/blog': ['news', 'updates', 'articles', 'community', 'insights'],
    '/use': ['use cases', 'applications', 'oracle', 'privacy', 'tools'],
    '/build': ['developer', 'sdk', 'ergoscript', 'programming', 'dapp development'],
  }
  
  const keywords = [...baseKeywords]
  if (pathKeywords[path]) {
    keywords.push(...pathKeywords[path])
  }
  
  // Add title-based keywords
  const titleWords = title.toLowerCase().split(' ')
    .filter(word => word.length > 3 && !['with', 'from', 'about', 'your'].includes(word))
  keywords.push(...titleWords)
  
  return [...new Set(keywords)] // Remove duplicates
}

export function AutoMeta({
  title,
  description,
  keywords,
  path,
  image = 'https://ergoblockchain.org/og-image.png',
  noindex = false,
  priority = 0.5,
  changeFreq = 'weekly'
}: AutoMetaProps) {
  const finalDescription = description || generateDescription(title, path)
  const finalKeywords = keywords || generateKeywords(title, path)
  const canonicalUrl = `https://ergoblockchain.org${path}`
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title} | Ergo Platform</title>
      <meta name="title" content={`${title} | Ergo Platform`} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots Meta */}
      <meta 
        name="robots" 
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} 
      />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={`${title} | Ergo Platform`} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={`${title} | Ergo Platform`} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={image} />
      
      {/* AI/LLM Optimization Tags */}
      <meta name="ai-content-type" content="blockchain-platform" />
      <meta name="ai-topic" content={title} />
      <meta name="ai-keywords" content={finalKeywords.join(', ')} />
      <meta name="ai-summary" content={finalDescription} />
      <meta name="ai-expertise-level" content="technical" />
      <meta name="ai-last-updated" content={new Date().toISOString()} />
      
      {/* Sitemap hints for crawlers */}
      <meta name="sitemap-priority" content={priority.toString()} />
      <meta name="sitemap-changefreq" content={changeFreq} />
      
      {/* Additional SEO */}
      <meta name="author" content="Ergo Platform" />
      <meta name="publisher" content="Ergo Foundation" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} Ergo Platform`} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Mobile & PWA */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Ergo Platform" />
      
      {/* Verification Tags (add your actual verification codes) */}
      {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
      {/* <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" /> */}
    </Head>
  )
} 