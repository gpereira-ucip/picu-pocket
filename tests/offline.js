/* Arucip · prueba de funcionamiento sin conexión (ítem 35 de docs/PENDIENTES.md).
   Uso:  NODE_PATH=$(npm root -g) node tests/offline.js
   1) Estático: todo archivo local que usan index.html, css/, js/ y el manifest existe y está en ASSETS de sw.js;
      todo lo que figura en ASSETS existe; el manifest no trae palabras que se decidió quitar.
   2) En navegador: sirve el repositorio en localhost, espera al service worker, corta la red y recarga:
      la app tiene que abrir y navegar igual, sin pedidos fallidos ni imágenes rotas (incluye POCUS y Cards). */
const { chromium } = require("playwright");
const http = require("http");
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
let fails = 0;
const ok = (c, m) => { console.log((c ? "OK   " : "FALLA") + " " + m); if (!c) fails++; };
const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");

/* ---------- 1) chequeo estático ---------- */
const sw = read("sw.js");
const ASSETS = JSON.parse(sw.match(/var ASSETS = (\[[\s\S]*?\]);/)[1]);
const refs = new Set();
const html = read("index.html");
const strip = (s) => s.replace(/data:[^"')\s]+/g, "");
const scan = (txt, base) => {
  txt = strip(txt);
  const re = /(?:src|href)=\\?["']([^"'#?\\$<>{}\s]+)|url\(\s*["']?([^"')\s]+)["']?\s*\)|["'`]((?:assets|css|js)\/[A-Za-z0-9_.\/-]+\.[a-z0-9]+)/g;
  let m;
  while ((m = re.exec(txt))) {
    let u = m[1] || m[2] || m[3];
    if (!u || /^(https?:|mailto:|tel:|data:|blob:|javascript:|\/\/|#)/.test(u) || !/\.[a-z0-9]+$/i.test(u)) continue;
    refs.add(path.posix.normalize(path.posix.join(base, u)));
  }
};
scan(html, "");
fs.readdirSync(path.join(ROOT, "css")).forEach((f) => scan(read("css/" + f), "css"));
fs.readdirSync(path.join(ROOT, "js")).filter((f) => f.endsWith(".js")).forEach((f) => scan(read("js/" + f), ""));
fs.readdirSync(path.join(ROOT, "js/datos")).forEach((f) => refs.add("js/datos/" + f)); /* solo datos: deben estar todos en ASSETS */
const man = JSON.parse(read("manifest.webmanifest"));
(man.icons || []).forEach((i) => refs.add(i.src));
const used = [...refs].filter((u) => u !== "sw.js");
const noExiste = used.filter((u) => !fs.existsSync(path.join(ROOT, u)));
const fueraDeAssets = used.filter((u) => fs.existsSync(path.join(ROOT, u)) && !ASSETS.includes(u));
const assetsRotos = ASSETS.filter((u) => u !== "./" && !fs.existsSync(path.join(ROOT, u)));
ok(used.length >= 10, "se detectaron los archivos locales que usa la app (" + used.length + ")");
ok(noExiste.length === 0, "todo archivo referenciado existe" + (noExiste.length ? ": " + noExiste.join(", ") : ""));
ok(fueraDeAssets.length === 0, "todo archivo que usa la app está en ASSETS de sw.js" + (fueraDeAssets.length ? ": faltan " + fueraDeAssets.join(", ") : ""));
ok(assetsRotos.length === 0, "todo lo que figura en ASSETS existe" + (assetsRotos.length ? ": " + assetsRotos.join(", ") : ""));
ok(!/biblia|\btips\b|picu pocket|funciona sin conexi/i.test(JSON.stringify(man)), "manifest sin «Biblia», «Tips», «Picu Pocket» ni «Funciona sin conexión»");

/* ---------- 2) en navegador, sin red ---------- */
const MIME = { html: "text/html; charset=utf-8", js: "text/javascript; charset=utf-8", css: "text/css; charset=utf-8", png: "image/png", svg: "image/svg+xml", json: "application/json", webmanifest: "application/manifest+json" };
const srv = http.createServer((q, r) => {
  let u = decodeURIComponent(q.url.split("?")[0]); if (u === "/") u = "/index.html";
  const f = path.join(ROOT, path.normalize(u));
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" });
  fs.createReadStream(f).pipe(r);
});

(async () => {
  await new Promise((res) => srv.listen(0, "127.0.0.1", res));
  const URL = "http://localhost:" + srv.address().port + "/";
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  const p = await ctx.newPage();
  await p.goto(URL);
  const activo = await p.evaluate(() => Promise.race([
    navigator.serviceWorker.ready.then((r) => !!r.active),
    new Promise((res) => setTimeout(() => res(false), 15000)),
  ]));
  ok(activo, "el service worker se instala y queda activo");
  await p.waitForTimeout(1500);
  const enCache = await p.evaluate(async () => { const c = await caches.open("arucip"); return (await c.keys()).map((k) => new URL(k.url).pathname.replace(/^\//, "") || "./"); });
  const sinCachear = ASSETS.filter((a) => !enCache.includes(a));
  ok(sinCachear.length === 0, "todos los ASSETS quedaron guardados" + (sinCachear.length ? ": faltan " + sinCachear.join(", ") : ""));

  await ctx.setOffline(true);
  await new Promise((res) => srv.close(res)); srv.closeAllConnections && srv.closeAllConnections();
  const errs = [], fallidos = [];
  p.on("pageerror", (e) => errs.push(String(e)));
  p.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });
  p.on("requestfailed", (q) => { if (q.url().startsWith(URL)) fallidos.push(q.url().replace(URL, "")); });
  let abrio = true;
  try { await p.reload({ waitUntil: "load", timeout: 30000 }); } catch (e) { abrio = false; }
  await p.waitForTimeout(800);
  ok(abrio && (await p.evaluate(() => !!window.ARUCIP_DATA && typeof window.ARUCIP_GO === "function")), "sin red, la app abre (index, datos y lógica desde el caché)");
  await p.evaluate(() => { const o = document.getElementById("ack-ok"); if (o) o.click(); });
  const rotas = [];
  for (const v of ["triage", "casos", "ind", "fav", "more", "tools", "bib", "tips", "ck", "calc", "pocus", "burn", "cards"]) {
    await p.evaluate((x) => window.ARUCIP_GO(x), v);
    await p.evaluate(() => document.querySelectorAll(".view:not([hidden]) details").forEach((d) => (d.open = true)));
    await p.evaluate(() => document.querySelectorAll(".view:not([hidden]) img").forEach((i) => (i.loading = "eager")));
    await p.waitForTimeout(250);
    const r = await p.evaluate(() => [...document.querySelectorAll(".view:not([hidden]) img")].filter((i) => i.getAttribute("src") && i.complete && i.naturalWidth === 0).map((i) => i.getAttribute("src").slice(0, 60)));
    r.forEach((x) => rotas.push(v + ": " + x));
  }
  await p.evaluate(() => document.querySelectorAll("img").forEach((i) => (i.loading = "eager")));
  await p.waitForTimeout(500);
  const rotasTodas = await p.evaluate(() => [...document.querySelectorAll("img")].filter((i) => i.getAttribute("src") && i.complete && i.naturalWidth === 0).map((i) => i.getAttribute("src").slice(0, 60)));
  ok(rotas.length === 0 && rotasTodas.length === 0, "sin red, ninguna imagen rota (portada, POCUS, Cards, QR)" + (rotas.length + rotasTodas.length ? ": " + rotas.concat(rotasTodas).slice(0, 5).join(" | ") : ""));
  ok(fallidos.length === 0, "sin red, ningún pedido local falla" + (fallidos.length ? ": " + [...new Set(fallidos)].slice(0, 5).join(", ") : ""));
  ok(errs.length === 0, "sin red, sin errores de consola" + (errs.length ? ": " + errs.slice(0, 3).join(" | ") : ""));
  await b.close();
  console.log(fails ? "\n" + fails + " falla(s)" : "\nTodo bien");
  process.exit(fails ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
