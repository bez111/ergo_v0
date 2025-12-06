"use client";

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Code,
  Copy,
  Check,
  ExternalLink,
  Shield,
  Zap,
  BookOpen,
  Github,
  Play,
  Video,
  FileText,
  AlertTriangle,
  Coins,
  ChevronDown
} from "lucide-react";
import { DevPattern } from "@/data/dev-patterns";
import { BackgroundWrapper } from "@/components/home/background-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface Props {
  pattern: DevPattern;
  relatedPatterns: DevPattern[];
  categoryLabel: string;
}

const difficultyColors: Record<string, string> = {
  beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  advanced: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  expert: "bg-red-500/20 text-red-400 border-red-500/30"
};

const resourceIcons: Record<string, React.ElementType> = {
  doc: FileText,
  github: Github,
  playground: Play,
  video: Video,
  blog: BookOpen
};

const languageLabels: Record<string, string> = {
  ergoscript: "ErgoScript",
  scala: "Scala",
  typescript: "TypeScript",
  rust: "Rust"
};

export function PatternPageClient({ pattern, relatedPatterns, categoryLabel }: Props) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [expandedCode, setExpandedCode] = useState<number[]>([0]);

  const copyCode = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleCodeExpand = (index: number) => {
    setExpandedCode(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <BackgroundWrapper>
      <div className="min-h-screen text-white">
        <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-12"
          >
            <div className="max-w-4xl">
              {/* Meta badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="outline" className="border-orange-500/30 text-orange-400">
                  {categoryLabel}
                </Badge>
                <Badge className={difficultyColors[pattern.difficulty]}>
                  {pattern.difficulty.charAt(0).toUpperCase() + pattern.difficulty.slice(1)}
                </Badge>
                <span className="flex items-center gap-1 text-sm text-neutral-400">
                  <Clock className="w-4 h-4" />
                  {pattern.timeToImplement}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                {pattern.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-neutral-300 mb-8">
                {pattern.shortDescription}
              </p>

              {/* Quick actions */}
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => {
                    const codeSection = document.getElementById("code-examples");
                    codeSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                >
                  <Code className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                {pattern.resources.find((r) => r.type === "github") && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <a
                      href={pattern.resources.find((r) => r.type === "github")?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  className="text-neutral-400 hover:text-white"
                  asChild
                >
                  <Link href="/patterns">
                    Back to Patterns
                  </Link>
                </Button>
              </div>
            </div>
          </motion.section>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Problem & Solution */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="bg-black border border-white/10 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      {/* Problem */}
                      <div className="p-6 border-b md:border-b-0 md:border-r border-white/10">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                          </div>
                          <h2 className="text-lg font-semibold text-white">Problem</h2>
                        </div>
                        <p className="text-neutral-300">{pattern.problem}</p>
                      </div>
                      
                      {/* Solution */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-green-400" />
                          </div>
                          <h2 className="text-lg font-semibold text-white">Solution</h2>
                        </div>
                        <p className="text-neutral-300">{pattern.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.section>

              {/* How It Works */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-black border border-white/10 rounded-2xl">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">How It Works</h2>
                    <ol className="space-y-3">
                      {pattern.howItWorks.map((step, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-sm flex items-center justify-center font-medium">
                            {index + 1}
                          </span>
                          <span className="text-neutral-300">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </motion.section>

              {/* Code Examples */}
              <motion.section
                id="code-examples"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold text-white mb-4">Code Examples</h2>
                <div className="space-y-4">
                  {pattern.codeExamples.map((example, index) => (
                    <Card key={index} className="bg-black border border-white/10 rounded-2xl overflow-hidden">
                      <Collapsible 
                        open={expandedCode.includes(index)}
                        onOpenChange={() => toggleCodeExpand(index)}
                      >
                        <CollapsibleTrigger className="w-full">
                          <div className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-3">
                              <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 text-xs">
                                {languageLabels[example.language]}
                              </Badge>
                              <span className="font-medium text-white">{example.title}</span>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${expandedCode.includes(index) ? 'rotate-180' : ''}`} />
                          </div>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent>
                          <div className="border-t border-white/10">
                            {/* Code block */}
                            <div className="relative">
                              <pre className="p-4 overflow-x-auto text-sm bg-neutral-900/50">
                                <code className="text-neutral-300 font-mono whitespace-pre">
                                  {example.code}
                                </code>
                              </pre>
                              <button
                                onClick={() => copyCode(example.code, index)}
                                className="absolute top-3 right-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                                aria-label="Copy code"
                              >
                                {copiedIndex === index ? (
                                  <Check className="w-4 h-4 text-green-400" />
                                ) : (
                                  <Copy className="w-4 h-4 text-neutral-400" />
                                )}
                              </button>
                            </div>
                            
                            {/* Explanation */}
                            <div className="p-4 bg-neutral-900/30 border-t border-white/10">
                              <p className="text-sm text-neutral-400">{example.explanation}</p>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </motion.section>

              {/* Use Cases */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-black border border-white/10 rounded-2xl">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Use Cases</h2>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {pattern.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">→</span>
                          <span className="text-neutral-300">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.section>

              {/* Security Notes */}
              {pattern.securityNotes && pattern.securityNotes.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card className="bg-black border border-yellow-500/30 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Shield className="w-5 h-5 text-yellow-400" />
                        <h2 className="text-xl font-semibold text-white">Security Considerations</h2>
                      </div>
                      <ul className="space-y-2">
                        {pattern.securityNotes.map((note, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">!</span>
                            <span className="text-neutral-300">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.section>
              )}

              {/* Implementations */}
              {pattern.implementations && pattern.implementations.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Card className="bg-black border border-white/10 rounded-2xl">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold text-white mb-4">Real-World Implementations</h2>
                      <div className="space-y-4">
                        {pattern.implementations.map((impl, index) => (
                          <div key={index} className="flex items-start justify-between gap-4 p-4 bg-white/5 rounded-xl">
                            <div>
                              <h3 className="font-semibold text-white">{impl.project}</h3>
                              <p className="text-sm text-neutral-400">{impl.description}</p>
                            </div>
                            {impl.url && (
                              <a
                                href={impl.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4 text-neutral-400" />
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Resources */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-black border border-white/10 rounded-2xl sticky top-24">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold text-white mb-4">Resources</h2>
                    <div className="space-y-2">
                      {pattern.resources.map((resource, index) => {
                        const Icon = resourceIcons[resource.type] || FileText;
                        return (
                          <a
                            key={index}
                            href={resource.url}
                            target={resource.url.startsWith('http') ? '_blank' : '_self'}
                            rel={resource.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                          >
                            <Icon className="w-4 h-4 text-neutral-400 group-hover:text-orange-400" />
                            <span className="text-sm text-neutral-300 group-hover:text-white">{resource.title}</span>
                            <ExternalLink className="w-3 h-3 text-neutral-500 ml-auto" />
                          </a>
                        );
                      })}
                    </div>

                    {/* Fee Info */}
                    {pattern.feeConsiderations && (
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Coins className="w-4 h-4 text-neutral-400" />
                          <span className="text-sm font-medium text-white">Fee Considerations</span>
                        </div>
                        <p className="text-sm text-neutral-400">{pattern.feeConsiderations}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.section>

              {/* Related Patterns */}
              {relatedPatterns.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="bg-black border border-white/10 rounded-2xl">
                    <CardContent className="p-6">
                      <h2 className="text-lg font-semibold text-white mb-4">Related Patterns</h2>
                      <div className="space-y-2">
                        {relatedPatterns.map((related) => (
                          <Link
                            key={related.slug}
                            href={`/patterns/${related.slug}`}
                            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                          >
                            <span className="text-sm text-neutral-300 group-hover:text-white">{related.title}</span>
                            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.section>
              )}
            </div>
          </div>

          {/* What's Next Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16 pb-8"
          >
            <Card className="bg-black border border-white/10 rounded-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  What's <span className="text-orange-400">Next?</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link
                    href="/patterns"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <Code className="w-5 h-5 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <span className="text-white font-medium group-hover:text-orange-400 transition-colors">Browse All Patterns</span>
                      <p className="text-xs text-neutral-400">18 patterns available</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link
                    href="/playbooks"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <span className="text-white font-medium group-hover:text-orange-400 transition-colors">Explore Playbooks</span>
                      <p className="text-xs text-neutral-400">Step-by-step guides</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link
                    href="/builders"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <span className="text-white font-medium group-hover:text-orange-400 transition-colors">Builder Resources</span>
                      <p className="text-xs text-neutral-400">Full dev toolkit</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.section>

        </div>
      </div>
    </BackgroundWrapper>
  );
}

