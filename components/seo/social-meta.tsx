import Head from 'next/head'

interface SocialMetaProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterSite?: string
  twitterCreator?: string
  locale?: string
}

export function SocialMeta({
  title,
  description,
  image = 'https://ergoblockchain.org/og-image.png',
  url = 'https://ergoblockchain.org',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  twitterCard = 'summary_large_image',
  twitterSite = '@ergoplatformorg',
  twitterCreator = '@ergoplatformorg',
  locale = 'en_US'
}: SocialMetaProps) {
  const fullTitle = `${title} | Ergo Platform`
  
  return (
    <Head>
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Ergo Platform" />
      <meta property="og:locale" content={locale} />
      
      {/* Article specific Open Graph tags */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO Meta Tags */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Structured Data for Social Profiles */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ergo Platform",
            "url": "https://ergoblockchain.org",
            "sameAs": [
              "https://twitter.com/ergoplatformorg",
              "https://t.me/ergoplatform",
              "https://discord.gg/ergo",
              "https://reddit.com/r/ergonauts",
              "https://github.com/ergoplatform",
              "https://youtube.com/@ErgoPlatform"
            ]
          })
        }}
      />
    </Head>
  )
} 