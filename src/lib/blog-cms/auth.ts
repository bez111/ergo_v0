import "server-only"
import { timingSafeEqual } from "node:crypto"

export interface BlogAdminAuthResult {
  ok: boolean
  status?: number
  error?: string
  devBypass?: boolean
}

export function isBlogAdminConfigured(): boolean {
  return Boolean(process.env.BLOG_ADMIN_TOKEN)
}

export function checkBlogAdminAuth(request: Request): BlogAdminAuthResult {
  const expected = process.env.BLOG_ADMIN_TOKEN

  if (!expected) {
    if (process.env.NODE_ENV === "production") {
      return {
        ok: false,
        status: 503,
        error: "BLOG_ADMIN_TOKEN is not configured",
      }
    }
    return { ok: true, devBypass: true }
  }

  const authorization = request.headers.get("authorization") ?? ""
  const bearer = authorization.toLowerCase().startsWith("bearer ")
    ? authorization.slice(7).trim()
    : ""
  const headerToken = request.headers.get("x-blog-admin-token")?.trim() ?? ""

  if (constantTimeEquals(bearer, expected) || constantTimeEquals(headerToken, expected)) {
    return { ok: true }
  }

  return {
    ok: false,
    status: 401,
    error: "Invalid blog admin token",
  }
}

function constantTimeEquals(actual: string, expected: string): boolean {
  const actualBuffer = Buffer.from(actual)
  const expectedBuffer = Buffer.from(expected)
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer)
}
