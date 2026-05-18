# Sage Accord Conformance Evidence Pipeline

This is the batch-mode path after the first post-Blob full Sage receipt exists.

## 1. Create the receipt

Run one paid Sage flow after `BLOB_READ_WRITE_TOKEN` is configured.

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
