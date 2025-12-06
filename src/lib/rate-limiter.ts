
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest } from 'next/server'

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

class RateLimiter {
  private store: RateLimitStore = {}
  private readonly windowMs: number
  private readonly maxRequests: number

  constructor(windowMs = 60000, maxRequests = 100) {
    this.windowMs = windowMs
    this.maxRequests = maxRequests
    
    // Очистка старых записей каждую минуту
    setInterval(() => this.cleanup(), 60000)
  }

  private cleanup() {
    const now = Date.now()
    Object.keys(this.store).forEach(key => {
      if (this.store[key] && this.store[key].resetTime < now) {
        delete this.store[key]
      }
    })
  }

  private getKey(request: NextRequest): string {
    // Используем IP адрес или X-Forwarded-For для идентификации клиента
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'
    const path = new URL(request.url).pathname
    return `${ip}:${path}`
  }

  public async checkLimit(request: NextRequest): Promise<{
    allowed: boolean
    remaining: number
    resetTime: number
  }> {
    const key = this.getKey(request)
    const now = Date.now()
    
    if (!this.store[key] || this.store[key].resetTime < now) {
      // Создаем новое окно
      this.store[key] = {
        count: 1,
        resetTime: now + this.windowMs
      }
      
      return {
        allowed: true,
        remaining: this.maxRequests - 1,
        resetTime: this.store[key].resetTime
      }
    }
    
    // Проверяем лимит
    if (this.store[key].count >= this.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: this.store[key].resetTime
      }
    }
    
    // Увеличиваем счетчик
    this.store[key].count++
    
    return {
      allowed: true,
      remaining: this.maxRequests - this.store[key].count,
      resetTime: this.store[key].resetTime
    }
  }
}

// Создаем разные лимитеры для разных эндпоинтов
export const apiLimiter = new RateLimiter(60000, 100) // 100 req/min
export const searchLimiter = new RateLimiter(60000, 30) // 30 req/min
export const authLimiter = new RateLimiter(900000, 5) // 5 req/15min

// Helper для использования в API routes
export async function rateLimit(
  request: NextRequest,
  limiter: RateLimiter = apiLimiter
): Promise<Response | null> {
  const { allowed, remaining, resetTime } = await limiter.checkLimit(request)
  
  if (!allowed) {
    return new Response('Too Many Requests', {
      status: 429,
      headers: {
        'X-RateLimit-Limit': '100',
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': resetTime.toString(),
        'Retry-After': Math.ceil((resetTime - Date.now()) / 1000).toString()
      }
    })
  }
  
  // Добавляем заголовки rate limit к ответу
  return null
} 