"use client"

import {
  BookOpen,
  Code,
  Rocket,
  Shield,
  Cpu,
  GitBranch,
  Link as LinkIcon,
  Layers,
  Database,
  Share2,
  Wrench,
  LifeBuoy,
  FileQuestion,
  Github,
  ChevronRight,
  Search,
  ExternalLink,
  Play,
  Brain,
  Users,
  Settings,
  Zap,
  Terminal,
  Download,
  CheckCircle,
  AlertTriangle,
  Monitor,
  Smartphone,
  Globe,
  Package,
  Menu,
  X,
  Wallet,
  Coins,
  Pickaxe,
} from "lucide-react"

import { useState } from "react"
import NavLink from "@/components/nav-link"


const sidebarNav = [
  {
    title: "Getting Started",
    children: [
      { title: "Quickstart", href: "/build/docs/quickstart", icon: Rocket, description: "Build your first Ergo program directly in the browser" },
      { title: "Setup Local Environment", href: "/build/docs/setup", icon: Settings, description: "Install dependencies for Ergo development" },
      
    ],
  },
  {
    title: "Core Concepts",
    children: [
      { title: "eUTXO Model", href: "/build/docs/eutxo", icon: Layers, description: "How Ergo stores data" },
      { title: "Transactions & Scripts", href: "/build/docs/transactions", icon: Share2, description: "How to interact with the Ergo network" },
      { title: "Fees & Mining", href: "/build/docs/fees", icon: Zap, description: "Costs to send transactions on Ergo" },
      { title: "Smart Contracts", href: "/build/docs/contracts", icon: FileQuestion, description: "Smart contracts on Ergo" },
      { title: "Tokens & Assets", href: "/build/docs/tokens", icon: Package, description: "Native tokens and NFTs on Ergo" },
    ],
  },
  {
    title: "Development",
    children: [
      { title: "SDKs & Libraries", href: "/build/docs/sdks", icon: Code, description: "Available development tools" },
      { title: "Ergo SDKs", href: "/build/docs/sdks", icon: Package, description: "Client-side development libraries for Ergo" },
      { title: "RPC API", href: "/build/docs/api", icon: Share2, description: "Node interaction interface" },
      { title: "ErgoBox & ErgoTree", href: "/build/docs/ergobox", icon: Database, description: "Core data structures" },
      { title: "Advanced ErgoScript", href: "/build/docs/advanced-ergoscript", icon: Code, description: "Deep dive into ErgoScript patterns and best practices" },
      { title: "Developer Tools", href: "/build/docs/tools", icon: Wrench, description: "Explorers, wallets, debuggers" },
      { title: "Developer Toolkit", href: "/build/docs/toolkit", icon: Package, description: "Centralized CLI for Ergo development" },
      { title: "Testing", href: "/build/docs/testing", icon: GitBranch, description: "Testing ErgoScript smart contracts and dApps" },
    ],
  },
  {
    title: "Operating the Network",
    children: [
      { title: "Running a Node", href: "/build/docs/node", icon: Cpu, description: "Deploy and configure Ergo nodes" },
      { title: "System Requirements", href: "/build/docs/requirements", icon: Settings, description: "Hardware and software specs" },
      { title: "Mining", href: "/build/docs/mining", icon: Database, description: "Participate in network consensus" },
    ],
  },
  {
    title: "References",
    children: [
      { title: "RPC API Reference", href: "/build/docs/references/rpc-api", icon: Code, description: "Detailed documentation for Ergo Node RPC API" },
      { title: "ErgoScript Language Reference", href: "/build/docs/references/ergoscript-language", icon: BookOpen, description: "Comprehensive guide to ErgoScript syntax and functions" },
    ],
  },
  {
    title: "Ecosystem",
    children: [
      { title: "Overview", href: "/build/docs/ecosystem", icon: Globe, description: "Explore projects, dApps, and services in the Ergo ecosystem" },
      { title: "Grants & Funding", href: "/ecosystem/grants", icon: Coins, description: "Opportunities for project grants and ecosystem funding" },
      { title: "Mining Pools", href: "/ecosystem/mining", icon: Pickaxe, description: "Find and join Ergo mining pools" },
      { title: "Wallets", href: "/wallet", icon: Wallet, description: "Discover secure Ergo wallets" },
    ],
  },
  {
    title: "Community & Support",
    children: [
      { title: "Forums & Chats", href: "/build/docs/forums", icon: Users, description: "Connect with the community" },
      { title: "FAQ & Troubleshooting", href: "/build/docs/faq", icon: LifeBuoy, description: "Common issues and solutions" },
      { title: "Contribution Guide", href: "/build/docs/contribute", icon: Github, description: "How to contribute to Ergo" },
    ],
  },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute left-0 top-0 -z-10 h-1/3 w-full bg-[radial-gradient(circle_800px_at_50%_0px,#27272a,transparent)]" />

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 bg-neutral-900/80 border border-neutral-700 rounded-lg"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-x-8">
          {/* Sidebar Navigation */}
          <aside className={`lg:block ${mobileMenuOpen ? 'block' : 'hidden'} fixed lg:relative inset-0 z-40 lg:z-auto`}>
            <div className="lg:hidden absolute inset-0 bg-black/80" onClick={() => setMobileMenuOpen(false)} />
            <nav className={`lg:sticky lg:top-24 relative bg-neutral-900/95 lg:bg-transparent border-r border-neutral-800 lg:border-r-0 h-full lg:h-auto overflow-y-auto lg:overflow-visible p-6 lg:p-0`}>
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
                  />
                </div>
              </div>

              {/* Navigation */}
              <ul className="space-y-6">
                {sidebarNav.map(section => (
                  <li key={section.title}>
                    <h3 className="font-semibold text-sm mb-3 text-orange-400 uppercase tracking-wider">{section.title}</h3>
                    <ul className="space-y-1">
                      {section.children.map(link => (
                        <li key={link.title}>
                          <NavLink
                            href={link.href}
                            title={link.title}
                            icon={link.icon}
                            description={link.description}
                          />
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:pl-8">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-orange-400 prose-a:no-underline hover:prose-a:underline">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 