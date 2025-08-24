"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Shield, CheckCircle } from "lucide-react"
import { newsletterAnalytics } from "@/lib/newsletter-analytics"

interface SubscribeFormProps {
  segments?: string[]
}

export function SubscribeForm({ segments = [] }: SubscribeFormProps) {
  const [email, setEmail] = useState("")
  const [selectedSegment, setSelectedSegment] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Check if user is already subscribed and track view
  useEffect(() => {
    const alreadySubscribed = newsletterAnalytics.isSubscribed()
    setIsSubscribed(alreadySubscribed)
    
    if (!alreadySubscribed) {
      newsletterAnalytics.trackView('homepage')
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")
    setMessageType("")
    
    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage("Please enter a valid email address")
      setMessageType("error")
      setIsLoading(false)
      newsletterAnalytics.trackError('homepage', email, 'Invalid email format')
      return
    }

    try {
      newsletterAnalytics.trackSubmit('homepage', email)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Success
      setMessage("Successfully subscribed! Check your email for confirmation.")
      setMessageType("success")
      setEmail("")
      setSelectedSegment("")
      newsletterAnalytics.trackSuccess('homepage', email)
      newsletterAnalytics.markSubscribed(email)
      setIsSubscribed(true)
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to subscribe. Please try again."
      setMessage(errorMessage)
      setMessageType("error")
      newsletterAnalytics.trackError('homepage', email, errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  // Show subscribed status for already subscribed users
  if (isSubscribed) {
    return (
      <div className="flex items-center justify-center gap-2 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
        <CheckCircle className="w-5 h-5 text-green-400" />
        <span className="text-green-400 font-medium">You're already subscribed! 🎉</span>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      {/* Segment Selection */}
      {segments.length > 0 && (
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2">I'm interested as a:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {segments.map((segment) => (
              <button
                key={segment}
                type="button"
                onClick={() => setSelectedSegment(segment === selectedSegment ? "" : segment)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors duration-200 ${
                  selectedSegment === segment
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-400"
                }`}
                data-analytics="segment-select"
                data-segment={segment}
              >
                {segment}
              </button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500/20"
              aria-describedby={message ? "newsletter-message" : undefined}
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading || !email}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            data-analytics="subscribe-submit"
            data-segment={selectedSegment}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Subscribing...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </div>
            )}
          </Button>
        </div>

        {/* Message Display */}
        {message && (
          <div
            id="newsletter-message"
            className={`p-3 rounded-lg text-sm ${
              messageType === "success"
                ? "bg-green-900/20 border border-green-500/30 text-green-400"
                : "bg-red-900/20 border border-red-500/30 text-red-400"
            }`}
            role={messageType === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            <div className="flex items-center gap-2">
              {messageType === "success" ? (
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
              ) : (
                <Shield className="w-4 h-4 flex-shrink-0" />
              )}
              <span>{message}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  )
} 