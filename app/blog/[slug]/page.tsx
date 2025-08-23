import { Metadata } from 'next'
import { notFound } from "next/navigation"
import { blogPosts } from "../_lib/blog-data"
import { BlogPostClient } from "./BlogPostClient"
import { BlogSchema } from "../_components/blog-schema"


export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  const baseUrl = 'https://ergoblockchain.org'
  
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author.name }],
    creator: post.author.name,
    publisher: 'Ergo Platform',
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image || '/placeholder.svg',
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      url: `${baseUrl}/blog/${slug}`,
      siteName: 'Ergo Platform',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image || '/placeholder.svg'],
      creator: post.author.social?.twitter ? `@${post.author.social.twitter}` : undefined,
    },
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)
  
  // Mock rating data - in production this would come from a database
  const rating = {
    value: 4.5,
    count: 23
  }

  return (
    <>
      <BlogSchema 
        post={post} 
        url={`https://ergoblockchain.org/blog/${slug}`}
        rating={rating}
      />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  )
}
