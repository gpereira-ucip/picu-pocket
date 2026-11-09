const CACHE = 'carga-mental-v1.1.0';
const SHELL = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'cover.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Firestore/Auth traffic: never cache
  if (url.hostname.includes('googleapis.com') || url.hostname.includes('firebaseio')) return;
  // App shell + Firebase SDK scripts: stale-while-revalidate
  e.respondWith(
    caches.open(CACHE).then(async c => {
      // Los accesos directos (./?go=…) usan la misma página guardada
      const hit = await c.match(req, {ignoreSearch: req.mode === 'navigate'});
      const net = fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
      for (const c of cs) { if ('focus' in c) return c.focus(); }
      return self.clients.openWindow('./');
    })
  );
});
