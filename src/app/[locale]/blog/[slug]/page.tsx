import { Metadata } from 'next'
import { notFound } from "next/navigation"
import Script from 'next/script'
import { blogPosts } from "../_lib/blog-data"
import { BlogPostClientPremium } from "./BlogPostClientPremium"
import { BlogSchema } from "../_components/blog-schema"
// import { generateMetadata as generatePageMetadata } from '@/components/seo/page-metadata'
// import { PageMetadata } from '@/components/seo/page-metadata'
import { siteConfig } from '@/config/site-config'

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
  
  // Optimize title for SEO (≤ 60 chars)
  const seoTitle = post.title.length > 50 
    ? `${post.title.substring(0, 47)}...` 
    : post.title
  const fullTitle = `${seoTitle} | Ergo Platform`

  // Optimize description (150-160 chars)
  const seoDescription = post.excerpt
  const optimizedDescription = seoDescription.length > 155 
    ? `${seoDescription.substring(0, 152)}...` 
    : seoDescription

  return {
    title: fullTitle,
    description: optimizedDescription,
    keywords: post.tags?.join(', '),
    authors: [{ name: post.author.name }],
    creator: post.author.name,
    publisher: 'Ergo Platform',
    openGraph: {
      title: seoTitle,
      description: optimizedDescription,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastUpdated || post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image || `${baseUrl}/og-image-blog.png`,
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
      title: seoTitle,
      description: optimizedDescription,
      images: [post.image || `${baseUrl}/og-image-blog.png`],
      creator: post.author.twitter ? `@${post.author.twitter}` : `${siteConfig.twitterHandle}`,
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

  // FAQ Schema for article page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is ErgoScript different from Solidity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ErgoScript uses a UTXO model with functional programming, offering better predictability and security. Solidity uses an account model with imperative programming, which is more flexible but prone to reentrancy attacks."
        }
      },
      {
        "@type": "Question",
        "name": "What tools do I need to start with ErgoScript?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll need an Ergo node (or access to a public one), the Ergo Playground for testing, and either Ergo AppKit or ergo-lib for application development."
        }
      },
      {
        "@type": "Question",
        "name": "How much does ErgoScript deployment cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deployment costs are minimal - typically less than 0.001 ERG. The exact cost depends on the script complexity and current network conditions."
        }
      }
    ]
  }

  // TechArticle Schema (more specific than generic Article)
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "dependencies": "Ergo node, Ergo Playground, Ergo AppKit",
    "proficiencyLevel": "Intermediate",
    "genre": "Tutorial",
    "technicalAudience": ["Blockchain Developers", "Smart Contract Engineers"],
    "about": {
      "@type": "Thing",
      "name": "ErgoScript",
      "description": "A functional smart contract language for the Ergo blockchain"
    }
  }

  return (
    <>
      <BlogSchema 
        post={post} 
        url={`${siteConfig.siteUrl}/blog/${slug}`}
        rating={rating}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <Script
        id="tech-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(techArticleSchema)
        }}
      />
      <BlogPostClientPremium post={post} relatedPosts={relatedPosts} />
    </>
  )
}
