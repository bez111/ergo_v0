import { blogPosts } from '../[locale]/blog/_lib/blog-data'
import { sitemapLocales, getLocalizedUrl, escapeXml, sitemapHeaders } from '@/lib/sitemap-utils'

export async function GET() {
  // Filter posts from last 48 hours for Google News
  const recentPosts = blogPosts.filter(post => {
    const postDate = new Date(post.date)
    const twoDaysAgo = new Date(Date.now() - 48 * 60 * 60 * 1000)
    return postDate >= twoDaysAgo
  })

  const entries: string[] = []
  
  for (const post of recentPosts) {
    for (const locale of sitemapLocales) {
      const loc = getLocalizedUrl(`/blog/${post.slug}`, locale)
      const newsLang = locale === 'en' ? 'en' : locale
      
      entries.push(`  <url>
    <loc>${loc}</loc>
    <news:news>
      <news:publication>
        <news:name>Ergo Blockchain</news:name>
        <news:language>${newsLang}</news:language>
      </news:publication>
      <news:publication_date>${new Date(post.date).toISOString()}</news:publication_date>
      <news:title>${escapeXml(post.title)}</news:title>
    </news:news>
  </url>`)
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${entries.join('\n')}
</urlset>`

  return new Response(sitemap, { headers: sitemapHeaders })
}