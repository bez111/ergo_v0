"use client"

import { useState, useEffect } from "react"

interface DigitalCounterProps {
  value: string
  className?: string
}

export function DigitalCounter({ value, className = "" }: DigitalCounterProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)

    // Simulate digital counter animation
    let currentValue = "0"
    const targetValue = value
    const duration = 1000 // ms
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
        // Generate random numbers/characters during animation
        if (targetValue.startsWith("$")) {
          // For currency values
          const numericPart = Number.parseFloat(targetValue.replace(/[^0-9.]/g, ""))
          const progress = step / steps
          const currentNumeric = (numericPart * progress).toFixed(1)
          currentValue = targetValue.replace(/[0-9.]+/, currentNumeric)
        } else if (/\d+\+$/.test(targetValue)) {
          // For values with + suffix
          const numericPart = Number.parseInt(targetValue.replace(/[^0-9]/g, ""))
          const progress = step / steps
          const currentNumeric = Math.floor(numericPart * progress)
          currentValue = `${currentNumeric}+`
        } else {
          // For other values
          currentValue = targetValue
        }

        setDisplayValue(currentValue)
      }
    }, stepTime)

    return () => clearInterval(interval)
  }, [value])

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
