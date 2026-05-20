# Sage signer ops runbook

Sage can serve paid testnet turns in two modes:

- `verify-only`: Sage verifies the buyer Note and serves the premium answer, but redemption is deferred.
- `settlement`: Sage verifies the Note, sends an unsigned redemption transaction to the standalone signer, receives a signed transaction, submits it, and stores the receipt bundle.

`verify-only` is a valid degraded mode for the public pilot. It must not be described as final settlement. Receipts should remain `verified_pending_redemption` until an on-chain redemption transaction exists.

## Production posture

- Network: Ergo testnet.
- Custody: seller signing key must stay outside Vercel.
- Public claim: testnet proof, not mainnet readiness.
- Durable receipts: new paid turns should persist full Agreement, Verification Receipt, and Settlement Receipt JSON through Vercel Blob.
- Conformance: Sage L1 evidence is signed and published for the first post-Blob full receipt bundle; mainnet remains blocked until script identity, audit manifests, and permanent signer operations are published.

## Required secrets

Vercel:

```text
SAGE_WALLET_ADDRESS
SAGE_RESERVE_BOX_ID
SAGE_NETWORK=testnet
SAGE_PAYMENT_HMAC_KEY
BLOB_READ_WRITE_TOKEN
SAGE_SIGNER_URL          optional, settlement mode only
SAGE_SIGNER_TOKEN        required if SAGE_SIGNER_URL is set
```

Local signer machine:

```text
SAGE_WALLET_SEED
SAGE_EXPECTED_WALLET_ADDRESS=<same public address as Vercel SAGE_WALLET_ADDRESS>
SAGE_SIGNER_TOKEN
SAGE_NETWORK=testnet
SAGE_MAX_SINGLE_TX_NANOERG=10000000
SAGE_SIGNER_MAX_BODY_BYTES=262144
SAGE_SIGNER_MAX_REQUESTS_PER_MINUTE=30
SAGE_SIGNER_FAILURE_TRIP_THRESHOLD=5
SAGE_SIGNER_FAILURE_COOLDOWN_MS=300000
SAGE_WHITELIST_ADDRS=<comma-separated allowed output addresses>
```

Do not put `SAGE_WALLET_SEED` in Vercel, source code, screenshots, logs, tickets, or prompts.

Before exposing the signer, confirm the local seed matches the wallet address
used by production quotes:

```bash
cd /Users/alexanderbezkrovny/Desktop/ergo_v0/scripts/sage-signer
npm run inspect
```

Expected:

```text
address match: yes
token match: yes
```

If `address match: no`, stop. The signer seed cannot redeem Notes paid to the
production `SAGE_WALLET_ADDRESS`. Either restore the seller-wallet seed that
derives that address or rotate Vercel's `SAGE_WALLET_ADDRESS` and
`SAGE_RESERVE_BOX_ID` to the wallet whose signer you actually run.

## Start settlement mode

```bash
cd /Users/alexanderbezkrovny/Desktop/ergo_v0/scripts/sage-signer
npm install
npm start
```

Expose it for local testing:

```bash
cloudflared tunnel --url http://localhost:8911
```

Do not point production `SAGE_SIGNER_URL` at an ad-hoc `trycloudflare.com`
quick tunnel. Production settlement mode needs a controlled endpoint: a named
Cloudflare Tunnel under the operator account, a locked-down Fly/VM signer, or an
equivalent permanent service with key custody, auth, logs, and rotation.

Set or rotate the Vercel URL:

```bash
cd /Users/alexanderbezkrovny/Desktop/ergo_v0
vercel env add SAGE_SIGNER_URL production
vercel env add SAGE_SIGNER_TOKEN production
vercel --prod --yes
```

The URL must end with `/sign` when stored in `SAGE_SIGNER_URL`.

## Health checks

Check local signer liveness/readiness:

```bash
cd /Users/alexanderbezkrovny/Desktop/ergo_v0/scripts/sage-signer
npm run health
```

Expected while the signer is running:

```text
[sage-signer] health OK
[sage-signer] ready OK
```

Check premium quote path:

```bash
curl -sS -X POST https://www.ergoblockchain.org/api/sage/quote \
  -H 'content-type: application/json' \
  --data '{"question":"/code signer health probe"}'
```

Check activity feed:

```bash
curl -sS 'https://www.ergoblockchain.org/api/sage/activity?limit=5'
```

Check Blob storage is visible to production:

```bash
curl -sS https://www.ergoblockchain.org/api/sage/receipt/blob-probe-2026-05-16
```

Expected storage probe before a receipt exists:

```json
{"ok":false,"error":"receipt not found in blob storage","storage_configured":true}
```

Check public signer mode exposed by the site:

```bash
curl -sS https://www.ergoblockchain.org/api/sage/signer-health
```

Expected when signer is not configured:

```text
configured = false
settlement_mode = verify_only
```

Expected when settlement signer is live:

```text
configured = true
reachable = true
settlement_mode = settlement_available
address_matches_expected = true
```

The same response includes a lightweight operations snapshot:

```text
ops.policy.failure_logging = vercel_blob_latest_event
ops.latest_event_status = recorded | none_or_unavailable | storage_not_configured
ops.latest_event.kind = redemption_settled | redemption_deferred | redemption_verify_only
```

New paid verification attempts write the latest signer operation event to
Vercel Blob. This is intentionally small: it records the last settlement,
deferred redemption, or verify-only fallback without turning the site into a
logging backend.

Check full receipt after a paid turn:

```bash
curl -sS https://www.ergoblockchain.org/api/sage/receipt/<id>
```

Expected:

```text
completeness = full_receipt_bundle
accord.agreement_json present
accord.verification_receipt_json present
accord.settlement_receipt_json present
```

## Monitoring

Vercel logs:

```bash
vercel logs --follow | grep "\\[sage\\]"
```

Useful lines:

```text
[sage] paid quoteId=... receipt=... settleTx=... storage=saved
[sage] settle failed (verify ok, deferring redemption): ...
```

Signer logs should be kept open while settlement mode is active. Any denied signing decision should include enough context to identify the tx policy failure without printing secrets.

Authenticated signer metrics:

```bash
curl -sS http://127.0.0.1:8911/metrics \
  -H "Authorization: Bearer $SAGE_SIGNER_TOKEN"
```

Important gauges/counters:

```text
sage_signer_signed_total
sage_signer_sign_failed_total
sage_signer_policy_rejected_total
sage_signer_rate_limited_total
sage_signer_consecutive_sign_failures
sage_signer_circuit_open
```

If `sage_signer_circuit_open=1`, the signer is failing closed after repeated signing failures. It will cool down automatically after `SAGE_SIGNER_FAILURE_COOLDOWN_MS`.

## Failure modes

| Symptom | Likely cause | Action |
| --- | --- | --- |
| `/api/sage/quote` returns 503 | wallet env missing | verify `SAGE_WALLET_ADDRESS`, `SAGE_RESERVE_BOX_ID`, `SAGE_PAYMENT_HMAC_KEY`, redeploy |
| verify succeeds but receipt is pending | signer offline or URL invalid | keep degraded verify-only mode, fix tunnel, rotate `SAGE_SIGNER_URL`, redeploy |
| signer reachable but `address_matches_expected=false` | signer seed is for a different wallet than production quotes | stop signer, restore correct seller seed or rotate Vercel wallet/reserve env |
| receipt is `chain_proof_only` | Blob missing when payment was verified, or old receipt | create one new paid turn after Blob is configured |
| signer returns 401 | token mismatch | rotate both local `SAGE_SIGNER_TOKEN` and Vercel `SAGE_SIGNER_TOKEN` |
| signer rejects policy | amount or output not allowed | inspect tx policy, `SAGE_MAX_SINGLE_TX_NANOERG`, `SAGE_WHITELIST_ADDRS` |
| signer returns 429 | local signer rate limit | inspect traffic source, raise `SAGE_SIGNER_MAX_REQUESTS_PER_MINUTE` only if expected |
| signer returns 503 `circuit open` | repeated signing failures | inspect `/ready` ops state and recent `[sage-signer] SIGN_FAIL` lines |
| explorer cannot find Note yet | testnet propagation lag | wait 2-5 minutes and retry |

## Failover

To stop settlement safely:

1. Stop the local signer.
2. Leave Vercel running. Sage falls back to verify-only.
3. Do not remove existing receipts.
4. Announce only "verification live, redemption deferred" if describing the state publicly.

To restore:

1. Start signer.
2. Start tunnel.
3. Update `SAGE_SIGNER_URL` if tunnel changed.
4. Redeploy.
5. Trigger one small paid testnet turn.
6. Confirm `receiptStorage.ok === true` and either `settlementTxId` exists or the receipt clearly says pending.

## Weekly ops checklist

- Confirm `/api/sage/quote` still returns a premium quote for `/code` probes.
- Confirm `/api/sage/activity` returns the configured Sage receiver.
- Confirm Blob storage probe returns `storage_configured: true`.
- Review Vercel logs for `settle failed`.
- Review signer `/metrics` for failed signing, policy rejects, and circuit-open state.
- Keep testnet wallet funded.
- Rotate public tunnel URL/token if exposed in a shared channel.
- Do not upgrade public language from "testnet proof" to "production/mainnet ready" until the audit gate is complete.
