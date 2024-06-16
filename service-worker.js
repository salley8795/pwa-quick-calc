const cacheName = 'pwa-quick-calc-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/quick-calc.html',
  '/form2.html',
  '/dashboard.html',
  '/manifest.json',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-180x180.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/maskable-icon-192x192.png',
  '/icons/maskable-icon-512x512.png',
  '/offline.html',
];

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install event');
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(filesToCache).catch((error) => {
        console.error('Failed to cache', error);
        filesToCache.forEach((file) => {
          fetch(file).then((response) => {
            if (!response.ok) {
              console.error('Failed to fetch and cache file:', file);
            }
          }).catch((fetchError) => {
            console.error('Fetch error:', fetchError);
          });
        });
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      return caches.match('/offline.html');
    })
  );
});
