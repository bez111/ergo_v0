import { readFile } from "node:fs/promises"

const FILES = [
  "messages/en/seo.json",
  "messages/en/home.json",
  "src/app/layout.tsx",
  "src/app/llms.txt/route.ts",
  "src/app/[locale]/agents/page.tsx",
  "src/app/[locale]/agent-economy/first-receipt/page.tsx",
  "src/lib/agent-economy/agent-discovery.ts",
  "src/app/api/search-index/route.ts",
  "src/app/api/search.json/route.ts",
]

const REQUIRED_KEYWORDS = [
  // Classic crypto/Ergo demand.
  "PoW",
  "eUTXO",
  "DeFi",
  "privacy",
  "sound money",
  "ERG wallet",
  "ErgoScript",
  "Sigma Protocols",
  "Autolykos",
  "Babel Fees",
  "Storage Rent",
  "NiPoPoWs",
  "Oracle Pools",
  "fair launch",
  "no premine",
  // New strategic category.
  "autonomous work clearing",
  "autonomous work settlement",
  "public proof surface",
  "verifiable receipts",
  "receipt bundles",
  "programmable credit",
  "task-conditioned",
  "wallet policy",
  "audit-gated",
  "agent-discoverable",
  "capability manifest",
  "MCP",
  "OpenAPI",
  "llms.txt",
  "x402",
  "AP2",
]

const text = (
  await Promise.all(FILES.map(async (file) => `${file}\n${await readFile(file, "utf8")}`))
).join("\n\n")

const normalized = text.toLowerCase()
const missing = REQUIRED_KEYWORDS.filter((keyword) => !normalized.includes(keyword.toLowerCase()))

if (missing.length > 0) {
  console.error("SEO keyword audit failed.")
  for (const keyword of missing) console.error(`missing: ${keyword}`)
  process.exitCode = 1
} else {
  console.log("SEO keyword audit clean")
  console.log(`checked_files=${FILES.length}`)
  console.log(`required_keywords=${REQUIRED_KEYWORDS.length}`)
}
