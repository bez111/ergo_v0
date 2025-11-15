import { useEffect, useState } from 'react'
import { trackBlogView, getBlogViews } from '@/lib/analytics'

interface ViewTrackerOptions {
  postId: string
  title: string
  onView?: (postId: string, views: number) => void
}

export function useViewTracker({ postId, title, onView }: ViewTrackerOptions) {
  const [views, setViews] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    // Загружаем текущие просмотры
    const loadViews = async () => {
      try {
        const currentViews = await getBlogViews(postId)
        if (mounted) {
          setViews(currentViews)
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Error loading views:', error)
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    // Трекаем просмотр
    const trackView = async () => {
      const viewedKey = `viewed_${postId}_${Date.now().toString().slice(0, -7)}` // Уникально для дня
      const hasViewedToday = sessionStorage.getItem(viewedKey)
      
      if (!hasViewedToday) {
        // Отмечаем как просмотренную сегодня
        sessionStorage.setItem(viewedKey, 'true')
        
        // Трекаем в Google Analytics
        trackBlogView(postId, title)
        
        // Отправляем на наш API
        try {
          const response = await fetch(`/api/views/${postId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
          })
          
          if (response.ok) {
            const data = await response.json()
            if (mounted) {
              setViews(data.views)
              onView?.(postId, data.views)
            }
          }
        } catch (error) {
          console.error('Error tracking view:', error)
        }
      }
    }

    loadViews()
    
    // Небольшая задержка перед трекингом для избежания ботов
    const timer = setTimeout(trackView, 2000)

    return () => {
      mounted = false
      clearTimeout(timer)
    }
  }, [postId, title, onView])

  return { views, isLoading }
}

export function getViewCount(postId: string): number {
  if (typeof window === 'undefined') return 0
  return parseInt(localStorage.getItem(`views_${postId}`) || '0')
}
