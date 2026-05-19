import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { rateLimit, apiLimiter } from '@/lib/rate-limiter'

interface WebVitalMetric {
  name: string
  value: number
  id: string
  delta: number
  rating: 'good' | 'needs-improvement' | 'poor'
  navigationType: string
  url: string
  timestamp: number
}

// In-memory storage for Web Vitals (replace with database in production)
const webVitalsData: WebVitalMetric[] = []
const MAX_BODY_BYTES = 16 * 1024
const VALID_METRICS = new Set(['LCP', 'INP', 'CLS', 'FCP', 'TTFB'])

export async function POST(request: NextRequest) {
  const rateLimitResult = await rateLimit(request, apiLimiter)
  if (rateLimitResult) return rateLimitResult

  try {
    const metric: WebVitalMetric = JSON.parse(await readLimitedBody(request))
    
    // Validate metric data
    if (!VALID_METRICS.has(metric.name) || typeof metric.value !== 'number' || !Number.isFinite(metric.value)) {
      return NextResponse.json({ error: 'Invalid metric data' }, { status: 400 })
    }
    metric.url = typeof metric.url === 'string' ? metric.url.slice(0, 2048) : ''

    // Get request metadata
    const headersList = await headers()
    const userAgent = headersList.get('user-agent') || ''
    const forwarded = headersList.get('x-forwarded-for')
    const ipAddress = forwarded ? forwarded.split(',')[0] : 
                     headersList.get('x-real-ip') || 'unknown'

    // Store metric with metadata
    const enrichedMetric = {
      ...metric,
      userAgent,
      ipAddress,
      receivedAt: new Date().toISOString()
    }

    webVitalsData.push(enrichedMetric)

    // Keep only last 1000 metrics to prevent memory issues
    if (webVitalsData.length > 1000) {
      webVitalsData.splice(0, webVitalsData.length - 1000)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof Error && error.message === 'request body too large') {
      return NextResponse.json({ error: 'Metric payload too large' }, { status: 413 })
    }
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }
    if (process.env.NODE_ENV === 'development') console.error('Error storing Web Vital:', error)
    return NextResponse.json({ error: 'Failed to store metric' }, { status: 500 })
  }
}

async function readLimitedBody(request: NextRequest): Promise<string> {
  const length = Number(request.headers.get('content-length') ?? '0')
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) throw new Error('request body too large')
  const text = await request.text()
  if (text.length > MAX_BODY_BYTES) throw new Error('request body too large')
  return text
}

// Get Web Vitals statistics
export async function GET() {
  try {
    const now = Date.now()
    const last24h = webVitalsData.filter(m => now - m.timestamp < 24 * 60 * 60 * 1000)
    
    const stats = {
      totalMetrics: webVitalsData.length,
      last24h: last24h.length,
      metrics: {
        LCP: calculateStats(last24h.filter(m => m.name === 'LCP')),
        FID: calculateStats(last24h.filter(m => m.name === 'FID')),
        CLS: calculateStats(last24h.filter(m => m.name === 'CLS')),
        FCP: calculateStats(last24h.filter(m => m.name === 'FCP')),
        TTFB: calculateStats(last24h.filter(m => m.name === 'TTFB'))
      }
    }

    return NextResponse.json(stats)
  } catch (error) {
    if (process.env.NODE_ENV === 'development') console.error('Error fetching Web Vitals stats:', error)
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}

function calculateStats(metrics: WebVitalMetric[]) {
  if (metrics.length === 0) {
    return { count: 0, p75: 0, average: 0, good: 0, needsImprovement: 0, poor: 0 }
  }

  const values = metrics.map(m => m.value).sort((a, b) => a - b)
  const p75Index = Math.floor(values.length * 0.75)
  
  return {
    count: metrics.length,
    p75: values[p75Index] || 0,
    average: values.reduce((sum, val) => sum + val, 0) / values.length,
    good: metrics.filter(m => m.rating === 'good').length,
    needsImprovement: metrics.filter(m => m.rating === 'needs-improvement').length,
    poor: metrics.filter(m => m.rating === 'poor').length
  }
}
