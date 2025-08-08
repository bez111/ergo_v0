"use client"

import Link from "next/link"
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
    <Card className="relative bg-neutral-900/50 border border-neutral-700 rounded-xl transition-all duration-200 hover:border-brand-primary-500/30 hover:-translate-y-0.5 h-full flex flex-col">
      <CardContent className="p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 rounded-md bg-brand-primary-500/20 border border-brand-primary-500/30">
            <Server className="w-5 h-5 text-brand-primary-400" />
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
              <span key={idx} className="bg-neutral-900/60 border border-neutral-700 text-neutral-300 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-neutral-400 font-medium mb-1">
          {pool.location} • {pool.paymentSystem}
        </p>
        <p className="text-neutral-300 text-base mb-5">
          Fee: <span className="text-brand-primary-400 font-semibold">{pool.fee}</span> • Min Payout: {pool.minPayout}
        </p>

        <div className="grid grid-cols-3 gap-3 text-sm mb-6">
          <div className="p-4 bg-neutral-900/50 rounded-lg border border-brand-primary-500/20">
            <div className="flex justify-between items-center">
              <span className="text-neutral-400">Hashrate</span>
              <span className="text-white font-semibold">{pool.hashrate}</span>
            </div>
          </div>
          <div className="p-4 bg-neutral-900/50 rounded-lg border border-brand-primary-500/20">
            <div className="flex justify-between items-center">
              <span className="text-neutral-400">Miners</span>
              <span className="text-white font-semibold">{pool.miners.toLocaleString()}</span>
            </div>
          </div>
          <div className="p-4 bg-neutral-900/50 rounded-lg border border-brand-primary-500/20">
            <div className="flex justify-between items-center">
              <span className="text-neutral-400">Uptime</span>
              <span className="text-white font-semibold">{pool.uptime}</span>
            </div>
          </div>
        </div>

        <Button
          asChild
          className="mt-auto w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-brand-primary-500/50 bg-neutral-900/50 text-neutral-200 transition-all hover:border-brand-primary-500 hover:text-brand-primary-400 hover:bg-neutral-900/60 focus-visible:ring-2 focus-visible:ring-brand-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
    <div className="relative bg-neutral-900/50 border border-neutral-800 rounded-xl h-full p-8 animate-pulse">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-md bg-neutral-800 border border-neutral-700" />
        <div className="h-6 w-48 bg-neutral-800 rounded" />
      </div>
      <div className="flex gap-2 mb-2">
        <div className="h-5 w-20 bg-neutral-800 rounded" />
        <div className="h-5 w-16 bg-neutral-800 rounded" />
      </div>
      <div className="h-4 w-64 bg-neutral-800 rounded mb-2" />
      <div className="h-4 w-56 bg-neutral-800 rounded mb-5" />
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="h-12 bg-neutral-800 rounded border border-neutral-700" />
        <div className="h-12 bg-neutral-800 rounded border border-neutral-700" />
        <div className="h-12 bg-neutral-800 rounded border border-neutral-700" />
      </div>
      <div className="h-10 bg-neutral-800 rounded border border-neutral-700" />
    </div>
  )
} 