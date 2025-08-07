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
    "description": post.description,
    "image": post.image ? `${baseUrl}${post.image}` : `${baseUrl}/placeholder.svg`,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`
    },
    "author": {
      "@type": "Person",
      "@id": `${baseUrl}#author-${post.author.name.toLowerCase().replace(/\s+/g, '-')}`,
      "name": post.author.name,
      "description": post.author.bio,
      "jobTitle": post.author.role,
      "url": post.author.social?.twitter ? `https://twitter.com/${post.author.social.twitter}` : undefined,
      "sameAs": [
        post.author.social?.twitter && `https://twitter.com/${post.author.social.twitter}`,
        post.author.social?.github && `https://github.com/${post.author.social.github}`,
        post.author.social?.linkedin && `https://linkedin.com/in/${post.author.social.linkedin}`
      ].filter(Boolean)
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "wordCount": post.readTime * 250, // Approximation: 250 words per minute
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "creativeWorkStatus": "Published",
    "genre": "Technology",
    "about": {
      "@type": "Thing",
      "name": "Ergo Blockchain",
      "description": "Decentralized blockchain platform"
    },
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
    "interactionStatistic": [
      {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/ViewAction",
        "userInteractionCount": post.views
      },
      {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/LikeAction",
        "userInteractionCount": post.likes
      }
    ],
    // Comments section
    "commentCount": 0, // TODO: Add real comment count
    "discussionUrl": `${baseUrl}/blog/${post.slug}#comments`
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": post.category.charAt(0).toUpperCase() + post.category.slice(1),
        "item": `${baseUrl}/blog?category=${post.category}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": post.title,
        "item": `${baseUrl}/blog/${post.slug}`
      }
    ]
  }

  // FAQ Schema (if FAQ content exists)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the minimum requirement to get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll need a basic understanding of blockchain concepts and access to an Ergo wallet."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the implementation typically take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline depends on your specific requirements, but typically ranges from a few hours to several days."
        }
      },
      {
        "@type": "Question",
        "name": "Is this compatible with existing systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the solution is designed to be interoperable with most existing blockchain infrastructure."
        }
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
    "description": post.description,
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
      "url": post.image ? `${baseUrl}${post.image}` : `${baseUrl}/placeholder.svg`
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt
  }

  // Blog Posting Schema (additional schema for blog-specific features)
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "alternativeHeadline": post.description,
    "image": post.image ? `${baseUrl}${post.image}` : `${baseUrl}/placeholder.svg`,
    "datePublished": post.publishedAt,
    "dateCreated": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "author": {
      "@id": `${baseUrl}#author-${post.author.name.toLowerCase().replace(/\s+/g, '-')}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "description": post.description,
    "articleBody": post.description,
    "wordCount": post.readTime * 250,
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

  // Combined schema
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      articleSchema,
      breadcrumbSchema,
      faqSchema,
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