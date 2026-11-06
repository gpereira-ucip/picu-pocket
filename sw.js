/* Arucip · service worker (funcionamiento sin conexión)
 * Estrategia: RED PRIMERO. El caché es solo respaldo sin conexión.
 * - Cada carga con conexión revalida con el servidor (cache:'no-cache' => 304 liviano si no hubo cambios).
 * - Si la red tarda más de TIMEOUT_MS o falla, responde con la copia guardada.
 * - El contenido nuevo NO depende de cambiar este archivo: no hace falta subir versión al publicar.
 *   Solo editá ASSETS si agregás o quitás archivos.
 * Idea y base: Jorge Selandari. */
var CACHE = "arucip";
var TIMEOUT_MS = 4000;
var ASSETS = ["./", "index.html", "css/hubs.css", "css/portada.css", "js/data.js", "js/hubs.js", "js/portada.js", "js/buscador.js", "js/migrate.js",
  "assets/emblem-ar-ucip.png", "assets/logo-emblem-light.png", "assets/logo-emblem-dark.png", "assets/logo-wordmark-light.png", "assets/logo-wordmark-dark.png", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(ASSETS.map(function (u) { return c.add(new Request(u, { cache: "reload" })).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
function fromCache(req) {
  return caches.match(req, { ignoreSearch: true }).then(function (hit) {
    return hit || (req.mode === "navigate" ? caches.match("index.html") : undefined);
  });
}
function networkFirst(e) {
  var req = e.request, network = fetch(req, { cache: "no-cache" });
  e.waitUntil(network.then(function (res) {
    if (!res.ok) return;
    var copy = res.clone();
    return caches.open(CACHE).then(function (c) { return c.put(req, copy); });
  }).catch(function () {}));
  return new Promise(function (resolve) {
    var done = false;
    function finish(r) { if (!done) { done = true; resolve(r); } }
    var t = setTimeout(function () { fromCache(req).then(function (h) { if (h) finish(h); }); }, TIMEOUT_MS);
    network.then(function (res) {
      clearTimeout(t);
      if (res.ok) finish(res); else fromCache(req).then(function (h) { finish(h || res); });
    }).catch(function () {
      clearTimeout(t);
      fromCache(req).then(function (h) { finish(h || Response.error()); });
    });
  });
}
self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  e.respondWith(networkFirst(e));
});
