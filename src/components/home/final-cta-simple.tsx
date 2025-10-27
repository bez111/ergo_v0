"use client"

import { useState } from "react"
import Link from "next/link"
import { CyberButton } from "@/components/animations/cyber-button"

export function FinalCTASimple() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")
    
    try {
      // Simulate email submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus("success")
      setMessage("Thanks! We'll keep you updated on Ergo developments.")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-950 via-black to-neutral-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-orange-400/8 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/3 to-transparent rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">Join the</span> <span className="text-orange-400">resistance</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Fight for financial freedom. Build censorship-resistant money. No banks, no middlemen.
        </p>

        {/* Email capture form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3 p-1 bg-neutral-900/60 backdrop-blur-sm border border-neutral-700 rounded-xl shadow-2xl">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-base"
              disabled={status === "loading"}
            />
            <CyberButton
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-4 bg-orange-500 text-black hover:bg-transparent hover:text-orange-500 hover:border-orange-500 font-mono uppercase tracking-wider border-2 border-orange-500 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap h-full"
            >
              {status === "loading" ? "..." : "Join the resistance"}
            </CyberButton>
          </div>
          
          {message && (
            <p className={`mt-4 text-sm text-center ${
              status === "success" ? "text-green-400" : "text-red-400"
            }`}>
              {message}
            </p>
          )}
        </form>



      </div>
    </section>
  )
}