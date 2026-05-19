import { timingSafeEqual } from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/config/site-config'

// IndexNow protocol — instant URL submission to Bing, Yandex, Seznam, Naver, Yep.
// Spec: https://www.indexnow.org/

const INDEXNOW_KEY = '8106c90c69c3ebc6f99f558b5758ffdf16bca194a8cfef158942a22b44bf10be'
const HOST = new URL(siteConfig.siteUrl).host
const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
]
const MAX_BODY_BYTES = 256 * 1024
const MAX_URLS_PER_SUBMISSION = 1000

interface SubmitBody {
  urls: string[]
  secret?: string
}

export async function POST(req: NextRequest) {
  const expectedSecret = process.env.INDEXNOW_TRIGGER_SECRET
  if (!expectedSecret && process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'INDEXNOW_TRIGGER_SECRET is required' }, { status: 503 })
  }

  let body: SubmitBody
  try {
    body = await readLimitedJson(req)
  } catch (error) {
    const tooLarge = error instanceof Error && error.message === 'request body too large'
    return NextResponse.json(
      { error: tooLarge ? 'request body too large' : 'invalid JSON body' },
      { status: tooLarge ? 413 : 400 },
    )
  }

  if (expectedSecret && !constantTimeEquals(body.secret ?? '', expectedSecret)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  if (!Array.isArray(body.urls) || body.urls.length === 0) {
    return NextResponse.json({ error: 'urls array required' }, { status: 400 })
  }
  if (body.urls.length > MAX_URLS_PER_SUBMISSION) {
    return NextResponse.json({ error: `max ${MAX_URLS_PER_SUBMISSION} urls per submission` }, { status: 400 })
  }

  // All URLs must be on the verified host
  const invalid = body.urls.find((u) => !isAllowedSiteUrl(u))
  if (invalid) {
    return NextResponse.json({ error: `URL not on ${siteConfig.siteUrl}: ${invalid}` }, { status: 400 })
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${siteConfig.siteUrl}/${INDEXNOW_KEY}.txt`,
    urlList: body.urls,
  }

  // Submit to all endpoints in parallel; one notification fans out to all participating engines
  const results = await Promise.allSettled(
    ENDPOINTS.map((endpoint) =>
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      }).then((r) => ({ endpoint, status: r.status }))
    )
  )

  return NextResponse.json({
    submitted: body.urls.length,
    endpoints: results.map((r) =>
      r.status === 'fulfilled' ? r.value : { error: String(r.reason) }
    ),
  })
}

async function readLimitedJson(req: NextRequest): Promise<SubmitBody> {
  const length = Number(req.headers.get('content-length') ?? '0')
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
    throw new Error('request body too large')
  }
  const text = await req.text()
  if (text.length > MAX_BODY_BYTES) {
    throw new Error('request body too large')
  }
  return JSON.parse(text) as SubmitBody
}

function isAllowedSiteUrl(value: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && url.host === HOST && url.pathname.startsWith('/')
  } catch {
    return false
  }
}

function constantTimeEquals(actual: string, expected: string): boolean {
  const actualBuffer = Buffer.from(actual)
  const expectedBuffer = Buffer.from(expected)
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer)
}

export async function GET() {
  return NextResponse.json({
    protocol: 'IndexNow',
    spec: 'https://www.indexnow.org/',
    host: HOST,
    keyLocation: `${siteConfig.siteUrl}/${INDEXNOW_KEY}.txt`,
    usage: {
      method: 'POST',
      body: { urls: ['https://www.ergoblockchain.org/...'], secret: '<INDEXNOW_TRIGGER_SECRET>' },
    },
  })
}
