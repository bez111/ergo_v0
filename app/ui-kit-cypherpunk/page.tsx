"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
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
  Skull,
  Wifi,
  WifiOff,
  Bug,
  Fingerprint,
  RadioTower,
  Satellite,
  Hash,
  Binary,
  Crosshair
} from "lucide-react"

export default function CypherpunkUIKitPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [copiedComponent, setCopiedComponent] = useState<string | null>(null)
  const [glitchText, setGlitchText] = useState("ERGO UI KIT")
  const [isOnline, setIsOnline] = useState(true)

  // Glitch effect for title
  useEffect(() => {
    const glitchChars = "ΣЭЯГОΞΨΩΦΧΔΛΠΘΡΤΥΙΟΠΑΣΔΦΓΗΞΚΛΖΧΨΩ0123456789!@#$%^&*"
    const originalText = "ERGO UI KIT"
    
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        let glitched = ""
        for (let i = 0; i < originalText.length; i++) {
          if (Math.random() > 0.7) {
            glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)]
          } else {
            glitched += originalText[i]
          }
        }
        setGlitchText(glitched)
        setTimeout(() => setGlitchText(originalText), 150)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Network status effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = async (componentName: string, code: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedComponent(componentName)
    setTimeout(() => setCopiedComponent(null), 2000)
  }

  // Cyberpunk hex component
  const CyberHex = ({ size = "w-5 h-5", className = "", glowing = false }: { 
    size?: string; 
    className?: string; 
    glowing?: boolean;
  }) => (
    <div className={`${size} ${className} relative`}>
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <defs>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <polygon 
          points="20,12 16,19 8,19 4,12 8,5 16,5" 
          fill="none"
          stroke="currentColor" 
          strokeWidth="2"
          filter={glowing ? "url(#neonGlow)" : "none"}
          className={glowing ? "animate-pulse" : ""}
        />
      </svg>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cyberGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(34, 197, 94)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cyberGrid)" />
        </svg>
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-green-400/10"
            style={{ top: `${i * 5}%` }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* CYBERPUNK HEADER */}
        <div className="mb-16 border border-green-500/50 bg-black/80 p-8 relative">
          <div className="absolute top-2 right-2 flex items-center gap-2">
            <div className={`w-2 h-2 ${isOnline ? 'bg-green-400' : 'bg-red-500'} rounded-full`} />
            <span className="text-xs text-green-400/80 font-mono">
              {isOnline ? "ONLINE" : "OFFLINE"}
            </span>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <CyberHex className="text-green-400" glowing />
            <div>
              <h1 className="text-4xl font-bold text-green-400 font-mono tracking-wider filter drop-shadow-[0_0_10px_rgb(34,197,94)]">
                {glitchText}
              </h1>
              <p className="text-green-400/60 text-sm mt-1 font-mono tracking-widest">
                [CLASSIFIED] CYPHERPUNK DESIGN SYSTEM v2.1.7
              </p>
            </div>
          </div>
          
          <div className="bg-green-400/10 border border-green-400/30 p-4 mb-6 font-mono">
            <div className="text-green-400 text-sm mb-2">
              <span className="text-red-400">WARNING:</span> UNAUTHORIZED ACCESS DETECTED
            </div>
            <div className="text-green-400/80 text-xs">
              SYSTEM: ERGO BLOCKCHAIN INTERFACE v2.1.7 | STATUS: OPERATIONAL
              <br />
              CLEARANCE: SIGMA-7 | PROTOCOL: ACTIVE | NODES: 1,247 ONLINE
            </div>
          </div>

          <p className="text-green-400/90 mb-6 font-mono">
            &gt; RESTRICTED UI FRAMEWORK FOR UNDERGROUND BLOCKCHAIN OPERATIONS
            <br />
            &gt; CRYPTOGRAPHIC INTERFACE COMPONENTS | ZERO-KNOWLEDGE PROTOCOLS
            <br />
            &gt; [ERROR_404: AUTHORIZATION_NOT_FOUND]
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-green-500 hover:bg-green-400 text-black font-mono font-bold border border-green-400 shadow-[0_0_10px_rgb(34,197,94)] hover:shadow-[0_0_15px_rgb(34,197,94)]">
              <Terminal className="w-4 h-4 mr-2" />
              [INITIALIZE]
            </Button>
            <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10 font-mono">
              <Skull className="w-4 h-4 mr-2" />
              [ABORT]
            </Button>
          </div>
        </div>

        {/* DANGER ZONE */}
        <div className="bg-red-500/10 border border-red-500/50 p-6 mb-12 relative">
          <div className="absolute top-2 left-2 text-red-400 text-xs font-mono animate-pulse">
            ⚠ DANGER ZONE ⚠
          </div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-400 font-mono">
            <Crosshair className="w-5 h-5" />
            SYSTEM PHILOSOPHY: CRYPTO-ANARCHIST MANIFESTO
          </h2>
          <p className="text-red-300/90 font-mono text-sm">
            "We are creating a world where anyone, anywhere may express beliefs without fear.
            <br />Cryptography will inescapably spread over the globe, and this crypto-anarchy cannot be stopped."
            <br />- CYPHERPUNK COLLECTIVE, 1993
          </p>
        </div>

        {/* CYBERPUNK NAVIGATION */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-black border border-green-500/50 p-1">
              {[
                { id: "overview", label: "OVERVIEW", icon: RadioTower },
                { id: "colors", label: "COLORS", icon: Palette },
                { id: "typography", label: "TYPE", icon: Hash },
                { id: "components", label: "MODULES", icon: Database },
                { id: "buttons", label: "CONTROLS", icon: Target },
                { id: "patterns", label: "EXPLOITS", icon: Bug }
              ].map((tab) => (
                <TabsTrigger 
                  key={tab.id}
                  value={tab.id} 
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-black font-mono text-xs"
                >
                  <tab.icon className="w-3 h-3 mr-1" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* OVERVIEW - UNDERGROUND */}
          <TabsContent value="overview" className="space-y-12">
            
            {/* SYSTEM STATUS */}
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-green-400 font-mono">
                <Satellite className="w-5 h-5" />
                [SYSTEM_STATUS] NETWORK_NODES
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black border border-green-500/50 p-6 relative">
                  <div className="absolute top-2 right-2 text-green-400 text-xs animate-pulse">LIVE</div>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-green-400 font-mono">
                    <Shield className="w-4 h-4" />
                    SECURITY_PROTOCOL
                  </h3>
                  <p className="text-green-400/80 mb-4 font-mono text-sm">
                    MILITARY-GRADE ENCRYPTION | ZERO-KNOWLEDGE PROOFS | QUANTUM-RESISTANT
                  </p>
                  <ul className="space-y-2 text-green-400/70 text-xs font-mono">
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-400" />
                      AES-256 ENCRYPTION
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-400" />
                      SIGMA PROTOCOLS
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-400" />
                      BULLETPROOF ZK
                    </li>
                  </ul>
                </div>

                <div className="bg-black border border-purple-500/50 p-6 relative">
                  <div className="absolute top-2 right-2 text-purple-400 text-xs animate-pulse">HACK</div>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-purple-400 font-mono">
                    <Bug className="w-4 h-4" />
                    EXPLOIT_FRAMEWORK
                  </h3>
                  <p className="text-purple-400/80 mb-4 font-mono text-sm">
                    PENETRATION TESTING | VULNERABILITY ANALYSIS | CHAOS ENGINEERING
                  </p>
                  <ul className="space-y-2 text-purple-400/70 text-xs font-mono">
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-purple-400" />
                      FUZZING TOOLS
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-purple-400" />
                      MEMPOOL ANALYSIS
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-purple-400" />
                      SMART CONTRACT AUDIT
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* NETWORK STATS */}
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-400 font-mono">
                <RadioTower className="w-5 h-5 animate-pulse" />
                [NETWORK_METRICS] REAL_TIME
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "1,247", label: "NODES_ONLINE", icon: Wifi, color: "text-green-400", status: "ACTIVE" },
                  { value: "99.97%", label: "UPTIME_SLA", icon: Shield, color: "text-cyan-400", status: "STABLE" },
                  { value: "0.003s", label: "LATENCY_AVG", icon: Zap, color: "text-yellow-400", status: "OPTIMAL" },
                  { value: "∞", label: "POSSIBILITIES", icon: Binary, color: "text-purple-400", status: "LIMITLESS" }
                ].map((stat) => (
                  <motion.div 
                    key={stat.label}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
                    className="text-center p-4 bg-black border border-green-500/30 relative group"
                  >
                    <div className="absolute top-1 right-1 text-[8px] font-mono text-green-400/50">
                      {stat.status}
                    </div>
                    <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                    <div className={`text-xl font-bold ${stat.color} font-mono`}>{stat.value}</div>
                    <div className="text-green-400/60 text-xs font-mono">{stat.label}</div>
                    <div className="absolute inset-0 border border-green-400/0 group-hover:border-green-400/50 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ACCESS CODES */}
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-yellow-400 font-mono">
                <Fingerprint className="w-5 h-5" />
                [ACCESS_CODES] AUTHENTICATION
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "LEVEL_1",
                    description: "BASIC ACCESS | READ-ONLY",
                    icon: Eye,
                    clearance: "PUBLIC",
                    color: "border-green-500/20 bg-green-500/5"
                  },
                  {
                    title: "LEVEL_7",
                    description: "SIGMA CLEARANCE | FULL ACCESS",
                    icon: Lock,
                    clearance: "RESTRICTED",
                    color: "border-yellow-500/20 bg-yellow-500/5"
                  },
                  {
                    title: "LEVEL_X",
                    description: "UNKNOWN | [REDACTED]",
                    icon: Skull,
                    clearance: "CLASSIFIED",
                    color: "border-red-500/20 bg-red-500/5"
                  }
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -5, boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)" }}
                    className={`${item.color} border p-6 cursor-pointer transition-all duration-300 relative`}
                  >
                    <div className="absolute top-2 right-2 text-[8px] font-mono text-red-400">
                      {item.clearance}
                    </div>
                    <item.icon className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-lg font-bold text-green-400 mb-2 font-mono">{item.title}</h3>
                    <p className="text-green-400/70 text-xs mb-4 font-mono">{item.description}</p>
                    <div className="flex items-center text-green-400 text-xs font-mono">
                      &gt; ACCESS <ChevronRight className="w-3 h-3 ml-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* COLORS - CYBERPUNK PALETTE */}
          <TabsContent value="colors" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono filter drop-shadow-[0_0_10px_rgb(34,197,94)]">
                [COLOR_SCHEME] CYBERPUNK_PALETTE
              </h2>
              <p className="text-green-400/70 font-mono text-sm">UNDERGROUND AESTHETICS | NEON WARFARE</p>
            </div>

            {/* Primary Cyber Colors */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2 font-mono">
                <Zap className="w-4 h-4" />
                PRIMARY_NEON
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "MATRIX_GREEN", hex: "#22C55E", class: "bg-green-500", description: "PRIMARY_INTERFACE" },
                  { name: "CYBER_CYAN", hex: "#06B6D4", class: "bg-cyan-500", description: "DATA_STREAMS" },
                  { name: "VOID_BLACK", hex: "#000000", class: "bg-black", description: "BACKGROUND_NULL" },
                  { name: "NEON_WHITE", hex: "#FFFFFF", class: "bg-white", description: "HIGH_CONTRAST" }
                ].map((color) => (
                  <motion.div 
                    key={color.name} 
                    className="space-y-3 group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-full h-20 ${color.class} border border-green-500/50 relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Hash className="w-6 h-6 text-black/20" />
                      </div>
                      <div className="absolute bottom-1 right-1 text-[8px] font-mono text-black/50">
                        HEX
                      </div>
                    </div>
                    <div>
                      <p className="text-green-400 font-medium font-mono text-sm">{color.name}</p>
                      <code className="text-green-400/70 text-xs font-mono">{color.hex}</code>
                      <p className="text-green-400/50 text-[10px] font-mono">{color.description}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-full text-xs opacity-0 group-hover:opacity-100 transition-opacity font-mono"
                      onClick={() => copyToClipboard(color.name, color.hex)}
                    >
                      {copiedComponent === color.name ? "[COPIED]" : "[COPY_HEX]"}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Threat Level Colors */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2 font-mono">
                <AlertTriangle className="w-4 h-4 animate-pulse" />
                THREAT_LEVELS
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "SECURE", hex: "#10B981", class: "bg-green-500", level: "LEVEL_0" },
                  { name: "CAUTION", hex: "#F59E0B", class: "bg-yellow-500", level: "LEVEL_2" },
                  { name: "DANGER", hex: "#EF4444", class: "bg-red-500", level: "LEVEL_4" },
                  { name: "CRITICAL", hex: "#8B5CF6", class: "bg-purple-500", level: "LEVEL_X" }
                ].map((color) => (
                  <div key={color.name} className="space-y-3">
                    <div className={`w-full h-20 ${color.class} border border-green-500/30 relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-black/30" />
                      </div>
                      <div className="absolute top-1 left-1 text-[8px] font-mono text-black/60">
                        {color.level}
                      </div>
                    </div>
                    <div>
                      <p className="text-green-400 font-medium font-mono text-sm">{color.name}</p>
                      <code className="text-green-400/70 text-xs font-mono">{color.hex}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* TYPOGRAPHY - TERMINAL STYLE */}
          <TabsContent value="typography" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono filter drop-shadow-[0_0_10px_rgb(34,197,94)]">
                [TYPOGRAPHY] MONOSPACE_TERMINAL
              </h2>
              <p className="text-green-400/70 font-mono text-sm">MACHINE_READABLE | HACKER_AESTHETIC</p>
            </div>

            <div className="space-y-8">
              {[
                { tag: "H1", size: "text-3xl", weight: "font-bold", sample: "[SYSTEM_TITLE] MAIN_HEADER", desc: "28px / BOLD", cyber: true },
                { tag: "H2", size: "text-xl", weight: "font-bold", sample: "[SECTION] SUB_HEADER", desc: "20px / BOLD" },
                { tag: "H3", size: "text-lg", weight: "font-semibold", sample: "[MODULE] COMPONENT_TITLE", desc: "18px / SEMI" },
                { tag: "CMD", size: "text-base", weight: "font-normal", sample: "> system.execute(command) --verbose", desc: "16px / MONO" },
                { tag: "LOG", size: "text-sm", weight: "font-normal", sample: "[INFO] Process completed successfully at 23:42:17", desc: "14px / NORM" },
                { tag: "DEBUG", size: "text-xs", weight: "font-normal", sample: "[DEBUG] Memory allocation: 0x7f8b8c000000", desc: "12px / NORM" }
              ].map((type) => (
                <div key={type.tag} className="border border-green-500/30 bg-black/50 p-6 hover:border-green-500/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-green-500/50 text-green-400 font-mono">{type.tag}</Badge>
                    <code className="text-green-400/50 text-xs font-mono">{type.desc}</code>
                  </div>
                  <div className={`${type.size} ${type.weight} mb-2 font-mono ${
                    type.cyber ? 'text-green-400 filter drop-shadow-[0_0_5px_rgb(34,197,94)]' : 'text-green-400'
                  }`}>
                    {type.sample}
                  </div>
                  <code className="text-green-400/60 text-xs font-mono">{type.size} {type.weight}</code>
                </div>
              ))}
            </div>

            {/* Code Terminal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2 font-mono">
                <Terminal className="w-4 h-4" />
                [TERMINAL] ERGOSCRIPT_CONSOLE
              </h3>
              <div className="bg-black border border-green-500/50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400/70 text-xs font-mono ml-2">ergo-shell v2.1.7</span>
                </div>
                <div className="bg-black p-4 font-mono text-sm">
                  <div className="text-green-400/70">{'// Σ-Protocol smart contract'}</div>
                  <div className="text-green-400">
                    <span className="text-cyan-400">val</span> <span className="text-yellow-400">sigmaProof</span> = <span className="text-purple-400">proveDlog</span>(pubKey)
                  </div>
                  <div className="text-green-400">
                    <span className="text-cyan-400">if</span> (HEIGHT {'>'} <span className="text-red-400">1000000</span>) sigmaProof
                  </div>
                  <div className="text-green-400/70">
                    <span className="text-red-400">$</span> <span className="animate-pulse">|</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* COMPONENTS - CYBER MODULES */}
          <TabsContent value="components" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono filter drop-shadow-[0_0_10px_rgb(34,197,94)]">
                [MODULES] CYBER_COMPONENTS
              </h2>
              <p className="text-green-400/70 font-mono text-sm">UNDERGROUND_INTERFACE | HACKER_TOOLKIT</p>
            </div>

            {/* Cyber Cards */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2 font-mono">
                <Database className="w-4 h-4" />
                [CONTAINERS] DATA_MODULES
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Hack Card */}
                <motion.div whileHover={{ y: -5, boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)" }} className="group">
                  <Card className="bg-black border-green-500/50 hover:border-green-400 transition-all duration-300 relative">
                    <div className="absolute top-2 right-2 text-[8px] font-mono text-red-400 animate-pulse">
                      HACK
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                          <Bug className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <CardTitle className="text-green-400 group-hover:text-green-300 transition-colors font-mono">
                            EXPLOIT_MODULE
                          </CardTitle>
                          <div className="text-green-400/60 text-xs font-mono">PENETRATION_READY</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-400/80 mb-4 font-mono text-sm">
                        VULNERABILITY_SCANNER | ZERO-DAY_DETECTION | CHAOS_INJECTION
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-red-500/20 text-red-400 border border-red-500/30 font-mono text-xs">
                          CRITICAL
                        </Badge>
                        <Button size="sm" variant="ghost" className="text-green-400 hover:text-green-300 font-mono text-xs">
                          &gt; EXECUTE <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Network Status */}
                <motion.div whileHover={{ y: -5, boxShadow: "0 0 25px rgba(6, 182, 212, 0.5)" }} className="group">
                  <Card className="bg-black border-cyan-500/50">
                    <div className="absolute top-2 right-2 text-[8px] font-mono text-green-400 animate-pulse">
                      LIVE
                    </div>
                    <CardHeader>
                      <CardTitle className="text-cyan-400 flex items-center justify-between font-mono">
                        <span>NETWORK_STATUS</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-green-400 text-xs">ONLINE</span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 font-mono">
                        <div>
                          <div className="text-xl font-bold text-cyan-400">99.97%</div>
                          <div className="text-[10px] text-green-400/60">UPTIME_SLA</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-green-400">1,247</div>
                          <div className="text-[10px] text-green-400/60">NODES_ACTIVE</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-green-400/60">BANDWIDTH</span>
                          <span className="text-green-400">97.4%</span>
                        </div>
                        <div className="h-1 bg-green-900/50 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400 w-[97%]" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Crypto Vault */}
                <motion.div whileHover={{ y: -5, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }} className="group">
                  <Card className="bg-black border-purple-500/50 hover:border-purple-400 transition-all duration-300">
                    <div className="absolute top-2 right-2 text-[8px] font-mono text-purple-400">
                      ENCRYPTED
                    </div>
                    <CardHeader>
                      <CardTitle className="text-purple-400 group-hover:text-purple-300 transition-colors flex items-center justify-between font-mono">
                        CRYPTO_VAULT
                        <Lock className="w-4 h-4" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-purple-400/80 text-xs font-mono">
                        ZERO-KNOWLEDGE | QUANTUM-RESISTANT | BULLETPROOF
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["ZK", "SNARK", "AES", "SHA3"].map((tech) => (
                          <Badge key={tech} className="bg-purple-500/20 text-purple-400 border border-purple-500/30 text-[10px] font-mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-purple-500/30">
                        <div className="flex items-center gap-2 text-[10px] text-purple-400/80 font-mono">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>VAULT_SECURE</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* System Alerts */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2 font-mono">
                <AlertTriangle className="w-4 h-4 animate-pulse" />
                [ALERTS] SYSTEM_WARNINGS
              </h3>
              <div className="space-y-4">
                {[
                  { type: "success", icon: CheckCircle, title: "TRANSACTION_CONFIRMED", desc: "Block hash: 0x7f8b8c000000 | Gas used: 21,000", color: "border-green-500 bg-green-500/10 text-green-400" },
                  { type: "warning", icon: AlertTriangle, title: "MEMPOOL_CONGESTION", desc: "Network activity: HIGH | Recommended gas: 50+ GWEI", color: "border-yellow-500 bg-yellow-500/10 text-yellow-400" },
                  { type: "error", icon: XCircle, title: "SMART_CONTRACT_FAILED", desc: "Validation error: Line 42 | Check sigma protocol syntax", color: "border-red-500 bg-red-500/10 text-red-400" },
                  { type: "hack", icon: Skull, title: "INTRUSION_DETECTED", desc: "Unauthorized access attempt | Source: [CLASSIFIED]", color: "border-purple-500 bg-purple-500/10 text-purple-400" }
                ].map((alert) => (
                  <Alert key={alert.type} className={`${alert.color} font-mono relative`}>
                    <alert.icon className="w-4 h-4" />
                    <div className="ml-3">
                      <h4 className="font-semibold text-sm">[{alert.title}]</h4>
                      <AlertDescription className="text-xs opacity-90 font-mono">
                        {alert.desc}
                      </AlertDescription>
                    </div>
                    <div className="absolute top-2 right-2 text-[8px] opacity-50 animate-pulse">
                      {alert.type.toUpperCase()}
                    </div>
                  </Alert>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* BUTTONS - CYBER CONTROLS */}
          <TabsContent value="buttons" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono filter drop-shadow-[0_0_10px_rgb(34,197,94)]">
                [CONTROLS] CYBER_INTERFACE
              </h2>
              <p className="text-green-400/70 font-mono text-sm">TACTICAL_OPERATIONS | COMMAND_PROTOCOLS</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Primary Controls */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2 font-mono">
                  <Target className="w-4 h-4" />
                  [PRIMARY] EXECUTE_COMMANDS
                </h3>
                <div className="space-y-4">
                  <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-mono font-bold border border-green-400 shadow-[0_0_10px_rgb(34,197,94)] hover:shadow-[0_0_15px_rgb(34,197,94)] transition-all duration-300">
                    <Terminal className="w-4 h-4 mr-2" />
                    [EXECUTE] DEPLOY_CONTRACT
                  </Button>
                  
                  <Button size="sm" className="bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold">
                    [SCAN] VULNERABILITIES
                  </Button>
                  
                  <Button size="lg" className="bg-purple-500 hover:bg-purple-400 text-black font-mono font-bold px-8">
                    <Lock className="w-5 h-5 mr-2" />
                    [ENCRYPT] VAULT_ACCESS
                  </Button>
                </div>
              </div>

              {/* Secondary Controls */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2 font-mono">
                  <Skull className="w-4 h-4" />
                  [SECONDARY] SYSTEM_CONTROLS
                </h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full border-red-500 text-red-400 hover:bg-red-500/10 font-mono">
                    <Download className="w-4 h-4 mr-2" />
                    [EXTRACT] PAYLOAD_DATA
                  </Button>
                  
                  <Button variant="ghost" className="w-full text-yellow-400 hover:bg-yellow-500/10 font-mono">
                    <Bug className="w-4 h-4 mr-2" />
                    [INJECT] CHAOS_ENGINE
                  </Button>
                  
                  <Button disabled className="w-full font-mono">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    [PROCESSING] BLOCKCHAIN_SYNC...
                  </Button>
                </div>
              </div>
            </div>

            {/* Command Icons */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-purple-400 flex items-center gap-2 font-mono">
                <Cpu className="w-4 h-4 animate-pulse" />
                [ICONS] QUICK_ACCESS
              </h3>
              <div className="flex gap-4">
                <Button size="icon" className="bg-green-500 hover:bg-green-400 border border-green-400">
                  <Search className="w-4 h-4 text-black" />
                </Button>
                <Button size="icon" variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10">
                  <Skull className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="text-yellow-400 hover:bg-yellow-500/10">
                  <Bug className="w-4 h-4" />
                </Button>
                <Button size="icon" className="bg-purple-500 hover:bg-purple-400">
                  <Lock className="w-4 h-4 text-black" />
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* PATTERNS - EXPLOITS */}
          <TabsContent value="patterns" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-red-400 mb-4 font-mono filter drop-shadow-[0_0_10px_rgb(239,68,68)]">
                [EXPLOITS] UNDERGROUND_PATTERNS
              </h2>
              <p className="text-red-400/70 font-mono text-sm">HACKER_METHODOLOGIES | CRYPTO_ANARCHIST_PROTOCOLS</p>
            </div>

            {/* Hack Terminal Pattern */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2 font-mono">
                <Terminal className="w-4 h-4" />
                [PATTERN_01] TERMINAL_INTERFACE
              </h3>
              <div className="bg-black border border-green-500/50 p-8 relative">
                <div className="absolute top-2 right-2 text-[8px] font-mono text-red-400 animate-pulse">
                  LIVE_HACK
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400/70 text-xs font-mono ml-2">root@ergo-mainnet:~#</span>
                </div>
                <h1 className="text-2xl font-bold text-green-400 mb-4 font-mono filter drop-shadow-[0_0_5px_rgb(34,197,94)]">
                  [SYSTEM_BREACH] BLOCKCHAIN_TERMINAL
                </h1>
                <p className="text-green-400/80 mb-6 font-mono text-sm">
                  &gt; UNAUTHORIZED ACCESS TO ERGO MAINNET DETECTED
                  <br />
                  &gt; SIGMA PROTOCOL EXPLOITATION IN PROGRESS...
                  <br />
                  &gt; [WARNING] ZERO-KNOWLEDGE PROOF BYPASSED
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-green-500 hover:bg-green-400 text-black font-mono">
                    <Skull className="w-4 h-4 mr-2" />
                    [INITIATE] HACK
                  </Button>
                  <Button variant="outline" className="border-red-500 text-red-400 font-mono">
                    <X className="w-4 h-4 mr-2" />
                    [ABORT] MISSION
                  </Button>
                </div>
              </div>
            </div>

            {/* Chaos Grid Pattern */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-purple-400 flex items-center gap-2 font-mono">
                <Bug className="w-4 h-4 animate-pulse" />
                [PATTERN_02] CHAOS_INJECTION
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Bug, title: "FUZZING", desc: "Random input generation for vulnerability discovery", threat: "CRITICAL" },
                  { icon: Zap, title: "MEMPOOL_ATTACK", desc: "Transaction ordering manipulation exploit", threat: "HIGH" },
                  { icon: Skull, title: "ZERO_DAY", desc: "Unknown vulnerability exploitation framework", threat: "UNKNOWN" }
                ].map((exploit) => (
                  <div key={exploit.title} className="bg-black border border-red-500/50 p-6 text-center relative">
                    <div className="absolute top-2 right-2 text-[8px] font-mono text-red-400">
                      {exploit.threat}
                    </div>
                    <exploit.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-red-400 mb-2 font-mono">{exploit.title}</h4>
                    <p className="text-red-400/70 text-xs font-mono">{exploit.desc}</p>
                    <div className="mt-4 pt-2 border-t border-red-500/30">
                      <div className="text-[10px] font-mono text-red-400/50">
                        STATUS: ARMED
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

        </Tabs>

        {/* CYBERPUNK FOOTER */}
        <footer className="text-center pt-16 pb-8 border-t border-green-500/50 mt-16 relative">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-black border border-green-500 flex items-center justify-center">
              <CyberHex size="w-8 h-8" className="text-green-400" glowing />
            </div>
          </div>
          
          <div className="space-y-6 mt-8">
            <div className="flex items-center justify-center gap-3">
              <CyberHex className="text-green-400" />
              <h3 className="text-lg font-semibold text-green-400 font-mono">ERGO_UNDERGROUND_SYSTEM</h3>
              <CyberHex className="text-red-400" />
            </div>
            
            <p className="text-green-400/70 font-mono text-sm">
              [CLASSIFIED] CYPHERPUNK DESIGN FRAMEWORK
              <br />
              CRYPTO-ANARCHIST INTERFACE | ZERO-TRUST ARCHITECTURE
            </p>
            
            <div className="flex justify-center gap-8 text-xs text-green-400/50 font-mono">
              <span>REACT_18.2.0</span>
              <span>•</span>
              <span>TYPESCRIPT_5.0</span>
              <span>•</span>
              <span>TAILWIND_3.3</span>
              <span>•</span>
              <span>ERGO_2.1.7</span>
            </div>

            <div className="text-[10px] text-red-400/70 font-mono">
              ⚠ THIS SYSTEM IS MONITORED ⚠
              <br />
              UNAUTHORIZED ACCESS WILL BE PROSECUTED
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
} 