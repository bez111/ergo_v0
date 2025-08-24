"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Shield, CheckCircle } from "lucide-react"
import { newsletterAnalytics } from "@/lib/newsletter-analytics"

export function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Check if user is already subscribed and track view
  useEffect(() => {
    const alreadySubscribed = newsletterAnalytics.isSubscribed()
    setIsSubscribed(alreadySubscribed)
    
    if (!alreadySubscribed) {
      // Track form view for analytics
      newsletterAnalytics.trackView('homepage')
    }
  }, [])

  // Don't render form if user is already subscribed
  if (isSubscribed) {
    return (
      <div className="w-full max-w-md space-y-4">
        <div className="text-center p-6 bg-green-400/10 border border-green-400/30 rounded-lg">
          <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
          <p className="text-green-400 font-mono">
            You're already subscribed! 🎉
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Check your email for the latest updates
          </p>
        </div>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")
    setMessageType("")
    
    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      const errorMsg = "Please enter a valid email address"
      setMessage(errorMsg)
      setMessageType("error")
      setIsLoading(false)
      
      // Track error
      newsletterAnalytics.trackError('homepage', errorMsg)
      return
    }
    
    // Track submission
    newsletterAnalytics.trackSubmit('homepage', email)
    
    // Handle subscription logic here
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Email subscription processed
      const successMsg = "🎉 Successfully subscribed! Check your email for confirmation."
      setMessage(successMsg)
      setMessageType("success")
      setIsSubscribed(true)
      
      // Track success
      newsletterAnalytics.trackSuccess('homepage', email)
      setEmail("")
    } catch (error) {
      const errorMsg = "Something went wrong. Please try again."
      setMessage(errorMsg)
      setMessageType("error")
      
      // Track error
      newsletterAnalytics.trackError('homepage', errorMsg)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-grow relative">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address for newsletter subscription
          </label>
          <Input
            id="newsletter-email"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="bg-neutral-900/50 border-2 border-orange-500/50 text-white font-mono placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 backdrop-blur-sm transition-all duration-200"
            aria-describedby={message ? "newsletter-message" : undefined}
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading || !email}
          className="gap-2 bg-transparent border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-mono uppercase tracking-wider transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Subscribe to newsletter"
        >
          {isLoading ? (
            <span className="animate-spin">⟳</span>
          ) : messageType === "success" ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <>
              SUBSCRIBE
              <Send className="h-4 w-4" />
            </>
          )}
        </Button>
      </form>
      
      {/* Message with aria-live for screen readers */}
      {message && (
        <div 
          id="newsletter-message"
          role="status"
          aria-live="polite"
          className={`text-sm font-mono p-3 rounded-lg border ${
            messageType === "success" 
              ? "text-green-400 bg-green-400/10 border-green-400/30" 
              : "text-red-400 bg-red-400/10 border-red-400/30"
          }`}
        >
          {message}
        </div>
      )}
      
      <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-mono">
        <Shield className="h-4 w-4 text-orange-400" />
        <span>YOUR DATA IS PRIVATE AND WILL NEVER BE SHARED</span>
      </div>
    </div>
  )
} 