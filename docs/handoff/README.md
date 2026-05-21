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

None.

The Sage registry evidence has already been pushed to `accord-protocol/main`.
