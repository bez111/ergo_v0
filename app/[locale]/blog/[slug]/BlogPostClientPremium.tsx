"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowLeft, ArrowRight, ArrowUp, Copy, Check, Share2, 
  Twitter, Linkedin, Facebook, Clock, Calendar, Eye,
  BookOpen, Hash, Star, ThumbsUp, MessageCircle,
  ChevronRight, Info, AlertTriangle, Lightbulb,
  Code2, ExternalLink, Download, Search
} from "lucide-react"
import type { BlogPost } from "../_lib/blog-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface BlogPostClientPremiumProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

// Code block component with copy functionality
function CodeBlock({ code, language, filename }: { code: string; language: string; filename?: string }) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-6">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 border-b border-neutral-700 rounded-t-lg">
          <span className="text-sm font-mono text-neutral-400">{filename}</span>
          <Badge variant="secondary" className="text-xs">{language}</Badge>
        </div>
      )}
      <div className={cn("relative", !filename && "rounded-lg")}>
        <pre className={cn(
          "overflow-x-auto p-4 bg-neutral-900 text-sm",
          !filename && "rounded-lg",
          filename && "rounded-b-lg"
        )}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleCopy}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

// Callout component
function Callout({ 
  type = 'note', 
  title, 
  children 
}: { 
  type?: 'note' | 'warning' | 'pro'
  title?: string
  children: React.ReactNode 
}) {
  const config = {
    note: {
      icon: Info,
      className: "bg-blue-500/10 border-l-4 border-blue-500",
      titleClass: "text-blue-400"
    },
    warning: {
      icon: AlertTriangle,
      className: "bg-amber-500/10 border-l-4 border-amber-500",
      titleClass: "text-amber-400"
    },
    pro: {
      icon: Lightbulb,
      className: "bg-green-500/10 border-l-4 border-green-500",
      titleClass: "text-green-400"
    }
  }

  const { icon: Icon, className, titleClass } = config[type]

  return (
    <div className={cn("my-6 p-4 rounded-r-lg", className)}>
      <div className="flex items-start gap-3">
        <Icon className={cn("w-5 h-5 mt-0.5 shrink-0", titleClass)} />
        <div className="flex-1">
          {title && <p className={cn("font-semibold mb-1", titleClass)}>{title}</p>}
          <div className="text-neutral-300">{children}</div>
        </div>
      </div>
    </div>
  )
}

// Newsletter CTA component
function NewsletterCTA() {
  return (
    <div className="my-12 p-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold mb-2">Get ErgoScript Updates</h3>
          <p className="text-neutral-300">Weekly insights on smart contract development</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          Subscribe
        </Button>
      </div>
    </div>
  )
}

// Author box component
function AuthorBox({ author }: { author: BlogPost['author'] }) {
  return (
    <div className="mt-16 p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center text-xl font-bold">
          {author.avatar ? (
            <Image src={author.avatar} alt={author.name} width={64} height={64} className="rounded-full" />
          ) : (
            author.name.charAt(0)
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold">{author.name}</h3>
          {author.role && <p className="text-sm text-neutral-400 mb-2">{author.role}</p>}
          <p className="text-neutral-300">
            Passionate about blockchain technology and decentralized systems. 
            Building the future of programmable money on Ergo.
          </p>
          <div className="mt-3 flex gap-4">
            <Link href="#" className="text-sm text-orange-400 hover:text-orange-300">
              More articles →
            </Link>
            {author.social?.twitter && (
              <Link href={`https://twitter.com/${author.social.twitter}`} className="text-sm text-neutral-400 hover:text-white">
                @{author.social.twitter}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function BlogPostClientPremium({ post, relatedPosts }: BlogPostClientPremiumProps) {
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [toc, setToc] = useState<Array<{ id: string; text: string; level: number }>>([])
  const contentRef = useRef<HTMLDivElement>(null)

  // Generate TOC from mock content
  useEffect(() => {
    // Mock TOC for demo - in production, parse from actual content
    setToc([
      { id: "introduction", text: "Introduction", level: 2 },
      { id: "basic-concepts", text: "Basic Concepts", level: 2 },
      { id: "syntax-overview", text: "Syntax Overview", level: 3 },
      { id: "data-types", text: "Data Types", level: 3 },
      { id: "advanced-patterns", text: "Advanced Patterns", level: 2 },
      { id: "multi-sig", text: "Multi-Signature Contracts", level: 3 },
      { id: "defi-patterns", text: "DeFi Patterns", level: 3 },
      { id: "best-practices", text: "Best Practices", level: 2 },
      { id: "testing", text: "Testing & Deployment", level: 2 },
      { id: "faq", text: "FAQ", level: 2 }
    ])
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(progress)
      setShowScrollTop(window.scrollY > 500)

      // Update active section
      const sections = toc.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(toc[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [toc])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-800 z-50">
        <div 
          className="h-full bg-orange-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
          role="progressbar"
          aria-valuenow={readingProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {/* Skip to content */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-500 text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>

      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 pt-20 pb-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-neutral-400">
          <li><Link href="/" className="hover:text-white">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/blog?category=${post.category.toLowerCase()}`} className="hover:text-white">{post.category}</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-neutral-200" aria-current="page">{post.title}</li>
        </ol>
      </nav>

      <main id="main" className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-12 gap-8">
          {/* TOC Desktop - Sticky Left Sidebar */}
          <aside className="hidden lg:block col-span-3">
            <nav 
              className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto"
              aria-label="Table of contents"
            >
              <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                On this page
              </h2>
              <ul className="space-y-2">
                {toc.map(item => (
                  <li key={item.id} className={cn(item.level === 3 && "ml-4")}>
                    <a 
                      href={`#${item.id}`}
                      className={cn(
                        "block py-1 text-sm transition-all duration-200",
                        "border-l-2 pl-4 -ml-px",
                        activeSection === item.id 
                          ? "border-orange-500 text-orange-500 font-medium" 
                          : "border-transparent text-neutral-400 hover:text-white hover:border-neutral-600"
                      )}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Article Content */}
          <article className="col-span-12 lg:col-span-7">
            <header>
              {/* Category Badge */}
              <Badge variant="secondary" className="mb-4 bg-orange-500/10 text-orange-400 border-orange-500/20">
                {post.category}
              </Badge>

              {/* Title */}
              <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold leading-[0.95] tracking-tight mb-4">
                {post.title}
              </h1>

              {/* Subtitle/Dek */}
              <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                Learn how to write secure and efficient smart contracts with ErgoScript. 
                This comprehensive guide covers everything from basic syntax to advanced DeFi patterns.
              </p>

              {/* Meta Line */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 pb-6 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-semibold">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <Link href={`/blog/author/${post.author.id}`} className="text-neutral-300 hover:text-white font-medium">
                      {post.author.name}
                    </Link>
                    {post.author.role && <div className="text-xs">{post.author.role}</div>}
                  </div>
                </div>
                <span>•</span>
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
                <span>•</span>
                <span>{post.readTime} min read</span>
                {post.views && (
                  <>
                    <span>•</span>
                    <span>{(post.views / 1000).toFixed(1)}k views</span>
                  </>
                )}
              </div>
            </header>

            {/* Hero Image */}
            {post.image && (
              <figure className="my-8">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="w-full aspect-video object-cover rounded-lg"
                  priority
                />
                <figcaption className="mt-2 text-sm text-center text-neutral-500">
                  ErgoScript development environment
                </figcaption>
              </figure>
            )}

            {/* TOC Mobile */}
            <details className="lg:hidden my-8 p-4 bg-neutral-900 rounded-lg border border-neutral-800">
              <summary className="font-semibold cursor-pointer flex items-center justify-between">
                Table of Contents
                <ChevronRight className="w-4 h-4" />
              </summary>
              <nav className="mt-4 space-y-2" aria-label="Table of contents">
                {toc.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={cn(
                      "block py-1 text-sm text-neutral-400 hover:text-white",
                      item.level === 3 && "ml-4"
                    )}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </details>

            {/* Article Body */}
            <div ref={contentRef} className="prose prose-invert prose-lg max-w-none
              prose-headings:scroll-mt-24
              prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline
              prose-code:text-orange-400 prose-code:bg-neutral-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-transparent prose-pre:p-0
              prose-ul:my-4 prose-ol:my-4
              prose-li:text-neutral-300
              prose-strong:text-white prose-strong:font-semibold
            ">
              {/* Introduction */}
              <section id="introduction">
                <h2>Introduction</h2>
                <p>
                  ErgoScript is a powerful smart contract language that combines the security of Bitcoin's UTXO model 
                  with the flexibility needed for complex DeFi applications. Unlike account-based models, ErgoScript 
                  provides predictable execution costs and enhanced security through its functional approach.
                </p>
                <p>
                  In this guide, you'll learn how to write secure contracts in <strong>30% less code</strong> compared 
                  to traditional smart contract languages, while maintaining the highest security standards.
                </p>
              </section>

              {/* Basic Concepts */}
              <section id="basic-concepts" className="mt-12">
                <h2>Basic Concepts</h2>
                <p>
                  Before diving into ErgoScript, let's establish the fundamental concepts that make it unique.
                </p>

                <h3 id="syntax-overview">Syntax Overview</h3>
                <p>
                  ErgoScript uses a Scala-like syntax that's both familiar and powerful. Here's a simple example:
                </p>

                <CodeBlock 
                  language="scala"
                  filename="simple-lock.es"
                  code={`{
  val deadline = 1000000
  val pkAlice = proveDlog(alicePubKey)
  
  sigmaProp(
    HEIGHT > deadline && pkAlice
  )
}`}
                />

                <Callout type="note" title="Key Insight">
                  ErgoScript contracts are predicates that return true or false. If true, the transaction is valid.
                </Callout>

                <h3 id="data-types">Data Types</h3>
                <p>
                  ErgoScript supports a rich type system including integers, booleans, collections, and cryptographic types:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-800">
                        <th className="text-left py-2 px-4">Type</th>
                        <th className="text-left py-2 px-4">Description</th>
                        <th className="text-left py-2 px-4">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-800">
                        <td className="py-2 px-4 font-mono text-sm">Int</td>
                        <td className="py-2 px-4">64-bit integer</td>
                        <td className="py-2 px-4 font-mono text-sm">42</td>
                      </tr>
                      <tr className="border-b border-neutral-800">
                        <td className="py-2 px-4 font-mono text-sm">Boolean</td>
                        <td className="py-2 px-4">True or false</td>
                        <td className="py-2 px-4 font-mono text-sm">true</td>
                      </tr>
                      <tr className="border-b border-neutral-800">
                        <td className="py-2 px-4 font-mono text-sm">GroupElement</td>
                        <td className="py-2 px-4">Public key</td>
                        <td className="py-2 px-4 font-mono text-sm">pkAlice</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Inline CTA after 30% */}
              <NewsletterCTA />

              {/* Advanced Patterns */}
              <section id="advanced-patterns" className="mt-12">
                <h2>Advanced Patterns</h2>
                <p>
                  Now that we've covered the basics, let's explore advanced patterns used in production DeFi protocols.
                </p>

                <h3 id="multi-sig">Multi-Signature Contracts</h3>
                <p>
                  Multi-signature contracts are essential for secure treasury management and DAO governance:
                </p>

                <CodeBlock 
                  language="scala"
                  filename="multisig-2-of-3.es"
                  code={`{
  val alice = proveDlog(alicePubKey)
  val bob = proveDlog(bobPubKey)
  val carol = proveDlog(carolPubKey)
  
  atLeast(
    2,
    Coll(alice, bob, carol)
  )
}`}
                />

                <Callout type="warning" title="Security Note">
                  Always validate public keys and consider time-locks for additional security in multi-sig setups.
                </Callout>

                <h3 id="defi-patterns">DeFi Patterns</h3>
                <p>
                  ErgoScript excels at implementing complex DeFi logic. Here's a simple AMM pool contract:
                </p>

                <Tabs defaultValue="contract" className="my-6">
                  <TabsList>
                    <TabsTrigger value="contract">Contract Code</TabsTrigger>
                    <TabsTrigger value="explanation">Explanation</TabsTrigger>
                  </TabsList>
                  <TabsContent value="contract">
                    <CodeBlock 
                      language="scala"
                      filename="amm-pool.es"
                      code={`{
  val feeNum = 997
  val feeDenom = 1000
  
  val deltaX = SELF.tokens(0)._2 - OUTPUTS(0).tokens(0)._2
  val deltaY = SELF.tokens(1)._2 - OUTPUTS(0).tokens(1)._2
  
  val validSwap = deltaX * deltaY * feeNum >= 
    SELF.tokens(0)._2 * SELF.tokens(1)._2 * feeDenom
  
  sigmaProp(validSwap)
}`}
                    />
                  </TabsContent>
                  <TabsContent value="explanation">
                    <div className="p-4 bg-neutral-900 rounded-lg">
                      <h4 className="font-semibold mb-2">How it works:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-neutral-300">
                        <li>Calculate the change in token amounts (deltaX, deltaY)</li>
                        <li>Apply the fee (0.3% in this example)</li>
                        <li>Ensure the constant product formula holds: x * y = k</li>
                        <li>Return true if the swap maintains the invariant</li>
                      </ol>
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Best Practices */}
              <section id="best-practices" className="mt-12">
                <h2>Best Practices</h2>
                
                <div className="space-y-4">
                  <Callout type="pro" title="Use Context Variables">
                    Leverage HEIGHT, SELF, INPUTS, and OUTPUTS to create flexible contracts that adapt to different scenarios.
                  </Callout>

                  <Callout type="note" title="Gas Optimization">
                    Minimize collection operations and complex computations. Pre-compute values when possible.
                  </Callout>

                  <Callout type="warning" title="Avoid Common Pitfalls">
                    Always validate token IDs, check for integer overflow, and consider replay attack vectors.
                  </Callout>
                </div>
              </section>

              {/* Testing */}
              <section id="testing" className="mt-12">
                <h2>Testing & Deployment</h2>
                <p>
                  Thorough testing is crucial for smart contract security. Use the Ergo Playground for quick iterations:
                </p>

                <div className="my-6 p-4 bg-neutral-900 rounded-lg border border-neutral-800">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Development Tools
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://playground.ergoplatform.com" target="_blank" rel="noopener noreferrer" 
                         className="text-orange-400 hover:text-orange-300 flex items-center gap-2">
                        Ergo Playground - Interactive contract testing
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/ergoplatform/ergo-appkit" target="_blank" rel="noopener noreferrer"
                         className="text-orange-400 hover:text-orange-300 flex items-center gap-2">
                        Ergo AppKit - Java/Scala SDK
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mt-12">
                <h2>Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  <details className="group bg-neutral-900/50 rounded-lg p-4 border border-neutral-800">
                    <summary className="cursor-pointer font-semibold text-lg hover:text-orange-400 transition-colors flex items-center justify-between">
                      How is ErgoScript different from Solidity?
                      <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="mt-3 text-neutral-300">
                      ErgoScript uses a UTXO model with functional programming, offering better predictability and security. 
                      Solidity uses an account model with imperative programming, which is more flexible but prone to reentrancy attacks.
                    </p>
                  </details>

                  <details className="group bg-neutral-900/50 rounded-lg p-4 border border-neutral-800">
                    <summary className="cursor-pointer font-semibold text-lg hover:text-orange-400 transition-colors flex items-center justify-between">
                      What tools do I need to start?
                      <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="mt-3 text-neutral-300">
                      You'll need an Ergo node (or access to a public one), the Ergo Playground for testing, 
                      and either Ergo AppKit or ergo-lib for application development.
                    </p>
                  </details>

                  <details className="group bg-neutral-900/50 rounded-lg p-4 border border-neutral-800">
                    <summary className="cursor-pointer font-semibold text-lg hover:text-orange-400 transition-colors flex items-center justify-between">
                      How much does deployment cost?
                      <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="mt-3 text-neutral-300">
                      Deployment costs are minimal - typically less than 0.001 ERG. The exact cost depends on the 
                      script complexity and current network conditions.
                    </p>
                  </details>

                  <details className="group bg-neutral-900/50 rounded-lg p-4 border border-neutral-800">
                    <summary className="cursor-pointer font-semibold text-lg hover:text-orange-400 transition-colors flex items-center justify-between">
                      Can I call other contracts?
                      <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="mt-3 text-neutral-300">
                      Yes! ErgoScript supports composability through input/output validation. You can reference 
                      other boxes (UTXOs) and validate their scripts within your contract.
                    </p>
                  </details>

                  <details className="group bg-neutral-900/50 rounded-lg p-4 border border-neutral-800">
                    <summary className="cursor-pointer font-semibold text-lg hover:text-orange-400 transition-colors flex items-center justify-between">
                      Where can I test my contracts?
                      <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="mt-3 text-neutral-300">
                      Use the Ergo Playground for quick tests, deploy to testnet for integration testing, 
                      and consider using property-based testing with ScalaCheck for comprehensive coverage.
                    </p>
                  </details>
                </div>
              </section>

              {/* Conclusion */}
              <div className="mt-12 p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h2 className="text-xl font-bold mb-3">What to do next</h2>
                <p className="text-neutral-300 mb-4">
                  You now have the foundation to build secure smart contracts on Ergo. Start with simple contracts 
                  and gradually work your way up to complex DeFi protocols.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/docs/ergoscript">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read the Docs
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://playground.ergoplatform.com" target="_blank" rel="noopener noreferrer">
                      <Code2 className="w-4 h-4 mr-2" />
                      Try Playground
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link 
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="text-sm text-neutral-500 hover:text-orange-400 transition-colors"
                  >
                    <Hash className="inline w-3 h-3" />{tag}
                  </Link>
                ))}
              </div>

              {/* Share buttons */}
              <div className="mt-8 flex items-center gap-4 py-6 border-t border-neutral-800">
                <span className="text-sm text-neutral-400">Share this article:</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="hover:text-orange-400">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="hover:text-orange-400">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="hover:text-orange-400">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="hover:text-orange-400">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Author Box */}
            <AuthorBox author={post.author} />
          </article>

          {/* Right Sidebar */}
          <aside className="hidden xl:block col-span-2">
            <div className="sticky top-24 space-y-6">
              {/* Share buttons */}
              <div className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h3 className="text-sm font-semibold mb-3 text-neutral-400 uppercase tracking-wider">Share</h3>
                <div className="space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-orange-500/10 hover:text-orange-400">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-orange-500/10 hover:text-orange-400">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-orange-500/10 hover:text-orange-400">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy link
                  </Button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                <h3 className="font-semibold mb-2">Developer Updates</h3>
                <p className="text-sm text-neutral-300 mb-3">
                  Get Ergo dev news weekly
                </p>
                <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Subscribe
                </Button>
              </div>

              {/* Download */}
              <div className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map(post => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.slug}`} className="block p-6 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-neutral-500">
                    <span>{post.readTime} min</span>
                    {post.views && (
                      <>
                        <span>•</span>
                        <span>{(post.views / 1000).toFixed(1)}k views</span>
                      </>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter section */}
        <section className="mt-20 p-12 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-neutral-300 mb-8">
              Get the latest Ergo development tutorials and ecosystem updates delivered to your inbox.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-black/50 border border-neutral-700 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-sm text-neutral-500">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 bg-orange-500 hover:bg-orange-600 text-black rounded-full shadow-lg transition-colors z-40"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
