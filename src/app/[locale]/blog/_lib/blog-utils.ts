import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorImage?: string
  authorRole?: string
  category: string
  tags: string[]
  image: string
  readingTime: number
  featured?: boolean
  draft?: boolean
  content?: string
  htmlContent?: string
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

// Get all blog post slugs
export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.mdx?$/, ''))
}

// Calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Get post data by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fallbackPath = path.join(postsDirectory, `${slug}.md`)
    
    let filePath = fullPath
    if (!fs.existsSync(fullPath) && fs.existsSync(fallbackPath)) {
      filePath = fallbackPath
    }
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Process content to HTML
    const processedContent = await remark()
      .use(html)
      .process(content)
    const htmlContent = processedContent.toString()
    
    return {
      slug,
      title: data['title'] || slug,
      description: data['description'] || '',
      date: data['date'] || new Date().toISOString(),
      author: data['author'] || 'Ergo Team',
      authorImage: data['authorImage'],
      authorRole: data['authorRole'],
      category: data['category'] || 'General',
      tags: data['tags'] || [],
      image: data['image'] || '/blog-placeholder.jpg',
      readingTime: calculateReadingTime(content),
      featured: data['featured'] || false,
      draft: data['draft'] || false,
      content,
      htmlContent
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

// Get all posts with optional filtering
export async function getAllPosts(options?: {
  includeDrafts?: boolean
  category?: string
  tag?: string
  featured?: boolean
  limit?: number
}): Promise<BlogPost[]> {
  const slugs = getAllPostSlugs()
  const posts = await Promise.all(
    slugs.map(slug => getPostBySlug(slug))
  )
  
  let filteredPosts = posts.filter((post): post is BlogPost => {
    if (!post) return false
    if (!options?.includeDrafts && post.draft) return false
    if (options?.category && post.category !== options.category) return false
    if (options?.tag && !post.tags.includes(options.tag)) return false
    if (options?.featured !== undefined && post.featured !== options.featured) return false
    return true
  })
  
  // Sort by date (newest first)
  filteredPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  
  // Apply limit if specified
  if (options?.limit) {
    filteredPosts = filteredPosts.slice(0, options.limit)
  }
  
  return filteredPosts
}

// Get related posts based on tags and category
// export async function getRelatedPosts(
//   currentSlug: string, 
//   limit: number = 3
// ): Promise<BlogPost[]> {
//   const currentPost = await getPostBySlug(currentSlug)
//   if (!currentPost) return []
  
//   const allPosts = await getAllPosts()
  
//   // Calculate relevance score for each post
//   const scoredPosts = allPosts
//     .filter(post => post.slug !== currentSlug)
//     .map(post => {
//       let score = 0
      
//       // Same category = 3 points
//       if (post.category === currentPost.category) score += 3
      
//       // Each matching tag = 2 points
//       currentPost.tags.forEach(tag => {
//         if (post.tags.includes(tag)) score += 2
//       })
      
//       return { post, score }
//     })
//     .filter(item => item.score > 0)
//     .sort((a, b) => b.score - a.score)
  
//   return scoredPosts.slice(0, limit).map(item => item.post)
// }

// Get all unique categories
// export async function getAllCategories(): Promise<string[]> {
//   const posts = await getAllPosts({ includeDrafts: false })
//   const categories = new Set(posts.map(post => post.category))
//   return Array.from(categories).sort()
// }

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts({ includeDrafts: false })
  const tags = new Set(posts.flatMap(post => post.tags))
  return Array.from(tags).sort()
}

// Generate RSS feed content
export async function generateRSSFeed(): Promise<string> {
  const posts = await getAllPosts({ limit: 20 })
  const baseUrl = 'https://www.ergoblockchain.org'
  
  const rssItems = posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator><![CDATA[${post.author}]]></dc:creator>
      ${post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ')}
    </item>
  `).join('')
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Ergo Platform Blog</title>
    <description>Latest news and insights from Ergo Platform</description>
    <link>${baseUrl}/blog</link>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`
} 