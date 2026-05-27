const BASE_URL = "https://www.ergoblockchain.org"

export const ergoConnectBoundary = {
  type: "ergo.connect.wallet_boundary.v0",
  version: "v0",
  status: "spec_bootstrap_testnet",
  last_reviewed: "2026-05-27",
  canonical: `${BASE_URL}/.well-known/ergo-connect.json`,
  schema: `${BASE_URL}/agent-economy/ergo-connect.schema.v0.json`,
  purpose: "Wallet boundary for autonomous work settlement on Ergo.",
  positioning:
    "Connect wallets, delegate safely, sign only policy-approved intents, and attach each agent action to a verifiable receipt.",
  posture: {
    network: "ergo_testnet",
    mainnet_ready: false,
    production_custody: false,
    audit_gate: "external_review_and_audit_bound_mainnet_script_identity_required",
  },
  claim_boundary: {
    safe_claim:
      "ErgoConnect is a proposed TrustConnect-style, CAIP-native wallet boundary for Ergo agent workflows.",
    do_not_claim:
      "Do not claim Trust Wallet or TrustConnect production support for Ergo until upstream support exists.",
    public_language:
      "Agents do not get wallets. Agents get bounded mandates checked by local wallet policy.",
  },
  caip: {
    namespace: "ergo",
    mainnet: "ergo:b0244dfc267baca974a4caee06120321",
    testnet: "ergo:e7553c9a716bb3983ac8b0c21689a1f3",
    account_format: "ergo:<chainId>:<base58Address>",
    asset_format: "ergo:<chainId>:<assetIdHex>",
  },
  capabilities: [
    {
      id: "connect_wallet",
      label: "Connect wallet",
      description: "Let a human-controlled Ergo wallet become the signing boundary for an agent flow.",
    },
    {
      id: "prove_address_control",
      label: "Prove address control",
      description: "Use ErgoAuth-style message proof before binding a wallet to an agent profile or provider entry.",
    },
    {
      id: "create_payment_intent",
      label: "Create payment intent",
      description: "Represent task hash, provider, amount, expiry, receipt expectation, and network before signing.",
    },
    {
      id: "check_agent_policy",
      label: "Check agent policy",
      description: "Return allow, deny, or require-human-approval before any transaction handoff.",
    },
    {
      id: "sign_reduced_transaction",
      label: "Sign reduced transaction",
      description: "Pass an unsigned or reduced transaction to a wallet boundary; agents do not hold private keys.",
    },
    {
      id: "submit_transaction",
      label: "Submit transaction",
      description: "Submit only the approved transaction, then link it to receipt and settlement verification.",
    },
    {
      id: "verify_receipt",
      label: "Verify receipt",
      description: "Attach the signed action to Agreement, Verification Receipt, Settlement Receipt, and chain proof.",
    },
  ],
  signing_surfaces: [
    {
      id: "ergoauth",
      label: "ErgoAuth proof",
      role: "Prove address control before binding a wallet to an agent profile, provider entry, or policy profile.",
      custody_boundary: "Message proof only; no on-chain spend and no transfer authority.",
    },
    {
      id: "ergopay",
      label: "ErgoPay handoff",
      role: "Carry a reduced transaction or signing request to a wallet that can show details and request user approval.",
      custody_boundary: "The dApp prepares the transaction; the wallet keeps secrets and signs only after approval.",
    },
    {
      id: "host_wallet_policy",
      label: "Host-owned policy boundary",
      role: "Let a local wallet layer approve or deny agent intents before any signing request is constructed.",
      custody_boundary: "Policy verdicts are deterministic; remote MCP/tools cannot silently sign.",
    },
  ],
  flow: [
    "Human connects wallet",
    "Wallet proves address control",
    "Human defines agent spending policy",
    "Agent creates task/payment intent",
    "Policy check returns allow, deny, or require-human-approval",
    "dApp builds unsigned or reduced Ergo transaction",
    "Wallet signs only the approved transaction",
    "Transaction is submitted by wallet or host",
    "Receipt bundle records agreement, verification, and settlement",
    "Reputation graph indexes the receipt, not a centralized identity claim",
  ],
  package_plan: [
    "@ergoblockchain/connect-core",
    "@ergoblockchain/connect-ergo-react",
    "@ergoblockchain/connect-ergopay",
    "@ergoblockchain/connect-ergoauth",
  ],
  demo: {
    id: "agent-cannot-spend-unless-policy-allows",
    status: "planned_testnet_demo",
    allow_case:
      "Agent requests 0.05 testnet ERG for a whitelisted provider, task hash is present, receipt is required, expiry is within policy.",
    deny_case:
      "Agent requests 1 ERG, missing receipt expectation, unapproved provider, or mainnet signing while mainnet gate is closed.",
    expected_result:
      "Allowed intents can be handed to ErgoPay-style signing; denied intents stop before wallet signing.",
  },
  example_policy: {
    id: "research-agent-testnet-policy",
    network: "ergo_testnet",
    daily_budget_erg: "2",
    max_per_task_erg: "0.05",
    allowed_categories: ["code_review", "data_lookup", "receipt_verification"],
    allowed_providers: ["sage-testnet-concierge", "wallet-policy-checker"],
    requires_receipt: true,
    requires_task_hash: true,
    max_expiry_blocks: 120,
    mainnet_allowed: false,
  },
  manifests: {
    wallet_policy_schema: `${BASE_URL}/agent-economy/wallet-agent-policy.schema.v0.json`,
    policy_check_schema: `${BASE_URL}/agent-economy/wallet-agent-policy-check.schema.v0.json`,
    reference_flow: `${BASE_URL}/agent-economy/wallet-agent-reference-flow.v0.json`,
    mainnet_gate: `${BASE_URL}/api/agent-economy/mainnet-gate`,
  },
  security_boundary: {
    agents_do_not_hold_private_keys: true,
    host_does_not_silently_sign: true,
    human_or_wallet_policy_required: true,
    receipt_required_for_agent_spend: true,
    mainnet_claims_audit_gated: true,
    mcp_tools_prepare_intents_not_signatures: true,
  },
  recommended_agent_path: [
    "Read /.well-known/ergo-connect.json.",
    "Bind a wallet only after ErgoAuth-style address-control proof.",
    "Create a payment intent with task hash, amount, expiry, provider, receipt expectation, and network.",
    "Run policy before constructing a signing request.",
    "If the verdict is allow, hand off one exact unsigned or reduced transaction to the wallet boundary.",
    "If the verdict is deny or require-human-approval, stop before signing.",
    "After broadcast, verify the receipt bundle and mainnet gate before making claims.",
  ],
} as const

export type ErgoConnectBoundary = typeof ergoConnectBoundary
