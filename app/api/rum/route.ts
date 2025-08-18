import { NextRequest, NextResponse } from 'next/server'

// API endpoint для Real User Monitoring метрик
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // В production отправляем в аналитику (Google Analytics, PostHog, etc.)
    if (process.env.NODE_ENV === 'production') {
      // Пример отправки в Google Analytics 4
      // await sendToGA4(data)
      
      // Пример отправки в собственную систему мониторинга
      // await sendToMonitoring(data)
      
      // Логируем критические метрики
      if (data.rating === 'poor') {
        console.warn('[RUM Alert]', {
          metric: data.name,
          value: data.value,
          path: data.path,
          device: data.device
        })
      }
    } else {
      // В development просто логируем
      console.log('[RUM Received]', data)
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[RUM Error]', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

// Опционально: GET endpoint для health check
export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    timestamp: new Date().toISOString()
  })
} 