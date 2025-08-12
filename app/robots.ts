import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://ergoblockchain.org'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/static/',
          '/search', // block internal search result pages
          '/*.json$',
          '/*_buildManifest.js$',
          '/*_middlewareManifest.js$',
          '/*_ssgManifest.js$',
          '/*.js.map$',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 0, // No delay for Google
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 0.5,
      },
      {
        userAgent: 'Yandexbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Slackbot',
        allow: '/',
        crawlDelay: 0,
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
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-0.xml`, // Next.js auto-generated sitemaps
    ],
    host: baseUrl,
  }
} 