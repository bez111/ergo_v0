"use client"

import { useEffect, useState } from "react"

export function usePerformance() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    isLoading: true,
  })

  useEffect(() => {
    const startTime = performance.now()

    // Measure initial load time
    const handleLoad = () => {
      const loadTime = performance.now() - startTime
      setMetrics((prev) => ({
        ...prev,
        loadTime,
        isLoading: false,
      }))
    }

    // Measure render time
    const renderTime = performance.now() - startTime
    setMetrics((prev) => ({
      ...prev,
      renderTime,
    }))

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  return metrics
}
