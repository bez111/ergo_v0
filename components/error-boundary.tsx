"use client"

import React from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
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
            onClick={resetError}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Try again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-neutral-700 hover:bg-neutral-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
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
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
      // Here you would typically send to error reporting service
      // Example: Sentry.captureException(error, { contexts: { react: errorInfo } })
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: null })
  }

  override render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
} 