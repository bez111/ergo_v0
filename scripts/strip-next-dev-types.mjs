#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises"

const tsconfigPath = "tsconfig.json"
const devTypesEntry = '".next/dev/types/**/*.ts"'

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
