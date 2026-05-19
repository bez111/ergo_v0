import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const maxKb = Number.parseInt(process.env.HEAVY_ASSET_MAX_KB ?? "1024", 10)
const scanDirs = ["public/infographics", "public/og"]
const sourceDirs = ["src", "messages"]
const sourceFiles = ["public/search-index.json"]
const originalExts = new Set([".png", ".jpg", ".jpeg"])

const sourceText = sourceDirs
  .filter((dir) => fs.existsSync(path.join(root, dir)))
  .flatMap((dir) => collectFiles(path.join(root, dir)))
  .filter((file) => /\.(ts|tsx|js|jsx|md|mdx|json)$/.test(file))
  .concat(sourceFiles.map((file) => path.join(root, file)).filter((file) => fs.existsSync(file)))
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n")

const findings = []

for (const dir of scanDirs) {
  const absDir = path.join(root, dir)
  if (!fs.existsSync(absDir)) continue

  for (const abs of collectFiles(absDir)) {
    const file = path.basename(abs)
    const ext = path.extname(file).toLowerCase()
    if (!originalExts.has(ext)) continue

    const kb = Math.ceil(fs.statSync(abs).size / 1024)
    if (kb < maxKb) continue

    const base = path.basename(file, ext)
    const fileDir = path.dirname(abs)
    const derivatives = [
      path.join(fileDir, `${base}.avif`),
      path.join(fileDir, `${base}.webp`),
    ]
    if (ext === ".png") {
      derivatives.push(path.join(fileDir, `${base}.jpg`))
    }

    const optimized = derivatives.some((candidate) => fs.existsSync(candidate))
    const rel = path.relative(root, abs).split(path.sep).join("/")
    const publicUrl = `/${rel.replace(/^public\//, "")}`
    const referenced = sourceText.includes(publicUrl)

    findings.push({
      file: rel,
      kb,
      optimized,
      referenced,
    })
  }
}

const referencedHeavy = findings.filter((item) => item.referenced)
const missingDerivative = findings.filter((item) => !item.optimized)

if (findings.length > 0) {
  console.log(`Heavy original assets >= ${maxKb}KB:`)
  for (const item of findings) {
    const flags = [
      item.optimized ? "has-derivative" : "missing-derivative",
      item.referenced ? "referenced" : "unreferenced",
    ].join(", ")
    console.log(`- ${item.file} ${item.kb}KB (${flags})`)
  }
}

if (referencedHeavy.length > 0 || missingDerivative.length > 0) {
  console.error("\nHeavy asset audit failed.")
  if (referencedHeavy.length > 0) {
    console.error("Referenced heavy originals must be switched to AVIF/WebP or Blob/CDN URLs.")
  }
  if (missingDerivative.length > 0) {
    console.error("Heavy originals without AVIF/WebP derivatives need optimization before shipping.")
  }
  process.exit(1)
}

console.log("heavy asset audit clean")

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
