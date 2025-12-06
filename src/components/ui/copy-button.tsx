"use client"

import React from "react"
import { Copy, Check } from "lucide-react"

interface CopyButtonProps {
  text: string
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "inline"
}

export const CopyButton: React.FC<CopyButtonProps> = ({ 
  text, 
  className = "",
  size = "md",
  variant = "default"
}) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const sizeClasses = {
    sm: "p-1",
    md: "p-2",
    lg: "p-3"
  }

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  }

  if (variant === "inline") {
    return (
      <button
        onClick={handleCopy}
        className={`inline-flex items-center gap-1 text-xs hover:text-orange-400 transition-colors min-h-[44px] ${className}`}
        aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
      >
        {copied ? (
          <>
            <Check className={iconSizes[size]} aria-hidden="true" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className={iconSizes[size]} aria-hidden="true" />
            <span>Copy</span>
          </>
        )}
      </button>
    )
  }

  return (
    <button
      onClick={handleCopy}
      className={`${sizeClasses[size]} rounded bg-neutral-800 hover:bg-neutral-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${className}`}
      aria-label={copied ? "Code copied to clipboard" : "Copy code to clipboard"}
    >
      {copied ? (
        <Check className={`${iconSizes[size]} text-green-400`} aria-hidden="true" />
      ) : (
        <Copy className={`${iconSizes[size]} text-neutral-300`} aria-hidden="true" />
      )}
    </button>
  )
} 