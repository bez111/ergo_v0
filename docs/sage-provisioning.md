# Sage premium-tier provisioning

This guide takes a fresh ergoblockchain.org deployment from "Sage works in free tier" to "Sage takes real testnet payments and serves Sonnet 4.6 answers". 30-45 minutes end-to-end.

## What you'll have when done

- A Sage seller wallet on Ergo testnet, funded from the faucet
- A one-time Reserve box backing all future Note redemptions
- Vercel env vars provisioned so `/api/sage/{quote,chat,verify-payment}` route premium questions through Accord
- Vercel Blob storage for full `/api/sage/receipt/<id>` bundles
- (Optional) The standalone signer running locally so Note **redemption** also happens — without it, Sage runs in verify-only mode (premium answers flow, redemption deferred)

## Prerequisites

- Nautilus wallet extension installed in your browser
- Node.js 18+ on your machine
- Vercel CLI (`npm i -g vercel`)
- ~10 min for testnet ERG faucet + Reserve confirmation

## Step 1 — Sage seller wallet

1. Open Nautilus, create a new wallet named `sage-testnet-prod`.
2. **Save the recovery phrase**. You'll need it only for the optional local signer, not for Vercel.
3. Switch Nautilus to testnet (Settings → Network → Testnet).
4. Copy the testnet address (`9f…`).
5. Fund the wallet via [testnet.ergoplatform.com/faucet](https://testnet.ergoplatform.com/faucet) — request ~0.15 ERG (covers Reserve creation + buffer).

Wait ~2 min for faucet tx confirmation.

## Step 2 — Create the Reserve

The Reserve is a one-time, on-chain box that backs every Note Sage will redeem. We use the script from Accord example 16:

From this repo you can bootstrap the same flow with:

```bash
npm run sage:wallet
npm run sage:wallet:balance
npm run sage:wallet:reserve
```

If you prefer to use the Accord example directly:

```bash
cd ../ergo-agent-economy/examples/16-paid-mcp-ergo-testnet
npm install
ACCORD_DEMO_BUYER_ADDR="<your sage testnet addr>" \
ACCORD_DEMO_SELLER_ADDR="<your sage testnet addr>" \
npm run setup:reserve
```

The script submits a Reserve creation tx and prints the tx id + explorer link. **Note the tx id.**

Wait ~2 min for confirmation, then resolve the Reserve box id:

```bash
curl -s "https://api-testnet.ergoplatform.com/api/v1/transactions/<tx-id>" | jq -r '.outputs[0].boxId'
```

That 64-char hex is your Reserve box id.

> Why "buyer" and "seller" are the same address in setup-reserve: Sage acts as the seller in the chat flow, but for Reserve setup it's also the funder. In a multi-tenant deployment you'd use distinct wallets.

## Step 3 — Generate the HMAC key

The HMAC key signs Sage's payment tokens. It must match between server runtimes:

```bash
openssl rand -hex 32
```

Save the output. We'll use it twice (Vercel + local `.env.local`).

## Step 4 — Vercel env vars

```bash
cd /Users/alexanderbezkrovny/Desktop/ergo8

# Required: Sage wallet
vercel env add SAGE_WALLET_ADDRESS production
# paste: <your testnet address from step 1>

vercel env add SAGE_RESERVE_BOX_ID production
# paste: <Reserve box id from step 2>

vercel env add SAGE_NETWORK production
# paste: testnet

# Required: payment-token HMAC (already set if you followed the
# Sprint 1+2 deploy instructions; re-add only if rotating)
vercel env add SAGE_PAYMENT_HMAC_KEY production
# paste: <output of step 3>

# Required for full Agreement / Verification / Settlement receipt bundles.
# Create a Vercel Blob store in the project, then copy its read-write token.
vercel env add BLOB_READ_WRITE_TOKEN production
# paste: <Blob read-write token>

# Optional but recommended: signer URL (see step 6 if you want this)
# vercel env add SAGE_SIGNER_URL production
# vercel env add SAGE_SIGNER_TOKEN production
```

Mirror the same values into `.env.local` for local dev:

```ini
SAGE_WALLET_ADDRESS=<addr>
SAGE_RESERVE_BOX_ID=<box id>
SAGE_PAYMENT_HMAC_KEY=<hmac key>
SAGE_NETWORK=testnet
BLOB_READ_WRITE_TOKEN=<vercel blob read-write token>
```

## Step 5 — Redeploy

```bash
vercel --prod --yes
```

Verify it's live by asking Sage a premium-trigger question:

```bash
curl -sN -X POST "https://www.ergoblockchain.org/api/sage/chat" \
  -H "content-type: application/json" \
  -d '{"messages":[{"role":"user","content":"/code show me a Fleet SDK example"}]}' \
  -w "\nHTTP %{http_code}\n" | tail -3
```

Expected: **HTTP 402** with `{"error":"premium_payment_required",…}`. That means premium routing is now active.

After a successful paid verification, `/api/sage/receipt/<id>` becomes the single machine-readable source of truth for the receipt. It returns the chain evidence plus the stored Agreement JSON, Verification Receipt JSON, and Settlement Receipt JSON. The public `/r/sage/<id>` page reads that API and only renders it.

## Step 6 — (Optional) Local signer for full settlement

By default Sage runs in **verify-only mode**: premium answers flow, but Note redemption (the second on-chain tx) is deferred. Notes auto-refund to the buyer's reserve at expiry. Receipts show "settlement pending" badge.

To enable full settlement, run the standalone signer locally:

```bash
cd scripts/sage-signer
cp .env.example .env
# edit .env: paste your BIP-39 mnemonic into SAGE_WALLET_SEED
# also generate a SAGE_SIGNER_TOKEN: openssl rand -hex 32
npm install
npm start
```

Expose the port to the internet:

```bash
# Easiest: cloudflared (no signup)
cloudflared tunnel --url http://localhost:8911
# → https://xxxx.trycloudflare.com
```

Then add to Vercel and redeploy:

```bash
cd ../..
vercel env add SAGE_SIGNER_URL production
# paste: https://xxxx.trycloudflare.com/sign

vercel env add SAGE_SIGNER_TOKEN production
# paste: same value as in scripts/sage-signer/.env

vercel --prod --yes
```

Now Sage redeems Notes for real — receipts will show full settlement with on-chain redemption tx.

> **Important**: the signer holds your private key. Stop it (`Ctrl-C`) when not actively serving. Tunnels are public; protect the endpoint with the bearer token (the signer enforces this) and don't share the URL.

## Step 7 — Submit Sage to the Accord registry

Once everything is live and the first end-to-end transaction completes, submit Sage to the public Accord registry:

```bash
cd ../ergo-agent-economy
# registry/providers/sage.json was committed in Sprint 3.4
# update conformance.last_run_at + result_uri once you've run:
npx @accord-protocol/conformance --target https://www.ergoblockchain.org/api/sage/quote
git push origin main
```

Open a PR (or push directly if you have rights) referencing the conformance result URI. Sage becomes the first production provider in the Accord registry.

## Troubleshooting

**`/api/sage/chat` always returns free, never 402** → check `SAGE_WALLET_ADDRESS` and `SAGE_RESERVE_BOX_ID` are both set on Vercel. Premium gating is silently disabled if either is missing.

**`/api/sage/quote` returns 503 "Sage wallet not configured"** → Vercel env not propagated. Run `vercel env ls` to verify, then `vercel --prod --yes` to redeploy.

**Verify-payment returns 402 "INSUFFICIENT_VALUE"** → buyer issued a Note for the wrong amount. Quote is `0.001 ERG`; the Note must carry exactly that. Re-issue.

**`/api/sage/receipt/<id>` returns `completeness: "chain_proof_only"`** → `BLOB_READ_WRITE_TOKEN` was missing when the payment was verified, or the receipt predates full storage. The API can still show public chain evidence, but the full Agreement / Verification / Settlement bundle was not stored.

**Receipt page shows "settlement pending" instead of settled** → expected if the signer isn't running. Either start the signer (Step 6) or accept verify-only mode.

**`/r/sage/<id>` shows "Settlement tx not confirmed yet"** → testnet tx hasn't propagated. Wait 2 min and refresh, or check the explorer link on the page.

## Cost telemetry

Watch Sage's cost in real time:

```bash
vercel logs --follow | grep "\\[sage\\]"
```

Per-turn lines look like:

```
[sage] tier=free tokens=2939/298 cost=$0.00141 stop=end_turn q="What is a Note?"
[sage] tier=PREMIUM tokens=4012/1840 cost=$0.03956 stop=end_turn q="/code show me…"
[sage] paid quoteId=… receipt=… settleTx=… q="/code show me…"
```

The Anthropic console hard-cap (set under [Settings → Usage limits](https://console.anthropic.com/settings/billing)) is the absolute ceiling — set $50/mo to stay safe.
