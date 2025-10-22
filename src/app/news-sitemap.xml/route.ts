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