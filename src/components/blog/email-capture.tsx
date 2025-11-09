"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle, Mail, Send } from "lucide-react"

interface EmailCaptureProps {
  title?: string
  description?: string
}

export function EmailCapture({ 
  title = "Join the resistance",
  description = "Fight for financial freedom. Build censorship-resistant money. No banks, no middlemen."
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  
  const handleEmailSubmit = async (e: React.FormEvent) => {
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
          source: 'blog_email_capture',
          utmSource: 'blog',
          utmMedium: 'email_capture',
          utmCampaign: 'ergo_newsletter'
        })
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setEmail('')
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        setMessage(result.error || 'Subscription failed. Please try again.')
      }
    } catch (error) {
      setMessage('Network error. Please try again.')
      console.error('Email subscription error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-black/80 border-white/10 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 backdrop-blur-sm rounded-3xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
                </div>
                <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                  {description}
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-green-400 font-semibold">Thank you for subscribing!</p>
                  <p className="text-gray-300 text-sm">You'll receive updates about the Ergo community.</p>
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
                  <div className="flex gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-black/60 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400/50 focus:ring-orange-400/20 rounded-xl"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isLoading || !email}
                      className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 rounded-xl border border-orange-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-black border-t-transparent" />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                      {isLoading ? 'Subscribing...' : 'Subscribe'}
                    </Button>
                  </div>
                  {message && (
                    <div className="mt-3 text-sm text-red-400 text-center">
                      {message}
                    </div>
                  )}
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
