// PICU Pocket – service worker: guarda la app para usarla sin conexión.
// Al publicar una versión nueva, cambiar CACHE (p. ej. picu-v0.49) para forzar la actualización.
var CACHE = "picu-v0.49";
var FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  // La app Carga Mental (subcarpeta /carga-mental/) tiene su propio service worker: no tocarla. NO BORRAR esta línea.
  if (new URL(r.url).pathname.indexOf("/carga-mental/") !== -1) return;
  if (r.mode === "navigate") {
    // Red primero (para recibir actualizaciones); sin conexión, la copia guardada.
    e.respondWith(fetch(r).then(function (res) {
      var cp = res.clone(); caches.open(CACHE).then(function (c) { c.put("index.html", cp); }); return res;
    }).catch(function () { return caches.match("index.html"); }));
    return;
  }
  e.respondWith(caches.match(r).then(function (m) { return m || fetch(r); }));
});
