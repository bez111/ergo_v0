import { ErgoAddress, Network } from "@fleet-sdk/core"
import { blake2b256, hex, utf8 } from "@fleet-sdk/crypto"
import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

type ToolAction = "hash" | "address" | "box" | "tx" | "receipt"
type ErgoNetwork = "mainnet" | "testnet"

interface ToolRequest {
  action?: ToolAction
  input?: string
  encoding?: "utf8" | "hex"
  network?: ErgoNetwork
}

const EXPLORERS: Record<ErgoNetwork, string> = {
  mainnet: "https://api.ergoplatform.com/api/v1",
  testnet: "https://api-testnet.ergoplatform.com/api/v1",
}

export async function POST(req: Request) {
  let body: ToolRequest
  try {
    body = (await req.json()) as ToolRequest
  } catch {
    return jsonError(400, "Invalid JSON body.")
  }

  const action = body.action
  if (!action) return jsonError(400, "action required")

  try {
    switch (action) {
      case "hash":
        return jsonOk(hashInput(body.input ?? "", body.encoding ?? "utf8"))
      case "address":
        return jsonOk(inspectAddress(body.input ?? ""))
      case "box":
        return jsonOk(await explorerLookup("box", body.network ?? "testnet", body.input ?? ""))
      case "tx":
        return jsonOk(await explorerLookup("tx", body.network ?? "testnet", body.input ?? ""))
      case "receipt":
        return jsonOk(await receiptLookup(req, body.input ?? ""))
      default:
        return jsonError(400, "Unsupported action.")
    }
  } catch (error) {
    return jsonError(400, error instanceof Error ? error.message : "tool failed")
  }
}

export async function GET() {
  return jsonOk({
    type: "ergo.dev_tools.v1",
    actions: {
      hash: {
        method: "POST",
        body: { action: "hash", input: "hello", encoding: "utf8" },
      },
      address: {
        method: "POST",
        body: { action: "address", input: "9..." },
      },
      box: {
        method: "POST",
        body: { action: "box", network: "testnet", input: "<64-char-box-id>" },
      },
      tx: {
        method: "POST",
        body: { action: "tx", network: "testnet", input: "<64-char-tx-id>" },
      },
      receipt: {
        method: "POST",
        body: { action: "receipt", input: "<sage-receipt-id>" },
      },
    },
  })
}

function hashInput(input: string, encoding: "utf8" | "hex") {
  if (input.length > 64_000) throw new Error("input too large; max 64 KB")

  let bytes: Uint8Array
  if (encoding === "hex") {
    const normalized = input.trim().replace(/^0x/i, "")
    if (!/^[0-9a-f]*$/i.test(normalized) || normalized.length % 2 !== 0) {
      throw new Error("hex input must have even length and only hex characters")
    }
    bytes = hex.decode(normalized)
  } else {
    bytes = utf8.decode(input)
  }

  return {
    type: "ergo.dev_tool.hash.v1",
    encoding,
    bytes: bytes.length,
    blake2b256: hex.encode(blake2b256(bytes)),
  }
}

function inspectAddress(address: string) {
  const candidate = address.trim()
  if (!candidate) throw new Error("address required")

  const valid = ErgoAddress.validate(candidate)
  if (!valid) {
    return {
      type: "ergo.dev_tool.address.v1",
      valid: false,
      address: candidate,
      error: "Invalid Ergo address checksum or shape.",
    }
  }

  const decoded = ErgoAddress.decode(candidate)
  return {
    type: "ergo.dev_tool.address.v1",
    valid: true,
    address: candidate,
    network: networkName(decoded.network),
    address_type: addressTypeName(decoded.type),
    ergo_tree: decoded.ergoTree,
    public_keys: decoded.getPublicKeys().map((key) => hex.encode(key)),
  }
}

async function explorerLookup(kind: "box" | "tx", network: ErgoNetwork, id: string) {
  const normalized = id.trim()
  if (!/^[0-9a-f]{64}$/i.test(normalized)) {
    throw new Error(`${kind === "box" ? "box id" : "tx id"} must be 64-char hex`)
  }

  const path = kind === "box" ? `boxes/${normalized}` : `transactions/${normalized}`
  const url = `${EXPLORERS[network]}/${path}`
  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(5_000),
  })
  const text = await res.text()
  let data: unknown = null
  try {
    data = text ? JSON.parse(text) : null
  } catch {
    data = { raw: text.slice(0, 1_000) }
  }

  return {
    type: `ergo.dev_tool.${kind}.v1`,
    ok: res.ok,
    status: res.status,
    id: normalized,
    network,
    explorer_url: `https://${network === "testnet" ? "testnet." : ""}ergoplatform.com/${kind === "box" ? "boxes" : "transactions"}/${normalized}`,
    data,
  }
}

async function receiptLookup(req: Request, id: string) {
  const normalized = id.trim()
  if (!/^[a-zA-Z0-9_:-]{8,128}$/.test(normalized)) {
    throw new Error("receipt id has an invalid shape")
  }
  const origin = new URL(req.url).origin
  const res = await fetch(`${origin}/api/sage/receipt/${encodeURIComponent(normalized)}`, {
    cache: "no-store",
    signal: AbortSignal.timeout(5_000),
  })
  const data = await res.json()
  return {
    type: "ergo.dev_tool.sage_receipt.v1",
    ok: res.ok,
    status: res.status,
    id: normalized,
    completeness: data?.completeness ?? null,
    receipt_status: data?.status ?? null,
    has_agreement_json: Boolean(data?.accord?.agreement_json),
    has_verification_receipt_json: Boolean(data?.accord?.verification_receipt_json),
    has_settlement_receipt_json: Boolean(data?.accord?.settlement_receipt_json),
    public_receipt_url: data?.public_receipt_url ?? null,
    api_receipt_url: data?.api_receipt_url ?? null,
    data,
  }
}

function networkName(value: Network) {
  return value === Network.Mainnet ? "mainnet" : "testnet"
}

function addressTypeName(value: number) {
  switch (value) {
    case 1:
      return "p2pk"
    case 2:
      return "p2sh"
    case 3:
      return "p2s"
    default:
      return `unknown:${value}`
  }
}

function jsonOk(body: unknown) {
  return NextResponse.json({ ok: true, ...asObject(body) }, {
    headers: { "Cache-Control": "no-store" },
  })
}

function jsonError(status: number, error: string) {
  return NextResponse.json({ ok: false, error }, {
    status,
    headers: { "Cache-Control": "no-store" },
  })
}

function asObject(value: unknown) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>
  }
  return { value }
}
