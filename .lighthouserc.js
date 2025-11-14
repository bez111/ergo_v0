module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000',
        'http://localhost:3000/blog',
        'http://localhost:3000/blog/ergo-in-5-minutes',
        'http://localhost:3000/blog/sigma-protocols-explained',
        'http://localhost:3000/technology',
        'http://localhost:3000/use'
      ],
      startServerCommand: 'npm run build && npm run start',
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        // Performance thresholds
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        
        // Core Web Vitals
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'first-input-delay': ['warn', { maxNumericValue: 100 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        
        // SEO specific
        'meta-description': 'error',
        'document-title': 'error',
        'canonical': 'error',
        'robots-txt': 'warn',
        'structured-data': 'warn',
        
        // Performance specific
        'unused-javascript': ['warn', { maxNumericValue: 200000 }],
        'unused-css-rules': ['warn', { maxNumericValue: 100000 }],
        'render-blocking-resources': 'warn',
        'uses-optimized-images': 'warn',
        'uses-webp-images': 'warn',
        'uses-text-compression': 'error',
        
        // Accessibility
        'color-contrast': 'error',
        'image-alt': 'error',
        'heading-order': 'warn',
        'link-name': 'error'
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}