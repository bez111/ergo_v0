import {
  WALLET_AGENT_POLICY_CHECK_URL,
  WALLET_AGENT_POLICY_SCHEMA_URL,
  WALLET_AGENT_POLICY_TEMPLATE_URL,
  walletAgentPolicyExampleRequest,
} from "./wallet-agent-policy"

export const WALLET_AGENT_REFERENCE_FLOW_TYPE =
  "ergo.agent_economy.wallet_agent_reference_flow.v0"
export const WALLET_AGENT_REFERENCE_FLOW_URL =
  "https://www.ergoblockchain.org/api/agent-economy/wallet-agent/reference-flow"
export const WALLET_AGENT_REFERENCE_FLOW_MANIFEST_URL =
  "https://www.ergoblockchain.org/agent-economy/wallet-agent-reference-flow.v0.json"
export const WALLET_AGENT_REFERENCE_FLOW_PAGE_URL =
  "https://www.ergoblockchain.org/build/agent-payments/wallet-agent-runner"

export const walletAgentReferenceFlow = {
  type: WALLET_AGENT_REFERENCE_FLOW_TYPE,
  version: "v0",
  status: "testnet_reference_flow",
  last_reviewed: "2026-05-22",
  mainnet_ready: false,
  public_claim:
    "A reference flow for host-owned local wallet agents on Ergo testnet. It is not wallet software, not a remote signer, and not mainnet readiness evidence.",
  entrypoints: {
    human_page: WALLET_AGENT_REFERENCE_FLOW_PAGE_URL,
    machine_api: WALLET_AGENT_REFERENCE_FLOW_URL,
    public_manifest: WALLET_AGENT_REFERENCE_FLOW_MANIFEST_URL,
    policy_schema: WALLET_AGENT_POLICY_SCHEMA_URL,
    policy_template: WALLET_AGENT_POLICY_TEMPLATE_URL,
    policy_check_api: WALLET_AGENT_POLICY_CHECK_URL,
    sage_widget: "https://www.ergoblockchain.org/agent-economy/sage-widget",
    quickstart: "https://www.ergoblockchain.org/build/agent-payments/quickstart",
    receipt_api_template: "https://www.ergoblockchain.org/api/sage/receipt/{receiptId}",
  },
  stages: [
    {
      id: "load_policy_profile",
      label: "Load policy",
      actor: "host_app",
      rule: "Read a local policy profile that matches the wallet-agent policy schema.",
      output: "WalletAgentPolicyProfile",
    },
    {
      id: "fetch_or_receive_payment_intent",
      label: "Receive intent",
      actor: "sage_widget_or_host_app",
      rule: "Accept a portable payment intent with amount, receiver, reserve, task hash, and receipt expectations.",
      output: "SagePaymentIntent",
    },
    {
      id: "normalize_proposed_action",
      label: "Normalize action",
      actor: "local_agent",
      rule: "Map the payment intent into one proposed action before asking for a policy verdict.",
      output: "WalletAgentProposedAction",
    },
    {
      id: "request_policy_verdict",
      label: "Check policy",
      actor: "local_agent_or_host_app",
      rule: "Call the policy-check API and persist allow/deny reasons.",
      output: "WalletAgentPolicyVerdict",
    },
    {
      id: "simulate_exact_transaction",
      label: "Simulate transaction",
      actor: "wallet_layer",
      rule: "Build and inspect one exact testnet transaction before the user is asked to sign.",
      output: "Unsigned exact transaction summary",
    },
    {
      id: "ask_host_wallet_to_sign",
      label: "Ask wallet to sign",
      actor: "host_owned_wallet",
      rule: "Request a signature only for the simulated transaction. Never expose secrets to the page, widget, or API.",
      output: "Signed transaction bytes or transaction id",
    },
    {
      id: "broadcast_simulated_transaction",
      label: "Broadcast",
      actor: "host_app_or_wallet",
      rule: "Broadcast only the transaction that matched the policy verdict and simulation summary.",
      output: "Transaction id or Note box id",
    },
    {
      id: "verify_note_or_receipt",
      label: "Verify",
      actor: "sage_or_verifier",
      rule: "Verify the Note box id against quote, task hash, receiver, reserve, amount, and expiry.",
      output: "Verification Receipt JSON",
    },
    {
      id: "retain_receipt_bundle",
      label: "Retain receipt",
      actor: "host_app_and_public_receipt_api",
      rule: "Store or link Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, and public receipt URL.",
      output: "Full receipt bundle or explicit chain_proof_only status",
    },
  ],
  reference_checks: [
    "Policy profile is loaded before any quote or signing request.",
    "The proposed action uses the same network, receiver, reserve, amount, fee, expiry, and task hash as the payment intent.",
    "A denied policy verdict stops the flow before wallet UI.",
    "Human confirmation is required when the policy threshold is exceeded.",
    "The wallet signs one exact simulated transaction, not broad agent authority.",
    "Receipt URL and receipt completeness are retained after verification.",
    "Mainnet stays disabled until external review and audit-bound script identity exist.",
  ],
  pseudo_code: [
    "const profile = await loadLocalPolicyProfile()",
    "const intent = await getSagePaymentIntent(question)",
    "const action = normalizeIntentForPolicyCheck(profile, intent)",
    "const verdict = await postPolicyCheck({ profile, proposed_action: action })",
    "if (!verdict.allowed) throw new Error(verdict.reasons.join(','))",
    "const unsignedTx = await wallet.simulateExactNoteTransaction(intent)",
    "const signedTx = await wallet.signExactTransaction(unsignedTx)",
    "const noteBoxId = await wallet.broadcast(signedTx)",
    "const receipt = await verifySagePaymentAndFetchReceipt(intent, noteBoxId)",
    "await retainReceipt(receipt)",
  ],
  example_policy_check_request: walletAgentPolicyExampleRequest,
  hard_boundaries: [
    "The site does not custody funds.",
    "The reference flow does not grant autonomous mainnet signing authority.",
    "The policy-check API does not sign, broadcast, store private keys, or replace wallet confirmation.",
    "Remote prompt text cannot override caps, allowlists, expiry limits, or receipt retention rules.",
  ],
} as const
