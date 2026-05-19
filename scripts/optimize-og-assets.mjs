import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const root = process.cwd()
const ogDir = path.join(root, "public", "og")
const width = Number.parseInt(process.env.OG_ASSET_WIDTH ?? "1600", 10)
const quality = Number.parseInt(process.env.OG_ASSET_QUALITY ?? "78", 10)

if (!fs.existsSync(ogDir)) {
  console.log("No public/og directory found; nothing to optimize.")
  process.exit(0)
}

let created = 0
let recompressed = 0
let savedBytes = 0

for (const file of collectFiles(ogDir)) {
  const ext = path.extname(file).toLowerCase()
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue

  if (ext === ".png") {
    const target = file.replace(/\.png$/i, ".jpg")
    const before = fs.statSync(file).size
    await optimizeToJpeg(file, target)
    const after = fs.statSync(target).size
    created += 1
    savedBytes += Math.max(0, before - after)
    continue
  }

  const before = fs.statSync(file).size
  const tmp = `${file}.tmp`
  await optimizeToJpeg(file, tmp)
  const after = fs.statSync(tmp).size

  if (after < before) {
    fs.renameSync(tmp, file)
    recompressed += 1
    savedBytes += before - after
  } else {
    fs.unlinkSync(tmp)
  }
}

console.log(
  `Optimized OG assets: ${created} JPEG derivatives, ${recompressed} JPEG recompressions, ${Math.round(savedBytes / 1024 / 1024)}MB smaller than source originals.`,
)

async function optimizeToJpeg(input, output) {
  await sharp(input, { failOn: "none" })
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .flatten({ background: "#070707" })
    .jpeg({
      quality,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: "4:2:0",
    })
    .toFile(output)
}

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
