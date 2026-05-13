export type AgentEconomyEventState = "prototype" | "research"

export type AgentEconomyEvent = {
  id: string
  type:
    | "agreement.created"
    | "verification.accepted"
    | "settlement.recorded"
    | "credit-note.designed"
  state: AgentEconomyEventState
  demo: "x402-accord-gateway" | "mcp-paid-tool" | "agent-api-payment" | "agent-credit-note"
  title: string
  description: string
  occurredAt: string
  receipt: Record<string, string>
}

export const agentEconomyEvents: AgentEconomyEvent[] = [
  {
    id: "evt_acc_402_agreement_001",
    type: "agreement.created",
    state: "prototype",
    demo: "x402-accord-gateway",
    title: "Agreement template issued",
    description:
      "A 402-style gateway challenge creates the work contract before payment is accepted.",
    occurredAt: "2026-05-13T09:00:00.000Z",
    receipt: {
      agreementId: "acc_402_demo_001",
      paymentScheme: "x402",
      rail: "mock",
    },
  },
  {
    id: "evt_mcp_verification_001",
    type: "verification.accepted",
    state: "prototype",
    demo: "mcp-paid-tool",
    title: "Paid MCP tool verified",
    description:
      "A mock MCP tool returns a verification receipt after the agent policy accepts the price.",
    occurredAt: "2026-05-13T09:02:00.000Z",
    receipt: {
      tool: "repo.audit",
      verificationStatus: "accepted",
      workHash: "blake2b256:prototype",
    },
  },
  {
    id: "evt_api_settlement_001",
    type: "settlement.recorded",
    state: "prototype",
    demo: "agent-api-payment",
    title: "API settlement receipt recorded",
    description:
      "The paid API flow records a mock settlement reference after response verification.",
    occurredAt: "2026-05-13T09:04:00.000Z",
    receipt: {
      route: "/v1/agent/data",
      settlementRail: "mock",
      settlementStatus: "recorded",
    },
  },
  {
    id: "evt_credit_note_design_001",
    type: "credit-note.designed",
    state: "research",
    demo: "agent-credit-note",
    title: "Bounded credit Note design",
    description:
      "Research event for reserve-backed, policy-constrained Notes that redeem only after verified work.",
    occurredAt: "2026-05-13T09:06:00.000Z",
    receipt: {
      noteId: "note_demo_001",
      budgetCap: "0.1 ERG",
      redemptionRule: "verified_work",
    },
  },
]

export function getAgentEconomyEventSummary() {
  const latestEvent = agentEconomyEvents
    .slice()
    .sort((a, b) => Date.parse(b.occurredAt) - Date.parse(a.occurredAt))[0]

  return {
    status: "prototype" as const,
    eventStreamStatus: "prototype" as const,
    eventCount: agentEconomyEvents.length,
    latestEventAt: latestEvent?.occurredAt ?? null,
    counts: {
      agreements: agentEconomyEvents.filter((event) => event.type === "agreement.created").length,
      verificationReceipts: agentEconomyEvents.filter(
        (event) => event.type === "verification.accepted",
      ).length,
      settlementReceipts: agentEconomyEvents.filter(
        (event) => event.type === "settlement.recorded",
      ).length,
      creditNotes: agentEconomyEvents.filter((event) => event.type === "credit-note.designed")
        .length,
    },
    note:
      "Prototype events are static demo telemetry. They are not live production usage and will be replaced by signed demo receipts when Accord demos emit real events.",
  }
}
