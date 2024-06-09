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
  '/icons/apple-touch-icon-152x152.png', // Example sizes
  '/icons/apple-touch-icon-180x180.png',
  '/icons/maskable-icon-192x192.png',
  '/icons/maskable-icon-512x512.png',
  '/offline.html' // Add your fallback page here
];

// Installation: Cache resources
self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        console.log('Caching resources during install');
        return cache.addAll(resourcesToPrecache);
      })
      .catch(error => {
        console.error('Failed to cache resources during install:', error);
      })
  );
});

// Activation: Clean up old caches
self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
  const cacheWhitelist = [cacheName];
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            if (!cacheWhitelist.includes(cache)) {
              console.log('Deleting old cache:', cache);
              return caches.delete(cache);
            }
          })
        );
      })
  );
});

// Fetching: Serve cached resources if available, otherwise fetch from network
self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          console.log('Serving from cache:', event.request.url);
          return cachedResponse;
        }
        console.log('Fetching from network:', event.request.url);
        return fetch(event.request).catch(error => {
          console.error('Fetch failed; returning offline page instead.', error);
          return caches.match('/offline.html'); // Return the fallback page
        });
      })
  );
});
