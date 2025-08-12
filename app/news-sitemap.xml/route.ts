import { blogPosts } from '../blog/_lib/blog-data'

export async function GET() {
  const baseUrl = 'https://ergoblockchain.org'
  
  // Filter posts from last 48 hours for Google News
  const recentPosts = blogPosts.filter(post => {
    const postDate = new Date(post.publishedAt)
    const twoDaysAgo = new Date(Date.now() - 48 * 60 * 60 * 1000)
    return postDate >= twoDaysAgo
  })
  
  // Also include important recent posts (last 30 days) with news value
  const newsWorthyPosts = blogPosts.filter(post => {
    const postDate = new Date(post.publishedAt)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    const tags = post.tags || []
    return postDate >= thirtyDaysAgo && (
      tags.includes('announcement') ||
      tags.includes('update') ||
      tags.includes('release') ||
      tags.includes('partnership') ||
      post.category === 'News'
    )
  })
  
  // Combine and deduplicate
  const allNewsPosts = Array.from(
    new Map([...recentPosts, ...newsWorthyPosts].map(p => [p.slug, p])).values()
  )
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${allNewsPosts.map((post) => {
  const postDate = new Date(post.publishedAt)
  const formattedDate = postDate.toISOString()
  
  return `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Ergo Platform Blog</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:genres>${getGenre(post.category)}</news:genres>
      <news:publication_date>${formattedDate}</news:publication_date>
      <news:title>${escapeXml(post.title)}</news:title>
      <news:keywords>${escapeXml((post.tags || []).join(', '))}, ergo, blockchain, cryptocurrency</news:keywords>
      ${(post.tags || []).includes('press-release') ? '<news:access>Registration</news:access>' : ''}
      ${(post.tags || []).includes('opinion') ? '<news:genres>Opinion</news:genres>' : ''}
    </news:news>
    <lastmod>${post.updatedAt || formattedDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`
}).join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'noindex',
    },
  })
}

function getGenre(category: string): string {
  const genreMap: Record<string, string> = {
    'News': 'PressRelease',
    'Technology': 'Blog',
    'Tutorial': 'Blog',
    'Analysis': 'Opinion',
    'Update': 'PressRelease',
    'Community': 'Blog',
    'Development': 'Blog',
  }
  return genreMap[category] || 'Blog'
}

function escapeXml(text: string): string {
  if (!text) return ''
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
} 