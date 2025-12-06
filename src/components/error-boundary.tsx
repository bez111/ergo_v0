"use client"

/* eslint-disable react-compiler/react-compiler, react/no-unescaped-entities */

import React from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

function DefaultErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="max-w-md mx-auto text-center p-6">
        <div className="text-red-400 text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-gray-300 mb-6">
          We're sorry, but something unexpected happened. Please try refreshing the page.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Refresh page
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-gray-400 hover:text-gray-300">
              Error details (development only)
            </summary>
            <pre className="mt-2 p-3 bg-neutral-800 rounded text-xs text-red-300 overflow-auto">
              {error.message}
              {'\n'}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}

// Simple wrapper that catches errors and shows fallback
export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  try {
    return <>{children}</>
  } catch (error) {
    console.error('Error caught by ErrorBoundary:', error)
    return <DefaultErrorFallback error={error as Error} />
  }
} 