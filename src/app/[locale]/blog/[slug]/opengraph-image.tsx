import { ImageResponse } from 'next/og'
import { blogPosts } from '../_lib/blog-data'

export const runtime = 'edge'

export const alt = 'Ergo Platform Blog Post'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: 'linear-gradient(to bottom right, #FF5E18, #FF8800)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          Post Not Found
        </div>
      ),
      {
        ...size,
      }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Orange accent gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #FF5E18 0%, #FF8800 100%)',
          }}
        />
        
        {/* Category */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <span
            style={{
              fontSize: 24,
              color: '#FF8800',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 700,
            }}
          >
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '30px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.title}
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: 32,
            color: '#888',
            lineHeight: 1.4,
            marginBottom: '40px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.description}
        </p>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto',
          }}
        >
          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: 28, color: '#666' }}>
              By {post.author.name} • {post.readTime} min read
            </span>
          </div>

          {/* Logo */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 900,
              color: '#FF8800',
            }}
          >
            ERGO
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 