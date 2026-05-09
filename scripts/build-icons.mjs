#!/usr/bin/env node
/**
 * Regenerates every brand-icon asset from a single SVG source so we never
 * end up with the "letter E in a circle" placeholder again.
 *
 * Outputs (from public/icon.svg):
 *   public/favicon.ico                — multi-size 16/32/48 ICO (handcrafted header,
 *                                       PNG payloads from sharp). Browsers like Firefox
 *                                       expect a real ICO at this URL.
 *   public/favicon-16.png / 32.png / 48.png — explicit-size fallbacks.
 *   public/apple-touch-icon.png       — 180x180 (iOS home screen, also used by
 *                                       WhatsApp / Telegram as a fallback share image).
 *   public/icon-192x192.png           — PWA / manifest 192.
 *   public/icon-512x512.png           — PWA / manifest 512.
 *   src/app/icon.png                  — Next.js convention 192x192.
 *   src/app/apple-icon.png            — Next.js convention 180x180.
 *   public/og-image.png               — 1200x630 Open Graph / Twitter card image
 *                                       (logo on the left + headline + tagline).
 *
 * Run with `node scripts/build-icons.mjs` from the repo root after editing
 * public/icon.svg or public/og-image.svg.
 */

import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const PUBLIC = join(ROOT, "public")
const APP = join(ROOT, "src", "app")

const ICON_SVG = join(PUBLIC, "icon.svg")
const OG_SVG = join(PUBLIC, "og-image.svg")

async function ensureDir(p) {
  await mkdir(p, { recursive: true })
}

/**
 * Render the icon SVG at `size` square, on a transparent background, into a PNG buffer.
 */
async function renderIcon(size) {
  const svg = await readFile(ICON_SVG)
  return sharp(svg, { density: Math.max(72, Math.round(72 * (size / 64))) })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer()
}

/**
 * Compose a multi-size ICO file by hand.
 * Spec: ICONDIR (6) + ICONDIRENTRY × N (16 each) + image payloads.
 * We embed the PNG payloads directly — modern browsers (incl. Firefox)
 * accept PNG-in-ICO since IE11.
 */
function buildIco(pngBuffers /* [{ size, buffer }] */) {
  const N = pngBuffers.length
  const HEADER = 6
  const ENTRY = 16
  const dataOffsetStart = HEADER + ENTRY * N

  const dirBuf = Buffer.alloc(HEADER + ENTRY * N)
  // Header
  dirBuf.writeUInt16LE(0, 0)          // reserved
  dirBuf.writeUInt16LE(1, 2)          // type 1 = ICO
  dirBuf.writeUInt16LE(N, 4)          // count

  let offset = dataOffsetStart
  pngBuffers.forEach(({ size, buffer }, i) => {
    const e = HEADER + ENTRY * i
    dirBuf.writeUInt8(size === 256 ? 0 : size, e + 0)   // width
    dirBuf.writeUInt8(size === 256 ? 0 : size, e + 1)   // height
    dirBuf.writeUInt8(0, e + 2)                          // color count (0 = >256)
    dirBuf.writeUInt8(0, e + 3)                          // reserved
    dirBuf.writeUInt16LE(1, e + 4)                       // color planes
    dirBuf.writeUInt16LE(32, e + 6)                      // bits per pixel
    dirBuf.writeUInt32LE(buffer.length, e + 8)           // size
    dirBuf.writeUInt32LE(offset, e + 12)                 // offset
    offset += buffer.length
  })

  return Buffer.concat([dirBuf, ...pngBuffers.map((p) => p.buffer)])
}

async function buildOgImage() {
  // If the og-image.svg source exists, use it verbatim. Otherwise emit a
  // minimal branded card built from the icon + tagline.
  let svgSource
  try {
    svgSource = await readFile(OG_SVG, "utf-8")
  } catch {
    const iconSvg = await readFile(ICON_SVG, "utf-8")
    // Strip the outer <svg> wrapper so we can embed the geometry inline,
    // scaled and translated into our 1200×630 layout.
    const inner = iconSvg
      .replace(/<\?xml[^>]*\?>/g, "")
      .replace(/<svg[^>]*>/g, "")
      .replace(/<\/svg>/g, "")
      .trim()
    svgSource = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#000000"/>
      <stop offset="1" stop-color="#0a0a0a"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.18" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#F97316" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#F97316" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <!-- subtle hex grid overlay -->
  <g stroke="#F97316" stroke-opacity="0.05" stroke-width="1" fill="none">
    ${Array.from({ length: 14 }, (_, r) =>
      Array.from({ length: 24 }, (_, c) => {
        const x = c * 60 + (r % 2 ? 30 : 0)
        const y = r * 52
        return `<polygon points="${x},${y + 17} ${x + 17},${y} ${x + 34},${y + 17} ${x + 34},${y + 35} ${x + 17},${y + 52} ${x},${y + 35}"/>`
      }).join(""),
    ).join("")}
  </g>

  <!-- Ergo logo, scaled from 100×90 viewBox to 320×288 and placed left -->
  <g transform="translate(110 171) scale(3.2)">
    ${inner}
  </g>

  <!-- Wordmark + tagline -->
  <g transform="translate(540 230)" font-family="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto" fill="#ffffff">
    <text x="0" y="0" font-size="92" font-weight="800" letter-spacing="-2">ERGO</text>
    <text x="0" y="78" font-size="40" font-weight="600" fill="#F97316">The Agentic Blockchain</text>
    <text x="0" y="138" font-size="24" font-weight="400" fill="#9ca3af">PoW · eUTXO · ErgoScript</text>
    <text x="0" y="172" font-size="24" font-weight="400" fill="#9ca3af">Built for autonomous agent payments</text>
  </g>

  <!-- Footer URL -->
  <g transform="translate(0 580)">
    <rect x="0" y="-2" width="1200" height="2" fill="#F97316" opacity="0.4"/>
    <text x="60" y="32" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="22" fill="#9ca3af">www.ergoblockchain.org</text>
  </g>
</svg>`
  }

  return sharp(Buffer.from(svgSource), { density: 144 })
    .resize(1200, 630, { fit: "cover", background: "#000" })
    .png({ compressionLevel: 9 })
    .toBuffer()
}

async function main() {
  await ensureDir(PUBLIC)
  await ensureDir(APP)

  // Multi-size PNG icons (transparent background).
  // 72/96/128/152/384 are referenced by public/manifest.json so we need to
  // emit them as well, otherwise PWA installs use a broken icon.
  const sizes = [16, 32, 48, 72, 96, 128, 144, 152, 180, 192, 384, 512]
  const png = {}
  for (const s of sizes) png[s] = await renderIcon(s)

  await writeFile(join(PUBLIC, "favicon-16.png"), png[16])
  await writeFile(join(PUBLIC, "favicon-32.png"), png[32])
  await writeFile(join(PUBLIC, "favicon-48.png"), png[48])
  await writeFile(join(PUBLIC, "apple-touch-icon.png"), png[180])
  // Manifest icons (kept in sync with public/manifest.json).
  for (const s of [72, 96, 128, 144, 152, 192, 384, 512]) {
    await writeFile(join(PUBLIC, `icon-${s}x${s}.png`), png[s])
  }

  // Real multi-size ICO at /favicon.ico
  const ico = buildIco([
    { size: 16, buffer: png[16] },
    { size: 32, buffer: png[32] },
    { size: 48, buffer: png[48] },
  ])
  await writeFile(join(PUBLIC, "favicon.ico"), ico)

  // Next.js conventional file-system icons.
  await writeFile(join(APP, "icon.png"), png[192])
  await writeFile(join(APP, "apple-icon.png"), png[180])

  // Schema.org publisher logo. Multiple JSON-LD blocks reference these:
  // - /logo-ergo.svg → keep as a real SVG (was previously a PNG renamed
  //   to .svg, which Google's structured-data validators rejected).
  // - /logo.png → 1024×1024 PNG used by Article.publisher.logo, RSS feed,
  //   knowledge-graph references.
  const svgSource = await readFile(ICON_SVG)
  await writeFile(join(PUBLIC, "logo-ergo.svg"), svgSource)
  await writeFile(join(PUBLIC, "logo.png"), await renderIcon(1024))

  // OG image — 1200×630 PNG. Written both as the canonical
  // /og-image.png and at every per-page path the app references but
  // didn't have a file for. Per-page OG cards are the long-term answer;
  // until those land, ensure no share-preview crawler ever 404s on us
  // (Telegram / WhatsApp drop the preview entirely on 404 and fall back
  // to apple-touch-icon).
  const og = await buildOgImage()
  await writeFile(join(PUBLIC, "og-image.png"), og)

  await ensureDir(join(PUBLIC, "og"))
  const fallbackOgPaths = [
    "homepage.png",
    "agent-payments.png",
    "comparison.png",
    "community.png",
    "defi.png",
    "demos.png",
    "ecosystem-map.png",
    "ergo-features.png",
    "ergoscript.png",
    "faq.png",
    "get-erg.png",
    "glossary.png",
    "grants.png",
    "intro.png",
    "introduction.png",
    "quiz.png",
    "research.png",
    "technology.png",
    "wallets.png",
  ]
  for (const f of fallbackOgPaths) {
    await writeFile(join(PUBLIC, "og", f), og)
  }
  // SVG fallbacks referenced by some routes — write the same OG card as
  // an embedded PNG inside an SVG wrapper so the URL resolves.
  const svgWrapper = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 630" width="1200" height="630">
  <image width="1200" height="630" xlink:href="data:image/png;base64,${og.toString("base64")}"/>
</svg>`
  await writeFile(join(PUBLIC, "og", "blog.svg"), svgWrapper)
  await writeFile(join(PUBLIC, "og", "blog-default.svg"), svgWrapper)
  await writeFile(join(PUBLIC, "og", "infographics-hub.svg"), svgWrapper)

  console.log("✓ icons + favicon + OG image regenerated")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
