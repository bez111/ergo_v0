export type AgentDemoSlug =
  | "x402-accord-gateway"
  | "mcp-paid-tool"
  | "agent-api-payment"
  | "agent-credit-note"

export type AgentDemo = {
  slug: AgentDemoSlug
  badge: string
  title: string
  description: string
  status: "Mock first" | "Prototype" | "Research"
  repoPath: string
  primaryCta: string
  summary: string
  flow: string[]
  receipts: string[]
  modes: Array<{
    label: string
    value: string
    body: string
  }>
  security: string[]
  eventTypes: string[]
  apiPreviewHref: string
  nextMilestone: string
  sample: string
}

export const agentDemos: Record<AgentDemoSlug, AgentDemo> = {
  "x402-accord-gateway": {
    slug: "x402-accord-gateway",
    badge: "Gateway demo",
    title: "x402 Accord Gateway",
    description:
      "A 402-style payment challenge that turns a paid request into an Accord Agreement, Verification Receipt and Settlement Receipt.",
    status: "Prototype",
    repoPath: "examples/x402-accord-gateway",
    primaryCta: "Open gateway flow",
    summary:
      "x402 proves payment intent. Accord adds the work contract around it: what was requested, how completion is verified, and how settlement is recorded.",
    flow: [
      "Client requests a protected API route.",
      "Gateway returns a 402-style challenge with an Accord Agreement template.",
      "Agent satisfies the payment requirement in mock or testnet mode.",
      "Gateway executes the task and records the verifier decision.",
      "Accord emits verification and settlement receipts for audit.",
    ],
    receipts: [
      "agreementId",
      "payer",
      "provider",
      "workHash",
      "paymentProof",
      "verificationStatus",
      "settlementReference",
    ],
    modes: [
      {
        label: "Mock",
        value: "Available first",
        body: "Runs without keys, funds or external settlement. Best for UX and integration tests.",
      },
      {
        label: "Testnet",
        value: "Next",
        body: "Adds Ergo testnet settlement references after the rail is wired and documented.",
      },
    ],
    security: [
      "No production mainnet claim.",
      "Payment proof and work proof are separate fields.",
      "Gateway must refuse settlement if verification fails.",
    ],
    eventTypes: ["agreement.created", "settlement.recorded"],
    apiPreviewHref: "/api/agent-economy/events",
    nextMilestone:
      "Replace static prototype events with signed gateway receipts emitted by the runnable Accord demo.",
    sample: `{
  "agreementId": "acc_402_demo_001",
  "payment": { "scheme": "x402", "status": "satisfied" },
  "verification": { "status": "accepted", "workHash": "blake2b256:..." },
  "settlement": { "rail": "mock", "status": "recorded" }
}`,
  },
  "mcp-paid-tool": {
    slug: "mcp-paid-tool",
    badge: "MCP demo",
    title: "Paid MCP Tool",
    description:
      "A model calls a paid tool, receives a payment challenge, completes the task and returns an Accord receipt bundle.",
    status: "Prototype",
    repoPath: "examples/paid-mcp-tool",
    primaryCta: "Open MCP flow",
    summary:
      "The demo shows how agent tools can price work without turning payment into the only thing that matters.",
    flow: [
      "Agent discovers a paid MCP tool.",
      "Tool returns price, policy and Agreement requirements.",
      "Agent accepts or refuses according to buyer policy.",
      "Tool executes only after the mock payment condition is satisfied.",
      "The result is paired with verification and settlement receipts.",
    ],
    receipts: [
      "toolName",
      "toolCallHash",
      "buyerPolicyDecision",
      "paymentReference",
      "verificationReceipt",
      "settlementReceipt",
    ],
    modes: [
      {
        label: "Mock",
        value: "Available first",
        body: "No wallet needed. The tool simulates payment acceptance and receipt generation.",
      },
      {
        label: "Policy",
        value: "Planned",
        body: "Buyer policy will enforce spending caps, tool allowlists and approval thresholds.",
      },
    ],
    security: [
      "Tool execution must be idempotent around retries.",
      "Agent policy decides before payment is attempted.",
      "Receipts must not leak private prompt content.",
    ],
    eventTypes: ["agreement.created", "verification.accepted"],
    apiPreviewHref: "/api/agent-economy/events",
    nextMilestone:
      "Connect MCP tool execution to the prototype event stream, then promote only signed receipts to live counters.",
    sample: `{
  "tool": "repo.audit",
  "price": "0.01 ERG",
  "policyDecision": "approved",
  "verificationReceipt": { "status": "accepted" }
}`,
  },
  "agent-api-payment": {
    slug: "agent-api-payment",
    badge: "API demo",
    title: "Agent API Payment",
    description:
      "A direct paid API call for agents: request, price, agreement, payment proof, work result and receipt log.",
    status: "Prototype",
    repoPath: "examples/agent-api-payment",
    primaryCta: "Open API flow",
    summary:
      "This is the simplest on-ramp for builders who want to monetize agent-readable APIs without pretending the payment alone proves useful work.",
    flow: [
      "Agent calls an API endpoint with a requested task.",
      "API returns price, deadline and Agreement fields.",
      "Agent accepts under policy and submits payment proof.",
      "API returns data plus a verification receipt.",
      "Client stores the receipt bundle for replay and dispute handling.",
    ],
    receipts: [
      "apiRoute",
      "taskHash",
      "deadline",
      "paymentProof",
      "responseHash",
      "providerSignature",
    ],
    modes: [
      {
        label: "Mock",
        value: "Available first",
        body: "Useful for SDK adopters and API providers before live settlement is connected.",
      },
      {
        label: "Testnet",
        value: "Next",
        body: "Adds a real settlement reference once the Ergo rail path is ready.",
      },
    ],
    security: [
      "Deadlines must be explicit.",
      "Response hashes should avoid exposing private data.",
      "Refund or refusal paths must be documented before mainnet.",
    ],
    eventTypes: ["agreement.created", "settlement.recorded"],
    apiPreviewHref: "/api/agent-economy/events",
    nextMilestone:
      "Add a mock paid API endpoint that returns the same receipt shape exposed by the event stream.",
    sample: `{
  "route": "/v1/agent/data",
  "agreementId": "acc_api_demo_001",
  "responseHash": "blake2b256:...",
  "settlement": { "status": "mock-recorded" }
}`,
  },
  "agent-credit-note": {
    slug: "agent-credit-note",
    badge: "Credit demo",
    title: "Agent Credit Note",
    description:
      "A parent agent issues bounded, policy-constrained credit to a sub-agent. Redemption only happens after work is verified.",
    status: "Research",
    repoPath: "examples/agent-credit-note",
    primaryCta: "Open credit flow",
    summary:
      "This is the key shift from one-off agent payments to an agent economy: credit coordinates work before final settlement.",
    flow: [
      "Parent agent creates a bounded budget.",
      "Parent issues a short-lived Note to a sub-agent.",
      "Sub-agent uses the Note for a task or tool call.",
      "Verifier checks the task-conditioned acceptance predicate.",
      "The Note redeems or expires according to policy.",
    ],
    receipts: [
      "reserveId",
      "noteId",
      "budgetCap",
      "allowedRecipients",
      "acceptancePredicate",
      "redemptionStatus",
    ],
    modes: [
      {
        label: "Research",
        value: "No live credit",
        body: "Shown as a design target. It must remain bounded, auditable and testnet-first.",
      },
      {
        label: "Testnet",
        value: "Later",
        body: "Requires explicit Note/Reserve/Tracker test vectors and audit-gated safety language.",
      },
    ],
    security: [
      "No unlimited credit creation.",
      "Notes must be reserve-backed or policy-bounded.",
      "Redemption must be tied to explicit verification rules.",
    ],
    eventTypes: ["credit-note.designed", "verification.accepted"],
    apiPreviewHref: "/api/agent-economy/events",
    nextMilestone:
      "Turn the design event into a testnet Note/Reserve/Tracker vector before calling it live.",
    sample: `{
  "noteId": "note_demo_001",
  "budgetCap": "0.1 ERG",
  "state": "research",
  "redemption": { "requires": "verified_work" }
}`,
  },
}

export function getAgentDemo(slug: AgentDemoSlug) {
  return agentDemos[slug]
}
