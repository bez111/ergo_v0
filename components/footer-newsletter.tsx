"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Shield, CheckCircle } from "lucide-react"
import { newsletterAnalytics } from "@/lib/newsletter-analytics"
import { usePathname } from "next/navigation"

interface FooterNewsletterProps {
  showOnHomepage?: boolean // Показывать ли на главной странице
}

export function FooterNewsletter({ showOnHomepage = false }: FooterNewsletterProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const pathname = usePathname()

  // Check if user is already subscribed and track view
  useEffect(() => {
    const alreadySubscribed = newsletterAnalytics.isSubscribed()
    setIsSubscribed(alreadySubscribed)
    
    if (!alreadySubscribed) {
      newsletterAnalytics.trackView('footer_link')
    }
  }, [])

  // Показывать одинаково на всех страницах

  // Показать статус подписки для уже подписанных
  if (isSubscribed) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary">NEWSLETTER</h3>
        <div className="flex items-center space-x-2 text-sm text-green-400">
          <CheckCircle className="h-4 w-4" />
          <span>SUBSCRIBED ✓</span>
        </div>
        <p className="text-xs text-muted-foreground">
          You're already subscribed to our newsletter.
        </p>
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
      setMessage("Please enter a valid email address")
      setMessageType("error")
      setIsLoading(false)
      return
    }

    try {
      newsletterAnalytics.trackSubmit('footer_link', email)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mark as subscribed
      newsletterAnalytics.markSubscribed(email)
      newsletterAnalytics.trackSuccess('footer_link', email)
      
      setMessage("Successfully subscribed! 🎉")
      setMessageType("success")
      setIsSubscribed(true)
      setEmail("")
    } catch (error) {
      newsletterAnalytics.trackError('footer_link', email, error instanceof Error ? error.message : 'Unknown error')
      setMessage("Something went wrong. Please try again.")
      setMessageType("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">NEWSLETTER</h3>
      <p className="text-sm text-muted-foreground">
        Stay updated with the latest news and developments from the Ergo ecosystem.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <label htmlFor="footer-email" className="sr-only">
            Email address
          </label>
          <Input
            id="footer-email"
            type="email"
            placeholder="ENTER YOUR EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black/50 border-primary/30 text-white placeholder:text-muted-foreground focus:border-primary pr-12"
            disabled={isLoading}
            required
          />
          <Button
            type="submit"
            size="sm"
            disabled={isLoading || !email}
            className="absolute right-1 top-1 h-8 w-8 p-0 bg-primary hover:bg-primary/80"
          >
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <Shield className="h-3 w-3" />
          <span>YOUR DATA IS PRIVATE</span>
        </div>
        
        {message && (
          <div 
            className={`text-xs ${messageType === 'success' ? 'text-green-400' : 'text-red-400'}`}
            role="alert"
            aria-live="polite"
          >
            {message}
          </div>
        )}
      </form>
    </div>
  )
} 