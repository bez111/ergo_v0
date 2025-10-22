/**
 * Localized Validation System
 * Principal Localization Architect Implementation
 */

import { useTranslations } from 'next-intl'

export interface ValidationResult {
  isValid: boolean
  message?: string
  field?: string
}

export interface ValidationRules {
  required?: boolean
  email?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => boolean
}

/**
 * Localized validation hook with ICU MessageFormat support
 */
export function useLocalizedValidation() {
  const t = useTranslations('validation')

  const validateField = (
    value: string,
    rules: ValidationRules,
    fieldName: string
  ): ValidationResult => {
    // Required validation
    if (rules.required && (!value || value.trim() === '')) {
      return {
        isValid: false,
        message: t('required', { field: fieldName }),
        field: fieldName
      }
    }

    // Skip other validations if field is empty and not required
    if (!value || value.trim() === '') {
      return { isValid: true }
    }

    // Email validation
    if (rules.email && !/^\S+@\S+\.\S+$/.test(value)) {
      return {
        isValid: false,
        message: t('email.invalid'),
        field: fieldName
      }
    }

    // Min length validation
    if (rules.minLength && value.length < rules.minLength) {
      return {
        isValid: false,
        message: t('minLength', { 
          field: fieldName, 
          min: rules.minLength,
          current: value.length 
        }),
        field: fieldName
      }
    }

    // Max length validation
    if (rules.maxLength && value.length > rules.maxLength) {
      return {
        isValid: false,
        message: t('maxLength', { 
          field: fieldName, 
          max: rules.maxLength,
          current: value.length 
        }),
        field: fieldName
      }
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(value)) {
      return {
        isValid: false,
        message: t('pattern', { field: fieldName }),
        field: fieldName
      }
    }

    // Custom validation
    if (rules.custom && !rules.custom(value)) {
      return {
        isValid: false,
        message: t('custom', { field: fieldName }),
        field: fieldName
      }
    }

    return { isValid: true }
  }

  const validateForm = (
    formData: Record<string, string>,
    validationSchema: Record<string, ValidationRules>
  ): { isValid: boolean; errors: Record<string, string> } => {
    const errors: Record<string, string> = {}
    let isValid = true

    Object.entries(validationSchema).forEach(([fieldName, rules]) => {
      const value = formData[fieldName] || ''
      const result = validateField(value, rules, fieldName)
      
      if (!result.isValid && result.message) {
        errors[fieldName] = result.message
        isValid = false
      }
    })

    return { isValid, errors }
  }

  return {
    validateField,
    validateForm,
    // Convenience methods for common validations
    validateEmail: (email: string) => validateField(email, { required: true, email: true }, 'email'),
    validateRequired: (value: string, fieldName: string) => 
      validateField(value, { required: true }, fieldName)
  }
}

/**
 * Common validation schemas for reuse
 */
export const commonValidationSchemas = {
  newsletter: {
    email: { required: true, email: true }
  },
  contact: {
    name: { required: true, minLength: 2, maxLength: 100 },
    email: { required: true, email: true },
    message: { required: true, minLength: 10, maxLength: 1000 }
  },
  search: {
    query: { required: true, minLength: 1, maxLength: 200 }
  }
}

/**
 * Success message helper with ICU support
 */
export function useSuccessMessages() {
  const t = useTranslations('success')

  return {
    newsletter: {
      subscribed: () => t('newsletter.subscribed'),
      alreadySubscribed: () => t('newsletter.alreadySubscribed'),
      confirmationSent: (email: string) => t('newsletter.confirmationSent', { email })
    },
    contact: {
      sent: () => t('contact.sent'),
      received: () => t('contact.received')
    },
    general: {
      saved: () => t('general.saved'),
      updated: () => t('general.updated'),
      deleted: () => t('general.deleted')
    }
  }
}

/**
 * Error message helper with ICU support
 */
export function useErrorMessages() {
  const t = useTranslations('errors')

  return {
    network: {
      offline: () => t('network.offline'),
      timeout: () => t('network.timeout'),
      serverError: () => t('network.serverError')
    },
    form: {
      submissionFailed: () => t('form.submissionFailed'),
      invalidData: () => t('form.invalidData')
    },
    general: {
      unexpected: () => t('general.unexpected'),
      tryAgain: () => t('general.tryAgain')
    }
  }
} 