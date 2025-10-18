/**
 * Centralized logging system
 * Only logs in development mode, silent in production
 */

const isDev = process.env.NODE_ENV === 'development'

export const logger = {
  log: (...args: any[]) => {
    if (isDev) {
      console.log(...args)
    }
  },
  
  error: (...args: any[]) => {
    if (isDev) {
      console.error(...args)
    }
  },
  
  warn: (...args: any[]) => {
    if (isDev) {
      console.warn(...args)
    }
  },
  
  debug: (...args: any[]) => {
    if (isDev) {
      console.debug(...args)
    }
  },
  
  info: (...args: any[]) => {
    if (isDev) {
      console.info(...args)
    }
  },
  
  // Performance logging
  perf: (label: string, value: number, threshold?: number) => {
    if (isDev) {
      const emoji = threshold && value > threshold ? '🐌' : '🚀'
      console.log(`${emoji} ${label}: ${value}ms`)
    }
  },
  
  // Metric logging
  metric: (name: string, data: Record<string, any>) => {
    if (isDev) {
      console.log(`📊 ${name}:`, data)
    }
  }
}

export default logger 