import "server-only"

export interface ServiceUrlPolicy {
  requireHttpsInProduction?: boolean
  allowPrivateHostsInProduction?: boolean
}

export function parseServiceUrl(raw: string, policy: ServiceUrlPolicy = {}): URL {
  const url = new URL(raw)
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("service URL must use http or https")
  }
  if (url.username || url.password) {
    throw new Error("service URL must not include credentials")
  }
  if (
    process.env.NODE_ENV === "production" &&
    policy.requireHttpsInProduction !== false &&
    url.protocol !== "https:"
  ) {
    throw new Error("service URL must use https in production")
  }
  if (
    process.env.NODE_ENV === "production" &&
    !policy.allowPrivateHostsInProduction &&
    isPrivateHostname(url.hostname)
  ) {
    throw new Error("service URL must not target a private host in production")
  }
  return url
}

export function isPrivateHostname(hostname: string): boolean {
  const host = hostname.replace(/^\[|\]$/g, "").toLowerCase()
  if (host === "localhost" || host === "::1" || host === "0:0:0:0:0:0:0:1") return true
  if (host.startsWith("fc") || host.startsWith("fd") || host.startsWith("fe80:")) return true

  const parts = host.split(".").map((part) => Number(part))
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) {
    return false
  }

  const [a, b] = parts
  return (
    a === 10 ||
    a === 127 ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168)
  )
}
