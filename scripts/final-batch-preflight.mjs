#!/usr/bin/env node
import { spawnSync } from "node:child_process"

const npm = process.platform === "win32" ? "npm.cmd" : "npm"
const args = new Set(process.argv.slice(2))
const includeBuild = args.has("--build") || args.has("--full")

const steps = [
  {
    label: "Clean Next dev tsconfig noise",
    command: "node",
    args: ["scripts/strip-next-dev-types.mjs"],
  },
  {
    label: "Refresh Sage index",
    command: npm,
    args: ["run", "sage:index"],
  },
  {
    label: "Audit public claims",
    command: npm,
    args: ["run", "audit:claims"],
  },
  {
    label: "Audit blog content",
    command: npm,
    args: ["run", "audit:blog"],
  },
  {
    label: "Audit Agent Economy gate",
    command: npm,
    args: ["run", "audit:agent-economy-gate"],
  },
  {
    label: "Audit agent host routes",
    command: npm,
    args: ["run", "audit:agent-host"],
  },
  {
    label: "Audit locales",
    command: npm,
    args: ["run", "audit:locales"],
  },
  {
    label: "Type-check",
    command: npm,
    args: ["run", "type-check"],
  },
  {
    label: "Whitespace diff check",
    command: "git",
    args: ["diff", "--check"],
  },
]

if (includeBuild) {
  steps.push({
    label: "Production build",
    command: npm,
    args: ["run", "build"],
  })
}

for (const step of steps) {
  console.log(`\n==> ${step.label}`)
  const result = spawnSync(step.command, step.args, {
    stdio: "inherit",
    env: process.env,
  })

  if (result.error) {
    console.error(`\n[preflight] could not start ${step.command}: ${result.error.message}`)
    process.exit(1)
  }

  if (result.status !== 0) {
    console.error(`\n[preflight] failed: ${step.label}`)
    process.exit(result.status ?? 1)
  }
}

if (!includeBuild) {
  console.log("\n[preflight] build skipped. Run `npm run preflight:batch -- --build` for the final build gate.")
}

console.log("\n[preflight] batch checks clean")
