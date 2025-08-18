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
          '/*?sort=*', // block sort parameters
          '/*?filter=*', // block filter parameters
          '/*?view=*', // block view parameters
          '/*?ref=*', // block referrer parameters
          '/*?utm_*', // block UTM parameters
          '/*?page=6', // block deep pagination
          '/*?page=7',
          '/*?page=8',
          '/*?page=9',
          '/*?page=1*', // block page=10+
          '/*?page=2*', // block page=20+
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
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-pages.xml`,
    ],
    host: baseUrl,
  }
} 