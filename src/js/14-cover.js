/* Portada de Arucip: se muestra al abrir la app (una vez por sesión) y al tocar el logo del encabezado. */
(function(){
var c=document.getElementById("cover");if(!c)return;
var KEY="arucip-cover";
function seen(){try{return sessionStorage.getItem(KEY)==="1"}catch(e){return false}}
function mark(){try{sessionStorage.setItem(KEY,"1")}catch(e){}}
function open(){c.hidden=false;void c.offsetWidth;c.classList.remove("out");document.documentElement.style.overflow="hidden";
 var b=document.getElementById("cv-go");try{b&&b.focus({preventScroll:true})}catch(e){}}
function close(){mark();c.classList.add("out");document.documentElement.style.overflow="";
 setTimeout(function(){c.hidden=true},380)}
document.getElementById("cv-go").addEventListener("click",close);
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!c.hidden)close()});
var m=document.querySelector(".ph-mark");if(m){m.setAttribute("role","button");m.setAttribute("tabindex","0");m.setAttribute("aria-label","Portada");
 m.addEventListener("click",open);m.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}})}
var tm=document.getElementById("cv-team");if(tm&&window.ARUCIP_CRED)tm.innerHTML=window.ARUCIP_CRED();
if(!seen())open();
})();
