
/* eslint-disable @typescript-eslint/no-explicit-any */
// Beehiiv API Integration
// Сервис для работы с Beehiiv API для сбора email подписчиков

import { siteConfig } from "@/config/site-config"

export interface BeehiivSubscriber {
  email: string
  status?: 'active' | 'unconfirmed' | 'unsubscribed'
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  referring_site?: string
  custom_fields?: Array<{name: string; value: string}>
}

export interface BeehiivResponse {
  success: boolean
  message?: string
  data?: any
  error?: string
}

export class BeehiivAPI {
  private apiKey: string
  private publicationId: string
  private baseUrl = 'https://api.beehiiv.com/v2'

  constructor(apiKey: string, publicationId: string) {
    this.apiKey = apiKey
    this.publicationId = publicationId
  }

  /**
   * Подписать пользователя на рассылку
   */
  async subscribe(subscriber: BeehiivSubscriber): Promise<BeehiivResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/publications/${this.publicationId}/subscriptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          email: subscriber.email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: subscriber.utm_source || 'website',
          utm_medium: subscriber.utm_medium || 'newsletter_form',
          utm_campaign: subscriber.utm_campaign || 'ergo_newsletter',
          referring_site: subscriber.referring_site || (typeof window !== 'undefined' ? window.location?.origin : 'https://ergoplatform.org'),
          custom_fields: subscriber.custom_fields || []
        })
      })

      const data = await response.json()

      if (response.ok) {
        return {
          success: true,
          message: 'Successfully subscribed to newsletter',
          data
        }
      } else {
        // Обработка специфичных ошибок Beehiiv
        let errorMessage = 'Failed to subscribe'
        
        if (data.errors) {
          if (data.errors.email) {
            errorMessage = data.errors.email[0] || 'Invalid email address'
          } else if (data.errors.detail) {
            errorMessage = data.errors.detail
          }
        }

        return {
          success: false,
          error: errorMessage,
          data
        }
      }
    } catch (error) {
      console.error('Beehiiv API Error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      }
    }
  }

  /**
   * Получить статистику подписчиков
   */
  async getSubscriptionStats(): Promise<BeehiivResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/publications/${this.publicationId}/stats/subscriptions`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        }
      })

      const data = await response.json()

      if (response.ok) {
        return {
          success: true,
          data
        }
      } else {
        return {
          success: false,
          error: 'Failed to fetch subscription stats',
          data
        }
      }
    } catch (error) {
      console.error('Beehiiv Stats Error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred'
      }
    }
  }

  /**
   * Проверить статус подписчика
   */
  async getSubscriberStatus(email: string): Promise<BeehiivResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/publications/${this.publicationId}/subscriptions?email=${encodeURIComponent(email)}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        }
      })

      const data = await response.json()

      if (response.ok) {
        return {
          success: true,
          data
        }
      } else {
        return {
          success: false,
          error: 'Failed to check subscriber status',
          data
        }
      }
    } catch (error) {
      console.error('Beehiiv Subscriber Check Error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred'
      }
    }
  }
}

// Создание экземпляра API (будет использовать переменные окружения)
export function createBeehiivAPI(): BeehiivAPI | null {
  const apiKey = siteConfig.beehiivApiKey
  const publicationId = siteConfig.beehiivPublicationId

  if (!apiKey || !publicationId) {
    console.warn('Beehiiv API credentials not found in environment variables')
    return null
  }

  return new BeehiivAPI(apiKey, publicationId)
}

// Утилитарная функция для подписки с обработкой ошибок
export async function subscribeToNewsletter(
  email: string, 
  source: string = 'website',
  additionalData?: Partial<BeehiivSubscriber>
): Promise<BeehiivResponse> {
  const api = createBeehiivAPI()
  
  if (!api) {
    return {
      success: false,
      error: 'Newsletter service is not configured'
    }
  }

  return await api.subscribe({
    email,
    utm_source: source,
    utm_medium: 'newsletter_form',
    utm_campaign: 'ergo_newsletter',
    ...additionalData
  })
}
