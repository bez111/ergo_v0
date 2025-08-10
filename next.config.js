/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
  async redirects() {
    return [
      {
        source: '/start/introduction/',
        destination: '/start/introduction',
        permanent: true,
      },
    ]
  },
}

const withMDX = require('@next/mdx')();

module.exports = withMDX({
  ...nextConfig,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}); 