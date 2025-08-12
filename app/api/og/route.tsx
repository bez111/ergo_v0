import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

// Fonts - commented out for now as fonts might not exist
/*
const fontBold = fetch(
  new URL('../../../../public/fonts/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

const fontRegular = fetch(
  new URL('../../../../public/fonts/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())
*/

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Get parameters
    const title = searchParams.get('title') || 'Ergo Platform'
    const description = searchParams.get('description') || 'Resilient DeFi Blockchain'
    const category = searchParams.get('category') || 'Technology'
    const author = searchParams.get('author')
    const date = searchParams.get('date')
    const template = searchParams.get('template') || 'default'
    
    // Fonts disabled for now - use system fonts
    /*
    const [fontDataBold, fontDataRegular] = await Promise.all([
      fontBold,
      fontRegular,
    ])
    */

    // Different templates for different content types
    const templates = {
      default: (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#000000',
            backgroundImage: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
            position: 'relative',
          }}
        >
          {/* Grid Pattern Background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255,136,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,136,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              opacity: 0.3,
            }}
          />
          
          {/* Glow Effect */}
          <div
            style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '60%',
              height: '60%',
              background: 'radial-gradient(circle, rgba(255,136,0,0.4) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          
          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '80px',
              height: '100%',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: '#ff8800',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: 'black',
                }}
              >
                Σ
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: '#ff8800', fontSize: '24px', fontWeight: 'bold' }}>
                  ERGO PLATFORM
                </div>
                <div style={{ color: '#888', fontSize: '18px' }}>
                  {category}
                </div>
              </div>
            </div>
            
            {/* Title */}
            <div
              style={{
                fontSize: title.length > 50 ? '56px' : '72px',
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.1,
                marginTop: '-100px',
                maxWidth: '90%',
              }}
            >
              {title}
            </div>
            
            {/* Footer */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <div style={{ maxWidth: '60%' }}>
                <div
                  style={{
                    fontSize: '24px',
                    color: '#ccc',
                    lineHeight: 1.4,
                    marginBottom: '20px',
                  }}
                >
                  {description}
                </div>
                {(author || date) && (
                  <div style={{ display: 'flex', gap: '30px', color: '#888', fontSize: '20px' }}>
                    {author && <span>By {author}</span>}
                    {date && <span>{date}</span>}
                  </div>
                )}
              </div>
              
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    padding: '12px 24px',
                    background: 'rgba(255,136,0,0.2)',
                    border: '2px solid #ff8800',
                    borderRadius: '8px',
                    color: '#ff8800',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  ergoblockchain.org
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      
      blog: (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            backgroundColor: '#000',
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255,136,0,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(255,136,0,0.2) 0%, transparent 50%)
            `,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '80px',
              width: '100%',
            }}
          >
            <div
              style={{
                fontSize: '32px',
                color: '#ff8800',
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              ERGO BLOG
            </div>
            <div
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.2,
                marginBottom: '30px',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '24px',
                color: '#aaa',
                marginBottom: '40px',
              }}
            >
              {description}
            </div>
            <div style={{ display: 'flex', gap: '40px', color: '#888', fontSize: '20px' }}>
              {author && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #ff8800, #ff6600)',
                    }}
                  />
                  <span>{author}</span>
                </div>
              )}
              {date && <span>{date}</span>}
              <span>{category}</span>
            </div>
          </div>
        </div>
      ),
      
      technical: (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0a0a0a',
            fontFamily: 'monospace',
          }}
        >
          {/* Terminal Header */}
          <div
            style={{
              padding: '20px 30px',
              background: '#1a1a1a',
              borderBottom: '1px solid #333',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
            <span style={{ marginLeft: '20px', color: '#666' }}>ergo@blockchain:~$</span>
          </div>
          
          {/* Content */}
          <div
            style={{
              flex: 1,
              padding: '60px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ color: '#ff8800', fontSize: '24px', marginBottom: '20px' }}>
              // {category}
            </div>
            <div
              style={{
                fontSize: '56px',
                fontWeight: 'bold',
                color: '#fff',
                lineHeight: 1.2,
                marginBottom: '30px',
                fontFamily: 'sans-serif',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '20px',
                color: '#888',
                lineHeight: 1.5,
                marginBottom: '40px',
              }}
            >
              {`> ${description}`}
            </div>
            <div
              style={{
                display: 'flex',
                gap: '30px',
                fontSize: '18px',
                color: '#666',
              }}
            >
              <span style={{ color: '#ff8800' }}>$</span>
              <span>ergoblockchain.org</span>
              {author && <span>author: {author}</span>}
              {date && <span>date: {date}</span>}
            </div>
          </div>
        </div>
      ),
    }

    return new ImageResponse(
      templates[template as keyof typeof templates] || templates.default,
      {
        width: 1200,
        height: 630,
        // Fonts disabled for now - will use default system fonts
        /*
        fonts: [
          {
            name: 'Inter',
            data: fontDataBold,
            style: 'normal',
            weight: 700,
          },
          {
            name: 'Inter',
            data: fontDataRegular,
            style: 'normal',
            weight: 400,
          },
        ],
        */
      }
    )
  } catch (e: any) {
    console.error('OG Image generation failed:', e)
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
} 