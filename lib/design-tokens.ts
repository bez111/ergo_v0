export const designTokens = {
  colors: {
    brand: {
      primary: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316', // Main Ergo orange
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
      },
      secondary: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee', // Ergo cyan
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      dark: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717', // Main dark
        950: '#0a0a0a',
      }
    },
    status: {
      success: {
        50: '#f0fdf4',
        100: '#dcfce7',
        500: '#10b981',
        600: '#059669',
        900: '#14532d',
      },
      warning: {
        50: '#fffbeb',
        100: '#fef3c7',
        500: '#f59e0b',
        600: '#d97706',
        900: '#78350f',
      },
      error: {
        50: '#fef2f2',
        100: '#fee2e2',
        500: '#ef4444',
        600: '#dc2626',
        900: '#7f1d1d',
      },
      info: {
        50: '#eff6ff',
        100: '#dbeafe',
        500: '#3b82f6',
        600: '#2563eb',
        900: '#1e3a8a',
      }
    },
    neutral: {
      0: '#ffffff',
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    }
  },
  
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',    // 16px
    lg: '1.5rem',  // 24px
    xl: '2rem',    // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
    '4xl': '6rem', // 96px
    '5xl': '8rem', // 128px
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',   // 4px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    '2xl': '1rem',   // 16px
    '3xl': '1.5rem', // 24px
    full: '9999px',
  },
  
  typography: {
    fontSizes: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      base: '1rem',    // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
    },
    fontWeights: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeights: {
      none: '1',
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
      loose: '2',
    }
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    glow: '0 0 20px rgb(249 115 22 / 0.3)', // Orange glow
    'glow-cyan': '0 0 20px rgb(34 211 238 / 0.3)', // Cyan glow
  },
  
  animation: {
    durations: {
      fast: '150ms',
      normal: '250ms',
      slow: '400ms',
    },
    easings: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  },
  
  // Component-specific tokens
  components: {
    button: {
      borderRadius: '0.75rem', // 12px
      padding: {
        sm: '0.5rem 1rem',
        md: '0.75rem 1.5rem',
        lg: '1rem 2rem',
      }
    },
    card: {
      borderRadius: '0.75rem', // 12px
      padding: '1.5rem',
    }
  }
}

// Export individual token categories for easier access
export const { colors, spacing, borderRadius, typography, shadows, animation, components } = designTokens

// Helper function to access nested token values
export const getToken = (path: string): any => {
  return path.split('.').reduce((obj: any, key: string) => obj?.[key], designTokens)
}

// Design principles for Ergo
export const designPrinciples = {
  accessibility: {
    title: "Accessibility First",
    description: "Every component is built with accessibility in mind, ensuring our applications are usable by everyone.",
    guidelines: [
      "Maintain WCAG 2.1 AA compliance",
      "Provide keyboard navigation support",
      "Ensure sufficient color contrast ratios",
      "Include proper ARIA labels and roles"
    ]
  },
  simplicity: {
    title: "Radical Simplicity",
    description: "Complex blockchain concepts made simple through clear, minimalistic design that doesn't overwhelm users.",
    guidelines: [
      "Reduce cognitive load with clean interfaces",
      "Use whitespace effectively",
      "Prioritize essential information",
      "Eliminate unnecessary visual elements"
    ]
  },
  consistency: {
    title: "Systematic Consistency",
    description: "Predictable patterns and behaviors that users can learn once and apply everywhere.",
    guidelines: [
      "Use consistent spacing and typography",
      "Maintain color usage patterns",
      "Apply interaction patterns uniformly",
      "Ensure cross-platform compatibility"
    ]
  },
  privacy: {
    title: "Privacy-Focused Design",
    description: "Design choices that respect user privacy and support Ergo's privacy-first philosophy.",
    guidelines: [
      "Minimize data exposure in interfaces",
      "Provide clear privacy controls",
      "Use progressive disclosure",
      "Support anonymous interactions"
    ]
  },
  decentralization: {
    title: "Decentralized Thinking",
    description: "Interfaces that embody decentralized principles and don't rely on centralized authorities.",
    guidelines: [
      "Avoid single points of failure in UX",
      "Support peer-to-peer interactions",
      "Enable user sovereignty",
      "Promote transparent processes"
    ]
  }
} 