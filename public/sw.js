// This is an empty service worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      // Clear any old caches
      caches.keys().then((keys) => {
        return Promise.all(
          keys.map((key) => caches.delete(key))
        );
      })
    ])
  );
});

// Disable any service worker functionality
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
}); 