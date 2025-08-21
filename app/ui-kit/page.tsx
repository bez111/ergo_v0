"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { designPrinciples } from "@/lib/design-tokens"
import { useIsMobile, usePrefersReducedMotion, getAnimationConfig } from "@/lib/theme-system"
import { 
  HeroPattern, FeatureGrid, StatsGrid, FeatureCard, CodeSnippet,
  type FeatureGridItem, type StatsGridItem
} from "@/components/ui-kit/patterns"
import { CopyButton } from "@/components/ui/copy-button"
import { 
  MathematicalPattern, CryptographicVisualization, 
  FloatingParticles, HexagonalGrid, GlitchHex, UndergroundManifesto, GlitchButton, WatermarkHex
} from "@/components/ui-kit/signature-effects"
import LivePlayground from "@/components/ui-kit/live-playground"
import { 
  Zap, 
  Shield, 
  Code, 
  X,
  Info,
  Download,
  Search,
  Settings,
  Bell,
  Rocket,
  Target,
  ArrowRight,
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
  Heart,
  Fingerprint,
  ShieldCheck,
  Minimize2,
  Sparkles,
  Code2,
  Moon,
  Sun,
  Monitor,
  Play,
  Figma
} from "lucide-react"

export default function UIKitPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [visitedTabs, setVisitedTabs] = useState<Set<string>>(new Set(["overview"]))
  const [hasMounted, setHasMounted] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  
  // Responsive и accessibility hooks with hydration safety
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()
  const animationConfig = getAnimationConfig(isMobile, prefersReducedMotion)

  // Prevent hydration mismatch and add initialization delay
  useEffect(() => {
    setHasMounted(true)
    // Небольшая задержка для предотвращения мерцания
    const timer = setTimeout(() => {
      setIsInitialized(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // Prevent hydration issues by rendering simplified version on server
  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              <span className="text-orange-400">Ergo</span> UI Kit
            </h1>
            <p className="text-gray-400">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab)
    setVisitedTabs(prev => new Set([...prev, newTab]))
  }

  // Comprehensive component code examples
  const componentCode = {
    primaryButton: `<Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200">
  <Rocket className="w-5 h-5 mr-2" />
  Deploy Contract
</Button>`,

    featureCard: `<FeatureCard
  icon={Shield}
  title="Security First"
  subtitle="Built-in protection"
  description="Advanced cryptographic protocols ensure your applications are secure by default."
  badge="Verified"
  action={{
    text: "Learn More",
    icon: ArrowRight,
    onClick: () => console.log('Learn more clicked')
  }}
/>`,

    alert: `<Alert className="border-orange-500 bg-orange-500/10 text-orange-400 rounded-xl focus-within:ring-2 focus-within:ring-orange-500">
  <CheckCircle className="w-4 h-4" />
  <div className="ml-3">
    <h4 className="font-semibold">Transaction Confirmed</h4>
    <AlertDescription className="text-sm opacity-90">
      Your smart contract has been successfully deployed
    </AlertDescription>
  </div>
</Alert>`,

    heroPattern: `<HeroPattern
  title="Your"
  highlight="Application"
  subtitle="Compelling description that explains the value proposition clearly and concisely."
  description="Additional context or details about your application."
  primaryAction={{
    text: "Get Started",
    icon: Rocket,
    onClick: () => console.log('Get started')
  }}
  secondaryAction={{
    text: "Learn More",
    icon: BookOpen,
    onClick: () => console.log('Learn more')
  }}
/>`,

    featureGrid: `<FeatureGrid
  items={[
    { icon: Shield, title: "Security", description: "Built with security as the foundation", color: "text-orange-400" },
    { icon: Zap, title: "Performance", description: "Optimized for speed and efficiency", color: "text-brand-secondary-400" },
    { icon: Users, title: "Community", description: "Supported by a vibrant ecosystem", color: "text-status-success-500" }
  ]}
  columns={3}
  className="my-8"
/>`,

    statsGrid: `<StatsGrid
  items={[
    { value: "50+", label: "Components", icon: Layers, color: "text-orange-400" },
    { value: "8", label: "Categories", icon: Building, color: "text-orange-400" },
    { value: "100%", label: "Accessible", icon: ShieldCheck, color: "text-orange-400" },
    { value: "Open", label: "Source", icon: GitBranch, color: "text-orange-400" }
  ]}
  columns={4}
/>`,

    codeSnippet: `<CodeSnippet
  title="Button Component"
  language="jsx"
  filename="Button.tsx"
  code={\`import { Button } from "@/components/ui/button"

export default function MyComponent() {
  return (
    <Button className="bg-orange-500">
      Click me
    </Button>
  )
}\`}
/>`,



    themeToggle: `const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('dark')

<Button
  variant="outline"
  size="icon"
  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  className="relative"
>
  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
</Button>`
  }

  // Flat-top hex component с улучшениями
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

  // Animation variants с учетом accessibility и инициализации
  const fadeInUp = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.1 : 0.4 }
    },
    exit: { opacity: 0, y: prefersReducedMotion ? 0 : -20 }
  }

  // Conditional animation - no animation for visited tabs
  const getConditionalAnimation = (tabName: string) => {
    const isFirstVisit = !visitedTabs.has(tabName) && isInitialized
    
    if (isFirstVisit) {
      // Первый визит - показываем анимацию
      return {
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: prefersReducedMotion ? 0.1 : 0.4 }
      }
    }
    
    // Для всех остальных случаев - мгновенное отображение без анимации
    return { 
      initial: { opacity: 1, y: 0 }, 
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 }
    }
  }

  const scaleOnHover = {
    hover: { 
      scale: prefersReducedMotion ? 1 : animationConfig.scale, 
      transition: { duration: animationConfig.duration } 
    },
    tap: { scale: prefersReducedMotion ? 1 : 0.98 }
  }

  // Feature grid data
  const featureGridItems: FeatureGridItem[] = [
    { icon: Shield, title: "Security", description: "Built with security as the foundation", color: "text-orange-400" },
    { icon: Zap, title: "Performance", description: "Optimized for speed and efficiency", color: "text-brand-secondary-400" },
    { icon: Users, title: "Community", description: "Supported by a vibrant ecosystem", color: "text-status-success-500" }
  ]

  // Stats grid data
  const statsGridItems: StatsGridItem[] = [
    { value: "50+", label: "Components", icon: Layers, color: "text-orange-400" },
    { value: "8", label: "Categories", icon: Building, color: "text-orange-400" },
    { value: "100%", label: "Accessible", icon: ShieldCheck, color: "text-orange-400" },
    { value: "Open", label: "Source", icon: GitBranch, color: "text-orange-400" }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects - загружаются только после инициализации */}
      {isInitialized && (
        <>
          <HexagonalGrid className="opacity-[0.02]" />
          <FloatingParticles count={15} className="opacity-80" />
          <MathematicalPattern className="opacity-[0.03]" />
        </>
      )}
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        
        {/* Hero Section с signature effects */}
        <section className="pb-20 relative">
          <WatermarkHex className="opacity-[0.01] pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
                animate={{ opacity: isInitialized ? 1 : 0, x: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, delay: isInitialized ? 0.1 : 0 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
                    <span className="text-orange-400">Ergo</span> UI Kit
                  </h1>
                  <div className="group w-12 h-12 sm:w-16 sm:h-16">
                    <GlitchHex size={48} />
                  </div>
                </div>
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
                      className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200"
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
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Button
                      variant="outline"
                      className="border-neutral-500 text-neutral-400 hover:bg-neutral-500/10 px-8 py-3 rounded-xl backdrop-blur-sm focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200"
                      aria-label="Open in Figma"
                    >
                      <Figma className="w-5 h-5 mr-2" />
                      Figma
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
                animate={{ opacity: isInitialized ? 1 : 0, x: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, delay: isInitialized ? 0.3 : 0 }}
                className="relative"
              >
                {/* Cryptographic Visualization */}
                <CryptographicVisualization className="absolute top-0 right-0 w-32 h-32 opacity-30" />
                
                <div className="space-y-4">
                  {[
                    { icon: Layers, title: "50+ Components", desc: "Production-ready components from buttons to complex patterns" },
                    { icon: Type, title: "Typography System", desc: "Carefully crafted type scale and hierarchy for all use cases" },
                    { icon: Palette, title: "Color Palette", desc: "Consistent brand colors with accessibility standards" },
                    { icon: Building, title: "Design Patterns", desc: "Common layouts and interaction patterns from real apps" }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                      animate={{ opacity: isInitialized ? 1 : 0, x: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, delay: isInitialized ? (0.5 + index * 0.1) : 0 }}
                      whileHover={{ x: prefersReducedMotion ? 0 : 5, transition: { duration: 0.2 } }}
                      className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 backdrop-blur-sm cursor-pointer group"
                      tabIndex={0}
                      role="button"
                      aria-label={`Learn more about ${feature.title}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                        }
                      }}
                    >
                    <div className="flex items-center gap-3 mb-3">
                        <feature.icon className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform duration-200" />
                        <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-200">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">
                        {feature.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/20 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-500/10 rounded-full blur-lg opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Design Philosophy Block с улучшениями */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-orange-400" />
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
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">{principle.title}</h4>
                  <p className="text-gray-400 text-xs">{principle.description}</p>
        </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navigation с улучшенной мобильной версией */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-neutral-900 border border-neutral-700 p-1 flex-wrap justify-center">
              {[
                { id: "overview", label: "Overview", icon: Globe },
                { id: "playground", label: "Playground", icon: Play },
                { id: "philosophy", label: "Philosophy", icon: Brain },
                { id: "colors", label: "Colors", icon: Palette },
                { id: "typography", label: "Typography", icon: Type },
                { id: "components", label: "Components", icon: Layers },
                { id: "patterns", label: "Patterns", icon: Building }
              ].map((tab) => (
                <TabsTrigger 
                  key={tab.id}
                  value={tab.id} 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-black focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200 flex-shrink-0 text-sm px-3 py-2"
                  aria-label={`Switch to ${tab.label} tab`}
                >
                  <tab.icon className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Overview Tab с использованием новых паттернов */}
          <TabsContent value="overview" className="space-y-12">
            <motion.div {...getConditionalAnimation("overview")}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-orange-400" />
                Key Features
              </h2>
              <FeatureGrid items={featureGridItems} columns={3} isTabVisited={visitedTabs.has("overview")} />
            </motion.div>

            <motion.div {...getConditionalAnimation("overview")}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-orange-400" />
                By the Numbers
              </h2>
              <StatsGrid items={statsGridItems} columns={4} isTabVisited={visitedTabs.has("overview")} />
                  </motion.div>

            {/* Auto-generated documentation showcase */}
            <motion.div {...getConditionalAnimation("overview")}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-orange-400" />
                Auto-Generated Documentation
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <CodeSnippet
                  title="Feature Grid Pattern"
                  language="jsx"
                  filename="FeatureGrid.tsx"
                  code={componentCode.featureGrid}
                />
                <CodeSnippet
                  title="Stats Grid Pattern"
                  language="jsx"
                  filename="StatsGrid.tsx"
                  code={componentCode.statsGrid}
                />
              </div>
            </motion.div>
          </TabsContent>

          {/* Live Playground Tab */}
          <TabsContent value="playground" className="space-y-8">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                <span className="text-orange-400">Live</span> Playground
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Interactive sandbox for testing and experimenting with components. Edit code in real-time and see instant results.
              </p>
            </motion.div>

            <LivePlayground />
          </TabsContent>

          {/* Остальные табы остаются без изменений но с добавлением code snippets */}
          {/* Design Philosophy Tab */}
          <TabsContent value="philosophy" className="space-y-8">
            <motion.div {...getConditionalAnimation("philosophy")} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                <span className="text-orange-400">Design</span> Philosophy
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Our design system is built on the fundamental principles that guide the Ergo ecosystem. 
                Every component, pattern, and guideline reflects these core values.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {Object.entries(designPrinciples).map(([key, principle], index) => {
                const icons = {
                  accessibility: ShieldCheck,
                  simplicity: Minimize2,
                  consistency: Target,
                  privacy: Fingerprint,
                  decentralization: Network
                } as const
                
                const IconComponent = icons[key as keyof typeof icons] || Shield
                
                const isPhilosophyVisited = visitedTabs.has("philosophy")
                const animationProps = isPhilosophyVisited 
                  ? {
                      initial: { opacity: 1, x: 0 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0 }
                    }
                  : {
                      initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.6, delay: index * 0.1 }
                    }
                
                return (
                  <motion.div
                    key={key}
                    {...animationProps}
                    className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 hover:border-orange-500/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform duration-200" />
                    </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-200">
                          {principle.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {principle.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {principle.guidelines.map((guideline, guideIndex) => (
                            <div key={guideIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
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
            
            {/* Underground Manifesto */}
            <motion.div 
              {...getConditionalAnimation("philosophy")}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <Terminal className="w-5 h-5 text-orange-400" />
                Underground Manifesto
              </h3>
              <UndergroundManifesto />
            </motion.div>
          </TabsContent>

          {/* Colors Tab с code snippets */}
          <TabsContent value="colors" className="space-y-8">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                <span className="text-orange-400">Color</span> System
              </h2>
              <p className="text-gray-400">Carefully selected colors for optimal contrast and accessibility</p>
            </motion.div>

            {/* Brand Colors with code examples */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <Palette className="w-5 h-5 text-orange-400" />
                Brand Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { name: "Primary Orange", hex: "#f97316", class: "bg-orange-500", description: "Primary brand color", token: "brand.primary.500" },
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
                    whileHover={{ scale: prefersReducedMotion ? 1 : 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className={`w-full h-20 ${color.class} rounded-xl border border-neutral-700 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                      <div className="absolute top-2 right-2">
                        <CopyButton text={color.hex} size="sm" />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-medium">{color.name}</p>
                      <code className="text-gray-400 text-sm">{color.hex}</code>
                      <p className="text-gray-500 text-xs">{color.description}</p>
                      <p className="text-orange-400 text-xs font-mono">{color.token}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
              
              {/* Usage example */}
              <CodeSnippet
                title="Using Brand Colors"
                language="jsx"
                code={`// Using Tailwind classes
<Button className="bg-orange-500 hover:bg-orange-600">
  Primary Button
</Button>

// Using CSS custom properties  
<div style={{ backgroundColor: 'var(--orange-500)' }}>
  Custom element
</div>`}
              />
            </motion.div>

            {/* Status Colors */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-orange-400" />
                Status Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
                    whileHover={{ y: prefersReducedMotion ? 0 : -5, transition: { duration: 0.2 } }}
                  >
                    <div className={`w-full h-20 ${color.class} rounded-xl relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <color.icon className="w-6 h-6 text-black/20" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <CopyButton text={color.hex} size="sm" />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-medium">{color.name}</p>
                      <code className="text-gray-400 text-sm">{color.hex}</code>
                      <p className="text-gray-500 text-xs">{color.usage}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <CodeSnippet
                title="Theme System Usage"
                language="jsx"
                code={componentCode.themeToggle}
              />
            </motion.div>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-8">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                <span className="text-orange-400">Typography</span> Scale
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
                    className="border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 transition-colors group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: prefersReducedMotion ? 0 : 5, transition: { duration: 0.2 } }}
                  >
                  <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-neutral-500 text-neutral-400">{type.tag}</Badge>
                    <code className="text-gray-500 text-sm">{type.desc}</code>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <CopyButton 
                          text={`className="${type.token}"`} 
                          size="sm" 
                          variant="inline"
                        />
                      </div>
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
                <Terminal className="w-5 h-5 text-orange-400" />
                Code Typography
              </h3>
              <CodeSnippet
                title="ErgoScript Example"
                language="scala"
                filename="validation.ergo"
                code={`// Smart contract validation
val result = sigmaProp(true)
if (OUTPUTS.size > 0) result`}
              />
            </motion.div>
          </TabsContent>

          {/* Components Tab с расширенными примерами */}
          <TabsContent value="components" className="space-y-8">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                <span className="text-orange-400">Component</span> Library
              </h2>
              <p className="text-gray-400">Production-ready components with comprehensive documentation</p>
            </motion.div>

            {/* Feature Cards using new FeatureCard pattern */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-orange-400" />
                  Feature Cards
              </h3>
                        </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <FeatureCard
                  icon={Shield}
                  title="Security First"
                  subtitle="Built-in protection"
                  description="Advanced cryptographic protocols ensure your applications are secure by default."
                  badge="Verified"
                  action={{
                    text: "Learn More",
                    icon: ArrowRight,
                    onClick: () => console.log('Learn more clicked')
                  }}
                />
                
                <FeatureCard
                  icon={Zap}
                  title="Performance"
                  subtitle="Optimized for speed"
                  description="Lightning-fast components built with modern web standards and best practices."
                  badge="Optimized"
                  action={{
                    text: "Benchmark",
                    icon: TrendingUp,
                    onClick: () => console.log('Benchmark clicked')
                  }}
                />
                
                <FeatureCard
                  icon={Users}
                  title="Community"
                  subtitle="Open source"
                  description="Built by the community, for the community. Contributions and feedback welcome."
                  badge="Open Source"
                  action={{
                    text: "Contribute",
                    icon: GitBranch,
                    onClick: () => console.log('Contribute clicked')
                  }}
                />
                    </div>
              
              <CodeSnippet
                title="FeatureCard Component"
                language="jsx"
                filename="FeatureCard.tsx"
                code={componentCode.featureCard}
              />
            </motion.div>

            {/* Buttons */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-orange-400" />
                Interactive Elements
                </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="space-y-4 group">
                  <h4 className="text-lg font-semibold text-white">Primary Actions</h4>
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">
                    <Rocket className="w-4 h-4 mr-2" />
                    Deploy Contract
                  </Button>
                  </motion.div>
                  
                  <motion.div whileHover="hover" whileTap="tap" variants={scaleOnHover}>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-black focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">
                    Small Action
                  </Button>
                  </motion.div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-orange-400 hover:text-orange-300 focus:ring-2 focus:ring-orange-500"
                      onClick={() => {
                        const codeElement = document.createElement('textarea')
                        codeElement.value = componentCode.primaryButton
                        document.body.appendChild(codeElement)
                        codeElement.select()
                        document.execCommand('copy')
                        document.body.removeChild(codeElement)
                      }}
                      aria-label="View component code in section below"
                    >
                      <Code2 className="w-4 h-4 mr-1" />
                      View Code Below
                    </Button>
                  </div>
              </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Secondary Actions</h4>
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
              </div>
            </div>

              <CodeSnippet
                title="Button Variants"
                language="jsx"
                code={componentCode.primaryButton}
              />
            </motion.div>

            {/* Signature Effects Showcase */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-orange-400" />
                Signature Effects
              </h3>
              
              {/* Glitch Hex */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 relative overflow-hidden mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Glitch Hex with Σ Symbol</h4>
                <div className="flex justify-center items-center py-8">
                  <div className="group w-16 h-16 mx-auto">
                    <GlitchHex size={64} />
                  </div>
                </div>
              </div>
              
              <CodeSnippet
                title="Glitch Hex"
                language="jsx"
                code={`<div className="group w-16 h-16 mx-auto">
  <GlitchHex size={64} />
</div>`}
              />
              
              {/* Underground Manifesto */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 relative overflow-hidden mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Underground Manifesto</h4>
                <UndergroundManifesto />
              </div>
              
              <CodeSnippet
                title="Underground Manifesto"
                language="jsx"
                code={`<UndergroundManifesto />`}
              />
              
              {/* Glitch Button */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 relative overflow-hidden mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Glitch Button</h4>
                <div className="flex justify-center items-center py-8">
                  <GlitchButton onClick={() => console.log('Deploy clicked')}>
                    DEPLOY
                  </GlitchButton>
                </div>
              </div>
              
              <CodeSnippet
                title="Glitch Button"
                language="jsx"
                code={`<GlitchButton onClick={() => console.log('Deploy clicked')}>
  DEPLOY
</GlitchButton>`}
              />
              
              {/* Cryptographic Visualization */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 relative overflow-hidden mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Cryptographic Visualization</h4>
                <CryptographicVisualization className="w-full h-24" />
              </div>
              
              <CodeSnippet
                title="Cryptographic Visualization"
                language="jsx"
                code={`<CryptographicVisualization className="w-full h-24" />`}
              />
              
              {/* Watermark Hex */}
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 relative overflow-hidden mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Watermark Hex</h4>
                <div className="relative h-32 bg-neutral-800 rounded-lg">
                  <WatermarkHex />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Subtle watermark effect</p>
                  </div>
                </div>
              </div>
              
              <CodeSnippet
                title="Watermark Hex"
                language="jsx"
                code={`<WatermarkHex className="opacity-[0.01] pointer-events-none" />`}
              />
            </motion.div>
          </TabsContent>

          {/* Patterns Tab with live examples */}
          <TabsContent value="patterns" className="space-y-8">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                <span className="text-orange-400">Design</span> Patterns
              </h2>
              <p className="text-gray-400">Reusable patterns and layouts with comprehensive code examples</p>
            </motion.div>

            {/* Hero Pattern */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5 text-orange-400" />
                Hero Section Pattern
              </h3>
              
              <div className="mb-6">
                <HeroPattern
                  title="Your"
                  highlight="Application"
                  subtitle="Compelling description that explains the value proposition clearly and concisely."
                  description="Additional context or details about your application."
                  primaryAction={{
                    text: "Get Started",
                    icon: Rocket,
                    onClick: () => console.log('Get started')
                  }}
                  secondaryAction={{
                    text: "Learn More",
                    icon: BookOpen,
                    onClick: () => console.log('Learn more')
                  }}
                />
            </div>
              
              <CodeSnippet
                title="Hero Pattern Usage"
                language="jsx"
                filename="HeroPattern.tsx"
                code={componentCode.heroPattern}
              />
            </motion.div>

            {/* Feature Grid Pattern */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <Building className="w-5 h-5 text-orange-400" />
                Feature Grid Pattern
              </h3>
              
              <div className="mb-6">
                <FeatureGrid items={featureGridItems} columns={3} isTabVisited={visitedTabs.has("patterns")} />
              </div>
              
              <CodeSnippet
                title="Feature Grid Usage"
                language="jsx"
                filename="FeatureGrid.tsx"
                code={componentCode.featureGrid}
              />
            </motion.div>

            {/* Auto-docs showcase */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-orange-400" />
                Auto-Generated Documentation
              </h3>
              
              <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
                <p className="text-gray-300 mb-4">
                  All patterns include comprehensive TypeScript interfaces, usage examples, and auto-generated 
                  documentation. Props are automatically inferred and documented for better developer experience.
                </p>
              </div>
            </motion.div>
          </TabsContent>

        </Tabs>

        {/* Footer с signature effects */}
        <footer className="text-center pt-16 pb-8 border-t border-neutral-800 mt-16 relative">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ErgoHex className="text-orange-500" />
            <h3 className="text-lg font-semibold text-white">Ergo Design System</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Professional design system for blockchain applications
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500 mb-6" role="list">
            <span role="listitem">React 19</span>
            <span role="presentation" aria-hidden="true">•</span>
            <span role="listitem">TypeScript</span>
            <span role="presentation" aria-hidden="true">•</span>
            <span role="listitem">Tailwind CSS</span>
            <span role="presentation" aria-hidden="true">•</span>
            <span role="listitem">Framer Motion</span>
          </div>
          
          {/* Links */}
          <div className="flex justify-center gap-4">
            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
              <GitBranch className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
              <Figma className="w-4 h-4 mr-2" />
              Figma
            </Button>
            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Storybook
            </Button>
          </div>
        </footer>

      </div>
    </div>
  )
}