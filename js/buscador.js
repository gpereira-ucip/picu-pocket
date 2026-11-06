/* Arucip · buscador predictivo.
   Dos usos:
   - portada: busca en toda la app (motivos de ingreso, aparatos, signos y síntomas, herramientas, checklists,
     calculadoras, POCUS y quemados);
   - «Motivos de ingreso»: solo aparatos, aspectos, signos, síntomas y motivos.
   Tolera acentos y un error de tipeo. Teclado: ↑ ↓ Enter Esc. */
(function () {
  var D = window.ARUCIP_DATA;
  if (!D) return;
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var nz = function (s) { return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); };
  var esc = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); };
  var SEARCH_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>';

  var IDX = null;
  function gname(id) { return D.GROUPS.filter(function (g) { return g.id === id; })[0]; }
  function H() { return window.ARUCIP_HUBS || {}; }

  function build() {
    var motivos = [], todo = [];
    var sym = {};
    Object.keys(D.SYMP || {}).forEach(function (s) { D.SYMP[s].forEach(function (id) { (sym[id] = sym[id] || []).push(s); }); });
    D.CASES.forEach(function (c) {
      var gs = c.g.map(function (i) { return gname(i).n; });
      motivos.push({ k: "Motivo de ingreso", l: c.n, sub: gs.join(" · "), h: nz(c.n), kw: nz((sym[c.id] || []).join(" ") + " " + gs.join(" ") + " " + c.g.map(function (g) { return (D.ALIAS || {})[g] || ""; }).join(" ")), r: c.top ? 0.5 : 0,
        syms: sym[c.id] || [], go: function () { H().openCase(c.id); } });
    });
    D.GROUPS.forEach(function (g) {
      var n = D.CASES.filter(function (c) { return c.g.indexOf(g.id) >= 0; }).length;
      motivos.push({ k: "Aparato o aspecto", l: g.n, sub: n + " motivos", h: nz(g.n), kw: nz(g.d + " " + ((D.ALIAS || {})[g.id] || "")), r: 1, syms: [], go: function () { H().openGroup(g.id); } });
    });
    D.SYS.forEach(function (s) {
      motivos.push({ k: "Aparato o sistema", l: s.n, sub: "Herramientas y escalas", h: nz(s.n), kw: nz(s.d || ""), r: 0, syms: [], go: function () { H().openSys(s.id); } });
    });
    Object.keys(D.SYMP || {}).forEach(function (s) {
      motivos.push({ k: "Signo o síntoma", l: s, sub: D.SYMP[s].length + " motivos relacionados", h: nz(s), kw: nz((D.SYMP_SYN || {})[s] || ""), r: 2, syms: [], go: function () { H().openSymptom(s); } });
    });
    todo = motivos.slice();
    /* secciones de la app */
    var tab = function (v) { return function () { var tb = document.querySelector('.tabs button[data-v="' + v + '"]'); if (tb) tb.click(); }; };
    var cat = function (c) { return function () { var a = document.querySelector('#v-more a[data-cat="' + c + '"]'); var tb = document.querySelector('.tabs button[data-v="more"]'); if (tb) tb.click(); if (a) a.click(); }; };
    [["Emergencias", "Sección", "", "emergencia emergencias triage abc valoracion inicial", tab("triage")],
     ["PARO: iniciar RCP", "Emergencias", "", "paro rcp reanimacion cardiopulmonar compresiones metronomo", function () { var p = document.getElementById("paro"); if (p) p.click(); }],
     ["Secuencia PALS", "Emergencias", "", "pals reanimacion pediatrica algoritmos", function () { var a = document.querySelector('[data-tool="pals"]'); if (a) a.click(); }],
     ["Cards: medicación por peso", "Emergencias", "", "cards tarjetas medicacion peso dosis", function () { if (window.ARUCIP_GO) window.ARUCIP_GO("cards"); }],
     ["Indicaciones y cálculos", "Sección", "día a día", "balance balances hidrico indicaciones diarias estudios complementarios periodicidad laboratorio que pedir cuando calculos nutricion infusiones", tab("ind")],
     ["Motivos de ingreso", "Sección", "por aspecto", "ingreso casos motivos aparatos sistemas", tab("casos")],
     ["Favoritos", "Sección", "uso frecuente", "favoritos fijados uso frecuente recientes", tab("fav")],
     ["Autocuidado", "Más", "", "burnout bienestar mindfulness salud violencia laboral", cat("Autocuidado")],
     ["Calidad y seguridad", "Más", "", "calidad seguridad paciente normas eventos adversos reporte", cat("Seguridad y Calidad")],
     ["IA herramientas y recursos", "Más", "", "inteligencia artificial ia iar1 recursos", cat("IA herramientas y recursos")]
    ].forEach(function (x) { todo.push({ k: x[1], l: x[0], sub: x[2], h: nz(x[0]), kw: nz(x[3]), r: 1.5, syms: [], go: x[4] }); });
    /* herramientas y escalas */
    var seen = {};
    $$("#tl [data-tool]").forEach(function (a) {
      var b = a.querySelector("b"), k = a.getAttribute("data-tool");
      if (!b || seen[k]) return; seen[k] = 1;
      var det = a.closest("details"), cat = det && det.querySelector("summary b") ? det.querySelector("summary b").textContent.trim() : "Herramienta";
      todo.push({ k: "Herramienta", l: b.textContent.trim(), sub: cat, h: nz(b.textContent), kw: nz(cat), r: -0.5, syms: [], go: function () { var el = document.querySelector('[data-tool="' + k + '"]'); if (el) el.click(); } });
    });
    [["#cks > details", "ck", "Checklist"], ["#calcs > details", "calc", "Calculadora"], ["#pc > details", "pocus", "POCUS"], ["#v-burn details", "burn", "Quemados"]].forEach(function (g) {
      $$(g[0]).forEach(function (d) {
        var b = d.querySelector("summary b"); if (!b || !d.id) return;
        todo.push({ k: g[2], l: b.textContent.trim(), sub: g[2], h: nz(b.textContent), kw: "", r: -0.5, syms: [], go: function () { if (window.ARUCIP_GO) window.ARUCIP_GO(g[1], d.id); } });
      });
    });
    IDX = { motivos: motivos, todo: todo };
  }

  function near(a, b) { /* distancia de edición ≤ 1 */
    if (Math.abs(a.length - b.length) > 1) return false;
    var i = 0, j = 0, d = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { i++; j++; continue; }
      if (++d > 1) return false;
      if (a.length > b.length) i++; else if (a.length < b.length) j++; else { i++; j++; }
    }
    return d + (a.length - i) + (b.length - j) <= 1;
  }
  function score(e, toks) {
    var s = 0, words = e.h.split(/[^a-z0-9]+/);
    for (var i = 0; i < toks.length; i++) {
      var t = toks[i], ok = 0;
      if (e.h.indexOf(t) === 0) ok = 6;
      else if (words.some(function (w) { return w.indexOf(t) === 0; })) ok = 4;
      else if (t.length >= 4 && e.h.indexOf(t) >= 0) ok = 2;
      else if (e.kw && e.kw.split(/[^a-z0-9]+/).some(function (w) { return w.indexOf(t) === 0; })) ok = 1.5;
      else if (t.length >= 4 && words.some(function (w) { return w.length >= 4 && (near(w, t) || (t.length >= 6 && near(w.slice(0, t.length), t))); })) ok = 1;
      else if (t.length >= 6 && e.kw && e.kw.split(/[^a-z0-9]+/).some(function (w) { return w.length >= 6 && (near(w, t) || near(w.slice(0, t.length), t)); })) ok = 0.8;
      if (!ok) return 0;
      s += ok;
    }
    return s + (e.r || 0);
  }
  function hl(label, toks) {
    var n = nz(label), mark = new Array(label.length).fill(false);
    toks.forEach(function (t) { var i = n.indexOf(t); if (i >= 0) for (var k = i; k < i + t.length; k++) mark[k] = true; });
    var out = "", open = false;
    for (var i = 0; i < label.length; i++) {
      if (mark[i] && !open) { out += "<mark>"; open = true; }
      if (!mark[i] && open) { out += "</mark>"; open = false; }
      out += esc(label[i]);
    }
    return out + (open ? "</mark>" : "");
  }
  function run(q, scope) {
    if (!IDX) build();
    var toks = nz(q).trim().split(/\s+/).filter(Boolean);
    if (!toks.length) return { toks: toks, res: [] };
    var list = scope === "all" ? IDX.todo : IDX.motivos, out = [];
    list.forEach(function (e) { var s = score(e, toks); if (s > 0) out.push({ e: e, s: s }); });
    out.sort(function (a, b) { return b.s - a.s || a.e.l.length - b.e.l.length; });
    return { toks: toks, res: out.slice(0, 8) };
  }

  function mount(host, opt) {
    opt = opt || {};
    var id = "ps-" + Math.random().toString(36).slice(2, 7);
    host.innerHTML = '<div class="ps"><div class="ps-in">' + SEARCH_SVG + '<input id="' + id + '" type="search" role="combobox" aria-expanded="false" aria-controls="' + id + '-l" aria-autocomplete="list" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" placeholder="' + esc(opt.placeholder || "Buscar") + '" aria-label="' + esc(opt.placeholder || "Buscar") + '"></div><ul class="ps-r" id="' + id + '-l" role="listbox" hidden></ul></div>';
    var inp = host.querySelector("input"), ul = host.querySelector("ul"), cur = [], act = -1;
    function close() { ul.hidden = true; inp.setAttribute("aria-expanded", "false"); act = -1; }
    function paint() {
      var r = run(inp.value, opt.scope);
      cur = r.res;
      if (!inp.value.trim()) { close(); return; }
      if (!cur.length) { ul.innerHTML = '<li class="ps-no" role="option" aria-disabled="true">Sin resultados. Probá con otra palabra.</li>'; ul.hidden = false; inp.setAttribute("aria-expanded", "true"); return; }
      ul.innerHTML = cur.map(function (x, i) {
        var via = "";
        if (x.e.syms && x.e.syms.length) {
          var m = x.e.syms.filter(function (s) { var n = nz(s); return r.toks.some(function (t) { return n.indexOf(t) >= 0; }); })[0];
          if (m && nz(x.e.l).indexOf(r.toks[0]) < 0) via = " · por " + esc(m.toLowerCase());
        }
        return '<li role="option" id="' + id + '-o' + i + '" data-i="' + i + '"><span class="ps-t">' + hl(x.e.l, r.toks) + '</span><small>' + esc(x.e.k) + (x.e.sub && x.e.sub !== x.e.k ? " · " + esc(x.e.sub) : "") + via + "</small></li>";
      }).join("");
      ul.hidden = false; inp.setAttribute("aria-expanded", "true"); setAct(0);
    }
    function setAct(i) {
      act = i;
      $$("li", ul).forEach(function (li, k) { li.setAttribute("aria-selected", k === i ? "true" : "false"); });
      if (i >= 0) { inp.setAttribute("aria-activedescendant", id + "-o" + i); var el = ul.children[i]; if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest" }); }
    }
    function pick(i) {
      var x = cur[i]; if (!x) return;
      close(); inp.blur();
      var go = function () { x.e.go(); };
      if (opt.before) opt.before(go); else go();
    }
    inp.addEventListener("input", paint);
    inp.addEventListener("focus", function () { if (inp.value.trim()) paint(); });
    inp.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); if (ul.hidden) paint(); else setAct(Math.min(cur.length - 1, act + 1)); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setAct(Math.max(0, act - 1)); }
      else if (e.key === "Enter") { e.preventDefault(); if (cur.length) pick(act < 0 ? 0 : act); }
      else if (e.key === "Escape") { if (!ul.hidden) { e.stopPropagation(); close(); } else inp.value = ""; }
    });
    ul.addEventListener("pointerdown", function (e) { var li = e.target.closest("li[data-i]"); if (li) { e.preventDefault(); pick(parseInt(li.getAttribute("data-i"), 10)); } });
    document.addEventListener("pointerdown", function (e) { if (!host.contains(e.target)) close(); });
    return { input: inp, close: close };
  }

  window.ARUCIP_SEARCH = { mount: mount, run: run };
})();
