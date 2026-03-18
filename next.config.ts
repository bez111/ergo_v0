import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Подключаем next-intl
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {

  // Экспериментальные оптимизации
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-*'],
    webpackBuildWorker: true, // Ускорить сборку
    optimizeCss: true, // Включаем CSS оптимизацию для лучшего TTFB
  },

  // Оптимизация серверных компонентов
  serverExternalPackages: ['sharp'],

  // Исправление workspace root warning
  outputFileTracingRoot: __dirname,

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
    return [
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
