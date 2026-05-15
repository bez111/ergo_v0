#!/usr/bin/env node
/**
 * Translate every src/content/blog/*.md into the project's non-English
 * locales using Claude Haiku 4.5. Output goes to
 * src/content/blog/<locale>/<slug>.md.
 *
 * Idempotent: skips a (post, locale) pair if the destination already
 * exists, unless --force is passed.
 *
 *   node scripts/translate-blog.mjs                 # all posts × all langs
 *   node scripts/translate-blog.mjs --post manifesto-slug
 *   node scripts/translate-blog.mjs --lang ru,de
 *   node scripts/translate-blog.mjs --force         # retranslate existing
 *
 * Reads ANTHROPIC_API_KEY from .env.local (already present per Sage Phase 1).
 * Cost: ~$0.02 per post per language with Haiku 4.5. 48 translations ≈ $1.
 */

import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import Anthropic from "@anthropic-ai/sdk"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const BLOG_DIR = join(ROOT, "src/content/blog")

// Load .env.local manually (dotenv doesn't pick it up by default).
// .env.local always wins over the shell — the user's actual project
// key lives there; the shell may have a stale/different one injected.
const envLocal = join(ROOT, ".env.local")
if (existsSync(envLocal)) {
  for (const line of readFileSync(envLocal, "utf8").split("\n")) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/)
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "")
  }
}

const TARGETS = [
  { code: "ru",    name: "Russian",          notes: "Use natural technical Russian. Keep 'agent economy' as 'агент-экономика' (no English in body)." },
  { code: "de",    name: "German",           notes: "Formal Sie/du? Use du — community/dev voice." },
  { code: "fr",    name: "French",           notes: "Use the formal informational register but keep developer tone (tutoiement is OK in 2026 dev contexts)." },
  { code: "zh-cn", name: "Simplified Chinese", notes: "Simplified characters. Translate naturally but keep technical terms in English where the Chinese equivalent isn't standardized." },
  { code: "tr",    name: "Turkish",          notes: "Modern technical Turkish, dev-community register." },
  { code: "ko-kr", name: "Korean",           notes: "Standard Korean (한국어), informal-formal mix typical of dev articles. Particles correct." },
]

const ARGS = parseArgs(process.argv.slice(2))
const FORCE = ARGS.has("force")
const POST_FILTER = ARGS.get("post")
const LANG_FILTER = (ARGS.get("lang") ?? "").split(",").filter(Boolean)

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
if (!process.env.ANTHROPIC_API_KEY) {
  console.error("ANTHROPIC_API_KEY missing (.env.local)")
  process.exit(1)
}

const MODEL = "claude-haiku-4-5-20251001"
const MAX_TOKENS = 8000

function buildSystemPrompt(target) {
  return `You are a professional technical translator producing ${target.name} translations of Markdown articles about blockchain (Ergo), the Accord Protocol, and the agent economy.

Hard rules:
1. OUTPUT ONLY the translated Markdown file. No prose, no explanation, no code fences around the file. Start with --- (frontmatter) and end with the last paragraph.
2. Translate the **frontmatter values** (title, seo_title, meta_description, excerpt) but KEEP the YAML keys in English. Do not translate slug, dates, tags array values that are technical identifiers.
3. Translate the **body text** to natural ${target.name}. ${target.notes}
4. NEVER translate: code blocks (\`\`\`...\`\`\`), inline code (\`x\`), URLs, file paths, or technical identifiers in the Ergo/Accord namespace: "Ergo", "ErgoScript", "Autolykos", "eUTXO", "Accord", "Sage", "Reserve", "Note", "Tracker", "Acceptance Predicate", "Fleet SDK", "ergo-agent-pay", "rails-ergo", "Vercel", "Anthropic", "Claude", "Sonnet", "Haiku", "Nautilus", "GitHub", "MCP", "x402", "Stripe", "BIP-39", "blake2b256", "ed25519", "HMAC", "SSE", "RAG", "BM25", "JSON-LD", "Schema.org".
5. Preserve all Markdown structure exactly: headings (#, ##, ###), lists, tables, blockquotes, links [text](url), bold **x**, italic _x_, code spans \`x\`. Translate the visible text only.
6. Section headings like "FAQ", "Try it", "What's next" should be translated to the target language's natural equivalent.
7. Currency / amount notation stays the same: "0.001 testnet ERG" stays as written.
8. URLs to external services (testnet.ergoplatform.com, github.com/...) stay unchanged.

Output the complete translated Markdown file. Nothing else.`
}

async function translateOne(slug, source, target) {
  const sys = buildSystemPrompt(target)
  const stream = await client.messages.stream({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: sys,
    messages: [
      { role: "user", content: source },
    ],
  })
  let out = ""
  process.stdout.write(`    ${target.code}: `)
  for await (const event of stream) {
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      out += event.delta.text
      process.stdout.write(".")
    }
  }
  process.stdout.write("\n")
  const final = await stream.finalMessage()
  return {
    text: out,
    inTokens: final.usage.input_tokens,
    outTokens: final.usage.output_tokens,
    costUsd: (final.usage.input_tokens / 1e6) * 1 + (final.usage.output_tokens / 1e6) * 5,
  }
}

async function main() {
  const sources = readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .filter((f) => !POST_FILTER || f.includes(POST_FILTER))
    .map((f) => ({
      slug: f.replace(/\.md$/, ""),
      raw: readFileSync(join(BLOG_DIR, f), "utf8"),
    }))

  const langs = LANG_FILTER.length > 0 ? TARGETS.filter((t) => LANG_FILTER.includes(t.code)) : TARGETS

  console.log(`translate-blog: ${sources.length} posts × ${langs.length} languages = ${sources.length * langs.length} files`)
  console.log(`force=${FORCE}, model=${MODEL}`)
  console.log()

  let totalIn = 0
  let totalOut = 0
  let totalCost = 0
  let written = 0
  let skipped = 0
  let failed = 0

  for (const post of sources) {
    console.log(`▸ ${post.slug}`)
    for (const target of langs) {
      const outDir = join(BLOG_DIR, target.code)
      const outFile = join(outDir, `${post.slug}.md`)
      if (existsSync(outFile) && !FORCE) {
        console.log(`    ${target.code}: skip (exists)`)
        skipped += 1
        continue
      }
      try {
        const result = await translateOne(post.slug, post.raw, target)
        mkdirSync(outDir, { recursive: true })
        writeFileSync(outFile, result.text)
        console.log(`         ${result.inTokens}/${result.outTokens} tokens · $${result.costUsd.toFixed(4)}`)
        totalIn += result.inTokens
        totalOut += result.outTokens
        totalCost += result.costUsd
        written += 1
      } catch (err) {
        console.log(`         FAIL: ${err instanceof Error ? err.message : err}`)
        failed += 1
      }
    }
  }

  console.log()
  console.log(`done: ${written} written, ${skipped} skipped, ${failed} failed`)
  console.log(`tokens: ${totalIn} in / ${totalOut} out`)
  console.log(`cost:   $${totalCost.toFixed(2)}`)
}

function parseArgs(argv) {
  const flags = new Set()
  const map = new Map()
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (!a.startsWith("--")) continue
    const key = a.slice(2)
    const next = argv[i + 1]
    if (next && !next.startsWith("--")) {
      map.set(key, next)
      i += 1
    } else {
      flags.add(key)
    }
  }
  return {
    has: (k) => flags.has(k) || map.has(k),
    get: (k) => map.get(k),
  }
}

await main()
