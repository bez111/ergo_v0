export const WALLET_AGENT_POLICY_PROFILE_TYPE =
  "ergo.agent_economy.wallet_agent_policy_profile.v0"
export const WALLET_AGENT_POLICY_VERDICT_TYPE =
  "ergo.agent_economy.wallet_agent_policy_verdict.v0"
export const WALLET_AGENT_POLICY_SCHEMA_URL =
  "https://www.ergoblockchain.org/agent-economy/wallet-agent-policy.schema.v0.json"
export const WALLET_AGENT_POLICY_TEMPLATE_URL =
  "https://www.ergoblockchain.org/agent-economy/wallet-agent-policy.profile.template.json"
export const WALLET_AGENT_POLICY_CHECK_URL =
  "https://www.ergoblockchain.org/api/agent-economy/wallet-agent/policy-check"

export const WALLET_AGENT_ALLOWED_ACTIONS = [
  "quote",
  "simulate",
  "sign_specific_transaction",
  "broadcast_simulated_transaction",
  "verify_note",
  "fetch_receipt",
] as const

export type WalletAgentAllowedAction = (typeof WALLET_AGENT_ALLOWED_ACTIONS)[number]

export interface WalletAgentPolicyProfile {
  type: typeof WALLET_AGENT_POLICY_PROFILE_TYPE
  version: "v0"
  agent_id: string
  network: "testnet" | "mainnet-disabled"
  daily_spend_cap: string
  per_action_spend_cap: string
  max_fee: string
  allowed_recipients: string[]
  allowed_reserves: string[]
  allowed_actions: WalletAgentAllowedAction[]
  requires_human_confirmation_above: string
  expiry_height_limit: number
  receipt_retention: {
    required: true
    mode: "local_plus_public_url" | "local_only" | "public_url_only"
  }
}

export interface WalletAgentProposedAction {
  network?: string
  action?: string
  amount?: string | number
  spent_today?: string | number
  fee?: string | number
  recipient?: string
  reserve?: string
  expiry_height_delta?: number
  task_hash?: string
  human_confirmed?: boolean
  receipt_expected?: boolean
}

export interface WalletAgentPolicyVerdict {
  type: typeof WALLET_AGENT_POLICY_VERDICT_TYPE
  ok: boolean
  allowed: boolean
  profile_id: string | null
  checked_at: string
  summary: string
  reasons: string[]
  warnings: string[]
  normalized_action: {
    network: string | null
    action: string | null
    amount: number | null
    spent_today: number
    fee: number | null
    recipient: string | null
    reserve: string | null
    expiry_height_delta: number | null
    task_hash: string | null
    human_confirmed: boolean
    receipt_expected: boolean
  }
  policy_contract: {
    schema: string
    template: string
    check_api: string
  }
}

export const walletAgentPolicyExampleRequest = {
  profile: {
    type: WALLET_AGENT_POLICY_PROFILE_TYPE,
    version: "v0",
    agent_id: "local-sage-agent-demo",
    network: "testnet",
    daily_spend_cap: "0.250000000",
    per_action_spend_cap: "0.050000000",
    max_fee: "0.002000000",
    allowed_recipients: ["testnet_recipient_address_or_payment_endpoint"],
    allowed_reserves: ["testnet_reserve_box_id_or_alias"],
    allowed_actions: [
      "quote",
      "simulate",
      "sign_specific_transaction",
      "broadcast_simulated_transaction",
      "verify_note",
      "fetch_receipt",
    ],
    requires_human_confirmation_above: "0.010000000",
    expiry_height_limit: 720,
    receipt_retention: {
      required: true,
      mode: "local_plus_public_url",
    },
  },
  proposed_action: {
    network: "testnet",
    action: "sign_specific_transaction",
    amount: "0.005000000",
    spent_today: "0.000000000",
    fee: "0.001000000",
    recipient: "testnet_recipient_address_or_payment_endpoint",
    reserve: "testnet_reserve_box_id_or_alias",
    expiry_height_delta: 120,
    task_hash: "9c5e7a16f4e8c2d2a8b74a0d8c2e91aa",
    human_confirmed: false,
    receipt_expected: true,
  },
} satisfies {
  profile: WalletAgentPolicyProfile
  proposed_action: WalletAgentProposedAction
}

export function evaluateWalletAgentPolicy(
  profileInput: unknown,
  actionInput: unknown,
  now = new Date(),
): WalletAgentPolicyVerdict {
  const reasons: string[] = []
  const warnings: string[] = []
  const profile = isRecord(profileInput) ? profileInput : null
  const action = isRecord(actionInput) ? actionInput : null

  if (!profile) reasons.push("policy_profile_missing_or_invalid")
  if (!action) reasons.push("proposed_action_missing_or_invalid")

  const profileId = readString(profile, "agent_id")
  const profileNetwork = readString(profile, "network")
  const actionNetwork = readString(action, "network")
  const actionName = readString(action, "action")
  const amount = readDecimal(action?.amount)
  const spentToday = readDecimal(action?.spent_today) ?? 0
  const fee = readDecimal(action?.fee)
  const recipient = readString(action, "recipient")
  const reserve = readString(action, "reserve")
  const expiryHeightDelta = readInteger(action?.expiry_height_delta)
  const taskHash = readString(action, "task_hash")
  const humanConfirmed = action?.human_confirmed === true
  const receiptExpected = action?.receipt_expected === true

  if (profile && profile.type !== WALLET_AGENT_POLICY_PROFILE_TYPE) {
    reasons.push("policy_type_must_be_ergo_agent_economy_wallet_agent_policy_profile_v0")
  }
  if (profile && profile.version !== "v0") {
    reasons.push("policy_version_must_be_v0")
  }
  if (!profileId) reasons.push("agent_id_missing")
  if (profileNetwork !== "testnet") {
    reasons.push("network_must_be_testnet_until_mainnet_gate_opens")
  }
  if (!actionNetwork) {
    reasons.push("action_network_missing")
  } else if (profileNetwork && actionNetwork !== profileNetwork) {
    reasons.push("action_network_does_not_match_policy")
  }

  const allowedActions = readStringArray(profile?.allowed_actions)
  if (!actionName) {
    reasons.push("action_missing")
  } else if (!WALLET_AGENT_ALLOWED_ACTIONS.includes(actionName as WalletAgentAllowedAction)) {
    reasons.push("action_is_not_in_wallet_agent_v0_contract")
  } else if (!allowedActions.includes(actionName)) {
    reasons.push("action_not_allowed_by_policy")
  }

  const allowedRecipients = readStringArray(profile?.allowed_recipients)
  if (!recipient) {
    reasons.push("recipient_missing")
  } else if (!allowedRecipients.includes(recipient)) {
    reasons.push("recipient_not_allowed_by_policy")
  }

  const allowedReserves = readStringArray(profile?.allowed_reserves)
  if (!reserve) {
    reasons.push("reserve_missing")
  } else if (!allowedReserves.includes(reserve)) {
    reasons.push("reserve_not_allowed_by_policy")
  }

  const perActionCap = readDecimal(profile?.per_action_spend_cap)
  const dailySpendCap = readDecimal(profile?.daily_spend_cap)
  const humanConfirmationAbove = readDecimal(profile?.requires_human_confirmation_above)
  const maxFee = readDecimal(profile?.max_fee)

  if (amount === null || amount <= 0) {
    reasons.push("amount_must_be_positive_decimal")
  } else {
    if (perActionCap === null || perActionCap <= 0) {
      reasons.push("per_action_spend_cap_invalid")
    } else if (amount > perActionCap) {
      reasons.push("amount_exceeds_per_action_spend_cap")
    }

    if (dailySpendCap === null || dailySpendCap <= 0) {
      reasons.push("daily_spend_cap_invalid")
    } else if (spentToday + amount > dailySpendCap) {
      reasons.push("amount_exceeds_remaining_daily_spend_cap")
    }

    if (
      humanConfirmationAbove !== null &&
      amount > humanConfirmationAbove &&
      !humanConfirmed
    ) {
      reasons.push("human_confirmation_required")
    }
  }

  if (fee === null || fee < 0) {
    reasons.push("fee_must_be_non_negative_decimal")
  } else if (maxFee === null || maxFee <= 0) {
    reasons.push("max_fee_invalid")
  } else if (fee > maxFee) {
    reasons.push("fee_exceeds_policy_limit")
  }

  const expiryLimit = readInteger(profile?.expiry_height_limit)
  if (expiryHeightDelta === null || expiryHeightDelta <= 0) {
    reasons.push("expiry_height_delta_must_be_positive_integer")
  } else if (expiryLimit === null || expiryLimit <= 0) {
    reasons.push("expiry_height_limit_invalid")
  } else if (expiryHeightDelta > expiryLimit) {
    reasons.push("expiry_height_delta_exceeds_policy_limit")
  }

  if (!taskHash || taskHash.length < 16) {
    reasons.push("task_hash_missing_or_too_short")
  }

  const receiptRetention = isRecord(profile?.receipt_retention)
    ? profile?.receipt_retention
    : null
  if (receiptRetention?.required !== true) {
    reasons.push("receipt_retention_must_be_required")
  } else if (!receiptExpected) {
    reasons.push("receipt_expected_must_be_true")
  }

  if (profileNetwork === "mainnet-disabled") {
    reasons.push("mainnet_policy_profiles_are_disabled_until_external_review")
  }
  if (allowedRecipients.length === 0) warnings.push("recipient_allowlist_empty")
  if (allowedReserves.length === 0) warnings.push("reserve_allowlist_empty")
  if (humanConfirmed) warnings.push("human_confirmation_flag_was_supplied")

  const allowed = reasons.length === 0

  return {
    type: WALLET_AGENT_POLICY_VERDICT_TYPE,
    ok: true,
    allowed,
    profile_id: profileId,
    checked_at: now.toISOString(),
    summary: allowed
      ? "policy_allows_exact_testnet_action"
      : "policy_blocks_or_requires_more_information",
    reasons,
    warnings,
    normalized_action: {
      network: actionNetwork,
      action: actionName,
      amount,
      spent_today: spentToday,
      fee,
      recipient,
      reserve,
      expiry_height_delta: expiryHeightDelta,
      task_hash: taskHash,
      human_confirmed: humanConfirmed,
      receipt_expected: receiptExpected,
    },
    policy_contract: {
      schema: WALLET_AGENT_POLICY_SCHEMA_URL,
      template: WALLET_AGENT_POLICY_TEMPLATE_URL,
      check_api: WALLET_AGENT_POLICY_CHECK_URL,
    },
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function readString(record: Record<string, unknown> | null | undefined, key: string) {
  const value = record?.[key]
  return typeof value === "string" && value.trim() ? value.trim() : null
}

function readStringArray(value: unknown) {
  if (!Array.isArray(value)) return []
  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
}

function readDecimal(value: unknown) {
  if (typeof value !== "string" && typeof value !== "number") return null
  const next = typeof value === "number" ? value : Number(value)
  return Number.isFinite(next) ? next : null
}

function readInteger(value: unknown) {
  if (typeof value !== "number" || !Number.isInteger(value)) return null
  return value
}
