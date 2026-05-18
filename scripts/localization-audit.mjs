#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const messagesDir = path.join(process.cwd(), "messages")
const sourceLocale = "en"
const ignoredExtraNamespaces = new Set()
const localeMatrixFiles = [
  { file: "src/i18n/request.ts", label: "request.locales", pattern: /export const locales\s*=\s*\[([\s\S]*?)\]\s*as const/ },
  { file: "src/i18n/routing.ts", label: "routing.locales", pattern: /const locales\s*=\s*\[([\s\S]*?)\]\s*as const/ },
  { file: "src/lib/sitemap-utils.ts", label: "sitemap.locales", pattern: /export const sitemapLocales\s*=\s*\[([\s\S]*?)\]\s*as const/ },
  { file: "src/lib/seo/metadata.ts", label: "metadata.locales", pattern: /const ALL_LOCALES\s*=\s*\[([\s\S]*?)\]\s*as const/ },
  { file: "src/lib/i18n-seo.ts", label: "i18n-seo.locales", pattern: /export const locales\s*=\s*\[([\s\S]*?)\]\s*as const/ },
]
const hreflangByLocale = new Map([
  ["zh-cn", "zh-CN"],
  ["zh-tw", "zh-TW"],
  ["pt-br", "pt-BR"],
  ["ko-kr", "ko-KR"],
])

const sourceFragmentPatterns = [
  /['"]\s*,\s*(href|item|label|ctaLink|target|rel|className|author|stat|color)\s*:/,
  /pathname\.startsWith\(/,
  /console\.(log|error|warn)\(/,
  /Add descriptions for/i,
  /Content-Type['"]?\s*:/,
  /X-Algolia-/,
  /@(?:type|id)["']?\s*:/,
  /itemListElement/,
  /\b(headline|description)\s*:/,
]

const locales = getLocaleDirs()
const sourceFiles = getJsonFiles(sourceLocale)
const failures = []
const warnings = []
const localeSummaries = []
const sourceTrees = new Map(sourceFiles.map((file) => [file, readJson(path.join(messagesDir, sourceLocale, file))]))

checkLocaleMatrix()

for (const locale of locales) {
  const files = getJsonFiles(locale)
  const missingFiles = sourceFiles.filter((file) => !files.includes(file))
  const extraFiles = files.filter((file) => !sourceFiles.includes(file))

  for (const file of missingFiles) {
    failures.push({ locale, file, type: "missing_file", path: file })
  }
  for (const file of extraFiles) {
    failures.push({ locale, file, type: "extra_file", path: file })
  }

  let missingKeys = 0
  let extraKeys = 0
  let typeMismatches = 0
  let placeholderMismatches = 0
  let pollutedStrings = 0
  let emptyStrings = 0
  let englishCopies = 0
  let translatedStrings = 0

  for (const file of sourceFiles) {
    if (!files.includes(file)) continue

    const source = sourceTrees.get(file)
    const target = readJson(path.join(messagesDir, locale, file))
    const sourceLeaves = flattenLeaves(source)
    const targetLeaves = flattenLeaves(target)

    for (const [key, sourceValue] of sourceLeaves) {
      if (!targetLeaves.has(key)) {
        missingKeys += 1
        failures.push({ locale, file, type: "missing_key", path: key })
        continue
      }

      const targetValue = targetLeaves.get(key)
      const sourceKind = valueKind(sourceValue)
      const targetKind = valueKind(targetValue)
      if (sourceKind !== targetKind) {
        typeMismatches += 1
        failures.push({
          locale,
          file,
          type: "type_mismatch",
          path: key,
          expected: sourceKind,
          actual: targetKind,
        })
        continue
      }

      if (typeof targetValue === "string") {
        translatedStrings += 1
        if (targetValue.trim() === "") {
          emptyStrings += 1
          failures.push({ locale, file, type: "empty_string", path: key })
        }

        const sourcePlaceholders = extractPlaceholders(sourceValue)
        const targetPlaceholders = extractPlaceholders(targetValue)
        if (!sameSet(sourcePlaceholders, targetPlaceholders)) {
          placeholderMismatches += 1
          failures.push({
            locale,
            file,
            type: "placeholder_mismatch",
            path: key,
            expected: [...sourcePlaceholders].sort().join(","),
            actual: [...targetPlaceholders].sort().join(","),
          })
        }

        if (sourceFragmentPatterns.some((pattern) => pattern.test(targetValue))) {
          pollutedStrings += 1
          failures.push({
            locale,
            file,
            type: "polluted_string",
            path: key,
            sample: targetValue.slice(0, 180).replace(/\s+/g, " "),
          })
        }

        if (locale !== sourceLocale && targetValue === sourceValue && hasLetters(sourceValue)) {
          englishCopies += 1
        }
      }
    }

    for (const key of targetLeaves.keys()) {
      if (sourceLeaves.has(key)) continue
      if (ignoredExtraNamespaces.has(key.split(".")[0])) continue
      extraKeys += 1
      failures.push({ locale, file, type: "extra_key", path: key })
    }
  }

  if (locale !== sourceLocale && translatedStrings > 0) {
    const englishCopyRate = englishCopies / translatedStrings
    if (englishCopyRate > 0.2) {
      warnings.push({
        locale,
        type: "high_english_copy_rate",
        message: `${Math.round(englishCopyRate * 100)}% strings equal EN fallback`,
      })
    }
  }

  localeSummaries.push({
    locale,
    files: files.length,
    missingFiles: missingFiles.length,
    extraFiles: extraFiles.length,
    missingKeys,
    extraKeys,
    typeMismatches,
    placeholderMismatches,
    pollutedStrings,
    emptyStrings,
    englishCopies,
    translatedStrings,
  })
}

const report = {
  generatedAt: new Date().toISOString(),
  sourceLocale,
  locales,
  sourceFiles,
  summary: {
    localeCount: locales.length,
    fileCount: sourceFiles.length,
    failureCount: failures.length,
    warningCount: warnings.length,
  },
  localeSummaries,
  failures,
  warnings,
}

const outDir = path.join(process.cwd(), "artifacts", "localization-audit")
fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, "latest.json"), `${JSON.stringify(report, null, 2)}\n`)
fs.writeFileSync(path.join(outDir, "latest.md"), renderMarkdown(report))

console.log(renderConsole(report))

if (failures.length > 0) {
  process.exit(1)
}

function getLocaleDirs() {
  return fs
    .readdirSync(messagesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => (a === sourceLocale ? -1 : b === sourceLocale ? 1 : a.localeCompare(b)))
}

function checkLocaleMatrix() {
  const expectedLocales = new Set(locales)
  const expected = [...expectedLocales].sort().join(",")
  for (const item of localeMatrixFiles) {
    const filePath = path.join(process.cwd(), item.file)
    if (!fs.existsSync(filePath)) {
      failures.push({ locale: "config", file: item.file, type: "missing_locale_config", path: item.label })
      continue
    }
    const text = fs.readFileSync(filePath, "utf8")
    const match = text.match(item.pattern)
    if (!match) {
      failures.push({ locale: "config", file: item.file, type: "unreadable_locale_config", path: item.label })
      continue
    }
    const actualLocales = [...match[1].matchAll(/['"]([^'"]+)['"]/g)].map((entry) => entry[1])
    const actual = [...new Set(actualLocales)].sort().join(",")
    if (actual !== expected) {
      failures.push({
        locale: "config",
        file: item.file,
        type: "locale_matrix_mismatch",
        path: item.label,
        expected,
        actual,
      })
    }
  }

  checkRootAlternateLanguages()
}

function checkRootAlternateLanguages() {
  const file = "src/app/layout.tsx"
  const filePath = path.join(process.cwd(), file)
  if (!fs.existsSync(filePath)) {
    failures.push({ locale: "config", file, type: "missing_locale_config", path: "metadata.alternates.languages" })
    return
  }

  const text = fs.readFileSync(filePath, "utf8")
  const match = text.match(/alternates:\s*\{[\s\S]*?languages:\s*\{([\s\S]*?)\n\s*\},\s*\n\s*\}/)
  if (!match) {
    failures.push({ locale: "config", file, type: "unreadable_locale_config", path: "metadata.alternates.languages" })
    return
  }

  const entries = [...match[1].matchAll(/['"]([^'"]+)['"]\s*:\s*['"]([^'"]+)['"]/g)]
  const actual = new Map(entries.map((entry) => [entry[1], entry[2]]))
  const expected = new Map(
    locales.map((locale) => [
      hreflangByLocale.get(locale) ?? locale,
      locale === sourceLocale ? "https://www.ergoblockchain.org" : `https://www.ergoblockchain.org/${locale}`,
    ])
  )

  const actualKeys = [...actual.keys()].sort().join(",")
  const expectedKeys = [...expected.keys()].sort().join(",")
  if (actualKeys !== expectedKeys) {
    failures.push({
      locale: "config",
      file,
      type: "alternate_language_mismatch",
      path: "metadata.alternates.languages",
      expected: expectedKeys,
      actual: actualKeys,
    })
  }

  for (const [hreflang, expectedUrl] of expected) {
    const actualUrl = actual.get(hreflang)
    if (actualUrl && actualUrl !== expectedUrl) {
      failures.push({
        locale: "config",
        file,
        type: "alternate_language_url_mismatch",
        path: `metadata.alternates.languages.${hreflang}`,
        expected: expectedUrl,
        actual: actualUrl,
      })
    }
  }
}

function getJsonFiles(locale) {
  return fs
    .readdirSync(path.join(messagesDir, locale), { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => entry.name)
    .sort()
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"))
  } catch (error) {
    failures.push({
      locale: path.basename(path.dirname(filePath)),
      file: path.basename(filePath),
      type: "invalid_json",
      path: filePath,
      sample: error instanceof Error ? error.message : String(error),
    })
    return {}
  }
}

function flattenLeaves(value, prefix = "") {
  const out = new Map()
  visit(value, prefix)
  return out

  function visit(current, keyPath) {
    if (Array.isArray(current)) {
      if (current.length === 0) {
        out.set(keyPath, current)
        return
      }
      current.forEach((child, index) => {
        visit(child, keyPath ? `${keyPath}.${index}` : String(index))
      })
      return
    }
    if (current && typeof current === "object" && !Array.isArray(current)) {
      for (const [key, child] of Object.entries(current)) {
        visit(child, keyPath ? `${keyPath}.${key}` : key)
      }
      return
    }
    out.set(keyPath, current)
  }
}

function valueKind(value) {
  if (Array.isArray(value)) return "array"
  if (value === null) return "null"
  return typeof value
}

function extractPlaceholders(value) {
  if (typeof value !== "string") return new Set()
  const placeholders = new Set()
  for (const match of value.matchAll(/\{([A-Za-z_][A-Za-z0-9_]*)[^{}]*\}/g)) {
    placeholders.add(match[1])
  }
  return placeholders
}

function sameSet(a, b) {
  if (a.size !== b.size) return false
  for (const item of a) {
    if (!b.has(item)) return false
  }
  return true
}

function hasLetters(value) {
  return /[A-Za-z]/.test(value)
}

function renderConsole(report) {
  const lines = []
  lines.push("Localization audit")
  lines.push(`Locales: ${report.summary.localeCount}; files per locale: ${report.summary.fileCount}`)
  lines.push(`Failures: ${report.summary.failureCount}; warnings: ${report.summary.warningCount}`)
  lines.push("")
  for (const summary of report.localeSummaries) {
    lines.push(
      `${summary.locale.padEnd(6)} missing=${summary.missingKeys} extra=${summary.extraKeys} type=${summary.typeMismatches} placeholders=${summary.placeholderMismatches} polluted=${summary.pollutedStrings} empty=${summary.emptyStrings}`
    )
  }
  if (report.failures.length > 0) {
    lines.push("")
    lines.push("Top failures:")
    for (const failure of report.failures.slice(0, 40)) {
      lines.push(`- ${failure.locale}/${failure.file}: ${failure.type} ${failure.path}${failure.sample ? ` -> ${failure.sample}` : ""}`)
    }
    if (report.failures.length > 40) {
      lines.push(`... ${report.failures.length - 40} more in artifacts/localization-audit/latest.json`)
    }
  }
  return lines.join("\n")
}

function renderMarkdown(report) {
  const lines = []
  lines.push("# Localization Audit")
  lines.push("")
  lines.push(`- Generated: ${report.generatedAt}`)
  lines.push(`- Source locale: ${report.sourceLocale}`)
  lines.push(`- Locales: ${report.summary.localeCount}`)
  lines.push(`- Message files per locale: ${report.summary.fileCount}`)
  lines.push(`- Failures: ${report.summary.failureCount}`)
  lines.push(`- Warnings: ${report.summary.warningCount}`)
  lines.push("")
  lines.push("## Locale Summary")
  lines.push("")
  lines.push("| Locale | Missing | Extra | Type | Placeholders | Polluted | Empty | EN copies |")
  lines.push("| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |")
  for (const summary of report.localeSummaries) {
    lines.push(
      `| ${summary.locale} | ${summary.missingKeys} | ${summary.extraKeys} | ${summary.typeMismatches} | ${summary.placeholderMismatches} | ${summary.pollutedStrings} | ${summary.emptyStrings} | ${summary.englishCopies} |`
    )
  }
  if (report.failures.length > 0) {
    lines.push("")
    lines.push("## Failures")
    lines.push("")
    lines.push("| Locale | File | Type | Path | Sample |")
    lines.push("| --- | --- | --- | --- | --- |")
    for (const failure of report.failures.slice(0, 500)) {
      lines.push(
        `| ${failure.locale} | ${failure.file} | ${failure.type} | ${failure.path} | ${(failure.sample ?? "").replace(/\|/g, "\\|")} |`
      )
    }
    if (report.failures.length > 500) {
      lines.push(`| ... | ... | ... | ... | ${report.failures.length - 500} more in latest.json |`)
    }
  }
  if (report.warnings.length > 0) {
    lines.push("")
    lines.push("## Warnings")
    lines.push("")
    for (const warning of report.warnings) {
      lines.push(`- ${warning.locale}: ${warning.message}`)
    }
  }
  return `${lines.join("\n")}\n`
}
