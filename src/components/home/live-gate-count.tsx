"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

const REFRESH_MS = 60_000
// The live endpoint allows 60 seconds of shared caching and 120 seconds of revalidation.
const MAX_SNAPSHOT_AGE_MS = 180_000

export function LiveGateCount() {
  const t = useTranslations()
  const [count, setCount] = useState<string | null | undefined>(undefined)

  useEffect(() => {
    let disposed = false
    let request: AbortController | null = null
    let lastStarted = -Infinity
    let expiresAt = 0
    let expiryTimer: number | undefined

    function expire() {
      window.clearTimeout(expiryTimer)
      expiresAt = 0
      setCount(null)
    }

    async function refresh() {
      const now = Date.now()
      if (document.hidden) return
      if (expiresAt && now >= expiresAt) expire()
      if (request || now - lastStarted < REFRESH_MS) return

      lastStarted = now
      const controller = new AbortController()
      request = controller
      const timeout = window.setTimeout(() => controller.abort(), 15_000)
      try {
        const response = await fetch("/api/agent-economy/live", { signal: controller.signal })
        if (!response.ok) throw new Error("Live status unavailable")

        const receivedAt = Date.now()
        const body = await response.json()
        const { gates_live: live, gates_total: total } = body?.summary ?? {}
        const generated = Date.parse(body?.generated_at)
        const serverTime = Date.parse(response.headers.get("date") ?? "")
        const cacheAge = Number(response.headers.get("age")) * 1000
        // HTTP Date is the origin response time. Age adds subsequent time in shared caches.
        const snapshotAge = (Number.isFinite(serverTime) ? serverTime : receivedAt) - generated
        const age = Number.isFinite(serverTime)
          ? Math.max(0, snapshotAge) + cacheAge
          : Math.max(snapshotAge, cacheAge)
        const deadline = receivedAt + MAX_SNAPSHOT_AGE_MS - age
        const remaining = deadline - Date.now()
        if (body?.ok !== true || !Number.isSafeInteger(live) || !Number.isSafeInteger(total) ||
            live < 0 || live > total || !Number.isFinite(age) ||
            cacheAge < 0 || snapshotAge < -1000 || remaining <= 0) {
          throw new Error("Invalid or expired gate summary")
        }
        if (disposed) return
        window.clearTimeout(expiryTimer)
        expiresAt = deadline
        expiryTimer = window.setTimeout(expire, remaining)
        setCount(`${live} / ${total}`)
      } catch {
        if (!disposed) expire()
      } finally {
        window.clearTimeout(timeout)
        request = null
      }
    }

    void refresh()
    const interval = window.setInterval(refresh, REFRESH_MS)
    document.addEventListener("visibilitychange", refresh)
    return () => {
      disposed = true
      request?.abort()
      window.clearInterval(interval)
      window.clearTimeout(expiryTimer)
      document.removeEventListener("visibilitychange", refresh)
    }
  }, [])

  // The static HTML also serves readers with JavaScript disabled.
  return <span role="status">{count === undefined ? t("common.viewMore") : count ?? t("hero.gates.unavailable")}</span>
}
