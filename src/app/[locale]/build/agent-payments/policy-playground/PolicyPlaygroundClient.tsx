"use client"

import { useEffect, useMemo, useState } from "react"
import {
  AlertTriangle,
  CheckCircle2,
  Copy,
  FileJson2,
  RefreshCcw,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
} from "lucide-react"
import {
  type WalletAgentPolicyVerdict,
  walletAgentPolicyExampleRequest,
} from "@/lib/agent-economy/wallet-agent-policy"

type RecipientMode = "allowed" | "wrong"
type ReserveMode = "allowed" | "wrong"
type ProfileFault = "clean" | "unknown-field" | "bad-retention"
type ActionFault = "clean" | "unknown-field" | "bad-spend"

interface PlaygroundState {
  amount: string
  spentToday: string
  fee: string
  recipientMode: RecipientMode
  reserveMode: ReserveMode
  expiryHeightDelta: number
  taskHash: string
  humanConfirmed: boolean
  receiptExpected: boolean
  profileFault: ProfileFault
  actionFault: ActionFault
}

const allowedRecipient = "testnet_recipient_address_or_payment_endpoint"
const wrongRecipient = "wrong_recipient_address"
const allowedReserve = "testnet_reserve_box_id_or_alias"
const wrongReserve = "wrong_reserve_box_id"

const presets: Array<{
  id: string
  label: string
  description: string
  state: PlaygroundState
}> = [
  {
    id: "clean",
    label: "Clean pass",
    description: "Everything fits the policy.",
    state: {
      amount: "0.005000000",
      spentToday: "0.000000000",
      fee: "0.001000000",
      recipientMode: "allowed",
      reserveMode: "allowed",
      expiryHeightDelta: 120,
      taskHash: "9c5e7a16f4e8c2d2a8b74a0d8c2e91aa",
      humanConfirmed: false,
      receiptExpected: true,
      profileFault: "clean",
      actionFault: "clean",
    },
  },
  {
    id: "wrong-counterparty",
    label: "Wrong counterparty",
    description: "Recipient and reserve are outside local allowlists.",
    state: {
      amount: "0.005000000",
      spentToday: "0.000000000",
      fee: "0.001000000",
      recipientMode: "wrong",
      reserveMode: "wrong",
      expiryHeightDelta: 120,
      taskHash: "9c5e7a16f4e8c2d2a8b74a0d8c2e91aa",
      humanConfirmed: false,
      receiptExpected: true,
      profileFault: "clean",
      actionFault: "clean",
    },
  },
  {
    id: "over-cap",
    label: "Over cap",
    description: "Amount exceeds per-action policy and needs human confirmation.",
    state: {
      amount: "0.060000000",
      spentToday: "0.000000000",
      fee: "0.001000000",
      recipientMode: "allowed",
      reserveMode: "allowed",
      expiryHeightDelta: 120,
      taskHash: "9c5e7a16f4e8c2d2a8b74a0d8c2e91aa",
      humanConfirmed: false,
      receiptExpected: true,
      profileFault: "clean",
      actionFault: "clean",
    },
  },
  {
    id: "stale-no-receipt",
    label: "Invalid hash/no receipt",
    description: "Expiry window is too long, task hash is invalid, and receipt retention is missing.",
    state: {
      amount: "0.005000000",
      spentToday: "0.000000000",
      fee: "0.001000000",
      recipientMode: "allowed",
      reserveMode: "allowed",
      expiryHeightDelta: 999,
      taskHash: "short",
      humanConfirmed: false,
      receiptExpected: false,
      profileFault: "clean",
      actionFault: "clean",
    },
  },
  {
    id: "tampered-payload",
    label: "Tampered payload",
    description: "Unknown fields and malformed spend fail closed before signing.",
    state: {
      amount: "0.005000000",
      spentToday: "0.000000000",
      fee: "0.001000000",
      recipientMode: "allowed",
      reserveMode: "allowed",
      expiryHeightDelta: 120,
      taskHash: "9c5e7a16f4e8c2d2a8b74a0d8c2e91aa",
      humanConfirmed: false,
      receiptExpected: true,
      profileFault: "unknown-field",
      actionFault: "bad-spend",
    },
  },
]

export function PolicyPlaygroundClient() {
  const [state, setState] = useState<PlaygroundState>(presets[0].state)
  const [verdict, setVerdict] = useState<WalletAgentPolicyVerdict | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState<"request" | "verdict" | null>(null)

  const baseProfile = walletAgentPolicyExampleRequest.profile
  const profile = useMemo(() => {
    const next: Record<string, unknown> = { ...baseProfile }
    if (state.profileFault === "unknown-field") {
      next.remote_prompt_override = "try to raise the spending cap"
    }
    if (state.profileFault === "bad-retention") {
      next.receipt_retention = {
        required: true,
        mode: "remote_only",
      }
    }
    return next
  }, [baseProfile, state.profileFault])
  const proposedAction = useMemo(() => {
    const next: Record<string, unknown> = {
      network: "testnet",
      action: "sign_specific_transaction",
      amount: state.amount,
      spent_today: state.actionFault === "bad-spend" ? "-1.000000000" : state.spentToday,
      fee: state.fee,
      recipient: state.recipientMode === "allowed" ? allowedRecipient : wrongRecipient,
      reserve: state.reserveMode === "allowed" ? allowedReserve : wrongReserve,
      expiry_height_delta: state.expiryHeightDelta,
      task_hash: state.taskHash,
      human_confirmed: state.humanConfirmed,
      receipt_expected: state.receiptExpected,
    }
    if (state.actionFault === "unknown-field") {
      next.prompt_says_ignore_policy = true
    }
    return next
  }, [state])
  const requestPayload = useMemo(() => ({
    profile,
    proposed_action: proposedAction,
  }), [profile, proposedAction])
  const requestJson = useMemo(() => JSON.stringify(requestPayload, null, 2), [requestPayload])
  const verdictJson = useMemo(() => JSON.stringify(verdict ?? {}, null, 2), [verdict])

  async function runCheck(signal?: AbortSignal) {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/agent-economy/wallet-agent/policy-check", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(requestPayload),
        cache: "no-store",
        signal,
      })
      const body = await response.json() as WalletAgentPolicyVerdict
      if (!response.ok || body.ok !== true) throw new Error(`policy-check ${response.status}`)
      setVerdict(body)
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return
      setError(err instanceof Error ? err.message : "policy-check failed")
    } finally {
      if (!signal?.aborted) setLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    const timer = window.setTimeout(() => {
      void runCheck(controller.signal)
    }, 220)
    return () => {
      window.clearTimeout(timer)
      controller.abort()
    }
  }, [requestJson])

  async function copy(kind: "request" | "verdict", value: string) {
    await navigator.clipboard.writeText(value)
    setCopied(kind)
    window.setTimeout(() => setCopied(null), 1400)
  }

  const allowed = verdict?.allowed === true

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
        <div className="space-y-5">
          <div className="rounded-lg border border-white/10 bg-black/75 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  Verdict
                </div>
                <div className={`mt-2 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold ${
                  loading
                    ? "border-white/15 bg-white/[0.04] text-neutral-300"
                    : allowed
                      ? "border-orange-500/40 bg-orange-500/10 text-orange-200"
                      : "border-red-500/35 bg-red-500/10 text-red-100"
                }`}
                >
                  {loading ? (
                    <RefreshCcw className="h-4 w-4 animate-spin" />
                  ) : allowed ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  {loading ? "checking" : allowed ? "allowed" : "blocked"}
                </div>
              </div>
              <ShieldCheck className="h-8 w-8 text-orange-300" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              The API returns a machine-readable verdict only. It does not sign,
              broadcast, custody funds, or replace the wallet confirmation UI.
            </p>
            {error ? (
              <div className="mt-4 rounded-md border border-red-500/25 bg-red-500/[0.06] px-3 py-2 text-sm text-red-100">
                {error}
              </div>
            ) : null}
          </div>

          <div className="rounded-lg border border-white/10 bg-black/70 p-5">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-orange-300" />
              <h2 className="text-lg font-bold text-white">Presets</h2>
            </div>
            <div className="mt-4 grid gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setState(preset.state)}
                  className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-3 text-left transition-colors hover:border-orange-500/35 hover:bg-orange-500/[0.045]"
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-orange-200">
                    {preset.label}
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-neutral-400">
                    {preset.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-black/70 p-5">
            <h2 className="text-lg font-bold text-white">Proposed action</h2>
            <div className="mt-5 grid gap-4">
              <TextField label="Amount" value={state.amount} onChange={(amount) => setState((prev) => ({ ...prev, amount }))} />
              <TextField label="Spent today" value={state.spentToday} onChange={(spentToday) => setState((prev) => ({ ...prev, spentToday }))} />
              <TextField label="Fee" value={state.fee} onChange={(fee) => setState((prev) => ({ ...prev, fee }))} />
              <ToggleGroup
                label="Profile contract"
                value={state.profileFault}
                options={[
                  { value: "clean", label: "strict" },
                  { value: "unknown-field", label: "unknown" },
                  { value: "bad-retention", label: "retention" },
                ]}
                onChange={(profileFault) => setState((prev) => ({ ...prev, profileFault }))}
              />
              <ToggleGroup
                label="Action payload"
                value={state.actionFault}
                options={[
                  { value: "clean", label: "strict" },
                  { value: "unknown-field", label: "unknown" },
                  { value: "bad-spend", label: "bad spend" },
                ]}
                onChange={(actionFault) => setState((prev) => ({ ...prev, actionFault }))}
              />
              <ToggleGroup
                label="Recipient"
                value={state.recipientMode}
                options={[
                  { value: "allowed", label: "allowlisted" },
                  { value: "wrong", label: "wrong" },
                ]}
                onChange={(recipientMode) => setState((prev) => ({ ...prev, recipientMode }))}
              />
              <ToggleGroup
                label="Reserve"
                value={state.reserveMode}
                options={[
                  { value: "allowed", label: "allowlisted" },
                  { value: "wrong", label: "wrong" },
                ]}
                onChange={(reserveMode) => setState((prev) => ({ ...prev, reserveMode }))}
              />
              <RangeField
                label="Expiry height delta"
                value={state.expiryHeightDelta}
                min={1}
                max={1200}
                onChange={(expiryHeightDelta) => setState((prev) => ({ ...prev, expiryHeightDelta }))}
              />
              <TextField label="Task hash" value={state.taskHash} onChange={(taskHash) => setState((prev) => ({ ...prev, taskHash }))} />
              <CheckField
                label="Human confirmed"
                checked={state.humanConfirmed}
                onChange={(humanConfirmed) => setState((prev) => ({ ...prev, humanConfirmed }))}
              />
              <CheckField
                label="Receipt expected"
                checked={state.receiptExpected}
                onChange={(receiptExpected) => setState((prev) => ({ ...prev, receiptExpected }))}
              />
              <button
                type="button"
                onClick={() => void runCheck()}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-4 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
              >
                Run check
                <RefreshCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-lg border border-white/10 bg-black/75 p-5">
            <div className="flex items-start gap-3">
              {allowed ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
              ) : (
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-200" />
              )}
              <div>
                <h2 className="text-xl font-bold text-white">
                  {allowed ? "This action can proceed to simulation." : "This action must stop before wallet UI."}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {verdict?.summary ?? "Waiting for the first policy verdict."}
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <ReasonPanel title="Reasons" items={verdict?.reasons ?? []} empty="No blocking reasons." tone="red" />
              <ReasonPanel title="Warnings" items={verdict?.warnings ?? []} empty="No warnings." tone="orange" />
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <JsonPanel
              title="Request payload"
              body={requestJson}
              copied={copied === "request"}
              onCopy={() => void copy("request", requestJson)}
            />
            <JsonPanel
              title="Verdict JSON"
              body={verdictJson}
              copied={copied === "verdict"}
              onCopy={() => void copy("verdict", verdictJson)}
            />
          </div>

          <div className="rounded-lg border border-white/10 bg-black/70 p-5">
            <div className="flex items-center gap-2">
              <FileJson2 className="h-4 w-4 text-orange-300" />
              <h2 className="text-lg font-bold text-white">Policy profile</h2>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              <MiniStat label="Network" value={baseProfile.network} />
              <MiniStat label="Daily cap" value={baseProfile.daily_spend_cap} />
              <MiniStat label="Per action" value={baseProfile.per_action_spend_cap} />
              <MiniStat label="Max fee" value={baseProfile.max_fee} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TextField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2">
      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-orange-500/60"
      />
    </label>
  )
}

function RangeField({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  onChange: (value: number) => void
}) {
  return (
    <label className="grid gap-2">
      <span className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
        {label}
        <span className="text-orange-200">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full accent-orange-400"
      />
    </label>
  )
}

function ToggleGroup<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: Array<{ value: T; label: string }>
  onChange: (value: T) => void
}) {
  return (
    <div className="grid gap-2">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-md border px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
              option.value === value
                ? "border-orange-500/50 bg-orange-500/15 text-orange-100"
                : "border-white/10 bg-white/[0.025] text-neutral-400 hover:border-orange-500/35"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function CheckField({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <label className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.025] px-3 py-2">
      <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-5 w-5 accent-orange-400"
      />
    </label>
  )
}

function ReasonPanel({
  title,
  items,
  empty,
  tone,
}: {
  title: string
  items: string[]
  empty: string
  tone: "red" | "orange"
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
      <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">{title}</h3>
      <div className="mt-3 grid gap-2">
        {items.length > 0 ? items.map((item) => (
          <div
            key={item}
            className={`rounded-md border px-3 py-2 font-mono text-xs ${
              tone === "red"
                ? "border-red-500/20 bg-red-500/[0.04] text-red-100"
                : "border-orange-500/20 bg-orange-500/[0.04] text-orange-100"
            }`}
          >
            {item}
          </div>
        )) : (
          <div className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-neutral-500">
            {empty}
          </div>
        )}
      </div>
    </div>
  )
}

function JsonPanel({
  title,
  body,
  copied,
  onCopy,
}: {
  title: string
  body: string
  copied: boolean
  onCopy: () => void
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-black/80">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="font-mono text-xs uppercase tracking-widest text-orange-200">{title}</div>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-neutral-300 transition-colors hover:border-orange-500/35 hover:text-orange-100"
        >
          {copied ? "copied" : "copy"}
          <Copy className="h-3.5 w-3.5" />
        </button>
      </div>
      <pre className="max-h-[560px] overflow-auto p-5 text-xs leading-relaxed text-neutral-300">
        <code>{body}</code>
      </pre>
    </div>
  )
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 truncate font-mono text-sm font-semibold text-orange-50">{value}</div>
    </div>
  )
}
