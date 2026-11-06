/* Arucip · secciones de acceso rápido: Triage (ABC), Sistemas y Casos (motivos de ingreso).
   Solo arma pantallas con enlaces a lo que la app ya tiene (herramientas, checklists, calculadoras, POCUS,
   quemados y cards). Los datos están en js/data.js. */
(function () {
  var D = window.ARUCIP_DATA;
  if (!D) return;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); };
  var nz = function (s) { return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); };

  /* ---------- Íconos (trazo, 24×24) ---------- */
  var IC = {
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.500 2-1.500-1.500-2.700-2-4.500-2A5.500 5.500 0 0 0 2 8.500c0 2.300 1.500 4 3 5.500l7 7Z"/>',
    wind: '<path d="M17.700 7.700a2.500 2.500 0 1 1 1.800 4.300H2"/><path d="M9.600 4.600A2 2 0 1 1 11 8H2"/><path d="M12.600 19.400A2 2 0 1 0 14 16H2"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    pill: '<path d="m10.500 20.500 10-10a4.950 4.950 0 1 0-7-7l-10 10a4.950 4.950 0 1 0 7 7Z"/><path d="m8.500 8.500 7 7"/>',
    drop: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.900-3-5.500s-3.500-4-4-6.500c-.5 2.500-2 4.900-4 6.500C6 11.100 5 13 5 15a7 7 0 0 0 7 7z"/>',
    thermo: '<path d="M14 4v10.540a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>',
    utensils: '<path d="M3 2v7c0 1.100.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.100.9 2 2 2h3Zm0 0v7"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    flask: '<path d="M10 2v7.300"/><path d="M14 9.300V2"/><path d="M8.500 2h7"/><path d="M14 9.300a6.500 6.500 0 1 1-4 0"/><path d="M5.500 16h13"/>',
    alert: '<path d="m21.700 18-8-14a2 2 0 0 0-3.500 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.700-3Z"/><path d="M12 9v4M12 17h.01"/>',
    clip: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 12h6M9 16h4"/>',
    home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    pulse: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    sys: '<circle cx="12" cy="4.500" r="2.500"/><path d="M12 8v6M6.500 10.500 12 12l5.500-1.500M9 21l3-7 3 7"/>',
    flame: '<path d="M12 2.600C12.500 5.300 15.100 6.900 16.800 9.300c1.500 2.100 1.900 4.300 1.100 6.500C17 18.700 14.800 20.600 12 20.600c-3.300 0-5.800-2.300-5.800-5.500 0-2.200 1-3.800 2.500-5.400.3 1.400 1 2.300 2 2.800-.4-3.200.2-7 1.300-9.900Z"/>',
    card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/>',
    more: '<circle cx="5" cy="12" r="1.500"/><circle cx="12" cy="12" r="1.500"/><circle cx="19" cy="12" r="1.500"/>'
  };
  var svg = function (n) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IC[n] || IC.clip) + "</svg>";
  };
  var CHEV = '<svg class="hl-c" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';
  window.ARUCIP_ICONS = { svg: svg };

  /* ---------- Enlaces a lo que ya existe ---------- */
  var TYPE = { t: "Herramienta", k: "Checklist", c: "Calculadora", p: "POCUS", b: "Quemados", x: "Acceso" };
  var SECTION = { t: "Herramientas y escalas", k: "Checklists", c: "Calculadoras", p: "POCUS", b: "Quemados", x: "Otros accesos" };
  function toolTitle(k) {
    var b = document.querySelector('#tl [data-tool="' + k + '"] b') || document.querySelector('[data-tool="' + k + '"] b');
    return b ? b.textContent.trim() : (((D.LBL || {}).t || {})[k] || k);
  }
  function label(ref) {
    var p = ref.split(":"), t = p[0], id = p[1];
    return t === "t" ? toolTitle(id) : ((D.LBL[t] || {})[id] || id);
  }
  function attrs(ref) {
    var p = ref.split(":"), t = p[0], id = p[1];
    if (t === "t") return 'data-tool="' + id + '"';
    if (t === "k") return 'data-go="ck" data-open="d-' + id + '"';
    if (t === "c") return 'data-go="calc" data-open="c-' + id + '"';
    if (t === "p") return 'data-go="pocus" data-open="pc-' + id + '"';
    if (t === "b") return 'data-go="burn" data-open="b-' + id + '"';
    return 'data-go="' + id + '"';
  }
  function link(ref) {
    return '<a class="hl" href="#" ' + attrs(ref) + '><span class="hl-t"><b>' + esc(label(ref)) + "</b><small>" + TYPE[ref[0]] + "</small></span>" + CHEV + "</a>";
  }
  function uniq(a) { return a.filter(function (x, i) { return a.indexOf(x) === i; }); }
  function sections(refs) {
    var out = "";
    ["k", "c", "t", "p", "b", "x"].forEach(function (t) {
      var l = uniq(refs).filter(function (r) { return r[0] === t; });
      if (l.length) out += '<h3 class="hub-h">' + SECTION[t] + '</h3><div class="hl-l">' + l.map(link).join("") + "</div>";
    });
    return out;
  }
  function base() {
    return '<h3 class="hub-h">Siempre a mano</h3><div class="hl-l">' + D.BASE.map(link).join("") + "</div>";
  }
  var NOTE = '<p class="hint hub-note">Apoyo a la decisión: no reemplaza el criterio clínico ni el protocolo de tu servicio. Verificá siempre las dosis en la fuente original.</p>';
  var back = '<button class="btn g back" type="button" data-hb>‹ Volver</button>';

  /* ---------- TRIAGE ---------- */
  function renderTriage() {
    var T = D.TRIAGE, host = $("#tri-body");
    if (!host) return;
    var li = function (a) { return a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join(""); };
    var abc = T.abc.map(function (s) {
      return '<details class="abc"><summary><span class="abc-l">' + s.l + '</span><b>' + esc(s.n) + '</b>' + CHEV + '</summary><div class="abc-b"><ul class="hub-ul">' + li(s.pts) +
        '</ul><div class="hl-l">' + s.t.map(link).join("") + "</div></div></details>";
    }).join("");
    host.innerHTML =
      '<h2>Emergencias y valoración inicial</h2><p class="sub">Orden de trabajo ante un paciente que ingresa: evaluá con el ABC y abrí lo que necesites.</p>' +
      '<div class="card tri-t"><div class="calc"><h3 class="th" style="margin-top:0">' + esc(T.tri.n) + '</h3><p class="hint" style="margin-top:0">' + esc(T.tri.d) + '</p><ul class="hub-ul">' + li(T.tri.pts) + "</ul></div></div>" +
      '<div class="abc-w">' + abc + "</div>" +
      '<div class="card"><div class="calc"><h3 class="th" style="margin-top:0">Después del ABC</h3><ul class="hub-ul">' + li(T.prox) + "</ul></div></div>" +
      base() + NOTE;
  }

  /* ---------- SISTEMAS ---------- */
  var sysState = null;
  function renderSys() {
    var v = $("#v-sys"), html;
    if (!sysState) {
      html = '<a class="btn g back" href="#" data-go="casos">‹ Motivos de ingreso</a><h2>Aparatos y sistemas</h2><p class="sub">Elegí el sistema y vas a ver todo lo que la app tiene para él.</p><div class="hub-grid">' +
        D.SYS.map(function (s) {
          return '<button class="tile" type="button" data-sys="' + s.id + '"><span class="tile-i">' + svg(s.ic) + '</span><b>' + esc(s.n) + "</b><small>" + esc(s.d) + "</small></button>";
        }).join("") + "</div>" + NOTE;
    } else {
      var s = D.SYS.filter(function (x) { return x.id === sysState; })[0];
      html = back + '<div class="hub-hd"><span class="tile-i">' + svg(s.ic) + "</span><h2>" + esc(s.n) + "</h2></div><p class=\"sub\">" + esc(s.d) + "</p>" + sections(s.t) + NOTE;
    }
    v.innerHTML = html; scrollTo(0, 0);
  }

  /* ---------- CASOS ---------- */
  var cs = { g: null, c: null, q: "" };
  function gname(id) { return D.GROUPS.filter(function (g) { return g.id === id; })[0]; }
  function casesOf(gid) { return D.CASES.filter(function (c) { return c.g.indexOf(gid) >= 0; }); }
  function caseRow(c) {
    var gs = c.g.map(function (i) { return gname(i).n; }).join(" · ");
    return '<button class="cr" type="button" data-case="' + c.id + '"><span class="hl-t"><b>' + esc(c.n) + "</b><small>" + esc(gs) + "</small></span>" + CHEV + "</button>";
  }
  function renderCasos() {
    var v = $("#v-casos"), html;
    if (cs.c) {
      var c = D.CASES.filter(function (x) { return x.id === cs.c; })[0], g0 = gname(c.g[0]);
      var rec = c.rec || g0.rec;
      html = back + '<p class="hub-badge">' + c.g.map(function (i) { return esc(gname(i).n); }).join(" · ") + "</p><h2>" + esc(c.n) + "</h2>" +
        '<h3 class="hub-h">Al recibirlo</h3><div class="card"><div class="calc"><ol class="hub-ol">' + rec.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol></div></div>" +
        sections(c.t) + base() + NOTE;
    } else if (cs.g) {
      var g = gname(cs.g);
      html = back + '<div class="hub-hd"><span class="tile-i">' + svg(g.ic) + "</span><h2>" + esc(g.n) + '</h2></div><p class="sub">' + esc(g.d) + '</p><div class="cr-l">' + casesOf(g.id).map(caseRow).join("") + "</div>" + NOTE;
    } else {
      var q = nz(cs.q.trim()), res = "";
      if (q.length > 1) {
        var m = D.CASES.filter(function (c) { return nz(c.n + " " + c.g.map(function (i) { return gname(i).n; }).join(" ")).indexOf(q) >= 0; });
        res = m.length ? '<div class="cr-l">' + m.map(caseRow).join("") + "</div>" : '<p class="sub">Sin resultados.</p>';
      }
      html = '<h2>Motivos de ingreso</h2><p class="sub">Motivos de ingreso a terapia intensiva pediátrica, por aspecto. Elegí el motivo y vas a ver qué hacer al recibir al paciente y qué herramientas de la app te sirven.</p>' +
        '<div class="srch"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.500-3.500"/></svg><input id="cs-q" type="search" placeholder="Buscar motivo de ingreso" autocomplete="off" enterkeyhint="search" value="' + esc(cs.q) + '"></div>' +
        (q.length > 1 ? res :
          '<h3 class="hub-h">Frecuentes</h3><div class="cr-l">' + D.CASES.filter(function (c) { return c.top; }).map(caseRow).join("") + "</div>" +
          '<h3 class="hub-h">Motivos de ingreso por grupo</h3><div class="hub-grid">' + D.GROUPS.map(function (g) {
            return '<button class="tile" type="button" data-grp="' + g.id + '"><span class="tile-i">' + svg(g.ic) + "</span><b>" + esc(g.n) + "</b><small>" + casesOf(g.id).length + " motivos · " + esc(g.d) + "</small></button>";
          }).join("") + "</div>" +
          '<h3 class="hub-h">Por aparato o sistema</h3><a class="hl" href="#" data-go="sys"><span class="hl-t"><b>Aparatos y sistemas</b><small>Todo lo que tiene la app para cada sistema</small></span>' + CHEV + "</a>") + NOTE;
    }
    v.innerHTML = html;
    var inp = $("#cs-q");
    if (inp && cs.q) { inp.focus(); try { inp.setSelectionRange(inp.value.length, inp.value.length); } catch (e) {} }
    if (!inp || !cs.q) scrollTo(0, 0);
  }

  /* ---------- INDICACIONES Y CÁLCULOS (día a día) ---------- */
  function renderInd() {
    var v = $("#v-ind");
    if (!v || !D.IND) return;
    v.innerHTML = '<h2>Indicaciones y cálculos</h2><p class="sub">Para el trabajo diario en sala: balances, nutrición, analgosedación, infusiones y controles.</p>' +
      D.IND.map(function (g) {
        return '<h3 class="hub-h">' + esc(g.n) + '</h3><div class="hl-l">' + g.t.map(link).join("") + "</div>";
      }).join("") +
      '<p class="hint hub-note">Indicaciones diarias y periodicidad de estudios complementarios (qué pedir y cuándo): contenido pendiente de redacción y validación por el servicio.</p>' + NOTE;
  }

  /* ---------- Eventos ---------- */
  var emp = function () { var p = document.getElementById("paro"); if (p) p.click(); };
  document.addEventListener("click", function (e) { if (e.target.closest && e.target.closest("#em-paro")) emp(); });
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!t.closest) return;
    var b;
    if ((b = t.closest("[data-sys]"))) { sysState = b.dataset.sys; renderSys(); return; }
    if ((b = t.closest("[data-grp]"))) { cs.g = b.dataset.grp; renderCasos(); return; }
    if ((b = t.closest("[data-case]"))) { cs.c = b.dataset.case; renderCasos(); return; }
    if ((b = t.closest("[data-hb]"))) {
      if (b.closest("#v-sys")) { sysState = null; renderSys(); }
      else if (cs.c && !cs.q) { cs.c = null; renderCasos(); }
      else if (cs.c) { cs.c = null; renderCasos(); }
      else { cs.g = null; renderCasos(); }
      return;
    }
    if ((b = t.closest(".tabs button"))) {
      if (b.dataset.v === "sys" && sysState) { sysState = null; renderSys(); }
      if (b.dataset.v === "casos" && (cs.c || cs.g || cs.q)) { cs = { g: null, c: null, q: "" }; renderCasos(); }
    }
  });
  document.addEventListener("input", function (e) {
    if (e.target && e.target.id === "cs-q") { cs.q = e.target.value; cs.g = null; cs.c = null; renderCasos(); }
  });

  /* ---------- Arranque ---------- */
  function init() { renderTriage(); renderSys(); renderCasos(); renderInd(); }
  if (document.readyState === "complete") init(); else window.addEventListener("load", init);

  /* Traducciones de los títulos de las secciones nuevas */
  try {
    var I = window.ARUCIP_I18N;
    if (I && I.langs.en) Object.assign(I.langs.en.dict, { "Triage": "Triage", "Sistemas": "Systems", "Casos": "Cases", "Emergencias": "Emergency", "Motivos": "Reasons", "Indicaciones": "Orders", "Favoritos": "Favorites", "Motivos de ingreso": "Admission reasons", "Indicaciones y cálculos": "Orders and calculations", "Favoritos y uso frecuente": "Favorites and frequent use",
      "Triage y valoración inicial": "Triage and initial assessment", "Aparatos y sistemas": "Organ systems", "Casos clínicos": "Clinical cases",
      "Vía aérea": "Airway", "Respiración": "Breathing", "Circulación": "Circulation", "Neurológico": "Neurologic", "Exposición y entorno": "Exposure and environment",
      "Siempre a mano": "Always at hand", "Al recibirlo": "On reception", "Herramientas y escalas": "Tools and scores", "Checklists": "Checklists", "Calculadoras": "Calculators", "Frecuentes": "Common",
      "Equipo": "Team" });
    if (I && I.langs.pt) Object.assign(I.langs.pt.dict, { "Triage": "Triagem", "Sistemas": "Sistemas", "Casos": "Casos", "Emergencias": "Emergências", "Motivos": "Motivos", "Indicaciones": "Prescrições", "Favoritos": "Favoritos", "Motivos de ingreso": "Motivos de internação", "Indicaciones y cálculos": "Prescrições e cálculos", "Favoritos y uso frecuente": "Favoritos e uso frequente",
      "Triage y valoración inicial": "Triagem e avaliação inicial", "Aparatos y sistemas": "Aparelhos e sistemas", "Casos clínicos": "Casos clínicos",
      "Vía aérea": "Via aérea", "Respiración": "Respiração", "Circulación": "Circulação", "Neurológico": "Neurológico", "Exposición y entorno": "Exposição e ambiente",
      "Siempre a mano": "Sempre à mão", "Al recibirlo": "Ao receber", "Herramientas y escalas": "Ferramentas e escalas", "Checklists": "Checklists", "Calculadoras": "Calculadoras", "Frecuentes": "Frequentes",
      "Equipo": "Equipe" });
  } catch (e) {}
})();
