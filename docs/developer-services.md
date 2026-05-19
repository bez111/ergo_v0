# Developer Services

`/build/services` is the public workbench for small, fast Ergo developer utilities. The companion machine index is `/api/dev/services`.

## Public Surfaces

- `GET /api/dev/services` returns the service catalog, status counts, and lightweight probes.
- `GET /api/dev/tools` returns tool examples.
- `POST /api/dev/tools` runs stateless helpers:
  - `hash` for Blake2b-256 over UTF-8 or hex bytes.
  - `address` for Ergo address validation and ErgoTree extraction.
  - `box` for mainnet/testnet explorer box lookup.
  - `tx` for mainnet/testnet explorer transaction lookup.
  - `receipt` for Sage receipt completeness checks.
- `GET /api/dev/faucet` reports faucet posture.
- `POST /api/dev/faucet` validates a testnet address and forwards payout requests only when the guarded backend is enabled.

## Faucet Operations

The website must not hold a payout mnemonic. Keep faucet signing in a separate backend worker and let the website proxy guarded requests into it.

Required production env when ready:

```txt
ERGO_TESTNET_FAUCET_ENABLED=true
ERGO_TESTNET_FAUCET_BACKEND_URL=https://<dedicated-faucet-worker>/request
ERGO_TESTNET_FAUCET_BACKEND_TOKEN=<shared-secret>
ERGO_TESTNET_FAUCET_AMOUNT_NANOERG=100000000
```

Optional anti-abuse gate:

```txt
ERGO_TESTNET_FAUCET_TURNSTILE_SECRET=<cloudflare-turnstile-secret>
```

Current website behavior is intentionally conservative:

- Testnet address validation is live.
- Hourly IP limiting is live in the website runtime.
- Payouts stay disabled until the separate backend is configured.
- Mainnet addresses are rejected.

## Future Nice-To-Haves

- Dedicated `faucet.ergoblockchain.org` worker with a small dashboard.
- Per-address cooldown backed by durable KV instead of in-memory serverless state.
- Turnstile widget in `/build/services` once the public site key is configured.
- Faucet health in `/api/agent-economy/live`.
