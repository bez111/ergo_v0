/**
 * Sage's own ErgoNoteOps — wraps ergo-agent-pay's checkNote with a register
 * normalizer.
 *
 * Why we don't pass ErgoAgentPay directly:
 *   ergo-agent-pay@0.3.0's `checkNote` types `additionalRegisters` as
 *   `Record<string, string>` and calls `regs.R5.slice(2)` to strip the
 *   sigma type prefix. The Ergo Platform v1 explorer testnet endpoint
 *   actually returns each register as
 *     { serializedValue: "0e20…", sigmaType: "Coll[SByte]", renderedValue: "…" }
 *   so the .slice() call dies with "e.slice is not a function" and the
 *   surrounding rails-ergo verifyPayment maps it to NOTE_NOT_FOUND.
 *
 * This adapter intercepts the box fetch, flattens any object-shaped
 * registers down to their `serializedValue` string, then delegates to
 * ergo-agent-pay for the rest of the parsing. Once ergo-agent-pay v0.4
 * accepts both shapes, we can drop the wrapper and pass the agent in
 * directly again.
 */

import type { ErgoNoteOps } from "@accord-protocol/rails-ergo"
import { ErgoAgentPay } from "ergo-agent-pay"

interface RegisterObject {
  serializedValue?: string
  renderedValue?: string
  sigmaType?: string
}

interface RawBox {
  boxId: string
  value: number | string
  address?: string
  additionalRegisters?: Record<string, string | RegisterObject>
  spentTransactionId?: string | null
  [key: string]: unknown
}

function flattenRegisters(box: RawBox): RawBox {
  if (!box.additionalRegisters) return box
  const flat: Record<string, string> = {}
  for (const [k, v] of Object.entries(box.additionalRegisters)) {
    if (typeof v === "string") flat[k] = v
    else if (v && typeof v === "object" && typeof v.serializedValue === "string") {
      flat[k] = v.serializedValue
    }
  }
  return { ...box, additionalRegisters: flat }
}

/**
 * Build an ErgoNoteOps that wraps an ErgoAgentPay instance with the
 * register-format normalizer. Drop-in replacement for passing
 * `agent as ErgoNoteOps` to `createErgoRailAdapter`.
 */
export function buildSageNoteOps(agent: ErgoAgentPay): ErgoNoteOps {
  // Reach into the private network client. ErgoAgentPay's NetworkClient
  // has many methods beyond getBox / getHeight — getUnspentBoxes,
  // submitTx, etc. — that ergo-agent-pay needs internally for redeem
  // and issuance. Earlier we replaced `network` with a plain object
  // exposing only the two we cared about, which broke redeemNote with
  // "this.network.getUnspentBoxes is not a function".
  //
  // Fix: wrap the network instance with a Proxy that overrides ONLY
  // getBox (with the v1-explorer register-format normalizer) and
  // forwards every other method binding `this` correctly so the
  // original NetworkClient methods continue to work.
  const network = (agent as unknown as { network: Record<string, unknown> }).network

  const wrappedNetwork = new Proxy(network, {
    get(target, prop, receiver) {
      if (prop === "getBox") {
        const orig = target.getBox as (id: string) => Promise<unknown>
        return async (boxId: string) =>
          flattenRegisters((await orig.call(target, boxId)) as RawBox)
      }
      const value = Reflect.get(target, prop, receiver)
      return typeof value === "function" ? value.bind(target) : value
    },
  })

  // Outer Proxy on the agent to swap in the wrapped network. Other
  // properties pass through with `this` preserved.
  const wrappedAgent: typeof agent = new Proxy(agent, {
    get(target, prop, receiver) {
      if (prop === "network") return wrappedNetwork
      const value = Reflect.get(target, prop, receiver)
      return typeof value === "function" ? value.bind(target) : value
    },
  })

  // Cast through unknown — same TS-private-but-runtime-public quirk as
  // example 16's seller/tool.ts.
  return wrappedAgent as unknown as ErgoNoteOps
}
