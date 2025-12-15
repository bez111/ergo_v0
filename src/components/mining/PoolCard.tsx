"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from "@/i18n/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Server, ExternalLink } from "lucide-react"

export type Pool = {
  name: string
  category: string
  url: string
  location: string
  fee: string
  paymentSystem: string
  minPayout: string
  hashrate: string
  miners: number
  poolShare: string
  uptime: string
  features?: string[]
  mainFeatures?: string[]
  servers?: string[]
  tags: string[]
}

export function PoolCard({ pool }: { pool: Pool }) {
  return (
    <Card className="relative bg-black/80 border border-white/10 rounded-3xl transition-all duration-300 hover:bg-black/90 hover:border-orange-400/40 hover:-translate-y-0.5 h-full flex flex-col">
      <CardContent className="p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 rounded-md bg-orange-500/20 border border-orange-500/30">
            <Server className="w-5 h-5 text-orange-400" />
          </div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            {pool.name}
            {parseFloat(pool.poolShare) > 15 && (
              <span className="bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 text-[10px] px-2 py-0.5 rounded">Large Pool</span>
            )}
            {pool.tags?.includes("beginner") && (
              <span className="bg-green-500/20 text-green-500 border border-green-500/30 text-[10px] px-2 py-0.5 rounded">Beginner</span>
            )}
          </h3>
        </div>

        {pool.mainFeatures && pool.mainFeatures.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {pool.mainFeatures.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="bg-black/60 border border-white/20 text-neutral-300 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-neutral-400 font-medium mb-1">
          {pool.location} • {pool.paymentSystem}
        </p>
        <p className="text-neutral-300 text-base mb-5">
          Fee: <span className="text-orange-400 font-semibold">{pool.fee}</span> • Min Payout: {pool.minPayout}
        </p>

        <div className="grid grid-cols-3 gap-3 text-sm mb-6">
          <div className="p-4 bg-black/60 rounded-lg border border-white/20">
            <div className="flex justify-between items-center">
              <span className="text-neutral-400">Hashrate</span>
              <span className="text-white font-semibold">{pool.hashrate}</span>
            </div>
          </div>
          <div className="p-4 bg-black/60 rounded-lg border border-white/20">
            <div className="flex justify-between items-center">
              <span className="text-neutral-400">Miners</span>
              <span className="text-white font-semibold">{pool.miners.toLocaleString()}</span>
            </div>
          </div>
          <div className="p-4 bg-black/60 rounded-lg border border-white/20">
            <div className="flex justify-between items-center">
              <span className="text-neutral-400">Uptime</span>
              <span className="text-white font-semibold">{pool.uptime}</span>
            </div>
          </div>
        </div>

        <Button
          asChild
          className="mt-auto w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-black/60 text-white transition-all hover:bg-white/10 hover:border-orange-400/40 hover:text-orange-400 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <Link href={pool.url} target="_blank" className="flex items-center gap-2">
            Visit Pool <ExternalLink className="w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export function PoolCardSkeleton() {
  return (
    <div className="relative bg-black/80 border border-white/10 rounded-3xl h-full p-8 animate-pulse">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-md bg-black/60 border border-white/20" />
        <div className="h-6 w-48 bg-black/60 rounded" />
      </div>
      <div className="flex gap-2 mb-2">
        <div className="h-5 w-20 bg-black/60 rounded" />
        <div className="h-5 w-16 bg-black/60 rounded" />
      </div>
      <div className="h-4 w-64 bg-black/60 rounded mb-2" />
      <div className="h-4 w-56 bg-black/60 rounded mb-5" />
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="h-12 bg-black/60 rounded border border-white/20" />
        <div className="h-12 bg-black/60 rounded border border-white/20" />
        <div className="h-12 bg-black/60 rounded border border-white/20" />
      </div>
      <div className="h-10 bg-black/60 rounded border border-white/20" />
    </div>
  )
} 