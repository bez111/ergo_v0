/**
 * Sage retrieval: BM25 over the build-time index.
 *
 * Tiny implementation — no external deps. The corpus is ~40 chunks, so a
 * dumb in-memory scan per query is fine and there is no need for an index
 * structure beyond the precomputed token frequencies.
 *
 * Tunables k1 / b are the canonical BM25 defaults. Stopwords are a short
 * English list; the corpus is English, so this is sufficient.
 */

import indexJson from "./index.json"

export interface SageDoc {
  id: string
  type: "blog" | "page" | string
  url: string
  title: string
  tags?: string
  content: string
}

export interface ScoredDoc extends SageDoc {
  score: number
}

interface SageIndexFile {
  generatedAt: string
  documentCount: number
  docs: SageDoc[]
}

const INDEX = indexJson as SageIndexFile

const STOPWORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "from", "had",
  "has", "have", "he", "her", "his", "i", "if", "in", "into", "is", "it", "its",
  "of", "on", "or", "she", "that", "the", "their", "them", "then", "there",
  "they", "this", "to", "was", "we", "were", "what", "when", "where", "which",
  "who", "why", "will", "with", "you", "your", "would", "could", "should",
  "do", "does", "did", "not", "no", "yes", "so", "up", "out", "about",
])

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s\-]/g, " ")
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 1 && !STOPWORDS.has(t))
}

interface PreparedDoc {
  doc: SageDoc
  termFreq: Map<string, number>
  length: number
}

let prepared: PreparedDoc[] | null = null
let avgDocLength = 0
let docFreq: Map<string, number> = new Map()

function prepare() {
  if (prepared) return
  prepared = INDEX.docs.map((doc) => {
    const text = `${doc.title} ${doc.tags ?? ""} ${doc.content}`
    const tokens = tokenize(text)
    const freq = new Map<string, number>()
    for (const t of tokens) freq.set(t, (freq.get(t) ?? 0) + 1)
    return { doc, termFreq: freq, length: tokens.length }
  })
  const total = prepared.reduce((sum, p) => sum + p.length, 0)
  avgDocLength = total / Math.max(prepared.length, 1)

  docFreq = new Map()
  for (const p of prepared) {
    for (const term of p.termFreq.keys()) {
      docFreq.set(term, (docFreq.get(term) ?? 0) + 1)
    }
  }
}

const K1 = 1.5
const B = 0.75

function bm25Score(queryTokens: string[], doc: PreparedDoc): number {
  const N = prepared!.length
  let score = 0
  for (const qt of queryTokens) {
    const tf = doc.termFreq.get(qt) ?? 0
    if (tf === 0) continue
    const df = docFreq.get(qt) ?? 0
    // Robertson-Spärck Jones IDF (smoothed)
    const idf = Math.log(1 + (N - df + 0.5) / (df + 0.5))
    const norm = tf * (K1 + 1)
    const denom = tf + K1 * (1 - B + B * (doc.length / avgDocLength))
    score += idf * (norm / denom)
  }
  return score
}

/**
 * Retrieve the top-k chunks most relevant to the query.
 * Returns an empty array if the query has no scoring tokens.
 */
export function retrieve(query: string, k = 5): ScoredDoc[] {
  prepare()
  const queryTokens = tokenize(query)
  if (queryTokens.length === 0) return []

  const scored = prepared!
    .map((p) => ({ ...p.doc, score: bm25Score(queryTokens, p) }))
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k)

  return scored
}

/**
 * Render retrieved chunks as a single context string for the LLM.
 * Each chunk is prefixed with its title + url so the model can cite it.
 */
export function formatContext(docs: ScoredDoc[]): string {
  if (docs.length === 0) return ""
  return docs
    .map(
      (d, i) =>
        `[Source ${i + 1}: ${d.title} — ${d.url}]\n${d.content}`,
    )
    .join("\n\n---\n\n")
}

export const sageIndexMeta = {
  generatedAt: INDEX.generatedAt,
  documentCount: INDEX.documentCount,
}
