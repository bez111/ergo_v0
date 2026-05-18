import { get, put } from "@vercel/blob"
import type { SageReceiptAlias, SageReceiptBundle, SageReceiptStorageResult } from "./types"

const RECEIPT_PREFIX = "sage/receipts/v1"
const ALIAS_PREFIX = "sage/receipt-aliases/v1"
const PROBE_PATH = `${RECEIPT_PREFIX}/_health/blob-probe-2026-05-16.json`
const ID_RE = /^[a-zA-Z0-9][a-zA-Z0-9._:-]{5,160}$/

export function isReceiptStorageConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN)
}

export function isValidReceiptLookupId(id: string): boolean {
  return ID_RE.test(id)
}

export function receiptBlobPath(id: string): string {
  return `${RECEIPT_PREFIX}/${encodeURIComponent(id)}.json`
}

function aliasBlobPath(id: string): string {
  return `${ALIAS_PREFIX}/${encodeURIComponent(id)}.json`
}

export async function saveReceiptBundle(
  bundle: SageReceiptBundle,
  aliases: string[],
): Promise<SageReceiptStorageResult> {
  if (!isReceiptStorageConfigured()) {
    return {
      ok: false,
      skipped: true,
      reason: "BLOB_READ_WRITE_TOKEN is not configured",
    }
  }

  const safeAliases = aliases.filter((alias) => alias !== bundle.id && isValidReceiptLookupId(alias))
  const path = receiptBlobPath(bundle.id)
  const savedAt = new Date().toISOString().replace(/\.\d{3}Z$/, "Z")
  const stored: SageReceiptBundle = {
    ...bundle,
    storage: {
      provider: "vercel_blob",
      path,
      aliases: safeAliases,
      saved_at: savedAt,
    },
  }

  try {
    await put(path, JSON.stringify(stored, null, 2), {
      access: "private",
      allowOverwrite: true,
      contentType: "application/json; charset=utf-8",
      cacheControlMaxAge: 60,
    })

    await Promise.all(
      safeAliases.map((alias) => {
        const pointer: SageReceiptAlias = {
          type: "sage.receipt_alias.v1",
          target: bundle.id,
          created_at: savedAt,
        }
        return put(aliasBlobPath(alias), JSON.stringify(pointer, null, 2), {
          access: "private",
          allowOverwrite: true,
          contentType: "application/json; charset=utf-8",
          cacheControlMaxAge: 60,
        })
      }),
    )

    return { ok: true, path, aliases: safeAliases }
  } catch (error) {
    return {
      ok: false,
      path,
      aliases: safeAliases,
      error: error instanceof Error ? error.message : "Vercel Blob write failed",
    }
  }
}

export async function loadReceiptBundle(id: string): Promise<{
  ok: boolean
  configured: boolean
  bundle?: SageReceiptBundle
  reason?: string
  error?: string
}> {
  if (!isReceiptStorageConfigured()) {
    return { ok: false, configured: false, reason: "BLOB_READ_WRITE_TOKEN is not configured" }
  }
  if (!isValidReceiptLookupId(id)) {
    return { ok: false, configured: true, reason: "invalid receipt id" }
  }

  try {
    const direct = await readJsonBlob<SageReceiptBundle>(receiptBlobPath(id))
    if (direct?.type === "sage.receipt_bundle.v1") {
      return { ok: true, configured: true, bundle: direct }
    }

    const alias = await readJsonBlob<SageReceiptAlias>(aliasBlobPath(id))
    if (alias?.type === "sage.receipt_alias.v1" && isValidReceiptLookupId(alias.target)) {
      const target = await readJsonBlob<SageReceiptBundle>(receiptBlobPath(alias.target))
      if (target?.type === "sage.receipt_bundle.v1") {
        return { ok: true, configured: true, bundle: target }
      }
    }

    return { ok: false, configured: true, reason: "receipt not found in blob storage" }
  } catch (error) {
    return {
      ok: false,
      configured: true,
      error: error instanceof Error ? error.message : "Vercel Blob read failed",
    }
  }
}

export async function probeReceiptStorage(): Promise<{
  ok: boolean
  configured: boolean
  writable: boolean
  readable: boolean
  path?: string
  error?: string
  checked_at: string
}> {
  const checkedAt = new Date().toISOString().replace(/\.\d{3}Z$/, "Z")
  if (!isReceiptStorageConfigured()) {
    return {
      ok: false,
      configured: false,
      writable: false,
      readable: false,
      checked_at: checkedAt,
      error: "BLOB_READ_WRITE_TOKEN is not configured",
    }
  }

  const marker = {
    type: "sage.receipt_storage_probe.v1",
    checked_at: checkedAt,
  }

  try {
    await put(PROBE_PATH, JSON.stringify(marker, null, 2), {
      access: "private",
      allowOverwrite: true,
      contentType: "application/json; charset=utf-8",
      cacheControlMaxAge: 60,
    })
    const readBack = await readJsonBlob<typeof marker>(PROBE_PATH)
    const readable = readBack?.type === marker.type
    return {
      ok: readable,
      configured: true,
      writable: true,
      readable,
      path: PROBE_PATH,
      checked_at: checkedAt,
      ...(readable ? {} : { error: "Blob probe write succeeded but read-back failed" }),
    }
  } catch (error) {
    return {
      ok: false,
      configured: true,
      writable: false,
      readable: false,
      path: PROBE_PATH,
      checked_at: checkedAt,
      error: error instanceof Error ? error.message : "Vercel Blob probe failed",
    }
  }
}

async function readJsonBlob<T>(path: string): Promise<T | null> {
  const result = await get(path, { access: "private", useCache: false })
  if (!result?.stream) return null
  const text = await new Response(result.stream as ReadableStream<Uint8Array>).text()
  return JSON.parse(text) as T
}
