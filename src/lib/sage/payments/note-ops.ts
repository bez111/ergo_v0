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
  // Reach into the private network client via the same any-cast that
  // ErgoAgentPay's own checkNote does internally. The shape of
  // `network` is `{ getBox(boxId): Promise<unknown>, getHeight(): Promise<number> }`.
  const network = (agent as unknown as { network: { getBox: (id: string) => Promise<unknown>; getHeight: () => Promise<number> } }).network

  // Replace getBox so every box that flows through the agent is
  // normalized before ergo-agent-pay touches it.
  const wrappedAgent: typeof agent = new Proxy(agent, {
    get(target, prop, receiver) {
      if (prop === "network") {
        return {
          getBox: async (boxId: string) => flattenRegisters((await network.getBox(boxId)) as RawBox),
          getHeight: () => network.getHeight(),
        }
      }
      return Reflect.get(target, prop, receiver)
    },
  })

  // Cast through unknown — same TS-private-but-runtime-public quirk as
  // example 16's seller/tool.ts.
  return wrappedAgent as unknown as ErgoNoteOps
}
