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
  // has many methods (getBox, getHeight, getUnspentBoxes, submitTx, …)
  // that ergo-agent-pay needs internally for verify + redeem.
  //
  // We need to intercept ONLY getBox (to flatten the v1-explorer object-
  // format register response that ergo-agent-pay@0.3 can't parse) and
  // pass everything else through unchanged.
  //
  // A Proxy on the *agent* object doesn't work for this — ergo-agent-pay's
  // own methods access `this.network` directly via the prototype-bound
  // `this`, which is the original agent (target of the Proxy), not the
  // Proxy itself. The Proxy's `get` handler is therefore never invoked
  // for internal accesses.
  //
  // Instead, swap the agent's `network` field in-place with a Proxy that
  // overrides getBox and forwards everything else with bound `this`.
  // Internal `this.network.X(...)` calls now hit the wrapped network
  // directly because the field reference points at the wrapper.
  const networkCarrier = agent as unknown as { network: Record<string, unknown> }
  const originalNetwork = networkCarrier.network

  const wrappedNetwork = new Proxy(originalNetwork, {
    get(target, prop, receiver) {
      if (prop === "getBox") {
        const orig = target.getBox as (id: string) => Promise<unknown>
        return async (boxId: string) =>
          flattenRegisters((await orig.call(target, boxId)) as RawBox)
      }
      if (prop === "getHeight") {
        // ergo-agent-pay@0.3.0 reads `data.fullHeight` from /api/v1/info,
        // but the live testnet explorer returns the field as `height`
        // (the v1 schema renamed it). Without this override getHeight
        // returns undefined, TransactionBuilder gets undefined creation
        // height, the auto-generated change box inherits undefined,
        // and Fleet's .build() throws UndefinedCreationHeight (which
        // surfaces as the misleading 'Minting context is undefined'
        // message). Hit /info ourselves and return the right field.
        return async () => {
          const apiBase = "https://api-testnet.ergoplatform.com/api/v1"
          const r = await fetch(`${apiBase}/info`)
          if (!r.ok) throw new Error(`explorer /info ${r.status}`)
          const data = (await r.json()) as { height?: number; fullHeight?: number }
          return data.fullHeight ?? data.height ?? 0
        }
      }
      if (prop === "getUnspentBoxes") {
        // Sage's wallet holds Notes (the unredeemed payments themselves)
        // alongside the fee-coverage UTxOs. ergo-agent-pay's redeemNote
        // adds the Note as an explicit input and then asks for unspent
        // boxes to cover the miner fee — without filtering, the same
        // Note shows up in both lists and the tx builder dies with
        // "Box '...' is already included.".
        // Strip every box with a non-empty additionalRegisters from the
        // fee-pool — those are Notes / Reserves / Trackers and are not
        // valid fee-payment material anyway.
        const orig = target.getUnspentBoxes as (addr: string) => Promise<RawBox[]>
        return async (addr: string) => {
          const all = await orig.call(target, addr)
          return all.filter((b) => {
            const regs = b.additionalRegisters
            if (!regs) return true
            return Object.keys(regs).length === 0
          })
        }
      }
      const value = Reflect.get(target, prop, receiver)
      return typeof value === "function" ? (value as (...a: unknown[]) => unknown).bind(target) : value
    },
  })

  // Mutate the field. ergo-agent-pay's methods will see the wrapper from
  // here on. Idempotent — wrapping a wrapper is a no-op since the inner
  // Proxy still forwards correctly.
  networkCarrier.network = wrappedNetwork

  // Cast through unknown — same TS-private-but-runtime-public quirk as
  // example 16's seller/tool.ts.
  return agent as unknown as ErgoNoteOps
}
