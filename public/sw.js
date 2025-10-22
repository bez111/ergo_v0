// Ergo Platform Service Worker
// Advanced caching strategy for maximum performance and SEO

const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `ergo-cache-${CACHE_VERSION}`;
const OFFLINE_URL = '/offline.html';

// Assets to cache immediately
const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico',
  '/logo.png',
  // CSS files are handled by cacheFirst strategy below
  // Critical pages for SEO
  '/wallet',
  '/technology',
  '/ecosystem',
  '/use/get-erg',
  '/learn/faq',
  '/start'
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Network first, fallback to cache
  networkFirst: [
    '/api/',
    '/blog/',
  ],
  // Cache first, update in background
  cacheFirst: [
    '/static/',
    '/images/',
    '/_next/static/',
    '/fonts/',
  ],
  // Stale while revalidate
  staleWhileRevalidate: [
    '/',
    '/wallet',
    '/technology',
    '/ecosystem',
    '/docs',
    '/learn',
  ]
};

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching critical assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - implement cache strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome-extension requests
  if (url.protocol === 'chrome-extension:') return;

  // Network First Strategy
  if (CACHE_STRATEGIES.networkFirst.some(path => url.pathname.includes(path))) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Cache First Strategy
  if (CACHE_STRATEGIES.cacheFirst.some(path => url.pathname.includes(path))) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Stale While Revalidate Strategy
  if (CACHE_STRATEGIES.staleWhileRevalidate.some(path => url.pathname.includes(path))) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Default: Network first with cache fallback
  event.respondWith(networkFirst(request));
});

// Network First Strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match(OFFLINE_URL);
    }
    throw error;
  }
}

// Cache First Strategy
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    if (request.mode === 'navigate') {
      return caches.match(OFFLINE_URL);
    }
    throw error;
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });
  
  return cachedResponse || fetchPromise;
}

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncForms());
  }
});

async function syncForms() {
  // Sync any offline form submissions
  console.log('[SW] Syncing offline forms');
}

// Push notifications for SEO updates
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update from Ergo Platform',
    icon: '/icon-192x192.png',
    badge: '/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/icon-72x72.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-72x72.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Ergo Platform', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('https://ergoblockchain.org')
    );
  }
});

// Periodic background sync for fresh content
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-content') {
    event.waitUntil(updateContent());
  }
});

async function updateContent() {
  // Prefetch important pages
  const cache = await caches.open(CACHE_NAME);
  const urls = [
    '/api/search-index',
    '/sitemap.xml',
    '/blog',
  ];
  
  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        await cache.put(url, response);
      }
    } catch (error) {
      console.error(`[SW] Failed to update ${url}:`, error);
    }
  }
}

console.log('[SW] Service Worker loaded successfully'); 