"use client"

import React, { useEffect } from 'react'

// Lightweight Web Vitals RUM tracker
export function WebVitalsRUM() {
  useEffect(() => {
    // Динамический импорт web-vitals только когда нужен
    import('web-vitals').then(({ onLCP, onINP, onCLS, onFCP, onTTFB }) => {
      function sendToAnalytics(metric: any) {
        // Отправляем с помощью sendBeacon для надежности
        const data = {
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
          attribution: metric.attribution,
          url: window.location.href,
          timestamp: Date.now()
        }

        // Используем sendBeacon если доступен, иначе fetch
        if ('sendBeacon' in navigator) {
          navigator.sendBeacon('/api/vitals', JSON.stringify(data))
        } else {
          fetch('/api/vitals', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
            keepalive: true
          }).catch(() => {
            // Ignore errors - не блокируем пользователя
          })
        }
      }

      // Подписываемся на все метрики с attribution
      onLCP(sendToAnalytics)
      onINP(sendToAnalytics) 
      onCLS(sendToAnalytics)
      onFCP(sendToAnalytics)
      onTTFB(sendToAnalytics)
    }).catch(() => {
      // Fallback - если web-vitals не загрузился, не блокируем страницу
    })

    // Element Timing для LCP кандидатов
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'element') {
          console.log('📊 Element Timing:', {
            name: entry.name,
            startTime: entry.startTime,
            // renderTime и loadTime доступны только в специфичных entry типах
            duration: entry.duration
          })
        }
      }
    })

    try {
      observer.observe({ entryTypes: ['element'] })
    } catch {
      // Element Timing не поддерживается - не критично
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return null // Invisible component
}

// Компонент для добавления elementtiming атрибута к LCP элементам
interface ElementTimingProps {
  name: string
  children: React.ReactElement
}

export function ElementTiming({ name, children }: ElementTimingProps) {
  return React.cloneElement(children, {
    ...children.props,
    elementtiming: name
  })
} 