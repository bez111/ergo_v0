"use client"

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  AlertTriangle,
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  KeyRound,
  Loader2,
  RefreshCw,
  Send,
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

const TOKEN_KEY = "ergo-blog-admin-token"

export function BlogAdminClient() {
  const formRef = useRef<HTMLFormElement>(null)
  const [token, setToken] = useState("")
  const [state, setState] = useState<AdminState | null>(null)
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
      await refresh(token)
      setMessage({ type: "ok", text: `Saved ${payload.entry.title}` })
    } catch (error) {
      setMessage({ type: "error", text: error instanceof Error ? error.message : "Publish failed" })
    } finally {
      setBusy(false)
    }
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
                  className="block w-full text-sm text-neutral-300 file:mr-4 file:rounded-md file:border-0 file:bg-white/10 file:px-3 file:py-2 file:font-mono file:text-xs file:uppercase file:tracking-[0.12em] file:text-white hover:file:bg-white/15"
                />
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

function authHeaders(token: string): HeadersInit {
  return token.trim() ? { Authorization: `Bearer ${token.trim()}` } : {}
}
