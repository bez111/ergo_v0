#!/usr/bin/env node

import fs from "node:fs/promises"
import path from "node:path"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const { chromium } = require("playwright")

const args = parseArgs(process.argv.slice(2))
const baseUrl = stripTrailingSlash(args["base-url"] ?? process.env.BASE_URL ?? "http://localhost:3001")
const baseOrigin = new URL(baseUrl).origin
const canonicalOrigin = "https://www.ergoblockchain.org"
const viewports = parseViewports(args.viewports ?? "mobile-360:360x740")
const concurrency = toPositiveInt(args.concurrency, 3)
const maxPages = args["max-pages"] ? toPositiveInt(args["max-pages"], 0) : Infinity
const timeoutMs = toPositiveInt(args.timeout, 60_000)
const waitMs = toPositiveInt(args.wait, 600)
const crawlLinks = args["crawl-links"] !== "false"
const screenshotFailures = args.screenshots !== "false"
const discoverOnly = args["discover-only"] === "true"
const statusOnly = args["status-only"] === "true"
const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
const outDir = args.out ?? path.join("artifacts", "mobile-crawl", timestamp)

const ignoredConsolePatterns = [
  /favicon/i,
  /failed to load resource/i,
  /net::err_aborted/i,
  /net::err_failed/i,
  /chrome-extension/i,
]

const assetPathPattern = /\.(?:avif|webp|png|jpe?g|gif|svg|ico|css|js|map|json|xml|txt|pdf|zip|wasm|woff2?|ttf|eot)$/i

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

async function main() {
  await fs.mkdir(outDir, { recursive: true })

  const discovered = await discoverUrls()
  const urls = discovered.slice(0, maxPages)

  if (discoverOnly) {
    const payload = { baseUrl, count: urls.length, urls }
    await writeReports({ payload, pages: [], failures: [], warnings: [], summaryOnly: true })
    console.log(JSON.stringify(payload, null, 2))
    return
  }

  if (statusOnly) {
    console.log(`status crawl: ${urls.length} urls, concurrency ${concurrency}`)
    const pages = await runStatusCrawl(urls)
    const failures = []
    const warnings = []
    for (const page of pages) {
      for (const check of page.checks) {
        if (check.failureReasons.length > 0) failures.push({ path: page.path, ...check })
        if (check.warningReasons.length > 0) warnings.push({ path: page.path, ...check })
      }
    }

    const payload = {
      generatedAt: new Date().toISOString(),
      baseUrl,
      viewports: [{ name: "status", width: 0, height: 0 }],
      crawlLinks: false,
      discoveredUrlCount: urls.length,
      checkedPageCount: pages.length,
      checkedViewCount: pages.length,
      failureCount: failures.length,
      warningCount: warnings.length,
      pages,
      failures,
      warnings,
    }
    await writeReports({ payload, pages, failures, warnings })
    console.log(
      JSON.stringify(
        {
          checkedPageCount: payload.checkedPageCount,
          failureCount: failures.length,
          warningCount: warnings.length,
          report: path.join(outDir, "report.md"),
        },
        null,
        2
      )
    )
    if (failures.length > 0) process.exit(1)
    return
  }

  console.log(
    `mobile crawl: ${urls.length} urls, ${viewports.map((v) => v.name).join(", ")}, concurrency ${concurrency}`
  )

  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  })

  const state = {
    queue: [...urls],
    seen: new Set(urls),
    nextIndex: 0,
    pages: [],
  }

  const workers = Array.from({ length: concurrency }, (_, index) => runWorker(browser, state, index + 1))
  await Promise.all(workers)
  await browser.close()

  state.pages.sort((a, b) => a.path.localeCompare(b.path))
  const failures = []
  const warnings = []

  for (const pageResult of state.pages) {
    for (const check of pageResult.checks) {
      if (check.failureReasons.length > 0) failures.push({ path: pageResult.path, ...check })
      if (check.warningReasons.length > 0) warnings.push({ path: pageResult.path, ...check })
    }
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    viewports,
    crawlLinks,
    discoveredUrlCount: state.seen.size,
    checkedPageCount: state.pages.length,
    checkedViewCount: state.pages.reduce((sum, page) => sum + page.checks.length, 0),
    failureCount: failures.length,
    warningCount: warnings.length,
    pages: state.pages,
    failures,
    warnings,
  }

  await writeReports({ payload, pages: state.pages, failures, warnings })

  console.log(
    JSON.stringify(
      {
        checkedPageCount: payload.checkedPageCount,
        checkedViewCount: payload.checkedViewCount,
        failureCount: failures.length,
        warningCount: warnings.length,
        report: path.join(outDir, "report.md"),
      },
      null,
      2
    )
  )

  if (failures.length > 0) process.exit(1)
}

async function runStatusCrawl(urls) {
  const pages = []
  let index = 0

  async function worker() {
    while (index < urls.length) {
      const pathName = urls[index++]
      const check = await checkStatus(pathName)
      pages.push({ path: pathName, checks: [check] })
      if (pages.length % 100 === 0 || check.failureReasons.length > 0) {
        console.log(`${check.failureReasons.length ? "FAIL" : "OK"} status ${pathName} (${pages.length}/${urls.length})`)
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker))
  return pages.sort((a, b) => a.path.localeCompare(b.path))
}

async function checkStatus(pathName) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  let status = 0
  let bodyTextLength = 0
  const failureReasons = []
  const warningReasons = []

  try {
    const response = await fetch(`${baseUrl}${pathName}`, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "ergo-mobile-crawl/1.0",
      },
    })
    status = response.status
    const body = await response.text()
    bodyTextLength = body.length
    const lowerBody = body.toLowerCase()
    const badBody =
      lowerBody.includes("application error") ||
      lowerBody.includes("internal server error") ||
      lowerBody.includes("this page could not be found")
    if (status >= 400) failureReasons.push(`http ${status}`)
    if (badBody) failureReasons.push("app error body")
    if (bodyTextLength < 500) warningReasons.push(`short body ${bodyTextLength}`)
  } catch (error) {
    failureReasons.push(`fetch: ${String(error?.message || error).slice(0, 500)}`)
  } finally {
    clearTimeout(timer)
  }

  return {
    viewport: "status",
    width: 0,
    height: 0,
    status,
    failureReasons,
    warningReasons,
    documentWidth: 0,
    viewportWidth: 0,
    bodyTextLength,
    offenders: [],
    tinyTargets: [],
    clippedText: [],
    fixedOverflow: [],
    consoleErrors: [],
    pageErrors: [],
    requestFailures: [],
    discoveredLinks: [],
    screenshot: null,
  }
}

async function discoverUrls() {
  if (args["paths-file"]) {
    const raw = await fs.readFile(args["paths-file"], "utf8")
    return raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => normalizeInternalPath(line))
      .filter(Boolean)
      .filter(isHtmlRoute)
      .filter(unique())
      .sort((a, b) => a.localeCompare(b))
  }

  const sitemapUrls = await discoverFromSitemaps()
  const seeds = new Set(["/", "/blog", "/docs/developers/cryptographic-primitives", ...sitemapUrls])
  return [...seeds].filter(isHtmlRoute).sort((a, b) => a.localeCompare(b))
}

async function discoverFromSitemaps() {
  const sitemapQueue = ["/sitemap.xml"]
  const seenSitemaps = new Set()
  const pages = new Set()

  while (sitemapQueue.length > 0) {
    const sitemapPath = sitemapQueue.shift()
    if (!sitemapPath || seenSitemaps.has(sitemapPath)) continue
    seenSitemaps.add(sitemapPath)

    let xml = ""
    try {
      const response = await fetch(`${baseUrl}${sitemapPath}`)
      if (!response.ok) continue
      xml = await response.text()
    } catch {
      continue
    }

    for (const loc of extractLocs(xml)) {
      const normalized = normalizeInternalPath(loc)
      if (!normalized) continue
      if (normalized.endsWith(".xml")) {
        sitemapQueue.push(normalized)
      } else if (isHtmlRoute(normalized)) {
        pages.add(normalized)
      }
    }
  }

  return [...pages]
}

async function runWorker(browser, state, workerId) {
  while (state.nextIndex < state.queue.length && state.pages.length < maxPages) {
    const pathName = state.queue[state.nextIndex++]
    if (!pathName) continue

    const pageResult = { path: pathName, checks: [] }

    for (const viewport of viewports) {
      const check = await checkRoute(browser, pathName, viewport, workerId).catch((error) => ({
        viewport: viewport.name,
        width: viewport.width,
        height: viewport.height,
        status: 0,
        failureReasons: [`worker exception: ${String(error?.message || error).slice(0, 500)}`],
        warningReasons: [],
        documentWidth: 0,
        viewportWidth: viewport.width,
        bodyTextLength: 0,
        offenders: [],
        tinyTargets: [],
        clippedText: [],
        fixedOverflow: [],
        consoleErrors: [],
        pageErrors: [],
        requestFailures: [],
        discoveredLinks: [],
        screenshot: null,
        workerId,
      }))
      pageResult.checks.push(check)

      if (crawlLinks && check.discoveredLinks?.length) {
        for (const link of check.discoveredLinks) {
          if (state.seen.has(link) || !isHtmlRoute(link)) continue
          if (state.queue.length >= maxPages) continue
          state.seen.add(link)
          state.queue.push(link)
        }
      }
    }

    state.pages.push(pageResult)
    const failed = pageResult.checks.some((check) => check.failureReasons.length > 0)
    console.log(`${failed ? "FAIL" : "OK"} ${pathName} (${state.pages.length}/${state.queue.length})`)
  }
}

async function checkRoute(browser, pathName, viewport, workerId) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: viewport.deviceScaleFactor ?? 1,
    isMobile: true,
    hasTouch: true,
  })

  const consoleErrors = []
  const pageErrors = []
  const requestFailures = []

  page.on("console", (message) => {
    if (message.type() !== "error") return
    const text = message.text()
    if (ignoredConsolePatterns.some((pattern) => pattern.test(text))) return
    consoleErrors.push(text.slice(0, 500))
  })

  page.on("pageerror", (error) => {
    pageErrors.push(String(error?.message || error).slice(0, 500))
  })

  page.on("requestfailed", (request) => {
    const url = request.url()
    if (!isLocalRequest(url)) return
    requestFailures.push(`${request.failure()?.errorText || "failed"} ${url}`.slice(0, 500))
  })

  await page.route("**/*", async (route) => {
    const requestUrl = route.request().url()
    if (requestUrl.startsWith("data:") || requestUrl.startsWith("blob:")) {
      await route.continue()
      return
    }
    if (isBaseRequest(requestUrl)) {
      await route.continue()
      return
    }
    if (isCanonicalRequest(requestUrl)) {
      const parsed = new URL(requestUrl)
      const localUrl = `${baseOrigin}${parsed.pathname}${parsed.search}`
      try {
        const response = await route.fetch({ url: localUrl })
        await route.fulfill({ response })
      } catch {
        await route.abort()
      }
      return
    }
    await route.abort()
  })

  const url = `${baseUrl}${pathName}`
  let responseStatus = 0
  let navigationError = null

  try {
    const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: timeoutMs })
    responseStatus = response?.status() ?? 0
    await page.waitForTimeout(waitMs)
  } catch (error) {
    navigationError = String(error?.message || error).slice(0, 500)
  }

  const metrics = navigationError ? emptyMetrics(viewport) : await collectMetrics(page, viewport.width)
  const failureReasons = []
  const warningReasons = []

  if (navigationError) failureReasons.push(`navigation: ${navigationError}`)
  if (responseStatus >= 400 || responseStatus === 0) failureReasons.push(`http ${responseStatus}`)
  if (metrics.badBody) failureReasons.push("app error body")
  if (metrics.documentWidth > viewport.width + 2) {
    failureReasons.push(`horizontal overflow ${metrics.documentWidth} > ${viewport.width}`)
  }
  if (pageErrors.length > 0) failureReasons.push(`page errors ${pageErrors.length}`)
  if (consoleErrors.length > 0) failureReasons.push(`console errors ${consoleErrors.length}`)
  if (requestFailures.length > 0) warningReasons.push(`local request failures ${requestFailures.length}`)
  if (metrics.tinyTargets.length > 0) warningReasons.push(`small tap targets ${metrics.tinyTargets.length}`)
  if (metrics.clippedText.length > 0) warningReasons.push(`possible clipped text ${metrics.clippedText.length}`)
  if (metrics.fixedOverflow.length > 0) warningReasons.push(`fixed overflow ${metrics.fixedOverflow.length}`)

  let screenshot = null
  if (screenshotFailures && failureReasons.length > 0) {
    const screenshotDir = path.join(outDir, "screenshots")
    await fs.mkdir(screenshotDir, { recursive: true })
    screenshot = path.join(
      screenshotDir,
      `${safeFileName(`${viewport.name}-${pathName}`)}.png`
    )
    await page.screenshot({ path: screenshot, fullPage: false })
  }

  await page.close()

  return {
    viewport: viewport.name,
    width: viewport.width,
    height: viewport.height,
    status: responseStatus,
    failureReasons,
    warningReasons,
    documentWidth: metrics.documentWidth,
    viewportWidth: metrics.viewportWidth,
    bodyTextLength: metrics.bodyTextLength,
    offenders: metrics.offenders,
    tinyTargets: metrics.tinyTargets,
    clippedText: metrics.clippedText,
    fixedOverflow: metrics.fixedOverflow,
    consoleErrors,
    pageErrors,
    requestFailures,
    discoveredLinks: metrics.discoveredLinks,
    screenshot,
    workerId,
  }
}

async function collectMetrics(page, expectedViewportWidth) {
  return await page.evaluate(
    ({ expectedViewportWidth }) => {
      const viewportWidth = document.documentElement.clientWidth
      const documentWidth = Math.max(
        document.documentElement.scrollWidth,
        document.body?.scrollWidth || 0
      )
      const bodyText = document.body?.innerText || ""
      const lowerBody = bodyText.toLowerCase()
      const badBody =
        lowerBody.includes("application error") ||
        lowerBody.includes("internal server error") ||
        lowerBody.includes("this page could not be found")

      const allElements = Array.from(document.querySelectorAll("body *"))
      const offenders = allElements
        .map(toElementInfo)
        .filter((info) => {
          if (!info || info.width <= 0) return false
          if (isIgnoredInfo(info)) return false
          if (info.right <= expectedViewportWidth + 2 && info.left >= -2) return false
          return true
        })
        .slice(0, 12)

      const tinyTargets = allElements
        .filter(isInteractive)
        .map(toElementInfo)
        .filter(Boolean)
        .filter((info) => {
          if (isIgnoredInfo(info)) return false
          if (info.top < 0 || info.top > window.innerHeight) return false
          if (info.width === 0 || info.height === 0) return false
          return info.width < 36 || info.height < 36
        })
        .slice(0, 12)

      const clippedText = allElements
        .filter((el) => {
          if (!(el instanceof HTMLElement)) return false
          const text = (el.textContent || "").trim()
          if (text.length < 8) return false
          const style = window.getComputedStyle(el)
          if (style.display === "none" || style.visibility === "hidden") return false
          if (el.closest(".monaco-editor")) return false
          if (el.closest(".overflow-x-auto,[class*='overflow-x-auto'],.md-table-scroll")) return false
          return el.scrollWidth > el.clientWidth + 4 && style.overflowX !== "auto" && style.overflowX !== "scroll"
        })
        .map(toElementInfo)
        .filter(Boolean)
        .slice(0, 12)

      const fixedOverflow = allElements
        .filter((el) => {
          const style = window.getComputedStyle(el)
          return style.position === "fixed" || style.position === "sticky"
        })
        .map(toElementInfo)
        .filter(Boolean)
        .filter((info) => {
          if (isIgnoredInfo(info)) return false
          return info.left < -2 || info.right > expectedViewportWidth + 2
        })
        .slice(0, 12)

      const discoveredLinks = Array.from(document.querySelectorAll("a[href]"))
        .map((anchor) => anchor.getAttribute("href") || "")
        .filter(Boolean)

      function toElementInfo(el) {
        if (!(el instanceof Element)) return null
        const rect = el.getBoundingClientRect()
        const style = window.getComputedStyle(el)
        return {
          tag: el.tagName.toLowerCase(),
          cls: (el.getAttribute("class") || "").slice(0, 180),
          text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 140),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          top: Math.round(rect.top),
          bottom: Math.round(rect.bottom),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          overflowX: style.overflowX,
          position: style.position,
        }
      }

      function isIgnoredInfo(info) {
        return (
          info.cls.includes("skip-link") ||
          info.cls.includes("monaco") ||
          info.cls.includes("sr-only") ||
          info.width > 1_000_000
        )
      }

      function isInteractive(el) {
        if (!(el instanceof HTMLElement)) return false
        const tag = el.tagName.toLowerCase()
        if (["a", "button", "input", "select", "textarea", "summary"].includes(tag)) return true
        const role = el.getAttribute("role")
        return ["button", "link", "tab", "menuitem", "checkbox", "radio"].includes(role || "")
      }

      return {
        viewportWidth,
        documentWidth,
        bodyTextLength: bodyText.length,
        badBody,
        offenders,
        tinyTargets,
        clippedText,
        fixedOverflow,
        discoveredLinks,
      }
    },
    { expectedViewportWidth }
  )
}

function emptyMetrics(viewport) {
  return {
    viewportWidth: viewport.width,
    documentWidth: 0,
    bodyTextLength: 0,
    badBody: false,
    offenders: [],
    tinyTargets: [],
    clippedText: [],
    fixedOverflow: [],
    discoveredLinks: [],
  }
}

async function writeReports({ payload, pages, failures, warnings, summaryOnly = false }) {
  await fs.mkdir(outDir, { recursive: true })
  await fs.writeFile(path.join(outDir, "results.json"), `${JSON.stringify(payload, null, 2)}\n`)
  await fs.writeFile(path.join(outDir, "report.md"), renderMarkdownReport(payload, pages, failures, warnings, summaryOnly))
}

function renderMarkdownReport(payload, pages, failures, warnings, summaryOnly) {
  const lines = []
  lines.push("# Mobile Crawl QA Report")
  lines.push("")
  lines.push(`- Generated: ${payload.generatedAt ?? new Date().toISOString()}`)
  lines.push(`- Base URL: ${payload.baseUrl ?? baseUrl}`)
  lines.push(`- Viewports: ${(payload.viewports ?? viewports).map((v) => `${v.name} ${v.width}x${v.height}`).join(", ")}`)
  lines.push(`- URLs discovered: ${payload.discoveredUrlCount ?? payload.count ?? 0}`)
  if (summaryOnly) {
    lines.push("")
    lines.push("Discover-only run.")
    lines.push("")
    for (const url of payload.urls ?? []) lines.push(`- ${url}`)
    return `${lines.join("\n")}\n`
  }
  lines.push(`- Pages checked: ${payload.checkedPageCount}`)
  lines.push(`- View checks: ${payload.checkedViewCount}`)
  lines.push(`- Failures: ${payload.failureCount}`)
  lines.push(`- Warnings: ${payload.warningCount}`)
  lines.push("")

  if (failures.length > 0) {
    lines.push("## Failures")
    lines.push("")
    lines.push("| Path | Viewport | Reasons | Width | Screenshot |")
    lines.push("| --- | --- | --- | --- | --- |")
    for (const failure of failures) {
      lines.push(
        `| ${failure.path} | ${failure.viewport} | ${failure.failureReasons.join("<br>")} | ${failure.documentWidth}/${failure.width} | ${failure.screenshot ?? ""} |`
      )
    }
    lines.push("")
  }

  if (warnings.length > 0) {
    lines.push("## Warnings")
    lines.push("")
    lines.push("| Path | Viewport | Reasons |")
    lines.push("| --- | --- | --- |")
    for (const warning of warnings.slice(0, 200)) {
      lines.push(`| ${warning.path} | ${warning.viewport} | ${warning.warningReasons.join("<br>")} |`)
    }
    if (warnings.length > 200) lines.push(`| ... | ... | ${warnings.length - 200} more warnings in results.json |`)
    lines.push("")
  }

  lines.push("## Checked Pages")
  lines.push("")
  lines.push("| Path | Status | Viewports |")
  lines.push("| --- | --- | --- |")
  for (const page of pages) {
    const status = page.checks.some((check) => check.failureReasons.length > 0) ? "FAIL" : "OK"
    const viewportText = page.checks.map((check) => `${check.viewport}: ${check.documentWidth}/${check.width}`).join("<br>")
    lines.push(`| ${page.path} | ${status} | ${viewportText} |`)
  }

  return `${lines.join("\n")}\n`
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((match) => decodeXml(match[1]))
}

function normalizeInternalPath(raw) {
  if (!raw) return null
  let parsed
  try {
    parsed = new URL(raw, baseUrl)
  } catch {
    return null
  }
  if (![baseOrigin, canonicalOrigin].includes(parsed.origin)) return null
  let pathname = parsed.pathname || "/"
  if (pathname.length > 1) pathname = pathname.replace(/\/+$/, "")
  return pathname
}

function isHtmlRoute(pathname) {
  if (!pathname || !pathname.startsWith("/")) return false
  if (pathname.startsWith("/api/")) return false
  if (pathname.startsWith("/_next/")) return false
  if (pathname.startsWith("/sitemaps/")) return false
  if (pathname === "/sitemap.xml" || pathname === "/robots.txt") return false
  if (pathname.includes("/rss.xml") || pathname.includes("/feed.json")) return false
  if (assetPathPattern.test(pathname)) return false
  return true
}

function isLocalRequest(rawUrl) {
  return isBaseRequest(rawUrl) || isCanonicalRequest(rawUrl)
}

function isBaseRequest(rawUrl) {
  try {
    const parsed = new URL(rawUrl)
    return parsed.origin === baseOrigin
  } catch {
    return false
  }
}

function isCanonicalRequest(rawUrl) {
  try {
    const parsed = new URL(rawUrl)
    return parsed.origin === canonicalOrigin
  } catch {
    return false
  }
}

function parseViewports(raw) {
  return String(raw)
    .split(",")
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      const [namePart, sizePart] = chunk.includes(":") ? chunk.split(":") : [chunk, chunk]
      const [width, height] = sizePart.split("x").map((value) => Number(value))
      if (!Number.isFinite(width) || !Number.isFinite(height)) {
        throw new Error(`Invalid viewport: ${chunk}`)
      }
      return { name: namePart, width, height }
    })
}

function parseArgs(argv) {
  const parsed = {}
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (!arg.startsWith("--")) continue
    const trimmed = arg.slice(2)
    if (trimmed.includes("=")) {
      const [key, ...rest] = trimmed.split("=")
      parsed[key] = rest.join("=")
    } else {
      const next = argv[i + 1]
      if (next && !next.startsWith("--")) {
        parsed[trimmed] = next
        i++
      } else {
        parsed[trimmed] = "true"
      }
    }
  }
  return parsed
}

function toPositiveInt(value, fallback) {
  if (value === undefined || value === null) return fallback
  const parsed = Number(value)
  if (!Number.isFinite(parsed) || parsed < 0) return fallback
  return Math.trunc(parsed)
}

function decodeXml(value) {
  return String(value)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function stripTrailingSlash(value) {
  return String(value).replace(/\/$/, "")
}

function safeFileName(value) {
  return value.replace(/[^a-z0-9._-]+/gi, "-").replace(/^-+|-+$/g, "").slice(0, 160)
}

function unique() {
  const seen = new Set()
  return (value) => {
    if (seen.has(value)) return false
    seen.add(value)
    return true
  }
}
