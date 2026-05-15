"use client"

/**
 * Client-side form for building an Accord Protocol provider manifest.
 *
 * Fields map to ProviderProfile (v0). The component generates the JSON
 * live on the right-hand side as the user types, then offers a
 * GitHub "create new file" deeplink that pre-fills the file path,
 * filename, and content. The user clicks one button and is dropped
 * into the GitHub editor signed in as themselves; they review and
 * submit a PR with their own commit signature.
 *
 * Validation is intentionally minimal — keep the form generous, let
 * the schema check on the GitHub side reject malformed entries.
 */

import { useMemo, useState } from "react"
import { ArrowUpRight, Copy, GitBranch, Plus, X } from "lucide-react"

const REPO = "accord-protocol/accord-protocol"
const BRANCH = "main"
const DIR = "registry/providers"

interface ProfileDraft {
  display_name: string
  slug: string
  homepage: string
  description: string
  capabilities: string[]
  rails: string[]
  transports: string[]
  pricingKind: string
  pricingAmount: string
  pricingCurrency: string
  endpointWellKnown: string
  endpointAgreement: string
  endpointVerify: string
  operatorContact: string
  operatorKind: string
}

const EMPTY: ProfileDraft = {
  display_name: "",
  slug: "",
  homepage: "",
  description: "",
  capabilities: [],
  rails: ["ergo"],
  transports: ["accord/402"],
  pricingKind: "",
  pricingAmount: "",
  pricingCurrency: "ERG",
  endpointWellKnown: "",
  endpointAgreement: "",
  endpointVerify: "",
  operatorContact: "",
  operatorKind: "open-source-project",
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 63)
}

function buildManifest(d: ProfileDraft): Record<string, unknown> {
  const slug = d.slug || slugify(d.display_name) || "provider"
  const m: Record<string, unknown> = {
    type: "accord.provider_profile.v0",
    version: "v0",
    provider_id: `provider://${slug}`,
    display_name: d.display_name || "Untitled Provider",
  }
  if (d.homepage) m.homepage = d.homepage
  if (d.description) m.description = d.description
  if (d.capabilities.length) m.capabilities = d.capabilities
  if (d.transports.length) m.accepted_transports = d.transports
  if (d.rails.length) m.accepted_rails = d.rails
  if (d.pricingKind && d.pricingAmount) {
    m.pricing = [
      {
        kind: d.pricingKind,
        amount: d.pricingAmount,
        currency: d.pricingCurrency || "ERG",
        decimals: d.pricingCurrency === "ERG" ? 9 : undefined,
      },
    ]
  }
  const endpoints: Record<string, string> = {}
  if (d.endpointWellKnown) endpoints.well_known = d.endpointWellKnown
  if (d.endpointAgreement) endpoints.agreement_template = d.endpointAgreement
  if (d.endpointVerify) endpoints.verify_payment = d.endpointVerify
  if (Object.keys(endpoints).length) m.endpoints = endpoints
  if (d.operatorContact || d.operatorKind) {
    m.operator = {
      kind: d.operatorKind || "open-source-project",
      contact: d.operatorContact,
    }
  }
  return m
}

function manifestToJsonString(m: Record<string, unknown>): string {
  return JSON.stringify(m, null, 2) + "\n"
}

function buildGitHubDeeplink(slug: string, content: string): string {
  // GitHub's "create new file" UI accepts ?filename=&value= query params
  // and pre-fills the editor. The user clicks "Propose new file" to
  // open a PR signed with their own account. No tokens needed.
  const params = new URLSearchParams({
    filename: `${slug}.json`,
    value: content,
  })
  return `https://github.com/${REPO}/new/${BRANCH}/${DIR}?${params.toString()}`
}

export function SubmitAgentForm() {
  const [draft, setDraft] = useState<ProfileDraft>(EMPTY)
  const [capInput, setCapInput] = useState("")
  const [copied, setCopied] = useState(false)

  const slug = useMemo(
    () => draft.slug || slugify(draft.display_name),
    [draft.slug, draft.display_name],
  )
  const manifest = useMemo(() => buildManifest(draft), [draft])
  const json = useMemo(() => manifestToJsonString(manifest), [manifest])
  const ghLink = useMemo(
    () => buildGitHubDeeplink(slug || "provider", json),
    [slug, json],
  )
  const ghLinkTooLong = ghLink.length > 7900

  function update<K extends keyof ProfileDraft>(key: K, value: ProfileDraft[K]) {
    setDraft((d) => ({ ...d, [key]: value }))
  }

  function addCapability() {
    const v = capInput.trim()
    if (!v) return
    if (draft.capabilities.includes(v)) {
      setCapInput("")
      return
    }
    update("capabilities", [...draft.capabilities, v])
    setCapInput("")
  }

  function removeCapability(c: string) {
    update("capabilities", draft.capabilities.filter((x) => x !== c))
  }

  function toggleArr(key: "rails" | "transports", v: string) {
    const cur = draft[key]
    update(key, cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v])
  }

  function copyJson() {
    navigator.clipboard.writeText(json).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8">
      {/* ── Form ── */}
      <div className="space-y-6">
        <Field label="Display name" required hint="Shown as the title in directory listings.">
          <input
            type="text"
            value={draft.display_name}
            onChange={(e) => update("display_name", e.target.value)}
            placeholder="My Paid AI Service"
            className={inputCls}
          />
        </Field>

        <Field
          label="Slug (filename)"
          hint={`Leave blank to auto-derive from display name. Used as ${DIR}/{slug}.json.`}
        >
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-gray-500">{DIR}/</span>
            <input
              type="text"
              value={draft.slug}
              onChange={(e) => update("slug", slugify(e.target.value))}
              placeholder={slugify(draft.display_name) || "auto-from-name"}
              className={`${inputCls} flex-1`}
            />
            <span className="text-gray-500">.json</span>
          </div>
        </Field>

        <Field label="Homepage URL">
          <input
            type="url"
            value={draft.homepage}
            onChange={(e) => update("homepage", e.target.value)}
            placeholder="https://yoursite.com"
            className={inputCls}
          />
        </Field>

        <Field label="Description" hint="One paragraph. What does the provider do, what does it cost, how is it priced.">
          <textarea
            value={draft.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="A premium-tier code-review agent settled on Ergo testnet…"
            rows={4}
            className={`${inputCls} resize-y`}
          />
        </Field>

        <Field label="Capabilities" hint="Free-form tokens. Press Enter to add.">
          <div className="flex flex-wrap gap-2 mb-2">
            {draft.capabilities.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1 px-2 py-1 rounded border border-orange-500/30 bg-orange-500/5 text-orange-300 font-mono text-xs"
              >
                {c}
                <button
                  type="button"
                  onClick={() => removeCapability(c)}
                  className="hover:text-orange-100"
                  aria-label={`Remove ${c}`}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={capInput}
              onChange={(e) => setCapInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  addCapability()
                }
              }}
              placeholder="paid_query · code_review · summarize…"
              className={`${inputCls} flex-1`}
            />
            <button
              type="button"
              onClick={addCapability}
              className="inline-flex items-center gap-1 px-3 rounded-md border border-orange-500/30 bg-orange-500/5 text-orange-300 hover:border-orange-500/50 text-xs font-mono uppercase tracking-widest"
            >
              <Plus className="w-3 h-3" /> Add
            </button>
          </div>
        </Field>

        <Field label="Accepted rails">
          <ChipGroup
            options={["ergo", "rosen", "base", "x402"]}
            selected={draft.rails}
            onToggle={(v) => toggleArr("rails", v)}
          />
        </Field>

        <Field label="Accepted transports">
          <ChipGroup
            options={["accord/402", "accord/mcp"]}
            selected={draft.transports}
            onToggle={(v) => toggleArr("transports", v)}
          />
        </Field>

        <Field label="Pricing">
          <div className="grid grid-cols-3 gap-2">
            <input
              type="text"
              value={draft.pricingKind}
              onChange={(e) => update("pricingKind", e.target.value)}
              placeholder="kind (paid_query)"
              className={inputCls}
            />
            <input
              type="text"
              value={draft.pricingAmount}
              onChange={(e) => update("pricingAmount", e.target.value)}
              placeholder="amount (0.001)"
              className={inputCls}
            />
            <input
              type="text"
              value={draft.pricingCurrency}
              onChange={(e) => update("pricingCurrency", e.target.value)}
              placeholder="currency (ERG)"
              className={inputCls}
            />
          </div>
        </Field>

        <Field label="Endpoints">
          <div className="space-y-2">
            <input
              type="url"
              value={draft.endpointWellKnown}
              onChange={(e) => update("endpointWellKnown", e.target.value)}
              placeholder="well_known: https://yoursite.com/.well-known/accord"
              className={inputCls}
            />
            <input
              type="url"
              value={draft.endpointAgreement}
              onChange={(e) => update("endpointAgreement", e.target.value)}
              placeholder="agreement_template: https://yoursite.com/api/quote"
              className={inputCls}
            />
            <input
              type="url"
              value={draft.endpointVerify}
              onChange={(e) => update("endpointVerify", e.target.value)}
              placeholder="verify_payment: https://yoursite.com/api/verify-payment"
              className={inputCls}
            />
          </div>
        </Field>

        <Field label="Operator">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              value={draft.operatorKind}
              onChange={(e) => update("operatorKind", e.target.value)}
              placeholder="kind (open-source-project)"
              className={inputCls}
            />
            <input
              type="text"
              value={draft.operatorContact}
              onChange={(e) => update("operatorContact", e.target.value)}
              placeholder="contact (https://github.com/you)"
              className={inputCls}
            />
          </div>
        </Field>
      </div>

      {/* ── Preview + actions ── */}
      <div className="lg:sticky lg:top-4 lg:self-start space-y-4">
        <div className="rounded-2xl border border-white/10 bg-black/60 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
            <span className="text-[10px] uppercase tracking-widest font-mono text-gray-400">
              {DIR}/{slug || "provider"}.json
            </span>
            <button
              type="button"
              onClick={copyJson}
              className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono text-gray-400 hover:text-orange-300"
            >
              <Copy className="w-3 h-3" /> {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="text-xs text-gray-300 font-mono p-4 overflow-x-auto max-h-[480px] leading-relaxed">
            {json}
          </pre>
        </div>

        <div className="flex flex-col gap-2">
          {!ghLinkTooLong ? (
            <a
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider text-sm transition-colors"
            >
              <GitBranch className="w-4 h-4" />
              Open PR on GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/[0.04] p-3 text-xs text-orange-200 font-mono">
              Manifest is too long for the GitHub deeplink (&gt; 7.9 KB). Copy
              the JSON above, then{" "}
              <a
                href={`https://github.com/${REPO}/new/${BRANCH}/${DIR}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-orange-500/40 hover:text-orange-100"
              >
                open the GitHub editor manually
              </a>{" "}
              and paste it.
            </div>
          )}
          <p className="text-[11px] text-gray-500 font-mono leading-relaxed">
            The button opens the GitHub &quot;create new file&quot; editor with
            this manifest pre-filled. You sign in with your own GitHub
            account, click <em>Propose new file</em>, and a PR opens against{" "}
            <span className="text-gray-400">{REPO}</span>. We never see your
            token.
          </p>
        </div>
      </div>
    </div>
  )
}

const inputCls =
  "w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-sm text-gray-100 font-mono placeholder:text-gray-600 focus:outline-none focus:border-orange-500/50"

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string
  required?: boolean
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-widest font-mono text-gray-400 mb-1.5 inline-flex items-center gap-2">
        {label}
        {required && <span className="text-orange-400">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-[11px] text-gray-500 leading-relaxed">{hint}</p>}
    </div>
  )
}

function ChipGroup({
  options,
  selected,
  onToggle,
}: {
  options: string[]
  selected: string[]
  onToggle: (v: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = selected.includes(o)
        return (
          <button
            key={o}
            type="button"
            onClick={() => onToggle(o)}
            className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-colors ${
              on
                ? "border-orange-500/40 bg-orange-500/10 text-orange-300"
                : "border-white/10 bg-white/[0.02] text-gray-400 hover:border-orange-500/30"
            }`}
          >
            {o}
          </button>
        )
      })}
    </div>
  )
}
