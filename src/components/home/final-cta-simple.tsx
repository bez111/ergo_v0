"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle, Mail, Send } from "lucide-react"
import { FaDiscord, FaTelegram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/config/site-config"

interface EmailCaptureProps {
  title?: string
  description?: string
  className?: string
}

function SocialMediaFollowingSection() {
  return (
    <div className="mt-8" >
      <p className="text-gray-300 text-sm mb-4">Follow for daily updates</p>
      <div className="flex justify-center items-center gap-4">
        <motion.a
          href={siteConfig.twitterLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black/60 border border-white/20 rounded-xl flex items-center justify-center text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Follow us on Twitter"
        >
          <FaXTwitter className="w-4 h-4" />
        </motion.a>

        <motion.a
          href={siteConfig.telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black/60 border border-white/20 rounded-xl flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Join our Telegram"
        >
          <FaTelegram className="w-4 h-4" />
        </motion.a>

        <motion.a
          href={siteConfig.discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black/60 border border-white/20 rounded-xl flex items-center justify-center text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Join our Discord"
        >
          <FaDiscord className="w-4 h-4" />
        </motion.a>
      </div>
    </div>
  )
}

export function FinalCTASimple({
  title = "Join the Ergo Builders List",
  description = "Weekly builder updates: guides, patterns, tools. No spam.",
  className = ""
}: EmailCaptureProps = {}) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isAlreadySubscribed, setIsAlreadySubscribed] = useState(false)
  const [emailError, setEmailError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Check if already subscribed on mount
  useEffect(() => {
    const subscribed = localStorage.getItem('ergo-newsletter-subscribed')
    if (subscribed === 'true') {
      setIsAlreadySubscribed(true)
    }
  }, [])

  // Intersection Observer for autofocus (disabled to prevent interference with navigation)
  // useEffect(() => {
  //   if (!sectionRef.current || isAlreadySubscribed || hasAutoFocused) return
  //   const observer = new IntersectionObserver(...)
  //   observer.observe(sectionRef.current)
  //   return () => observer.disconnect()
  // }, [isAlreadySubscribed, hasAutoFocused])

  // Hotkeys for focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === '/' || e.key.toLowerCase() === 's') && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const target = e.target as HTMLElement
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          e.preventDefault()
          inputRef.current?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailBlur = () => {
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !validateEmail(email)) {
      setEmailError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    setEmailError('')

    try {
      // Call our API endpoint to subscribe via Beehiiv
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'final_cta_simple',
          utmSource: 'website',
          utmMedium: 'cta_form',
          utmCampaign: 'ergo_builders_list'
        })
      })

      const result = await response.json()

      if (result.success) {
        // Save subscription status
        localStorage.setItem('ergo-newsletter-subscribed', 'true')
        setIsSubmitted(true)
        setIsAlreadySubscribed(true)
        setEmail('')
      } else {
        setEmailError(result.error || 'Subscription failed. Please try again.')
      }
    } catch (error) {
      setEmailError('Network error. Please try again.')
      console.error('Email subscription error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Show "already subscribed" state
  if (isAlreadySubscribed && !isSubmitted) {
    return (
      <section ref={sectionRef} className={`py-20 px-4 ${className}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="bg-black/80 border-white/10 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 backdrop-blur-sm rounded-3xl">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">You're on the list ✓</h2>
                  </div>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Thanks for being part of the Ergo builders community!
                  </p>
                </div>

                {/* Social Media Follow Section */}
                <SocialMediaFollowingSection />

              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className={`py-20 px-4 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-black/80 border-white/10 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 backdrop-blur-sm rounded-3xl">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
                </div>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                  {description}
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-green-400 font-semibold">✓ Subscribed</p>
                  <p className="text-gray-300 text-sm">Welcome to the Ergo builders community!</p>
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      ref={inputRef}
                      type="email"
                      placeholder="you@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={handleEmailBlur}
                      className="flex-1 bg-black/60 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400/50 focus:ring-orange-400/20 rounded-xl"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isLoading || !!emailError}
                      className="bg-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:shadow-orange-500/25 hover:shadow-lg text-black font-semibold px-6 rounded-xl border border-orange-500/50 transition-all duration-300 min-w-[170px]"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 mr-2 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                      {isLoading ? 'Subscribing...' : 'Subscribe'}
                    </Button>
                  </div>
                  {emailError && (
                    <p className="text-orange-400/70 text-sm mt-2">{emailError}</p>
                  )}
                </form>
              )}

              {/* Social Media Follow Section */}
              <SocialMediaFollowingSection />

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}