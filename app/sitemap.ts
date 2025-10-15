import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ergoblockchain.org'
  const currentDate = new Date()
  
  // Main pages
  const mainPages = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/use`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/technology`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ecosystem`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wallet`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/start`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ]
  
  // Use cases - Updated to new URL structure
  const useCases = [
    'stablecoins',
    'privacy',
    'bridges',
    'daos',
    'nfts',
    'oracles',
    'identity',
    'gaming',
  ].map(slug => ({
    url: `${baseUrl}/use/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Additional use pages
  const usePages = [
    { slug: 'get-erg', priority: 0.8 },
    { slug: 'mining', priority: 0.8 },
    { slug: 'babel-fees', priority: 0.7 },
  ].map(({ slug, priority }) => ({
    url: `${baseUrl}/use/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority,
  }))
  
  // Technology pages
  const technologyPages = [
    'ergoscript',
    'eutxo',
    'eutxo-model',
    'nipopows',
    'storage-rent',
    'privacy-features',
    'secure-pow',
    'native-tokens',
    'oracle-pools',
    'velvet-forks',
    'adaptive-emission',
    'subblocks',
  ].map(slug => ({
    url: `${baseUrl}/technology/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Docs sections
  const docsPages = [
    { path: 'why-ergo', priority: 0.8 },
    { path: 'introduction/key-features', priority: 0.7 },
    { path: 'introduction/roadmap', priority: 0.7 },
    { path: 'introduction/research-whitepapers', priority: 0.7 },
    { path: 'introduction/entities', priority: 0.6 },
    { path: 'introduction/wallets', priority: 0.7 },
    { path: 'introduction/resources', priority: 0.7 },
    { path: 'contribute', priority: 0.6 },
    { path: 'developers', priority: 0.8 },
    { path: 'developers/tutorials', priority: 0.7 },
    { path: 'developers/ergoscript-languages', priority: 0.7 },
    { path: 'developers/data-model-apis', priority: 0.7 },
    { path: 'developers/tooling', priority: 0.7 },
    { path: 'developers/infrastructure', priority: 0.7 },
    { path: 'developers/cryptographic-primitives', priority: 0.6 },
    { path: 'developers/students', priority: 0.6 },
    { path: 'developers/bounties-grants', priority: 0.6 },
    { path: 'developers/community-support', priority: 0.6 },
    { path: 'developers/resources', priority: 0.7 },
    { path: 'miners/governance', priority: 0.6 },
    { path: 'miners/start-mining', priority: 0.7 },
    { path: 'miners/Miner-Tooling', priority: 0.6 },
    { path: 'miners/Revenue', priority: 0.6 },
    { path: 'miners/resources', priority: 0.6 },
    { path: 'ecosystem/infrastructure', priority: 0.7 },
    { path: 'ecosystem/financial', priority: 0.7 },
    { path: 'ecosystem/privacy', priority: 0.7 },
    { path: 'ecosystem/nfts', priority: 0.7 },
    { path: 'ecosystem/ai', priority: 0.6 },
    { path: 'ecosystem/daos', priority: 0.6 },
    { path: 'ecosystem/applications', priority: 0.6 },
    { path: 'ecosystem/tooling', priority: 0.6 },
    { path: 'ecosystem/Standards', priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}/docs/${path}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority,
  }))
  
  // Combine all pages
  return [
    ...mainPages,
    ...useCases,
    ...usePages,
    ...technologyPages,
    ...docsPages,
  ]
}
