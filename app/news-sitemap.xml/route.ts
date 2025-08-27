import { blogPosts } from '../[locale]/blog/_lib/blog-data'

export async function GET() {
  const baseUrl = 'https://ergoblockchain.org'
  
  // Filter posts from last 48 hours for Google News
  const recentPosts = blogPosts.filter(post => {
    const postDate = new Date(post.date)
    const twoDaysAgo = new Date(Date.now() - 48 * 60 * 60 * 1000)
    return postDate >= twoDaysAgo
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${recentPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Ergo Blockchain</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(post.date).toISOString()}</news:publication_date>
      <news:title>${post.title}</news:title>
    </news:news>
  </url>`).join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

// Generate static sitemap at build time
export async function generateStaticParams() {
  return []
}

// Sitemap metadata
export const metadata = {
  title: 'News Sitemap',
}

// Generate sitemap for all blog posts
export function generateSitemap() {
  const baseUrl = 'https://ergoblockchain.org'
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${blogPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Ergo Blockchain</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(post.date).toISOString()}</news:publication_date>
      <news:title>${post.title}</news:title>
    </news:news>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`

  return sitemap
}

// Export for use in other parts of the application
export { blogPosts }

// News sitemap configuration
export const newsConfig = {
  maxAge: 48 * 60 * 60 * 1000, // 48 hours in milliseconds
  baseUrl: 'https://ergoblockchain.org',
  language: 'en',
  publicationName: 'Ergo Blockchain'
}

// Helper function to check if post is recent enough for news sitemap
export function isRecentPost(date: string, maxAgeMs: number = newsConfig.maxAge): boolean {
  const postDate = new Date(date)
  const cutoffDate = new Date(Date.now() - maxAgeMs)
  return postDate >= cutoffDate
}

// Helper function to format date for news sitemap
export function formatNewsDate(date: string): string {
  return new Date(date).toISOString()
}

// Generate news sitemap entries
export function generateNewsEntries() {
  return blogPosts
    .filter(post => isRecentPost(post.date))
    .map(post => ({
      url: `${newsConfig.baseUrl}/blog/${post.slug}`,
      publishedAt: formatNewsDate(post.date),
      title: post.title,
      language: newsConfig.language,
      publication: newsConfig.publicationName
    }))
} 