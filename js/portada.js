/* Arucip · botones de la portada: Emergencia (PARO), modo claro/oscuro, ECG en movimiento y accesos a las secciones.
   Reutiliza los elementos de la app (#paro, #thm, .pk-ecg) para que se vean y se comporten igual. */
(function () {
  var c = document.getElementById("cover");
  if (!c) return;
  var ic = window.ARUCIP_ICONS;
  if (ic) Array.prototype.forEach.call(c.querySelectorAll("[data-ic]"), function (s) { s.innerHTML = ic.svg(s.getAttribute("data-ic")); });
  /* Botón de paro: copia del dibujo del encabezado. */
  var pb = document.querySelector("#paro .pb"), cp = document.getElementById("cv-paro");
  if (pb && cp) {
    /* Los ids (degradados y tornillos) se renombran en la copia: si quedaran repetidos, el botón del
       encabezado usaría los de la portada oculta y se vería apagado. */
    var html = pb.outerHTML.replace(/id="([^"]+)"/g, 'id="$1-c"').replace(/url\(#([^)]+)\)/g, 'url(#$1-c)').replace(/href="#([^"]+)"/g, 'href="#$1-c"');
    var tmp = document.createElement("div"); tmp.innerHTML = html; cp.appendChild(tmp.firstChild);
  }
  /* ECG animado: copia del trazado del encabezado. */
  var ecg = document.querySelector(".ph .pk-ecg"), ce = document.getElementById("cv-ecg");
  if (ecg && ce) ce.appendChild(ecg.cloneNode(true));
  function go(cb) {
    document.getElementById("cv-go").click();
    setTimeout(cb, 420);
  }
  if (cp) cp.onclick = function () { go(function () { var p = document.getElementById("paro"); if (p) p.click(); }); };
  Array.prototype.forEach.call(c.querySelectorAll("[data-tab]"), function (b) {
    b.onclick = function () { go(function () { var t = document.querySelector('.tabs button[data-v="' + b.getAttribute("data-tab") + '"]'); if (t) t.click(); }); };
  });
  /* El logo del encabezado (claro u oscuro) vuelve a la portada. */
  var first = document.querySelector(".ph-mark");
  Array.prototype.forEach.call(document.querySelectorAll(".ph-mark"), function (m) {
    if (m !== first) { m.setAttribute("role", "button"); m.addEventListener("click", function () { first.click(); }); }
  });
  /* Buscador general de la portada: al elegir un resultado se cierra la portada y se abre ese contenido. */
  var sh = document.getElementById("cv-search");
  if (sh && window.ARUCIP_SEARCH) window.ARUCIP_SEARCH.mount(sh, { scope: "all", placeholder: "Buscar en toda la app: signo, motivo, herramienta…", before: go });
  /* Apartados de «Más» que abren una categoría de Herramientas (Autocuidado, Calidad y seguridad, IA). */
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a[data-cat]") : null;
    if (!a) return;
    var cat = a.getAttribute("data-cat");
    setTimeout(function () {
      var ds = Array.prototype.slice.call(document.querySelectorAll("#tl > details"));
      var d = ds.filter(function (x) { var b = x.querySelector("summary b"); return b && b.textContent.trim() === cat; })[0];
      if (d) { ds.forEach(function (x) { if (x !== d) x.open = false; }); d.open = true; d.scrollIntoView({ block: "start" }); }
    }, 80);
  });
  /* Interruptor de tema: usa el de la app para quedar sincronizado. */
  var sw = document.getElementById("cv-thm"), thm = document.getElementById("thm");
  function sync() { sw.setAttribute("aria-checked", document.documentElement.dataset.mode === "dark" ? "true" : "false"); }
  if (sw && thm) {
    sw.onclick = function () { thm.click(); sync(); };
    new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ["data-mode", "data-theme"] });
    sync();
  }
})();
