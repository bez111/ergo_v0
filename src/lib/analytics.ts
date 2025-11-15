// Google Analytics 4 integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function trackPageView(url: string, title: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_title: title,
      page_location: url,
    })
  }
}

export function trackBlogView(postId: string, title: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_view', {
      event_category: 'Blog',
      event_label: postId,
      custom_parameter_1: title,
    })
  }
}

// Получение просмотров из нашего API
export async function getBlogViews(postId: string): Promise<number> {
  try {
    // Запрос к нашему API
    const response = await fetch(`/api/views/${postId}`, {
      method: 'GET',
      cache: 'no-store' // Всегда получаем свежие данные
    })
    
    if (response.ok) {
      const data = await response.json()
      return data.views || 0
    }
    
    // Fallback к localStorage если API недоступен
    if (typeof window !== 'undefined') {
      return parseInt(localStorage.getItem(`views_${postId}`) || '0')
    }
    return 0
  } catch (error) {
    console.error('Error fetching blog views:', error)
    
    // Fallback к localStorage
    if (typeof window !== 'undefined') {
      return parseInt(localStorage.getItem(`views_${postId}`) || '0')
    }
    return 0
  }
}
