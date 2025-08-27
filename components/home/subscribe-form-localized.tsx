"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { useLocalizedValidation, useSuccessMessages, useErrorMessages, commonValidationSchemas } from "@/lib/i18n-validation"
import { newsletterAnalytics } from "@/lib/newsletter-analytics"

interface SubscribeFormLocalizedProps {
  segments?: string[]
  className?: string
}

export function SubscribeFormLocalized({ segments = [], className = "" }: SubscribeFormLocalizedProps) {
  const [email, setEmail] = useState("")
  const [selectedSegment, setSelectedSegment] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  // Localization hooks
  const t = useTranslations('newsletter')
  const tCommon = useTranslations('common')
  const { validateForm } = useLocalizedValidation()
  const successMessages = useSuccessMessages()
  const errorMessages = useErrorMessages()

  // Check if user is already subscribed and track view
  useEffect(() => {
    const alreadySubscribed = newsletterAnalytics.isSubscribed()
    setIsSubscribed(alreadySubscribed)
    
    if (!alreadySubscribed) {
      newsletterAnalytics.trackView('homepage')
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")
    setMessageType("")
    setFieldErrors({})
    
    // Localized validation
    const formData = { email }
    const validation = validateForm(formData, commonValidationSchemas.newsletter)
    
    if (!validation.isValid) {
      setFieldErrors(validation.errors)
      setIsLoading(false)
      newsletterAnalytics.trackError('homepage', email, 'Validation failed')
      return
    }

    try {
      newsletterAnalytics.trackSubmit('homepage', email)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Success
      setMessage(successMessages.newsletter.subscribed())
      setMessageType("success")
      setEmail("")
      setSelectedSegment("")
      newsletterAnalytics.trackSuccess('homepage', email)
      newsletterAnalytics.markSubscribed(email)
      setIsSubscribed(true)
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : errorMessages.form.submissionFailed()
      setMessage(errorMessage)
      setMessageType("error")
      newsletterAnalytics.trackError('homepage', email, errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  // Show subscribed status for already subscribed users
  if (isSubscribed && !message) {
    return (
      <Card className={`bg-green-50 border-green-200 ${className}`}>
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-800">
                {t('alreadySubscribed.title')}
              </h3>
              <p className="text-sm text-green-600">
                {successMessages.newsletter.alreadySubscribed()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`bg-white shadow-lg ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-6 h-6 text-orange-500" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {t('title')}
            </h3>
            <p className="text-sm text-gray-600">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
                         <Input
               type="email"
               placeholder={t('emailPlaceholder')}
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className={`w-full ${fieldErrors['email'] ? 'border-red-500 focus:border-red-500' : ''}`}
               disabled={isLoading}
               aria-describedby={fieldErrors['email'] ? "email-error" : undefined}
             />
             {fieldErrors['email'] && (
               <p id="email-error" className="text-sm text-red-600 mt-1 flex items-center gap-1">
                 <AlertCircle className="w-4 h-4" />
                 {fieldErrors['email']}
               </p>
             )}
          </div>

          {/* Segment Selection */}
          {segments.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('interests')}
              </label>
              <div className="flex flex-wrap gap-2">
                {segments.map((segment) => (
                  <Badge
                    key={segment}
                    variant={selectedSegment === segment ? "default" : "outline"}
                    className="cursor-pointer hover:bg-orange-100"
                    onClick={() => setSelectedSegment(selectedSegment === segment ? "" : segment)}
                  >
                    {t(`segments.${segment}`, { fallback: segment })}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {tCommon('loading')}
              </>
            ) : (
              t('subscribe')
            )}
          </Button>

          {/* Message Display */}
          {message && (
            <div className={`p-3 rounded-md flex items-center gap-2 ${
              messageType === "success" 
                ? "bg-green-50 text-green-800 border border-green-200" 
                : "bg-red-50 text-red-800 border border-red-200"
            }`}>
              {messageType === "success" ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              <span className="text-sm">{message}</span>
            </div>
          )}

          {/* Privacy Notice */}
          <p className="text-xs text-gray-500">
            {t('privacyNotice')}{' '}
            <a href="/privacy" className="text-orange-500 hover:underline">
              {t('privacyPolicy')}
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  )
} 