"use client"

import { useState } from 'react'

export default function TestNewsletterPage() {
  const [email, setEmail] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testAPI = async () => {
    setLoading(true)
    setResult(null)
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email || `test+${Date.now()}@example.com`,
          source: 'test_page',
          utmSource: 'test',
          utmMedium: 'test_page',
          utmCampaign: 'api_test'
        })
      })
      
      const data = await response.json()
      setResult({ status: response.status, data })
    } catch (error) {
      setResult({ error: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">🧪 Beehiiv API Test</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Test Email (optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@example.com (auto-generated if empty)"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white"
            />
          </div>
          
          <button
            onClick={testAPI}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded disabled:opacity-50"
          >
            {loading ? 'Testing...' : 'Test Beehiiv API'}
          </button>
          
          {result && (
            <div className="mt-6 p-4 bg-gray-800 rounded">
              <h3 className="text-lg font-semibold mb-2">Result:</h3>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </div>
        
        <div className="mt-12 p-4 bg-gray-900 rounded">
          <h3 className="text-lg font-semibold mb-2">Environment Check:</h3>
          <p className="text-sm text-gray-400">
            Check the browser console and server logs for detailed information.
          </p>
        </div>
      </div>
    </div>
  )
}
