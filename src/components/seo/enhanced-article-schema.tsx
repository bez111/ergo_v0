interface ArticleData {
  headline: string
  description: string
  author: {
    name: string
    url?: string
  }
  datePublished: string
  dateModified?: string
  image?: string
  url: string
  category?: string
  tags?: string[]
  wordCount?: number
  readingTime?: number
  articleSection?: string
}

export function EnhancedArticleSchema({
  headline,
  description, 
  author,
  datePublished,
  dateModified,
  image = "https://ergoblockchain.org/og-image.png",
  url,
  category = "Blockchain",
  tags = [],
  wordCount,
  readingTime,
  articleSection
}: ArticleData) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url,
    "headline": headline,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": author.name,
      ...(author.url ? { "url": author.url } : {})
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ergoblockchain.org/logo.png",
        "width": 600,
        "height": 60
      },
      "url": "https://ergoblockchain.org"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    ...(articleSection ? { "articleSection": articleSection } : {}),
    ...(category ? { "about": {
      "@type": "Thing",
      "name": category
    }} : {}),
    ...(tags.length > 0 ? { 
      "keywords": tags.join(", "),
      "about": tags.map(tag => ({
        "@type": "Thing",
        "name": tag
      }))
    } : {}),
    ...(wordCount ? { "wordCount": wordCount } : {}),
    ...(readingTime ? { "timeRequired": `PT${readingTime}M` } : {}),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".article-summary", ".key-points"],
      "xpath": [
        "/html/body/main/article/h1",
        "/html/body/main/article/div[@class='summary']"
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
} 