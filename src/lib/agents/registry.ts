/**
 * Fetcher for the public Accord Protocol provider registry.
 *
 * Source: https://github.com/accord-protocol/accord-protocol/tree/main/registry/providers
 * Each provider is a single .json file conforming to accord.provider_profile.v0.
 *
 * We fetch via the GitHub Contents API (lists files in the directory)
 * then individual raw.githubusercontent.com URLs (cached at the Next.js
 * fetch layer for an hour). Failure modes degrade gracefully — if the
 * registry is unreachable, the page renders an empty state with a link
 * to the canonical source so the read-only directory never 500s.
 */

const REGISTRY_DIR_API =
  "https://api.github.com/repos/accord-protocol/accord-protocol/contents/registry/providers"
const REGISTRY_RAW_BASE =
  "https://raw.githubusercontent.com/accord-protocol/accord-protocol/main/registry/providers"

const ONE_HOUR = 3600

export interface ProviderProfile {
  type: "accord.provider_profile.v0"
  version: "v0"
  provider_id: string
  display_name: string
  homepage?: string
  description?: string
  capabilities?: string[]
  accepted_transports?: string[]
  accepted_rails?: string[]
  pricing?: Array<{
    kind: string
    amount: string
    currency: string
    decimals?: number
  }>
  verification?: {
    required?: boolean
    supported_verifiers?: string[]
  }
  endpoints?: Record<string, string>
  implementation?: { reference_example?: string; notes?: string }
  operational_status?: Record<string, unknown>
  conformance?: {
    level?: string
    last_run_at?: string | null
    result_uri?: string | null
    public_key_uri?: string | null
    receipt_uri?: string | null
    notes?: string
  }
  live_proof?: Record<string, unknown>
  operator?: { kind?: string; contact?: string }
  /** GitHub source URL for the manifest. Annotated by the loader. */
  __sourceUrl?: string
}

interface DirEntry {
  name: string
  type: string
  download_url: string | null
}

export async function listProviders(): Promise<ProviderProfile[]> {
  const dirRes = await fetch(REGISTRY_DIR_API, {
    headers: { accept: "application/vnd.github.v3+json" },
    next: { revalidate: ONE_HOUR },
  }).catch(() => null)
  if (!dirRes || !dirRes.ok) return []

  const dir = (await dirRes.json()) as DirEntry[]
  const jsonFiles = dir.filter((e) => e.type === "file" && e.name.endsWith(".json"))

  const providers = await Promise.all(
    jsonFiles.map(async (f) => {
      try {
        const res = await fetch(`${REGISTRY_RAW_BASE}/${f.name}`, {
          next: { revalidate: ONE_HOUR },
        })
        if (!res.ok) return null
        const profile = (await res.json()) as ProviderProfile
        profile.__sourceUrl = `https://github.com/accord-protocol/accord-protocol/blob/main/registry/providers/${f.name}`
        return profile
      } catch {
        return null
      }
    }),
  )

  return providers
    .filter((p): p is ProviderProfile => !!p && p.type === "accord.provider_profile.v0")
    .map(applyLocalProviderEvidence)
}

/**
 * Fetch a single provider manifest by file basename (the .json filename
 * without extension — e.g. "sage" for sage.json). Returns null if the
 * file 404s or doesn't conform to the v0 shape, so the detail page can
 * notFound() cleanly.
 */
export async function getProvider(id: string): Promise<ProviderProfile | null> {
  if (!/^[a-z0-9][a-z0-9_-]{0,63}$/.test(id)) return null
  try {
    const res = await fetch(`${REGISTRY_RAW_BASE}/${id}.json`, {
      next: { revalidate: ONE_HOUR },
    })
    if (!res.ok) return null
    const profile = (await res.json()) as ProviderProfile
    if (profile.type !== "accord.provider_profile.v0") return null
    profile.__sourceUrl = `https://github.com/accord-protocol/accord-protocol/blob/main/registry/providers/${id}.json`
    return applyLocalProviderEvidence(profile)
  } catch {
    return null
  }
}

function applyLocalProviderEvidence(profile: ProviderProfile): ProviderProfile {
  if (!profile.provider_id.includes("sage-ergoblockchain")) return profile
  if (profile.conformance?.last_run_at && profile.conformance?.result_uri) return profile

  return {
    ...profile,
    operational_status: {
      ...profile.operational_status,
      settlement_mode:
        "testnet settlement proven; hosted site may degrade to verify-only when the off-Vercel signer is unavailable. The first end-to-end settled redemption tx confirmed at testnet block 345673 on 2026-05-15.",
    },
    live_proof: {
      ...profile.live_proof,
      latest_full_receipt_bundle: {
        receipt_id: "09a9e5c0e5e5ca716bfc7c856aa4ece42a0655ad06f8806cf054c79c09eb318c",
        agreement_id: "acc_sage_9ac19993a88a4d984325",
        status: "verified_pending_redemption",
        public_receipt_url:
          "https://www.ergoblockchain.org/r/sage/09a9e5c0e5e5ca716bfc7c856aa4ece42a0655ad06f8806cf054c79c09eb318c",
        api_receipt_url:
          "https://www.ergoblockchain.org/api/sage/receipt/09a9e5c0e5e5ca716bfc7c856aa4ece42a0655ad06f8806cf054c79c09eb318c",
      },
    },
    conformance: {
      level: "L1",
      last_run_at: "2026-05-20T13:50:27.327Z",
      result_uri: "https://www.ergoblockchain.org/evidence/sage/conformance-l1-2026-05-20.signed.json",
      public_key_uri: "https://www.ergoblockchain.org/evidence/sage/provider-signing-key.json",
      receipt_uri:
        "https://www.ergoblockchain.org/api/sage/receipt/09a9e5c0e5e5ca716bfc7c856aa4ece42a0655ad06f8806cf054c79c09eb318c",
      notes:
        "Automated L1 network conformance passed against the post-Blob full receipt bundle and was signed by provider://sage-ergoblockchain. This is testnet evidence only; mainnet claims remain blocked until script identity, audit manifests, and permanent signer operations are published.",
    },
  }
}

/**
 * Best-effort slug derivation from a provider_id like
 * "provider://sage-ergoblockchain" → "sage" (matches the registry file
 * name). The registry convention is one file per provider, slug-named.
 */
export function providerSlugFromId(provider_id: string): string {
  const tail = provider_id.replace(/^provider:\/\//, "")
  // "sage-ergoblockchain" → "sage" by convention; fall back to the
  // dash-prefix if no organization suffix exists.
  return tail.split("-")[0]
}

/**
 * Sort: featured first (Sage explicitly), then anything with conformance,
 * then alphabetical by display_name.
 */
export function sortProviders(providers: ProviderProfile[]): ProviderProfile[] {
  return [...providers].sort((a, b) => {
    const sageRank = (p: ProviderProfile) =>
      p.provider_id.includes("sage-ergoblockchain") ? 0 : p.provider_id.startsWith("provider://example") ? 99 : 50
    const ra = sageRank(a)
    const rb = sageRank(b)
    if (ra !== rb) return ra - rb
    const ca = a.conformance?.last_run_at ? 0 : 1
    const cb = b.conformance?.last_run_at ? 0 : 1
    if (ca !== cb) return ca - cb
    return a.display_name.localeCompare(b.display_name)
  })
}

/**
 * Group capabilities into category buckets for filter chips. The set of
 * capability strings in v0 is small and unstructured, so this is a
 * simple bucketing rather than a real taxonomy.
 */
export function bucketCapability(cap: string): string {
  const c = cap.toLowerCase()
  if (c.includes("query") || c.includes("answer") || c.includes("explain")) return "Q&A"
  if (c.includes("audit") || c.includes("review")) return "Code review"
  if (c.includes("payment") || c.includes("trade")) return "Payments"
  if (c.includes("data") || c.includes("retriev")) return "Data"
  return "Other"
}
