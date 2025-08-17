/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Performance optimizations for Core Web Vitals
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react', 'lucide-react'],
    optimizeCss: true,
    // Memory optimization
    workerThreads: false,
    cpus: 1,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  generateEtags: false,
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
  // Headers for performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },
  async redirects() {
    return [
      // Old use case URLs to new structure
      {
        source: '/use/use-cases/privacy',
        destination: '/use/use-cases/privacy-confidentiality',
        permanent: true,
      },
      {
        source: '/use/use-cases/stablecoins',
        destination: '/use/use-cases/algorithmic-stablecoins',
        permanent: true,
      },
      {
        source: '/use/use-cases/bridges',
        destination: '/use/use-cases/cross-chain-bridges',
        permanent: true,
      },
      {
        source: '/use/use-cases/daos',
        destination: '/use/use-cases/daos-alternative-economies',
        permanent: true,
      },
      {
        source: '/use/use-cases/nfts',
        destination: '/use/use-cases/nfts-digital-assets',
        permanent: true,
      },
      {
        source: '/use/use-cases/oracles',
        destination: '/use/use-cases/oracles-data-feeds',
        permanent: true,
      },
      {
        source: '/use/use-cases/identity',
        destination: '/use/use-cases/identity-reputation',
        permanent: true,
      },
      {
        source: '/use/use-cases/gaming',
        destination: '/use/use-cases/gaming-metaverse',
        permanent: true,
      },
      // Old Docs URLs
      {
        source: '/Docs/developers/developers-resources',
        destination: '/Docs/developers',
        permanent: true,
      },
      {
        source: '/Docs/developers/getting-started',
        destination: '/Docs/developers/tutorials',
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