
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server'
import { register, collectDefaultMetrics, Counter, Histogram, Gauge } from 'prom-client'

// Инициализация сбора дефолтных метрик
collectDefaultMetrics({ prefix: 'ergo_' })

// Кастомные метрики
const httpRequestsTotal = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
})

const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
})

const activeConnections = new Gauge({
  name: 'active_connections',
  help: 'Number of active connections'
})

const cacheHitRate = new Gauge({
  name: 'cache_hit_rate',
  help: 'Cache hit rate percentage',
  labelNames: ['cache_type']
})

const errorRate = new Gauge({
  name: 'error_rate',
  help: 'Current error rate',
  labelNames: ['error_type']
})

// Web Vitals metrics
const webVitalsLCP = new Histogram({
  name: 'web_vitals_lcp_seconds',
  help: 'Largest Contentful Paint',
  buckets: [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 10]
})

const webVitalsINP = new Histogram({
  name: 'web_vitals_inp_milliseconds',
  help: 'Interaction to Next Paint',
  buckets: [50, 100, 150, 200, 300, 400, 500, 1000]
})

const webVitalsCLS = new Histogram({
  name: 'web_vitals_cls',
  help: 'Cumulative Layout Shift',
  buckets: [0.01, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.5]
})

// Бизнес метрики
const pageViews = new Counter({
  name: 'page_views_total',
  help: 'Total page views',
  labelNames: ['page']
})

const apiCallsTotal = new Counter({
  name: 'api_calls_total',
  help: 'Total API calls',
  labelNames: ['endpoint', 'status']
})

const searchQueries = new Counter({
  name: 'search_queries_total',
  help: 'Total search queries',
  labelNames: ['type']
})

// Функция для записи метрик (вызывается из middleware)
// Перенесена в lib/metrics-utils.ts
function recordMetrics(
  method: string,
  route: string,
  status: number,
  duration: number
) {
  httpRequestsTotal.labels(method, route, String(status)).inc()
  httpRequestDuration.labels(method, route, String(status)).observe(duration)
  
  // Обновляем error rate
  if (status >= 500) {
    errorRate.labels('5xx').inc()
  } else if (status >= 400) {
    errorRate.labels('4xx').inc()
  }
}

// Функция для записи Web Vitals
// Перенесена в lib/metrics-utils.ts
function recordWebVitals(metrics: {
  lcp?: number
  inp?: number
  cls?: number
}) {
  if (metrics.lcp) webVitalsLCP.observe(metrics.lcp / 1000)
  if (metrics.inp) webVitalsINP.observe(metrics.inp)
  if (metrics.cls) webVitalsCLS.observe(metrics.cls)
}

// API endpoint для Prometheus
export async function GET() {
  try {
    // Симуляция текущих метрик (в реальности берутся из системы)
    activeConnections.set(Math.floor(Math.random() * 100) + 50)
    cacheHitRate.labels('cdn').set(Math.random() * 100)
    cacheHitRate.labels('redis').set(Math.random() * 100)
    
    // Получаем все метрики
    const metrics = await register.metrics()
    
    return new NextResponse(metrics, {
      headers: {
        'Content-Type': register.contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    })
  } catch (error) {
    if (process.env.NODE_ENV === 'development') console.error('Error collecting metrics:', error)
    return NextResponse.json(
      { error: 'Failed to collect metrics' },
      { status: 500 }
    )
  }
}

// Health check endpoint
export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Записываем Web Vitals если они переданы
    if (data.webVitals) {
      recordWebVitals(data.webVitals)
    }
    
    // Записываем другие метрики
    if (data.pageView) {
      pageViews.labels(data.pageView).inc()
    }
    
    if (data.apiCall) {
      apiCallsTotal.labels(data.apiCall.endpoint, data.apiCall.status).inc()
    }
    
    if (data.search) {
      searchQueries.labels(data.search.type).inc()
    }
    
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to record metrics' },
      { status: 500 }
    )
  }
} 