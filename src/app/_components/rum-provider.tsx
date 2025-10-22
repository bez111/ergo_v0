'use client'

import { useEffect } from 'react'
import { initRUM } from '@/src/app/_lib/rum'

export function RUMProvider() {
  useEffect(() => {
    // Инициализируем RUM только в браузере
    if (typeof window !== 'undefined') {
      initRUM()
    }
  }, [])

  return null
} 