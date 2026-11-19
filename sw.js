// Offline helper for the Lenten Cookbook.
// Pages and app code: try the network first so updates show up right away,
// fall back to the saved copy when there's no signal.
// Icons and fonts: use the saved copy first (they rarely change).
const CACHE = 'lenten-cookbook-v6';
const CORE = [
  './',
  './index.html',
  './app.css',
  './app.js',
  './recipes.js',
  './fasting.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './manifest-test.webmanifest',
  './icons/test/icon-192.png',
  './icons/test/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isPage = req.mode === 'navigate' || (url.origin === location.origin && /\/(index\.html)?$/.test(url.pathname));
  const isCode = url.origin === location.origin && /\.(js|css|webmanifest)$/.test(url.pathname) && !url.pathname.endsWith('/sw.js');
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);

  // Pages and app code: newest from the network, saved copy when offline
  if (isPage || isCode) {
    e.respondWith(
      fetch(req)
        .then(res => {
          if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(isPage ? './index.html' : req, copy)); }
          return res;
        })
        .catch(() => caches.match(isPage ? './index.html' : req, { ignoreSearch: true }))
    );
    return;
  }

  if (url.origin === location.origin || isFont) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        if (res.ok || res.type === 'opaque') {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }))
    );
  }
});
