
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Resilience patterns for SRE
 * Circuit Breaker, Retry with Jitter, Timeout, Bulkhead
 */

import { logger } from './logger'

interface CircuitBreakerOptions {
  threshold: number
  timeout: number
  resetTimeout: number
}

interface RetryOptions {
  maxAttempts: number
  initialDelay: number
  maxDelay: number
  factor: number
  jitter: boolean
}

// Circuit Breaker States
enum CircuitState {
  CLOSED = 'CLOSED',
  OPEN = 'OPEN',
  HALF_OPEN = 'HALF_OPEN'
}

class CircuitBreaker {
  private state: CircuitState = CircuitState.CLOSED
  private failures: number = 0
  private lastFailureTime: number = 0
  private successCount: number = 0
  
  constructor(private options: CircuitBreakerOptions) {}
  
  async execute<T>(fn: () => Promise<T>): Promise<T> {
    // Check if circuit is open
    if (this.state === CircuitState.OPEN) {
      if (Date.now() - this.lastFailureTime > this.options.resetTimeout) {
        this.state = CircuitState.HALF_OPEN
        logger.info('Circuit breaker entering HALF_OPEN state')
      } else {
        throw new Error('Circuit breaker is OPEN')
      }
    }
    
    try {
      const result = await Promise.race([
        fn(),
        new Promise<T>((_, reject) => 
          setTimeout(() => reject(new Error('Circuit breaker timeout')), this.options.timeout)
        )
      ])
      
      // Success handling
      if (this.state === CircuitState.HALF_OPEN) {
        this.successCount++
        if (this.successCount >= 3) {
          this.state = CircuitState.CLOSED
          this.failures = 0
          this.successCount = 0
          logger.info('Circuit breaker CLOSED')
        }
      }
      
      return result
    } catch (error) {
      this.failures++
      this.lastFailureTime = Date.now()
      
      if (this.failures >= this.options.threshold) {
        this.state = CircuitState.OPEN
        logger.error('Circuit breaker OPEN', { failures: this.failures })
      }
      
      throw error
    }
  }
}

// Retry with exponential backoff and jitter
export async function retryWithJitter<T>(
  fn: () => Promise<T>,
  options: RetryOptions
): Promise<T> {
  let lastError: Error | undefined
  
  for (let attempt = 1; attempt <= options.maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error
      
      if (attempt === options.maxAttempts) {
        logger.error('Max retry attempts reached', { 
          attempts: attempt, 
          error: lastError.message 
        })
        throw lastError
      }
      
      // Calculate delay with exponential backoff
      let delay = Math.min(
        options.initialDelay * Math.pow(options.factor, attempt - 1),
        options.maxDelay
      )
      
      // Add jitter to prevent thundering herd
      if (options.jitter) {
        delay = delay * (0.5 + Math.random())
      }
      
      logger.debug(`Retry attempt ${attempt}/${options.maxAttempts} after ${delay}ms`)
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
  
  throw lastError
}

// Bulkhead pattern for resource isolation
class Bulkhead {
  private activeCount: number = 0
  private queue: Array<() => void> = []
  
  constructor(
    private maxConcurrent: number,
    private maxQueueSize: number = 100
  ) {}
  
  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.activeCount >= this.maxConcurrent) {
      if (this.queue.length >= this.maxQueueSize) {
        throw new Error('Bulkhead queue full')
      }
      
      await new Promise<void>(resolve => {
        this.queue.push(resolve)
      })
    }
    
    this.activeCount++
    
    try {
      return await fn()
    } finally {
      this.activeCount--
      const next = this.queue.shift()
      if (next) next()
    }
  }
}

// Timeout wrapper
export async function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  timeoutError = 'Operation timed out'
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(timeoutError)), timeoutMs)
    )
  ])
}

// Health check with degradation
export class HealthChecker {
  private checks: Map<string, boolean> = new Map()
  private degradedFeatures: Set<string> = new Set()
  
  registerCheck(name: string, checkFn: () => Promise<boolean>) {
    setInterval(async () => {
      try {
        const healthy = await withTimeout(checkFn(), 5000)
        this.checks.set(name, healthy)
        
        if (!healthy) {
          this.degradedFeatures.add(name)
          logger.warn(`Service degraded: ${name}`)
        } else {
          this.degradedFeatures.delete(name)
        }
      } catch (error) {
        this.checks.set(name, false)
        this.degradedFeatures.add(name)
        logger.error(`Health check failed: ${name}`, error)
      }
    }, 30000) // Check every 30s
  }
  
  isHealthy(service: string): boolean {
    return this.checks.get(service) ?? false
  }
  
  isDegraded(): boolean {
    return this.degradedFeatures.size > 0
  }
  
  getStatus() {
    return {
      healthy: Array.from(this.checks.entries()).every(([_, healthy]) => healthy),
      degraded: Array.from(this.degradedFeatures),
      checks: Object.fromEntries(this.checks)
    }
  }
}

// Rate limiter with sliding window
export class RateLimiter {
  private requests: number[] = []
  
  constructor(
    private maxRequests: number,
    private windowMs: number
  ) {}
  
  allow(): boolean {
    const now = Date.now()
    
    // Remove old requests outside window
    this.requests = this.requests.filter(time => now - time < this.windowMs)
    
    if (this.requests.length < this.maxRequests) {
      this.requests.push(now)
      return true
    }
    
    return false
  }
}

// Export configured instances
export const apiCircuitBreaker = new CircuitBreaker({
  threshold: 5,
  timeout: 3000,
  resetTimeout: 30000
})

export const dbBulkhead = new Bulkhead(20, 50)

export const healthChecker = new HealthChecker()

export const apiRateLimiter = new RateLimiter(100, 60000) // 100 req/min

// Default retry configuration
export const defaultRetryOptions: RetryOptions = {
  maxAttempts: 3,
  initialDelay: 100,
  maxDelay: 5000,
  factor: 2,
  jitter: true
} 