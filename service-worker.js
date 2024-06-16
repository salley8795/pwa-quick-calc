const cacheName = 'quick-calc-cache-v2';
const resourcesToPrecache = [
  '/',
  '/index.html',
  '/quick-calc.html',
  '/form2.html',
  '/dashboard.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/styles.css', // if you have a separate CSS file
  '/script.js', // if you have a separate JS file
  '/offline.html'
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(resourcesToPrecache);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});
