window.addEventListener("load",function(){(function(){
var W="";try{W=JSON.parse(localStorage.getItem("arucip")||"{}").gw||""}catch(e){}
function ws(){var r=[];["gw","b-w","pv-w"].forEach(function(i){var e=document.getElementById(i);if(e)r.push(e)});
 document.querySelectorAll("#v-tool input[data-num],#v-tool input[type=number]").forEach(function(i){var l=i.closest("label"),s=l&&l.querySelector("span"),t=s?s.textContent.trim():"";if(/^Peso( real)?( \(kg\))?$|^Peso \(kg\)|^(Actual w|W)eight \(kg\)/.test(t))r.push(i)});return r}
function fire(e){e.dispatchEvent(new Event("input",{bubbles:true}))}
function setAll(v,src){W=v;try{var s=JSON.parse(localStorage.getItem("arucip")||"{}");s.gw=v;localStorage.setItem("arucip",JSON.stringify(s));try{st.gw=v}catch(x){}}catch(e){}
 ws().forEach(function(e){if(e!==src&&e.value!==v){e.value=v;fire(e)}})}
document.addEventListener("input",function(ev){var t=ev.target;if(!t||(t.type!=="number"&&!(t.hasAttribute&&t.hasAttribute("data-num"))))return;if(ws().indexOf(t)<0)return;if(ev.isTrusted)t.dataset.wt="1";if(t.value!==W)setAll(t.value,t)},true);
function prefill(){if(!W)return;ws().forEach(function(e){if(!e.value&&!e.dataset.wt){e.value=W;fire(e)}})}
var v=document.getElementById("v-tool");if(v)new MutationObserver(prefill).observe(v,{childList:true,subtree:true});
prefill()})()});