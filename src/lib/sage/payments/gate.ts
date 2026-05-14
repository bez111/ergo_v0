/**
 * Premium-query detection.
 *
 * Cheap deterministic heuristics — runs on the server before we burn a
 * Claude call. The goal is to flag genuinely expensive queries (deep
 * research, long answers, code generation) so they pay a small Note
 * before getting Sonnet 4.6 quality. Casual questions stay free on
 * Haiku 4.5.
 *
 * False-positives cost UX (free question wrongly gated). False-negatives
 * cost margin (premium answer given for free). We bias toward
 * false-negatives in Sprint 2 — better to under-charge than to annoy
 * the first 100 users.
 */

import type { PremiumDecision, PremiumReason } from "./types"

const PREMIUM_COMMANDS = ["/code", "/quote", "/build", "/deep", "/architect"]
const CODE_REQUEST_HINTS = [
  "show me code",
  "give me a code",
  "write code",
  "implement",
  "implementation of",
  "code example",
  "fleet sdk",
  "ergoscript example",
]
const DEEP_RESEARCH_HINTS = [
  "compare in detail",
  "comprehensive overview",
  "step by step guide",
  "architecture for",
  "how would you design",
  "production design",
]

/**
 * Decide whether a user query should be gated behind a quote.
 *
 * Premium iff ANY of:
 *   1. Starts with an explicit /command from PREMIUM_COMMANDS.
 *   2. Looks like a code-generation request (we don't generate code on
 *      the free tier per system prompt — but premium routes it to a
 *      richer "show conceptual code with caveats" mode).
 *   3. Deep-research phrasing.
 *   4. Length > 400 characters (the user typed an essay — they want
 *      something substantive back).
 *   5. >= 6 prior turns and the latest is a follow-up ("explain more",
 *      "dive deeper", "and what about…") — they're in a research session.
 */
export function decidePremium(
  query: string,
  history: { role: "user" | "assistant"; content: string }[],
): PremiumDecision {
  const trimmed = query.trim()
  const lower = trimmed.toLowerCase()

  for (const cmd of PREMIUM_COMMANDS) {
    if (lower.startsWith(cmd)) {
      return premium("explicit_command", `${cmd} requests run on the deeper tier.`)
    }
  }

  if (CODE_REQUEST_HINTS.some((h) => lower.includes(h))) {
    return premium(
      "code_request",
      "Code-shaped answers run on the deeper tier (still no invented APIs — we surface canonical examples plus structured explanation).",
    )
  }

  if (DEEP_RESEARCH_HINTS.some((h) => lower.includes(h))) {
    return premium(
      "deep_research",
      "Multi-step research questions run on the deeper tier for accuracy.",
    )
  }

  if (trimmed.length > 400) {
    return premium(
      "long_answer",
      "Long-form questions get long-form answers — runs on the deeper tier.",
    )
  }

  // Multi-turn deep dive: 6+ turns AND latest is a follow-up shape.
  if (history.length >= 6 && isFollowUp(lower)) {
    return premium(
      "multi_turn_followup",
      "You've been in a research thread — promoting to the deeper tier so the next answer doesn't lose context.",
    )
  }

  return { isPremium: false }
}

function isFollowUp(lower: string): boolean {
  const followUpStarts = [
    "more",
    "and",
    "but",
    "what about",
    "what if",
    "explain",
    "dive deeper",
    "go deeper",
    "elaborate",
    "expand",
    "continue",
  ]
  return followUpStarts.some((s) => lower.startsWith(s))
}

function premium(reason: PremiumReason, rationale: string): PremiumDecision {
  return { isPremium: true, reason, rationale }
}
