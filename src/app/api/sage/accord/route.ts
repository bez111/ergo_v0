import { NextResponse } from "next/server"
import {
  failingSageConformanceChecks,
  validateSageReceiptBundle,
} from "@/lib/sage/receipts/conformance"
import { loadReceiptBundle } from "@/lib/sage/receipts/storage"
import type { SageReceiptBundle } from "@/lib/sage/receipts/types"

export const runtime = "nodejs"

const SITE_URL = "https://www.ergoblockchain.org"
const ACCORD_TARGET_URL = `${SITE_URL}/api/sage/accord`
const AGREEMENT_TEMPLATE_URL = `${SITE_URL}/api/sage/quote`

type AccordPaymentHeader = {
  receipt_id?: unknown
  receiptId?: unknown
  id?: unknown
}

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      type: "accord.provider_endpoint.v0",
      provider: "sage",
      protocol: "accord",
      version: "v0",
      level: "L1",
      target: ACCORD_TARGET_URL,
      agreement_template: AGREEMENT_TEMPLATE_URL,
      conformance_evidence: "https://www.ergoblockchain.org/evidence/sage/conformance-l1-2026-05-20.signed.json",
      public_signing_key: "https://www.ergoblockchain.org/evidence/sage/provider-signing-key.json",
      accepted_rails: ["ergo"],
      payment_header: {
        name: "X-Accord-Payment",
        schema: {
          type: "object",
          required: ["receipt_id"],
          properties: {
            receipt_id: { type: "string" },
          },
        },
      },
      notes:
        "POST without Accord headers returns a 402 challenge. POST with x-accord-agreement-id and x-accord-payment={\"receipt_id\":\"...\"} validates the stored Sage receipt bundle. Signed L1 conformance evidence is published for the first post-Blob full receipt bundle.",
    },
    {
      headers: {
        "cache-control": "public, max-age=60, s-maxage=300",
      },
    },
  )
}

export async function POST(req: Request) {
  const agreementId = req.headers.get("x-accord-agreement-id")
  const paymentHeader = req.headers.get("x-accord-payment")

  if (!agreementId) {
    return accordChallenge()
  }

  if (!paymentHeader) {
    return accordError(402, "MISSING_PAYMENT", "X-Accord-Payment header required.", {
      accord_agreement_id: agreementId,
    })
  }

  const payment = parsePaymentHeader(paymentHeader)
  if (!payment.ok) {
    return accordError(400, "PAYMENT_PARSE_ERROR", payment.error, {
      accord_agreement_id: agreementId,
    })
  }

  const receiptId = payment.receiptId
  if (!receiptId) {
    return accordError(402, "PAYMENT_VERIFICATION_FAILED", "Payment must include receipt_id.", {
      accord_agreement_id: agreementId,
    })
  }

  const stored = await loadReceiptBundle(receiptId)
  if (!stored.ok || !stored.bundle) {
    return accordError(402, "UNKNOWN_AGREEMENT", stored.error ?? stored.reason ?? "Receipt not found.", {
      accord_agreement_id: agreementId,
      receipt_id: receiptId,
      storage_configured: stored.configured,
    })
  }

  const bundle = stored.bundle
  const agreement = bundle.accord.agreement_json
  if (!agreement || agreement.agreement_id !== agreementId) {
    return accordError(402, "UNKNOWN_AGREEMENT", "Receipt does not contain the requested agreement.", {
      accord_agreement_id: agreementId,
      receipt_id: receiptId,
      receipt_agreement_id: agreement?.agreement_id ?? null,
    })
  }

  const validation = validateSageReceiptBundle(bundle)
  if (!validation.ok) {
    return accordError(422, "VERIFICATION_REJECTED", "Stored receipt bundle failed Sage Accord checks.", {
      accord_agreement_id: agreementId,
      receipt_id: receiptId,
      checks: failingSageConformanceChecks(validation),
    })
  }

  return accordOk(bundle)
}

function accordChallenge() {
  return NextResponse.json(
    {
      error: "ACCORD_PAYMENT_REQUIRED",
      message: "Sage premium answers require a stored Accord receipt bundle.",
      agreement_template: AGREEMENT_TEMPLATE_URL,
      accepted_rails: ["ergo"],
      payment: {
        header: "X-Accord-Payment",
        expected: { receipt_id: "<sage receipt id>" },
      },
    },
    {
      status: 402,
      headers: accordHeaders({
        "accord-agreement-required": "true",
        "accord-agreement-template": AGREEMENT_TEMPLATE_URL,
        "accord-accepted-rails": "ergo",
        "www-authenticate": "Accord402",
      }),
    },
  )
}

function accordOk(bundle: SageReceiptBundle) {
  const agreementHash = bundle.accord.agreement_hash
  if (!agreementHash) {
    return accordError(422, "VERIFICATION_REJECTED", "Receipt bundle is missing agreement_hash.", {
      receipt_id: bundle.id,
    })
  }

  return NextResponse.json(
    {
      output: {
        receipt_id: bundle.id,
        receipt_url: bundle.public_receipt_url,
        receipt_api_url: bundle.api_receipt_url,
        status: bundle.status,
        completeness: bundle.completeness,
      },
      _meta: {
        accord_agreement_id: bundle.accord.agreement_json?.agreement_id,
        agreement_hash: agreementHash,
        rail: "ergo",
        receipt_id: bundle.id,
        settlement_receipt_hash: bundle.accord.settlement_receipt_hash,
      },
    },
    {
      status: 200,
      headers: accordHeaders({
        "x-accord-agreement-hash": agreementHash,
      }),
    },
  )
}

function accordError(
  status: number,
  error: string,
  message: string,
  extras?: Record<string, unknown>,
) {
  return NextResponse.json(
    {
      error,
      message,
      ...(extras ?? {}),
    },
    {
      status,
      headers: accordHeaders({
        ...(status === 402
          ? {
              "accord-agreement-required": "true",
              "accord-agreement-template": AGREEMENT_TEMPLATE_URL,
              "accord-accepted-rails": "ergo",
              "www-authenticate": "Accord402",
            }
          : {}),
      }),
    },
  )
}

function accordHeaders(extra?: Record<string, string>) {
  return {
    "cache-control": "no-store",
    "content-type": "application/json; charset=utf-8",
    "accord-version": "v0",
    ...(extra ?? {}),
  }
}

function parsePaymentHeader(raw: string): { ok: true; receiptId: string | null } | { ok: false; error: string } {
  let parsed: AccordPaymentHeader
  try {
    parsed = JSON.parse(raw) as AccordPaymentHeader
  } catch {
    return { ok: false, error: "X-Accord-Payment must be JSON." }
  }

  const candidate = parsed.receipt_id ?? parsed.receiptId ?? parsed.id
  if (typeof candidate !== "string") {
    return { ok: true, receiptId: null }
  }
  return { ok: true, receiptId: candidate }
}
