import {
  Boxes,
  Braces,
  CheckCircle2,
  Code2,
  Droplets,
  FileJson2,
  Fingerprint,
  Gauge,
  Globe2,
  Hash,
  Network,
  ReceiptText,
  Search,
  ShieldCheck,
  TerminalSquare,
  type LucideIcon,
} from "lucide-react"

export type DevServiceState = "live" | "guarded" | "external" | "planned"
export type DevServiceCategory = "funding" | "inspect" | "build" | "agents" | "trust"

export interface DevService {
  id: string
  title: string
  summary: string
  href: string
  apiHref?: string
  category: DevServiceCategory
  state: DevServiceState
  latency: "instant" | "network" | "human"
  icon: LucideIcon
  machineReadable: boolean
  notes: string[]
}

export const devServices: DevService[] = [
  {
    id: "testnet-faucet",
    title: "Ergo Testnet Faucet",
    summary: "One-click test ERG for builders, bots, examples, and CI demos.",
    href: "/build/services#faucet",
    apiHref: "/api/dev/faucet",
    category: "funding",
    state: "guarded",
    latency: "network",
    icon: Droplets,
    machineReadable: true,
    notes: [
      "Address validation is live.",
      "Payouts stay disabled until a dedicated faucet wallet and anti-abuse gate are configured.",
    ],
  },
  {
    id: "address-inspector",
    title: "Address Inspector",
    summary: "Validate Ergo addresses and extract network, address type, and ErgoTree.",
    href: "/build/services#tools",
    apiHref: "/api/dev/tools",
    category: "inspect",
    state: "live",
    latency: "instant",
    icon: Fingerprint,
    machineReadable: true,
    notes: ["Works without explorer access.", "Useful before sending faucet funds or examples."],
  },
  {
    id: "box-inspector",
    title: "Box / Register Inspector",
    summary: "Fetch a box from mainnet or testnet and normalize value, registers, tokens, and status.",
    href: "/build/services#tools",
    apiHref: "/api/dev/tools",
    category: "inspect",
    state: "live",
    latency: "network",
    icon: Boxes,
    machineReadable: true,
    notes: ["Understands 64-char box ids.", "Shows raw explorer payload for debugging."],
  },
  {
    id: "tx-inspector",
    title: "Transaction Inspector",
    summary: "Resolve transaction state, inputs, outputs, and explorer links from one tx id.",
    href: "/build/services#tools",
    apiHref: "/api/dev/tools",
    category: "inspect",
    state: "live",
    latency: "network",
    icon: Search,
    machineReadable: true,
    notes: ["Mainnet and testnet explorer lookup.", "Good for support, docs, and receipt debugging."],
  },
  {
    id: "receipt-verifier",
    title: "Sage Receipt Verifier",
    summary: "Verify whether a Sage id resolves to chain proof or a full Accord receipt bundle.",
    href: "/build/services#tools",
    apiHref: "/api/dev/tools",
    category: "trust",
    state: "live",
    latency: "network",
    icon: ReceiptText,
    machineReadable: true,
    notes: ["Reads /api/sage/receipt/<id>.", "Surfaces Agreement, Verification, and Settlement JSON presence."],
  },
  {
    id: "blake2b256",
    title: "Blake2b-256 Hasher",
    summary: "Hash exact UTF-8 or hex bytes the same way ErgoScript and agent-payment predicates expect.",
    href: "/build/services#tools",
    apiHref: "/api/dev/tools",
    category: "build",
    state: "live",
    latency: "instant",
    icon: Hash,
    machineReadable: true,
    notes: ["Returns digest and byte length.", "Good for task hashes and acceptance predicate examples."],
  },
  {
    id: "ergoscript-playground",
    title: "ErgoScript Playground",
    summary: "Monaco-powered browser workbench for ErgoScript examples and sigma-rust WASM.",
    href: "/build/playground",
    category: "build",
    state: "live",
    latency: "instant",
    icon: Code2,
    machineReadable: false,
    notes: ["Route-level lazy loaded.", "Developer-facing surface, not a backend API."],
  },
  {
    id: "mcp-endpoint",
    title: "Public MCP Endpoint",
    summary: "Machine-facing entry point for MCP clients and future Ergo agent tools.",
    href: "https://mcp.ergoblockchain.org/mcp",
    apiHref: "https://mcp.ergoblockchain.org/health",
    category: "agents",
    state: "live",
    latency: "network",
    icon: Network,
    machineReadable: true,
    notes: ["Use /health for checks.", "Use /mcp for Streamable HTTP clients."],
  },
  {
    id: "agent-live-status",
    title: "Agent Economy Live Status",
    summary: "Single JSON view of Sage, receipt storage, MCP, signer health, and mainnet gate state.",
    href: "/agent-economy/live",
    apiHref: "/api/agent-economy/live",
    category: "agents",
    state: "live",
    latency: "network",
    icon: Gauge,
    machineReadable: true,
    notes: ["Feeds Agent Hub.", "Useful for dashboards, bots, and smoke checks."],
  },
  {
    id: "accord-conformance",
    title: "Accord Conformance Evidence",
    summary: "Receipt-driven conformance artifacts for Sage/Accord provider checks.",
    href: "/api/sage/accord",
    apiHref: "/api/sage/accord",
    category: "trust",
    state: "live",
    latency: "network",
    icon: ShieldCheck,
    machineReadable: true,
    notes: ["POST without headers returns the 402 challenge.", "Valid receipt headers return provider proof."],
  },
  {
    id: "blog-cms",
    title: "Blob Blog CMS",
    summary: "Drop Markdown plus image, publish as a site-styled blog entry without redeploying static content.",
    href: "/admin/blog",
    apiHref: "/api/admin/blog",
    category: "build",
    state: "guarded",
    latency: "human",
    icon: FileJson2,
    machineReadable: true,
    notes: ["Admin-only workflow.", "Uses Vercel Blob as durable storage."],
  },
  {
    id: "json-service-index",
    title: "Developer Service Index",
    summary: "Machine-readable catalog of every public developer helper on the site.",
    href: "/api/dev/services",
    apiHref: "/api/dev/services",
    category: "inspect",
    state: "live",
    latency: "network",
    icon: Braces,
    machineReadable: true,
    notes: ["Designed for agents and docs automation.", "Includes health probes where available."],
  },
]

export const devServiceCategories: Record<DevServiceCategory, { label: string; description: string }> = {
  funding: {
    label: "Funding",
    description: "Get test funds and bootstrap paid examples.",
  },
  inspect: {
    label: "Inspect",
    description: "Decode addresses, boxes, transactions, and status.",
  },
  build: {
    label: "Build",
    description: "Hash, compile, publish, and experiment.",
  },
  agents: {
    label: "Agents",
    description: "MCP, Sage, receipts, and live agent status.",
  },
  trust: {
    label: "Trust",
    description: "Receipt verification, conformance, and mainnet gates.",
  },
}

export function serializableDevServices() {
  return devServices.map((service) => ({
    id: service.id,
    title: service.title,
    summary: service.summary,
    href: service.href,
    apiHref: service.apiHref,
    category: service.category,
    state: service.state,
    latency: service.latency,
    machineReadable: service.machineReadable,
    notes: service.notes,
  }))
}

export function stateLabel(state: DevServiceState) {
  switch (state) {
    case "live":
      return "Live"
    case "guarded":
      return "Guarded"
    case "external":
      return "External"
    case "planned":
      return "Planned"
  }
}

export function stateIcon(state: DevServiceState) {
  return state === "live" ? CheckCircle2 : state === "guarded" ? TerminalSquare : Globe2
}
