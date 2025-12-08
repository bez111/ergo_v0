import { siteConfig } from '@/config/site-config'
import { blogPosts } from '../_lib/blog-data'

export async function GET() {
  const baseUrl = siteConfig.siteUrl
  const buildDate = new Date().toUTCString()
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Ergo Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Latest updates, deep-dives and how-tos from the Ergo ecosystem. Technical guides, DeFi developments, ecosystem news, and blockchain research.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/icon-512x512.png</url>
      <title>Ergo Blog</title>
      <link>${baseUrl}/blog</link>
      <width>512</width>
      <height>512</height>
    </image>
    <copyright>Copyright ${new Date().getFullYear()} Ergo Platform</copyright>
    <managingEditor>contact@ergoplatform.org (Ergo Team)</managingEditor>
    <webMaster>contact@ergoplatform.org (Ergo Team)</webMaster>
    <ttl>60</ttl>
${blogPosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 50) // Last 50 posts
  .map(post => {
    const postUrl = `${baseUrl}/blog/${post.slug}`
    const pubDate = new Date(post.date).toUTCString()
    
    return `<item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <dc:creator><![CDATA[${post.author.name}]]></dc:creator>
      <category><![CDATA[${post.category}]]></category>
      ${post.tags?.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ') || ''}
      ${post.image ? `<enclosure url="${baseUrl}${post.image}" type="${post.image.endsWith('.png') ? 'image/png' : post.image.endsWith('.svg') ? 'image/svg+xml' : 'image/jpeg'}"/>` : ''}
      <content:encoded><![CDATA[
        <p>${post.excerpt}</p>
        <p>By ${post.author.name}${post.author.role ? ` - ${post.author.role}` : ''}</p>
        <p><a href="${postUrl}">Read full article →</a></p>
      ]]></content:encoded>
      <author>${post.author.name}</author>
    </item>`
  }).join('\n')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

