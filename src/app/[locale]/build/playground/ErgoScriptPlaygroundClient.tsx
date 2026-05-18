"use client"

import dynamic from "next/dynamic"
import { useCallback, useEffect, useMemo, useState } from "react"
import { loader, type BeforeMount, type OnMount } from "@monaco-editor/react"
import { Network } from "@fleet-sdk/core"
import {
  AlertTriangle,
  Check,
  ChevronDown,
  Copy,
  Download,
  FileCode2,
  Loader2,
  Play,
  RotateCcw,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

const MonacoEditor = dynamic(() => import("@monaco-editor/react").then((mod) => mod.default), {
  ssr: false,
  loading: () => (
    <div className="flex h-[560px] min-h-[420px] items-center justify-center bg-black/40 text-sm text-neutral-400">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Preparing editor
    </div>
  ),
})

loader.config({
  paths: { vs: "/monaco/vs" },
})

const STORAGE_KEY = "ergoscript-playground-v1"

type PlaygroundNetwork = "mainnet" | "testnet"
type OutputTab = "tree" | "address" | "sigma"

interface Example {
  id: string
  label: string
  source: string
}

interface ConstantRow {
  index: number
  type: string
  value: string
  encoded: string
}

interface CompileResult {
  address: string
  compiledAt: string
  constants: ConstantRow[]
  compiler: string
  ergoTreeHex: string
  fleetAddress: string
  network: PlaygroundNetwork
  prettyTree: string
  sigmaAddress?: string
  sigmaError?: string
  templateHex: string
}

const EXAMPLES: Example[] = [
  {
    id: "anyone-can-spend",
    label: "Anyone can spend",
    source: `{ sigmaProp(true) }`,
  },
  {
    id: "height-lock",
    label: "Height lock",
    source: `{
  val deadline = 1500000
  sigmaProp(HEIGHT > deadline && SELF.value >= 1000000L)
}`,
  },
  {
    id: "output-guard",
    label: "Output guard",
    source: `{ sigmaProp(OUTPUTS.size > 0 && OUTPUTS(0).value >= 1000000L) }`,
  },
  {
    id: "threshold-shape",
    label: "Threshold shape",
    source: `{ sigmaProp(allOf(Coll(HEIGHT > 1000, OUTPUTS.size > 0))) }`,
  },
]

const DEFAULT_SOURCE = EXAMPLES[1].source

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
}

function errorMessage(error: unknown): string {
  if (error instanceof Error) return error.message || error.name
  if (typeof error === "string") return error
  return "Unknown compiler error"
}

function parseConstantsMap(raw: string): Record<string, string> {
  const trimmed = raw.trim()
  if (!trimmed) return {}

  const parsed = JSON.parse(trimmed) as unknown
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("Constants must be a JSON object.")
  }

  for (const [key, value] of Object.entries(parsed)) {
    if (typeof value !== "string") {
      throw new Error(`Constant "${key}" must be a hex string.`)
    }
  }

  return parsed as Record<string, string>
}

function configureMonaco(monaco: Parameters<BeforeMount>[0]) {
  if (!monaco.languages.getLanguages().some((language: { id: string }) => language.id === "ergoscript")) {
    monaco.languages.register({ id: "ergoscript" })
  }

  monaco.languages.setMonarchTokensProvider("ergoscript", {
    defaultToken: "",
    tokenPostfix: ".ergoscript",
    keywords: [
      "allOf",
      "anyOf",
      "atLeast",
      "blake2b256",
      "Coll",
      "else",
      "false",
      "HEIGHT",
      "if",
      "INPUTS",
      "OUTPUTS",
      "PK",
      "SELF",
      "sigmaProp",
      "true",
      "val",
    ],
    typeKeywords: [
      "AvlTree",
      "BigInt",
      "Boolean",
      "Box",
      "Byte",
      "Coll",
      "GroupElement",
      "Int",
      "Long",
      "SigmaProp",
    ],
    operators: ["&&", "||", "!", "==", "!=", ">", ">=", "<", "<=", "+", "-", "*", "/", "%"],
    symbols: /[=><!~?:&|+\-*/%]+/,
    tokenizer: {
      root: [
        [/[a-zA-Z_$][\w$]*/, { cases: { "@keywords": "keyword", "@typeKeywords": "type", "@default": "identifier" } }],
        [/[{}()[\]]/, "@brackets"],
        [/[<>](?!@symbols)/, "@brackets"],
        [/\d+L?/, "number"],
        [/0x[0-9a-fA-F]+/, "number.hex"],
        [/\/\/.*$/, "comment"],
        [/\/\*/, "comment", "@comment"],
        [/"/, "string", "@string"],
        [/[&|!~=<>+\-*/%]+/, "operator"],
      ],
      comment: [
        [/[^/*]+/, "comment"],
        [/\*\//, "comment", "@pop"],
        [/[/*]/, "comment"],
      ],
      string: [
        [/[^\\"]+/, "string"],
        [/\\./, "string.escape"],
        [/"/, "string", "@pop"],
      ],
    },
  })

  monaco.editor.defineTheme("ergo-playground", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "keyword", foreground: "f97316", fontStyle: "bold" },
      { token: "type", foreground: "38bdf8" },
      { token: "number", foreground: "facc15" },
      { token: "string", foreground: "86efac" },
      { token: "comment", foreground: "737373", fontStyle: "italic" },
      { token: "operator", foreground: "fb923c" },
    ],
    colors: {
      "editor.background": "#050505",
      "editor.foreground": "#e5e5e5",
      "editor.lineHighlightBackground": "#1c1917",
      "editorLineNumber.foreground": "#57534e",
      "editorCursor.foreground": "#fb923c",
      "editor.selectionBackground": "#7c2d1233",
      "editorGutter.background": "#050505",
    },
  })
}

async function compileSource(source: string, network: PlaygroundNetwork, constantsJson: string): Promise<CompileResult> {
  const [{ compile }, wasm] = await Promise.all([
    import("@fleet-sdk/compiler"),
    import("ergo-lib-wasm-browser"),
  ])
  const map = parseConstantsMap(constantsJson)
  const tree = compile(source, {
    network,
    version: 1,
    segregateConstants: true,
    map,
  })
  const ergoTreeHex = tree.toHex()
  const fleetNetwork = network === "mainnet" ? Network.Mainnet : Network.Testnet
  const fleetAddress = tree.toAddress(fleetNetwork).toString()

  const constants: ConstantRow[] = []
  let sigmaAddress: string | undefined
  let sigmaError: string | undefined
  let prettyTree = ""
  let templateHex = ""

  try {
    const wasmTree = wasm.ErgoTree.from_base16_bytes(ergoTreeHex)
    try {
      prettyTree = wasmTree.pretty_print()
      templateHex = bytesToHex(wasmTree.template_bytes())
      const constantsLength = wasmTree.constants_len()

      for (let index = 0; index < constantsLength; index += 1) {
        const constant = wasmTree.get_constant(index)
        if (!constant) continue
        try {
          constants.push({
            index,
            type: constant.dbg_tpe(),
            value: constant.dbg_inner(),
            encoded: constant.encode_to_base16(),
          })
        } finally {
          constant.free()
        }
      }

      const address = wasm.Address.recreate_from_ergo_tree(wasmTree)
      try {
        sigmaAddress = address.to_base58(network === "mainnet" ? wasm.NetworkPrefix.Mainnet : wasm.NetworkPrefix.Testnet)
      } finally {
        address.free()
      }
    } finally {
      wasmTree.free()
    }
  } catch (error) {
    sigmaError = errorMessage(error)
  }

  return {
    address: sigmaAddress || fleetAddress,
    compiledAt: new Date().toISOString(),
    constants,
    compiler: "@fleet-sdk/compiler 0.12 + ergo-lib-wasm-browser 0.28",
    ergoTreeHex,
    fleetAddress,
    network,
    prettyTree,
    sigmaAddress,
    sigmaError,
    templateHex,
  }
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1300)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-neutral-300 transition hover:border-orange-400/50 hover:text-orange-300"
      title={label}
      aria-label={label}
    >
      {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}

function FieldRow({ label, value, mono = true }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="grid gap-2 border-b border-white/10 py-3 last:border-b-0 sm:grid-cols-[118px_minmax(0,1fr)_40px] sm:items-center">
      <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">{label}</div>
      <div className={cn("min-w-0 break-all text-sm text-neutral-200", mono && "font-mono")}>{value}</div>
      <CopyButton value={value} label={`Copy ${label}`} />
    </div>
  )
}

function StatusPill({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        ok
          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
          : "border-amber-400/30 bg-amber-400/10 text-amber-200",
      )}
    >
      {ok ? <ShieldCheck className="h-3.5 w-3.5" /> : <AlertTriangle className="h-3.5 w-3.5" />}
      {children}
    </span>
  )
}

export function ErgoScriptPlaygroundClient() {
  const [source, setSource] = useState(DEFAULT_SOURCE)
  const [constantsJson, setConstantsJson] = useState("")
  const [network, setNetwork] = useState<PlaygroundNetwork>("testnet")
  const [result, setResult] = useState<CompileResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [running, setRunning] = useState(false)
  const [selectedExample, setSelectedExample] = useState(EXAMPLES[1].id)
  const [outputTab, setOutputTab] = useState<OutputTab>("tree")

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const saved = JSON.parse(raw) as Partial<{
        constantsJson: string
        network: PlaygroundNetwork
        source: string
      }>

      if (saved.source) setSource(saved.source)
      if (saved.constantsJson !== undefined) setConstantsJson(saved.constantsJson)
      if (saved.network === "mainnet" || saved.network === "testnet") setNetwork(saved.network)
    } catch {
      /* ignore stored playground state */
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ source, constantsJson, network }))
    } catch {
      /* ignore localStorage errors */
    }
  }, [constantsJson, network, source])

  const runCompile = useCallback(async () => {
    setRunning(true)
    setError(null)

    try {
      const output = await compileSource(source, network, constantsJson)
      setResult(output)
      setOutputTab("tree")
    } catch (compileError) {
      setResult(null)
      setError(errorMessage(compileError))
    } finally {
      setRunning(false)
    }
  }, [constantsJson, network, source])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void runCompile()
    }, 450)

    return () => window.clearTimeout(timer)
  }, [runCompile])

  const selectExample = (id: string) => {
    const example = EXAMPLES.find((item) => item.id === id)
    if (!example) return
    setSelectedExample(id)
    setSource(example.source)
    setConstantsJson("")
  }

  const reset = () => {
    setSelectedExample(EXAMPLES[1].id)
    setSource(DEFAULT_SOURCE)
    setConstantsJson("")
    setNetwork("testnet")
    setError(null)
  }

  const download = () => {
    let constants: unknown = constantsJson
    try {
      constants = constantsJson ? JSON.parse(constantsJson) : {}
    } catch {
      constants = constantsJson
    }

    const payload = JSON.stringify(
      {
        source,
        constants,
        result,
      },
      null,
      2,
    )
    const blob = new Blob([payload], { type: "application/json" })
    const href = URL.createObjectURL(blob)
    const anchor = document.createElement("a")
    anchor.href = href
    anchor.download = "ergoscript-playground-result.json"
    anchor.click()
    URL.revokeObjectURL(href)
  }

  const handleEditorMount: OnMount = (editor) => {
    editor.focus()
  }

  const outputValue = useMemo(() => {
    if (!result) return ""
    if (outputTab === "address") {
      return [
        `network: ${result.network}`,
        `p2s_address: ${result.address}`,
        `fleet_address: ${result.fleetAddress}`,
        `sigma_rust_address: ${result.sigmaAddress ?? "unavailable"}`,
      ].join("\n")
    }
    if (outputTab === "sigma") {
      return [
        result.prettyTree ? `pretty_tree:\n${result.prettyTree}` : "pretty_tree: unavailable",
        "",
        `template_bytes: ${result.templateHex || "unavailable"}`,
        "",
        `constants:\n${JSON.stringify(result.constants, null, 2)}`,
      ].join("\n")
    }

    return result.ergoTreeHex
  }, [outputTab, result])

  const hasCleanSigmaPass = Boolean(result?.sigmaAddress && result.sigmaAddress === result.fleetAddress)

  return (
    <BackgroundWrapper>
      <main className="container mx-auto max-w-7xl px-4 pb-16 pt-8">
        <Breadcrumbs
          items={[
            { name: "Build", href: "/build/agent-payments" },
            { name: "ErgoScript Playground", href: "/build/playground" },
          ]}
          className="mb-6 opacity-70"
        />

        <section className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-orange-200">
              <TerminalSquare className="h-3.5 w-3.5" />
              Browser compiler
            </div>
            <h1 className="text-3xl font-semibold tracking-normal text-white md:text-5xl">ErgoScript Playground</h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <label className="relative">
              <span className="sr-only">Example</span>
              <select
                value={selectedExample}
                onChange={(event) => selectExample(event.target.value)}
                className="h-10 appearance-none rounded-md border border-white/10 bg-black/60 pl-3 pr-9 text-sm text-neutral-100 outline-none transition hover:border-orange-400/50 focus:border-orange-400"
              >
                {EXAMPLES.map((example) => (
                  <option key={example.id} value={example.id}>
                    {example.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-neutral-400" />
            </label>

            <div className="inline-grid h-10 grid-cols-2 rounded-md border border-white/10 bg-black/60 p-1">
              {(["testnet", "mainnet"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setNetwork(item)}
                  className={cn(
                    "rounded px-3 text-xs font-medium uppercase tracking-[0.16em] transition",
                    network === item ? "bg-orange-500 text-black" : "text-neutral-400 hover:text-neutral-100",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={reset}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-neutral-300 transition hover:border-orange-400/50 hover:text-orange-300"
              title="Reset"
              aria-label="Reset"
            >
              <RotateCcw className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={download}
              disabled={!result}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-neutral-300 transition hover:border-orange-400/50 hover:text-orange-300 disabled:cursor-not-allowed disabled:opacity-40"
              title="Download JSON"
              aria-label="Download JSON"
            >
              <Download className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={runCompile}
              disabled={running}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-orange-500 px-4 text-sm font-semibold text-black transition hover:bg-orange-400 disabled:cursor-wait disabled:opacity-70"
            >
              {running ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
              Compile
            </button>
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-black/50 shadow-2xl shadow-black/30">
            <div className="flex h-11 items-center justify-between border-b border-white/10 bg-neutral-950 px-4">
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <FileCode2 className="h-4 w-4 text-orange-300" />
                <span className="font-mono">contract.es</span>
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-neutral-600">{source.length} chars</div>
            </div>
            <MonacoEditor
              height="620px"
              language="ergoscript"
              theme="ergo-playground"
              value={source}
              beforeMount={configureMonaco}
              onMount={handleEditorMount}
              onChange={(value) => setSource(value ?? "")}
              options={{
                automaticLayout: true,
                minimap: { enabled: false },
                fontSize: 14,
                fontLigatures: true,
                lineNumbersMinChars: 3,
                padding: { top: 18, bottom: 18 },
                scrollBeyondLastLine: false,
                tabSize: 2,
                wordWrap: "on",
              }}
            />
          </div>

          <div className="grid gap-4">
            <div className="rounded-lg border border-white/10 bg-black/50 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">Status</h2>
                {running ? (
                  <StatusPill ok={false}>Compiling</StatusPill>
                ) : error ? (
                  <StatusPill ok={false}>Blocked</StatusPill>
                ) : result ? (
                  <StatusPill ok={hasCleanSigmaPass}>Compiled</StatusPill>
                ) : (
                  <StatusPill ok={false}>Idle</StatusPill>
                )}
              </div>

              {error ? (
                <pre className="max-h-56 overflow-auto whitespace-pre-wrap rounded-md border border-red-400/20 bg-red-950/20 p-3 font-mono text-xs leading-relaxed text-red-100">
                  {error}
                </pre>
              ) : (
                <div className="space-y-2 text-sm text-neutral-300">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-neutral-500">Network</span>
                    <span className="font-mono text-orange-200">{network}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-neutral-500">Compiler</span>
                    <span className="text-right font-mono text-xs text-neutral-300">{result?.compiler ?? "pending"}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-neutral-500">sigma-rust</span>
                    <span className={cn("text-right font-mono text-xs", hasCleanSigmaPass ? "text-emerald-300" : "text-amber-200")}>
                      {result?.sigmaError ? "WASM parse warning" : result ? "WASM verified" : "pending"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-lg border border-white/10 bg-black/50">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 p-3">
                <div className="inline-grid grid-cols-3 rounded-md border border-white/10 bg-neutral-950 p-1">
                  {(["tree", "address", "sigma"] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setOutputTab(tab)}
                      className={cn(
                        "rounded px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] transition",
                        outputTab === tab ? "bg-white text-black" : "text-neutral-500 hover:text-neutral-100",
                      )}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                {outputValue ? <CopyButton value={outputValue} label="Copy output" /> : null}
              </div>

              <pre className="max-h-[330px] min-h-[210px] overflow-auto whitespace-pre-wrap break-all p-4 font-mono text-xs leading-relaxed text-neutral-200">
                {outputValue || "No output"}
              </pre>
            </div>

            <div className="min-h-[159px] rounded-lg border border-white/10 bg-black/50 px-4">
              {result ? (
                <>
                  <FieldRow label="P2S" value={result.address} />
                  <FieldRow label="ErgoTree" value={result.ergoTreeHex} />
                  <FieldRow label="Compiled" value={result.compiledAt} mono={false} />
                </>
              ) : (
                <div className="grid min-h-[159px] content-center gap-2 py-3 text-sm text-neutral-500">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.18em]">P2S</span>
                    <span className="font-mono text-xs">pending compile</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.18em]">ErgoTree</span>
                    <span className="font-mono text-xs">pending compile</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.18em]">Compiled</span>
                    <span className="font-mono text-xs">pending compile</span>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-lg border border-white/10 bg-black/50">
              <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">Constants</h2>
                <Link href="/docs/developers/ergoscript-languages" className="text-xs text-orange-300 hover:text-orange-200">
                  Docs
                </Link>
              </div>
              <textarea
                value={constantsJson}
                onChange={(event) => setConstantsJson(event.target.value)}
                spellCheck={false}
                suppressHydrationWarning
                className="h-32 w-full resize-none bg-transparent p-4 font-mono text-xs leading-relaxed text-neutral-200 outline-none placeholder:text-neutral-700"
                placeholder={`{\n  "deadline": "04d00f"\n}`}
              />
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}
