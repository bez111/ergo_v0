'use client'

import { Home, RefreshCw } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body style={{ margin: 0, background: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px' }}>
            <h1 style={{ fontSize: '6rem', fontWeight: 'bold', margin: '0 0 1rem', color: '#ff8800' }}>
              500
            </h1>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: '0 0 1rem' }}>
              Something went wrong
            </h2>
            <p style={{ color: '#aaa', marginBottom: '2rem', lineHeight: 1.6 }}>
              An unexpected error occurred. Please try again or return to the homepage.
              {process.env.NODE_ENV === 'development' && error?.message && (
                <><br /><code style={{ color: '#ff8800', fontSize: '0.85rem' }}>{error.message}</code></>
              )}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={reset}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 1.5rem', background: '#ff8800', color: '#000',
                  border: 'none', borderRadius: '6px', cursor: 'pointer',
                  fontWeight: 'bold', fontSize: '0.9rem',
                }}
              >
                <RefreshCw size={16} /> Try Again
              </button>
              <a
                href="/"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 1.5rem', background: 'transparent',
                  color: '#ff8800', border: '2px solid #ff8800',
                  borderRadius: '6px', textDecoration: 'none',
                  fontWeight: 'bold', fontSize: '0.9rem',
                }}
              >
                <Home size={16} /> Go Home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
