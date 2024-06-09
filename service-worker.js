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
      .
