import { chromium } from "playwright"

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3001"
const NAVIGATION_TIMEOUT_MS = 45_000
const ASSERTION_TIMEOUT_MS = 10_000

const results = []

function record(ok, name, detail = "") {
  results.push({ ok, name, detail })
}

async function makePage(browser, viewport) {
  const page = await browser.newPage({
    viewport,
    deviceScaleFactor: viewport.width < 600 ? 2 : 1,
    isMobile: viewport.width < 600,
  })
  page.setDefaultTimeout(NAVIGATION_TIMEOUT_MS)
  return page
}

async function clickAndExpect({
  browser,
  viewport,
  name,
  start,
  selector,
  expectedPath,
  expectedURLPart,
}) {
  const page = await makePage(browser, viewport)
  try {
    await page.goto(`${BASE_URL}${start}`, { waitUntil: "domcontentloaded", timeout: NAVIGATION_TIMEOUT_MS })
    await page.waitForTimeout(1_200)
    const target = page.locator(selector)
    if ((await target.count()) < 1) throw new Error(`selector not found: ${selector}`)

    const clickable = target.filter({ visible: true }).first()
    await clickable.scrollIntoViewIfNeeded()
    const targetAttr = await clickable.getAttribute("target")

    let observedPage = page
    if (targetAttr === "_blank") {
      const [popup] = await Promise.all([
        page.context().waitForEvent("page", { timeout: NAVIGATION_TIMEOUT_MS }),
        clickable.click(),
      ])
      observedPage = popup
      await observedPage.waitForLoadState("domcontentloaded", { timeout: ASSERTION_TIMEOUT_MS }).catch(() => null)
    } else {
      await Promise.all([
        page.waitForURL((url) => {
          if (expectedPath) return url.pathname === expectedPath
          if (expectedURLPart) return url.href.includes(expectedURLPart)
          return true
        }, { timeout: NAVIGATION_TIMEOUT_MS, waitUntil: "commit" }),
        clickable.click(),
      ])
    }

    const url = new URL(observedPage.url())
    if (expectedPath && url.pathname !== expectedPath) {
      throw new Error(`expected path ${expectedPath}, got ${url.pathname}`)
    }
    if (expectedURLPart && !observedPage.url().includes(expectedURLPart)) {
      throw new Error(`expected URL to contain ${expectedURLPart}, got ${observedPage.url()}`)
    }

    record(true, `${viewport.width}w ${name}`, observedPage.url())
    if (observedPage !== page) await observedPage.close()
  } catch (error) {
    record(false, `${viewport.width}w ${name}`, error instanceof Error ? error.message : String(error))
  } finally {
    await page.close()
  }
}

async function openAndAssert({ browser, viewport, name, start, action, assert }) {
  const page = await makePage(browser, viewport)
  try {
    await page.goto(`${BASE_URL}${start}`, { waitUntil: "domcontentloaded", timeout: NAVIGATION_TIMEOUT_MS })
    await page.waitForTimeout(1_200)
    await action(page)
    await assert(page)
    record(true, `${viewport.width}w ${name}`, page.url())
  } catch (error) {
    record(false, `${viewport.width}w ${name}`, error instanceof Error ? error.message : String(error))
  } finally {
    await page.close()
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true })
  const desktop = { width: 1440, height: 1000 }
  const mobile = { width: 390, height: 844 }

  const heroLinks = [
    {
      name: "hero Inspect live proof",
      selector: 'section[role="banner"] a[href="/agent-economy/live"]',
      expectedPath: "/agent-economy/live",
    },
    {
      name: "hero Build first receipt",
      selector: 'section[role="banner"] a[href="/agent-economy/launch-kit"]',
      expectedPath: "/agent-economy/launch-kit",
    },
    {
      name: "proof strip Gates",
      selector: 'section[role="banner"] a[href="/agent-economy/proofs"]',
      expectedPath: "/agent-economy/proofs",
    },
    {
      name: "proof strip Full receipt",
      selector: 'section[role="banner"] a[href^="/r/sage/"]',
      expectedPath: "/r/sage/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81",
    },
  ]

  for (const item of heroLinks) {
    await clickAndExpect({ browser, viewport: desktop, start: "/", ...item })
    await clickAndExpect({ browser, viewport: mobile, start: "/", ...item })
  }

  await clickAndExpect({
    browser,
    viewport: desktop,
    name: "top Get Wallet",
    start: "/",
    selector: 'header a[href="/wallet"]',
    expectedPath: "/wallet",
  })

  await openAndAssert({
    browser,
    viewport: desktop,
    name: "desktop search opens",
    start: "/",
    action: async (page) => {
      await page.waitForTimeout(3_000)
      await page.getByRole("button", { name: /^Search$/ }).click()
    },
    assert: async (page) => {
      const searchInput = page.locator('.fixed.inset-0 input[placeholder*="Search documentation"]').first()
      await searchInput.waitFor({ state: "visible", timeout: ASSERTION_TIMEOUT_MS })
    },
  })

  await openAndAssert({
    browser,
    viewport: desktop,
    name: "desktop language opens",
    start: "/",
    action: async (page) => {
      await page.locator('header button[aria-label="Switch Language"]').click()
    },
    assert: async (page) => {
      const menu = page.locator('[role="menu"], [data-radix-popper-content-wrapper], a[href^="/ru"], a[href^="/de"]')
      if ((await menu.count()) < 1) throw new Error("language menu did not open")
    },
  })

  await openAndAssert({
    browser,
    viewport: mobile,
    name: "mobile hamburger opens and scrolls",
    start: "/",
    action: async (page) => {
      await page.locator('header button:has-text("Toggle menu")').click()
      await page.waitForTimeout(250)
      await page.mouse.wheel(0, 900)
      await page.waitForTimeout(250)
    },
    assert: async (page) => {
      const closeButton = page.locator('button[aria-label*="Close"], button:has-text("×")')
      const learnLink = page.locator("text=Learn").first()
      if ((await closeButton.count()) < 1 && (await learnLink.count()) < 1) {
        throw new Error("mobile drawer did not open or was not scrollable")
      }
    },
  })

  const proofLinks = [
    {
      name: "proof JSON API",
      selector: 'a[href="/api/agent-economy/proofs"]',
      expectedPath: "/api/agent-economy/proofs",
    },
    {
      name: "proof Discovery API",
      selector: 'a[href="/api/agent-economy/discovery"]',
      expectedPath: "/api/agent-economy/discovery",
    },
    {
      name: "proof Live hub",
      selector: 'a[href="/agent-economy/live"]',
      expectedPath: "/agent-economy/live",
    },
    {
      name: "proof Launch kit",
      selector: 'a[href="/agent-economy/launch-kit"]',
      expectedPath: "/agent-economy/launch-kit",
    },
  ]

  for (const item of proofLinks) {
    await clickAndExpect({ browser, viewport: desktop, start: "/agent-economy/proofs", ...item })
  }

  await openAndAssert({
    browser,
    viewport: desktop,
    name: "proof filters switch",
    start: "/agent-economy/proofs",
    action: async (page) => {
      await page.locator('button:has-text("Receipts")').click()
    },
    assert: async (page) => {
      const receiptCard = page.locator('article:has-text("Full Sage receipt bundle")')
      if ((await receiptCard.count()) < 1) throw new Error("receipt card missing after filter")

      const mcpCard = page.locator('article:has-text("Public MCP endpoint")')
      if ((await mcpCard.count()) > 0 && await mcpCard.first().isVisible()) {
        throw new Error("receipt filter did not hide non-receipt cards")
      }
    },
  })

  await browser.close()

  const failed = results.filter((result) => !result.ok)
  for (const result of results) {
    console.log(`${result.ok ? "PASS" : "FAIL"} ${result.name}${result.detail ? ` -> ${result.detail}` : ""}`)
  }
  if (failed.length) process.exitCode = 1
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
