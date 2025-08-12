'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()
  
  useEffect(() => {
    // For now, redirect to a simple message since Tina requires additional setup
    console.log('Tina CMS requires additional configuration:')
    console.log('1. Register at https://app.tina.io')
    console.log('2. Create a project and get your Client ID')
    console.log('3. Add credentials to .env.local')
    console.log('4. Run: npx tinacms dev -c "next dev"')
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="bg-neutral-900 border border-orange-500/20 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-6">
            Blog Admin Panel Setup Required
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <div className="bg-black/50 border border-orange-500/10 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-orange-400 mb-4">
                Quick Setup Instructions:
              </h2>
              
              <ol className="space-y-4 list-decimal list-inside">
                <li>
                  <span className="font-semibold">Register at Tina Cloud:</span>
                  <br />
                  <a 
                    href="https://app.tina.io" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 underline"
                  >
                    https://app.tina.io
                  </a>
                </li>
                
                <li>
                  <span className="font-semibold">Create a new project</span> and connect your GitHub repository
                </li>
                
                <li>
                  <span className="font-semibold">Get your credentials:</span>
                  <br />
                  <code className="bg-black px-2 py-1 rounded text-sm">Client ID</code> and{' '}
                  <code className="bg-black px-2 py-1 rounded text-sm">Read Token</code>
                </li>
                
                <li>
                  <span className="font-semibold">Add to .env.local:</span>
                  <pre className="bg-black mt-2 p-3 rounded text-sm overflow-x-auto">
{`NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id
TINA_TOKEN=your-read-token
TINA_PUBLIC_IS_LOCAL=true`}
                  </pre>
                </li>
                
                <li>
                  <span className="font-semibold">Run Tina CMS locally:</span>
                  <pre className="bg-black mt-2 p-3 rounded text-sm">
{`npx tinacms dev -c "next dev"`}
                  </pre>
                </li>
                
                <li>
                  <span className="font-semibold">Access admin at:</span>{' '}
                  <code className="bg-black px-2 py-1 rounded text-sm">http://localhost:3000/admin</code>
                </li>
              </ol>
            </div>
            
            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
              <p className="text-yellow-200 text-sm">
                <span className="font-semibold">Note:</span> The admin panel requires Tina Cloud credentials to function. 
                This is a one-time setup that enables visual content editing.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://tina.io/docs/setup-overview/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-orange-500 text-black font-semibold rounded hover:bg-orange-400 transition-colors"
              >
                Read Full Documentation
              </a>
              
              <button
                onClick={() => router.push('/')}
                className="px-6 py-3 bg-neutral-800 text-white font-semibold rounded hover:bg-neutral-700 transition-colors border border-neutral-700"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-3">
            Alternative: Use MDX Files Directly
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            You can also create blog posts by adding MDX files directly to{' '}
            <code className="bg-black px-2 py-1 rounded">/content/blog/</code>
          </p>
          <p className="text-gray-400 text-sm">
            See <code className="bg-black px-2 py-1 rounded">docs/BLOG_ADMIN_SETUP.md</code> for details.
          </p>
        </div>
      </div>
    </div>
  )
} 