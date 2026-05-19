import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const outputDirs = [
  path.join(root, ".vercel", "output", "static", "infographics"),
  path.join(root, ".vercel", "output", "static", "og"),
]
const maxKb = Number.parseInt(process.env.HEAVY_ASSET_MAX_KB ?? "1024", 10)
const originalExts = new Set([".png", ".jpg", ".jpeg"])

const existingOutputDirs = outputDirs.filter((dir) => fs.existsSync(dir))

if (existingOutputDirs.length === 0) {
  console.log("No .vercel/output static asset directories found; nothing to prune.")
  process.exit(0)
}

let removed = 0
let savedBytes = 0

for (const outputDir of existingOutputDirs) {
  for (const abs of collectFiles(outputDir)) {
    const file = path.basename(abs)
    const ext = path.extname(file).toLowerCase()
    if (!originalExts.has(ext)) continue

    const base = path.basename(file, ext)
    const fileDir = path.dirname(abs)
    const rel = path.relative(path.join(root, ".vercel", "output", "static"), abs).split(path.sep).join("/")
    const isOgPngMaster = rel.startsWith("og/") && ext === ".png"
    const stat = fs.statSync(abs)
    if (!isOgPngMaster && stat.size < maxKb * 1024) continue

    const hasDerivative =
      fs.existsSync(path.join(fileDir, `${base}.avif`)) ||
      fs.existsSync(path.join(fileDir, `${base}.webp`)) ||
      (ext === ".png" && fs.existsSync(path.join(fileDir, `${base}.jpg`)))

    if (!hasDerivative) continue

    fs.unlinkSync(abs)
    removed += 1
    savedBytes += stat.size
  }
}

console.log(
  `Pruned ${removed} heavy original assets from .vercel/output (${Math.round(savedBytes / 1024 / 1024)}MB saved).`,
)

function collectFiles(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...collectFiles(full))
    } else {
      out.push(full)
    }
  }
  return out
}
