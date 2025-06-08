"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Send, Sparkles } from "lucide-react"
import { useState } from "react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-md border border-orange-500/20 p-8 mb-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-400/20 to-orange-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2 justify-center lg:justify-start mb-4"
          >
            <Sparkles className="w-6 h-6 text-orange-400" />
            <h4 className="text-2xl font-bold text-white">Stay Updated</h4>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/80 text-lg mb-6 leading-relaxed"
          >
            Get the latest Ergo articles, tutorials, and ecosystem updates delivered directly to your inbox.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/20 focus:border-orange-400/50 focus:outline-none transition-all duration-300"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubscribed}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 justify-center disabled:opacity-50"
            >
              {isSubscribed ? (
                <>
                  <Sparkles className="w-4 h-4" />
                  Subscribed!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Subscribe
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hidden lg:block"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400/20 to-red-600/20 backdrop-blur-md border border-orange-500/20 flex items-center justify-center">
            <Mail className="w-16 h-16 text-orange-400" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
