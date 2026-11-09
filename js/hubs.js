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
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8L3.5 9.7l5.9-.9z"/>',
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

  var TRI_SVG = '<svg class="tri-svg" viewBox="0 0 300 232" role="img" aria-label="Triángulo de evaluación pediátrica: apariencia, trabajo respiratorio y circulación a la piel" style="display:block;width:min(100%,340px);margin:6px auto 12px">' +
    '<polygon points="150,12 286,200 14,200" fill="none" stroke="#17384A" stroke-width="3" stroke-linejoin="round"/>' +
    '<polygon points="150,12 286,200 150,200" fill="#C2402F" fill-opacity=".16"/><polygon points="150,12 14,200 150,200" fill="#1F7A5A" fill-opacity=".16"/>' +
    '<circle cx="150" cy="12" r="10" fill="#1F5368"/><circle cx="14" cy="200" r="10" fill="#1F7A5A"/><circle cx="286" cy="200" r="10" fill="#C2402F"/>' +
    '<g font-family="inherit" font-weight="700" text-anchor="middle" fill="currentColor"><text x="150" y="82" font-size="15" fill="#1F5368">Apariencia</text><text x="150" y="100" font-size="11" font-weight="500">estado neurológico</text>' +
    '<text x="82" y="160" font-size="13" fill="#1F7A5A">Trabajo</text><text x="82" y="176" font-size="13" fill="#1F7A5A">respiratorio</text>' +
    '<text x="212" y="160" font-size="12" fill="#C2402F">Circulación</text><text x="212" y="176" font-size="13" fill="#C2402F">a la piel</text></g>' +
    '<text x="150" y="226" font-size="10" text-anchor="middle" fill="currentColor" opacity=".7">Evaluación en segundos, antes de tocar al paciente</text></svg>';
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
      '<h2>Emergencias</h2><p class="sub">Orden de trabajo ante un paciente que ingresa: evaluá con el ABC y abrí lo que necesites.</p><div class="hl-l" style="margin:6px 0 10px"><a class="hl" href="#" data-go="cards"><span class="hl-t"><b>Cards: medicación por peso</b><small>Tablas para situaciones críticas</small></span>' + CHEV + '</a><a class="hl" href="#" data-tool="pals"><span class="hl-t"><b>Secuencia PALS</b><small>Evaluación y algoritmos pediátricos</small></span>' + CHEV + '</a></div>' +
      '<div class="card tri-t"><div class="calc"><h3 class="th" style="margin-top:0">' + esc(T.tri.n) + '</h3><p class="hint" style="margin-top:0">' + esc(T.tri.d) + '</p>' + TRI_SVG + '<ul class="hub-ul">' + li(T.tri.pts) + '</ul><button class="btn pri w" type="button" id="em-paro">PARO: si hay que reanimar</button><p class="hint">⚕ Pendiente de revisión médica.</p></div></div>' +
      '<div class="card cab-n"><div class="calc"><h3 class="th" style="margin-top:0">Enfoque sistemático: paso a paso</h3><p class="hint" style="margin-top:0">⚕ Pendiente de revisión médica. Estructura basada en el algoritmo de enfoque sistemático del PALS, redactada con palabras propias.</p><ol class="hub-ol">' +
        '<li><b>Impresión inicial</b> (triángulo de arriba): apariencia, respiración y circulación, antes de tocar al paciente.</li>' +
        '<li><b>¿No responde o necesita una intervención inmediata?</b> Sí: pedí ayuda y activá el equipo de emergencias. No: seguí con el punto 5.</li>' +
        '<li><b>¿Respira y tiene pulso?</b> Si no respira (o solo boquea) o no tiene pulso: es un paro. Iniciá compresiones (<b>C-A-B</b>) con el botón EMERGENCIA de arriba y seguí el algoritmo de paro.</li>' +
        '<li><b>No respira pero tiene pulso:</b> abrí y mantené la vía aérea, ventilá, dá oxígeno y conectá monitor y saturómetro. Si el pulso es lento con mala perfusión a pesar de oxigenar y ventilar, tratalo como paro (compresiones).</li>' +
        '<li><b>Responde, con afectación grave de vía aérea, respiración o circulación:</b> mantené la vía aérea, ventilá y oxigená según necesite, y conectá monitor y saturómetro.</li>' +
        '<li><b>Evaluar:</b> evaluación primaria (ABCDE, abajo), evaluación secundaria y estudios diagnósticos.</li>' +
        '<li><b>Identificar</b> el problema (respiratorio, shock, neurológico, otro) y su gravedad.</li>' +
        '<li><b>Intervenir</b> y volver a evaluar: repetí este ciclo hasta que el paciente se estabilice.</li>' +
        '<li><b>Si en cualquier momento aparece un paro:</b> C-A-B. Tras recuperar la circulación, cuidados posparo y retomá evaluar–identificar–intervenir.</li></ol></div></div>' +
      '<h3 class="hub-h">Evaluación primaria: ABCDE</h3><div class="abc-w">' + abc + "</div>" +
      '<div class="card"><div class="calc"><h3 class="th" style="margin-top:0">Después de evaluar</h3><ul class="hub-ul">' + li(T.prox) + "</ul></div></div>" +
      '<div class="card"><div class="calc"><h3 class="th" style="margin-top:0">Novedades de las guías AHA 2025 (pediatría)</h3><p class="hint" style="margin-top:0">⚕ Pendiente de revisión médica. Resumen cualitativo de «Aspectos destacados de las Guías AHA 2025 para RCP y ACE», redactado con palabras propias y sin dosis.</p><ul class="hub-ul">' + li(T.nov) + "</ul></div></div>" +
      base() + NOTE;
  }

  /* ---------- SISTEMAS ---------- */
  var sysState = null;
  function renderSys() {
    var v = $("#v-sys"), html;
    if (!sysState) {
      html = '<button class="btn g back" type="button" data-hbm>‹ Motivos de ingreso</button><h2>Aparatos y sistemas</h2><p class="sub">Elegí el sistema y vas a ver todo lo que la app tiene para él.</p><div class="hub-grid">' +
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
  var cs = { g: null, c: null, s: null, q: "" };
  function gname(id) { return D.GROUPS.filter(function (g) { return g.id === id; })[0]; }
  function casesOf(gid) { return D.CASES.filter(function (c) { return c.g.indexOf(gid) >= 0; }); }
  function caseRow(c) {
    var gs = c.g.map(function (i) { return gname(i).n; }).join(" · ");
    return '<button class="cr" type="button" data-case="' + c.id + '"><span class="hl-t"><b>' + esc(c.n) + "</b><small>" + esc(gs) + "</small></span>" + CHEV + "</button>";
  }
  function sysTools(gid) {
    var sid = (D.SYSMAP || {})[gid], s = D.SYS.filter(function (x) { return x.id === sid; })[0];
    return s && s.t && s.t.length ? '<h3 class="hub-h">Herramientas de este aparato</h3>' + sections(s.t).replace(/<h3 class="hub-h">/g, '<h4 class="hub-h2">').replace(/<\/h3>/g, "</h4>") : "";
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
      html = back + '<div class="hub-hd"><span class="tile-i">' + svg(g.ic) + "</span><h2>" + esc(g.n) + '</h2></div><p class="sub">' + esc(g.d) + '</p><h3 class="hub-h">Motivos de ingreso</h3><div class="cr-l">' + casesOf(g.id).map(caseRow).join("") + "</div>" + sysTools(g.id) + NOTE;
    } else if (cs.s) {
      var ids = (D.SYMP || {})[cs.s] || [];
      html = back + '<p class="hub-badge">Signo o síntoma</p><h2>' + esc(cs.s) + '</h2><p class="sub">Motivos de ingreso que pueden presentarse con este signo o síntoma. Orientativo: no reemplaza el criterio clínico.</p><div class="cr-l">' +
        D.CASES.filter(function (c) { return ids.indexOf(c.id) >= 0; }).map(caseRow).join("") + "</div>" + NOTE;
    } else {
      var others = ["ad", "pr", "ca"].map(function (id) { return D.SYS.filter(function (x) { return x.id === id; })[0]; }).filter(Boolean);
      html = '<h2>Motivos de ingreso</h2><p class="sub">Motivos de ingreso a terapia intensiva pediátrica, por aspecto. Buscá por aparato, signo, síntoma o motivo.</p>' +
        '<div id="cs-search"></div>' +
        '<h3 class="hub-h">Por aspecto o aparato</h3><div class="hub-grid">' + D.GROUPS.map(function (g) {
          return '<button class="tile" type="button" data-grp="' + g.id + '"><span class="tile-i">' + svg(g.ic) + "</span><b>" + esc(g.n) + "</b><small>" + casesOf(g.id).length + " motivos · " + esc(g.d) + "</small></button>";
        }).join("") + "</div>" +
        '<h3 class="hub-h">Otros recursos</h3><div class="hub-grid">' + others.map(function (x) {
          return '<button class="tile" type="button" data-sys="' + x.id + '"><span class="tile-i">' + svg(x.ic) + "</span><b>" + esc(x.n) + "</b><small>" + esc(x.d) + "</small></button>";
        }).join("") + "</div>" + NOTE;
    }
    v.innerHTML = html;
    var sh = $("#cs-search");
    if (sh && window.ARUCIP_SEARCH) window.ARUCIP_SEARCH.mount(sh, { scope: "motivos", placeholder: "Buscar signo, síntoma, aparato o motivo" });
    scrollTo(0, 0);
  }

  /* ---------- Eventos ---------- */
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!t.closest) return;
    var b;
    if ((b = t.closest("[data-sys]"))) { sysState = b.dataset.sys; renderSys(); return; }
    if ((b = t.closest("[data-grp]"))) { cs.g = b.dataset.grp; renderCasos(); return; }
    if ((b = t.closest("[data-case]"))) { cs.c = b.dataset.case; renderCasos(); return; }
    if ((b = t.closest("[data-hbm]"))) { var tb = document.querySelector('.tabs button[data-v="casos"]'); if (tb) tb.click(); return; }
    if ((b = t.closest("[data-hb]"))) {
      if (b.closest("#v-sys")) { sysState = null; renderSys(); }
      else if (cs.c && !cs.q) { cs.c = null; renderCasos(); }
      else if (cs.c) { cs.c = null; renderCasos(); }
      else { cs.g = null; cs.s = null; renderCasos(); }
      return;
    }
    if ((b = t.closest(".tabs button"))) {
      if (b.dataset.v === "sys" && sysState) { sysState = null; renderSys(); }
      if (b.dataset.v === "triage") { /* sin estado propio */ }
      if (b.dataset.v === "casos" && (cs.c || cs.g || cs.q)) { cs = { g: null, c: null, s: null, q: "" }; renderCasos(); }
    }
  });
  /* PARO desde Emergencias */
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("#em-paro")) { var p = document.getElementById("paro"); if (p) p.click(); }
  });

  /* ---------- INDICACIONES Y CÁLCULOS (día a día) ---------- */
  function renderInd() {
    var v = $("#v-ind");
    if (!v || !D.IND) return;
    v.innerHTML = '<h2>Indicaciones y cálculos</h2><p class="sub">Para el trabajo diario en sala: balances, nutrición, analgosedación, infusiones y controles.</p>' +
      D.IND.map(function (g) { return '<h3 class="hub-h">' + esc(g.n) + '</h3><div class="hl-l">' + g.t.map(link).join("") + "</div>"; }).join("") +
      '<h3 class="hub-h">En preparación</h3><div class="card"><div class="calc"><ul class="hub-ul">' +
      (D.IND_PEND || []).map(function (x) { return "<li><b>" + esc(x.n) + "</b>: " + esc(x.d) + "</li>"; }).join("") +
      '</ul><p class="hint" style="margin:8px 0 0">Contenido pendiente de redacción y validación por el servicio. No se agregan indicaciones ni periodicidades sin esa revisión.</p></div></div>' + NOTE;
  }

  /* ---------- API para el buscador ---------- */
  function goTab(v) { var tb = document.querySelector('.tabs button[data-v="' + v + '"]'); if (tb) tb.click(); }
  window.ARUCIP_HUBS = {
    openCase: function (id) { goTab("casos"); cs = { g: null, c: id, s: null, q: "" }; renderCasos(); },
    openGroup: function (id) { goTab("casos"); cs = { g: id, c: null, s: null, q: "" }; renderCasos(); },
    openSymptom: function (name) { goTab("casos"); cs = { g: null, c: null, s: name, q: "" }; renderCasos(); },
    openSys: function (id) { goTab("casos"); if (window.ARUCIP_GO) window.ARUCIP_GO("sys"); sysState = id; renderSys(); }
  };

  /* ---------- Arranque ---------- */
  function init() { renderTriage(); renderSys(); renderCasos(); renderInd(); }
  if (document.readyState === "complete") init(); else window.addEventListener("load", init);

  /* Traducciones de los títulos de las secciones nuevas */
  try {
    var I = window.ARUCIP_I18N;
    if (I && I.langs.en) Object.assign(I.langs.en.dict, { "Triage": "Triage", "Sistemas": "Systems", "Casos": "Cases",
      "Emergencias": "Emergencies", "Motivos de ingreso": "Admission reasons", "Favoritos": "Favorites", "Aparatos y sistemas": "Organ systems", "Aparatos y sistemas": "Organ systems", "Casos clínicos": "Clinical cases",
      "Vía aérea": "Airway", "Respiración": "Breathing", "Circulación": "Circulation", "Neurológico": "Neurologic", "Exposición y entorno": "Exposure and environment",
      "Siempre a mano": "Always at hand", "Al recibirlo": "On reception", "Herramientas y escalas": "Tools and scores", "Checklists": "Checklists", "Calculadoras": "Calculators", "Frecuentes": "Common",
      "Equipo": "Team" });
    if (I && I.langs.pt) Object.assign(I.langs.pt.dict, { "Triage": "Triagem", "Sistemas": "Sistemas", "Casos": "Casos",
      "Emergencias": "Emergências", "Motivos de ingreso": "Motivos de internação", "Favoritos": "Favoritos", "Aparatos y sistemas": "Aparelhos e sistemas", "Casos clínicos": "Casos clínicos",
      "Vía aérea": "Via aérea", "Respiración": "Respiração", "Circulación": "Circulação", "Neurológico": "Neurológico", "Exposición y entorno": "Exposição e ambiente",
      "Siempre a mano": "Sempre à mão", "Al recibirlo": "Ao receber", "Herramientas y escalas": "Ferramentas e escalas", "Checklists": "Checklists", "Calculadoras": "Calculadoras", "Frecuentes": "Frequentes",
      "Equipo": "Equipe" });
  } catch (e) {}
})();
