import { expect, test } from "@playwright/test"

const liveEndpoint = "**/api/agent-economy/live"

test("homepage reads the live summary and recovers after a failed refresh", async ({ page }) => {
  await page.clock.install()
  let next: "initial" | "failure" | "recovered" = "initial"
  await page.route(liveEndpoint, (route) => {
    if (next === "failure") return route.fulfill({ status: 503, body: "" })
    return route.fulfill({
      json: {
        ok: true,
        generated_at: new Date().toISOString(),
        summary: { gates_live: next === "initial" ? 0 : 4, gates_total: 7 },
      },
    })
  })

  const initialResponse = page.waitForResponse(liveEndpoint)
  await page.goto("/", { waitUntil: "domcontentloaded" })
  expect((await initialResponse).status()).toBe(200)
  const link = page.getByRole("link", { name: /live gates/i })
  const count = link.getByRole("status")
  await expect(count).toHaveText("0 / 7")
  await expect(link).toHaveAttribute("href", "/agent-economy/proofs")
  next = "failure"
  await page.clock.fastForward(61_000)
  await expect(count).toHaveText("Status unavailable")
  next = "recovered"
  await page.clock.fastForward(61_000)
  await expect(count).toHaveText("4 / 7")
})

test("the count expires between polls when generation and CDN age leave one second", async ({ page }) => {
  await page.clock.install({ time: new Date("2026-11-19T12:00:00Z") })
  await page.clock.pauseAt(new Date("2026-11-19T12:00:01Z"))
  let requests = 0
  await page.route(liveEndpoint, (route) => {
    requests++
    return route.fulfill({
      headers: { date: "Mon, 01 Jun 2026 12:01:30 GMT", age: "89" },
      json: {
        ok: true,
        generated_at: "2026-06-01T12:00:00Z",
        summary: { gates_live: 3, gates_total: 5 },
      },
    })
  })
  await Promise.all([
    page.waitForResponse(liveEndpoint),
    page.goto("/", { waitUntil: "domcontentloaded" }),
  ])
  const count = page.getByRole("link", { name: /live gates/i }).getByRole("status")
  await expect(count).toHaveText("3 / 5")
  const initialRequests = requests
  await page.clock.fastForward(999)
  await expect(count).toHaveText("3 / 5")
  await page.clock.fastForward(1)
  await expect(count).toHaveText("Status unavailable")
  expect(requests).toBe(initialRequests)
})

test("Russian homepage suppresses malformed and expired counts", async ({ page }) => {
  let expired = false
  await page.route(liveEndpoint, (route) => route.fulfill({
    json: {
      ok: true,
      generated_at: new Date(expired ? 0 : Date.now()).toISOString(),
      summary: { gates_live: expired ? 3 : 8, gates_total: 7 },
    },
  }))

  await Promise.all([
    page.waitForResponse(liveEndpoint),
    page.goto("/ru", { waitUntil: "domcontentloaded" }),
  ])
  const count = page.getByRole("link", { name: /пройденные проверки/i }).getByRole("status")
  await expect(count).toHaveText("Статус недоступен")
  expired = true
  await Promise.all([
    page.waitForResponse(liveEndpoint),
    page.reload({ waitUntil: "domcontentloaded" }),
  ])
  await expect(count).toHaveText("Статус недоступен")
})

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false })

  test("the static homepage links to the proof explorer without claiming a live count", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" })
    const link = page.getByRole("link", { name: /live gates/i })
    await expect(link).toHaveAttribute("href", "/agent-economy/proofs")
    await expect(link.getByRole("status")).toHaveText("View More")
  })
})
