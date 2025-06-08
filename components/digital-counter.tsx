"use client"

import { useState, useEffect } from "react"

interface DigitalCounterProps {
  value: string | number
  suffix?: string
  duration?: number
  className?: string
}

export function DigitalCounter({ value, suffix = "", duration = 1000, className = "" }: DigitalCounterProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)

    // Convert value to string for consistent handling
    const targetValue = String(value) + suffix
    const steps = 10
    const stepTime = duration / steps

    let step = 0
    const interval = setInterval(() => {
      step++

      if (step >= steps) {
        clearInterval(interval)
        setDisplayValue(targetValue)
        setIsAnimating(false)
      } else {
        // Generate progressive values during animation
        if (targetValue.startsWith("$")) {
          // For currency values
          const numericPart = Number.parseFloat(targetValue.replace(/[^0-9.]/g, ""))
          const progress = step / steps
          const currentNumeric = (numericPart * progress).toFixed(1)
          setDisplayValue(targetValue.replace(/[0-9.]+/, currentNumeric))
        } else if (/\d+/.test(targetValue)) {
          // For numeric values (with or without suffix)
          const numericPart = Number.parseInt(targetValue.replace(/[^0-9]/g, ""))
          const progress = step / steps
          const currentNumeric = Math.floor(numericPart * progress)
          const suffixPart = targetValue.replace(/[0-9]/g, "")
          setDisplayValue(currentNumeric + suffixPart)
        } else {
          // For other values
          setDisplayValue(targetValue)
        }
      }
    }, stepTime)

    return () => clearInterval(interval)
  }, [value, suffix, duration])

  return (
    <div className={`digital-counter font-mono ${className}`}>
      <div className="text-lg font-bold text-primary relative">
        <span className={isAnimating ? "animate-pulse" : ""}>{displayValue}</span>
        {isAnimating && (
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent bg-[length:50%_100%] bg-no-repeat animate-[scan_1s_ease-in-out_infinite]"></span>
        )}
      </div>
    </div>
  )
}
