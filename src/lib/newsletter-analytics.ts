
/* eslint-disable @typescript-eslint/no-explicit-any */
// Newsletter Analytics Utilities
// Для отслеживания конверсии и поведения пользователей

export interface NewsletterEvent {
  event: 'subscribe_view' | 'subscribe_submit' | 'subscribe_success' | 'subscribe_error'
  source: 'homepage' | 'blog' | 'docs' | 'footer_link'
  email?: string
  error?: string
  timestamp: number
}

export class NewsletterAnalytics {
  private static instance: NewsletterAnalytics
  private events: NewsletterEvent[] = []

  static getInstance(): NewsletterAnalytics {
    if (!NewsletterAnalytics.instance) {
      NewsletterAnalytics.instance = new NewsletterAnalytics()
    }
    return NewsletterAnalytics.instance
  }

  // Track newsletter form view
  trackView(source: NewsletterEvent['source']) {
    const event: NewsletterEvent = {
      event: 'subscribe_view',
      source,
      timestamp: Date.now()
    }
    this.events.push(event)
    this.sendToAnalytics(event)
  }

  // Track newsletter form submission
  trackSubmit(source: NewsletterEvent['source'], email: string) {
    const event: NewsletterEvent = {
      event: 'subscribe_submit',
      source,
      email,
      timestamp: Date.now()
    }
    this.events.push(event)
    this.sendToAnalytics(event)
  }

  // Track successful subscription
  trackSuccess(source: NewsletterEvent['source'], email: string) {
    const event: NewsletterEvent = {
      event: 'subscribe_success',
      source,
      email,
      timestamp: Date.now()
    }
    this.events.push(event)
    this.sendToAnalytics(event)
  }

  // Track subscription error
  trackError(source: NewsletterEvent['source'], email: string, error: string) {
    const event: NewsletterEvent = {
      event: 'subscribe_error',
      source,
      email,
      error,
      timestamp: Date.now()
    }
    this.events.push(event)
    this.sendToAnalytics(event)
  }

  // Mark user as subscribed
  markSubscribed(email: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('newsletter_subscribed', 'true')
      localStorage.setItem('newsletter_email', email)
      localStorage.setItem('newsletter_date', new Date().toISOString())
    }
  }

  // Check if user is already subscribed
  isSubscribed(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('newsletter_subscribed') === 'true'
    }
    return false
  }

  // Get subscription email
  getSubscriptionEmail(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('newsletter_email')
    }
    return null
  }

  // Clear subscription status (for testing)
  clearSubscription() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('newsletter_subscribed')
      localStorage.removeItem('newsletter_email')
      localStorage.removeItem('newsletter_date')
    }
  }

  // Send event to analytics service
  private sendToAnalytics(event: NewsletterEvent) {
    // В реальном проекте здесь был бы вызов к Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined') {
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 Newsletter Analytics:', event)
      }
      
      // Пример интеграции с Google Analytics
      if (typeof window.gtag === 'function') {
        window.gtag('event', event.event, {
          event_category: 'Newsletter',
          event_label: event.source,
          custom_parameter_email: event.email,
          custom_parameter_error: event.error
        })
      }
    }
  }

  // Get analytics summary
  getAnalyticsSummary() {
    const summary = {
      total_views: this.events.filter(e => e.event === 'subscribe_view').length,
      total_submits: this.events.filter(e => e.event === 'subscribe_submit').length,
      total_success: this.events.filter(e => e.event === 'subscribe_success').length,
      total_errors: this.events.filter(e => e.event === 'subscribe_error').length,
      conversion_rate: 0
    }
    
    if (summary.total_views > 0) {
      summary.conversion_rate = (summary.total_success / summary.total_views) * 100
    }
    
    return summary
  }
}

// Export singleton instance
export const newsletterAnalytics = NewsletterAnalytics.getInstance()

// Window.gtag type is declared in google-analytics.tsx 