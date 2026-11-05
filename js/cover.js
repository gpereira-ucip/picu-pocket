/* Arucip · portada. Se muestra una vez por sesión. Los botones replican la barra inferior
   (Triage, Sistemas, Casos, Cards, Más) y "Emergencia" abre directamente el modo PARO. */
(function () {
  var c = document.getElementById("cover");
  if (!c) return;
  var ic = window.ARUCIP_ICONS;
  if (ic) Array.prototype.forEach.call(c.querySelectorAll("[data-ic]"), function (s) { s.innerHTML = ic.svg(s.getAttribute("data-ic")); });
  try { if (sessionStorage.getItem("arucip-cover") === "1") { c.hidden = true; return; } } catch (e) {}
  function close(cb) {
    try { sessionStorage.setItem("arucip-cover", "1"); } catch (e) {}
    c.classList.add("out");
    setTimeout(function () { c.hidden = true; if (cb) cb(); }, 420);
  }
  Array.prototype.forEach.call(c.querySelectorAll("[data-tab]"), function (b) {
    b.onclick = function () {
      close(function () { var t = document.querySelector('.tabs button[data-v="' + b.getAttribute("data-tab") + '"]'); if (t) t.click(); });
    };
  });
  document.getElementById("cv-paro").onclick = function () {
    close(function () { var p = document.getElementById("paro"); if (p) p.click(); });
  };
  /* Traducciones de la portada (el resto de la app ya está traducido en index.html). */
  try {
    var I = window.ARUCIP_I18N;
    if (I && I.langs.en) Object.assign(I.langs.en.dict, {
      "Emergencia · iniciar RCP": "Emergency · start CPR",
      "Apoyo a la decisión · basada en AR-UCIP (Argentina)": "Decision support · based on AR-UCIP (Argentina)"});
    if (I && I.langs.pt) Object.assign(I.langs.pt.dict, {
      "Emergencia · iniciar RCP": "Emergência · iniciar RCP",
      "Apoyo a la decisión · basada en AR-UCIP (Argentina)": "Apoio à decisão · baseada no AR-UCIP (Argentina)"});
  } catch (e) {}
})();
