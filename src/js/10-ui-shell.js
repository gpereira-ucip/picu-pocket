
(function(){
"use strict";
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var VER="0.50";
function sget(k,d){try{var v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}}
function sset(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function jget(k,d){try{return JSON.parse(sget(k,"")||"null")||d}catch(e){return d}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function norm(s){s=String(s||"").toLowerCase();try{s=s.normalize("NFD").replace(/[̀-ͯ]/g,"")}catch(e){}return s}
var toastT;function toast(t){var e=$("#toast45");if(!e){e=document.createElement("div");e.id="toast45";e.setAttribute("role","status");document.body.appendChild(e)}e.textContent=t;e.className="on";clearTimeout(toastT);toastT=setTimeout(function(){e.className=""},2200)}
function copyText(tx,ok){var done=function(){toast(ok||"Copiado")};
 var fb=function(){try{var a=document.createElement("textarea");a.value=tx;a.setAttribute("readonly","");a.style.cssText="position:fixed;opacity:0;top:0";document.body.appendChild(a);a.select();a.setSelectionRange(0,99999);document.execCommand("copy");a.remove();done()}catch(e){toast("No se pudo copiar")}};
 try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(tx).then(done,fb)}else fb()}catch(e){fb()}}
function shareText(tx,title){try{if(navigator.share){navigator.share({title:title||"Arucip",text:tx}).catch(function(){});return}}catch(e){}copyText(tx,"Copiado: pegalo en WhatsApp o donde quieras")}
function curW(){var w=$("#gw");var v=w?parseFloat(w.value):NaN;return v>0?v:null}
function tidy(t){return String(t).replace(/ /g," ").replace(/[ \t]+\n/g,"\n").replace(/\n{2,}/g,"\n").trim()}
function resultText(title,node){var clone=node.cloneNode(true);$$("button,.shr,input,select,summary",clone).forEach(function(n){n.remove()});
 var lines=[];$$(".r",clone).forEach(function(r){var s=$("span",r),b=$("b",r);if(s&&b)lines.push(tidy(s.firstChild?s.firstChild.textContent:s.textContent)+": "+tidy(b.textContent))});
 var body=lines.length?lines.join("\n"):tidy(node.innerText||node.textContent);
 var w=curW();return "Arucip · "+title+(w?"\nPeso: "+String(w).replace(".",",")+" kg":"")+"\n"+body+"\n(Verificar siempre las dosis en la fuente original)"}

/* ---------- 1. tamaño del texto ---------- */
var FS=[100,112.5,125];
function applyFs(){var i=parseInt(sget("picu-fs","0"),10);if(!(i>=0&&i<3))i=0;document.documentElement.style.fontSize=FS[i]+"%";$$("#fs-ctl button").forEach(function(b){b.setAttribute("aria-pressed",String(parseInt(b.dataset.i,10)===i))})}
applyFs();

/* ---------- 2. aviso inicial ---------- */
function ack(){if(sget("picu-ack","")==="1")return;
 var o=document.createElement("div");o.id="ack45";o.setAttribute("role","dialog");o.setAttribute("aria-modal","true");
 o.innerHTML='<div class="ack-b"><h3>Antes de empezar</h3><p><b>Arucip</b> es una ayuda rápida para profesionales de cuidados intensivos pediátricos. No reemplaza el criterio clínico, los protocolos de tu servicio ni la lectura de la fuente original.</p><p>La información puede contener errores o estar desactualizada. <b>Verificá siempre las dosis</b> antes de indicarlas o prepararlas.</p><p class="ack-s">Basada en AR-UCIP (Argentina). Realizada por Gonzalo Gabriel Pereira, especialista en pediatría y terapia intensiva pediátrica.</p><button type="button" class="btn pri w" id="ack-ok">Entendido, continuar</button></div>';
 document.body.appendChild(o);$("#ack-ok").onclick=function(){sset("picu-ack","1");o.remove()}}

/* ---------- 3. Más: ajustes y reportar ---------- */
function repSheet(ctx){var o=$("#rep45");if(o)o.remove();o=document.createElement("div");o.id="rep45";o.className="sheet45";
 o.innerHTML='<div class="sheet-b" role="dialog" aria-modal="true" aria-label="Reportar un error"><h3>Reportar un error o sugerencia</h3><p class="hint">Escribí qué viste y tocá «Enviar por correo»: se abre tu app de correo con el mensaje listo para el autor de la app. También podés compartirlo o copiarlo.</p><label class="f"><span>Sección</span><input id="rep-s" type="text" value="'+esc(ctx||"")+'"></label><label class="f"><span>¿Qué pasó o qué cambiarías?</span><textarea id="rep-t" rows="5" placeholder="Ej.: la dosis de … no coincide con …"></textarea></label><button type="button" class="btn pri w" id="rep-ml">Enviar por correo</button><p class="hint" style="margin:6px 0 0;word-break:break-all"><span>Correo del autor:</span> <span id="rep-ad"></span></p><div class="row2"><button type="button" class="btn g" id="rep-sh">Compartir</button><button type="button" class="btn g" id="rep-cp">Copiar</button></div><button type="button" class="btn w" id="rep-x">Cerrar</button></div>';
 document.body.appendChild(o);
 function msg(){return "Reporte Arucip v"+VER+"\nSección: "+$("#rep-s").value+"\n"+$("#rep-t").value+"\n("+(navigator.userAgent||"").slice(0,90)+")"}
 var AD=["gonzalogabrielpereira","gmail.com"].join("@");$("#rep-ad").textContent=AD;
 $("#rep-ml").onclick=function(){var sec=$("#rep-s").value;location.href="mailto:"+AD+"?subject="+encodeURIComponent("Reporte Arucip v"+VER+(sec?" · "+sec:""))+"&body="+encodeURIComponent(msg())};
 $("#rep-sh").onclick=function(){shareText(msg(),"Reporte Arucip")};$("#rep-cp").onclick=function(){copyText(msg())};
 $("#rep-x").onclick=function(){o.remove()};o.addEventListener("click",function(e){if(e.target===o)o.remove()})}
function moreCard(){var host=$("#v-more");if(!host||$("#aju45"))return;var c=document.createElement("div");c.className="card";c.id="aju45";
 c.innerHTML='<div class="calc"><h3 class="th" style="margin-top:0">Ajustes</h3><div class="row-fs"><span>Tamaño del texto</span><div id="fs-ctl" role="group" aria-label="Tamaño del texto"><button type="button" data-i="0" style="font-size:.8rem">A</button><button type="button" data-i="1" style="font-size:1rem">A</button><button type="button" data-i="2" style="font-size:1.25rem">A</button></div></div><button type="button" class="btn g w" id="rep-open">Reportar un error o sugerencia</button><button type="button" class="btn g w" id="share-app">Compartir Arucip</button></div>';
 host.appendChild(c);
 $$("#fs-ctl button",c).forEach(function(b){b.onclick=function(){sset("picu-fs",b.dataset.i);applyFs()}});applyFs();
 $("#rep-open").onclick=function(){repSheet("Más / general")};
 $("#share-app").onclick=function(){shareText("Arucip: ayuda rápida para cuidados intensivos pediátricos (checklists, calculadoras, cards por peso, quemados y modo RCP). Verificá siempre las dosis.","Arucip")}}

/* ---------- 4. favoritos y recientes ---------- */
var curKey=null,curTitle="";
document.addEventListener("click",function(e){var a=e.target.closest?e.target.closest("[data-tool]"):null;if(!a)return;var k=a.dataset.tool;curKey=k;
 setTimeout(function(){var t=$("#tt");curTitle=t?t.textContent:"";if(!curTitle)return;var r=jget("picu-rec",[]).filter(function(x){return x.k!==k});r.unshift({k:k,t:curTitle});sset("picu-rec",JSON.stringify(r.slice(0,8)));favState();qaRender()},40)},true);
function favs(){return jget("picu-fav",[])}
function isFav(k){return favs().some(function(x){return x.k===k})}
function favState(){var b=$("#fav-b");if(!b)return;var f=curKey&&isFav(curKey);b.setAttribute("aria-pressed",String(!!f));b.querySelector("span").textContent=f?"Quitar de accesos rápidos":"Guardar en accesos rápidos"}
function toolBar(){var h=$("#tt");if(!h||$("#tact45"))return;var d=document.createElement("div");d.id="tact45";d.className="tact";
 d.innerHTML='<button type="button" class="btn g bsm" id="fav-b" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8L3.5 9.7l5.9-.9z"/></svg><span>Guardar en accesos rápidos</span></button><button type="button" class="btn g bsm" id="shr-t"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V4m0 0L8 8m4-4l4 4M5 13v6h14v-6"/></svg><span>Compartir</span></button>';
 h.insertAdjacentElement("afterend",d);
 $("#fav-b").onclick=function(){if(!curKey)return;var f=favs();if(isFav(curKey)){f=f.filter(function(x){return x.k!==curKey})}else{f.unshift({k:curKey,t:curTitle||$("#tt").textContent})}sset("picu-fav",JSON.stringify(f.slice(0,12)));favState();qaRender();toast(isFav(curKey)?"Guardado en accesos rápidos":"Quitado")};
 $("#shr-t").onclick=function(){shareText(resultText($("#tt").textContent,$("#tb")),$("#tt").textContent)};
 var foot=document.createElement("p");foot.className="tfoot";foot.innerHTML='Arucip · apoyo a la decisión, no reemplaza el criterio clínico. <a href="#" id="tf-rep">¿Encontraste un error?</a>';var tb=$("#tb");tb.insertAdjacentElement("afterend",foot);
 $("#tf-rep").onclick=function(e){e.preventDefault();repSheet("Herramienta: "+($("#tt").textContent||""))}}
var qaEd=false;
function qaRender(){var q=$("#qa45");if(!q)return;var f=favs(),r=jget("picu-rec",[]).filter(function(x){return !f.some(function(y){return y.k===x.k})}).slice(0,6);
 if(!f.length&&!r.length){q.hidden=true;qaEd=false;return}q.hidden=false;
 var chip=function(x,star){return '<a class="qa-chip'+(star?" fav":"")+'" href="#" data-tool="'+esc(x.k)+'">'+(star?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8L3.5 9.7l5.9-.9z"/></svg>':"")+'<span>'+esc(x.t)+'</span></a>'};
 var head='<div class="qa-hd"><div class="qa-h">Accesos rápidos</div><button type="button" class="qa-ed" id="qa-ed" aria-pressed="'+(qaEd?"true":"false")+'">'+(qaEd?"Listo":"Editar")+'</button></div>';
 if(!qaEd){q.innerHTML=head+'<div class="qa-row">'+f.map(function(x){return chip(x,true)}).join("")+r.map(function(x){return chip(x,false)}).join("")+'</div>';return}
 var li=function(x,btns){return '<li class="qa-li"><span>'+esc(x.t)+'</span>'+btns+'</li>'};
 q.innerHTML=head+(f.length?'<ul class="qa-list">'+f.map(function(x,i){return li(x,'<button type="button" data-qa="up" data-i="'+i+'" aria-label="Subir"'+(i?"":" disabled")+'>↑</button><button type="button" data-qa="down" data-i="'+i+'" aria-label="Bajar"'+(i<f.length-1?"":" disabled")+'>↓</button><button type="button" data-qa="del" data-i="'+i+'" aria-label="Quitar de accesos rápidos">✕</button>')}).join("")+'</ul>':"")
  +(r.length?'<div class="qa-sub">Recientes</div><ul class="qa-list">'+r.map(function(x){return li(x,'<button type="button" data-qa="pin" data-k="'+esc(x.k)+'" aria-label="Fijar en accesos rápidos">☆</button>')}).join("")+'</ul>':"")}
document.addEventListener("click",function(e){var b=e.target.closest?e.target.closest("#qa45 button"):null;if(!b)return;
 if(b.id==="qa-ed"){qaEd=!qaEd;qaRender();var n=$("#qa-ed");if(n)n.focus();return}
 var a=b.dataset.qa;if(!a||b.disabled)return;var f=favs(),i=parseInt(b.dataset.i,10),foc=null;
 if(a==="up"&&i>0){var t=f[i-1];f[i-1]=f[i];f[i]=t;foc='[data-qa="up"][data-i="'+(i-1)+'"]'}
 else if(a==="down"&&i<f.length-1){var t2=f[i+1];f[i+1]=f[i];f[i]=t2;foc='[data-qa="down"][data-i="'+(i+1)+'"]'}
 else if(a==="del"){f.splice(i,1)}
 else if(a==="pin"){var k=b.dataset.k,x=jget("picu-rec",[]).filter(function(y){return y.k===k})[0];if(x&&!isFav(k)){f.unshift({k:x.k,t:x.t})}}
 else return;
 sset("picu-fav",JSON.stringify(f.slice(0,12)));favState();qaRender();
 if(foc){var nb=$("#qa45 "+foc);if(nb)nb.focus()}else{var eb=$("#qa-ed");if(eb)eb.focus()}});

/* ---------- 5. buscador global ---------- */
var IDX=null;
function build(){IDX=[];
 [["#cks > details:not(#d-tr65)","ck","Checklist"],["#calcs details.card","calc","Calculadora"],["#pc details","pocus","POCUS"],["#bl details","bib","Biblia"],["#tpl details","tips","Tips"],["#v-burn details","burn","Quemados"]].forEach(function(g){$$(g[0]).forEach(function(d){var b=$("summary b",d);if(!b)return;IDX.push({l:b.textContent.trim(),k:g[2],tab:g[1],el:d,n:norm(b.textContent),h:norm(d.textContent).slice(0,6000)})})});
 $$("#tl a[data-tool], #calcs a[data-tool]").forEach(function(a){var b=$("b",a);if(!b)return;IDX.push({l:b.textContent.trim(),k:"Herramienta",tool:true,el:a,n:norm(b.textContent),h:norm(a.textContent)})})}
function reveal(it){var s=$("#gs-q");if(s){s.value="";$("#gs-r").innerHTML=""}
 if(it.tool){it.el.click();return}
 if(it.tab==="bib"||it.tab==="tips"){var g=$('a[data-go="'+it.tab+'"]');if(g)g.click()}else{var tb=$('.tabs button[data-v="'+it.tab+'"]');if(tb)tb.click()}
 setTimeout(function(){it.el.open=true;try{it.el.scrollIntoView({behavior:"smooth",block:"start"})}catch(e){it.el.scrollIntoView()}},80)}
function runSearch(){var q=norm($("#gs-q").value.trim()),out=$("#gs-r");if(q.length<2){out.innerHTML="";return}
 if(!IDX)build();var ws=q.split(/\s+/);var m=[];IDX.forEach(function(it){var inL=ws.every(function(w){return it.n.indexOf(w)>=0}),inH=!inL&&ws.every(function(w){return it.h.indexOf(w)>=0});if(inL||inH)m.push({it:it,s:inL?0:1})});
 m.sort(function(a,b){return a.s-b.s});m=m.slice(0,10);
 out.innerHTML=m.length?'<ul class="gs-l">'+m.map(function(x,i){return '<li><button type="button" data-i="'+i+'"><b>'+esc(x.it.l)+'</b><small>'+x.it.k+(x.s?" · en el contenido":"")+'</small></button></li>'}).join("")+'</ul>':'<p class="gs-n">Sin resultados para «'+esc($("#gs-q").value.trim())+'».</p>';
 $$("button",out).forEach(function(b){b.onclick=function(){reveal(m[parseInt(b.dataset.i,10)].it)}})}
function gsInit(){var cks=$("#cks");if(!cks||$("#gs45"))return;var w=document.createElement("div");w.id="gs45";
 w.innerHTML='<div class="gs"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg><input id="gs-q" type="search" placeholder="Buscar en toda la app (ej.: ketamina, intubación)" autocomplete="off" enterkeyhint="search" aria-label="Buscar en toda la app"></div><div id="gs-r" aria-live="polite"></div><div id="qa45" hidden></div>';
 cks.parentNode.insertBefore(w,cks);$("#gs-q").addEventListener("input",runSearch);$("#gs-q").addEventListener("focus",function(){if(!IDX)build()});qaRender()}

/* ---------- 6. peso estimado por edad ---------- */
function ageCard(){var host=$("#calcs");if(!host||$("#c-age"))return;var first=$("#c-sed")||$("#calcs details.card");
 var ic=$("#c-sed .ic")?$("#c-sed .ic").innerHTML:"";var chev=$("#c-sed .chev")?$("#c-sed .chev").outerHTML:"";
 var d=document.createElement("details");d.className="card";d.id="c-age";
 d.innerHTML='<summary><div class="sh"><span class="ic">'+ic+'</span><b>Peso estimado por edad</b>'+chev+'</div></summary><div class="calc"><p class="hint" style="margin-top:0">Para cuando no hay balanza ni cinta de longitud. Es una estimación: pesá al paciente apenas sea posible.</p><div class="row2"><label class="f"><span>Edad</span><input id="ag-v" type="number" inputmode="decimal" step="any" placeholder="0"></label><label class="f"><span>Unidad</span><select id="ag-u"><option value="m">Meses</option><option value="a" selected>Años</option></select></label></div><div class="r"><span>Peso estimado<small id="ag-f"></small></span><b id="ag-o">—</b></div><button type="button" class="btn g w" id="ag-use" disabled>Usar este peso en las calculadoras</button><p class="hint">Fórmulas APLS: menores de 1 año, 0,5 × meses + 4; de 1 a 5 años, 2 × años + 8; de 6 a 12 años, 3 × años + 7. Contrastar con la fuente original.</p></div>';
 host.insertBefore(d,first);
 var est=null;function calc(){var v=parseFloat($("#ag-v").value),u=$("#ag-u").value;est=null;var f="",o="—";
  if(v>=0){var mo=u==="m"?v:v*12;if(mo>144){f="La fórmula llega hasta los 12 años";o="—"}
   else if(mo<12){est=.5*mo+4;f="0,5 × meses + 4"}
   else{var a=mo/12;if(a<=5){est=2*a+8;f="2 × años + 8"}else{est=3*a+7;f="3 × años + 7"}}
   if(est!=null){est=Math.round(est*10)/10;o=String(est).replace(".",",")+" kg"}}
  $("#ag-f").textContent=f;$("#ag-o").textContent=o;$("#ag-use").disabled=est==null}
 $("#ag-v").addEventListener("input",calc);$("#ag-u").addEventListener("change",calc);
 $("#ag-use").onclick=function(){var g=$("#gw");if(g&&est!=null){g.value=String(est);g.dispatchEvent(new Event("input",{bubbles:true}));toast("Peso cargado: "+String(est).replace(".",",")+" kg")}}}

/* ---------- 7. compartir en calculadoras ---------- */
function calcShare(){$$("#calcs details.card").forEach(function(d){if(d.id==="c-age"||$(".shr",d))return;var c=$(".calc",d);if(!c)return;var b=document.createElement("button");b.type="button";b.className="btn g bsm shr";b.textContent="Compartir resultado";
 b.onclick=function(){var t=$("summary b",d);shareText(resultText(t?t.textContent:"Calculadora",c),t?t.textContent:"")};c.appendChild(b)})}

/* ---------- 8. orden de checklists por uso ---------- */
function freq(){return jget("picu-frq",{})}
document.addEventListener("toggle",function(e){var d=e.target;if(!d||!d.open||!d.parentNode||d.parentNode.id!=="cks")return;var f=freq();f[d.id]=(f[d.id]||0)+1;sset("picu-frq",JSON.stringify(f))},true);
function reorder(){var c=$("#cks");if(!c)return;var f=freq(),k=Array.prototype.slice.call(c.children);var orig=k.slice();
 var sorted=orig.map(function(el,i){return {el:el,i:i,n:f[el.id]||0}}).sort(function(a,b){return (b.n>=2?b.n:0)-(a.n>=2?a.n:0)||a.i-b.i});
 sorted.forEach(function(x){c.appendChild(x.el)})}

/* ---------- init ---------- */
function init(){try{moreCard()}catch(e){}try{toolBar()}catch(e){}try{gsInit()}catch(e){}try{ageCard()}catch(e){}try{calcShare()}catch(e){}try{reorder()}catch(e){}try{ack()}catch(e){}}
if(document.readyState==="complete")init();else window.addEventListener("load",init);
})();

