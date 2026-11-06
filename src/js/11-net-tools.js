
/* v0.17: herramientas que requieren internet + peso del paciente visible y «Nuevo paciente» */
(function(){
var EXT=["ccvs","ecmorisk","antro","pivt","vade","urea","iar1","simu","ialado","bienestar","mindf","salud","violencia","hiv","collapse"];
var GLOBE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/></svg>';
function badges(){var tl=document.getElementById("tl");if(!tl)return;
 Array.prototype.forEach.call(tl.querySelectorAll("a[data-tool],a.lk[href^='http']"),function(a){var ex=a.dataset.tool?EXT.indexOf(a.dataset.tool)>=0:true;if(!ex||a.querySelector(".netb"))return;
  var d=a.querySelector("div");if(!d)return;var e=document.createElement("span");e.className="netb";e.innerHTML=GLOBE+"<span>Requiere internet</span>";d.appendChild(e);
  var p=a.parentNode;if(p)p.appendChild(a)})}
function getW(){try{return JSON.parse(localStorage.getItem("arucip")||"{}").gw||""}catch(e){return ""}}
var RX=/^Peso( real)?( \(kg\))?$|^Peso \(kg\)|^(Actual w|W)eight \(kg\)/;
function toolHasW(){return Array.prototype.some.call(document.querySelectorAll("#tb input[data-num],#tb input[type=number]"),function(i){var l=i.closest("label"),s=l&&l.querySelector("span");return !!s&&RX.test(s.textContent.trim())})}
function clearW(){var g=document.getElementById("gw");
 if(g){g.value="";g.dispatchEvent(new Event("input",{bubbles:true}))}
 else{try{var s=JSON.parse(localStorage.getItem("arucip")||"{}");s.gw="";localStorage.setItem("arucip",JSON.stringify(s))}catch(e){}}
 Array.prototype.forEach.call(document.querySelectorAll("#tb input[data-num],#tb input[type=number]"),function(i){var l=i.closest("label"),s=l&&l.querySelector("span");if(s&&RX.test(s.textContent.trim())&&i.value!==""){i.value="";delete i.dataset.wt;i.dispatchEvent(new Event("input",{bubbles:true}))}});
 setTimeout(upd,30)}
function upd(){var tb=document.getElementById("tb");if(!tb)return;var bar=document.getElementById("wbar"),w=getW(),show=!!w&&toolHasW();
 if(!bar){bar=document.createElement("div");bar.id="wbar";bar.setAttribute("role","status");bar.innerHTML='<span><span>Peso del paciente cargado</span>: <b id="wbar-v"></b></span><button type="button" id="wbar-x">Nuevo paciente</button>';tb.parentNode.insertBefore(bar,tb);document.getElementById("wbar-x").onclick=clearW}
 bar.hidden=!show;var v=document.getElementById("wbar-v");var en=/^en/.test(document.documentElement.lang||"");var t=w?(en?String(w).replace(",","."):String(w).replace(".",","))+" kg":"";if(v.textContent!==t)v.textContent=t;
 var gc=document.getElementById("gw-card");if(gc){var nb=gc.querySelector(".gw-new");if(!nb){nb=document.createElement("button");nb.type="button";nb.className="gw-new";nb.textContent="Nuevo paciente";nb.onclick=clearW;gc.appendChild(nb)}nb.hidden=!w}}
function init(){badges();upd();
 document.addEventListener("input",function(){setTimeout(upd,0)});
 document.addEventListener("click",function(){setTimeout(upd,80);setTimeout(upd,450)},true)}
if(document.readyState==="complete")setTimeout(init,30);else window.addEventListener("load",function(){setTimeout(init,30)});
})();
