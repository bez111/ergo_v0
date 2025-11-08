"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Check, Code, Shield, Eye } from "lucide-react"

interface CodeExampleProps {
  title: string
  description: string
  code: string
  language?: string
  category: string
}

function CodeExample({ title, description, code, language = "scala", category }: CodeExampleProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <Card className="bg-black border border-white/10 rounded-2xl">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-white text-lg">{title}</CardTitle>
            <p className="text-gray-400 text-sm mt-2">{description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs bg-orange-500/10 border-orange-500/30 text-orange-400">
              {category}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-8 w-8 p-0 hover:bg-orange-500/10"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-4 overflow-x-auto">
          <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
            <code>{code}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}

export function ErgoScriptExamples() {
  const examples = [
    {
      title: "Simple Payment Contract",
      description: "Basic ErgoScript contract for secure payments",
      category: "Basic",
      code: `{
  // Simple payment to public key
  val recipientPK = PK("9f5ZKbECVTm25JTRQHDHGM5ehC8tUw5g1fCBQ4aaE792rWKx")
  
  sigmaProp(recipientPK)
}`
    },
    {
      title: "Multi-Signature Wallet",
      description: "2-of-3 multisig contract using threshold signatures",
      category: "Security",
      code: `{
  val alice = PK("9f5ZKbECVTm25JTRQHDHGM5ehC8tUw5g1fCBQ4aaE792rWKx")
  val bob   = PK("9f4QF8AD1nQ3nJahQVkMj8hFSVVzVom77b52JU7EW71Zexg6")
  val carol = PK("9fRusAarL6KuVrn1R6GU4jqNQQiAdD2nkRCXXAdqC3Ue3U8J")
  
  // At least 2 of 3 signatures required
  atLeast(2, Coll(alice, bob, carol))
}`
    },
    {
      title: "Time-Locked Contract",
      description: "Funds locked until specific block height",
      category: "DeFi",
      code: `{
  val unlockHeight = 750000
  val recipient = PK("9f5ZKbECVTm25JTRQHDHGM5ehC8tUw5g1fCBQ4aaE792rWKx")
  
  sigmaProp(HEIGHT > unlockHeight && recipient)
}`
    }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center gap-2">
          <Code className="w-6 h-6 text-orange-400" />
          ErgoScript Examples
        </h3>
        <p className="text-gray-400 text-sm">
          See how simple and powerful ErgoScript contracts can be
        </p>
      </div>
      
      {examples.map((example, index) => (
        <motion.div
          key={example.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <CodeExample {...example} />
        </motion.div>
      ))}
      
    </div>
  )
}
