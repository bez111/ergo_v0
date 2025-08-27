"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Send, CheckCircle } from "lucide-react"
import { useState } from "react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }
    setError("")
    setIsSubscribed(true)
    // In a real app, you'd send the email to your backend here.
    setTimeout(() => {
        // Reset form after a delay
        setIsSubscribed(false)
        setEmail("")
    }, 5000)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl bg-gray-900/50 border border-gray-800 p-8 md:p-12 overflow-hidden"
    >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/5 via-transparent to-cyan-500/5 opacity-50"/>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Ahead of the Curve
            </h2>
            <p className="text-gray-300 text-lg mb-8">
                Subscribe to our newsletter for the latest Ergo news, technical deep-dives, and community updates.
            </p>

            {isSubscribed ? (
                <div className="flex flex-col items-center justify-center p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <CheckCircle className="w-12 h-12 text-green-400 mb-4"/>
                    <h3 className="text-2xl font-bold text-white">You're Subscribed!</h3>
                    <p className="text-gray-300">Thanks for joining our community. Check your inbox for a confirmation.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                if (error) setError("")
                            }}
                            placeholder="your.email@example.com"
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-800/60 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors transform hover:scale-105 duration-300 flex items-center justify-center gap-2"
                    >
                        <Send className="w-4 h-4" />
                        <span>Subscribe</span>
                    </button>
                </form>
            )}
             {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
        </div>
    </motion.section>
  )
}
