"use client"

import { useMemo, useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { ExternalLink, ZoomIn, ZoomOut, RefreshCw, Plus, Star, Download } from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"

// OPERATIONAL projects from /ecosystem
const projects = [
  { name: "Spectrum Finance", category: "DEFI", url: "https://spectrum.fi" },
  { name: "SigmaUSD", category: "DEFI", url: "https://sigmausd.io" },
  { name: "Rosen Bridge", category: "INFRASTRUCTURE", url: "https://rosen.tech" },
  { name: "ErgoMixer", category: "PRIVACY", url: "https://ergomixer.io" },
  { name: "Ergo Auction House", category: "NFT", url: "https://ergoauctions.org" },
  { name: "Nautilus Wallet", category: "WALLETS", url: "https://nautilus-wallet.io" },
  { name: "Paideia", category: "DAO", url: "https://paideia.im" },
  { name: "Oracle Pools", category: "ORACLES", url: "https://explorer.ergoplatform.com/en/oracle-pools-list" },
  { name: "Ergo Explorer", category: "TOOLS", url: "https://explorer.ergoplatform.com" },
  { name: "Mew Finance", category: "DEFI", url: "#" },
  { name: "SatErgo", category: "WALLETS", url: "https://satergo.com" },
  { name: "SAFEW", category: "WALLETS", url: "https://safew.org" },
  { name: "ErgoWatch", category: "TOOLS", url: "https://ergo.watch" },
  { name: "ErgoRaffle", category: "DEFI", url: "https://ergoraffle.com" },
  { name: "GuapSwap", category: "TOOLS", url: "#" },
  { name: "Sigmaverse", category: "TOOLS", url: "https://sigmaverse.io" },
  { name: "ErgOne", category: "TOOLS", url: "#" },
  { name: "Hodlbox", category: "DEFI", url: "#" },
  { name: "TokenJay", category: "DEFI", url: "#" },
  { name: "Single Tx Swap", category: "TOOLS", url: "#" },
  { name: "Crux Finance", category: "TOOLS", url: "#" },
  { name: "Fleet SDK", category: "TOOLS", url: "https://github.com/fleet-sdk/fleet" },
  { name: "AppKit", category: "TOOLS", url: "https://github.com/ergoplatform/ergo-appkit" },
  { name: "SigmaRust", category: "TOOLS", url: "https://github.com/ergoplatform/sigma-rust" },
  { name: "SigRSV", category: "DEFI", url: "#" },
]

const categories = [
  "DEFI",
  "INFRASTRUCTURE",
  "ORACLES",
  "PRIVACY",
  "NFT",
  "WALLETS",
  "DAO",
  "TOOLS",
] as const

const catColor: Record<string, string> = {
  DEFI: "#FF7A18",
  INFRASTRUCTURE: "#16B1FF",
  ORACLES: "#7C4DFF",
  PRIVACY: "#22C55E",
  NFT: "#F59E0B",
  WALLETS: "#38BDF8",
  DAO: "#A3E635",
  TOOLS: "#F43F5E",
}

const featuredSet = new Set(["Spectrum Finance", "Rosen Bridge", "Nautilus Wallet", "SigmaUSD"]) // demo

function hashToUnit(name: string) {
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0
  return (h % 1000) / 1000
}

function truncateLabel(text: string, max: number) {
  if (text.length <= max) return text
  return text.slice(0, Math.max(0, max - 1)) + "…"
}

function hexPoints(cx: number, cy: number, r: number) {
  const pts: string[] = []
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i // flat-top hex (0 degrees rotation)
    const x = cx + r * Math.cos(angle)
    const y = cy + r * Math.sin(angle)
    pts.push(`${x},${y}`)
  }
  return pts.join(" ")
}

function MapClient() {
  const [query, setQuery] = useState("")
  const [activeCats, setActiveCats] = useState<string[]>([...categories])
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState<string | null>(null)
  const [showFeatured, setShowFeatured] = useState(false)
  const hoverTimeoutRef = useRef<number | null>(null)
  const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || (navigator as any)?.maxTouchPoints > 0)
  const dragRef = useRef<{ dragging: boolean; startX: number; startY: number; baseX: number; baseY: number }>({ dragging: false, startX: 0, startY: 0, baseX: 0, baseY: 0 })
  const svgRef = useRef<SVGSVGElement | null>(null)
  const [isNarrow, setIsNarrow] = useState(false)
  const [jumpActive, setJumpActive] = useState<string | null>(null)

  const filtered = useMemo(
    () =>
      projects
        .filter((p) => activeCats.includes(p.category))
        .filter((p) => (showFeatured ? featuredSet.has(p.name) : true))
        .filter((p) => p.name.toLowerCase().includes(query.toLowerCase())),
    [query, activeCats, showFeatured],
  )

  // viewport helper
  useEffect(() => {
    const update = () => setIsNarrow(typeof window !== "undefined" && window.innerWidth < 900)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // Compute cluster centers (circle layout)
  const clusters = useMemo(() => {
    const cx = 800, cy = 550, R = 350
    return categories.map((cat, i) => {
      const theta = (i / categories.length) * Math.PI * 2 - Math.PI / 2
      return { cat, x: cx + R * Math.cos(theta), y: cy + R * Math.sin(theta) }
    })
  }, [])

  const nodes = useMemo(() => {
    return filtered.map((p, idx) => {
      const center = clusters.find((c) => c.cat === p.category)!
      const r = 90 + hashToUnit(p.name) * 120
      const a = hashToUnit(p.name + "a") * Math.PI * 2
      const x = center.x + r * Math.cos(a)
      const y = center.y + r * Math.sin(a)
      const featured = featuredSet.has(p.name)
      return { ...p, x, y, cx: center.x, cy: center.y, featured, idx }
    })
  }, [filtered, clusters])

  // Auto-focus first matched on search (no teleport if empty)
  useEffect(() => {
    if (!query || !nodes.length) return
    const n = nodes[0]
    if (!n) return
    const s = 1.2
    setScale(s)
    setOffset({ x: 800 - n.x * s, y: 550 - n.y * s })
  }, [query, nodes])

  // Reset zoom when query cleared
  useEffect(() => {
    if (query === "") {
      setScale(1)
      setOffset({ x: 0, y: 0 })
    }
  }, [query])

  // interactions
  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const delta = e.deltaY > 0 ? -0.08 : 0.08
    setScale((s) => Math.min(2, Math.max(0.5, s + delta)))
  }

  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dragRef.current = { dragging: true, startX: e.clientX, startY: e.clientY, baseX: offset.x, baseY: offset.y }
  }
  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!dragRef.current.dragging) return
    const dx = e.clientX - dragRef.current.startX
    const dy = e.clientY - dragRef.current.startY
    setOffset({ x: dragRef.current.baseX + dx, y: dragRef.current.baseY + dy })
  }
  const endDrag = () => (dragRef.current.dragging = false)

  // Smooth animated pan/zoom to cluster
  const animatePanZoom = (x: number, y: number, targetScale = 1.3, durationMs = 450) => {
    const startScale = scale
    const startOffset = { ...offset }
    const endScale = targetScale
    const endOffset = { x: 800 - x * endScale, y: 550 - y * endScale }
    const start = performance.now()
    const ease = (t: number) => 1 - Math.pow(1 - t, 3) // easeOutCubic

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      const e = ease(t)
      const curScale = startScale + (endScale - startScale) * e
      const curOffsetX = startOffset.x + (endOffset.x - startOffset.x) * e
      const curOffsetY = startOffset.y + (endOffset.y - startOffset.y) * e
      setScale(curScale)
      setOffset({ x: curOffsetX, y: curOffsetY })
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  const focusCluster = (cat: string) => {
    const c = clusters.find((k) => k.cat === cat)
    if (!c) return
    setJumpActive(cat)
    setTimeout(() => setJumpActive((cur) => (cur === cat ? null : cur)), 500)
    animatePanZoom(c.x, c.y, 1.3, 450)
  }

  const downloadSVG = () => {
    const svg = svgRef.current
    if (!svg) return
    const serializer = new XMLSerializer()
    const source = serializer.serializeToString(svg)
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "ergo-ecosystem-map.svg"
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
  }

  const downloadPNG = () => {
    const svg = svgRef.current
    if (!svg) return
    const serializer = new XMLSerializer()
    const source = serializer.serializeToString(svg)
    const svgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = 1600
      canvas.height = 1100
      const ctx = canvas.getContext("2d")!
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0)
      const pngUrl = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = pngUrl
      link.download = "ergo-ecosystem-map.png"
      document.body.appendChild(link)
      link.click()
      link.remove()
    }
    img.src = svgUrl
  }

  const totalProjects = projects.length
  const totalCategories = categories.length
  const trendingCount = projects.filter((p) => featuredSet.has(p.name)).length

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-16">
        <div className="relative z-10 max-w-7xl mx-auto pt-28 pb-16">
        {/* Hero */}
        <div className="pt-6 pb-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Ecosystem Map</h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-6 max-w-2xl">
                Visual map of Ergo projects, tools and teams. Explore clusters, filter by category, and discover what’s being built.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-900/50 text-neutral-300"><span className="text-white font-semibold mr-1">{totalProjects}</span>projects</div>
                <div className="px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-900/50 text-neutral-300"><span className="text-white font-semibold mr-1">{totalCategories}</span>categories</div>
                <div className="px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-900/50 text-neutral-300"><span className="text-white font-semibold mr-1">{trendingCount}</span>trending</div>
              </div>
            </div>
            <div className="flex items-center lg:justify-end gap-2">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black">
                <Link href="/ecosystem" className="inline-flex items-center gap-2">Browse Ecosystem</Link>
              </Button>
              <Button asChild variant="outline" className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60">
                <Link href="https://forms.gle/placeholder" target="_blank" className="inline-flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Suggest a Project
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-3 items-center mb-4">
          <div className="flex-1 w-full md:w-auto">
            <Input placeholder="Search projects..." value={query} onChange={(e) => setQuery(e.target.value)} className="bg-neutral-900/80 border-neutral-700 h-11" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setScale((s) => Math.min(2, s + 0.1))} className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60"><ZoomIn className="w-4 h-4" /></Button>
            <Button variant="outline" onClick={() => setScale((s) => Math.max(0.5, s - 0.1))} className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60"><ZoomOut className="w-4 h-4" /></Button>
            <Button variant="outline" onClick={() => { setScale(1); setOffset({ x: 0, y: 0 }) }} className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60"><RefreshCw className="w-4 h-4" /></Button>
            <Button variant="outline" onClick={() => setShowFeatured((v) => !v)} className={`border-neutral-700 text-neutral-200 hover:bg-neutral-900/60 ${showFeatured ? "border-orange-500/50 text-orange-400" : ""}`}>
              <Star className="w-4 h-4 mr-1" /> Trending
            </Button>
            <Button variant="outline" onClick={downloadPNG} className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60"><Download className="w-4 h-4 mr-1" /> PNG</Button>
            <Button variant="outline" onClick={downloadSVG} className="border-neutral-700 text-neutral-200 hover:bg-neutral-900/60">SVG</Button>
          </div>
        </div>

        {/* Jump to cluster (navigation only) */}
        <div className="mb-2 overflow-x-auto -mx-1 px-1">
          <div className="flex flex-nowrap md:flex-wrap gap-1 items-center text-xs text-neutral-400 whitespace-nowrap">
            <span className="mr-1">Jump to:</span>
            {categories.map((c) => (
              <button
                key={`jump-${c}`}
                onClick={() => focusCluster(c)}
                className={`inline-block px-3 py-1 rounded border transition-colors font-medium ${jumpActive === c ? "border-orange-500/70 text-orange-400 bg-orange-500/10" : "border-neutral-700 text-neutral-300 hover:bg-neutral-900/70"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* subtle divider */}
        <div className="h-px my-3 bg-neutral-800/60" />

        {/* Category filters (show/hide) */}
        <div className="flex flex-wrap gap-2 mb-8 items-center">
          <span className="text-sm text-neutral-400 mr-2 font-semibold">Filter by category:</span>
          {categories.map((c) => {
            const active = activeCats.includes(c)
            return (
              <button
                key={c}
                onClick={() => setActiveCats((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]))}
                className={`rounded-full px-4 py-2 border transition-colors font-semibold ${active ? "bg-orange-500/10 border-orange-500/60 text-orange-400 shadow-md" : "border-neutral-700 text-neutral-300 hover:bg-neutral-900/60"}`}
                style={{ boxShadow: active ? `0 0 0 2px ${catColor[c]}33` : undefined }}
              >
                {c}
              </button>
            )
          })}
          {activeCats.length !== categories.length && (
            <Button
              variant="outline"
              onClick={() => setActiveCats([...categories])}
              className="border-orange-500/40 text-orange-400 hover:bg-orange-500/10 ml-2"
            >
              Clear
            </Button>
          )}
        </div>

        {/* Map Area */}
        <Card className="bg-black border-neutral-800 rounded-xl">
          <CardContent className="p-2">
            <div
              className="relative overflow-hidden rounded-lg cursor-grab active:cursor-grabbing bg-black"
              onWheel={onWheel}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseLeave={endDrag}
              onMouseUp={endDrag}
              style={{ height: 700 }}
            >
              {nodes.length === 0 ? (
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                  No projects found
                </div>
              ) : (
                <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 1600 1100" className="block">
                  <g transform={`translate(${offset.x},${offset.y}) scale(${scale})`}>
                    {/* Edges */}
                    {nodes.map((n) => (
                      <motion.line
                        key={`e-${n.name}`}
                        x1={n.cx}
                        y1={n.cy}
                        x2={n.x}
                        y2={n.y}
                        stroke={catColor[n.category]}
                        strokeOpacity={0.25}
                        strokeWidth={1}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: n.idx * 0.01 }}
                      />
                    ))}

                    {/* Cluster centers */}
                    {clusters.map((c) => (
                      <g key={c.cat}>
                        <polygon points={hexPoints(c.x, c.y, 30)} fill="#0a0a0a" stroke={catColor[c.cat]} strokeOpacity={0.6} strokeWidth={2} />
                        <text x={c.x} y={c.y + 4} textAnchor="middle" fontSize={12} fill="#9CA3AF">
                          {c.cat}
                        </text>
                      </g>
                    ))}

                    {/* Project nodes */}
                    {nodes.map((n) => {
                      const tooltipX = n.x + (n.x > 1200 ? -256 : 16)
                      const tooltipY = Math.min(Math.max(n.y - 34, 10), 1100 - 90)
                      const tooltipAlign = n.x > 1200 ? "right" : "left"
                      const label = truncateLabel(n.name, 20)
                      return (
                        <motion.g
                          key={n.name}
                          whileHover={{ scale: 1.12 }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 + n.idx * 0.02 }}
                          onMouseEnter={() => {
                            if (hoverTimeoutRef.current) {
                              clearTimeout(hoverTimeoutRef.current)
                              hoverTimeoutRef.current = null
                            }
                            setHovered(n.name)
                          }}
                          onMouseLeave={() => {
                            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
                            hoverTimeoutRef.current = window.setTimeout(() => setHovered((h) => (h === n.name ? null : h)), 120)
                          }}
                          onClick={() => {
                            if (isTouch && hovered !== n.name) {
                              setHovered(n.name)
                              return
                            }
                            window.open(n.url, "_blank", "noopener")
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {n.featured && (
                            <circle cx={n.x} cy={n.y} r={n.featured ? 16 : 12} fill="none" stroke="#ffffff" strokeOpacity={0.15} strokeWidth={2} />
                          )}
                          <circle cx={n.x} cy={n.y} r={n.featured ? 12 : 10} fill={catColor[n.category]} stroke={n.featured ? "#fff" : "none"} strokeOpacity={n.featured ? 0.3 : 0} />
                          {!isNarrow && <text x={n.x + 14} y={n.y + 4} fontSize={12} fill="#E5E7EB">{label}</text>}
                          {hovered === n.name && (
                            <foreignObject x={tooltipX} y={tooltipY} width={240} height={90} style={{ pointerEvents: "auto" }}>
                              <div className="bg-neutral-900/90 rounded-lg px-3 py-2 text-xs shadow-xl border border-neutral-700 text-white" style={{ textAlign: tooltipAlign as any }}>
                                <div className="font-semibold flex items-center gap-1">
                                  {n.name}
                                  {n.featured && <Star className="w-3 h-3 text-orange-400" />}
                                </div>
                                <div className="text-[11px] text-neutral-300 mb-1">{n.category}</div>
                                <a href={n.url} target="_blank" rel="noreferrer" className="text-orange-400 underline inline-flex items-center gap-1">
                                  Open <ExternalLink className="w-3 h-3" />
                                </a>
                                {isTouch && (
                                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setHovered(null) }} className="ml-2 text-[11px] text-neutral-400 underline">
                                    Close
                                  </button>
                                )}
                              </div>
                            </foreignObject>
                          )}
                        </motion.g>
                      )
                    })}
                  </g>
                </svg>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
          <span>Legend:</span>
          {categories.map((c) => (
            <span key={c} className="inline-flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: catColor[c] }} />
              {c}
            </span>
          ))}
        </div>
        </div>
      </div>
    </BackgroundWrapper>
  )
}

export default MapClient 