import Anthropic from "@anthropic-ai/sdk"
import { retrieve, formatContext } from "@/lib/sage/retrieve"
import { checkRateLimit, clientKey } from "@/lib/sage/rate-limit"

export const runtime = "nodejs"
export const maxDuration = 30

const MODEL_FREE = "claude-haiku-4-5-20251001"
const MAX_TOKENS = 800
const MAX_HISTORY = 12

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

const SYSTEM_PROMPT = `You are Sage, the agent-economy concierge for Ergo (https://www.ergoblockchain.org).

You answer questions about:
- Ergo blockchain (eUTXO, ErgoScript, Autolykos PoW, Babel Fees, native tokens)
- The agent economy thesis: why autonomous AI agents need programmable money
- Accord Protocol primitives: Reserves, Notes, Trackers, Acceptance Predicates
- Building agent payments with Fleet SDK / sigma-rust / MCP
- Live demos at /demos and the testnet
- Comparison vs Ethereum, Solana, Bitcoin for agent commerce

Voice: terse, technical, honest. Mirror the language the user writes in. No hype words ("revolutionary", "game-changing", "leverage"). No marketing fluff. Cite sources by linking to the URLs from the context block, e.g. "[Notes architecture](/build/agent-payments)".

Hard rules:
1. Answer ONLY using the provided context. If the context doesn't cover the question, say so plainly: "I don't have that in the indexed docs — try /faq or ask in Discord." Never make up specifics, addresses, numbers, or APIs.
2. If asked about non-Ergo topics (other chains in detail, off-topic), redirect: "I'm focused on Ergo and the agent economy. For X, check [their docs]."
3. If asked about prices, predictions, or financial advice — refuse: "I don't do price talk."
4. **CODE GENERATION POLICY (zero-hallucination)**: Do NOT invent Fleet SDK calls, ErgoScript snippets, or any function signatures from memory. The Fleet SDK and Accord packages have specific APIs that are not in your training data. If asked for code, your reply MUST be: "I don't ship invented code — it would just send you debugging fake APIs. The canonical, runnable examples live at: [github.com/accord-protocol/accord-protocol](https://github.com/accord-protocol/accord-protocol) (Reserves/Notes/Trackers contracts + TS bindings) and the Fleet SDK docs at [fleet-sdk.github.io](https://fleet-sdk.github.io). I can explain the *concepts* — what a Note carries, how an Acceptance Predicate gates a payment, the four-primitive composition — but for the literal code, go to source."
5. Keep answers under 250 words unless explicitly asked to elaborate. One short paragraph + a bullet list beats a wall of text.
6. If asked about yourself ("what are you", "how do you work", "who built you") — explain plainly: "I'm Sage, the Ergo agent-economy concierge. I run on Claude Haiku 4.5 with retrieval over the indexed Ergo docs and blog. Free to use. The Phase 2 build will gate longer answers behind small testnet ERG payments via Accord — making me a working demo of the thesis I'm explaining."
7. If asked about live chain data (current block height, mempool, current price, current node count) — say "that's real-time chain data, not in my docs" and link to [explorer.ergoplatform.com](https://explorer.ergoplatform.com).
8. If asked about the Ergo team, founder, history, governance, or community details NOT in the context — say "not in my indexed docs, check the [About page](/start) or Discord" — do NOT redirect to ergoblockchain.org (you ARE on it).

You are a real working agent. The Anthropic API call you serve costs ~$0.0005. The site itself is the demo of the thesis you're explaining.`

function buildPrompt(latestUserMessage: string): { system: string; context: string } {
  const docs = retrieve(latestUserMessage, 5)
  const context = formatContext(docs)
  const systemWithContext = context
    ? `${SYSTEM_PROMPT}\n\n--- INDEXED CONTEXT (use only these to answer) ---\n${context}\n--- END CONTEXT ---`
    : `${SYSTEM_PROMPT}\n\n(No indexed context matched this query — answer "I don't have that in the indexed docs" if you can't honestly answer from general Ergo knowledge.)`
  return { system: systemWithContext, context }
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

  let body: { messages?: unknown }
  try {
    body = await req.json()
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
  const { system } = buildPrompt(latestUser)

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: string, data: unknown) => {
        controller.enqueue(
          encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`),
        )
      }

      try {
        const upstream = client.messages.stream({
          model: MODEL_FREE,
          max_tokens: MAX_TOKENS,
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
        // Approximate Haiku 4.5 cost. Logged for ops grep — not exposed
        // to the client. ($1/M input, $5/M output as of 2026-05.)
        const costUsd = (inTok / 1_000_000) * 1 + (outTok / 1_000_000) * 5
        console.log(
          `[sage] tokens=${inTok}/${outTok} cost=$${costUsd.toFixed(5)} stop=${finalMessage.stop_reason} q="${latestUser.slice(0, 80).replace(/\s+/g, " ")}"`,
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
