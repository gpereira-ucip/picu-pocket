/* Arucip · portada. Se muestra una vez por sesión; "Entrar" abre la app y
   "Emergencia" abre directamente el modo PARO (RCP con metrónomo). */
(function () {
  var c = document.getElementById("cover");
  if (!c) return;
  try { if (sessionStorage.getItem("arucip-cover") === "1") { c.hidden = true; return; } } catch (e) {}
  function close(cb) {
    try { sessionStorage.setItem("arucip-cover", "1"); } catch (e) {}
    c.classList.add("out");
    setTimeout(function () { c.hidden = true; if (cb) cb(); }, 420);
  }
  document.getElementById("cv-go").onclick = function () { close(); };
  document.getElementById("cv-paro").onclick = function () {
    close(function () { var p = document.getElementById("paro"); if (p) p.click(); });
  };
  document.getElementById("cv-go").focus();
  /* Traducciones de la portada (el resto de la app ya está traducido en index.html). */
  try {
    var I = window.ARUCIP_I18N;
    if (I && I.langs.en) Object.assign(I.langs.en.dict, {
      "Entrar": "Enter", "Emergencia · iniciar RCP": "Emergency · start CPR",
      "Apoyo a la decisión · basada en AR-UCIP (Argentina)": "Decision support · based on AR-UCIP (Argentina)"});
    if (I && I.langs.pt) Object.assign(I.langs.pt.dict, {
      "Entrar": "Entrar", "Emergencia · iniciar RCP": "Emergência · iniciar RCP",
      "Apoyo a la decisión · basada en AR-UCIP (Argentina)": "Apoio à decisão · baseada no AR-UCIP (Argentina)"});
  } catch (e) {}
})();
