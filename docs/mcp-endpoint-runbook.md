# MCP Endpoint Runbook

Status as of 2026-06-01: public endpoint is testnet/support infrastructure
with safe economic MCP tools, not a custody or payment signer.

## Public Surface

```text
Health:
https://mcp.ergoblockchain.org/health

Streamable HTTP MCP:
https://mcp.ergoblockchain.org/mcp
```

Expected root response after the current MCP repo is deployed:

```json
{
  "ok": true,
  "service": "ergoblockchain-mcp",
  "version": "0.3.2",
  "transport": "streamable-http"
}
```

Unknown paths may return HTTP 404 JSON with:

```text
Use /health for health checks or /mcp for MCP Streamable HTTP.
```

## DNS

Preferred:

```text
CNAME mcp.ergoblockchain.org -> <fly-app>.fly.dev
```

Current direct-record fallback, if CNAME is not used:

```text
A    mcp.ergoblockchain.org -> 66.241.125.130
AAAA mcp.ergoblockchain.org -> 2a09:8280:1::116:b65b:0
```

Fly ownership/certificate records, if Fly asks again:

```text
TXT   _fly-ownership.mcp.ergoblockchain.org -> app-yk030zx
CNAME _acme-challenge.mcp.ergoblockchain.org -> mcp.ergoblockchain.org.yk030zx.flydns.net
```

## Smoke

Run after DNS changes, Fly deploys, or certificate changes:

```bash
dig +short mcp.ergoblockchain.org A
dig +short mcp.ergoblockchain.org AAAA
curl -fsS https://mcp.ergoblockchain.org/health
curl -fsS https://mcp.ergoblockchain.org/mcp
```

Expected:

- `/health` returns HTTP 200 and JSON with service health.
- `/mcp` accepts Streamable HTTP MCP clients and `tools/list` advertises the
  safe economic tool surface.
- `/` returns service metadata on the current repo; unknown paths may return
  HTTP 404 JSON with instructions.

## Site Coupling

The website treats MCP as a public machine-facing entry point only:

- `/api/agent-economy/live` probes MCP health.
- `/build/services` shows MCP status in the developer services index.
- `/agent-economy/launch-kit` points developers to MCP health and tool access.
- MCP is not a wallet, signer, custodian, faucet, or mainnet readiness signal.

## Failure Modes

- DNS unresolved: check DigitalOcean/registrar records and propagation.
- TLS failure: check Fly cert status and `_acme-challenge` record.
- `/health` down: inspect Fly app health, region status, and logs.
- `/mcp` incompatible with a client: verify the client supports Streamable HTTP,
  not only stdio or older SSE-only MCP transports.
- Site Live Hub degraded: confirm whether the failure is MCP-only before
  touching Sage, Blob, or signer settings.

## Guardrails

- Do not put secrets in MCP responses or tool metadata.
- Do not expose wallet seed phrases, private keys, or signing authority through
  MCP tools.
- Keep the endpoint read-only / support-oriented unless a separate security
  review covers a mutating tool.
- Keep public language as "public MCP endpoint" or "machine-facing support
  infrastructure", not "mainnet-ready agent execution layer".
