/**
 * Sage payments — public surface.
 *
 * Used by /api/sage/{quote,verify-payment,chat} and the SageWidget
 * payment modal hook (Sprint 2).
 */

export { buildSageQuote, quoteToAgreement } from "./agreement.js"
export { decidePremium } from "./gate.js"
export { verifyAndSettle } from "./verify.js"
export { getSageAgent, getSageWalletConfig } from "./wallet.js"
export type {
  SageQuote,
  SagePaymentProof,
  SageVerificationResult,
  PremiumDecision,
  PremiumReason,
} from "./types.js"
