import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Web Stories data
const stories = [
  {
    slug: 'what-is-ergo',
    title: 'What is Ergo?',
    description: 'Discover the resilient blockchain platform for contractual money',
    coverImage: '/stories/what-is-ergo-cover.jpg',
    pages: [
      {
        type: 'cover',
        title: 'What is Ergo?',
        subtitle: 'The Future of Contractual Money',
        background: '/stories/ergo-intro-bg.jpg',
      },
      {
        type: 'content',
        title: 'Proof of Work',
        text: 'Ergo uses a secure PoW consensus mechanism based on Autolykos v2',
        background: '/stories/pow-bg.jpg',
      },
      {
        type: 'content',
        title: 'eUTXO Model',
        text: 'Extended UTXO model enables powerful smart contracts',
        background: '/stories/eutxo-bg.jpg',
      },
      {
        type: 'cta',
        title: 'Start Building',
        text: 'Join the Ergo ecosystem today',
        button: 'Get Started',
        link: '/start',
        background: '/stories/cta-bg.jpg',
      },
    ],
  },
  {
    slug: 'ergoscript-explained',
    title: 'ErgoScript Explained',
    description: 'Learn about Ergo\'s powerful smart contract language',
    coverImage: '/stories/ergoscript-cover.jpg',
    pages: [
      {
        type: 'cover',
        title: 'ErgoScript',
        subtitle: 'Smart Contracts Made Simple',
        background: '/stories/ergoscript-bg.jpg',
      },
      {
        type: 'content',
        title: 'Sigma Protocols',
        text: 'Zero-knowledge proofs built into the language',
        background: '/stories/sigma-bg.jpg',
      },
      {
        type: 'code',
        title: 'Simple Example',
        code: `{
  val deadline = 1000
  val pkAlice = proveDlog(alice)
  val pkBob = proveDlog(bob)
  
  (HEIGHT > deadline && pkAlice) || pkBob
}`,
        background: '/stories/code-bg.jpg',
      },
    ],
  },
]

export async function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const story = stories.find(s => s.slug === slug)
  
  if (!story) {
    return {
      title: 'Story Not Found',
    }
  }
  
  return {
    title: story.title,
    description: story.description,
    openGraph: {
      title: story.title,
      description: story.description,
      type: 'article',
      images: [story.coverImage],
    },
    other: {
      'amp-story-generator-name': 'Ergo Platform',
      'amp-story-generator-version': '1.0.0',
    },
  }
}

export default async function WebStoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const story = stories.find(s => s.slug === slug)
  
  if (!story) {
    notFound()
  }
  
  return (
    <>
      {/* AMP Story Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            'headline': story.title,
            'description': story.description,
            'image': `https://ergoblockchain.org${story.coverImage}`,
            'datePublished': new Date().toISOString(),
            'publisher': {
              '@type': 'Organization',
              'name': 'Ergo Platform',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://ergoblockchain.org/logo.png',
                'width': 600,
                'height': 60,
              },
            },
          }),
        }}
      />
      
      {/* Web Story Container */}
      <div className="web-story-container">
        <div className="story-viewport">
          {story.pages.map((page, index) => (
            <div
              key={index}
              className="story-page"
              data-page={index}
              style={{
                backgroundImage: `url(${page.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="story-content">
                {page.type === 'cover' && (
                  <>
                    <h1 className="story-title">{page.title}</h1>
                    <p className="story-subtitle">{page.subtitle}</p>
                  </>
                )}
                
                {page.type === 'content' && (
                  <>
                    <h2 className="story-heading">{page.title}</h2>
                    <p className="story-text">{page.text}</p>
                  </>
                )}
                
                {page.type === 'code' && 'code' in page && (
                  <>
                    <h2 className="story-heading">{page.title}</h2>
                    <pre className="story-code">
                      <code>{page.code}</code>
                    </pre>
                  </>
                )}
                
                {page.type === 'cta' && 'link' in page && 'button' in page && (
                  <>
                    <h2 className="story-heading">{page.title}</h2>
                    <p className="story-text">{page.text}</p>
                    <a href={page.link} className="story-button">
                      {page.button}
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Story Navigation */}
        <div className="story-navigation">
          <button className="story-nav-prev" aria-label="Previous page">
            ←
          </button>
          <div className="story-progress">
            {story.pages.map((_, index) => (
              <div
                key={index}
                className="story-progress-bar"
                data-page={index}
              />
            ))}
          </div>
          <button className="story-nav-next" aria-label="Next page">
            →
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .web-story-container {
          position: relative;
          width: 100%;
          max-width: 414px;
          height: 736px;
          margin: 0 auto;
          background: #000;
          overflow: hidden;
        }
        
        .story-viewport {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          scroll-snap-type: x mandatory;
          overflow-x: auto;
          scrollbar-width: none;
        }
        
        .story-viewport::-webkit-scrollbar {
          display: none;
        }
        
        .story-page {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
          scroll-snap-align: start;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .story-content {
          padding: 2rem;
          text-align: center;
          color: white;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.7)
          );
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .story-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        .story-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
        }
        
        .story-heading {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        .story-text {
          font-size: 1.125rem;
          line-height: 1.6;
        }
        
        .story-code {
          background: rgba(0, 0, 0, 0.8);
          padding: 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          text-align: left;
          overflow-x: auto;
        }
        
        .story-button {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.75rem 2rem;
          background: #ff5e18;
          color: white;
          text-decoration: none;
          border-radius: 0.5rem;
          font-weight: bold;
        }
        
        .story-navigation {
          position: absolute;
          bottom: 1rem;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
        }
        
        .story-nav-prev,
        .story-nav-next {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          font-size: 1.25rem;
          cursor: pointer;
        }
        
        .story-progress {
          display: flex;
          gap: 0.25rem;
          flex: 1;
          margin: 0 1rem;
        }
        
        .story-progress-bar {
          flex: 1;
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          position: relative;
        }
        
        .story-progress-bar[data-page="0"] {
          background: white;
        }
      `}</style>
    </>
  )
} 