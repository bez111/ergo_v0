"use client"
/* eslint-disable react-compiler/react-compiler */

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

type Variant = "primary" | "secondary" | "ghost"
type Size = "md" | "lg"

interface EnhancedButtonProps {
  children: React.ReactNode
  href?: string
  external?: boolean
  onClick?: () => void
  variant?: Variant
  size?: Size
  loading?: boolean
  disabled?: boolean
  ariaLabel?: string
  className?: string
  icon?: React.ReactNode
  showArrow?: boolean
}

export function EnhancedButton({
  children,
  href,
  external = false,
  onClick,
  variant = "primary",
  size = "lg",
  loading = false,
  disabled = false,
  ariaLabel,
  className = "",
  icon,
  showArrow = false,
}: EnhancedButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-1 focus-visible:ring-offset-black"

  const variants: Record<Variant, string> = {
    primary:
      "bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-mono uppercase tracking-wide transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed",
    secondary:
      "bg-transparent border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 font-mono uppercase tracking-wide transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed",
    ghost:
      "text-white/80 hover:text-white hover:bg-white/5 disabled:opacity-60 disabled:cursor-not-allowed",
  }

  const sizes: Record<Size, string> = {
    md: "h-9 px-2 text-sm",
    lg: "h-10 px-3 text-sm",
  }

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  const LoadingSpinner = () => (
    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4" 
        fill="none" 
        opacity="0.25" 
      />
      <path 
        d="M22 12a10 10 0 0 1-10 10" 
        fill="currentColor" 
      />
    </svg>
  )

  const ExternalIcon = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path 
        fill="currentColor" 
        d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
      />
      <path 
        fill="currentColor" 
        d="M5 5h5V3H3v7h2V5z"
      />
    </svg>
  )

  const ChevronIcon = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path 
        fill="currentColor" 
        d="M13 5l7 7-7 7v-4H4v-6h9V5z"
      />
    </svg>
  )

  const content = (
    <>
      {loading ? <LoadingSpinner /> : icon}
      <span>{children}</span>
      {!loading && showArrow && (external ? <ExternalIcon /> : <ChevronIcon />)}
    </>
  )

  const commonProps = {
    className: cls,
    "aria-label": ariaLabel,
    "aria-busy": loading ? true : undefined,
    "aria-disabled": disabled ? true : undefined,
  }

  const ButtonContent = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="w-full"
    >
      {children}
    </motion.div>
  )

  if (href) {
    if (external) {
      return (
        <ButtonContent>
          <a
            {...commonProps}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        </ButtonContent>
      )
    } else {
      return (
        <ButtonContent>
          <Link {...commonProps} href={href}>
            {content}
          </Link>
        </ButtonContent>
      )
    }
  }

  return (
    <ButtonContent>
      <button {...commonProps} disabled={disabled} onClick={onClick}>
        {content}
      </button>
    </ButtonContent>
  )
}
