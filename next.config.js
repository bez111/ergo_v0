/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ergoblockchain.org',
      },
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