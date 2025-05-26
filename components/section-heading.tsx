"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  text: string
  className?: string
}

export function SectionHeading({ text, className }: SectionHeadingProps) {
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitching(true)
        setTimeout(() => setGlitching(false), 150)
      }
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className={cn("relative flex justify-center mb-8", className)}>
      {/* Horizontal lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-primary/30"></div>

      {/* Container with background */}
      <div className="relative px-4 bg-black z-10">
        <h2
          className={cn(
            "text-3xl font-bold tracking-widest uppercase text-white font-mono relative",
            glitching && "animate-pulse",
          )}
        >
          {/* Digital noise background */}
          <span className="absolute inset-0 bg-black/50 backdrop-blur-sm -z-10"></span>

          {/* Main text with digital effect */}
          <span className="relative z-10 inline-block">
            {/* Text shadow for depth */}
            <span className="absolute -left-[3px] -top-[3px] text-primary/20 opacity-70">{text}</span>

            {/* Main text */}
            <span className="relative">
              {/* Prefix */}
              <span className="text-primary mr-2">[</span>

              {/* Text with scan effect */}
              <span className="relative">
                {text}
                <span
                  className={cn(
                    "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent bg-[length:50%_100%] bg-no-repeat animate-[scan_3s_ease-in-out_infinite]",
                    glitching && "opacity-70",
                  )}
                ></span>
              </span>

              {/* Suffix */}
              <span className="text-primary ml-2">]</span>
            </span>
          </span>

          {/* Glitch elements that appear randomly */}
          {glitching && (
            <>
              <span className="absolute top-0 left-[10%] text-cyan-500 opacity-80 text-xs">01100101</span>
              <span className="absolute bottom-0 right-[15%] text-primary opacity-80 text-xs">10110</span>
            </>
          )}
        </h2>

        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary"></div>
      </div>
    </div>
  )
}
