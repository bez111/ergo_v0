import { Counter, Histogram, Gauge, collectDefaultMetrics } from 'prom-client'

// Инициализация сбора дефолтных метрик
collectDefaultMetrics({ prefix: 'ergo_' })

// Кастомные метрики
export const httpRequestsTotal = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
})

export const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
})

export const activeConnections = new Gauge({
  name: 'active_connections',
  help: 'Number of active connections'
})

export const cacheHitRate = new Gauge({
  name: 'cache_hit_rate',
  help: 'Cache hit rate percentage',
  labelNames: ['cache_type']
})

export const errorRate = new Counter({
  name: 'http_errors_total',
  help: 'Total number of HTTP errors',
  labelNames: ['code']
})

const webVitalsMetrics = {
  lcp: new Histogram({
    name: 'web_vitals_lcp',
    help: 'Largest Contentful Paint',
    labelNames: ['route'],
    buckets: [1000, 2500, 4000, 6000, 8000]
  }),
  fid: new Histogram({
    name: 'web_vitals_fid',
    help: 'First Input Delay',
    labelNames: ['route'],
    buckets: [100, 300, 500, 1000]
  }),
  cls: new Histogram({
    name: 'web_vitals_cls',
    help: 'Cumulative Layout Shift',
    labelNames: ['route'],
    buckets: [0.1, 0.25, 0.5, 0.75, 1.0]
  }),
  ttfb: new Histogram({
    name: 'web_vitals_ttfb',
    help: 'Time to First Byte',
    labelNames: ['route'],
    buckets: [500, 800, 1200, 1600, 2400]
  })
}

export const pageLoadTime = new Histogram({
  name: 'page_load_time_seconds',
  help: 'Time taken to load a page',
  labelNames: ['page'],
  buckets: [0.5, 1, 2, 3, 5, 10]
})

// Функция для записи метрик (вызывается из middleware)
export function recordMetrics(
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
export function recordWebVitals(
  metric: string,
  value: number,
  route: string
) {
  const metricName = metric.toLowerCase() as keyof typeof webVitalsMetrics
  if (webVitalsMetrics[metricName]) {
    webVitalsMetrics[metricName].labels(route).observe(value)
  }
}

// Функция для обновления активных соединений
export function updateActiveConnections(count: number) {
  activeConnections.set(count)
}

// Функция для обновления cache hit rate
export function updateCacheHitRate(cacheType: string, rate: number) {
  cacheHitRate.labels(cacheType).set(rate)
}

