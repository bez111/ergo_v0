
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Server-Timing utilities for performance monitoring
 * Provides metrics for edge, origin, cache status tracking
 */

export interface TimingMetric {
  name: string
  duration?: number
  description?: string
}

export class ServerTiming {
  private metrics: TimingMetric[] = []
  private startTime: number

  constructor() {
    this.startTime = Date.now()
  }

  // Добавить метрику с измерением времени
  addMetric(name: string, description?: string, duration?: number) {
    this.metrics.push({
      name,
      duration: duration ?? Date.now() - this.startTime,
      ...(description && { description })
    })
  }

  // Добавить метрику кеша
  addCacheMetric(status: 'HIT' | 'MISS' | 'STALE' | 'BYPASS', source?: string) {
    this.addMetric('cache', `${status}${source ? ` from ${source}` : ''}`)
  }

  // Добавить метрику edge
  addEdgeMetric(duration: number, colo?: string) {
    this.addMetric('edge', `${colo || 'unknown'}`, duration)
  }

  // Добавить метрику origin
  addOriginMetric(duration: number) {
    this.addMetric('origin', 'processing', duration)
  }

  // Генерировать заголовок Server-Timing
  getHeader(): string {
    return this.metrics
      .map(metric => {
        let value = metric.name
        if (metric.description) {
          value += `;desc="${metric.description}"`
        }
        if (metric.duration !== undefined) {
          value += `;dur=${metric.duration}`
        }
        return value
      })
      .join(', ')
  }

  // Получить метрики как объект для логирования
  getMetrics() {
    return {
      totalDuration: Date.now() - this.startTime,
      metrics: this.metrics,
      timestamp: new Date().toISOString()
    }
  }
}

// Утилита для middleware
export function createServerTiming() {
  return new ServerTiming()
}

// Предустановленные метрики для разных типов запросов
export const TimingPresets = {
  // Для HTML страниц
  html: (timing: ServerTiming, cacheStatus: string, renderTime: number) => {
    timing.addCacheMetric(cacheStatus as any)
    timing.addOriginMetric(renderTime)
  },

  // Для API запросов
  api: (timing: ServerTiming, dbTime: number, cacheStatus: string) => {
    timing.addMetric('db', 'query', dbTime)
    timing.addCacheMetric(cacheStatus as any)
  },

  // Для статических ресурсов
  static: (timing: ServerTiming, cacheStatus: string) => {
    timing.addCacheMetric(cacheStatus as any, 'cdn')
  }
}

// Типы для TypeScript
export type CacheStatus = 'HIT' | 'MISS' | 'STALE' | 'BYPASS'
export type TimingContext = 'edge' | 'origin' | 'cache' | 'db' | 'render' 