# Ergo testnet faucet backend note

The website faucet surface at `/build/services#faucet` is intentionally only a
guarded web entrypoint. It validates the address, applies light request limits,
and points users to the public faucet while internal payouts are disabled.

Do not put faucet seed phrases, private keys, wallet secrets, or direct signing
logic inside the Next.js website runtime.

## Current site posture

- Human page: `/build/services#faucet`
- Machine page: `/api/dev/faucet`
- Status: `guarded` unless a dedicated backend worker is configured.
- Public fallback: `https://testnet.ergofaucet.org/`
- Official context: `https://docs.ergoplatform.com/node/testnet/testnet-resources/`

## Backend candidates

There are existing community/open-source faucet implementations that can be
reviewed before building a dedicated worker from scratch:

- `https://github.com/ergoplatform/faucet`
- `https://github.com/zargarzadehm/ergo-faucet`

Treat them as candidates, not automatic production dependencies. Before using
one, review maintenance status, supported node/wallet mode, rate limiting,
captcha/anti-abuse support, observability, deployment model, and secret
handling.

## Required website env

```bash
ERGO_TESTNET_FAUCET_ENABLED=true
ERGO_TESTNET_FAUCET_BACKEND_URL=https://<dedicated-faucet-worker>/request
ERGO_TESTNET_FAUCET_BACKEND_TOKEN=<shared secret>
ERGO_TESTNET_FAUCET_AMOUNT_NANOERG=100000000
ERGO_TESTNET_FAUCET_TURNSTILE_SECRET=<optional Cloudflare Turnstile secret>
```

The website sends:

```json
{
  "address": "testnet_address",
  "amountNanoErg": "100000000",
  "source": "ergoblockchain.org"
}
```

The backend should return JSON on every path, including failures.

## Minimum backend contract

Required behavior:

- Accept only Ergo testnet addresses.
- Enforce IP and address-level rate limits.
- Enforce a small fixed payout amount.
- Keep signing keys outside the public website.
- Return a transaction id or clear JSON error.
- Log request id, address, amount, tx id, and failure reason.
- Expose a health endpoint without secrets.

Suggested success response:

```json
{
  "ok": true,
  "txId": "testnet_transaction_id",
  "address": "testnet_address",
  "amountNanoErg": "100000000",
  "network": "testnet"
}
```

Suggested failure response:

```json
{
  "ok": false,
  "error": "rate_limited",
  "retryAfterSeconds": 3600
}
```

## Decision

For now the site should remain guarded and honest. The next production-quality
step is to deploy a separate faucet worker from a reviewed implementation or a
minimal custom service, then set the env variables above in Vercel.
