"use client"

import { BookOpen } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <BookOpen className="w-24 h-24 mx-auto text-orange-500" />
        </div>
        <h1 className="text-5xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-gray-400 mb-8">
          This section is currently under construction.
        </p>
        <p className="text-lg text-gray-500">
          Comprehensive developer documentation is coming soon.
        </p>
      </div>
    </div>
  )
} 