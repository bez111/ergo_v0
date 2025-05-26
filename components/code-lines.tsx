"use client"

import { useEffect, useState } from "react"

export function CodeLines() {
  const [codeLines, setCodeLines] = useState<string[]>([])

  useEffect(() => {
    // Generate random binary/hex code lines
    const generateCodeLines = () => {
      const lines: string[] = []
      const lineCount = 50

      for (let i = 0; i < lineCount; i++) {
        // Randomly choose between binary and hex
        if (Math.random() > 0.5) {
          // Binary
          let line = ""
          for (let j = 0; j < 30; j++) {
            line += Math.round(Math.random()).toString()
          }
          lines.push(line)
        } else {
          // Hex
          let line = ""
          const hexChars = "0123456789ABCDEF"
          for (let j = 0; j < 20; j++) {
            line += hexChars[Math.floor(Math.random() * hexChars.length)]
          }
          lines.push(line)
        }
      }

      return lines
    }

    setCodeLines(generateCodeLines())
  }, [])

  return (
    <div className="absolute top-0 right-0 h-full w-40 overflow-hidden opacity-20 pointer-events-none">
      <div className="font-mono text-xs text-primary whitespace-pre animate-scroll-y">
        {codeLines.map((line, index) => (
          <div key={index} className="opacity-70">
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}
