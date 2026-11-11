#!/usr/bin/env node
/* Arma docs/VALIDACION.md: la lista de las guías «Al recibirlo» (js/data.js) para la revisión médica (ítem 58).
   Uso:  node tools/build_validacion.js          (re)genera el archivo
         node tools/build_validacion.js --check  sale con error si el archivo no está al día
   Al regenerar se CONSERVA lo que ya completaron los revisores en cada guía (tilde, «Revisó», «Fecha»,
   «Observaciones»), siempre que el texto de la guía no haya cambiado. Si el texto cambió después de la
   validación, la guía vuelve a quedar sin tildar y se avisa en la misma guía. */
var fs = require("fs"), path = require("path"), crypto = require("crypto");
var ROOT = path.join(__dirname, "..");
var OUT = path.join(ROOT, "docs", "VALIDACION.md");

global.window = {};
require(path.join(ROOT, "js", "data.js"));
var D = window.ARUCIP_DATA;

function huella(c) {
  return crypto.createHash("sha1").update(JSON.stringify([c.n, c.rec])).digest("hex").slice(0, 8);
}

/* Lo que ya completaron los revisores, por id de caso */
var prev = {};
if (fs.existsSync(OUT)) {
  var cur = null;
  fs.readFileSync(OUT, "utf8").split("\n").forEach(function (l) {
    var m = l.match(/^### \[( |x|X)\] (.+?) · `([^`]+)` · texto `([0-9a-f]{8})`/);
    if (m) { cur = prev[m[3]] = { ok: m[1] !== " ", h: m[4], rev: "", fecha: "", obs: "" }; return; }
    if (!cur) return;
    var f = l.match(/^- (Revisó|Fecha|Observaciones):\s*(.*)$/);
    if (f) cur[{ "Revisó": "rev", "Fecha": "fecha", "Observaciones": "obs" }[f[1]]] = f[2].trim();
  });
}

var porGrupo = {};
D.CASES.forEach(function (c) { (porGrupo[c.g[0]] = porGrupo[c.g[0]] || []).push(c); });
var nombreGrupo = {};
D.GROUPS.forEach(function (g) { nombreGrupo[g.id] = g.n; });

var validadas = 0, cambiadas = 0, cuerpo = [];
D.GROUPS.forEach(function (g) {
  var casos = porGrupo[g.id] || [];
  if (!casos.length) return;
  cuerpo.push("## " + g.n + " (" + casos.length + ")", "");
  casos.forEach(function (c) {
    var h = huella(c), p = prev[c.id] || {}, cambio = p.ok && p.h !== h, ok = p.ok && !cambio;
    if (ok) validadas++;
    if (cambio) cambiadas++;
    cuerpo.push("### [" + (ok ? "x" : " ") + "] " + c.n + " · `" + c.id + "` · texto `" + h + "`");
    if (c.g.length > 1)
      cuerpo.push("También aparece en: " + c.g.slice(1).map(function (x) { return nombreGrupo[x]; }).join(", ") + ".");
    cuerpo.push("");
    c.rec.forEach(function (r, i) { cuerpo.push((i + 1) + ". " + r); });
    cuerpo.push("");
    if (cambio) cuerpo.push("> ⚠ El texto cambió después de la validación anterior: hay que revisarla de nuevo.", "");
    cuerpo.push("- Revisó: " + (p.rev || ""), "- Fecha: " + (p.fecha || ""), "- Observaciones: " + (p.obs || ""), "");
  });
});

var cab = [
  "# Arucip · validación médica de las guías «Al recibirlo»",
  "",
  "Lista para Jorge Selandari y Eduardo Motto (ítem 58 de `docs/PENDIENTES.md`). Están las " + D.CASES.length +
    " guías de Motivos de ingreso, con el mismo texto que muestra la app. **Todas son ⚕ pendientes de revisión médica** hasta que se tilden acá.",
  "",
  "Cómo se usa:",
  "- Guía correcta: cambiar `[ ]` por `[x]` en su título y completar «Revisó» y «Fecha».",
  "- Guía a corregir: dejar `[ ]` y escribir el cambio en «Observaciones» (el texto de la app se edita en `js/data.js`, campo `rec`).",
  "- No editar a mano los textos de las guías en este archivo: se generan desde `js/data.js` con `node tools/build_validacion.js`, que conserva los tildes y lo anotado. Si el texto de una guía cambia después de validada, vuelve a quedar sin tildar.",
  "- Tildar acá no cambia nada en la app: la marca visible «validada / pendiente» en cada guía es el ítem 59, todavía sin hacer.",
  "",
  "Estado: **" + validadas + " de " + D.CASES.length + " validadas**" +
    (cambiadas ? " · " + cambiadas + " con texto cambiado después de validar (revisar de nuevo)" : "") + ".",
  "",
  "A mirar con especial atención: Shock séptico (`shs`) es la única guía que trae una dosis («alícuotas de 10–20 mL/kg»), anterior a la regla de no incluir dosis: decidir si se deja, se cambia o se reemplaza por una remisión a la herramienta.",
  ""
];

var texto = cab.concat(cuerpo).join("\n");
if (process.argv.indexOf("--check") >= 0) {
  if (!fs.existsSync(OUT) || fs.readFileSync(OUT, "utf8") !== texto) {
    console.error("docs/VALIDACION.md no está al día: correr node tools/build_validacion.js");
    process.exit(1);
  }
  console.log("docs/VALIDACION.md al día (" + validadas + " de " + D.CASES.length + " validadas)");
} else {
  fs.writeFileSync(OUT, texto);
  console.log("docs/VALIDACION.md: " + D.CASES.length + " guías, " + validadas + " validadas" + (cambiadas ? ", " + cambiadas + " a revisar de nuevo" : ""));
}
