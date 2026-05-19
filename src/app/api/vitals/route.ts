
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, apiLimiter } from '@/lib/rate-limiter'

const MAX_BODY_BYTES = 16 * 1024
const validMetrics = new Set(['LCP', 'INP', 'CLS', 'FCP', 'TTFB'])

export async function POST(request: NextRequest) {
  const rateLimitResult = await rateLimit(request, apiLimiter)
  if (rateLimitResult) return rateLimitResult

  try {
    const body = JSON.parse(await readLimitedBody(request))

    // Валидация метрик
    if (!validMetrics.has(body.name) || typeof body.value !== 'number' || !Number.isFinite(body.value)) {
      return NextResponse.json({ error: 'Invalid metric name' }, { status: 400 })
    }

    // В production здесь можно отправлять данные в аналитику
    // Google Analytics, DataDog, или собственную систему

    // Web Vitals metrics processing (console logging removed for cleaner output)
    const _metricsData = {
      name: body.name,
      value: body.value,
      rating: body.rating,
      delta: body.delta,
      id: body.id,
      url: request.headers.get('referer'),
      userAgent: request.headers.get('user-agent'),
      timestamp: new Date().toISOString(),
      attribution: body.attribution
    }

    // Для INP собираем дополнительную информацию о событиях
    if (body.name === 'INP' && body.attribution) {
      // INP Attribution data collected (logging removed)
      const _inpData = {
        eventType: body.attribution.eventType,
        eventTarget: body.attribution.eventTarget,
        eventTime: body.attribution.eventTime,
        processingStart: body.attribution.processingStart,
        processingEnd: body.attribution.processingEnd,
        presentationStart: body.attribution.presentationStart,
        inputDelay: body.attribution.inputDelay,
        processingDuration: body.attribution.processingDuration,
        presentationDelay: body.attribution.presentationDelay
      }
      // В production здесь можно отправить inpData в аналитику
    }

    // Для LCP собираем информацию об элементе
    if (body.name === 'LCP' && body.attribution) {
      // LCP Attribution data collected (logging removed)
      const _lcpData = {
        element: body.attribution.element,
        elementRenderDelay: body.attribution.elementRenderDelay,
        resourceLoadDelay: body.attribution.resourceLoadDelay,
        resourceLoadDuration: body.attribution.resourceLoadDuration,
        url: body.attribution.url
      }
      // В production здесь можно отправить lcpData в аналитику
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof Error && error.message === 'request body too large') {
      return NextResponse.json({ error: 'Metric payload too large' }, { status: 413 })
    }
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }
    if (process.env.NODE_ENV === 'development') console.error('Error processing vitals:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Web Vitals endpoint',
    supportedMetrics: ['LCP', 'INP', 'CLS', 'FCP', 'TTFB']
  })
}

async function readLimitedBody(request: NextRequest): Promise<string> {
  const length = Number(request.headers.get('content-length') ?? '0')
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) throw new Error('request body too large')
  const text = await request.text()
  if (text.length > MAX_BODY_BYTES) throw new Error('request body too large')
  return text
}
