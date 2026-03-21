import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const contentDirectory = path.join(process.cwd(), 'content', 'blog')

export interface BlogPostMeta {
  title: string
  slug: string
  description: string
  image: string
  category: string
  tags: string[]
  author: {
    name: string
    avatar?: string
    bio?: string
    role?: string
    social?: {
      twitter?: string
      github?: string
      linkedin?: string
    }
  }
  publishedAt: string
  updatedAt?: string
  readTime: number
  featured?: boolean
  trending?: boolean
  draft?: boolean
  seo?: {
    keywords?: string[]
    canonicalUrl?: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    schemaType?: string
  }
}

export async function getPostBySlug(slug: string) {
  const fileName = `${slug}.mdx`
  const filePath = path.join(contentDirectory, fileName)
  
  if (!fs.existsSync(filePath)) {
    return null
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          rehypeHighlight,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }]
        ],
      },
    },
  })
  
  return {
    meta: data as BlogPostMeta,
    content: mdxContent,
    source: content,
  }
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }
  
  const files = fs.readdirSync(contentDirectory)
  const posts = []
  
  for (const file of files) {
    if (!file.endsWith('.mdx')) continue
    
    const filePath = path.join(contentDirectory, file)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContent)
    
    // Skip drafts in production
    if (process.env.NODE_ENV === 'production' && data.draft) {
      continue
    }
    
    const slug = file.replace('.mdx', '')
    
    posts.push({
      ...data,
      slug,
    } as BlogPostMeta)
  }
  
  // Sort by date, newest first
  return posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime()
    const dateB = new Date(b.publishedAt).getTime()
    return dateB - dateA
  })
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Generate SEO metadata for a blog post
export function generateBlogMetadata(post: BlogPostMeta) {
  const baseUrl = 'https://www.ergoblockchain.org'
  const url = `${baseUrl}/blog/${post.slug}`
  
  return {
    title: post.seo?.ogTitle || post.title,
    description: post.seo?.ogDescription || post.description,
    keywords: post.seo?.keywords || post.tags,
    openGraph: {
      title: post.seo?.ogTitle || post.title,
      description: post.seo?.ogDescription || post.description,
      url: post.seo?.canonicalUrl || url,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [{
        url: post.seo?.ogImage || post.image || `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.ogTitle || post.title,
      description: post.seo?.ogDescription || post.description,
      images: [post.seo?.ogImage || post.image || `${baseUrl}/og-image.png`],
    },
    alternates: {
      canonical: post.seo?.canonicalUrl || url,
    },
  }
}

// Generate JSON-LD schema for blog post
export function generateBlogSchema(post: BlogPostMeta, url: string) {
  const schemaType = post.seo?.schemaType || 'BlogPosting'
  
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      description: post.author.bio,
      jobTitle: post.author.role,
      sameAs: [
        post.author.social?.twitter && `https://twitter.com/${post.author.social.twitter}`,
        post.author.social?.github && `https://github.com/${post.author.social.github}`,
        post.author.social?.linkedin && `https://linkedin.com/in/${post.author.social.linkedin}`,
      ].filter(Boolean),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ergo Platform',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ergoblockchain.org/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: post.seo?.keywords?.join(', ') || post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.readTime * 200, // Approximate
  }
  
  // Add specific fields for HowTo schema
  if (schemaType === 'HowTo') {
    return {
      ...baseSchema,
      '@type': 'HowTo',
      totalTime: `PT${post.readTime}M`,
    }
  }
  
  // Add specific fields for TechArticle
  if (schemaType === 'TechArticle') {
    return {
      ...baseSchema,
      '@type': 'TechArticle',
      proficiencyLevel: 'Intermediate',
    }
  }
  
  return baseSchema
} 