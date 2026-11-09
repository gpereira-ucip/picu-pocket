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
  /* «Más información y créditos»: cierra la portada y abre «Acerca de esta versión» (equipo, aviso y fuentes). */
  var more = document.getElementById("cv-more");
  if (more) more.onclick = function () {
    go(function () { var a = document.createElement("a"); a.setAttribute("data-tool", "about"); document.body.appendChild(a); a.click(); a.remove(); });
  };
  /* El logo del encabezado (claro u oscuro) vuelve a la portada. */
  var first = document.querySelector(".ph-mark");
  Array.prototype.forEach.call(document.querySelectorAll(".ph-mark"), function (m) {
    if (m !== first) { m.setAttribute("role", "button"); m.addEventListener("click", function () { first.click(); }); }
  });
  /* Buscador general de la portada: al elegir un resultado se cierra la portada y se abre ese contenido. */
  var sh = document.getElementById("cv-search");
  if (sh && window.ARUCIP_SEARCH) window.ARUCIP_SEARCH.mount(sh, { scope: "all", placeholder: "Ej.: fiebre, shock, midazolam…", before: go });
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

  /* «‹ Volver» en las pantallas principales (todas menos la portada): lleva a la sección anterior; si no hay, a la portada. */
  (function () {
    var stack = [], cur = null, going = false, ROOTS = ["triage", "ind", "fav", "casos", "more"];
    function curTab() {
      var v = document.querySelector(".view:not([hidden])");
      if (!v) return null;
      var id = v.id.slice(2);
      return window.ARUCIP_TAB ? window.ARUCIP_TAB(id) : id;
    }
    function ensure() {
      ROOTS.forEach(function (r) {
        var v = document.getElementById("v-" + r);
        if (!v) return;
        var f = v.firstElementChild;
        if (f && (f.classList.contains("back") || f.hasAttribute("data-rb"))) return;
        if (v.querySelector(".back")) return;
        var b = document.createElement("button");
        b.className = "btn g back"; b.type = "button"; b.setAttribute("data-rb", ""); b.textContent = "‹ Volver";
        v.insertBefore(b, v.firstChild);
      });
    }
    function onChange() {
      var n = curTab();
      if (n && n !== cur) { if (cur && !going) stack.push(cur); cur = n; }
      going = false;
      ensure();
    }
    new MutationObserver(onChange).observe(document.body, { subtree: true, attributes: true, attributeFilter: ["hidden"] });
    ROOTS.forEach(function (r) {
      var v = document.getElementById("v-" + r);
      if (v) new MutationObserver(ensure).observe(v, { childList: true });
    });
    document.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-rb]") : null;
      if (!b) return;
      var prev = stack.pop();
      if (prev) {
        var t = document.querySelector('.tabs button[data-v="' + prev + '"]');
        going = true; if (t) t.click();
      } else { var m = document.querySelector(".ph-mark"); if (m) m.click(); }
    });
    cur = curTab(); ensure();
  })();
  /* «‹ Volver» también en las pantallas secundarias (Checklists, Calculadoras, Cards, POCUS, Quemados, Herramientas,
     Fórmulas y Notas): vuelve a la pantalla desde la que se llegó, aunque no sea una pestaña de la barra. */
  (function () {
    var SEC = ["ck", "calc", "tools", "burn", "bib", "pocus", "cards", "tips"], hist = [], cur = null, going = false;
    function curView() { var v = document.querySelector(".view:not([hidden])"); return v ? v.id.slice(2) : null; }
    function ensure() {
      SEC.forEach(function (r) {
        var v = document.getElementById("v-" + r);
        if (!v || v.querySelector(".back")) return;
        var b = document.createElement("button");
        b.className = "btn g back"; b.type = "button"; b.setAttribute("data-sb", ""); b.textContent = "‹ Volver";
        v.insertBefore(b, v.firstChild);
      });
    }
    function onChange() {
      var n = curView();
      if (n && n !== cur) {
        if (!going) {
          if (hist.length && hist[hist.length - 1] === n) hist.pop();
          else if (cur && cur !== "tool") { hist.push(cur); if (hist.length > 30) hist.shift(); }
        }
        cur = n;
      }
      going = false;
      ensure();
    }
    new MutationObserver(onChange).observe(document.body, { subtree: true, attributes: true, attributeFilter: ["hidden"] });
    SEC.forEach(function (r) {
      var v = document.getElementById("v-" + r);
      if (v) new MutationObserver(ensure).observe(v, { childList: true });
    });
    document.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-sb]") : null;
      if (!b) return;
      var prev = hist.pop();
      going = true;
      if (prev && window.ARUCIP_GO) window.ARUCIP_GO(prev);
      else { var t = document.querySelector('.tabs button[data-v="triage"]'); if (t) t.click(); }
    });
    cur = curView(); ensure();
  })();
})();
