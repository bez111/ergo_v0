# Sage signer (standalone)

Local HTTP signer that the deployed Sage chat (on Vercel) calls to redeem buyer Notes on Ergo testnet. Runs on your machine, exposed via ngrok / cloudflared / Tailscale Funnel — Vercel posts unsigned EIP-12 transactions, this signs them with your Sage wallet's private key, returns the signed tx.

## Why it lives outside the Next.js app

Three reasons:

1. **Trust isolation.** The signing key never touches Vercel — the prod environment only knows the public address. Compromise of `ANTHROPIC_API_KEY` or any other prod secret can't drain the wallet.
2. **WASM friction in serverless.** Ergo's reference signer (sigma-rust → WASM) has cold-start issues in Vercel functions. Local Node.js runs it cleanly.
3. **Operational clarity.** Stopping signing = stop this process. No Vercel deploy needed.

## Phase 2 ship status — verify-only mode

Sage on prod ships with **verify-only mode** by default: it confirms the buyer's Note is on chain and matches the agreement, delivers the premium answer, and **defers redemption**. This signer makes the second on-chain step (redemption) actually happen.

If `SAGE_SIGNER_URL` is unset, prod falls back to verify-only and logs "settle deferred". The receipt page shows a yellow "settlement pending" badge; the Note auto-refunds to the buyer's reserve at expiry. You can run the signer at any point to start collecting redemption settlements.

## Setup

```bash
cd scripts/sage-signer
npm install
cp .env.example .env
# Edit .env, set SAGE_WALLET_SEED to your BIP-39 mnemonic
npm start
```

Then expose port 8911 to the internet:

```bash
# Option A: ngrok (free tier)
ngrok http 8911
# → https://xxxx.ngrok-free.app

# Option B: cloudflared (no signup)
cloudflared tunnel --url http://localhost:8911
# → https://xxxx.trycloudflare.com

# Option C: Tailscale Funnel (recommended for permanence)
tailscale funnel 8911
```

Set `SAGE_SIGNER_URL` to the public URL on Vercel:

```bash
cd ../..
vercel env add SAGE_SIGNER_URL production
# paste: https://xxxx.ngrok-free.app/sign
vercel --prod --yes
```

## Protocol

`POST /sign` with body `{ "unsignedTx": <EIP-12 unsigned tx> }`.
Returns `{ "signedTx": <signed tx> }` on success, `{ "error": "..." }` on failure.

The signer also enforces a basic policy:
- Reject txs that spend more than `SAGE_MAX_SINGLE_TX` nanoERG.
- Reject txs whose outputs include addresses not in `SAGE_WHITELIST_ADDRS`.
- Log every signing decision with timestamp + tx hash for audit.

## Implementation

`signer.mjs` is a thin HTTP wrapper around Fleet SDK's signing primitives. The actual signing path:

```
1. Parse unsigned EIP-12 tx                  (@fleet-sdk/serializer)
2. Derive private key from BIP-39 seed       (@fleet-sdk/wallet)
3. Sign each input box with the derived key  (@fleet-sdk/wallet)
4. Serialize signed tx back to EIP-12        (@fleet-sdk/serializer)
```

See `signer.mjs` for the wiring. The Fleet SDK examples linked in the file comments document each step.

## Hardening (mainnet)

- Move from BIP-39 mnemonic in env to a hardware signer (Ledger via `@fleet-sdk/wallet-secret-hd`) or a hosted KMS.
- Add per-tx human approval (Slack webhook → click to sign).
- Enable TLS termination at the tunnel level (ngrok/cloudflared do this by default; Tailscale Funnel needs MagicDNS).
- Audit-log to S3 / immutable store.
