#!/usr/bin/env node
import { readdir, readFile } from "node:fs/promises"
import path from "node:path"

const roots = ["src", "messages"]
const extensions = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".mdx"])
const forbidden = [
  "without counterparty risk",
  "без риска контрагента",
  "audited ErgoScript smart contracts",
  "Production-ready components",
  "production-ready components",
]

const findings = []

for (const root of roots) {
  await walk(path.resolve(process.cwd(), root))
}

if (findings.length > 0) {
  console.error("Forbidden live-site claim text found:")
  for (const finding of findings) {
    console.error(`${finding.file}:${finding.line}: ${finding.phrase}`)
  }
  process.exit(1)
}

console.log("content claim audit clean")

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue
      await walk(full)
      continue
    }

    if (!entry.isFile() || !extensions.has(path.extname(entry.name))) continue
    const text = await readFile(full, "utf8")
    const lines = text.split(/\r?\n/)
    for (const phrase of forbidden) {
      for (let i = 0; i < lines.length; i += 1) {
        if (lines[i].includes(phrase)) {
          findings.push({
            file: path.relative(process.cwd(), full),
            line: i + 1,
            phrase,
          })
        }
      }
    }
  }
}
