import Anthropic from "@anthropic-ai/sdk"
import { retrieve, formatContext } from "@/lib/sage/retrieve"
import { checkRateLimit, clientKey } from "@/lib/sage/rate-limit"
import { decidePremium } from "@/lib/sage/payments/gate"
import {
  hashQuestionForToken,
  isPaymentTokenKeyConfigured,
  verifyPaymentToken,
} from "@/lib/sage/payments/token"

export const runtime = "nodejs"
export const maxDuration = 60

// Free tier — Haiku 4.5, short answers, light retrieval.
const MODEL_FREE = "claude-haiku-4-5-20251001"
const MAX_TOKENS_FREE = 800
const RAG_K_FREE = 5

// Premium tier — Sonnet 4.6, deeper retrieval, longer answers. Only
// enabled when the request carries a valid Sage payment token.
const MODEL_PREMIUM = "claude-sonnet-4-6"
const MAX_TOKENS_PREMIUM = 2400
const RAG_K_PREMIUM = 10

const MAX_HISTORY = 12

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

interface ChatRequest {
  messages?: unknown
  /** HMAC token from /api/sage/verify-payment — promotes the call to the premium tier. */
  paymentToken?: string
}

const SYSTEM_PROMPT_BASE = `You are Sage, the agent-economy concierge for Ergo (https://www.ergoblockchain.org).

You answer questions about:
- Ergo blockchain (eUTXO, ErgoScript, Autolykos PoW, Babel Fees, native tokens)
- The agent economy thesis: why autonomous AI agents need programmable money
- Accord Protocol primitives: Reserves, Notes, Trackers, Acceptance Predicates
- Building autonomous work receipts with Fleet SDK / sigma-rust / MCP
- Live demos at /demos and the testnet
- Comparison vs Ethereum, Solana, Bitcoin for agent commerce

Voice: terse, technical, honest. Mirror the language the user writes in. No hype words ("revolutionary", "game-changing", "leverage"). No marketing fluff. Cite sources by linking to the URLs from the context block, e.g. "[Notes architecture](/build/agent-payments)".

Hard rules:
1. Answer ONLY using the provided context. If the context doesn't cover the question, say so plainly: "I don't have that in the indexed docs — try /faq or ask in Discord." Never make up specifics, addresses, numbers, or APIs.
2. If asked about non-Ergo topics (other chains in detail, off-topic), redirect: "I'm focused on Ergo and the agent economy. For X, check [their docs]."
3. If asked about prices, predictions, or financial advice — refuse: "I don't do price talk."
4. **CODE GENERATION POLICY (zero-hallucination)**: Do NOT invent Fleet SDK calls, ErgoScript snippets, or any function signatures from memory. The Fleet SDK and Accord packages have specific APIs that are not in your training data. If asked for code, your reply MUST be: "I don't ship invented code — it would just send you debugging fake APIs. The canonical, runnable examples live at: [github.com/accord-protocol/accord-protocol](https://github.com/accord-protocol/accord-protocol) (Reserves/Notes/Trackers contracts + TS bindings) and the Fleet SDK docs at [fleet-sdk.github.io](https://fleet-sdk.github.io). I can explain the *concepts* — what a Note carries, how an Acceptance Predicate gates a payment, the four-primitive composition — but for the literal code, go to source."
6. If asked about yourself ("what are you", "how do you work", "who built you") — explain plainly: "I'm Sage, the Ergo agent-economy concierge. I run on Claude (Haiku for free questions, Sonnet for paid deep ones) with retrieval over the indexed Ergo docs. Premium turns are settled in testnet ERG via Accord Notes — making me a working demo of the thesis I'm explaining."
7. If asked about live chain data (current block height, mempool, current price, current node count) — say "that's real-time chain data, not in my docs" and link to [explorer.ergoplatform.com](https://explorer.ergoplatform.com).
8. If asked about the Ergo team, founder, history, governance, or community details NOT in the context — say "not in my indexed docs, check the [About page](/start) or Discord" — do NOT redirect to ergoblockchain.org (you ARE on it).

You are a real working agent. The site itself is the demo of the thesis you're explaining.`

const FREE_TIER_TAIL = `\n\nTier: FREE. Keep answers under 250 words. One short paragraph + a bullet list beats a wall of text.`

const PREMIUM_TIER_TAIL = `\n\nTier: PREMIUM (the user paid in testnet ERG via an Accord Note for this answer). Take the full context window — go up to 2000 tokens if the question warrants it. Walk through reasoning step-by-step. When code questions come, still don't invent SDK calls (rule 4 stands), but you may sketch ErgoScript pseudo-syntax that compiles in spirit and link to the canonical source. Show your sources inline.`

function buildPrompt(latestUserMessage: string, premium: boolean): string {
  const k = premium ? RAG_K_PREMIUM : RAG_K_FREE
  const docs = retrieve(latestUserMessage, k)
  const context = formatContext(docs)
  const tail = premium ? PREMIUM_TIER_TAIL : FREE_TIER_TAIL
  const base = `${SYSTEM_PROMPT_BASE}${tail}`
  return context
    ? `${base}\n\n--- INDEXED CONTEXT (use only these to answer) ---\n${context}\n--- END CONTEXT ---`
    : `${base}\n\n(No indexed context matched this query — answer "I don't have that in the indexed docs" if you can't honestly answer from general Ergo knowledge.)`
}

function sanitizeHistory(messages: unknown): ChatMessage[] {
  if (!Array.isArray(messages)) return []
  return messages
    .slice(-MAX_HISTORY)
    .filter(
      (m): m is ChatMessage =>
        typeof m === "object" &&
        m !== null &&
        ("role" in m) &&
        ((m as ChatMessage).role === "user" || (m as ChatMessage).role === "assistant") &&
        typeof (m as ChatMessage).content === "string" &&
        (m as ChatMessage).content.length > 0 &&
        (m as ChatMessage).content.length < 4000,
    )
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Sage is offline (missing ANTHROPIC_API_KEY)." }),
      { status: 503, headers: { "content-type": "application/json" } },
    )
  }

  const rl = checkRateLimit(clientKey(req))
  if (!rl.allowed) {
    return new Response(
      JSON.stringify({
        error: "Rate limit: 10 questions/minute. Take a breath, try again in a moment.",
        resetAt: rl.resetAt,
      }),
      {
        status: 429,
        headers: {
          "content-type": "application/json",
          "retry-after": String(Math.max(1, Math.ceil((rl.resetAt - Date.now()) / 1000))),
        },
      },
    )
  }

  let body: ChatRequest
  try {
    body = (await req.json()) as ChatRequest
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body." }), {
      status: 400,
      headers: { "content-type": "application/json" },
    })
  }

  const messages = sanitizeHistory(body.messages)
  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return new Response(JSON.stringify({ error: "Last message must be from user." }), {
      status: 400,
      headers: { "content-type": "application/json" },
    })
  }

  const latestUser = messages[messages.length - 1].content

  // Premium routing: a valid token whose questionHash matches the
  // current question promotes the call. Any mismatch falls back to the
  // free tier silently — never error here, the user already paid; the
  // worst we should do is downgrade quality. (We log it so we can spot
  // a token-binding regression.)
  let premium = false
  if (body.paymentToken) {
    const tokenCheck = verifyPaymentToken(body.paymentToken)
    if (tokenCheck.ok && tokenCheck.payload) {
      const expected = hashQuestionForToken(latestUser)
      if (tokenCheck.payload.questionHash === expected) {
        premium = true
      } else {
        console.warn(
          `[sage] payment token questionHash mismatch — falling back to free tier (quoteId=${tokenCheck.payload.quoteId})`,
        )
      }
    } else {
      console.warn(`[sage] invalid payment token: ${tokenCheck.error}`)
    }
  }

  // Premium-eligible question without a token — return 402 so the widget
  // knows to fetch a quote and open the payment modal. ONLY if the
  // Sage wallet is actually configured on this deployment; otherwise
  // gracefully serve the free tier so the chat keeps working before
  // testnet env vars are provisioned.
  if (
    !premium &&
    process.env.SAGE_WALLET_ADDRESS &&
    process.env.SAGE_RESERVE_BOX_ID &&
    isPaymentTokenKeyConfigured()
  ) {
    const decision = decidePremium(latestUser, messages)
    if (decision.isPremium) {
      return new Response(
        JSON.stringify({
          error: "premium_payment_required",
          reason: decision.reason,
          rationale: decision.rationale,
        }),
        { status: 402, headers: { "content-type": "application/json" } },
      )
    }
  }

  const system = buildPrompt(latestUser, premium)
  const model = premium ? MODEL_PREMIUM : MODEL_FREE
  const maxTokens = premium ? MAX_TOKENS_PREMIUM : MAX_TOKENS_FREE

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: string, data: unknown) => {
        controller.enqueue(
          encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`),
        )
      }

      // First event tells the widget which tier we're serving so it can
      // render a small badge ("FREE" / "PREMIUM · paid via Accord").
      send("tier", { tier: premium ? "premium" : "free", model })

      try {
        const upstream = client.messages.stream({
          model,
          max_tokens: maxTokens,
          system,
          messages,
        })

        for await (const event of upstream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            send("delta", { text: event.delta.text })
          }
        }

        const finalMessage = await upstream.finalMessage()
        const inTok = finalMessage.usage.input_tokens
        const outTok = finalMessage.usage.output_tokens
        // Approximate cost. Free = Haiku 4.5 ($1/$5 per M). Premium =
        // Sonnet 4.6 ($3/$15 per M as of 2026-05). Logged for ops grep.
        const inRate = premium ? 3 : 1
        const outRate = premium ? 15 : 5
        const costUsd = (inTok / 1_000_000) * inRate + (outTok / 1_000_000) * outRate
        console.log(
          `[sage] tier=${premium ? "PREMIUM" : "free"} tokens=${inTok}/${outTok} cost=$${costUsd.toFixed(5)} stop=${finalMessage.stop_reason} q="${latestUser.slice(0, 80).replace(/\s+/g, " ")}"`,
        )
        send("done", {
          stopReason: finalMessage.stop_reason,
          inputTokens: inTok,
          outputTokens: outTok,
        })
      } catch (err) {
        const message = err instanceof Error ? err.message : "unknown error"
        console.error(`[sage] error: ${message}`)
        send("error", { message })
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache, no-transform",
      "x-accel-buffering": "no",
    },
  })
}
