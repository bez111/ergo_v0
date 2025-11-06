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
  className?: string
}

export function FinalCTASimple({ 
  title = "Join the resistance",
  description = "Fight for financial freedom. Build censorship-resistant money. No banks, no middlemen.",
  className = ""
}: EmailCaptureProps = {}) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section className={`py-20 px-4 ${className}`}>
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
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
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
                      className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 rounded-xl border border-orange-500/50 transition-all duration-300"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Subscribe
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}