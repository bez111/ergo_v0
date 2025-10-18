"use client"

import React from "react"
import { CopyButton } from "./copy-button"

interface CodeBlockProps {
  children: string
  language?: string
  showLineNumbers?: boolean
  className?: string
  filename?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  language = "text",
  showLineNumbers = false,
  className = "",
  filename
}) => {
  const lines = children.trim().split('\n')

  return (
    <div className="relative">
      {filename && (
        <div className="bg-neutral-800 border-b border-neutral-700 px-4 py-2 rounded-t-lg">
          <span className="text-gray-400 text-sm font-mono">{filename}</span>
        </div>
      )}
      <div className={`bg-neutral-900 ${filename ? 'rounded-b-lg' : 'rounded-lg'} overflow-x-auto ${className}`}>
        <CopyButton text={children} className="absolute top-2 right-2" />
        <pre className={`p-4 text-sm font-mono ${language ? `language-${language}` : ''}`}>
          {showLineNumbers ? (
            <code className="block">
              {lines.map((line, index) => (
                <div key={index} className="flex">
                  <span className="text-gray-500 mr-4 select-none w-8 text-right">{index + 1}</span>
                  <span className="text-gray-300">{line}</span>
                </div>
              ))}
            </code>
          ) : (
            <code className="text-gray-300">{children}</code>
          )}
        </pre>
      </div>
    </div>
  )
} 