/* Arucip · portada. Se muestra una vez por sesión y al tocar el logo del encabezado.
   "Entrar" abre la app; "Emergencia" abre directamente el modo PARO; el interruptor cambia el tema claro/oscuro. */
(function () {
  var c = document.getElementById("cover");
  if (!c) return;
  var KEY = "arucip-cover";
  function seen() { try { return sessionStorage.getItem(KEY) === "1"; } catch (e) { return false; } }
  function mark() { try { sessionStorage.setItem(KEY, "1"); } catch (e) {} }
  function open() { c.hidden = false; void c.offsetWidth; c.classList.remove("out"); document.documentElement.style.overflow = "hidden"; }
  function close(cb) {
    mark(); c.classList.add("out"); document.documentElement.style.overflow = "";
    setTimeout(function () { c.hidden = true; if (cb) cb(); }, 400);
  }
  document.getElementById("cv-go").onclick = function () { close(); };
  document.getElementById("cv-paro").onclick = function () { close(function () { var p = document.getElementById("paro"); if (p) p.click(); }); };
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !c.hidden) close(); });
  /* Interruptor de tema: reutiliza el de la app (#thm) para que ambos queden sincronizados. */
  var sw = document.getElementById("cv-thm"), thm = document.getElementById("thm");
  function sync() { sw.setAttribute("aria-checked", document.documentElement.dataset.mode === "dark" ? "true" : "false"); }
  sw.onclick = function () { if (thm) thm.click(); sync(); };
  new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ["data-mode", "data-theme"] });
  sync();
  var m = document.querySelector(".ph-mark");
  if (m) {
    m.setAttribute("role", "button"); m.setAttribute("tabindex", "0"); m.setAttribute("aria-label", "Portada");
    m.addEventListener("click", open);
    m.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  }
  if (seen()) c.hidden = true; else open();
})();
