"use client"

import { useEffect, useMemo, useState } from "react"
import NextLink from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  Boxes,
  CheckCircle2,
  Copy,
  Droplets,
  ExternalLink,
  Fingerprint,
  Gauge,
  Hash,
  Loader2,
  Radio,
  ReceiptText,
  RefreshCcw,
  Search,
  Send,
  ServerCog,
  ShieldCheck,
  Wrench,
} from "lucide-react"
import { Link } from "@/i18n/navigation"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { devServiceCategories, devServices, stateLabel, type DevServiceCategory, type DevServiceState } from "@/lib/dev-services/catalog"
import { cn } from "@/lib/utils"

type ToolAction = "hash" | "address" | "box" | "tx" | "receipt"
type ErgoNetwork = "mainnet" | "testnet"

interface Probe {
  ok: boolean
  status: number | null
  ms: number
  error: string | null
}

interface ServiceIndex {
  ok: boolean
  generated_at: string
  counts: {
    total: number
    live: number
    guarded: number
    machine_readable: number
  }
  faucet: {
    configured: boolean
    enabled: boolean
    reason: string | null
  }
  probes: Record<string, Probe>
}

const RECEIPT_EXAMPLE = "99c3742422196a4303774fae4c2a7796634cbece73d2fafedc509b394abf69f7"

const categories = Object.entries(devServiceCategories) as Array<[
  DevServiceCategory,
  { label: string; description: string },
]>

const stateStyles: Record<DevServiceState, string> = {
  live: "border-orange-400/35 bg-orange-500/10 text-orange-100",
  guarded: "border-yellow-400/35 bg-yellow-500/10 text-yellow-100",
  external: "border-cyan-400/35 bg-cyan-500/10 text-cyan-100",
  planned: "border-white/15 bg-white/[0.04] text-neutral-300",
}

const toolExamples: Record<ToolAction, { label: string; icon: typeof Hash; placeholder: string; input: string }> = {
  hash: {
    label: "Blake2b-256",
    icon: Hash,
    placeholder: "Text or hex bytes",
    input: "Sage task acceptance hash",
  },
  address: {
    label: "Address",
    icon: Fingerprint,
    placeholder: "Ergo address",
    input: "",
  },
  box: {
    label: "Box",
    icon: Boxes,
    placeholder: "64-char box id",
    input: "",
  },
  tx: {
    label: "Transaction",
    icon: Search,
    placeholder: "64-char transaction id",
    input: "",
  },
  receipt: {
    label: "Receipt",
    icon: ReceiptText,
    placeholder: "Sage receipt id",
    input: RECEIPT_EXAMPLE,
  },
}

export function DevServicesClient() {
  const [index, setIndex] = useState<ServiceIndex | null>(null)
  const [indexError, setIndexError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<DevServiceCategory>("inspect")
  const [toolAction, setToolAction] = useState<ToolAction>("hash")
  const [toolInput, setToolInput] = useState(toolExamples.hash.input)
  const [encoding, setEncoding] = useState<"utf8" | "hex">("utf8")
  const [network, setNetwork] = useState<ErgoNetwork>("testnet")
  const [toolBusy, setToolBusy] = useState(false)
  const [toolResult, setToolResult] = useState<unknown>(null)
  const [toolError, setToolError] = useState<string | null>(null)
  const [faucetAddress, setFaucetAddress] = useState("")
  const [faucetBusy, setFaucetBusy] = useState(false)
  const [faucetResult, setFaucetResult] = useState<unknown>(null)
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch("/api/dev/services", { cache: "no-store" })
        const body = await res.json() as ServiceIndex
        if (!res.ok || body.ok !== true) throw new Error(`service index ${res.status}`)
        if (!cancelled) {
          setIndex(body)
          setIndexError(null)
        }
      } catch (error) {
        if (!cancelled) {
          setIndexError(error instanceof Error ? error.message : "service index unavailable")
        }
      }
    }

    load()
    const id = setInterval(load, 60_000)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  const visibleServices = useMemo(
    () => devServices.filter((service) => service.category === selectedCategory),
    [selectedCategory],
  )

  function selectTool(action: ToolAction) {
    setToolAction(action)
    setToolInput(toolExamples[action].input)
    setToolError(null)
    setToolResult(null)
  }

  async function runTool() {
    setToolBusy(true)
    setToolError(null)
    try {
      const res = await fetch("/api/dev/tools", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          action: toolAction,
          input: toolInput,
          encoding,
          network,
        }),
      })
      const body = await res.json()
      if (!res.ok || body.ok === false) throw new Error(body.error ?? `tool ${res.status}`)
      setToolResult(body)
    } catch (error) {
      setToolError(error instanceof Error ? error.message : "tool failed")
      setToolResult(null)
    } finally {
      setToolBusy(false)
    }
  }

  async function requestFaucet() {
    setFaucetBusy(true)
    try {
      const res = await fetch("/api/dev/faucet", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ address: faucetAddress }),
      })
      const body = await res.json()
      setFaucetResult(body)
    } catch (error) {
      setFaucetResult({ ok: false, error: error instanceof Error ? error.message : "faucet request failed" })
    } finally {
      setFaucetBusy(false)
    }
  }

  async function copyJson(value: unknown, label: string) {
    await navigator.clipboard.writeText(JSON.stringify(value, null, 2))
    setCopied(label)
    setTimeout(() => setCopied(null), 1200)
  }

  const ToolIcon = toolExamples[toolAction].icon

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="border-b border-white/10 px-4 pb-8 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Build", href: "/build" },
                { name: "Developer Services", href: "/build/services" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                  <Wrench className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Developer workbench
                  </span>
                </div>
                <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Fast Ergo services for builders, agents, and support.
                </h1>
                <div className="mt-6 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                  <Metric label="Live" value={index ? String(index.counts.live) : "..."} />
                  <Metric label="Machine" value={index ? String(index.counts.machine_readable) : "..."} />
                  <Metric label="Guarded" value={index ? String(index.counts.guarded) : "..."} />
                  <Metric label="Total" value={index ? String(index.counts.total) : String(devServices.length)} />
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/75 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Service index
                    </div>
                    <div className="mt-1 text-lg font-semibold text-white">
                      /api/dev/services
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {indexError ? indexError : index ? `Updated ${new Date(index.generated_at).toLocaleTimeString()}` : "Loading probes"}
                    </div>
                  </div>
                  <NextLink
                    href="/api/dev/services"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-orange-500/30 bg-orange-500/10 text-orange-200 transition hover:bg-orange-500/20"
                    aria-label="Open service index JSON"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </NextLink>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <ProbeBadge label="Site" probe={index?.probes.site_health} />
                  <ProbeBadge label="MCP" probe={index?.probes.mcp_health} />
                  <ProbeBadge label="Blob" probe={index?.probes.receipt_storage} />
                  <ProbeBadge label="Accord" probe={index?.probes.sage_accord} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
            <aside className="space-y-4">
              <div className="rounded-lg border border-white/10 bg-black/70 p-3">
                <div className="mb-3 px-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  Service lanes
                </div>
                <div className="grid gap-2">
                  {categories.map(([id, category]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setSelectedCategory(id)}
                      className={cn(
                        "flex items-center justify-between rounded-md border px-3 py-3 text-left transition",
                        selectedCategory === id
                          ? "border-orange-500/45 bg-orange-500/12 text-white"
                          : "border-white/10 bg-white/[0.025] text-neutral-300 hover:border-white/20 hover:bg-white/[0.055]",
                      )}
                    >
                      <span>
                        <span className="block text-sm font-semibold">{category.label}</span>
                        <span className="mt-1 block text-xs leading-relaxed text-neutral-500">
                          {category.description}
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-orange-300" />
                    </button>
                  ))}
                </div>
              </div>

              <div id="faucet" className="rounded-lg border border-yellow-500/25 bg-yellow-500/[0.06] p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-yellow-200" />
                    <h2 className="text-sm font-semibold text-white">Testnet Faucet</h2>
                  </div>
                  <StatusPill state={index?.faucet.enabled ? "live" : "guarded"} />
                </div>
                <div className="mt-4 space-y-3">
                  <Input
                    value={faucetAddress}
                    onChange={(event) => setFaucetAddress(event.target.value)}
                    placeholder="Testnet address"
                    className="border-yellow-500/25 bg-black/55 font-mono text-sm"
                  />
                  <Button
                    type="button"
                    onClick={requestFaucet}
                    disabled={faucetBusy || faucetAddress.trim().length === 0}
                    className="w-full bg-yellow-500 text-black hover:bg-yellow-400"
                  >
                    {faucetBusy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    Request test ERG
                  </Button>
                </div>
                {faucetResult ? (
                  <ResultBlock
                    title="faucet response"
                    value={faucetResult}
                    onCopy={() => copyJson(faucetResult, "faucet")}
                    copied={copied === "faucet"}
                  />
                ) : null}
              </div>
            </aside>

            <div className="space-y-6">
              <section className="grid gap-3 md:grid-cols-2" aria-label="Developer services">
                {visibleServices.map((service) => {
                  const Icon = service.icon
                  const external = service.href.startsWith("http")
                  const card = (
                    <div className="group flex h-full flex-col rounded-lg border border-white/10 bg-black/70 p-5 transition hover:border-orange-500/35 hover:bg-orange-500/[0.035]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
                          <Icon className="h-5 w-5 text-orange-300" />
                        </div>
                        <StatusPill state={service.state} />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                      <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-neutral-400">
                        {service.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Chip icon={service.machineReadable ? Bot : Gauge} label={service.machineReadable ? "JSON" : "UI"} />
                        <Chip icon={Radio} label={service.latency} />
                      </div>
                      <div className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-orange-300">
                        Open
                        {external ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />}
                      </div>
                    </div>
                  )

                  return external ? (
                    <a key={service.id} href={service.href} target="_blank" rel="noreferrer" className="block">
                      {card}
                    </a>
                  ) : service.href.startsWith("/api/") ? (
                    <NextLink key={service.id} href={service.href} className="block">
                      {card}
                    </NextLink>
                  ) : (
                    <Link key={service.id} href={service.href} className="block">
                      {card}
                    </Link>
                  )
                })}
              </section>

              <section id="tools" className="rounded-lg border border-white/10 bg-black/75 p-4 sm:p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      API workbench
                    </div>
                    <h2 className="mt-1 text-2xl font-bold text-white">/api/dev/tools</h2>
                  </div>
                  <NextLink
                    href="/api/dev/tools"
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-neutral-300 transition hover:border-orange-500/35 hover:text-orange-200"
                  >
                    Schema <ExternalLink className="h-3.5 w-3.5" />
                  </NextLink>
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
                  <div className="space-y-2">
                    {(Object.keys(toolExamples) as ToolAction[]).map((action) => {
                      const Icon = toolExamples[action].icon
                      return (
                        <button
                          key={action}
                          type="button"
                          onClick={() => selectTool(action)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-md border px-3 py-3 text-left transition",
                            toolAction === action
                              ? "border-orange-500/45 bg-orange-500/12 text-white"
                              : "border-white/10 bg-white/[0.025] text-neutral-300 hover:border-white/20 hover:bg-white/[0.055]",
                          )}
                        >
                          <span className="flex items-center gap-3">
                            <Icon className="h-4 w-4 text-orange-300" />
                            <span className="text-sm font-semibold">{toolExamples[action].label}</span>
                          </span>
                          <ArrowRight className="h-4 w-4 text-neutral-500" />
                        </button>
                      )
                    })}
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
                    <div className="flex items-center gap-2">
                      <ToolIcon className="h-4 w-4 text-orange-300" />
                      <h3 className="text-sm font-semibold text-white">{toolExamples[toolAction].label}</h3>
                    </div>

                    <div className="mt-4 grid gap-3">
                      <textarea
                        value={toolInput}
                        onChange={(event) => setToolInput(event.target.value)}
                        placeholder={toolExamples[toolAction].placeholder}
                        rows={toolAction === "hash" ? 5 : 2}
                        className="min-h-[88px] w-full resize-y rounded-md border border-white/10 bg-black/65 px-3 py-3 font-mono text-sm leading-relaxed text-white placeholder:text-neutral-600 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/35"
                      />

                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-2">
                          {toolAction === "hash" ? (
                            <Segmented
                              value={encoding}
                              options={[
                                ["utf8", "UTF-8"],
                                ["hex", "Hex"],
                              ]}
                              onChange={(value) => setEncoding(value as "utf8" | "hex")}
                            />
                          ) : null}
                          {(toolAction === "box" || toolAction === "tx") ? (
                            <Segmented
                              value={network}
                              options={[
                                ["testnet", "Testnet"],
                                ["mainnet", "Mainnet"],
                              ]}
                              onChange={(value) => setNetwork(value as ErgoNetwork)}
                            />
                          ) : null}
                        </div>

                        <Button
                          type="button"
                          onClick={runTool}
                          disabled={toolBusy}
                          className="bg-orange-500 text-black hover:bg-orange-400"
                        >
                          {toolBusy ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCcw className="h-4 w-4" />}
                          Run
                        </Button>
                      </div>
                    </div>

                    {toolError ? (
                      <div className="mt-4 flex items-start gap-2 rounded-md border border-red-500/25 bg-red-500/10 p-3 text-sm text-red-100">
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{toolError}</span>
                      </div>
                    ) : null}

                    {toolResult ? (
                      <ResultBlock
                        title="tool response"
                        value={toolResult}
                        onCopy={() => copyJson(toolResult, "tool")}
                        copied={copied === "tool"}
                      />
                    ) : null}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/65 px-3 py-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 text-2xl font-bold text-white">{value}</div>
    </div>
  )
}

function ProbeBadge({ label, probe }: { label: string; probe?: Probe }) {
  const ok = probe?.ok === true
  return (
    <div className={cn(
      "rounded-md border px-3 py-2",
      probe
        ? ok
          ? "border-orange-500/25 bg-orange-500/10"
          : "border-red-500/25 bg-red-500/10"
        : "border-white/10 bg-white/[0.03]",
    )}>
      <div className="flex items-center gap-2">
        <span className={cn("h-2 w-2 rounded-full", ok ? "bg-orange-400" : probe ? "bg-red-400" : "bg-neutral-500")} />
        <span className="text-xs font-semibold text-white">{label}</span>
      </div>
      <div className="mt-1 font-mono text-[10px] text-neutral-500">
        {probe ? `${probe.status ?? "ERR"} / ${probe.ms}ms` : "pending"}
      </div>
    </div>
  )
}

function StatusPill({ state }: { state: DevServiceState }) {
  const Icon = state === "live" ? CheckCircle2 : state === "guarded" ? ShieldCheck : ServerCog
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full border px-2 py-1 font-mono text-[10px] uppercase tracking-widest",
      stateStyles[state],
    )}>
      <Icon className="h-3 w-3" />
      {stateLabel(state)}
    </span>
  )
}

function Chip({ icon: Icon, label }: { icon: typeof Bot; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.035] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
      <Icon className="h-3 w-3 text-neutral-500" />
      {label}
    </span>
  )
}

function Segmented({
  value,
  options,
  onChange,
}: {
  value: string
  options: Array<[string, string]>
  onChange: (value: string) => void
}) {
  return (
    <div className="inline-flex rounded-md border border-white/10 bg-black/55 p-1">
      {options.map(([optionValue, label]) => (
        <button
          key={optionValue}
          type="button"
          onClick={() => onChange(optionValue)}
          className={cn(
            "rounded px-3 py-1.5 text-xs font-semibold transition",
            value === optionValue ? "bg-orange-500 text-black" : "text-neutral-400 hover:text-white",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

function ResultBlock({
  title,
  value,
  onCopy,
  copied,
}: {
  title: string
  value: unknown
  onCopy: () => void
  copied: boolean
}) {
  return (
    <div className="mt-4 rounded-md border border-white/10 bg-black/75">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2">
        <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{title}</div>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-1.5 rounded border border-white/10 px-2 py-1 text-xs text-neutral-300 transition hover:border-orange-500/35 hover:text-orange-200"
        >
          <Copy className="h-3.5 w-3.5" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-h-[420px] overflow-auto p-3 text-xs leading-relaxed text-neutral-300">
        {JSON.stringify(value, null, 2)}
      </pre>
    </div>
  )
}
