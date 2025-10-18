"use client"

import { useEffect, useMemo, useState } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HiddenBreadcrumbs } from "@/components/seo/hidden-breadcrumbs"
import {
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  ExternalLink,
  LayoutGrid,
  List,
  ChevronLeft,
  ChevronRight,
  ArrowRightLeft,
  DollarSign,
  GitBranch,
  Shuffle,
  Gavel,
  Wallet,
  Banknote,
  Building2,
  Eye,
  Rocket,
  Store,
  Gem,
  HardDrive,
  Shield,
  BarChart3,
  Gamepad2,
  Coins,
  Globe,
  Megaphone,
  Package,
  Flower,
  RefreshCw,
  Bot,
  Code,
  Wrench,
  Microscope,
  Database,
  CreditCard,
  Home,
  Layers,
  Activity,
  ArrowRight,
} from "lucide-react"
import { projects as rawProjects, featuredProjects as rawFeatured, categoryOrder, statusOrder, sortProjectsForListing } from "./_data"

const projectIcons = {
  "Spectrum Finance": ArrowRightLeft,
  "SigmaUSD": DollarSign,
  "Rosen Bridge": GitBranch,
  "ErgoMixer": Shuffle,
  "Ergo Auction House": Gavel,
  "Nautilus Wallet": Wallet,
  "DuckPools": Banknote,
  "Paideia": Building2,
  "Oracle Pools": Eye,
  "Ergo Explorer": Activity,
  "ErgoPad": Rocket,
  "SkyHarbor": Store,
  "Mew Finance": Gem,
  "SatErgo": HardDrive,
  "SAFEW": Shield,
  "ErgoWatch": BarChart3,
  "CyberPixels": Gamepad2,
  "SigmaFi": Coins,
  "ErgoRaffle": Globe,
  "Minotaur Wallet": Wallet,
  "GuapSwap": Megaphone,
  "DexyGold": Package,
  "SigmaO": Flower,
  "Blitz TCG": RefreshCw,
  "Sigmaverse": Bot,
  "ErgOne": Code,
  "Hodlbox": Wrench,
  "Lilium": Microscope,
  "TokenJay": Database,
  "Single Tx Swap": CreditCard,
  "Crux Finance": Home,
  "Fleet SDK": Code,
  "AppKit": Wrench,
  "SigmaRust": Database,
  "Gluon": Microscope,
  "ChainCash": CreditCard,
  "SigRSV": DollarSign,
  "EXLE": Home,
}

const statusConfig = {
  OPERATIONAL: { icon: <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" focusable="false" />, color: "text-green-400" },
  TESTING: { icon: <Clock className="w-4 h-4 text-yellow-400" aria-hidden="true" focusable="false" />, color: "text-yellow-400" },
  PROTOTYPE: { icon: <AlertCircle className="w-4 h-4 text-orange-400" aria-hidden="true" focusable="false" />, color: "text-orange-400" },
}

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function EcosystemClient() {
  const t = useTranslations("ecosystem")
  const [searchTerm, setSearchTerm] = useState("")
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [selectedStatus, setSelectedStatus] = useState("ALL")
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)

  const projects = useMemo(() => sortProjectsForListing(rawProjects), [])
  const featuredProjects = rawFeatured

  useEffect(() => {
    setViewMode("list")
    try { localStorage.setItem("ecosystemViewMode", "list") } catch {}
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300)
    return () => clearTimeout(timer)
  }, [searchTerm])

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) =>
        project.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) &&
        (selectedCategory === "ALL" || project.category === selectedCategory) &&
        (selectedStatus === "ALL" || project.status === selectedStatus),
    )
  }, [debouncedSearchTerm, selectedCategory, selectedStatus, projects])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden" style={{ overflowAnchor: "none" }}>
      {/* Hidden Breadcrumbs for SEO */}
      <HiddenBreadcrumbs 
        items={[]} 
        currentPage="Ecosystem" 
      />
      
      {/* Background pulses */}
      <div className="absolute inset-0 z-0" aria-hidden="true" role="presentation">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-orange-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 pt-20">
        {/* SEO Header - visually hidden */}
        <header className="sr-only">
          <h1>{t("title")}</h1>
          <p>{t("subtitle")}</p>
        </header>

        {/* Featured */}
        <motion.section className="max-w-7xl mx-auto px-4 py-12" variants={itemVariants} initial="hidden" animate="visible">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold text-white">{t("featuredProjects.title")}</h2>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={() => setCurrentFeaturedIndex((p) => Math.max(0, p - 1))} disabled={currentFeaturedIndex === 0} className="border-neutral-700 text-neutral-2 00 hover:bg-neutral-900/60 hover:border-orange-500/50 hover:text-orange-400">
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" focusable="false" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => setCurrentFeaturedIndex((p) => Math.min(featuredProjects.length - 3, p + 1))} disabled={currentFeaturedIndex >= featuredProjects.length - 3} className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-orange-500/50 hover:text-orange-400">
                  <ChevronRight className="w-4 h-4" aria-hidden="true" focusable="false" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(currentFeaturedIndex, currentFeaturedIndex + 3).map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="bg-neutral-900/50 border-0 rounded-xl hover:ring-1 hover:ring-orange-500/30 transition-all duration-200 h-full flex flex-col">
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-500/30">
                            {(() => {
                              const IconComponent = (projectIcons as any)[project.name] || Activity
                              return <IconComponent className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />
                            })()}
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-white">{project.name}</h2>
                            <Badge variant="secondary" className="mt-1 bg-neutral-800 text-neutral-300 border-neutral-700">{project.category}</Badge>
                          </div>
                        </div>
                        <div className={`flex items-center gap-2 ${(statusConfig as any)[project.status]?.color}`}>
                          {(statusConfig as any)[project.status]?.icon}
                        </div>
                      </div>
                      <p className="text-neutral-400 mb-6 flex-1">{project.description}</p>
                      <Button asChild variant="outline" className="w-full mt-auto border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-orange-500 hover:text-orange-400">
                        <Link href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} (opens in a new tab)`} className="flex items-center gap-2">
                          Visit Project
                          <ExternalLink className="w-4 h-4" aria-hidden="true" focusable="false" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

        {/* Filters */}
        <motion.div variants={itemVariants} initial="hidden" animate="visible" className="bg-black/50 backdrop-blur-lg py-6 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-bold text-white">All Projects</h2>
                  <div className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-neutral-400 min-w-[80px] text-center">{t("search.resultsCount", { count: filteredProjects.length })}</div>
                </div>
              </div>
              <div className="relative w-full md:w-auto md:flex-1" style={{ contain: "layout paint" }}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" aria-hidden="true" focusable="false" />
                <Input type="text" placeholder={t("search.placeholder")} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-neutral-900/80 border-neutral-700 pl-12 h-12 rounded-xl focus:border-orange-500/50" />
                <div className="h-0 md:h-0" />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => { setViewMode("list"); try { localStorage.setItem("ecosystemViewMode", "list") } catch {} }} className={`h-12 w-12 border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-orange-500/50 hover:text-orange-400 ${viewMode === "list" ? "bg-neutral-800 border-neutral-600 text-white" : ""}`}>
                  <List aria-hidden="true" focusable="false" />
                </Button>
                <Button variant="outline" onClick={() => { setViewMode("grid"); try { localStorage.setItem("ecosystemViewMode", "grid") } catch {} }} className={`h-12 w-12 border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-orange-500/50 hover:text-orange-400 ${viewMode === "grid" ? "bg-neutral-800 border-neutral-600 text-white" : ""}`}>
                  <LayoutGrid aria-hidden="true" focusable="false" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-4" style={{ contain: "layout paint" }}>
              {["ALL", ...categoryOrder].map((category) => (
                <Button key={category} variant="outline" onClick={() => setSelectedCategory(category)} className={`rounded-full backdrop-blur-sm border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-orange-500/50 hover:text-orange-400 ${selectedCategory === category ? "bg-orange-500/10 border-orange-500/50 text-orange-400" : ""}`}>
                  {category === "ALL" ? t("filters.all") : t(`filters.${category.toLowerCase()}`)}
                </Button>
              ))}
            </div>
            <div className="h-2" />
            <div className="flex flex-wrap gap-2 justify-center" style={{ contain: "layout paint" }}>
              {["ALL", ...statusOrder].map((status) => (
                <Button key={status} variant="outline" onClick={() => setSelectedStatus(status)} className={`rounded-full backdrop-blur-sm border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-orange-500/50 hover:text-orange-400 ${selectedStatus === status ? "bg-orange-500/10 border-orange-500/50 text-orange-400" : ""}`}>
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Listing */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className={`max-w-7xl mx-auto px-4 pb-12 min-h-[60vh] ${viewMode === "grid" ? "grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "flex flex-col"}`} style={{ overflowAnchor: "none" }}>
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              {viewMode === "grid" ? (
                <Card className="bg-neutral-900/50 border-0 rounded-xl hover:ring-1 hover:ring-orange-500/30 transition-all duration-200 h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-500/30">
                          {(() => {
                            const IconComponent = (projectIcons as any)[project.name] || Activity
                            return <IconComponent className="w-6 h-6 text-orange-400" aria-hidden="true" focusable="false" />
                          })()}
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white">{project.name}</h2>
                          <Badge variant="secondary" className="mt-1 bg-neutral-800 text-neutral-300 border-neutral-700">{project.category}</Badge>
                        </div>
                      </div>
                      <div className={`flex items-center gap-2 ${(statusConfig as any)[project.status]?.color}`}>
                        {(statusConfig as any)[project.status]?.icon}
                      </div>
                    </div>
                    <p className="text-neutral-400 mb-6 flex-1">{project.description}</p>
                    <Button asChild variant="outline" className="w-full mt-auto border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 hover:border-orange-500 hover:text-orange-400">
                      <Link href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} (opens in a new tab)`} className="flex items-center gap-2">
                        Visit Project
                        <ExternalLink className="w-4 h-4" aria-hidden="true" focusable="false" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Link href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} (opens in a new tab)`} className="block p-4 rounded-lg hover:bg-neutral-900/80 transition-colors">
                  <div className="grid grid-cols-12 items-center gap-4">
                    <div className="col-span-12 md:col-span-3 flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-orange-500/20 border border-orange-500/30">
                        {(() => {
                          const IconComponent = (projectIcons as any)[project.name] || Activity
                          return <IconComponent className="w-5 h-5 text-orange-400" aria-hidden="true" focusable="false" />
                        })()}
                      </div>
                      <h3 className="font-semibold text-white">{project.name}</h3>
                    </div>
                    <div className="col-span-6 md:col-span-2">
                      <Badge variant="outline" className="border-neutral-700 text-neutral-300">{project.category}</Badge>
                    </div>
                    <div className={`col-span-6 md:col-span-2 flex items-center gap-2 text-sm ${(statusConfig as any)[project.status]?.color}`}>
                      {(statusConfig as any)[project.status]?.icon}
                      <span>{project.status}</span>
                    </div>
                    <div className="col-span-11 md:col-span-4 md:col-start-8">
                      <p className="text-sm text-neutral-400 line-clamp-2">{project.description}</p>
                    </div>
                    <div className="col-span-1 flex justify-end text-neutral-400">
                      <ExternalLink className="w-4 h-4" aria-hidden="true" focusable="false" />
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Related Content */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Explore More
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-neutral-900/50 border-0 backdrop-blur-sm rounded-xl hover:ring-1 hover:ring-orange-500/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    Technology
                  </h3>
                  <p className="text-neutral-300 mb-4">
                    Learn the tech that powers these projects
                  </p>
                  <Link href="/technology" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
                    Explore Tech
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/50 border-0 backdrop-blur-sm rounded-xl hover:ring-1 hover:ring-orange-500/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    Use Cases
                  </h3>
                  <p className="text-neutral-300 mb-4">
                    See what you can build on Ergo
                  </p>
                  <Link href="/use" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
                    View Use Cases
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/50 border-0 backdrop-blur-sm rounded-xl hover:ring-1 hover:ring-orange-500/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                    Developer Grants
                  </h3>
                  <p className="text-neutral-300 mb-4">
                    Funding opportunities for builders
                  </p>
                  <Link href="/ecosystem/grants" className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
} 