/* Arucip · prueba de humo con Playwright.
   Uso:  node tests/smoke.js [ruta-al-html]   (por defecto ./index.html)
   Comprueba: sin errores de consola, enlaces entre casos/indicaciones y herramientas, botones de la portada,
   buscador predictivo, Favoritos, «Más» y que no aparezcan palabras que se decidió quitar. */
const { chromium } = require("playwright");
const path = require("path");
const file = path.resolve(process.argv[2] || "index.html");
const URL = "file://" + file;
let fails = 0;
const ok = (c, m) => { console.log((c ? "OK   " : "FALLA") + " " + m); if (!c) fails++; };

(async () => {
  const b = await chromium.launch();
  const errs = [];
  async function open(w) {
    const ctx = await b.newContext({ viewport: { width: w || 390, height: 844 } });
    const p = await ctx.newPage();
    p.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });
    p.on("pageerror", (e) => errs.push(String(e)));
    await p.goto(URL); await p.waitForTimeout(700);
    return p;
  }
  const view = (p) => p.evaluate(() => document.querySelector(".view:not([hidden])").id);
  const ack = (p) => p.evaluate(() => { const o = document.getElementById("ack-ok"); if (o) o.click(); });

  let p = await open();
  /* enlaces */
  const bad = await p.evaluate(() => {
    const D = window.ARUCIP_DATA, out = [];
    const chk = (c, r) => {
      const [t, id] = r.split(":"); let k = true;
      if (t === "t") k = !!document.querySelector('[data-tool="' + id + '"]');
      else if (t === "k") k = !!document.getElementById("d-" + id);
      else if (t === "c") k = !!document.getElementById("c-" + id);
      else if (t === "p") k = !!document.getElementById("pc-" + id);
      else if (t === "b") k = !!document.getElementById("b-" + id);
      else if (t === "x") k = !!(D.LBL.x && D.LBL.x[id]);
      if (!k) out.push(c + " " + r);
    };
    D.CASES.forEach((c) => c.t.forEach((r) => chk(c.id, r)));
    D.IND.forEach((g) => g.t.forEach((r) => chk("IND", r)));
    D.SYS.forEach((s) => s.t.forEach((r) => chk("SYS " + s.id, r)));
    const ids = new Set(D.CASES.map((c) => c.id));
    Object.keys(D.SYMP).forEach((s) => D.SYMP[s].forEach((i) => { if (!ids.has(i)) out.push("SYMP " + s + " " + i); }));
    return out;
  });
  const integ = await p.evaluate(() => {
    const D = window.ARUCIP_DATA, out = [], seen = {}, gids = new Set(D.GROUPS.map((g) => g.id));
    D.CASES.forEach((c) => {
      if (seen[c.id]) out.push("id repetido " + c.id); seen[c.id] = 1;
      if (!c.n) out.push("sin nombre " + c.id);
      (c.g || []).forEach((g) => { if (!gids.has(g)) out.push("grupo inexistente " + c.id + " " + g); });
      if (!c.g || !c.g.length) out.push("sin grupo " + c.id);
      if (!c.rec || !c.rec.length) out.push("sin guía Al recibirlo " + c.id);
    });
    return out;
  });
  ok(integ.length === 0, "integridad de data.js (ids, grupos, guías)" + (integ.length ? ": " + integ.join(", ") : ""));
  ok(bad.length === 0, "enlaces e ids válidos" + (bad.length ? ": " + bad.join(", ") : ""));
  const stat = await p.evaluate(() => ({ n: ARUCIP_DATA.CASES.length, rec: ARUCIP_DATA.CASES.filter((c) => c.rec).length }));
  console.log("     motivos:", stat.n, "con guía propia:", stat.rec);

  /* portada */
  ok(await p.evaluate(() => !document.getElementById("cover").hidden), "la portada se muestra al abrir");
  ok(await p.evaluate(() => getComputedStyle(document.getElementById("cv-go")).display === "none"), "no hay botón «Entrar»");
  await p.click("#cv-thm"); const m1 = await p.evaluate(() => document.documentElement.dataset.mode);
  await p.click("#cv-thm"); const m2 = await p.evaluate(() => document.documentElement.dataset.mode);
  ok(m1 === "dark" && m2 === "light", "interruptor claro/oscuro");
  const ecg = async () => p.evaluate(() => getComputedStyle(document.querySelector("#cv-ecg .pk-ecg svg")).transform);
  const e0 = await ecg(); await p.waitForTimeout(250);
  ok(e0 !== (await ecg()), "el ECG se mueve");

  /* buscador de la portada */
  const top = async (q) => { await p.fill("#cv-search input", q); await p.waitForTimeout(150); return p.evaluate(() => [...document.querySelectorAll("#cv-search li .ps-t")].map((x) => x.textContent)); };
  ok((await top("fieb"))[0] === "Fiebre", "predictivo: «fieb» → Fiebre");
  ok((await top("disnea"))[0] === "Dificultad respiratoria", "predictivo: sinónimo «disnea»");
  ok((await top("shok")).some((x) => /Shock/.test(x)), "predictivo: error de tipeo «shok»");
  ok((await top("balance"))[0] === "Indicaciones y cálculos", "predictivo: «balance» → Indicaciones y cálculos");
  await p.fill("#cv-search input", "shock septico"); await p.waitForTimeout(150); await p.click("#cv-search li"); await p.waitForTimeout(900);
  ok((await p.evaluate(() => document.querySelector("#v-casos h2").textContent)) === "Shock séptico", "elegir un motivo lo abre");

  /* botones de la portada */
  for (const [tab, v] of [["triage", "v-triage"], ["casos", "v-casos"], ["ind", "v-ind"], ["fav", "v-fav"], ["more", "v-more"]]) {
    p = await open(); await p.click("[data-tab=" + tab + "]"); await p.waitForTimeout(800);
    ok((await view(p)) === v && (await p.evaluate(() => document.getElementById("cover").hidden)), "botón de portada → " + v);
  }
  p = await open(); await p.click("#cv-paro"); await p.waitForTimeout(800);
  ok(await p.evaluate(() => { const o = document.getElementById("paro-ov"); return !!o && getComputedStyle(o).display !== "none"; }), "EMERGENCIA abre el modo PARO");

  /* app */
  p = await open(); await p.click("[data-tab=triage]"); await p.waitForTimeout(700); await ack(p);
  ok((await p.evaluate(() => [...document.querySelectorAll(".tabs button")].map((x) => x.textContent.trim()))).join("|") === "Emergencias|Motivos de ingreso|Indicaciones y cálculos|Favoritos|Más", "botonera: Emergencias · Motivos de ingreso · Indicaciones y cálculos · Favoritos · Más");
  ok(await p.evaluate(() => !!document.querySelector("#v-triage #em-paro") && !!document.querySelector("#v-triage .tri-svg") && !!document.querySelector('#v-triage [data-tool="pals"]')), "Emergencias tiene triángulo, botón PARO y Secuencia PALS");
  await p.click("#v-triage [data-go=cards]"); await p.waitForTimeout(300);
  ok((await view(p)) === "v-cards" && (await p.evaluate(() => document.querySelector(".tabs [aria-current=true]").dataset.v)) === "triage", "Cards se abre dentro de Emergencias");
  await p.click(".tabs [data-v=casos]"); await p.waitForTimeout(300);
  await p.fill("#cs-search input", "asma"); await p.waitForTimeout(200);
  ok((await p.evaluate(() => document.querySelector("#cs-search li .ps-t").textContent)).startsWith("Crisis asm"), "buscador de Motivos: «asma»");
  await p.fill("#cs-search input", ""); await p.click("[data-grp=cv]"); await p.waitForTimeout(200);
  ok(await p.evaluate(() => /herramientas de este aparato/i.test(document.querySelector("#v-casos").innerText)), "cada aspecto trae las herramientas del aparato");
  await p.click(".tabs [data-v=ind]"); await p.waitForTimeout(300);
  ok((await p.evaluate(() => document.querySelectorAll("#v-ind .hl").length)) > 15, "Indicaciones y cálculos con accesos");
  await p.click(".tabs [data-v=fav]"); await p.waitForTimeout(300);
  ok((await p.evaluate(() => [...document.querySelectorAll("#v-fav .fv b")].map((x) => x.textContent))).includes("Quemados"), "Favoritos: Quemados viene fijado");
  await p.click(".tabs [data-v=more]"); await p.waitForTimeout(300);
  await p.click("#v-more [data-fav-go=\"cat:Autocuidado\"]"); await p.click(".tabs [data-v=fav]"); await p.waitForTimeout(200);
  ok((await p.evaluate(() => [...document.querySelectorAll("#v-fav .fv b")].map((x) => x.textContent))).includes("Autocuidado"), "se puede fijar Autocuidado");
  await p.click(".tabs [data-v=more]"); await p.click('#v-more a[data-cat="Autocuidado"]'); await p.waitForTimeout(400);
  ok((await p.evaluate(() => [...document.querySelectorAll("#tl > details[open] summary b")].map((x) => x.textContent))).includes("Autocuidado"), "Más › Autocuidado abre esa categoría");

  /* palabras que no deben verse */
  const words = [];
  for (const v of ["triage", "casos", "ind", "fav", "more", "tools", "bib", "tips", "ck", "calc", "pocus", "burn", "cards"]) {
    await p.evaluate((x) => window.ARUCIP_GO(x), v);
    await p.evaluate(() => document.querySelectorAll(".view:not([hidden]) details").forEach((d) => (d.open = true)));
    const t = await p.evaluate(() => document.body.innerText);
    (t.match(/.{0,30}(biblia|\btips\b|picu pocket|funciona sin conexi).{0,30}/gi) || []).forEach((m) => words.push(v + ": " + m));
  }
  ok(words.length === 0, "sin «Biblia», «Tips», «Picu Pocket» ni «Funciona sin conexión»" + (words.length ? ": " + words.slice(0, 3).join(" | ") : ""));

  /* «Volver» en pantallas secundarias */
  p = await open(); await p.click("[data-tab=triage]"); await p.waitForTimeout(500); await ack(p);
  await p.evaluate(() => window.ARUCIP_GO("cards")); await p.waitForTimeout(200);
  ok(await p.evaluate(() => !!document.querySelector("#v-cards [data-sb]")), "Cards tiene «Volver»");
  await p.click("#v-cards [data-sb]"); await p.waitForTimeout(300);
  ok((await view(p)) === "v-triage", "Volver desde Cards lleva a Emergencias");
  await p.click('.tabs button[data-v="more"]'); await p.waitForTimeout(200);
  await p.evaluate(() => window.ARUCIP_GO("calc")); await p.waitForTimeout(200);
  ok(await p.evaluate(() => !!document.querySelector("#v-calc [data-sb]")), "Calculadoras tiene «Volver»");
  await p.click("#v-calc [data-sb]"); await p.waitForTimeout(300);
  ok((await view(p)) === "v-more", "Volver desde Calculadoras lleva a donde se estaba");
  for (const v of ["ck", "tools", "burn", "bib", "pocus", "tips"]) {
    await p.evaluate((x) => window.ARUCIP_GO(x), v); await p.waitForTimeout(150);
    ok(await p.evaluate((x) => !!document.querySelector("#v-" + x + " .back"), v), "«Volver» en " + v);
  }
  ok(errs.length === 0, "sin errores de consola" + (errs.length ? ": " + errs.slice(0, 3).join(" | ") : ""));
  await b.close();
  console.log(fails ? "\n" + fails + " prueba(s) con falla" : "\nTodo bien");
  process.exit(fails ? 1 : 0);
})();
