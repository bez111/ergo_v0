"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Shield } from "lucide-react"

export function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")
    
    // Handle subscription logic here
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log("Subscribing email:", email)
      setMessage("Successfully subscribed!")
      setEmail("")
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          className="flex-grow bg-neutral-900/50 border-2 border-orange-500/50 text-white font-mono placeholder:text-gray-500 focus:border-orange-500 backdrop-blur-sm"
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="gap-2 bg-transparent border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-mono uppercase tracking-wider transition-all duration-200"
        >
          {isLoading ? "..." : "SUBSCRIBE"}
          <Send className="h-4 w-4" />
        </Button>
      </form>
      
      {message && (
        <p className={`text-sm font-mono ${message.includes("Success") ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
      
      <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-mono">
        <Shield className="h-4 w-4 text-orange-400" />
        <span>YOUR DATA IS PRIVATE AND WILL NEVER BE SHARED</span>
      </div>
    </div>
  )
} 