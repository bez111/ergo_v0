#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises"

const tsconfigPath = "tsconfig.json"
const devTypesEntry = '".next/dev/types/**/*.ts"'
const nextEnvPath = "next-env.d.ts"
const nextEnvDevRoutesImport = 'import "./.next/dev/types/routes.d.ts";'

const original = await readFile(tsconfigPath, "utf8")
let next = original

if (next.includes(devTypesEntry)) {
  next = next.replace(/,\n\s*"\.next\/dev\/types\/\*\*\/\*\.ts"/g, "")
  next = next.replace(/\n\s*"\.next\/dev\/types\/\*\*\/\*\.ts",?/g, "")
  next = next.replace(/,\s*\n\s*\]/g, "\n  ]")
}

if (next !== original) {
  await writeFile(tsconfigPath, next)
  console.log("Removed .next/dev/types/**/*.ts from tsconfig include")
}

const nextEnvOriginal = await readFile(nextEnvPath, "utf8")
const nextEnvNext = nextEnvOriginal
  .split("\n")
  .filter((line) => line.trim() !== nextEnvDevRoutesImport)
  .join("\n")

if (nextEnvNext !== nextEnvOriginal) {
  await writeFile(nextEnvPath, nextEnvNext)
  console.log("Removed .next/dev route types import from next-env.d.ts")
}
