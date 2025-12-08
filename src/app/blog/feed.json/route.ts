import { siteConfig } from '@/config/site-config'
import { blogPosts } from '@/app/[locale]/blog/_lib/blog-data'

/**
 * JSON Feed 1.1 specification: https://jsonfeed.org/version/1.1
 * Available at /blog/feed.json
 * Provides a modern, JSON-based alternative to RSS for feed readers
 */
export async function GET() {
  const baseUrl = siteConfig.siteUrl
  
  const feed = {
    version: "https://jsonfeed.org/version/1.1",
    title: "Ergo Blog",
    home_page_url: `${baseUrl}/blog`,
    feed_url: `${baseUrl}/blog/feed.json`,
    description: "Latest updates, deep-dives and how-tos from the Ergo ecosystem. Technical guides, DeFi developments, ecosystem news, and blockchain research.",
    icon: `${baseUrl}/icon-512x512.png`,
    favicon: `${baseUrl}/favicon.ico`,
    language: "en-US",
    authors: [
      {
        name: "Ergo Team",
        url: baseUrl,
        avatar: `${baseUrl}/icon-512x512.png`
      }
    ],
    items: blogPosts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 50)
      .map(post => {
        const postUrl = `${baseUrl}/blog/${post.slug}`
        
        return {
          id: postUrl,
          url: postUrl,
          title: post.title,
          summary: post.excerpt,
          content_text: post.excerpt,
          content_html: `<p>${post.excerpt}</p><p>By ${post.author.name}${post.author.role ? ` - ${post.author.role}` : ''}</p><p><a href="${postUrl}">Read full article</a></p>`,
          image: post.image ? `${baseUrl}${post.image}` : undefined,
          date_published: new Date(post.date).toISOString(),
          date_modified: post.lastUpdated 
            ? new Date(post.lastUpdated).toISOString() 
            : new Date(post.date).toISOString(),
          authors: [
            {
              name: post.author.name,
              url: post.author.twitter 
                ? `https://twitter.com/${post.author.twitter}` 
                : undefined,
              avatar: post.author.avatar || undefined
            }
          ],
          tags: [post.category, ...(post.tags || [])].filter(Boolean),
          language: "en",
          _ergo: {
            read_time_minutes: post.readTime,
            word_count: post.wordCount,
            difficulty: post.difficulty,
            trending: post.trending,
            featured: post.featured
          }
        }
      })
  }

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

