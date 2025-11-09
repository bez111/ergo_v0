"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'blog_post_inline',
          utmSource: 'blog',
          utmMedium: 'inline_form',
          utmCampaign: 'ergo_newsletter'
        })
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setEmail('')
        setMessage('Successfully subscribed! 🎉')
      } else {
        setMessage(result.error || 'Subscription failed. Please try again.')
      }
    } catch (error) {
      setMessage('Network error. Please try again.')
      console.error('Newsletter subscription error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="mt-12 py-8 border-t border-neutral-800">
        <div className="text-center">
          <div className="text-green-400 mb-2">✅</div>
          <h2 className="text-lg font-semibold mb-2 text-white">Thank you!</h2>
          <p className="text-sm text-neutral-500">
            You'll receive Ergo development insights in your inbox.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="mt-12 py-8 border-t border-neutral-800">
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2 text-white">Stay Updated</h2>
        <p className="text-sm text-neutral-500 mb-4">
          Get Ergo development insights delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-sm mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="flex-1 px-3 py-2 bg-neutral-900/50 border border-neutral-700 rounded text-sm focus:border-orange-500 focus:outline-none disabled:opacity-50"
            required
          />
          <Button 
            type="submit" 
            size="sm" 
            disabled={isLoading || !email}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 disabled:opacity-50"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
        {message && (
          <div className={`mt-3 text-sm ${message.includes('Successfully') ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  )
}
