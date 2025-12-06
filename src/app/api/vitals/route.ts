
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Валидация метрик
    const validMetrics = ['LCP', 'INP', 'CLS', 'FCP', 'TTFB']
    if (!validMetrics.includes(body.name)) {
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
    console.error('Error processing vitals:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Web Vitals endpoint',
    supportedMetrics: ['LCP', 'INP', 'CLS', 'FCP', 'TTFB']
  })
} 