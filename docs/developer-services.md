# Developer Services

`/build/services` is the public workbench for small, fast Ergo developer utilities. The companion machine index is `/api/dev/services`.

## Public Surfaces

- `GET /api/dev/services` returns the service catalog, status counts, and lightweight probes.
- `GET /api/dev/tools` returns tool examples.
- `POST /api/dev/tools` runs stateless helpers for hash, address, box, tx, and receipt checks. It never signs, broadcasts, or mutates chain state.
- `GET /.well-known/agent-economy.json` returns the canonical machine discovery descriptor for Agent Economy surfaces.
- `GET /api/agent-economy/discovery` returns the API version of the discovery descriptor with schema link headers.
- `GET /api/agent-economy/launch-kit` returns the five-minute developer launch path, API recipes, npm widget surface, guardrails, and remaining mainnet gates.
- `GET /api/agent-economy/roadmap` returns the live/next/gated/later strategic map for the proof surface.
- `/agent-economy/developer-launch-kit.schema.v0.json` defines the launch kit response contract for agents and tooling.
- `/agent-economy/discovery.schema.v0.json` defines the discovery descriptor contract.
- `/agent-economy/roadmap.schema.v0.json` defines the roadmap response contract.
- `/agent-economy/openapi.v0.json` defines the public Agent Economy API contract for client and docs tooling.
  It includes `/api/dev/services`, `/api/dev/tools`, and the paid Sage flow (`/api/sage/quote`, `/api/sage/verify-payment`, `/api/sage/chat`) so the utility belt and receipt pipeline can be discovered through the same contract as the proof surfaces.
- `GET /api/agent-economy/proofs` returns the machine-readable proof explorer.
- `/agent-economy/proof-explorer.schema.v0.json` defines the proof explorer response contract.
- `/agent-economy/wallet-agent-policy-check.schema.v0.json` defines the wallet-agent policy-check POST body and verdict contract.
- `GET /api/agent-economy/wallet-agent/policy-check` returns the policy-check contract and example request.
- `POST /api/agent-economy/wallet-agent/policy-check` returns deterministic allow/deny verdicts for wallet-agent actions.
- `GET /api/agent-economy/wallet-agent/reference-flow` returns the reference flow for policy, simulation, local signing, verification, and receipt retention.
- `/build/agent-payments/policy-playground` is the interactive version of the policy-check contract.
- `/build/agent-payments/wallet-agent-runner` is the human-readable runner walkthrough.
- `/agent-economy/launch-kit` is the human-readable developer launch kit.
- `docs/mcp-endpoint-runbook.md` is the operator reference for MCP DNS, health, smoke checks, and failure modes.
- `POST /api/dev/tools` runs stateless helpers:
  - `hash` for Blake2b-256 over UTF-8 or hex bytes.
  - `address` for Ergo address validation and ErgoTree extraction.
  - `box` for mainnet/testnet explorer box lookup.
  - `tx` for mainnet/testnet explorer transaction lookup.
  - `receipt` for Sage receipt completeness checks.
- `GET /api/dev/faucet` reports faucet posture.
- `POST /api/dev/faucet` validates a testnet address and forwards payout requests only when the guarded backend is enabled.
- `docs/testnet-faucet-backend.md` lists the backend contract and candidate open-source faucet implementations to review before enabling payouts.

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
- The UI shows the public `https://testnet.ergofaucet.org/` fallback while internal payouts are guarded.
- Mainnet addresses are rejected.

## Future Nice-To-Haves

- Dedicated `faucet.ergoblockchain.org` worker with a small dashboard.
- Per-address cooldown backed by durable KV instead of in-memory serverless state.
- Turnstile widget in `/build/services` once the public site key is configured.
- Faucet health in `/api/agent-economy/live`.
