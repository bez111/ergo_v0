/**
 * Per-IP sliding-window rate limiter, in-memory.
 *
 * Caveats — this is a Phase 1 stop-gap, not a fortress:
 *  - Memory only lives inside a single hot serverless instance, so a
 *    distributed attacker hitting different cold instances bypasses it.
 *  - Map is unbounded between cleanups. We sweep entries that haven't
 *    been touched in 2× the window on every check, which keeps the
 *    working set proportional to recent unique IPs (small for our
 *    traffic). Phase 2 swaps this for Vercel KV / Upstash Ratelimit.
 *
 * The point is to stop the obvious "one tab cranking out queries"
 * abuse pattern that would empty the Anthropic budget overnight.
 */

const WINDOW_MS = 60_000 // 1 minute
const MAX_PER_WINDOW = 10
const SWEEP_AFTER_MS = WINDOW_MS * 2

interface Bucket {
  timestamps: number[]
  lastTouched: number
}

const buckets = new Map<string, Bucket>()
let lastSweep = 0

function sweep(now: number) {
  if (now - lastSweep < WINDOW_MS) return
  lastSweep = now
  for (const [key, bucket] of buckets) {
    if (now - bucket.lastTouched > SWEEP_AFTER_MS) buckets.delete(key)
  }
}

export interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetAt: number
}

export function checkRateLimit(key: string, now = Date.now()): RateLimitResult {
  sweep(now)
  const bucket = buckets.get(key) ?? { timestamps: [], lastTouched: now }
  const cutoff = now - WINDOW_MS
  bucket.timestamps = bucket.timestamps.filter((t) => t > cutoff)

  if (bucket.timestamps.length >= MAX_PER_WINDOW) {
    bucket.lastTouched = now
    buckets.set(key, bucket)
    const oldest = bucket.timestamps[0] ?? now
    return {
      allowed: false,
      remaining: 0,
      resetAt: oldest + WINDOW_MS,
    }
  }

  bucket.timestamps.push(now)
  bucket.lastTouched = now
  buckets.set(key, bucket)

  return {
    allowed: true,
    remaining: MAX_PER_WINDOW - bucket.timestamps.length,
    resetAt: now + WINDOW_MS,
  }
}

/**
 * Best-effort client IP extraction. Falls back to "anon" so cold-instance
 * traffic without forwarded headers still gets rate-limited under one
 * shared bucket (acceptable: that bucket caps the no-header path).
 */
export function clientKey(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for")
  if (fwd) return fwd.split(",")[0]!.trim()
  const real = req.headers.get("x-real-ip")
  if (real) return real
  return "anon"
}
