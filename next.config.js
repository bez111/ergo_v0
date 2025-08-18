/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Performance optimizations for Core Web Vitals
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react', 'lucide-react'],
    // Отключаю optimizeCss из-за проблем с памятью
    // optimizeCss: true,
    // Memory optimization
    workerThreads: false,
    cpus: 1,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  generateEtags: true, // Включаем ETags для лучшего кеширования
  // Bundle optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common components
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            // UI components
            ui: {
              name: 'ui',
              test: /components\/ui/,
              chunks: 'all',
              priority: 15,
            },
            // React/Next.js framework
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
              chunks: 'all',
              priority: 30,
            },
          },
        },
        runtimeChunk: {
          name: 'runtime',
        },
      }
    }

    // Tree shaking for production
    if (!dev) {
      config.optimization.usedExports = true
      config.optimization.sideEffects = false
    }

    return config
  },

  // Optimize production build
  productionBrowserSourceMaps: false,
  compress: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
    remotePatterns: [
      { protocol: 'https', hostname: 'ergoblockchain.org' },
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'user-images.githubusercontent.com' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'lh5.googleusercontent.com' },
      { protocol: 'https', hostname: 'lh6.googleusercontent.com' },
      { protocol: 'https', hostname: 'img.shields.io' },
      { protocol: 'https', hostname: 'docs.rs' },
      { protocol: 'https', hostname: 'pkg.go.dev' },
      { protocol: 'https', hostname: 'badge.fury.io' },
    ],
  },
  
  // SRE-уровень заголовков для performance и security
  async headers() {
    return [
      // HTML страницы - оптимизированное кеширование
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=300, stale-while-revalidate=1800, stale-if-error=600'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com; media-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests"
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-Powered-By',
            value: 'Ergo Platform'
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding'
          }
        ],
      },
      // API кешируемые GET запросы
      {
        source: '/api/(rss|sitemap|search)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=120, stale-while-revalidate=600, stale-if-error=300'
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding'
          }
        ]
      },
      // Статические ресурсы - максимальное кеширование
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin'
          }
        ]
      },
      // Изображения - длительное кеширование
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=2592000, stale-while-revalidate=2592000'
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes'
          }
        ]
      },
      // Шрифты и иконки
      {
        source: '/(.*)\\.(woff|woff2|ttf|otf|eot|ico|png|jpg|jpeg|svg|gif|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin'
          }
        ]
      }
    ]
  },
  async redirects() {
    return [
      // ИСПРАВЛЕННЫЕ use case URLs - теперь правильная структура
      {
        source: '/use/use-cases/privacy-confidentiality',
        destination: '/use/cases/privacy',
        permanent: true,
      },
      {
        source: '/use/use-cases/algorithmic-stablecoins',
        destination: '/use/cases/stablecoins',
        permanent: true,
      },
      {
        source: '/use/use-cases/cross-chain-bridges',
        destination: '/use/cases/bridges',
        permanent: true,
      },
      {
        source: '/use/use-cases/daos-alternative-economies',
        destination: '/use/cases/daos',
        permanent: true,
      },
      {
        source: '/use/use-cases/nfts-digital-assets',
        destination: '/use/cases/nfts',
        permanent: true,
      },
      {
        source: '/use/use-cases/oracles-data-feeds',
        destination: '/use/cases/oracles',
        permanent: true,
      },
      {
        source: '/use/use-cases/identity-reputation',
        destination: '/use/cases/identity',
        permanent: true,
      },
      {
        source: '/use/use-cases/gaming-metaverse',
        destination: '/use/cases/gaming',
        permanent: true,
      },
      // Old Docs URLs
      {
        source: '/Docs/developers/developers-resources',
        destination: '/docs/developers',
        permanent: true,
      },
      {
        source: '/Docs/developers/getting-started',
        destination: '/docs/developers/tutorials',
        permanent: true,
      },
      // Redirect index.html to clean URLs
      {
        source: '/:path*/index.html',
        destination: '/:path*',
        permanent: true,
      },
      // Remove trailing slashes
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      { source: '/blog/rss.xml', destination: '/api/rss' },
    ]
  },
}

const withMDX = require('@next/mdx')();

module.exports = withMDX({
  ...nextConfig,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}); 