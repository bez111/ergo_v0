# Sage Accord Conformance Evidence Pipeline

This is the batch-mode path after the first post-Blob full Sage receipt exists.

## Current published evidence

Status as of 2026-05-20:

```text
receipt_id = 09a9e5c0e5e5ca716bfc7c856aa4ece42a0655ad06f8806cf054c79c09eb318c
agreement_id = acc_sage_9ac19993a88a4d984325
achieved_level = L1
signed_artifact = https://www.ergoblockchain.org/evidence/sage/conformance-l1-2026-05-20.signed.json
public_key = https://www.ergoblockchain.org/evidence/sage/provider-signing-key.json
receipt_api = https://www.ergoblockchain.org/api/sage/receipt/09a9e5c0e5e5ca716bfc7c856aa4ece42a0655ad06f8806cf054c79c09eb318c
```

This is Sage testnet conformance evidence. It does not open mainnet readiness
without script identity, audit manifests, and signer operations evidence.

## 1. Create the receipt

Run one paid Sage flow after `BLOB_READ_WRITE_TOKEN` is configured.

This was first completed on 2026-05-20 for receipt
`09a9e5c0e5e5ca716bfc7c856aa4ece42a0655ad06f8806cf054c79c09eb318c`.

Success condition:

```text
/api/sage/receipt/<id>
completeness = full_receipt_bundle
accord.agreement_json present
accord.verification_receipt_json present
accord.settlement_receipt_json present
```

## 2. Run conformance and evidence export

```bash
cd /Users/alexanderbezkrovny/Desktop/ergo_v0
npm run sage:conformance:evidence
```

The script writes:

```text
artifacts/sage-conformance/<timestamp>.json
artifacts/sage-conformance/latest-evidence.json
```

If no full receipt exists yet, it still writes a pending artifact with:

```text
status = blocked_missing_full_receipt_bundle
```

That keeps the pipeline machine-readable instead of relying on memory.

## 3. Sign the conformance artifact

Use the Accord conformance signer from the Accord repo:

```bash
node /Users/alexanderbezkrovny/Desktop/accord-protocol/packages/accord-conformance/dist/cli.js \
  sign \
  --key-file <private-key-file> \
  --signer provider://sage-ergoblockchain \
  --output artifacts/sage-conformance/<timestamp>.signed.json \
  artifacts/sage-conformance/<timestamp>.json
```

Do not commit private keys or paste them into prompts.

The current public provider key is committed at:

```text
public/evidence/sage/provider-signing-key.json
```

## 4. Update registry evidence

Update `accord-protocol/registry/providers/sage.json` with:

- achieved conformance level
- signed artifact URL or path
- full receipt URL
- evidence timestamp
- registry PR link, once opened

The existing handoff patch location is:

```text
docs/handoff/accord-protocol-sage-registry-bump.patch
```

## 5. Live Hub state

Live Hub should show:

- `Full receipt bundle = live`
- `Accord conformance = ready/passed`
- `Mainnet gate = closed` until script identity and audit manifests are also published

Conformance evidence alone does not open mainnet readiness.
