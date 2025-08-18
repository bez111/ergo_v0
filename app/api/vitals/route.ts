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
    
    console.log('📊 Web Vitals Metric:', {
      name: body.name,
      value: body.value,
      rating: body.rating,
      delta: body.delta,
      id: body.id,
      url: request.headers.get('referer'),
      userAgent: request.headers.get('user-agent'),
      timestamp: new Date().toISOString(),
      // Attribution data для диагностики
      attribution: body.attribution
    })

    // Для INP собираем дополнительную информацию о событиях
    if (body.name === 'INP' && body.attribution) {
      console.log('🎯 INP Attribution:', {
        eventType: body.attribution.eventType,
        eventTarget: body.attribution.eventTarget,
        eventTime: body.attribution.eventTime,
        processingStart: body.attribution.processingStart,
        processingEnd: body.attribution.processingEnd,
        presentationStart: body.attribution.presentationStart,
        inputDelay: body.attribution.inputDelay,
        processingDuration: body.attribution.processingDuration,
        presentationDelay: body.attribution.presentationDelay
      })
    }

    // Для LCP собираем информацию об элементе
    if (body.name === 'LCP' && body.attribution) {
      console.log('🖼️ LCP Attribution:', {
        element: body.attribution.element,
        elementRenderDelay: body.attribution.elementRenderDelay,
        resourceLoadDelay: body.attribution.resourceLoadDelay,
        resourceLoadDuration: body.attribution.resourceLoadDuration,
        url: body.attribution.url
      })
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