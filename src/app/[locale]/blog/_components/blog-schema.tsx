import Script from 'next/script'
import type { BlogPost } from '../_lib/blog-data'

interface BlogSchemaProps {
  post: BlogPost
  url: string
  rating?: {
    value: number
    count: number
  }
}

export function BlogSchema({ post, url, rating }: BlogSchemaProps) {
  const baseUrl = 'https://ergoblockchain.org'
  
  // Enhanced Article Schema with all recommended fields
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${baseUrl}/blog/${post.slug}#article`,
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image ? `${baseUrl}${post.image}` : `${baseUrl}/placeholder.svg`,
    "datePublished": post.date,
    "dateModified": post.lastUpdated || post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${url}`
    },
    "author": {
      "@type": "Person",
      "@id": `${baseUrl}/blog/author/${post.author.id}`,
      "name": post.author.name,
      "description": post.author.bio,
      "jobTitle": post.author.role,
      "url": post.author.twitter ? `https://twitter.com/${post.author.twitter}` : undefined,
      "sameAs": [
        post.author.twitter && `https://twitter.com/${post.author.twitter}`,
        post.author.github && `https://github.com/${post.author.github}`,
      ].filter(Boolean)
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/icon-512x512.png`,
        "width": 512,
        "height": 512
      }
    },
    "keywords": post.tags?.join(", "),
    "articleSection": post.category,
    "wordCount": post.wordCount || post.readTime * 250,
    "timeRequired": `PT${post.readTime}M`,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "creativeWorkStatus": "Published",
    // Add rating if available
    ...(rating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating.value,
        "reviewCount": rating.count,
        "bestRating": 5,
        "worstRating": 1
      }
    }),
    // Interaction statistics
    ...(post.views && {
      "interactionStatistic": [
        {
          "@type": "InteractionCounter",
          "interactionType": "https://schema.org/ViewAction",
          "userInteractionCount": post.views
        },
        ...(post.shares ? [{
          "@type": "InteractionCounter",
          "interactionType": "https://schema.org/ShareAction",
          "userInteractionCount": post.shares
        }] : [])
      ]
    }),
    "commentCount": 0, // TODO: Add real comment count
    "discussionUrl": `${baseUrl}/blog/${post.slug}#comments`
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}/blog/${post.slug}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.category,
        "item": `${baseUrl}/blog/category/${post.category.toLowerCase()}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": post.title,
        "item": `${url}`
      }
    ]
  }

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/blog/${post.slug}`,
    "url": `${baseUrl}/blog/${post.slug}`,
    "name": post.title,
    "description": post.excerpt,
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      "name": "Ergo Platform",
      "url": baseUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },
    "breadcrumb": {
      "@id": `${baseUrl}/blog/${post.slug}#breadcrumb`
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": post.image ? `${baseUrl}${post.image}` : `${baseUrl}/placeholder.svg`,
      "width": 1200,
      "height": 630
    },
    "datePublished": post.date,
    "dateModified": post.lastUpdated || post.date
  }

  // BlogPosting Schema (additional for blog-specific features)
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "alternativeHeadline": post.excerpt,
    "image": post.image ? `${baseUrl}${post.image}` : `${baseUrl}/placeholder.svg`,
    "datePublished": post.date,
    "dateCreated": post.date,
    "dateModified": post.lastUpdated || post.date,
    "author": {
      "@id": `${baseUrl}/blog/author/${post.author.id}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/icon-512x512.png`
      }
    },
    "description": post.excerpt,
    "articleBody": post.excerpt,
    "wordCount": post.wordCount || post.readTime * 250,
    "commentCount": 0,
    "potentialAction": {
      "@type": "CommentAction",
      "name": "Comment",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/blog/${post.slug}#comments`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  }

  // Combined schema using @graph
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      articleSchema,
      breadcrumbSchema,
      webPageSchema,
      blogPostingSchema
    ]
  }

  return (
    <Script
      id="blog-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedSchema)
      }}
      strategy="afterInteractive"
    />
  )
}
