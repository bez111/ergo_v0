module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/blog',
        'http://localhost:3000/docs',
        'http://localhost:3000/technology',
        'http://localhost:3000/ecosystem'
      ],
      numberOfRuns: 3,
      settings: {
        preset: 'mobile',
        throttlingMethod: 'simulate',
        formFactor: 'mobile',
        screenEmulation: {
          mobile: true,
          width: 360,
          height: 640,
          deviceScaleFactor: 2,
        },
        throttling: {
          rttMs: 150,
          throughputKbps: 1638.4,
          cpuSlowdownMultiplier: 4,
        },
      },
    },
    assert: {
      assertions: {
        // Performance score thresholds
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.95 }],
        'categories:seo': ['warn', { minScore: 0.95 }],
        
        // Core Web Vitals (P75 targets)
        'first-contentful-paint': ['warn', { maxNumericValue: 1800 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }], // LCP ≤ 2.5s
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }], // CLS ≤ 0.1
        'total-blocking-time': ['error', { maxNumericValue: 200 }], // Proxy for INP
        'interactive': ['warn', { maxNumericValue: 3800 }],
        'speed-index': ['warn', { maxNumericValue: 3400 }],
        
        // Bundle size budgets
        'total-byte-weight': ['error', { maxNumericValue: 400000 }], // 400KB total
        'unused-javascript': ['warn', { maxNumericValue: 120000 }], // 120KB unused JS
        'modern-image-formats': ['warn', { maxNumericValue: 50000 }], // Use WebP/AVIF
        'uses-optimized-images': ['warn', { maxNumericValue: 50000 }],
        'uses-text-compression': ['error', { maxNumericValue: 10000 }],
        
        // Network optimization
        'uses-long-cache-ttl': ['warn', { maxNumericValue: 10 }],
        'uses-rel-preconnect': ['warn', { maxNumericValue: 2 }],
        'uses-rel-preload': ['warn', { maxNumericValue: 2 }],
        
        // JavaScript execution
        'mainthread-work-breakdown': ['warn', { maxNumericValue: 4000 }],
        'bootup-time': ['warn', { maxNumericValue: 3500 }],
        'max-potential-fid': ['warn', { maxNumericValue: 130 }],
        
        // Image optimization
        'efficient-animated-content': ['warn', { maxNumericValue: 0 }],
        'offscreen-images': ['warn', { maxNumericValue: 100000 }],
        'unminified-css': ['error', { maxNumericValue: 0 }],
        'unminified-javascript': ['error', { maxNumericValue: 0 }],
        
        // Accessibility critical
        'image-alt': ['error', { maxNumericValue: 0 }],
        'heading-order': ['error', { maxNumericValue: 0 }],
        'color-contrast': ['warn', { maxNumericValue: 0 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
} 