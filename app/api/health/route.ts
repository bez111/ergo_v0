import { version } from '@/lib/version'
import { NextResponse } from 'next/server'

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy'
  timestamp: string
  uptime: number
  version: string
  checks: {
    [key: string]: {
      status: 'pass' | 'fail' | 'warn'
      message?: string
      responseTime?: number
    }
  }
  metrics?: {
    memoryUsage: NodeJS.MemoryUsage
    cpuUsage: NodeJS.CpuUsage
  }
}

// Проверка доступности базы данных
async function checkDatabase(): Promise<boolean> {
  try {
    // В реальном приложении здесь будет запрос к БД
    // const result = await db.query('SELECT 1')
    return true
  } catch (error) {
    console.error('Database health check failed:', error)
    return false
  }
}

// Проверка доступности Redis
async function checkRedis(): Promise<boolean> {
  try {
    // В реальном приложении здесь будет ping к Redis
    // const result = await redis.ping()
    return true
  } catch (error) {
    console.error('Redis health check failed:', error)
    return false
  }
}

// Проверка доступности внешних API
async function checkExternalAPIs(): Promise<boolean> {
  try {
    // Проверяем критичные внешние сервисы
    const checks = await Promise.allSettled([
      fetch('https://api.github.com/rate_limit', { signal: AbortSignal.timeout(3000) }),
      // Добавьте другие критичные API
    ])
    
    return checks.every(result => result.status === 'fulfilled')
  } catch (error) {
    console.error('External API health check failed:', error)
    return false
  }
}

export async function GET(_request: Request) {
  const startTime = Date.now()
  
  // Получаем uptime процесса
  const uptime = process.uptime()
  
  // Базовая информация о здоровье
  const health: HealthStatus = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime,
    version: version.version || '1.0.0',
    checks: {},
    metrics: {
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage()
    }
  }
  
  // Выполняем проверки
  const checks = [
    { name: 'database', check: checkDatabase },
    { name: 'redis', check: checkRedis },
    { name: 'external_apis', check: checkExternalAPIs }
  ]
  
  // Параллельное выполнение всех проверок
  const results = await Promise.allSettled(
    checks.map(async ({ name, check }) => {
      const checkStart = Date.now()
      const result = await check()
      const responseTime = Date.now() - checkStart
      
      return {
        name,
        status: result ? 'pass' : 'fail',
        responseTime
      }
    })
  )
  
  // Обработка результатов
  let hasFailures = false
  let hasWarnings = false
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      const { name, status, responseTime } = result.value
      health.checks[name] = {
        status: status as 'pass' | 'fail',
        responseTime
      }
      
      if (status === 'fail') {
        hasFailures = true
      } else if (responseTime && responseTime > 1000) {
        health.checks[name].status = 'warn'
        health.checks[name].message = 'Slow response time'
        hasWarnings = true
      }
    } else {
      const check = checks[index]
      if (check) {
        const name = check.name
        health.checks[name] = {
          status: 'fail',
          message: 'Check failed with error'
        }
        hasFailures = true
      }
    }
  })
  
  // Проверка памяти - корректная формула для реального использования
  const heapUsed = health.metrics?.memoryUsage.heapUsed || 0
  const heapTotal = health.metrics?.memoryUsage.heapTotal || 0
  const rss = health.metrics?.memoryUsage.rss || 0
  
  // Используем RSS (Resident Set Size) для более точной оценки
  const maxMemory = 1024 * 1024 * 1024 // 1GB limit
  const memoryUsagePercent = (rss / maxMemory) * 100
  const heapPercent = (heapUsed / heapTotal) * 100
  
  if (rss > maxMemory * 0.9) {
    health.checks['memory'] = {
      status: 'fail',
      message: `Memory critical: RSS ${(rss / 1024 / 1024).toFixed(0)}MB (${memoryUsagePercent.toFixed(1)}%), Heap ${heapPercent.toFixed(1)}%`
    }
    hasFailures = true
  } else if (rss > maxMemory * 0.75) {
    health.checks['memory'] = {
      status: 'warn',
      message: `Memory high: RSS ${(rss / 1024 / 1024).toFixed(0)}MB (${memoryUsagePercent.toFixed(1)}%), Heap ${heapPercent.toFixed(1)}%`
    }
    hasWarnings = true
  } else {
    health.checks['memory'] = {
      status: 'pass',
      message: `Memory normal: RSS ${(rss / 1024 / 1024).toFixed(0)}MB (${memoryUsagePercent.toFixed(1)}%), Heap ${heapPercent.toFixed(1)}%`
    }
  }
  
  // Определяем общий статус
  if (hasFailures) {
    health.status = 'unhealthy'
  } else if (hasWarnings) {
    health.status = 'degraded'
  }
  
  // Общее время выполнения проверки
  const totalTime = Date.now() - startTime
  
  // Определяем HTTP статус код
  const statusCode = health.status === 'healthy' ? 200 : 
                     health.status === 'degraded' ? 200 : 503
  
  return NextResponse.json(health, {
    status: statusCode,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Response-Time': `${totalTime}ms`
    }
  })
}

// Liveness probe - простая проверка что сервис жив
export async function HEAD() {
  return new NextResponse(null, { status: 200 })
} 