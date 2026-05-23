# Pinned Developer Thread Draft

Purpose: pin this on X/Twitter when we want a developer to understand, in one
minute, what is now live on ergoblockchain.org and what they can try today.

Tone: technical, concrete, no mainnet overclaiming.

## Thread

1/ Ergo is no longer just publishing an agent-economy thesis.

We now expose a live proof surface for developers:

- Sage paid AI flow on Ergo testnet
- full receipt bundles
- Accord conformance evidence
- public MCP endpoint
- wallet-agent policy checks
- ErgoScript playground

Start here:
https://www.ergoblockchain.org/agent-economy/live

Developer launch kit:
https://www.ergoblockchain.org/agent-economy/launch-kit

Launch kit schema:
https://www.ergoblockchain.org/agent-economy/developer-launch-kit.schema.v0.json

2/ The core idea is simple:

An autonomous agent should not just "send a payment".

It should be able to:

- ask for work
- receive a machine-readable quote
- bind payment to a task
- verify what happened
- keep a durable receipt
- expose proof to other agents/tools

3/ Sage is the first hosted testnet proof.

Premium Sage requests can produce a full receipt bundle:

- Agreement JSON
- Verification Receipt JSON
- Settlement Receipt JSON
- on-chain testnet settlement trail

Receipt API:
https://www.ergoblockchain.org/api/sage/receipt/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81

4/ The public receipt page is human-readable.

The API is the source of truth.

That matters because screenshots do not scale to agent systems. Agents,
wallets, dashboards, and review tools need stable JSON they can inspect.

https://www.ergoblockchain.org/r/sage/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81

5/ We also published a machine-readable live status layer.

It tracks:

- Sage receipt storage
- signer health
- MCP health
- widget package status
- wallet-agent policy surfaces
- review pack state
- mainnet gate state

JSON:
https://www.ergoblockchain.org/api/agent-economy/live

6/ The MCP endpoint is live for machines:

https://mcp.ergoblockchain.org/health
https://mcp.ergoblockchain.org/mcp

This is the beginning of a public machine surface for Ergo docs, developer
tools, and eventually agent workflows.

7/ For wallet-agent work, we are keeping the boundary conservative.

Remote pages should not get private keys.
LLMs should not get unbounded signing authority.
Quotes are not proof of safety.

So we added deterministic policy checks before any wallet is asked to sign.

https://www.ergoblockchain.org/api/agent-economy/wallet-agent/policy-check

8/ Want to see that policy layer without wiring a wallet?

Use the Policy Playground.

Try clean pass, wrong counterparty, over-cap, stale/no receipt, then inspect
the verdict JSON.

https://www.ergoblockchain.org/build/agent-payments/policy-playground

Short alias:
https://agents.ergoblockchain.org/policy-playground

9/ The reference runner shows the intended flow:

1. load local policy
2. receive a Sage payment intent
3. check policy
4. simulate exact transaction
5. sign locally
6. broadcast
7. verify and retain receipt

https://www.ergoblockchain.org/build/agent-payments/wallet-agent-runner

10/ Developer service index is now live too:

https://www.ergoblockchain.org/build/services
https://www.ergoblockchain.org/api/dev/services

It includes faucet status, address/box/tx inspection, Blake2b hashing, Sage
receipt verification, MCP, wallet-agent policy surfaces, and live probes.

11/ For frontend teams, the Sage widget package is published:

@ergoblockchain/sage-widget

It exposes React and vanilla embed surfaces, payment intents, receipt callbacks,
typed API clients, and host-owned wallet hooks.

https://www.ergoblockchain.org/agent-economy/sage-widget

12/ Important: this is testnet live proof, not a mainnet readiness claim.

The mainnet gate stays closed until:

- external audit/review artifact exists
- audit-bound mainnet script identity exists
- residual risks are published

Gate:
https://www.ergoblockchain.org/api/agent-economy/mainnet-gate

13/ Why Ergo?

Because eUTXO and ErgoScript are a strong fit for deterministic agent-payment
flows:

- bounded credit
- task-bound payment instruments
- verifiable settlement
- local policy before signing
- receipts that tools can inspect

14/ What to try first:

- Live cockpit:
  https://agents.ergoblockchain.org

- Developer launch kit:
  https://www.ergoblockchain.org/agent-economy/launch-kit

- Developer services:
  https://www.ergoblockchain.org/build/services

- Policy playground:
  https://agents.ergoblockchain.org/policy-playground

- ErgoScript playground:
  https://www.ergoblockchain.org/build/playground

15/ The north star:

Make Ergo a place where agents can transact with bounded authority, public
receipts, local wallet policy, and auditable settlement.

Primitive by primitive.
Receipt by receipt.
No mainnet shortcuts.
