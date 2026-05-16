import { cp, rm, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const source = path.join(root, "node_modules", "monaco-editor", "min", "vs")
const target = path.join(root, "public", "monaco", "vs")

try {
  await stat(source)
} catch {
  console.error("Monaco assets not found. Run npm install before syncing Monaco.")
  process.exit(1)
}

await rm(target, { recursive: true, force: true })
await cp(source, target, { recursive: true })

console.log(`✓ Monaco assets synced to ${path.relative(root, target)}`)
