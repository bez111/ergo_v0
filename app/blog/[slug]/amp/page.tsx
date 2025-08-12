import { blogPosts } from '../../_lib/blog-data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const runtime = 'edge' // Edge runtime для скорости

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return {}
  
  return {
    title: `${post.title} | Ergo Platform`,
    description: post.description,
    alternates: {
      canonical: `https://ergoblockchain.org/blog/${post.slug}`,
    },
    other: {
      'amp': 'true',
    }
  }
}

export default function AMPBlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) notFound()

  // AMP-specific JSON-LD
  const ampJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": `https://ergoblockchain.org${post.image}`,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "image": post.author.avatar
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ergoblockchain.org/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ergoblockchain.org/blog/${post.slug}`
    }
  }

  return (
    <>
      <meta charSet="utf-8" />
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <link rel="canonical" href={`https://ergoblockchain.org/blog/${post.slug}`} />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ampJsonLd) }} />
      
      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .amp-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .meta {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }
        .content {
          font-size: 1.1rem;
          line-height: 1.8;
        }
        amp-img {
          border-radius: 8px;
          margin: 2rem 0;
        }
        .cta {
          background: #ff8800;
          color: white;
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 8px;
          display: inline-block;
          margin-top: 2rem;
        }
      `}</style>
      
      <div className="amp-container">
        <article>
          <h1>{post.title}</h1>
          
          <div className="meta">
            <span>{post.author.name}</span> • 
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span> • 
            <span>{post.readTime}</span>
          </div>
          
          {post.image && (
            <amp-img 
              src={`https://ergoblockchain.org${post.image}`}
              width="800" 
              height="400" 
              layout="responsive"
              alt={post.title}
            />
          )}
          
          <div className="content">
            {/* In real app, this would be the processed MDX content */}
            <p>{post.description}</p>
            
            {/* AMP components for rich content */}
            <amp-accordion animate>
              <section>
                <h2>Key Takeaways</h2>
                <div>
                  <ul>
                    <li>Ergo uses extended UTXO model</li>
                    <li>ErgoScript enables complex smart contracts</li>
                    <li>Sigma protocols provide built-in privacy</li>
                  </ul>
                </div>
              </section>
            </amp-accordion>
            
            {/* Social sharing */}
            <amp-social-share type="twitter" />
            <amp-social-share type="linkedin" />
            <amp-social-share type="email" />
          </div>
          
          <a href="/blog" className="cta">
            Read More Articles
          </a>
        </article>
        
        {/* AMP Analytics */}
        <amp-analytics type="googleanalytics">
          <script type="application/json">{`
            {
              "vars": {
                "account": "UA-XXXXX-Y"
              },
              "triggers": {
                "trackPageview": {
                  "on": "visible",
                  "request": "pageview"
                }
              }
            }
          `}</script>
        </amp-analytics>
      </div>
    </>
  )
} 