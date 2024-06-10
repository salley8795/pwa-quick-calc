const cacheName = 'quick-calc-cache-v1';
const resourcesToPrecache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/styles.css', // if you have a separate CSS file
  '/script.js', // if you have a separate JS file
  '/icons/apple-touch-icon.png', // Add your Apple touch icon here
  '/icons/maskable-icon-192x192.png',
  '/icons/maskable-icon-512x512.png',
  '/offline.html' // Add your fallback page here
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        console.log('Caching resources during install');
        return cache.addAll(resourcesToPrecache);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
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
