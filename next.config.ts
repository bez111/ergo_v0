import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Подключаем next-intl
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {

  // Экспериментальные оптимизации
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-*', 'react-icons', 'mermaid'],
    webpackBuildWorker: true, // Ускорить сборку
    optimizeCss: true, // Включаем CSS оптимизацию для лучшего TTFB
  },

  // Тяжёлые пакеты — не бандлить в server bundle (иначе превышается лимит Vercel 250MB)
  serverExternalPackages: ['sharp', 'playwright-core', 'highlight.js'],

  // Исправление workspace root warning
  outputFileTracingRoot: __dirname,

  // Исключить тяжёлые static файлы из serverless bundle (иначе > 250MB лимит Vercel)
  outputFileTracingExcludes: {
    '*': [
      'public/og/**/*',
      'public/infographics/**/*',
      'public/docs/**/*',
      'node_modules/@img/**/*',
      'node_modules/playwright-core/**/*',
      'node_modules/highlight.js/**/*',
    ],
  },

  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF приоритет для лучшего сжатия
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 год для статичных изображений
    dangerouslyAllowSVG: true, // Разрешить SVG для placeholder изображений
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
  },

  // Компрессия
  compress: true,

  // Headers для кеширования и безопасности
  async headers() {
    return [
      // Vercel preview/production .vercel.app domain: keep out of search index
      {
        source: '/(.*)',
        has: [{ type: 'host', value: '(?<host>.*\\.vercel\\.app)' }],
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, immutable',
          },
        ],
      },
      {
        source: '/(.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|avif))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/(.*\\.(?:js|css|woff|woff2|ttf|eot))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, immutable',
          },
        ],
      },
    ];
  },

  // Webpack оптимизации
  webpack: (config, { dev, isServer }) => {
    // Оптимизация для продакшена
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 10000, // Уменьшаем для более агрессивного splitting
          maxSize: 200000, // Уменьшаем максимальный размер chunk
          cacheGroups: {
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
              reuseExistingChunk: true,
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name(module: any) {
                const packageName =
                  module.context?.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)?.[1] || 'unknown';
                return `npm.${packageName.replace('@', '')}`;
              },
              priority: 30,
              chunks: 'all',
              reuseExistingChunk: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
              chunks: 'async',
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
        minimize: true, // Минификация
      };
    }

    // В dev отключаем часть оптимизаций
    if (dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: false,
      };
    }

    return config;
  },

  async redirects() {
    // NOTE: UTM/tracking-param stripping cannot be done via redirects() because
    // Next.js always appends source query params to the destination — there is
    // no built-in way to drop them. Middleware also doesn't fire because Vercel
    // serves prerendered pages directly from CDN (x-vercel-cache: PRERENDER).
    //
    // Mitigation strategy:
    //   1. Locale-aware canonical tags on every page (already done) — Google
    //      consolidates UTM variants under the canonical URL.
    //   2. robots.txt: Disallow query patterns + Clean-param for Yandex.
    //   3. Strip UTM from internal links (no internal link should carry UTM).
    return [
      // ── Canonical redirects (production only) ─────────────────────────────
      ...(process.env.NODE_ENV === 'production' ? [
        // ergoblockchain.org → www.ergoblockchain.org
        {
          source: '/:path*',
          has: [{ type: 'host' as const, value: 'ergoblockchain.org' }],
          destination: 'https://www.ergoblockchain.org/:path*',
          permanent: true,
        },
        // ergo-platform.vercel.app → www.ergoblockchain.org (prevent duplicate SEO)
        // Matches canonical production vercel alias only, not preview hashes
        {
          source: '/:path*',
          has: [{ type: 'host' as const, value: 'ergo-platform.vercel.app' }],
          destination: 'https://www.ergoblockchain.org/:path*',
          permanent: true,
        },
      ] : []),
      {
        source: '/use/use-cases/algorithmic-stablecoins',
        destination: '/use/stablecoins',
        permanent: true,
      },
      {
        source: '/use/use-cases/privacy-confidentiality',
        destination: '/use/privacy',
        permanent: true,
      },
      {
        source: '/use/use-cases/cross-chain-bridges',
        destination: '/use/bridges',
        permanent: true,
      },
      {
        source: '/use/use-cases/daos-alternative-economies',
        destination: '/use/daos',
        permanent: true,
      },
      {
        source: '/use/use-cases/nfts-digital-assets',
        destination: '/use/nfts',
        permanent: true,
      },
      {
        source: '/use/use-cases/oracles-data-feeds',
        destination: '/use/oracles',
        permanent: true,
      },
      {
        source: '/use/use-cases/identity-reputation',
        destination: '/use/identity',
        permanent: true,
      },
      {
        source: '/use/use-cases/gaming-metaverse',
        destination: '/use/gaming',
        permanent: true,
      },
      {
        source: '/:locale(de|fr|es|ar|zh-cn|zh-tw|tr|ru|pt-br|it|ja|ko-kr)/use/use-cases/:slug',
        destination: '/:locale/use/:slug',
        permanent: true,
      },
      {
        source: '/use/babel-fees',
        destination: '/technology/babel-fees',
        permanent: true,
      },
      {
        source: '/:locale(de|fr|es|ar|zh-cn|zh-tw|tr|ru|pt-br|it|ja|ko-kr)/use/babel-fees',
        destination: '/:locale/technology/babel-fees',
        permanent: true,
      },

      // ── Legacy URL redirects (from old site version, found in Search Console 404s) ──

      // Double locale prefix bug: /ru/ru/* → /ru/*
      {
        source: '/:locale(de|fr|es|ar|zh-cn|zh-tw|tr|ru|pt-br|it|ja|ko-kr)/:locale2(de|fr|es|ar|zh-cn|zh-tw|tr|ru|pt-br|it|ja|ko-kr)/:path*',
        destination: '/:locale/:path*',
        permanent: true,
      },

      // Strip .md extension from old docs URLs
      { source: '/docs/:path*\\.md', destination: '/docs/:path*', permanent: true },
      { source: '/:locale(de|fr|es|ar|zh-cn|zh-tw|tr|ru|pt-br|it|ja|ko-kr)/docs/:path*\\.md', destination: '/:locale/docs/:path*', permanent: true },

      // Old use-case URLs without /use-cases/ prefix
      { source: '/use/identity-reputation', destination: '/use/identity', permanent: true },
      { source: '/use/cross-chain-bridges', destination: '/use/bridges', permanent: true },
      { source: '/use/gaming-metaverse', destination: '/use/gaming', permanent: true },
      { source: '/use/daos-alternative-economies', destination: '/use/daos', permanent: true },
      { source: '/use/oracles-data-feeds', destination: '/use/oracles', permanent: true },
      { source: '/use/privacy-confidentiality', destination: '/use/privacy', permanent: true },
      { source: '/use/nfts-digital-assets', destination: '/use/nfts', permanent: true },
      { source: '/use/mining', destination: '/miners', permanent: true },
      { source: '/use/staking', destination: '/use', permanent: true },
      { source: '/use/guides/:path*', destination: '/use', permanent: true },
      { source: '/:locale(de|fr|es|ar|zh-cn|zh-tw|tr|ru|pt-br|it|ja|ko-kr)/use/mining', destination: '/:locale/miners', permanent: true },

      // Old technology paths under /docs/developers/ → /technology/
      { source: '/docs/developers/babel-fees', destination: '/technology/babel-fees', permanent: true },
      { source: '/docs/developers/storage-rent', destination: '/technology/storage-rent', permanent: true },
      { source: '/docs/developers/eutxo-model', destination: '/technology/eutxo-model', permanent: true },
      { source: '/docs/developers/oracles', destination: '/technology/oracle-pools', permanent: true },
      { source: '/docs/developers/oracles/core', destination: '/technology/oracle-pools', permanent: true },
      { source: '/docs/developers/light-clients', destination: '/technology/nipopows', permanent: true },
      { source: '/docs/developers/emission', destination: '/technology/adaptive-emission', permanent: true },
      { source: '/docs/developers/privacy', destination: '/technology/privacy-features', permanent: true },
      { source: '/docs/developers/nipopows', destination: '/technology/nipopows', permanent: true },
      { source: '/docs/developers/quickstart', destination: '/build/quickstart', permanent: true },
      { source: '/docs/developers/fleet-sdk', destination: '/build/quickstart', permanent: true },
      { source: '/docs/developers/sigma', destination: '/technology/privacy-features', permanent: true },
      { source: '/docs/developers/multi', destination: '/docs/developers', permanent: true },
      { source: '/docs/developers/integration', destination: '/docs/developers', permanent: true },
      { source: '/docs/developers/deployment', destination: '/docs/developers', permanent: true },
      { source: '/docs/developers/min-fee', destination: '/docs/developers', permanent: true },
      { source: '/docs/developers/schnorr', destination: '/technology/privacy-features', permanent: true },

      // Old /docs/users/ prefix
      { source: '/docs/users/storage-rent', destination: '/technology/storage-rent', permanent: true },
      { source: '/docs/users/privacy', destination: '/technology/privacy-features', permanent: true },
      { source: '/docs/users/ergomixer', destination: '/technology/privacy-features', permanent: true },

      // Old /docs/technology/ prefix → /technology/
      { source: '/docs/technology', destination: '/technology', permanent: true },
      { source: '/docs/technology/privacy-features', destination: '/technology/privacy-features', permanent: true },
      { source: '/docs/technology/autolykos', destination: '/technology/secure-pow', permanent: true },
      { source: '/docs/technology/ergoscript', destination: '/technology/ergoscript', permanent: true },

      // Old /docs/eco/ → /docs/ecosystem/
      { source: '/docs/eco/:path*', destination: '/docs/ecosystem/:path*', permanent: true },

      // Old /docs/ergoscript/* → /technology/ergoscript
      { source: '/docs/ergoscript/:path*', destination: '/technology/ergoscript', permanent: true },

      // Old /docs/sigma-protocols → /technology/privacy-features
      { source: '/docs/sigma-protocols', destination: '/technology/privacy-features', permanent: true },

      // Old top-level /docs/* legacy pages
      { source: '/docs/protocol-overview', destination: '/technology', permanent: true },
      { source: '/docs/privacy', destination: '/technology/privacy-features', permanent: true },
      { source: '/docs/tokens', destination: '/technology/native-tokens', permanent: true },
      { source: '/docs/tokenomics', destination: '/technology/adaptive-emission', permanent: true },
      { source: '/docs/tokenomics/storage-rent', destination: '/technology/storage-rent', permanent: true },
      { source: '/docs/governance', destination: '/docs/miners/governance', permanent: true },
      { source: '/docs/mining', destination: '/miners', permanent: true },

      // Old /docs/miners/* legacy pages
      { source: '/docs/miners/optimization', destination: '/miners', permanent: true },
      { source: '/docs/miners/configuration', destination: '/miners', permanent: true },
      { source: '/docs/miners/solo-vs-pool', destination: '/miners', permanent: true },
      { source: '/docs/miners/solo-mining', destination: '/miners', permanent: true },
      { source: '/docs/miners/software', destination: '/miners', permanent: true },
      { source: '/docs/miners/gpu-comparison', destination: '/miners', permanent: true },
      { source: '/docs/miners/mining-setup', destination: '/miners', permanent: true },
      { source: '/docs/miners/hardware', destination: '/miners', permanent: true },

      // Old /docs/introduction/* legacy
      { source: '/docs/introduction/atomic-swaps', destination: '/technology', permanent: true },
      { source: '/docs/introduction/foundation/treasury', destination: '/docs/introduction', permanent: true },
      { source: '/docs/introduction/privacy-features', destination: '/technology/privacy-features', permanent: true },

      // /community/* → /start/community
      { source: '/community/:path*', destination: '/start/community', permanent: true },

      // /learn/guides/* → /learn
      { source: '/learn/guides/:path*', destination: '/learn', permanent: true },
      { source: '/learn/guides', destination: '/learn', permanent: true },
      { source: '/learn/Handbook', destination: '/learn', permanent: true },

      // /ecosystem/* category pages → /ecosystem
      { source: '/ecosystems/:path*', destination: '/ecosystem', permanent: true },
      { source: '/ecosystem/projects/:slug', destination: '/ecosystem/:slug', permanent: true },
      { source: '/ecosystem/nfts', destination: '/ecosystem', permanent: true },
      { source: '/ecosystem/financial', destination: '/ecosystem', permanent: true },
      { source: '/ecosystem/privacy', destination: '/ecosystem', permanent: true },
      { source: '/ecosystem/market', destination: '/ecosystem', permanent: true },
      { source: '/ecosystem/tools', destination: '/ecosystem', permanent: true },
      { source: '/ecosystem/gaming', destination: '/ecosystem', permanent: true },

      // Old blog posts that never existed → /blog hub
      { source: '/blog/vesting-contracts', destination: '/blog', permanent: true },
      { source: '/blog/stealth-addresses', destination: '/blog', permanent: true },
      { source: '/blog/deflationary-tokens', destination: '/blog', permanent: true },
      { source: '/blog/cross-chain-swaps', destination: '/blog', permanent: true },
      { source: '/blog/assurance-contracts', destination: '/blog', permanent: true },

      // Misc legacy
      { source: '/builders', destination: '/developers', permanent: true },
      { source: '/:locale(de|fr|es|ar|zh-cn|zh-tw|tr|ru|pt-br|it|ja|ko-kr)/builders', destination: '/:locale/developers', permanent: true },
      { source: '/technology/extended-utxo', destination: '/technology/eutxo-model', permanent: true },
      { source: '/technology/whitepaper', destination: '/technology', permanent: true },
      { source: '/tokenomics', destination: '/technology/adaptive-emission', permanent: true },
      { source: '/transactions', destination: '/technology', permanent: true },
      { source: '/contribute', destination: '/docs/contribute', permanent: true },
      { source: '/start/wallet', destination: '/wallet', permanent: true },
      { source: '/start/security', destination: '/faq', permanent: true },
      { source: '/start/get-erg', destination: '/use/get-erg', permanent: true },
      { source: '/:locale(de|fr|es|ar|zh-cn|zh-tw|tr|ru|pt-br|it|ja|ko-kr)/start/get-erg', destination: '/:locale/use/get-erg', permanent: true },
      { source: '/about/:path*', destination: '/start/community', permanent: true },
      { source: '/build/smart-contracts', destination: '/build/agent-payments', permanent: true },
      { source: '/build/tutorials', destination: '/build/quickstart', permanent: true },
      { source: '/us/get-erg', destination: '/use/get-erg', permanent: true },
    ];
  },

  // Оптимизация бандла
  poweredByHeader: false,
  reactStrictMode: true,


  typescript: {
    ignoreBuildErrors: false,
  },
};

// Экспорт плагина next-intl
export default withNextIntl(nextConfig);
