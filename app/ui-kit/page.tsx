"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { designPrinciples } from "@/lib/design-tokens"
import { 
  Zap, 
  Shield, 
  Code, 
  Check,
  X,
  Info,
  Download,
  Search,
  Settings,
  Bell,
  Rocket,
  Target,
  ArrowRight,
  Copy,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Loader2,
  Lock,
  Globe,
  Terminal,
  Database,
  TrendingUp,
  Users,
  Award,
  Cpu,
  Eye,
  EyeOff,
  ExternalLink,
  User,
  Layout,
  Edit,
  Layers,
  Type,
  Palette,
  Brain,
  Building,
  Network,
  Coins,
  Lightbulb,
  FileText,
  BookOpen,
  GitBranch,
  ChevronRight,
  Accessibility,
  Heart,
  Fingerprint,
  ShieldCheck,
  Minimize2,
  Sparkles,
  Code2
} from "lucide-react"

export default function UIKitPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [copiedComponent, setCopiedComponent] = useState<string | null>(null)

  const copyToClipboard = async (componentName: string, code: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedComponent(componentName)
    setTimeout(() => setCopiedComponent(null), 2000)
  }

  // Component code examples
  const componentCode = {
    primaryButton: `<Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200">
  <Rocket className="w-5 h-5 mr-2" />
  Deploy Contract
</Button>`,
    featureCard: `<Card className="bg-neutral-900/50 border-neutral-700 hover:border-brand-primary-500/50 transition-all duration-300 focus-within:ring-2 focus-within:ring-brand-primary-500 focus-within:ring-offset-2 focus-within:ring-offset-black">
  <CardHeader>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center">
        <Shield className="w-5 h-5 text-brand-primary-400" />
      </div>
      <div>
        <CardTitle className="text-white">Security First</CardTitle>
        <div className="text-gray-400 text-sm">Built-in protection</div>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <p className="text-gray-300 mb-4">
      Advanced cryptographic protocols ensure your applications are secure by default.
    </p>
    <Badge className="bg-brand-primary-500/20 text-brand-primary-400 border border-brand-primary-500/30">
      Verified
    </Badge>
  </CardContent>
</Card>`,
    alert: `<Alert className="border-brand-primary-500 bg-brand-primary-500/10 text-brand-primary-400 rounded-xl focus-within:ring-2 focus-within:ring-brand-primary-500">
  <CheckCircle className="w-4 h-4" />
  <div className="ml-3">
    <h4 className="font-semibold">Transaction Confirmed</h4>
    <AlertDescription className="text-sm opacity-90">
      Your smart contract has been successfully deployed
    </AlertDescription>
  </div>
</Alert>`
  }

  // Flat-top hex component
  const ErgoHex = ({ size = "w-5 h-5", className = "" }: { size?: string; className?: string }) => {
    const R = 10
    const cx = 12, cy = 12
    const points = [...Array(6)].map((_, i) => {
      const angle = Math.PI / 3 * i
      return [
        cx + R * Math.cos(angle),
        cy + R * Math.sin(angle)
      ].join(',')
    }).join(' ')

    return (
      <div className={`${size} ${className}`}>
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points={points} />
          <text x="12" y="16" textAnchor="middle" className="text-[8px] font-bold fill-current" stroke="none">Σ</text>
        </svg>
      </div>
    )
  }

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98 }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Hero Section */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white">
                  <span className="text-brand-primary-400">Ergo</span> UI Kit
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                  Complete Component Library for Modern dApps
                </p>
                <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  Production-ready components, design patterns, and guidelines for building 
                  consistent, accessible, and modern Ergo applications with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Button 
                      className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200"
                      aria-label="Get started with Ergo UI Kit"
                    >
                      <Rocket className="w-5 h-5 mr-2" />
                      Get Started
                    </Button>
                  </motion.div>
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Button
                      variant="outline"
                      className="border-neutral-500 text-neutral-400 hover:bg-neutral-500/10 px-8 py-3 rounded-xl backdrop-blur-sm focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200"
                      aria-label="View documentation"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Documentation
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="space-y-4">
                  {[
                    { icon: Layers, title: "50+ Components", desc: "Production-ready components from buttons to complex patterns" },
                    { icon: Type, title: "Typography System", desc: "Carefully crafted type scale and hierarchy for all use cases" },
                    { icon: Palette, title: "Color Palette", desc: "Consistent brand colors with accessibility standards" },
                    { icon: Building, title: "Design Patterns", desc: "Common layouts and interaction patterns from real apps" }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm cursor-pointer group"
                      tabIndex={0}
                      role="button"
                      aria-label={`Learn more about ${feature.title}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          // Handle click
                        }
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <feature.icon className="w-6 h-6 text-brand-primary-400 group-hover:scale-110 transition-transform duration-200" />
                        <h3 className="text-lg font-semibold text-white group-hover:text-brand-primary-400 transition-colors duration-200">{feature.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {feature.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-primary-500/20 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-brand-primary-500/10 rounded-full blur-lg opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Design Philosophy Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-brand-primary-400/10 border border-brand-primary-400/20 rounded-xl p-6 mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-brand-primary-400" />
            Design Philosophy
          </h2>
          <p className="text-gray-300 mb-6">
            This design system embodies the core values of the Ergo ecosystem: privacy, decentralization, 
            simplicity, and accessibility. Every component and pattern reflects these principles while 
            delivering exceptional user experiences.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(designPrinciples).slice(0, 3).map(([key, principle]) => (
              <div key={key} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-primary-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">{principle.title}</h4>
                  <p className="text-gray-400 text-xs">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-neutral-900 border border-neutral-700 p-1">
              {[
                { id: "overview", label: "Overview", icon: Globe },
                { id: "philosophy", label: "Philosophy", icon: Brain },
                { id: "colors", label: "Colors", icon: Palette },
                { id: "typography", label: "Typography", icon: Type },
                { id: "components", label: "Components", icon: Layers },
                { id: "buttons", label: "Buttons", icon: Target },
                { id: "patterns", label: "Patterns", icon: Building }
              ].map((tab) => (
                <TabsTrigger 
                  key={tab.id}
                  value={tab.id} 
                  className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200"
                  aria-label={`Switch to ${tab.label} tab`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-12">
            <motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-brand-primary-400" />
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: Shield,
                    title: "Production Ready",
                    description: "Battle-tested components built for scale. Every element is optimized for performance and accessibility, ensuring your applications work flawlessly across all devices.",
                    features: ["TypeScript support", "Accessibility compliant", "Mobile optimized", "Performance tested"]
                  },
                  {
                    icon: Zap,
                    title: "Developer Experience",
                    description: "Intuitive APIs and comprehensive documentation make it easy to build and maintain complex interfaces. Focus on your business logic, not wrestling with UI components.",
                    features: ["Component library", "Design tokens", "Code examples", "Copy-paste ready"]
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 group cursor-pointer"
                    tabIndex={0}
                    role="article"
                    aria-label={feature.title}
                  >
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <feature.icon className="w-5 h-5 text-brand-primary-400 group-hover:scale-110 transition-transform duration-200" />
                      <span className="group-hover:text-brand-primary-400 transition-colors duration-200">{feature.title}</span>
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-primary-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-brand-primary-400" />
                By the Numbers
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "50+", label: "Components", icon: Layers, color: "text-brand-primary-400" },
                  { value: "8", label: "Categories", icon: Building, color: "text-brand-primary-400" },
                  { value: "100%", label: "Accessible", icon: Accessibility, color: "text-brand-primary-400" },
                  { value: "Open", label: "Source", icon: GitBranch, color: "text-brand-primary-400" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="text-center p-6 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-neutral-600 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black"
                    tabIndex={0}
                    role="button"
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`} />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Design Philosophy Tab */}
          <TabsContent value="philosophy" className="space-y-8">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                <span className="text-brand-primary-400">Design</span> Philosophy
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Our design system is built on the fundamental principles that guide the Ergo ecosystem. 
                Every component, pattern, and guideline reflects these core values.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {Object.entries(designPrinciples).map(([key, principle], index) => {
                const icons = {
                  accessibility: Accessibility,
                  simplicity: Minimize2,
                  consistency: Target,
                  privacy: Fingerprint,
                  decentralization: Network
                } as const
                
                const IconComponent = icons[key as keyof typeof icons] || Shield
                
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 hover:border-brand-primary-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-brand-primary-400 group-hover:scale-110 transition-transform duration-200" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary-400 transition-colors duration-200">
                          {principle.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {principle.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {principle.guidelines.map((guideline, guideIndex) => (
                            <div key={guideIndex} className="flex items-start gap-3">
                              <Check className="w-4 h-4 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-400 text-sm">{guideline}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </TabsContent>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-8">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                <span className="text-brand-primary-400">Color</span> System
              </h2>
              <p className="text-gray-400">Carefully selected colors for optimal contrast and accessibility</p>
            </motion.div>

            {/* Brand Colors */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <Palette className="w-5 h-5 text-brand-primary-400" />
                Brand Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { name: "Primary Orange", hex: "#f97316", class: "bg-brand-primary-500", description: "Primary brand color", token: "brand.primary.500" },
                  { name: "Secondary Cyan", hex: "#22d3ee", class: "bg-brand-secondary-400", description: "Secondary accent", token: "brand.secondary.400" },
                  { name: "Dark", hex: "#171717", class: "bg-brand-dark-900", description: "Background", token: "brand.dark.900" },
                  { name: "Neutral", hex: "#ffffff", class: "bg-neutral-0", description: "Text & contrast", token: "neutral.0" }
                ].map((color, index) => (
                  <motion.div 
                    key={color.name} 
                    className="space-y-3 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className={`w-full h-20 ${color.class} rounded-xl border border-neutral-700 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black`}
                         tabIndex={0}
                         role="button"
                         aria-label={`Copy ${color.name} color value`}
                         onClick={() => copyToClipboard(color.name, color.hex)}
                         onKeyDown={(e) => {
                           if (e.key === 'Enter' || e.key === ' ') {
                             e.preventDefault()
                             copyToClipboard(color.name, color.hex)
                           }
                         }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                      <AnimatePresence>
                        {copiedComponent === color.name && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute inset-0 bg-black/80 flex items-center justify-center"
                          >
                            <div className="flex items-center gap-2 text-white text-sm font-semibold">
                              <Check className="w-4 h-4" />
                              Copied!
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div>
                      <p className="text-white font-medium">{color.name}</p>
                      <code className="text-gray-400 text-sm">{color.hex}</code>
                      <p className="text-gray-500 text-xs">{color.description}</p>
                      <p className="text-brand-primary-400 text-xs font-mono">{color.token}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Status Colors */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-brand-primary-400" />
                Status Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Success", hex: "#10b981", class: "bg-status-success-500", usage: "Confirmations", icon: CheckCircle },
                  { name: "Warning", hex: "#f59e0b", class: "bg-status-warning-500", usage: "Cautions", icon: AlertTriangle },
                  { name: "Error", hex: "#ef4444", class: "bg-status-error-500", usage: "Errors", icon: XCircle },
                  { name: "Info", hex: "#3b82f6", class: "bg-status-info-500", usage: "Information", icon: Info }
                ].map((color, index) => (
                  <motion.div 
                    key={color.name} 
                    className="space-y-3 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className={`w-full h-20 ${color.class} rounded-xl relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black`}
                         tabIndex={0}
                         role="button"
                         aria-label={`Copy ${color.name} color value`}
                         onClick={() => copyToClipboard(`${color.name}-status`, color.hex)}
                         onKeyDown={(e) => {
                           if (e.key === 'Enter' || e.key === ' ') {
                             e.preventDefault()
                             copyToClipboard(`${color.name}-status`, color.hex)
                           }
                         }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <color.icon className="w-6 h-6 text-black/20" />
                      </div>
                      <AnimatePresence>
                        {copiedComponent === `${color.name}-status` && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute inset-0 bg-black/80 flex items-center justify-center"
                          >
                            <div className="flex items-center gap-2 text-white text-sm font-semibold">
                              <Check className="w-4 h-4" />
                              Copied!
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div>
                      <p className="text-white font-medium">{color.name}</p>
                      <code className="text-gray-400 text-sm">{color.hex}</code>
                      <p className="text-gray-500 text-xs">{color.usage}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-8">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                <span className="text-brand-primary-400">Typography</span> Scale
              </h2>
              <p className="text-gray-400">Clear hierarchy and readable text at all sizes</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="space-y-6">
                {[
                  { tag: "H1", size: "text-4xl", weight: "font-bold", sample: "Main Page Title", desc: "36px / Bold", token: "text-4xl font-bold" },
                  { tag: "H2", size: "text-2xl", weight: "font-bold", sample: "Section Header", desc: "24px / Bold", token: "text-2xl font-bold" },
                  { tag: "H3", size: "text-xl", weight: "font-semibold", sample: "Subsection Title", desc: "20px / Semibold", token: "text-xl font-semibold" },
                  { tag: "H4", size: "text-lg", weight: "font-semibold", sample: "Component Title", desc: "18px / Semibold", token: "text-lg font-semibold" },
                  { tag: "Body", size: "text-base", weight: "font-normal", sample: "Regular paragraph text for body content and descriptions", desc: "16px / Normal", token: "text-base font-normal" },
                  { tag: "Small", size: "text-sm", weight: "font-normal", sample: "Helper text, captions, and metadata", desc: "14px / Normal", token: "text-sm font-normal" }
                ].map((type, index) => (
                  <motion.div 
                    key={type.tag} 
                    className="border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 transition-colors group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-brand-primary-500/30 text-brand-primary-400">{type.tag}</Badge>
                      <code className="text-gray-500 text-sm">{type.desc}</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:ring-2 focus:ring-brand-primary-500"
                        onClick={() => copyToClipboard(`typography-${type.tag}`, `className="${type.token}"`)}
                        aria-label={`Copy ${type.tag} typography code`}
                      >
                        <AnimatePresence mode="wait">
                          {copiedComponent === `typography-${type.tag}` ? (
                            <motion.div
                              key="check"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="flex items-center gap-1"
                            >
                              <Check className="w-3 h-3" />
                              <span className="text-xs">Copied!</span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="copy"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="flex items-center gap-1"
                            >
                              <Copy className="w-3 h-3" />
                              <span className="text-xs">Copy</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </div>
                    <div className={`${type.size} ${type.weight} mb-2 text-white`}>
                      {type.sample}
                    </div>
                    <code className="text-gray-600 text-sm">{type.token}</code>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Code Typography */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <Terminal className="w-5 h-5 text-brand-primary-400" />
                Code Typography
              </h3>
              <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 group">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Code className="w-5 h-5 text-brand-primary-400" />
                    ErgoScript Example
                  </h4>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:ring-2 focus:ring-brand-primary-500"
                    onClick={() => copyToClipboard('ergoscript-example', 'val result = sigmaProp(true)\nif (OUTPUTS.size > 0) result')}
                    aria-label="Copy ErgoScript code example"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    Copy Code
                  </Button>
                </div>
                <div className="bg-black rounded-xl p-4 font-mono text-sm">
                  <div className="text-gray-400">// Smart contract validation</div>
                  <div className="text-white">
                    <span className="text-brand-primary-400">val</span> <span className="text-white">result</span> = sigmaProp(<span className="text-brand-primary-400">true</span>)
                  </div>
                  <div className="text-white">
                    <span className="text-brand-primary-400">if</span> (OUTPUTS.<span className="text-white">size</span> {'>'} <span className="text-brand-primary-400">0</span>) result
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                <span className="text-brand-primary-400">Component</span> Library
              </h2>
              <p className="text-gray-400">Production-ready components for modern applications</p>
            </motion.div>

            {/* Cards */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-brand-primary-400" />
                  Cards & Containers
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Feature Card */}
                <motion.div 
                  whileHover={{ y: -5, transition: { duration: 0.2 } }} 
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="bg-neutral-900/50 border-neutral-700 hover:border-brand-primary-500/50 transition-all duration-300 focus-within:ring-2 focus-within:ring-brand-primary-500 focus-within:ring-offset-2 focus-within:ring-offset-black">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-primary-500/20 border border-brand-primary-500/30 rounded-xl flex items-center justify-center">
                          <Shield className="w-5 h-5 text-brand-primary-400" />
                        </div>
                        <div>
                          <CardTitle className="text-white group-hover:text-brand-primary-400 transition-colors">Security First</CardTitle>
                          <div className="text-gray-400 text-sm">Built-in protection</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        Advanced cryptographic protocols ensure your applications are secure by default.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-brand-primary-500/20 text-brand-primary-400 border border-brand-primary-500/30">
                          Verified
                        </Badge>
                        <Button size="sm" variant="ghost" className="text-brand-primary-400 hover:text-brand-primary-300 focus:ring-2 focus:ring-brand-primary-500">
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 bg-black/80 text-white hover:bg-black/90 focus:ring-2 focus:ring-brand-primary-500"
                    onClick={() => copyToClipboard('feature-card', componentCode.featureCard)}
                    aria-label="Copy feature card component code"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </Button>
                </motion.div>

                {/* Stats Card */}
                <motion.div 
                  whileHover={{ y: -5, transition: { duration: 0.2 } }} 
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Card className="bg-neutral-900/50 border border-neutral-700 focus-within:ring-2 focus-within:ring-brand-primary-500 focus-within:ring-offset-2 focus-within:ring-offset-black">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center justify-between">
                        <span className="font-mono">Network Status</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-status-success-500 rounded-full animate-pulse" />
                          <span className="text-brand-primary-400 text-sm">Live</span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-brand-primary-400 font-mono">99.9%</div>
                          <div className="text-xs text-gray-400">Uptime</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-brand-primary-400 font-mono">1.2M</div>
                          <div className="text-xs text-gray-400">Transactions</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Performance</span>
                          <span className="text-brand-primary-400 font-mono">Optimal</span>
                        </div>
                        <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-brand-secondary-400 to-status-success-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '94%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 bg-black/80 text-white hover:bg-black/90 focus:ring-2 focus:ring-brand-primary-500"
                    onClick={() => copyToClipboard('stats-card', 'stats-card-code')}
                    aria-label="Copy stats card component code"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </Button>
                </motion.div>

                {/* Action Card */}
                <motion.div 
                  whileHover={{ y: -5, transition: { duration: 0.2 } }} 
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Card className="bg-neutral-900/50 border-neutral-700 hover:border-brand-primary-500/50 transition-all duration-300 focus-within:ring-2 focus-within:ring-brand-primary-500 focus-within:ring-offset-2 focus-within:ring-offset-black">
                    <CardHeader>
                      <CardTitle className="text-white group-hover:text-brand-primary-400 transition-colors flex items-center justify-between">
                        Developer Tools
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-brand-primary-400 transition-colors" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300 text-sm">
                        Complete toolkit for building, testing, and deploying smart contracts.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["CLI", "SDK", "API", "Docs"].map((tool) => (
                          <Badge key={tool} className="bg-brand-primary-500/20 text-brand-primary-400 border border-brand-primary-500/30 text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-neutral-700">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-brand-primary-400" />
                          <span>Production ready</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 bg-black/80 text-white hover:bg-black/90 focus:ring-2 focus:ring-brand-primary-500"
                    onClick={() => copyToClipboard('action-card', 'action-card-code')}
                    aria-label="Copy action card component code"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Alerts */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <Bell className="w-5 h-5 text-brand-primary-400" />
                Alerts & Notifications
              </h3>
              <div className="space-y-4">
                {[
                  { type: "success", icon: CheckCircle, title: "Transaction Confirmed", desc: "Your smart contract has been successfully deployed", color: "border-brand-primary-500 bg-brand-primary-500/10 text-brand-primary-400" },
                  { type: "warning", icon: AlertTriangle, title: "Network Congestion", desc: "High network activity detected. Consider adjusting gas fees", color: "border-status-warning-500 bg-status-warning-500/10 text-status-warning-400" },
                  { type: "error", icon: XCircle, title: "Validation Failed", desc: "Smart contract validation failed. Check your ErgoScript syntax", color: "border-status-error-500 bg-status-error-500/10 text-status-error-400" },
                  { type: "info", icon: Info, title: "Protocol Update", desc: "New Sigma protocol features available in the latest release", color: "border-status-info-500 bg-status-info-500/10 text-status-info-400" }
                ].map((alert, index) => (
                  <motion.div
                    key={alert.type}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="group relative"
                  >
                    <Alert className={`${alert.color} rounded-xl focus-within:ring-2 focus-within:ring-brand-primary-500 focus-within:ring-offset-2 focus-within:ring-offset-black`}>
                      <alert.icon className="w-4 h-4" />
                      <div className="ml-3">
                        <h4 className="font-semibold">{alert.title}</h4>
                        <AlertDescription className="text-sm opacity-90">
                          {alert.desc}
                        </AlertDescription>
                      </div>
                    </Alert>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 bg-black/80 text-white hover:bg-black/90 focus:ring-2 focus:ring-brand-primary-500"
                      onClick={() => copyToClipboard(`alert-${alert.type}`, componentCode.alert)}
                      aria-label={`Copy ${alert.type} alert component code`}
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Buttons Tab */}
          <TabsContent value="buttons" className="space-y-8">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                <span className="text-brand-primary-400">Interactive</span> Elements
              </h2>
              <p className="text-gray-400">Buttons and controls with Ergo styling and accessibility features</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Primary Actions */}
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
                  <Target className="w-5 h-5 text-brand-primary-400" />
                  Primary Actions
                </h3>
                <div className="space-y-4 group">
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Button className="w-full bg-brand-primary-500 hover:bg-brand-primary-600 text-black transition-all duration-200 focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black">
                      <Rocket className="w-4 h-4 mr-2" />
                      Deploy Contract
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Button size="sm" className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black">
                      Small Action
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Button size="lg" className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black px-8 focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black">
                      <Shield className="w-5 h-5 mr-2" />
                      Verify Security
                    </Button>
                  </motion.div>

                  <Button
                    size="sm"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 text-brand-primary-400 hover:text-brand-primary-300 focus:ring-2 focus:ring-brand-primary-500"
                    onClick={() => copyToClipboard('primary-button', componentCode.primaryButton)}
                    aria-label="Copy primary button component code"
                  >
                    <Code2 className="w-4 h-4 mr-1" />
                    Copy Button Code
                  </Button>
                </div>
              </motion.div>

              {/* Secondary Actions */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
                  <Settings className="w-5 h-5 text-brand-primary-400" />
                  Secondary Actions
                </h3>
                <div className="space-y-4">
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Button variant="outline" className="w-full border-neutral-700 text-gray-300 hover:bg-neutral-800 hover:text-white focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-black">
                      <Download className="w-4 h-4 mr-2" />
                      Download SDK
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Button variant="ghost" className="w-full text-gray-300 hover:bg-neutral-800 hover:text-white focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-black">
                      <FileText className="w-4 h-4 mr-2" />
                      View Documentation
                    </Button>
                  </motion.div>
                  
                  <Button disabled className="w-full focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-black">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Icon Buttons */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
                <Cpu className="w-5 h-5 text-brand-primary-400" />
                Icon Buttons
              </h3>
              <div className="flex gap-4 flex-wrap">
                {[
                  { component: <Search className="w-4 h-4" />, variant: "default", bg: "bg-brand-primary-500 hover:bg-brand-primary-600", label: "Search" },
                  { component: <Bell className="w-4 h-4" />, variant: "outline", bg: "border-neutral-700 hover:bg-neutral-800", label: "Notifications" },
                  { component: <User className="w-4 h-4" />, variant: "ghost", bg: "hover:bg-neutral-800", label: "User profile" },
                  { component: <X className="w-4 h-4" />, variant: "destructive", bg: "", label: "Close" }
                ].map((btn, index) => (
                  <motion.div
                    key={index}
                    whileHover="hover"
                    whileTap="tap"
                    variants={scaleOnHover}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button 
                      size="icon" 
                      variant={btn.variant as any}
                      className={`${btn.bg} focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200`}
                      aria-label={btn.label}
                    >
                      {btn.component}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Patterns Tab */}
          <TabsContent value="patterns" className="space-y-8">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                <span className="text-brand-primary-400">Design</span> Patterns
              </h2>
              <p className="text-gray-400">Common layouts and interaction patterns from Ergo applications</p>
            </motion.div>

            {/* Hero Pattern */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5 text-brand-primary-400" />
                Hero Section Pattern
              </h3>
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 group relative">
                <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
                  Your <span className="text-brand-primary-400">Application</span> Title
                </h1>
                <p className="text-xl text-gray-400 mb-6">
                  Compelling description that explains the value proposition clearly and concisely.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black">
                      <Rocket className="w-4 h-4 mr-2" />
                      Get Started
                    </Button>
                  </motion.div>
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Button variant="outline" className="border-neutral-700 text-gray-300 focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-black">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </motion.div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 bg-black/80 text-white hover:bg-black/90 focus:ring-2 focus:ring-brand-primary-500"
                  onClick={() => copyToClipboard('hero-pattern', 'hero-pattern-code')}
                  aria-label="Copy hero pattern code"
                >
                  <Copy className="w-3 h-3 mr-1" />
                  Copy
                </Button>
              </div>
            </motion.div>

            {/* Feature Grid Pattern */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <Building className="w-5 h-5 text-brand-primary-400" />
                Feature Grid Pattern
              </h3>
              <div className="grid md:grid-cols-3 gap-6 group relative">
                {[
                  { icon: Shield, title: "Security", desc: "Built with security as the foundation", color: "text-brand-primary-400" },
                  { icon: Zap, title: "Performance", desc: "Optimized for speed and efficiency", color: "text-brand-secondary-400" },
                  { icon: Users, title: "Community", desc: "Supported by a vibrant ecosystem", color: "text-status-success-500" }
                ].map((feature, index) => (
                  <motion.div 
                    key={feature.title} 
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 text-center hover:border-neutral-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-2 focus:ring-offset-black"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    tabIndex={0}
                    role="article"
                    aria-label={feature.title}
                  >
                    <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`} />
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 bg-black/80 text-white hover:bg-black/90 focus:ring-2 focus:ring-brand-primary-500"
                  onClick={() => copyToClipboard('feature-grid', 'feature-grid-code')}
                  aria-label="Copy feature grid pattern code"
                >
                  <Copy className="w-3 h-3 mr-1" />
                  Copy
                </Button>
              </div>
            </motion.div>
          </TabsContent>

        </Tabs>

        {/* Footer with improved accessibility */}
        <footer className="text-center pt-16 pb-8 border-t border-neutral-800 mt-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ErgoHex className="text-brand-primary-500" />
            <h3 className="text-lg font-semibold text-white">Ergo Design System</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Professional design system for blockchain applications
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500" role="list">
            <span role="listitem">React</span>
            <span role="presentation" aria-hidden="true">•</span>
            <span role="listitem">TypeScript</span>
            <span role="presentation" aria-hidden="true">•</span>
            <span role="listitem">Tailwind CSS</span>
          </div>
        </footer>

      </div>
    </div>
  )
}