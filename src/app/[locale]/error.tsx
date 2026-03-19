'use client'

import Link from "next/link"
import { Home, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-8xl md:text-9xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-white bg-clip-text text-transparent">
              500
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Something went wrong
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-xl mx-auto leading-relaxed">
            An unexpected error occurred. Please try again or return to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white hover:bg-orange-600 font-mono uppercase tracking-wider border-2 border-orange-500 px-6 py-3 rounded-md transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-mono uppercase tracking-wider px-6 py-3 rounded-md transition-colors"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
