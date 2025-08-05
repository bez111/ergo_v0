import { designTokens } from './design-tokens'

// Theme types
export type ThemeMode = 'light' | 'dark' | 'system'

export interface ThemeColors {
  background: {
    primary: string
    secondary: string
    tertiary: string
  }
  text: {
    primary: string
    secondary: string
    tertiary: string
    accent: string
  }
  border: {
    primary: string
    secondary: string
    accent: string
  }
  surface: {
    primary: string
    secondary: string
    elevated: string
    overlay: string
  }
  brand: typeof designTokens.colors.brand
  status: typeof designTokens.colors.status
}

// Dark theme (current default)
export const darkTheme: ThemeColors = {
  background: {
    primary: '#000000',
    secondary: '#171717',
    tertiary: '#262626',
  },
  text: {
    primary: '#ffffff',
    secondary: '#d4d4d4',
    tertiary: '#a3a3a3',
    accent: '#f97316',
  },
  border: {
    primary: '#404040',
    secondary: '#525252',
    accent: '#f97316',
  },
  surface: {
    primary: '#171717',
    secondary: '#262626',
    elevated: '#404040',
    overlay: 'rgba(0, 0, 0, 0.8)',
  },
  brand: designTokens.colors.brand,
  status: designTokens.colors.status,
}

// Light theme
export const lightTheme: ThemeColors = {
  background: {
    primary: '#ffffff',
    secondary: '#fafafa',
    tertiary: '#f5f5f5',
  },
  text: {
    primary: '#171717',
    secondary: '#525252',
    tertiary: '#737373',
    accent: '#ea580c',
  },
  border: {
    primary: '#e5e5e5',
    secondary: '#d4d4d4',
    accent: '#ea580c',
  },
  surface: {
    primary: '#ffffff',
    secondary: '#fafafa',
    elevated: '#f5f5f5',
    overlay: 'rgba(255, 255, 255, 0.9)',
  },
  brand: {
    ...designTokens.colors.brand,
    primary: {
      ...designTokens.colors.brand.primary,
      500: '#ea580c', // Slightly darker orange for light theme
    }
  },
  status: designTokens.colors.status,
}

// Theme context
export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

// CSS Custom Properties для тем
export const generateThemeCSS = (theme: ThemeColors) => {
  return {
    '--bg-primary': theme.background.primary,
    '--bg-secondary': theme.background.secondary,
    '--bg-tertiary': theme.background.tertiary,
    '--text-primary': theme.text.primary,
    '--text-secondary': theme.text.secondary,
    '--text-tertiary': theme.text.tertiary,
    '--text-accent': theme.text.accent,
    '--border-primary': theme.border.primary,
    '--border-secondary': theme.border.secondary,
    '--border-accent': theme.border.accent,
    '--surface-primary': theme.surface.primary,
    '--surface-secondary': theme.surface.secondary,
    '--surface-elevated': theme.surface.elevated,
    '--surface-overlay': theme.surface.overlay,
  }
}

// Hook для работы с темами
export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeMode>('dark')
  const [systemTheme, setSystemTheme] = React.useState<'light' | 'dark'>('dark')

  React.useEffect(() => {
    // Определяем системную тему
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light')

    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const resolvedTheme = currentTheme === 'system' ? systemTheme : currentTheme
  const theme = themes[resolvedTheme]

  const setTheme = (newTheme: ThemeMode) => {
    setCurrentTheme(newTheme)
    localStorage.setItem('ui-kit-theme', newTheme)
    
    // Apply CSS custom properties
    const root = document.documentElement
    const cssVars = generateThemeCSS(themes[newTheme === 'system' ? systemTheme : newTheme])
    
    Object.entries(cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }

  // Load saved theme on mount
  React.useEffect(() => {
    const saved = localStorage.getItem('ui-kit-theme') as ThemeMode
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      setTheme(saved)
    }
  }, [])

  return {
    theme,
    currentTheme,
    resolvedTheme,
    setTheme,
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
  }
}

// Utility classes для тем
export const themeClasses = {
  light: {
    bg: {
      primary: 'bg-white',
      secondary: 'bg-neutral-50', 
      tertiary: 'bg-neutral-100',
    },
    text: {
      primary: 'text-neutral-900',
      secondary: 'text-neutral-600',
      tertiary: 'text-neutral-500',
    },
    border: {
      primary: 'border-neutral-200',
      secondary: 'border-neutral-300',
    }
  },
  dark: {
    bg: {
      primary: 'bg-black',
      secondary: 'bg-neutral-900',
      tertiary: 'bg-neutral-800',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-neutral-300',
      tertiary: 'text-neutral-400',
    },
    border: {
      primary: 'border-neutral-700',
      secondary: 'border-neutral-600',
    }
  }
}

// Responsive и mobile-friendly анимации
export const getAnimationConfig = (isMobile: boolean, prefersReducedMotion: boolean) => {
  if (prefersReducedMotion) {
    return {
      duration: 0,
      scale: 1,
      y: 0,
    }
  }

  return {
    duration: isMobile ? 0.2 : 0.3,
    scale: isMobile ? 1.02 : 1.05,
    y: isMobile ? -2 : -5,
  }
}

// Media query hooks
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    media.addEventListener('change', listener)
    
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

export const useIsMobile = () => useMediaQuery('(max-width: 768px)')
export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)')

// React import для хуков
import React from 'react' 