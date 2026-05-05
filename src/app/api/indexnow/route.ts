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

interface SubmitBody {
  urls: string[]
  secret?: string
}

export async function POST(req: NextRequest) {
  // Optional shared-secret guard so random clients can't trigger submissions
  const expectedSecret = process.env.INDEXNOW_TRIGGER_SECRET
  const body = (await req.json()) as SubmitBody
  if (expectedSecret && body.secret !== expectedSecret) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  if (!Array.isArray(body.urls) || body.urls.length === 0) {
    return NextResponse.json({ error: 'urls array required' }, { status: 400 })
  }
  if (body.urls.length > 10000) {
    return NextResponse.json({ error: 'max 10,000 urls per submission' }, { status: 400 })
  }

  // All URLs must be on the verified host
  const invalid = body.urls.find((u) => !u.startsWith(siteConfig.siteUrl))
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
