# Cross-machine handoff

Patches for changes made on one machine that need to land in **other repos** the user works on from a different machine.

Workflow:

1. Pull latest `bez111/ergo_v0` on the other machine.
2. Find the relevant patch under `docs/handoff/`.
3. Apply against the target repo with `git am < <patch-file>`.
4. Push from that machine to the target repo's remote.
5. Delete the patch file from this directory in the next ergo8 commit.

Patches are checked in to keep both machines in sync without coordinating
clones — the patch file IS the message.

## Active patches

### `accord-protocol-sage-registry-bump.patch`

**Target repo:** `accord-protocol/accord-protocol` (your `~/Desktop/accord-protocol/` clone on the other machine).

**Branch:** `main`.

**What it does:** updates `registry/providers/sage.json` to reflect Sage Phase 2 closing end-to-end on 2026-05-15:
- `operational_status.settlement_mode` → `"full-redemption"` with first-settled-tx block height
- new `live_proof` block (settlement tx hash, ISO timestamp, explorer URL, public receipt URL, live activity feed endpoint)
- new `endpoints.live_activity` entry
- `conformance.notes` records manual verification 2026-05-15

**Apply on the other machine:**

```bash
cd ~/Desktop/accord-protocol
git checkout main && git pull
git am < ~/Desktop/ergo8/docs/handoff/accord-protocol-sage-registry-bump.patch
git push origin main
```

(Or if the branch should be a PR: `git checkout -b sage-registry-bump-2026-05-15` before `git am`.)

**After it's pushed:** delete `accord-protocol-sage-registry-bump.patch` and this entry from the active list in the next ergo8 commit on the other machine.
