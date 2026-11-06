window.addEventListener("load",function(){(function(){
var host=document.getElementById("calcs");if(!host)return;
var box=document.createElement("div");box.className="card";box.id="gw-card";
box.style.cssText="padding:14px 18px;position:sticky;top:0;z-index:5";
box.innerHTML='<label class="f"><span>Peso del paciente (kg): se usa en todas las calculadoras</span><input id="gw" type="number" inputmode="decimal" step="any" placeholder="0"></label>';
host.parentNode.insertBefore(box,host);
var g=box.querySelector("input");
function targets(){var r=[];host.querySelectorAll("input[data-num],input[type=number]").forEach(function(i){var l=i.closest("label"),s=l&&l.querySelector("span"),t=s?s.textContent.trim():"";if(/^Peso( real)? \(kg\)|^(Actual w|W)eight \(kg\)/.test(t))r.push(i)});return r}
function sync(){var v=g.value;targets().forEach(function(i){var l=i.closest("label");if(l)l.hidden=true;if(i.value!==v){i.value=v;i.dispatchEvent(new Event("input",{bubbles:true}))}})}
g.addEventListener("input",sync);
new MutationObserver(function(){if(g.value)sync();else targets().forEach(function(i){var l=i.closest("label");if(l)l.hidden=true})}).observe(host,{childList:true,subtree:true});
sync();
var bw=document.getElementById("b-w");
if(bw){var fire=function(el){el.dispatchEvent(new Event("input",{bubbles:true}))};
 bw.addEventListener("input",function(){if(g.value!==bw.value){g.value=bw.value;fire(g)}});
 g.addEventListener("input",function(){if(bw.value!==g.value){bw.value=g.value;fire(bw)}});
 if(bw.value&&!g.value){g.value=bw.value;fire(g)}else if(g.value&&!bw.value){bw.value=g.value;fire(bw)}}
})();
});