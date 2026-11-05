/* Arucip · migración de datos locales (Picu Pocket → Arucip).
   Copia las preferencias guardadas con las claves "picu-*" a las nuevas "arucip-*" una sola vez,
   para que quienes ya usaban Picu Pocket no pierdan favoritos, idioma ni ajustes.
   Debe cargarse en <head>, antes del código principal. */
(function () {
  try {
    if (localStorage.getItem("arucip-migrated") === "1") return;
    ["ack", "fav", "frq", "fs", "lang", "paro-last", "rec", "voice"].forEach(function (k) {
      var v = localStorage.getItem("picu-" + k);
      if (v !== null && localStorage.getItem("arucip-" + k) === null) localStorage.setItem("arucip-" + k, v);
    });
    localStorage.setItem("arucip-migrated", "1");
  } catch (e) {}
})();
