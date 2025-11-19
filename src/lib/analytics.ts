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

