import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

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

export async function POST(request: NextRequest) {
  try {
    const metric: WebVitalMetric = await request.json()
    
    // Validate metric data
    if (!metric.name || typeof metric.value !== 'number') {
      return NextResponse.json({ error: 'Invalid metric data' }, { status: 400 })
    }

    // Get request metadata
    const headersList = headers()
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

    // Log for debugging (remove in production)
    console.log(`📊 Web Vital: ${metric.name} = ${metric.value} (${metric.rating})`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error storing Web Vital:', error)
    return NextResponse.json({ error: 'Failed to store metric' }, { status: 500 })
  }
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
    console.error('Error fetching Web Vitals stats:', error)
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
