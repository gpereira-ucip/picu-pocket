(function(){const W=[5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30, 35, 40, 50, 60];let w=+(st.cw)||W[0],s=st.cs||"f";if(!W.includes(w))w=W[0];if(s!=="f"&&s!=="r")s="f";
const sel=$("#cwsel"),im=$("#cimg"),cz=$("#cz"),zi=$("#czi");
sel.innerHTML=W.map(x=>`<option value="${x}">${x} kg</option>`).join("");
const NM={f:"Paro y Status",r:"Analgosedación e infusiones"};
const nz=x=>x.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
function qh(){const q=nz(($("#cq")||{value:""}).value.trim());if(q.length<2)return"";const t=document.createElement("div"),out=[];
["f","r"].forEach(k=>{t.innerHTML=CARDS[w+k];t.querySelectorAll(".cd").forEach(d=>{if(nz(d.textContent).includes(q))out.push('<div class="cface">'+NM[k]+'</div>'+d.outerHTML)})});
return '<div class="ct"><div class="cth">PESO: '+w+' kg</div>'+(out.length?out.join(""):'<div class="cd"><div class="cdh"><b>Sin resultados</b><small>Probá con otro nombre o parte del nombre</small></div></div>')+'</div>'}
document.addEventListener("input",e=>{if(e.target.id==="cq")show()});
function show(){sel.value=w;document.querySelectorAll("#cside button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.s===s));
im.innerHTML=qh()||CARDS[w+s];im.setAttribute("aria-label","Tarjeta de medicación, peso "+w+" kg, "+NM[s]);im.hidden=false;st.cw=w;st.cs=s;save();
$("#cprev").disabled=W.indexOf(w)===0;$("#cnext").disabled=W.indexOf(w)===W.length-1;
}
sel.onchange=()=>{w=+sel.value;show()};
const step=d=>{const i=W.indexOf(w)+d;if(i>=0&&i<W.length){w=W[i];show()}};
$("#cprev").onclick=()=>step(-1);$("#cnext").onclick=()=>step(1);$("#czpv").onclick=()=>step(-1);$("#czn").onclick=()=>step(1);
$("#cside").onclick=e=>{const b=e.target.closest("button");if(!b)return;s=b.dataset.s;show()};
const ZL=[1,1.5,2.2,3,4,5];let z=2.2;
const zoom=()=>{zi.style.width=Math.round(Math.min(innerWidth,720)*z)+"px"};

$("#czp").onclick=()=>{const i=ZL.indexOf(z);if(i<ZL.length-1){z=ZL[i+1];zoom()}};
$("#czm").onclick=()=>{const i=ZL.indexOf(z);if(i>0){z=ZL[i-1];zoom()}};
$("#czf").onclick=()=>{z=1;zoom()};
const close=()=>{cz.hidden=true;document.body.style.overflow=""};
$("#czx").onclick=close;document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!cz.hidden)close()});
show()})();

(function(){
const sf=v=>isFinite(v)?parseFloat(v.toPrecision(3)).toString().replace(".",","):"—";
const DR=[
{n:"Adrenalina",c:1,cu:"mg",pres:"Ampolla 1 mg/mL (1:1000)",u:"µg/kg/min",lo:.05,hi:1,rec:"0,05–1 µg/kg/min",f:(w,v)=>({a:.6*w,vol:v?300:100})},
{n:"Noradrenalina",c:1,cu:"mg",pres:"Ampolla 1 mg/mL",u:"µg/kg/min",lo:.05,hi:1,rec:"0,05–1 µg/kg/min",f:(w,v)=>({a:.6*w,vol:v?300:100})},
{n:"Dopamina",c:40,cu:"mg",pres:"Ampolla 40 mg/mL",u:"µg/kg/min",lo:2,hi:20,rec:"2–20 µg/kg/min",f:w=>w<=20?{a:12*w,vol:50}:w<=45?{a:12*w,vol:100}:{a:6*w,vol:100}},
{n:"Dobutamina",c:12.5,cu:"mg",pres:"Ampolla 12,5 mg/mL",u:"µg/kg/min",lo:2,hi:20,rec:"2–20 µg/kg/min",f:w=>w<=20?{a:12*w,vol:50}:w<=45?{a:12*w,vol:100}:{a:6*w,vol:100}},
{n:"Milrinona",c:1,cu:"mg",pres:"Ampolla 1 mg/mL",u:"µg/kg/min",lo:.25,hi:.75,rec:"0,25–0,75 µg/kg/min",f:w=>.72*w>20?{a:20,vol:20,pure:1}:{a:.72*w,vol:24}},
{n:"Nitroprusiato",c:0,cu:"mg",pres:"Según presentación del servicio (dilución máxima 100 mg en 100 mL)",u:"µg/kg/min",lo:.5,hi:10,rec:"0,5–10 µg/kg/min",f:w=>({a:Math.min(6*w,100),vol:100})},
{n:"Vasopresina",c:20,cu:"UI",pres:"Ampolla 20 UI/mL",u:"UI/kg/min",lo:.0002,hi:.002,rec:"0,0002–0,002 UI/kg/min (las tarjetas Garrahan inician en 0,0002)",f:w=>({a:w<10?5:w<30?10:20,vol:24})},
{n:"Isoproterenol",c:.2,cu:"mg",pres:"Ampolla 0,2 mg/mL (verificar presentación)",u:"µg/kg/min",lo:.05,hi:2,rec:"0,05–2 µg/kg/min",f:w=>({a:.6*w,vol:100,dx:1})}
];
const $$=s=>document.querySelector(s);
const html=`<details class="card inf" id="c-inf"><summary><div class="sh"><span class="ic">${ic("calc")}</span><b>Infusión de inotrópicos y vasoactivos</b>${ic("chev","chev")}</div></summary><div class="calc">
<label class="f"><span>Droga</span><select id="i-d">${DR.map((d,i)=>`<option value="${i}">${d.n}</option>`).join("")}</select></label>
<div class="flds">${fld("i-w","Peso (kg)")}${fld("i-r","Velocidad (ml/h)")}</div>
<label class="f" id="i-vw"><span>Acceso venoso</span><select id="i-v"><option value="0">Central</option><option value="1">Periférico</option></select></label>
<div class="pp" id="i-pr" hidden><small>Presentación</small><span id="i-p"></span></div>
<div class="pp" id="i-rc" hidden><small>Dosis recomendada</small><span id="i-rt"></span></div>
<div class="pp" id="i-pp" hidden><small>Preparación sugerida</small><span id="i-pt"></span></div>
<div class="big" id="i-b1" hidden><small id="i-l1"></small><b id="i-o1"></b></div>
<div class="big" id="i-b2" hidden><small id="i-l2"></small><b id="i-o2"></b></div>
<div class="wn" id="i-wn" hidden></div>
<p class="nt2">Cálculos para acceso venoso CENTRAL. Para adrenalina y noradrenalina el acceso periférico usa dilución a 300 mL (1 mL/h = 0,033 µg/kg/min). Para otras drogas por vía periférica use el criterio clínico y la dilución del servicio. Reconstruida con las fórmulas de La Biblia y las tarjetas de Garrahan: verifique siempre contra las Cards antes de indicar. Con acceso central, cada preparación indica cuánta dosis da 1 mL/h.</p>
</div></details>`;
$$("#calcs").insertAdjacentHTML("afterbegin",html);
function run(){
const d=DR[+$$("#i-d").value],w=n("i-w"),r=n("i-r"),per0=+$$("#i-v").value;
$$("#i-vw").hidden=!(d.n==="Adrenalina"||d.n==="Noradrenalina");
const via=$$("#i-vw").hidden?0:per0;
const sh=(id,v)=>$$("#"+id).hidden=!v;
["i-pr","i-rc","i-pp","i-b1","i-b2","i-wn"].forEach(i=>sh(i,0));
$$("#i-p").textContent=d.pres;sh("i-pr",1);$$("#i-rt").textContent=d.rec;sh("i-rc",1);
if(!(w>0))return;
const p=d.f(w,via),a=p.a,vol=p.vol;
const per=d.u==="UI/kg/min"?a/(vol*60*w):a*1000/(vol*60*w);
let pt;
if(d.c>0){const ml=a/d.c;pt=p.pure?`Sin diluir: ${sf(ml)} mL (${sf(a)} ${d.cu}) en jeringa, goteo puro`:`${sf(ml)} mL de ${d.n} (${sf(a)} ${d.cu}) + ${p.dx?"Dx 10%":"Dx 5% o SF"} hasta ${vol} mL`}
else pt=`${sf(a)} mg de ${d.n} + Dx 5% hasta ${vol} mL (proteger de la luz)`;
$$("#i-pt").textContent=pt;sh("i-pp",1);
$$("#i-l1").textContent="A 1 mL/h, el paciente recibe";$$("#i-o1").textContent=sf(per)+" "+d.u;sh("i-b1",1);
let wn=[];
if(r>=0&&isFinite(r)&&$$("#i-r").value!==""){const dose=r*per;$$("#i-l2").textContent=`A ${sf(r)} mL/h, el paciente recibe`;$$("#i-o2").textContent=sf(dose)+" "+d.u;sh("i-b2",1);
if(dose>d.hi)wn.push("Dosis por encima del rango recomendado ("+d.rec.split(" (")[0]+").");else if(dose>0&&dose<d.lo)wn.push("Dosis por debajo del rango recomendado.")}
if(w>60)wn.push("Peso mayor a 60 kg: las tarjetas de Garrahan llegan hasta 60 kg; verifique la preparación.");
if(w<3)wn.push("Peso menor a 3 kg: verifique la preparación con farmacia.");
if(wn.length){$$("#i-wn").innerHTML=wn.join("<br>");sh("i-wn",1)}
}
["i-d","i-w","i-r","i-v"].forEach(i=>{$$("#"+i).addEventListener("input",run);$$("#"+i).addEventListener("change",run)});
run();
})();

(function(){
/* Preparación estandarizada de analgosedación (tablas de sedoanalgesia del Hospital Garrahan, vía calculadora ARUCIP).
   Cortes de peso tomados de la calculadora original; en los límites exactos que la fuente deja solapados (5, 7,5, 8, 10, 13, 17,5, 20, 25 y 31 kg) se usa el criterio indicado en cada función. */
const sf=v=>isFinite(v)?parseFloat(v.toPrecision(3)).toString().replace(".",","):"—";
const Q=s=>document.querySelector(s);
const mk=(c,prep,o)=>{o=o||{};const vol=o.vol||50;return{c,vol,tot:o.tot||c*vol,prep,pure:o.pure,dil:o.dil||"SF o Dx5%",warn:o.warn,via:o.via}};
const SD=[
{n:"Fentanilo",u:"mcg",pres:"Ampolla 5 mL (50 mcg/mL)",pick:w=>w<5?mk(5,"Tomar 5 mL (250 mcg = 1 ampolla) y llevar hasta 50 mL de SF o Dx5%"):w<7.5?mk(10,"Tomar 10 mL (500 mcg = 2 ampollas) y llevar hasta 50 mL de SF o Dx5%"):w<17.5?mk(20,"Tomar 20 mL (1000 mcg = 4 ampollas) y llevar hasta 50 mL de SF o Dx5%"):mk(50,"Puro, sin diluir: tomar 50 mL (2500 mcg = 10 ampollas)",{pure:1,tot:2500})},
{n:"Morfina",u:"mg",pres:"Ampolla 1 mL (10 mg/mL)",pick:w=>w<5?mk(.4,"Tomar 2 mL (20 mg = 2 ampollas) y llevar hasta 50 mL de SF o Dx5%"):w<13?mk(1,"Tomar 5 mL (50 mg = 5 ampollas) y llevar hasta 50 mL de SF o Dx5%"):w<25?mk(2,"Tomar 10 mL (100 mg = 10 ampollas) y llevar hasta 50 mL de SF o Dx5%"):mk(5,"Tomar 25 mL (250 mg = 25 ampollas) y llevar hasta 50 mL de SF o Dx5%")},
{n:"Midazolam",u:"mg",pres:"Ampolla 3 mL (5 mg/mL)",pick:w=>w<5?mk(.3,"Tomar 3 mL (15 mg = 1 ampolla) y llevar hasta 50 mL de SF o Dx5%"):w<8?mk(.6,"Tomar 6 mL (30 mg = 2 ampollas) y llevar hasta 50 mL de SF o Dx5%"):w<13?mk(.9,"Tomar 9 mL (45 mg = 3 ampollas) y llevar hasta 50 mL de SF o Dx5%"):w<31?mk(1.8,"Tomar 18 mL (90 mg = 6 ampollas) y llevar hasta 50 mL de SF o Dx5%"):mk(5,"Puro, sin diluir: tomar 48 mL (240 mg = 16 ampollas)",{pure:1,vol:48,tot:240})},
{n:"Clonidina",u:"mcg",pt:1,pres:"Ampolla 1 mL (150 mcg/mL)",pick:w=>w<=5?mk(6,"Tomar 2 mL (300 mcg = 2 ampollas) y llevar hasta 50 mL de SF o Dx5%"):w<=20?mk(12,"Tomar 4 mL (600 mcg = 4 ampollas) y llevar hasta 50 mL de SF o Dx5%"):mk(36,"Tomar 12 mL (1800 mcg = 12 ampollas) y llevar hasta 50 mL de SF o Dx5%")},
{n:"Dexmedetomidina",u:"mcg",pres:"Frasco ampolla 2 mL (100 mcg/mL)",pick:w=>w<10?mk(4,"Tomar 2 mL (200 mcg = 1 ampolla) y llevar hasta 50 mL de SF o Dx5%"):mk(8,"Tomar 4 mL (400 mcg = 2 ampollas) y llevar hasta 50 mL de SF o Dx5%")},
{n:"Ketamina",u:"mg",pres:"Frasco ampolla 10 mL (50 mg/mL)",pick:w=>w<=13?mk(5,"Tomar 5 mL (250 mg) y llevar hasta 50 mL de SF o Dx5%"):mk(10,"Tomar 10 mL (500 mg) y llevar hasta 50 mL de SF o Dx5%")},
{n:"Propofol 1%",u:"mg",pt:1,pres:"Ampolla 20 mL (10 mg/mL)",pick:()=>mk(10,"Puro, sin diluir (24 mL = 240 mg). Estabilidad máxima: 6 h.",{pure:1,vol:24,tot:240,warn:"Estabilidad máxima de la preparación: 6 h."})},
{n:"Tiopental",u:"mg",pres:"Frasco ampolla 1000 mg",pick:(w,via)=>via?mk(4,"Bomba volumétrica. Reconstituir el F/A en 20 mL de SF, tomar toda la solución reconstituida y llevar hasta 250 mL de SF.",{vol:250,tot:1000,dil:"SF o Dx5%",via:"periférica"}):mk(20,"Bomba de jeringa. Reconstituir el F/A en 20 mL de SF, tomar toda la solución reconstituida y llevar hasta 50 mL de SF.",{tot:1000,dil:"SF o Dx5%",via:"central"})},
{n:"Vecuronio",u:"mg",pres:"Frasco ampolla 10 mg",pick:()=>mk(1,"Bomba de jeringa. Reconstituir 5 F/A, cada uno en 10 mL de SF, y tomar toda la solución reconstituida (50 mL).",{tot:50,dil:"SF",warn:"En la fuente original esta preparación figura como pendiente de revisión (cómo indicarla y qué dilución es más adecuada). Verificar con farmacia."})}
];
const html=`<details class="card inf sed" id="c-sed"><summary><div class="sh"><span class="ic">${ic("pill")}</span><b>Analgosedación: preparación estandarizada</b>${ic("chev","chev")}</div></summary><div class="calc">
<div class="flds">${fld("s-w","Peso (kg)")}<label class="f"><span>Paciente obeso</span><select id="s-o"><option value="0">No</option><option value="1">Sí</option></select></label></div>
<div id="s-pw" hidden>${fld("s-p","Peso ideal (kg)")}</div>
<label class="f"><span>Vía (solo tiopental)</span><select id="s-v"><option value="0">Central</option><option value="1">Periférica</option></select></label>
<div class="wn" id="s-wn" hidden></div>
<div id="s-out"></div>
<p class="nt2">Preparaciones estandarizadas según las tablas de sedoanalgesia del Hospital Garrahan (calculadora de ARUCIP). Elegí cada droga para ver la indicación médica y cómo prepararla; "1 mL/h" indica la dosis que recibe el paciente por kg y por hora. En obesos, clonidina y propofol se calculan con el peso total y el resto con el peso ideal. No reemplaza el criterio médico: verificá siempre contra las tablas del servicio.</p>
</div></details>`;
Q("#c-inf").insertAdjacentHTML("afterend",html);
function run(){
 const w=n("s-w"),ob=+Q("#s-o").value,pi=n("s-p"),via=+Q("#s-v").value;
 Q("#s-pw").hidden=!ob;
 const out=Q("#s-out"),wn=Q("#s-wn");
 if(!(w>0)){out.innerHTML="";wn.hidden=true;return}
 const m=[];
 if(w>60)m.push("Peso mayor a 60 kg: estas tablas de sedoanalgesia son pediátricas. En adultos usar el protocolo propio del servicio.");
 if(ob&&!(pi>0))m.push("Paciente obeso: ingresá el peso ideal. Mientras tanto se usa el peso total para todas las drogas.");
 out.innerHTML=SD.map(d=>{
  const wd=(ob&&pi>0&&!d.pt)?pi:w,p=d.pick(wd,via),f=p.c/wd,u=d.u+"/kg/h";
  const lab=ob&&pi>0?(d.pt?"peso total":"peso ideal")+" "+sf(wd)+" kg":"";
  const ind=p.pure?`${d.n.replace(" 1%","")} puro (${sf(p.c)} ${d.u}/mL)${p.tot&&d.n!=="Fentanilo"&&d.n!=="Midazolam"?" · "+sf(p.tot)+" "+d.u:""}`:`${d.n.replace(" 1%","")} ${sf(p.tot)} ${d.u} en ${p.dil} hasta ${p.vol} mL`;
  const via2=d.n==="Tiopental"?` (vía ${p.via})`:"";
  return `<details class="sdd2"><summary><div style="flex:1;min-width:0"><b>${d.n}${via2}</b><small>${sf(p.c)} ${d.u}/mL · 1 mL/h = ${sf(f)} ${u}${lab?" · "+lab:""}</small></div>${ic("chev","chev")}</summary><div class="sdx">
<div class="pp"><small>Presentación</small>${d.pres}</div>
<div class="pp"><small>Indicación médica</small>${ind}</div>
<div class="pp"><small>Preparación</small>${p.prep}</div>
<div class="big"><small>A 1 mL/h, el paciente recibe</small><b>${sf(f)} ${u}</b></div>
${p.warn?`<div class="wn">${p.warn}</div>`:""}
<label class="sdq">Dosis deseada (${u}) <input type="number" inputmode="decimal" step="any" class="sdi" data-f="${f}" placeholder="0"> <b class="sdo">→ — mL/h</b></label>
</div></details>`}).join("");
 if(m.length){wn.innerHTML=m.join("<br>");wn.hidden=false}else wn.hidden=true;
}
Q("#s-out").addEventListener("input",e=>{const t=e.target;if(!t.classList||!t.classList.contains("sdi"))return;const x=parseFloat(t.value),f=+t.dataset.f;t.parentNode.querySelector(".sdo").textContent=x>0?"→ "+sf(x/f)+" mL/h":"→ — mL/h"});
["s-w","s-p"].forEach(i=>Q("#"+i).addEventListener("input",run));
["s-o","s-v"].forEach(i=>Q("#"+i).addEventListener("change",run));
run();
})();

(function(){
/* Electrolitos y ácido-base. Orden: Na, K, bicarbonato, Ca, P, Mg (cada uno con hipo e hiper); luego el resto. Fórmulas de La Biblia y tarjetas Garrahan; límites de corrección del sodio según revisiones pediátricas (AAFP, PMC, Cornell PICU); fósforo según Pediatric Dosage Handbook. */
const sf=v=>isFinite(v)?parseFloat(v.toPrecision(3)).toString().replace(".",","):"—";
const Q=s=>document.querySelector(s);
const sub=(t,sm,b)=>`<details class="sdd2"><summary><div style="flex:1;min-width:0"><b>${t}</b><small>${sm}</small></div>${ic("chev","chev")}</summary><div class="sdx">${b}</div></details>`;
const big=(l,v)=>`<div class="big"><small>${l}</small><b>${v}</b></div>`;
const pp=(l,v)=>`<div class="pp"><small>${l}</small>${v}</div>`;
const wn=t=>`<div class="wn">${t}</div>`;
const sel=(id,l,o)=>`<label class="f"><span>${l}</span><select id="${id}">${o}</select></label>`;
const fp=(id,l,ph)=>fld(id,l).replace('placeholder="0"',`placeholder="${ph}"`);
const gh=t=>`<h4 class="mh eh">${t}</h4>`;
const O=id=>`<div id="${id}"></div>`;
const need=()=>pp("Falta el peso","Ingresá el peso arriba para calcular.");
const html=`<details class="card inf sed" id="c-elec"><summary><div class="sh"><span class="ic">${ic("drop")}</span><b>Electrolitos y ácido-base</b>${ic("chev","chev")}</div></summary><div class="calc">
${fld("e-w","Peso (kg)")}
${sub("Valores normales de los iones","Rangos de referencia pediátricos",`<div class="tw"><table class="tb"><thead><tr><th>Ion</th><th>Valor normal</th></tr></thead><tbody><tr><td>Sodio (Na)</td><td>135–145 mEq/L</td></tr><tr><td>Potasio (K)</td><td>3,5–5 mEq/L (recién nacidos: hasta 6)</td></tr><tr><td>Cloro (Cl)</td><td>98–106 mEq/L</td></tr><tr><td>Bicarbonato (HCO₃)</td><td>22–26 mEq/L</td></tr><tr><td>Calcio total</td><td>8,5–10,5 mg/dL</td></tr><tr><td>Calcio iónico</td><td>1,1–1,3 mmol/L (4,4–5,2 mg/dL)</td></tr><tr><td>Fósforo: recién nacidos</td><td>4,8–8,2 mg/dL</td></tr><tr><td>Fósforo: 1–3 años</td><td>3,8–6,5 mg/dL</td></tr><tr><td>Fósforo: 4–11 años</td><td>3,7–5,6 mg/dL</td></tr><tr><td>Fósforo: 12–15 años</td><td>2,9–5,4 mg/dL</td></tr><tr><td>Fósforo: 16–19 años</td><td>2,7–4,7 mg/dL</td></tr><tr><td>Magnesio (Mg)</td><td>1,7–2,4 mg/dL (0,7–1 mmol/L)</td></tr></tbody></table></div><p class="nt2">Rangos de referencia pediátricos habituales en sangre; pueden variar según el laboratorio y el método.</p>`)}

${gh("Sodio")}
<p class="nt2 nv"><b>Valor normal:</b> Na 135–145 mEq/L</p>
${sub("Hiponatremia","Déficit de sodio y NaCl 3%",`<div class="flds">${fld("e-na","Na actual (mEq/L)")}${fp("e-nd","Na deseado (mEq/L)","135")}</div>${O("e-nao")}<p class="nt2"><b>Cómo preparar NaCl 3% con ampollas de NaCl 20%:</b> 15 mL de NaCl 20% + 85 mL de agua destilada = 100 mL de NaCl 3% (0,513 mEq/mL). El NaCl 20% tiene 3,4 mEq/mL: no se administra sin diluir.</p>`)}
${sub("Hipernatremia","Déficit de agua libre y velocidad",`<div class="flds">${fld("e-hn","Na actual (mEq/L)")}${fp("e-hd","Na deseado (mEq/L)","140")}</div>${fp("e-hh","Horas para corregir","48")}${O("e-hno")}`)}

${gh("Potasio")}
<p class="nt2 nv"><b>Valor normal:</b> K 3,5–5 mEq/L (recién nacidos: hasta 6 mEq/L)</p>
${sub("Hipokalemia","1 mEq/kg: leve, moderada y grave",`${fld("e-kk","K actual (mEq/L), opcional")}${fp("e-kt","Tiempo de infusión (h)","3")}${fld("e-kc","Ampolla de ClK (mEq/mL), opcional")}${fld("e-kv","Volumen final de la dilución (mL), opcional")}${sel("e-kz","Acceso venoso",'<option value="0">Periférico</option><option value="1">Central</option>')}${O("e-ko")}`)}
${sub("Hiperkalemia","Tratamiento escalonado por peso",`${O("e-hko")}`)}

${gh("Bicarbonato")}
<p class="nt2 nv"><b>Valor normal:</b> Bicarbonato 22–26 mEq/L · Cloro 98–106 mEq/L</p>
${sub("Acidosis metabólica (bicarbonato bajo)","Déficit = 0,3 × peso × Δ bicarbonato",`<div class="flds">${fld("e-b1","Bicarbonato actual (mEq/L)")}${fld("e-b2","Bicarbonato deseado (mEq/L)")}</div>${O("e-bo")}`)}
${sub("Alcalosis metabólica (bicarbonato alto)","PCO2 esperada y déficit de cloro",`<div class="flds">${fld("e-a1","Bicarbonato actual (mEq/L)")}${fld("e-a2","Cloro actual (mEq/L)")}</div>${O("e-ao")}`)}

${gh("Calcio")}
<p class="nt2 nv"><b>Valor normal:</b> Calcio total 8,5–10,5 mg/dL · Calcio iónico 1,1–1,3 mmol/L (4,4–5,2 mg/dL)</p>
${sub("Hipocalcemia","Dosis de gluconato o cloruro de calcio",`<div class="flds">${fld("e-c1","Calcio total (mg/dL), opcional")}${fld("e-c2","Albúmina (g/dL), opcional")}</div>${O("e-co1")}`)}
${sub("Hipercalcemia","Medidas y dosis por peso",`<div class="flds">${fld("e-d1","Calcio total (mg/dL), opcional")}${fld("e-d2","Albúmina (g/dL), opcional")}</div>${O("e-co2")}`)}

${gh("Fósforo")}
<p class="nt2 nv"><b>Valor normal:</b> Fósforo según edad: recién nacidos 4,8–8,2 · 1–3 años 3,8–6,5 · 4–11 años 3,7–5,6 · 12–15 años 2,9–5,4 · 16–19 años 2,7–4,7 mg/dL</p>
${sub("Hipofosfatemia","Corrección IV según gravedad",`${fld("e-p1","Fósforo actual (mg/dL), opcional")}${sel("e-ps","Gravedad",'<option value="0">Según el valor ingresado</option><option value="1">Leve</option><option value="2">Moderada</option><option value="3">Grave</option>')}${O("e-po1")}`)}
${sub("Hiperfosfatemia","Producto calcio × fósforo y medidas",`<div class="flds">${fld("e-q1","Fósforo (mg/dL)")}${fld("e-q2","Calcio total (mg/dL)")}</div>${O("e-po2")}`)}

${gh("Magnesio")}
<p class="nt2 nv"><b>Valor normal:</b> Magnesio 1,7–2,4 mg/dL (0,7–1 mmol/L)</p>
${sub("Hipomagnesemia","Sulfato de magnesio 25 mg/kg",O("e-mo1"))}
${sub("Hipermagnesemia","Antagonismo con calcio y eliminación",O("e-mo2"))}

${gh("Otros cálculos")}
${sub("Sodio corregido por glucemia","Na medido y glucemia",`<div class="flds">${fld("e-g1","Na medido (mEq/L)")}${fld("e-g2","Glucemia (mg/dL)")}</div>${O("e-go")}`)}
${sub("Gasometría: pH, PCO2 y bicarbonato","Henderson-Hasselbalch y compensación",`<p class="nt2">Ingresá dos de los tres valores (pH, PCO2, bicarbonato) y se calcula el tercero. Sirve también para hallar la PCO2 o el bicarbonato necesarios para un pH objetivo.</p><div class="flds">${fld("e-ph","pH")}${fld("e-pc","PCO2 (mmHg)")}</div>${fld("e-hc","Bicarbonato (mEq/L)")}${O("e-gaso")}`)}
${sub("Anión restante (anion gap)","Na, Cl, bicarbonato y albúmina",`<div class="flds">${fld("e-ag1","Na (mEq/L)")}${fld("e-ag2","Cl (mEq/L)")}</div><div class="flds">${fld("e-ag3","Bicarbonato (mEq/L)")}${fld("e-ag4","Albúmina (g/dL), opcional")}</div>${O("e-ago")}`)}
<p class="nt2">Fórmulas de La Biblia, de las tarjetas de Garrahan y de bibliografía pediátrica. Los límites de corrección del sodio se basan en revisiones pediátricas y de la AAFP. Herramienta de apoyo: no reemplaza el criterio clínico ni el protocolo del servicio. Verificá siempre los valores, la ampolla y la dilución antes de indicar.</p>
</div></details>`;
Q("#calcs").insertAdjacentHTML("beforeend",html);
const W=()=>n("e-w");
function hipoNa(){const w=W(),na=n("e-na"),des=n("e-nd")>0?n("e-nd"):135;let o="";
 if(na>0){if(!(w>0))o=need();
  else if(na<des){const d=(des-na)*0.6*w,ad=(513-na)/(0.6*w+1);
   o=big("Déficit de sodio",sf(d)+" mEq")+pp("Equivale a",`NaCl 3% (0,513 mEq/mL): ${sf(d/.513)} mL<br>NaCl 0,9% (0,154 mEq/mL): ${sf(d/.154)} mL`)+pp("Preparar el NaCl 3% del déficit con ampollas de NaCl 20%",`${sf(d/.513)} mL de NaCl 3% = ${sf(d/.513*.15)} mL de NaCl 20% + ${sf(d/.513*.85)} mL de agua destilada`)+pp("Hiponatremia grave con síntomas (La Biblia)",`NaCl 3% 2–4 mL/kg en 15–30 min: ${sf(2*w)} a ${sf(4*w)} mL<br>Ascenso estimado con esa dosis (Adrogué-Madias): ${sf(ad*2*w/1000)} a ${sf(ad*4*w/1000)} mEq/L`)+pp("Preparar el bolo con ampollas de NaCl 20%",`Para ${sf(2*w)} mL de NaCl 3% (2 mL/kg): ${sf(2*w*.15)} mL de NaCl 20% + ${sf(2*w*.85)} mL de agua destilada<br>Para ${sf(4*w)} mL de NaCl 3% (4 mL/kg): ${sf(4*w*.15)} mL de NaCl 20% + ${sf(4*w*.85)} mL de agua destilada<br>Regla: por cada 100 mL, 15 mL de NaCl 20% + 85 mL de agua destilada.`)+pp("Tope de Na a las 24 h",`${sf(na+10)} mEq/L (máx +10; usar +8 si hay riesgo alto de desmielinización: hipokalemia, desnutrición, hepatopatía, alcoholismo).`)+wn("Ascenso máximo 0,5 mEq/L/h y no más de 10–12 mEq/L en 24 h en hiponatremia crónica (riesgo de desmielinización osmótica). Dar todo el déficit en pocas horas solo corresponde a la forma aguda sintomática. Si se supera el ascenso, considerar re-descenso. Controlar el sodio seriado (cada 2–4 h).")}
  else o=pp("Resultado","El sodio actual no es menor que el deseado: no hay déficit que calcular.")}
 Q("#e-nao").innerHTML=o}
function hiperNa(){const w=W(),na=n("e-hn"),des=n("e-hd")>0?n("e-hd"):140,hh=n("e-hh")>0?n("e-hh"):48;let o="";
 if(na>0){if(!(w>0))o=need();
  else if(na>des){const l=0.6*w*(na/des-1)*1000,mn=(na-des)/0.5;
   o=big("Déficit de agua libre",sf(l)+" mL")+pp(`Repartido en ${sf(hh)} h`,`${sf(l/hh)} mL/h de agua libre (por ejemplo Dx 5% EV, o vía enteral si la tolera), además del mantenimiento y las pérdidas en curso.`)+pp("Velocidad de descenso del Na",`${sf((na-des)/hh)} mEq/L/h. Tiempo mínimo para bajar de ${sf(na)} a ${sf(des)}: ${sf(mn)} h (a 0,5 mEq/L/h).`)+(hh<mn?wn("El tiempo elegido implica descender más rápido que 0,5 mEq/L/h: riesgo de edema cerebral. Alargar el tiempo."):"")+wn("Descenso máximo: 0,5 mEq/L/h y 10–12 mEq/L en 24 h. Con shock o deshidratación grave, primero reponer la volemia con solución isotónica. Controlar el sodio seriado (cada 4–6 h). Si hay descenso demasiado rápido con convulsiones: NaCl 3% 2–3 mL/kg.")}
  else o=pp("Resultado","El sodio actual no es mayor que el deseado: no hay déficit de agua libre.")}
 Q("#e-hno").innerHTML=o}
function hipoK(){const w=W(),k=n("e-kk"),t=n("e-kt")>0?n("e-kt"):3,kc=n("e-kc")>0?n("e-kc"):3,kv=n("e-kv"),cz=+Q("#e-kz").value;let ko="";
 if(w>0){const d=Math.min(w,40),rmax=Math.min(.5*w,20),rmin=Math.min(.25*w,20),lim=cz?150:60,vmin=d/lim*1000,vol=kv>0?kv:vmin,rate=d/t,c=d/vol*1000;
  const g=k>0?(k<2.5?3:k<3?2:k<3.5?1:0):-1,hd=(x,l)=>"<b>"+(g===x?"▶ ":"")+l+"</b>";
  if(k>0)ko+=big("K "+sf(k)+" mEq/L",g===3?"Hipokalemia grave":g===2?"Hipokalemia moderada":g===1?"Hipokalemia leve":"Sin hipokalemia (K ≥3,5 mEq/L)");
  ko+=big("Dosis: 1 mEq/kg (máximo 40 mEq/dosis)",sf(d)+" mEq");
  ko+=pp("1. Leve (K 3–3,4 mEq/L), asintomática",hd(1,"Vía oral")+": 1 mEq/kg/dosis = "+sf(d)+" mEq/dosis (hasta 3–4 mEq/kg/día en dosis divididas). Adultos 40–100 mEq/día en dosis divididas (no superar 20 mEq/dosis).");
  ko+=pp("2. Moderada (K 2,5–2,9 mEq/L)",hd(2,"Vía oral")+": 1 mEq/kg/dosis = "+sf(d)+" mEq/dosis.<br>Si no tolera la vía oral o tiene síntomas: <b>EV</b> como en la grave (paso 3).");
  ko+=pp("3. Grave (K &lt;2,5 mEq/L, o síntomas o ECG alterado): EV",hd(3,"Corrección EV de 1 mEq/kg, paso a paso")+"<br>a) Cargar "+sf(d/kc)+" mL de ClK (ampolla de "+sf(kc)+" mEq/mL) = "+sf(d)+" mEq"
   +"<br>b) Diluir hasta "+sf(vol)+" mL"+(kv>0?" (volumen ingresado)":" (volumen final mínimo para vía "+(cz?"central, 150":"periférica, 60")+" mEq/L)")+": concentración "+sf(c)+" mEq/L"
   +"<br>c) Pasar en "+sf(t)+" h: "+sf(vol/t)+" mL/h = "+sf(rate)+" mEq/h = "+sf(rate/w)+" mEq/kg/h"
   +"<br>d) Velocidad permitida (CIME Garrahan 2022): 0,25 a 0,5 mEq/kg/h = "+sf(rmin)+" a "+sf(rmax)+" mEq/h, sin superar 20 mEq/h; con esta dosis, entre "+sf(d/rmax)+" y "+sf(d/Math.max(rmin,1e-9))+" h"
   +"<br>e) Monitoreo ECG continuo; corregir también el magnesio; controlar el K al terminar la infusión.");
  if(rate/w>.5||rate>20)ko+=wn("Supera la velocidad máxima (0,5 mEq/kg/h o 20 mEq/h): solo con acceso central y monitoreo ECG continuo.");
  if(c>lim+1e-6)ko+=wn("Supera el límite de "+lim+" mEq/L para acceso "+(cz?"central":"periférico")+" (periférica a 60 mEq/L, central a 150 mEq/L).");
  if(k>0&&k<=2)ko+=wn("K ≤2 mEq/L: hipokalemia muy severa; usar la corrección EV con monitoreo ECG continuo, buscar arritmias o debilidad muscular, corregir también el magnesio y controlar K seriado.")
 }else ko=need();
 Q("#e-ko").innerHTML=ko}
function hiperK(){const w=W();let o="";
 if(w>0){const g=Math.min(w,20);
  o=pp("1. Estabilizar la membrana: calcio",`Gluconato de Ca 10%: 0,5–1 mL/kg = ${sf(Math.min(.5*w,10))} a ${sf(Math.min(w,10))} mL (máx 10 mL), en 10 min<br>O cloruro de Ca 10%: 0,1–0,2 mL/kg = ${sf(Math.min(.1*w,10))} a ${sf(Math.min(.2*w,10))} mL (máx 10 mL; 10–20 mg/kg según AHA PALS, por vía central)`)
  +pp("2. Introducir K en la célula: salbutamol",`1 gota/kg en 3 mL de SF nebulizado = ${sf(g)} gotas (máx 20)`)
  +pp("Insulina + glucosa",`Insulina corriente 0,1 U/kg = ${sf(.1*w)} UI + glucosa 0,5 g/kg = ${sf(.5*w)} g (ver la calculadora de glucosa e insulina). La Biblia indica 0,2–0,5 U/kg (máx 10 U) + 3 g de glucosa por UI: ${sf(.2*w)} a ${sf(Math.min(.5*w,10))} UI. Controlar glucemia.`)
  +pp("Bicarbonato de sodio","1–2 mEq/kg = "+sf(w)+" a "+sf(2*w)+" mEq (1–2 mL/kg de 1 M, diluido). Efectivo en acidosis metabólica.")
  +pp("3. Eliminar potasio","Furosemida 1 mg/kg = "+sf(w)+" mg EV si hay diuresis. Si es refractaria o hay oligoanuria: diálisis.")
  +wn("Con ECG alterado (T picuda, ensanchamiento de QRS) iniciar por el calcio. Suspender aportes de K y fármacos que lo elevan. Monitoreo ECG continuo.")
 }else o=need();
 Q("#e-hko").innerHTML=o}
function acidosis(){const w=W(),b1=n("e-b1"),b2=n("e-b2");let bo="";
 if(w>0&&b1>=0&&b2>0&&Q("#e-b1").value!==""){const dl=b2-b1;
  if(dl<=0)bo=pp("Resultado","El bicarbonato deseado no es mayor que el actual: no hay déficit.");
  else{const m=0.3*w*dl;bo=big("Déficit de bicarbonato",sf(m)+" mEq")+pp("Bicarbonato de sodio 1 M (1 mEq/mL)",sf(m)+" mL, diluir a la mitad")+pp("Bicarbonato 1/6 M (La Biblia: con agua destilada, en 1–2 h)",sf(m*6)+" mL")+pp("Habitualmente","Dar la mitad del déficit y reevaluar con nueva gasometría.")+(m>100?wn("Supera la dosis máxima de 100 mEq indicada en la tarjeta Garrahan."):"")+wn("En cetoacidosis diabética no se recomienda bicarbonato (GAP Garrahan 2025): solo si pH &lt;6,8 con compromiso de la contractilidad o hiperkalemia grave.")}}
 else if(!(w>0)&&(b1>=0||b2>0))bo=need();
 Q("#e-bo").innerHTML=bo}
function alcalosis(){const b=n("e-a1"),cl=n("e-a2"),w=W();let o="";
 if(b>26){o=big("PCO2 esperada (compensación)",sf(40+0.7*(b-24))+" mmHg")+pp("Según La Biblia",sf(40+(b-24))+" mmHg (40 + Δ bicarbonato). La compensación respiratoria habitual es 0,7 mmHg por cada mEq/L de bicarbonato.")}
 if(cl>0&&w>0){const d=0.2*w*(100-cl);if(d>0)o+=pp("Déficit de cloro (hasta 100 mEq/L)",sf(d)+" mEq (0,2 × peso × (100 − Cl)). Con NaCl 0,9% (0,154 mEq/mL de Cl): "+sf(d/.154)+" mL.");else o+=pp("Cloro","El cloro no está bajo 100 mEq/L.")}
 o+=pp("Enfoque","Cloro urinario &lt;15–20 mEq/L = cloruro-sensible (vómitos, diuréticos, SNG): reponer volemia con NaCl 0,9% y K. Cloro urinario alto = cloruro-resistente (hiperaldosteronismo, Bartter): tratar la causa.");
 Q("#e-ao").innerHTML=o}
function corrCa(a,b){return a+0.8*(4-b)}
function hipoCa(){const w=W(),c=n("e-c1"),a=n("e-c2");let o="";
 if(c>0&&a>0){const cc=corrCa(c,a);o+=big("Calcio corregido por albúmina",sf(cc)+" mg/dL")+pp("Fórmula","Ca total + 0,8 × (4 − albúmina). Es una estimación: es preferible el calcio iónico.")}
 else if(c>0)o+=pp("Calcio total",sf(c)+" mg/dL. Ingresá la albúmina para corregirlo. Es preferible medir el calcio iónico.");
 if(w>0){o+=big("Gluconato de Ca 10%: 0,6–1 mL/kg",sf(Math.min(.6*w,10))+" a "+sf(Math.min(w,10))+" mL (máx 10 mL por dosis)")+pp("Cloruro de Ca 10% (central): 0,2 mL/kg",sf(Math.min(.2*w,10))+" mL")+pp("Calcio elemental (La Biblia: 5–7 mg/kg, ≈ 0,6–0,75 mL/kg de gluconato 10%)",sf(5*w)+" a "+sf(7*w)+" mg. Gluconato 10%: 9,3 mg de Ca elemental/mL. Cloruro 10%: 27,2 mg/mL.")+pp("Cómo darlo","Lento, en 10–30 min, con monitoreo ECG. En paro, pasar rápido. Máximo 10 mL por dosis. No mezclar con bicarbonato ni fosfato. El cloruro de calcio se da por vía central: extravasación grave.")+wn("Corregir también la hipomagnesemia y la alcalosis. Bradicardia con digoxina: cuidado.")}
 else o+=need();
 Q("#e-co1").innerHTML=o}
function hiperCa(){const w=W(),c=n("e-d1"),a=n("e-d2");let o="";
 if(c>0){const cc=a>0?corrCa(c,a):c,lv=cc>14?"grave (&gt;14 mg/dL)":cc>12?"moderada (12–14 mg/dL)":cc>10.5?"leve (&lt;12 mg/dL)":"no hay hipercalcemia con este valor";
  o+=big(a>0?"Calcio corregido":"Calcio total",sf(cc)+" mg/dL")+pp("Gravedad",lv)}
 if(w>0){o+=pp("1. Volemia","SF 0,9% en 1,5–2 veces el mantenimiento hasta lograr euvolemia y diuresis.")
  +pp("2. Furosemida (tras reponer volemia)","1 mg/kg = "+sf(w)+" mg EV c/6–12 h")
  +pp("3. Si es grave o persiste","Calcitonina 4 UI/kg SC c/12 h = "+sf(4*w)+" UI. Bifosfonatos (pamidronato 0,5–1 mg/kg = "+sf(.5*w)+" a "+sf(w)+" mg EV) según indicación del especialista. Corticoides si es por vitamina D, sarcoidosis o linfoma.")
  +wn("Hipercalcemia grave sintomática o con insuficiencia renal: diálisis. Suspender calcio, vitamina D y tiazidas. Monitoreo ECG (QT corto). Verificar las dosis con el protocolo del servicio.")}
 else o+=need();
 Q("#e-co2").innerHTML=o}
function hipoP(){const w=W(),p=n("e-p1"),s0=+Q("#e-ps").value;let o="";
 const kid=!(w>=50);let g=s0;if(!g&&p>0)g=kid?(p<1?3:p<1.5?2:p<2?1:0):(p<1.5?3:p<2.3?2:p<=3?1:0);
 if(p>0)o+=pp("Fósforo actual",sf(p)+" mg/dL = "+sf(p*0.3229)+" mmol/L");
 if(g&&w>0){const mgk=kid?[0,2.5,5,10][g]:[0,5,10,20][g],hr=kid?"4–6 h":(g===3?"8–12 h":"4–6 h"),mg=mgk*w,mmol=mg/31,ml=mmol/3,nm=["","leve","moderada","grave"][g];
  o+=big("Hipofosfatemia "+nm+" ("+(kid?"niño <50 kg":"adulto ≥50 kg")+")",sf(mg)+" mg de fósforo elemental = "+sf(mmol)+" mmol")+pp("Dosis por kg (CIME Garrahan 2022)",sf(mgk)+" mg/kg en "+hr+"; repetir hasta fósforo 2 mg/dL")+pp("Fosfato de sodio o de potasio (3 mmol de P/mL; 1 mmol = 31 mg)",sf(ml)+" mL<br>Aporte de potasio con fosfato de K (4,4 mEq/mL): "+sf(ml*4.4)+" mEq<br>Aporte de sodio con fosfato de Na (4 mEq/mL): "+sf(ml*4)+" mEq")+pp("Dilución y velocidad","Concentración máxima: periférica 0,05 mmol/mL (≥ "+sf(mmol/0.05)+" mL), central 0,12 mmol/mL (≥ "+sf(mmol/0.12)+" mL). Velocidad máxima 0,06 mmol/kg/h (no menos de "+sf(mmol/w/0.06)+" h).")
  +(mmol>45?wn("La dosis calculada supera 45 mmol de fósforo, que es la dosis única máxima habitual en adultos: fraccionar y verificar con el protocolo del servicio."):"")+wn("Elegir la sal según sodio y potasio del paciente. Monitoreo cardíaco con infusión intermitente o dosis altas. No administrar en insuficiencia renal severa. Incompatible con calcio y magnesio. Chequear calcio antes de administrar.")}
 else if(g&&!(w>0))o+=need();
 else o+=pp("Gravedad","Niños (<50 kg): leve 1,5–1,9; moderada 1–1,4; grave &lt;1 mg/dL. Adultos (≥50 kg): leve 2,3–3; moderada 1,6–2,2; grave &lt;1,5 mg/dL. Ingresá el fósforo o elegí la gravedad.");
 o+=pp("Mantenimiento EV","Niños: 15 a 45 mg/kg/día (inicio 15; máximo 45 mg/kg/día)"+(w>0?" = "+sf(15*w)+" a "+sf(45*w)+" mg/día":"")+". Adultos: 1550–2170 mg/día.");
 o+=pp("Síndrome de realimentación","Con desnutrición, ayuno prolongado o reinicio de nutrición: controlar fósforo, potasio y magnesio y reponer antes y durante la realimentación.");
 Q("#e-po1").innerHTML=o}
function hiperP(){const p=n("e-q1"),c=n("e-q2");let o="";
 if(p>0&&c>0){const pr=p*c;o+=big("Producto calcio × fósforo",sf(pr)+" mg²/dL²")+(pr>60?wn("Producto mayor de 55–60: riesgo de calcificación metastásica. Reducir el fósforo."):pp("Interpretación","Menor de 55–60 mg²/dL²."))}
 o+=pp("Medidas","Suspender aportes de fósforo (nutrición, enemas con fosfato). Hidratación con SF si la función renal lo permite. Quelantes con las comidas (carbonato de calcio, sevelamer). Con insuficiencia renal grave o hipocalcemia sintomática: diálisis. No dar calcio IV salvo que haya hipocalcemia sintomática (riesgo de precipitación).");
 Q("#e-po2").innerHTML=o}
function hipoMg(){const w=W();let o="";
 if(w>0){o=big("Sulfato de magnesio 25 mg/kg",sf(Math.min(25*w,2000))+" mg"+(25*w>2000?" (tope adulto 2 g)":""))+pp("Sulfato de magnesio 25% (250 mg/mL)",sf(Math.min(25*w,2000)/250)+" mL")+pp("Dilución (La Biblia)","Diluir en 50 o 100 mL. Regla de 3. Ej 10 kg: 250 mg × 100 ÷ 25.000 = 1 mL.")+pp("Rango habitual","25–50 mg/kg = "+sf(25*w)+" a "+sf(Math.min(50*w,2000))+" mg (máx 2 g), en 20 min–6 h según urgencia. 1 g de sulfato de Mg = 8,1 mEq.")+wn("Si hay arritmia (torsión de puntas) o convulsión, pasar en 10–20 min con monitoreo. Vigilar hipotensión, bradicardia y pérdida de reflejos. Cuidado en insuficiencia renal. Verificar con el protocolo del servicio.")}
 else o=need();
 Q("#e-mo1").innerHTML=o}
function hiperMg(){const w=W();let o="";
 if(w>0)o=pp("Antagonizar con calcio","Gluconato de Ca 10%: 0,6–1 mL/kg = "+sf(Math.min(.6*w,10))+" a "+sf(Math.min(w,10))+" mL, máx 10 mL (La Biblia: calcio en hipermagnesemia), lento, con ECG")+pp("Eliminar","Suspender magnesio. Hidratación con SF y furosemida 1 mg/kg = "+sf(w)+" mg EV si hay diuresis. Con insuficiencia renal o toxicidad grave: diálisis.")+wn("Signos: hiporreflexia, hipotensión, bradicardia, depresión respiratoria, paro. Tener la vía aérea asegurada si hay depresión respiratoria.");
 else o=need();
 Q("#e-mo2").innerHTML=o}
function gluc(){const g1=n("e-g1"),g2=n("e-g2");let go="";
 if(g1>0&&g2>0){if(g2<=100)go=pp("Resultado","Con glucemia ≤100 mg/dL no hace falta corregir el sodio.");
  else go=big("Sodio corregido (factor 1,6)",sf(g1+1.6*(g2-100)/100)+" mEq/L")+pp("Con factor 2 (GAP Garrahan 2025, cetoacidosis diabética)",sf(g1+2*(g2-100)/100)+" mEq/L")+pp("Con factor 2,4 (usado por algunos autores)",sf(g1+2.4*(g2-100)/100)+" mEq/L")+wn("Estimación: por cada 100 mg/dL de glucemia por encima de 100, el sodio medido baja unos 1,6 mEq/L.")}
 Q("#e-go").innerHTML=go}
function gaso(){let ph=n("e-ph"),pc=n("e-pc"),hc=n("e-hc");const a=isFinite(ph)&&ph>0,b=isFinite(pc)&&pc>0,c=isFinite(hc)&&hc>0;let o="";
 if(a&&b&&!c){hc=0.03*pc*Math.pow(10,ph-6.1);o=big("Bicarbonato calculado",sf(hc)+" mEq/L")}
 else if(a&&c&&!b){pc=hc/(0.03*Math.pow(10,ph-6.1));o=big("PCO2 calculada",sf(pc)+" mmHg")}
 else if(b&&c&&!a){ph=6.1+Math.log10(hc/(0.03*pc));o=big("pH calculado",ph.toFixed(2).replace(".",","))}
 else if(a&&b&&c){const p2=6.1+Math.log10(hc/(0.03*pc));o=pp("Coherencia","pH calculado con PCO2 y bicarbonato: "+p2.toFixed(2).replace(".",",")+(Math.abs(p2-ph)>0.05?". No coincide con el pH ingresado: revisar los datos.":". Coincide."))}
 if((a||isFinite(ph))&&isFinite(hc)&&hc>0&&isFinite(ph)){
  if(ph<7.35&&hc<22)o+=pp("Acidosis metabólica: PCO2 esperada",sf(1.5*hc+8)+" ± 2 mmHg (Winter). La Biblia: "+sf(40-1.25*(24-hc))+" mmHg. PCO2 mayor que la esperada: además acidosis respiratoria; menor: alcalosis respiratoria.");
  else if(ph>7.45&&hc>26)o+=pp("Alcalosis metabólica: PCO2 esperada",sf(40+0.7*(hc-24))+" mmHg (La Biblia: "+sf(40+(hc-24))+").");
  else if(isFinite(pc)&&pc>0){if(ph<7.35&&pc>45)o+=pp("Acidosis respiratoria","Bicarbonato esperado: agudo +1 mEq/L cada 10 mmHg sobre 40 (≈"+sf(24+(pc-40)/10)+"); crónico +3,5 (≈"+sf(24+3.5*(pc-40)/10)+").");else if(ph>7.45&&pc<35)o+=pp("Alcalosis respiratoria","Bicarbonato esperado: agudo −2 mEq/L cada 10 mmHg bajo 40 (≈"+sf(24-2*(40-pc)/10)+"); crónico −4 (≈"+sf(24-4*(40-pc)/10)+").")}}
 Q("#e-gaso").innerHTML=o}
function ag(){const na=n("e-ag1"),cl=n("e-ag2"),b=n("e-ag3"),al=n("e-ag4");let o="";
 if(na>0&&cl>0&&b>=0&&Q("#e-ag3").value!==""){const g=na-cl-b;o=big("Anión restante",sf(g)+" mEq/L")+pp("Referencia","Normal ≈ 12 ± 4 mEq/L (con albúmina normal).");
  if(al>0){const gc=g+2.5*(4.4-al);o+=pp("Corregido por albúmina",sf(gc)+" mEq/L (+2,5 por cada g/dL de albúmina bajo 4,4)")}
  const gg=al>0?g+2.5*(4.4-al):g;
  if(gg>16){const d=b<24?(gg-12)/(24-b):NaN;if(isFinite(d))o+=pp("Delta/delta (ΔAG ÷ ΔHCO3)",sf(d)+(d<0.4?": acidosis hiperclorémica asociada":d<1?": acidosis mixta (AG elevado + hiperclorémica)":d<=2?": acidosis con AG elevado pura":": además hay alcalosis metabólica o acidosis respiratoria crónica"))}}
 Q("#e-ago").innerHTML=o}
function run(){hipoNa();hiperNa();hipoK();hiperK();acidosis();alcalosis();hipoCa();hiperCa();hipoP();hiperP();hipoMg();hiperMg();gluc();gaso();ag()}
Q("#c-elec").addEventListener("input",run);Q("#c-elec").addEventListener("change",run);run();
})();


(function(){
/* POCUS: eFAST. Resumen y traducción al español de la guía "FAST Scan-eFAST Ultrasound Exam Made Easy" de POCUS 101 (Seth White, Vi Dinh y col.). Imágenes de esa guía, para uso personal sin conexión. */