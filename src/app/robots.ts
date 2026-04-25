import { siteConfig } from '@/config/site-config'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.siteUrl;
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
          '/search', // block internal search result pages
          '/*?sort=*', // block sort parameters
          '/*?filter=*', // block filter parameters
          '/*?view=*', // block view parameters
          '/*?ref=*', // block referrer parameters
          '/*?utm_source=*', // block UTM parameters (each variant)
          '/*?utm_medium=*',
          '/*?utm_campaign=*',
          '/*?utm_term=*',
          '/*?utm_content=*',
          '/*?utm_id=*',
          '/*&utm_*', // UTM as non-first param
          '/*?gclid=*',
          '/*?fbclid=*',
          '/*?msclkid=*',
          '/*?yclid=*',
          '/*?dclid=*',
          '/*?mc_cid=*',
          '/*?mc_eid=*',
          '/*?mkt_tok=*',
          '/*?igshid=*',
          '/*?_ga=*',
          '/*?page=6', // block deep pagination
          '/*?page=7',
          '/*?page=8',
          '/*?page=9',
          '/*?page=1*', // block page=10+
          '/*?page=2*', // block page=20+
          '/ui-kit*', // internal UI components
          '/test*', // test pages
          '/wallet/transaction/*', // node API endpoints, not pages
          '/wallet/transactions',
          '/wallet/balances',
          '/wallet/status',
          '/wallet/init',
          '/wallet/restore',
          '/wallet/unlock',
          '/wallet/deriveNextKey',
          '/wallet/generateCommitments',
          '/wallet/testnet-faucet',
          '/script/*', // node API endpoints
          '/utxo/*', // node API endpoints
          '/*.json$',
          '/*_buildManifest.js$',
          '/*_middlewareManifest.js$',
          '/*_ssgManifest.js$',
          '/*.js.map$',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        // No crawl delay for Google
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        // crawlDelay: 1, // Changed from 0.5 to avoid decimal issues
      },
      {
        userAgent: 'Yandexbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        // crawlDelay: 1,
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
      },
      {
        userAgent: 'Slackbot',
        allow: '/',
      },
      {
        userAgent: 'GPTBot', // OpenAI's GPT crawler
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT browsing
        allow: '/',
      },
      {
        userAgent: 'CCBot', // Common Crawl
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai', // Claude
        allow: '/',
      },
      {
        userAgent: 'Claude-Web', // Claude browsing
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot', // Perplexity AI
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended', // Apple AI
        allow: '/',
      },
      {
        userAgent: 'Bytespider', // ByteDance/TikTok AI
        allow: '/',
      },
      {
        userAgent: 'cohere-ai', // Cohere
        allow: '/',
      },
      // SEO scrapers — blocked. They consume crawl budget without driving organic
      // traffic, and they re-publish our content in their indexes/databases.
      { userAgent: 'AhrefsBot', disallow: '/' },
      { userAgent: 'SemrushBot', disallow: '/' },
      { userAgent: 'SemrushBot-SA', disallow: '/' },
      { userAgent: 'MJ12bot', disallow: '/' },
      { userAgent: 'PetalBot', disallow: '/' },
      { userAgent: 'DotBot', disallow: '/' },
      { userAgent: 'BLEXBot', disallow: '/' },
      { userAgent: 'SeekportBot', disallow: '/' },
      { userAgent: 'MegaIndex.ru', disallow: '/' },
      { userAgent: 'serpstatbot', disallow: '/' },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/llms.txt`,
    ],
    host: baseUrl,
  }
} 