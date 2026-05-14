/**
 * Sage payments — public surface.
 *
 * Used by /api/sage/{quote,verify-payment,chat} and the SageWidget
 * payment modal hook (Sprint 2).
 */

export { buildSageQuote, quoteToAgreement } from "./agreement"
export { decidePremium } from "./gate"
export { verifyAndSettle } from "./verify"
export { getSageAgent, getSageWalletConfig } from "./wallet"
export type {
  SageQuote,
  SagePaymentProof,
  SageVerificationResult,
  PremiumDecision,
  PremiumReason,
} from "./types"
