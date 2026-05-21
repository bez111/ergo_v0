"use client"

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  AlertTriangle,
  Calendar,
  CheckCircle2,
  Eye,
  FileText,
  Hash,
  Image as ImageIcon,
  KeyRound,
  Loader2,
  RefreshCw,
  Send,
  Type,
  Upload,
} from "lucide-react"

interface BlogCmsEntry {
  slug: string
  status: "draft" | "published"
  title: string
  excerpt: string
  category: string
  author: string
  date_published: string
  updatedAt: string
  readTime: number
  wordCount: number
  hero?: { jpgUrl: string }
}

interface AdminState {
  storageConfigured: boolean
  adminConfigured: boolean
  devBypass: boolean
  entries: BlogCmsEntry[]
}

interface ArticlePreview {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: number
  wordCount: number
  bodySample: string
}

const TOKEN_KEY = "ergo-blog-admin-token"
const WORDS_PER_MINUTE = 220

export function BlogAdminClient() {
  const formRef = useRef<HTMLFormElement>(null)
  const [token, setToken] = useState("")
  const [state, setState] = useState<AdminState | null>(null)
  const [preview, setPreview] = useState<ArticlePreview | null>(null)
  const [heroPreview, setHeroPreview] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState<{ type: "ok" | "error"; text: string } | null>(null)

  const sortedEntries = useMemo(() => {
    return [...(state?.entries ?? [])].sort(
      (a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime(),
    )
  }, [state?.entries])

  const refresh = useCallback(async (nextToken: string) => {
    setBusy(true)
    setMessage(null)
    try {
      const response = await fetch("/api/admin/blog", {
        headers: authHeaders(nextToken),
        cache: "no-store",
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error ?? "Admin API rejected the request")
      window.sessionStorage.setItem(TOKEN_KEY, nextToken)
      setState(data)
    } catch (error) {
      setMessage({ type: "error", text: error instanceof Error ? error.message : "Could not load CMS state" })
    } finally {
      setBusy(false)
    }
  }, [])

  useEffect(() => {
    const saved = window.sessionStorage.getItem(TOKEN_KEY) ?? ""
    setToken(saved)
    if (saved) void refresh(saved)
  }, [refresh])

  async function publish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setMessage(null)

    try {
      const data = new FormData(event.currentTarget)
      const response = await fetch("/api/admin/blog", {
        method: "POST",
        headers: authHeaders(token),
        body: data,
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload.error ?? "Publish failed")

      window.sessionStorage.setItem(TOKEN_KEY, token)
      formRef.current?.reset()
      setPreview(null)
      setHeroPreview(null)
      await refresh(token)
      setMessage({ type: "ok", text: `Saved ${payload.entry.title} and revalidated /blog/${payload.entry.slug}` })
    } catch (error) {
      setMessage({ type: "error", text: error instanceof Error ? error.message : "Publish failed" })
    } finally {
      setBusy(false)
    }
  }

  async function handleMarkdownPreview(file: File | null) {
    setMessage(null)
    if (!file) {
      setPreview(null)
      return
    }

    try {
      const markdown = await file.text()
      setPreview(parsePreview(markdown))
    } catch (error) {
      setPreview(null)
      setMessage({ type: "error", text: error instanceof Error ? error.message : "Could not preview markdown" })
    }
  }

  function handleHeroPreview(file: File | null) {
    setMessage(null)
    if (!file) {
      setHeroPreview(null)
      return
    }

    const reader = new FileReader()
    reader.onload = () => setHeroPreview(typeof reader.result === "string" ? reader.result : null)
    reader.onerror = () => setMessage({ type: "error", text: "Could not preview hero image" })
    reader.readAsDataURL(file)
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8 border-b border-white/10 pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-orange-300">
                ergo blog cms
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Markdown publishing cockpit
              </h1>
            </div>
            <button
              type="button"
              onClick={() => refresh(token)}
              disabled={busy}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 font-mono text-sm uppercase tracking-[0.12em] text-white transition hover:border-orange-400 hover:text-orange-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
              Refresh
            </button>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <form
            ref={formRef}
            onSubmit={publish}
            className="rounded-lg border border-white/10 bg-black p-5 shadow-2xl shadow-black/30"
          >
            <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
              <Upload className="h-5 w-5 text-orange-300" />
              <h2 className="text-lg font-semibold">New article</h2>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-medium text-neutral-300">
                  <KeyRound className="h-4 w-4 text-neutral-500" />
                  Admin token
                </span>
                <input
                  value={token}
                  onChange={(event) => setToken(event.target.value)}
                  type="password"
                  autoComplete="off"
                  className="h-11 w-full rounded-md border border-white/10 bg-neutral-950 px-3 text-sm text-white outline-none transition focus:border-orange-400"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-neutral-300">Status</span>
                  <select
                    name="status"
                    defaultValue="published"
                    className="h-11 w-full rounded-md border border-white/10 bg-neutral-950 px-3 text-sm text-white outline-none transition focus:border-orange-400"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-neutral-300">Slug override</span>
                  <input
                    name="slug"
                    type="text"
                    placeholder="optional"
                    className="h-11 w-full rounded-md border border-white/10 bg-neutral-950 px-3 text-sm text-white outline-none transition placeholder:text-neutral-700 focus:border-orange-400"
                  />
                </label>
              </div>

              <label className="block rounded-md border border-dashed border-white/15 bg-white/[0.03] p-4 transition focus-within:border-orange-400">
                <span className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-300">
                  <FileText className="h-4 w-4 text-orange-300" />
                  Markdown file
                </span>
                <input
                  name="markdown"
                  type="file"
                  accept=".md,.markdown,text/markdown,text/plain"
                  required
                  onChange={(event) => void handleMarkdownPreview(event.currentTarget.files?.[0] ?? null)}
                  className="block w-full text-sm text-neutral-300 file:mr-4 file:rounded-md file:border-0 file:bg-orange-500 file:px-3 file:py-2 file:font-mono file:text-xs file:uppercase file:tracking-[0.12em] file:text-black hover:file:bg-orange-400"
                />
              </label>

              <label className="block rounded-md border border-dashed border-white/15 bg-white/[0.03] p-4 transition focus-within:border-orange-400">
                <span className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-300">
                  <ImageIcon className="h-4 w-4 text-orange-300" />
                  Hero image
                </span>
                <input
                  name="hero"
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleHeroPreview(event.currentTarget.files?.[0] ?? null)}
                  className="block w-full text-sm text-neutral-300 file:mr-4 file:rounded-md file:border-0 file:bg-white/10 file:px-3 file:py-2 file:font-mono file:text-xs file:uppercase file:tracking-[0.12em] file:text-white hover:file:bg-white/15"
                />
                <span className="mt-3 block text-xs leading-relaxed text-neutral-500">
                  Upload can be PNG, JPG, WebP, or AVIF. The API crops it to
                  1200×630 and stores optimized JPEG + WebP in Vercel Blob.
                </span>
              </label>

              <button
                type="submit"
                disabled={busy}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-4 font-mono text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Save to Blob
              </button>
            </div>
          </form>

          <section className="rounded-lg border border-white/10 bg-black p-5">
            <div className="mb-5 rounded-md border border-orange-500/25 bg-orange-500/[0.045] p-4">
              <div className="mb-4 flex items-center gap-2">
                <Eye className="h-4 w-4 text-orange-300" />
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-orange-200">
                  Pre-publish preview
                </h2>
              </div>
              {preview ? (
                <div className="overflow-hidden rounded-md border border-white/10 bg-neutral-950">
                  <div className="relative aspect-[1200/630] bg-neutral-900">
                    {heroPreview ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={heroPreview}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-neutral-600">
                        Hero preview appears here
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-orange-300">
                        /blog/{preview.slug}
                      </div>
                      <h3 className="mt-1 line-clamp-2 text-2xl font-bold leading-tight text-white">
                        {preview.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-4 p-4">
                    <p className="line-clamp-3 text-sm leading-relaxed text-neutral-300">
                      {preview.excerpt}
                    </p>
                    <div className="grid gap-2 text-xs text-neutral-500 sm:grid-cols-2">
                      <PreviewFact icon={Hash} label="Slug" value={preview.slug} />
                      <PreviewFact icon={Calendar} label="Date" value={preview.date} />
                      <PreviewFact icon={Type} label="Category" value={preview.category} />
                      <PreviewFact icon={FileText} label="Length" value={`${preview.readTime}m · ${preview.wordCount}w`} />
                    </div>
                    <div className="rounded-md border border-white/10 bg-black/55 p-3">
                      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-600">
                        Body sample
                      </div>
                      <p className="line-clamp-4 text-xs leading-relaxed text-neutral-400">
                        {preview.bodySample}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-sm leading-relaxed text-neutral-500">
                  Select a markdown file to preview title, slug, excerpt,
                  article length, and the blog-card hero treatment before
                  writing anything to Blob.
                </p>
              )}
            </div>

            <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <h2 className="text-lg font-semibold">Blob state</h2>
              <div className="flex flex-wrap gap-2">
                <StatusPill label="Admin" ok={Boolean(state?.adminConfigured || state?.devBypass)} />
                <StatusPill label="Storage" ok={Boolean(state?.storageConfigured)} />
              </div>
            </div>

            {message && (
              <div
                className={`mb-4 flex items-start gap-3 rounded-md border p-3 text-sm ${
                  message.type === "ok"
                    ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
                    : "border-red-400/25 bg-red-400/10 text-red-100"
                }`}
              >
                {message.type === "ok" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                ) : (
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                )}
                <span>{message.text}</span>
              </div>
            )}

            <div className="overflow-hidden rounded-md border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.14em] text-neutral-500">
                  <tr>
                    <th className="px-3 py-3 font-medium">Article</th>
                    <th className="px-3 py-3 font-medium">Status</th>
                    <th className="px-3 py-3 font-medium">Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {sortedEntries.length === 0 ? (
                    <tr>
                      <td className="px-3 py-6 text-neutral-500" colSpan={3}>
                        No Blob articles loaded.
                      </td>
                    </tr>
                  ) : (
                    sortedEntries.map((entry) => (
                      <tr key={entry.slug} className="align-top">
                        <td className="px-3 py-3">
                          <a
                            href={`/blog/${entry.slug}`}
                            className="font-medium text-white underline-offset-4 hover:text-orange-300 hover:underline"
                          >
                            {entry.title}
                          </a>
                          <div className="mt-1 line-clamp-2 text-xs text-neutral-500">{entry.excerpt}</div>
                          <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-600">
                            {entry.category} · {entry.readTime}m · {entry.wordCount}w
                          </div>
                        </td>
                        <td className="px-3 py-3">
                          <span
                            className={`rounded-full px-2 py-1 text-xs font-semibold ${
                              entry.status === "published"
                                ? "bg-emerald-400/10 text-emerald-200"
                                : "bg-yellow-400/10 text-yellow-200"
                            }`}
                          >
                            {entry.status}
                          </span>
                        </td>
                        <td className="px-3 py-3 font-mono text-xs text-neutral-500">
                          {entry.updatedAt}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}

function StatusPill({ label, ok }: { label: string; ok: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
        ok
          ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
          : "border-red-400/25 bg-red-400/10 text-red-200"
      }`}
    >
      {ok ? <CheckCircle2 className="h-3.5 w-3.5" /> : <AlertTriangle className="h-3.5 w-3.5" />}
      {label}
    </span>
  )
}

function PreviewFact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof FileText
  label: string
  value: string
}) {
  return (
    <div className="flex min-w-0 items-start gap-2 rounded-md border border-white/10 bg-white/[0.03] p-2">
      <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-600" />
      <div className="min-w-0">
        <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-600">
          {label}
        </div>
        <div className="mt-0.5 truncate text-neutral-300" title={value}>
          {value}
        </div>
      </div>
    </div>
  )
}

function authHeaders(token: string): HeadersInit {
  return token.trim() ? { Authorization: `Bearer ${token.trim()}` } : {}
}

function parsePreview(markdown: string): ArticlePreview {
  const { frontMatter, body } = splitFrontMatter(markdown)
  const today = new Date().toISOString().slice(0, 10)
  const title = frontMatter.title ?? extractH1(body) ?? "Untitled article"
  const excerpt =
    frontMatter.excerpt ??
    frontMatter.meta_description ??
    firstParagraph(body) ??
    "Ergo ecosystem update."
  const wordCount = countWords(body)

  return {
    slug: normalizeSlug(frontMatter.slug ?? title),
    title,
    excerpt,
    category: frontMatter.category ?? "Build Log",
    author: frontMatter.author ?? "Developer Relations",
    date: frontMatter.date_published ?? frontMatter.date ?? today,
    readTime: Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE)),
    wordCount,
    bodySample: firstParagraph(body) ?? body.replace(/\s+/g, " ").trim().slice(0, 280),
  }
}

function splitFrontMatter(markdown: string): {
  frontMatter: Record<string, string>
  body: string
} {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  if (!match) return { frontMatter: {}, body: markdown }

  const [, raw = "", body = ""] = match
  const frontMatter: Record<string, string> = {}

  for (const line of raw.split(/\r?\n/)) {
    const separator = line.indexOf(":")
    if (separator <= 0) continue
    const key = line.slice(0, separator).trim()
    const value = line
      .slice(separator + 1)
      .trim()
      .replace(/^['"]|['"]$/g, "")
    if (key && value && !value.startsWith("[")) frontMatter[key] = value
  }

  return { frontMatter, body }
}

function normalizeSlug(value: string): string {
  return value
    .replace(/^https?:\/\/[^/]+\/blog\//i, "")
    .replace(/^\/?blog\//i, "")
    .replace(/\.md$/i, "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .slice(0, 90)
}

function extractH1(body: string): string | undefined {
  return body.match(/^#\s+(.+?)\s*$/m)?.[1]?.trim()
}

function firstParagraph(body: string): string | undefined {
  const paragraph = body
    .replace(/^#\s+.+?$/gm, "")
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .find((part) => part && !part.startsWith("```") && !part.startsWith("|"))

  if (!paragraph) return undefined
  return paragraph
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 240)
}

function countWords(body: string): number {
  return body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .length
}
