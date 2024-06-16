const cacheName = 'quick-calc-v1';
const cacheFiles = [
  '/pwa-quick-calc/',
  '/pwa-quick-calc/index.html',
  '/pwa-quick-calc/quick-calc.html',
  '/pwa-quick-calc/form2.html',
  '/pwa-quick-calc/dashboard.html',
  '/pwa-quick-calc/manifest.json',
  '/pwa-quick-calc/icons/icon-128x128.png',
  '/pwa-quick-calc/icons/icon-144x144.png',
  '/pwa-quick-calc/icons/icon-152x152.png',
  '/pwa-quick-calc/icons/icon-180x180.png',
  '/pwa-quick-calc/icons/icon-192x192.png',
  '/pwa-quick-calc/icons/icon-512x512.png',
  '/pwa-quick-calc/icons/maskable-icon-192x192.png',
  '/pwa-quick-calc/icons/maskable-icon-512x512.png',
  '/pwa-quick-calc/icons/apple-touch-icon.png',
  '/pwa-quick-calc/css/style.css', // Add any other files you need to cache
  '/pwa-quick-calc/js/app.js' // Add any other files you need to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
