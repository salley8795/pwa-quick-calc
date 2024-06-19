const cacheName = 'pwa-cache-v1';
const assetsToCache = [
  './index.html',
  './quick-calc.html',
  './data-form-1.html',
  './dashboard.html',
  './manifest.json',
  './icons/apple-touch-icon.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-180x180.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './icons/maskable-icon-192x192.png',
  './icons/maskable-icon-512x512.png',
  './styles.css', // if you have a separate CSS file
  './scripts.js',  // if you have a separate JS file
  './offline.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(assetsToCache);
      })
      .catch(error => {
        console.error('Failed to cache assets:', error);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== cacheName).map(name => caches.delete(name))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(() => {
        return caches.match('./offline.html');
      })
  );
});
