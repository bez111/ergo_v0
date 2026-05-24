import { accordHashV0 } from "@accord-protocol/core"

const CROCKFORD_NO_ILOU = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"

export type AccordObjectPrefix = "acc" | "vr" | "sr"

export function accordObjectId(prefix: AccordObjectPrefix, seed: unknown): `${AccordObjectPrefix}_${string}` {
  const hash = BigInt(`0x${accordHashV0(seed)}`)
  const first130Bits = hash >> BigInt(256 - 130)
  let out = ""

  for (let i = 25; i >= 0; i -= 1) {
    const index = Number((first130Bits >> BigInt(i * 5)) & BigInt(31))
    out += CROCKFORD_NO_ILOU[index]
  }

  return `${prefix}_${out}` as `${AccordObjectPrefix}_${string}`
}

export function inlineInputRef(value: string): `inline:${string}` {
  return value.startsWith("inline:") ? (value as `inline:${string}`) : `inline:${value}`
}
