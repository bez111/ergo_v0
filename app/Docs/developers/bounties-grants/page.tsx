"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Gift, 
  Mail, 
  BookOpen, 
  Code2, 
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Award,
  Lightbulb
} from "lucide-react"
import Link from "next/link"

export default function BountiesPage() {
  const [hasMounted, setHasMounted] = useState(false)
  
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-neutral-800 rounded mb-4"></div>
            <div className="h-4 bg-neutral-800 rounded mb-2"></div>
            <div className="h-4 bg-neutral-800 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30">
              <Gift className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bounties & Grants
            </h1>
          </div>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to the Ergo Bounties page! This is your gateway to contributing to the Ergo community and being rewarded for your valuable efforts. We offer a variety of bounties across different programs, including educational and development initiatives, all aimed at fostering growth and innovation within the Ergo ecosystem.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-8">
          {/* How to Claim Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-neutral-900/50 border-orange-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-orange-400">
                  <div className="p-2 bg-orange-400/20 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  How to Claim a Bounty
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {[
                    {
                      step: 1,
                      text: "Draft an email to team@ergoplatform.org detailing your claim.",
                      highlight: "team@ergoplatform.org"
                    },
                    {
                      step: 2,
                      text: "Include all relevant details, such as the platform where the bounty was announced or a reference to this page."
                    },
                    {
                      step: 3,
                      text: "Attach evidence of your completed work (documents, files, or links that showcase your contributions)."
                    },
                    {
                      step: 4,
                      text: "Include your Ergo address (for bounty reward payout)."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700/50"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {item.step}
                      </div>
                      <p className="text-neutral-300 leading-relaxed">
                        {item.highlight ? (
                          <>
                            {item.text.split(item.highlight)[0]}
                            <a href={`mailto:${item.highlight}`} className="text-cyan-400 hover:text-cyan-300 underline">
                              {item.highlight}
                            </a>
                            {item.text.split(item.highlight)[1]}
                          </>
                        ) : (
                          item.text
                        )}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <Alert className="bg-orange-400/10 border-orange-400/30">
                  <Lightbulb className="h-4 w-4 text-orange-400" />
                  <AlertDescription className="text-orange-200">
                    <span className="font-semibold">Tip:</span> To streamline processing, include the estimated time it took you to complete the task. This helps us understand your effort and expedites review and reward allocation.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </motion.div>

          {/* Active Bounties Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-neutral-900/50 border-cyan-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-cyan-400">
                  <div className="p-2 bg-cyan-400/20 rounded-lg">
                    <Target className="w-6 h-6" />
                  </div>
                  Active Bounties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="educational" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-neutral-800/50">
                    <TabsTrigger value="educational" className="data-[state=active]:bg-cyan-400/20 data-[state=active]:text-cyan-400">
                      Educational Program
                    </TabsTrigger>
                    <TabsTrigger value="development" className="data-[state=active]:bg-purple-400/20 data-[state=active]:text-purple-400">
                      Development Program
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="educational" className="mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-cyan-400/20 rounded-lg">
                          <BookOpen className="w-5 h-5 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-cyan-300">Educational Reward Program</h3>
                        <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30">
                          Active
                        </Badge>
                      </div>
                      
                      <div className="space-y-4 text-neutral-300">
                        <p className="leading-relaxed">
                          The Educational Reward Program is designed to stimulate the creation of educational content that benefits the Ergo community. We believe in the power of knowledge-sharing and empowerment as key drivers of growth. If you have educational content, even if it's not explicitly mentioned here, it could still be eligible for a reward. We invite you to contribute any educational materials that can enrich learning experiences.
                        </p>
                        
                        <p className="leading-relaxed">
                          At present, we are actively rewarding contributions to <span className="font-semibold text-cyan-400">Developer Tutorials and Guides</span>. These rewards are open to contributors of all skill levels. If you have valuable insights or knowledge to share, you can submit your educational contributions directly to our documentation repository.
                        </p>
                        
                        <div className="mt-6">
                          <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                            <a href="https://github.com/glasgowm148/ergodocs" target="_blank" rel="noopener">
                              <BookOpen className="w-4 h-4 mr-2" />
                              Contribute to Documentation
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="development" className="mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-400/20 rounded-lg">
                          <Code2 className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-purple-300">Development Reward Program</h3>
                        <Badge variant="secondary" className="bg-purple-400/20 text-purple-400 border-purple-400/30">
                          Active
                        </Badge>
                      </div>
                      
                      <div className="space-y-4 text-neutral-300">
                        <p className="leading-relaxed">
                          The Development Reward Program is our way of acknowledging and appreciating significant contributions to the Ergo repositories. If your contributions have significantly enhanced the development and improvement of the Ergo ecosystem, you could be eligible for a reward.
                        </p>
                        
                        <p className="leading-relaxed">
                          We deeply appreciate the time, dedication, and expertise you invest in enhancing our ecosystem. By participating in our mission to improve educational materials and drive development within the Ergo community, you are playing a crucial role in the collective growth and success of the platform.
                        </p>
                        
                        <div className="mt-6">
                          <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                            <a href="https://github.com/ErgoDevs/Ergo-Bounties" target="_blank" rel="noopener">
                              <Code2 className="w-4 h-4 mr-2" />
                              View Development Bounties
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Ready to Contribute?</span>
            </div>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Join our community of contributors and help shape the future of the Ergo ecosystem. Every contribution matters, no matter how big or small.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 