/* 0.34: decimales con coma o con punto en todos los campos numéricos (es/en/pt). Los <input type="number"> pasan a texto con teclado decimal; lo que se ve queda como lo escribió el usuario, pero .value devuelve siempre el punto, así las calculadoras leen igual «1,5» y «1.5». */
window.PICU_NUM=(function(){var D=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");
function fix(el){if(!el||el.nodeName!=="INPUT"||el.hasAttribute("data-num")||el.getAttribute("type")!=="number")return;
 var raw=D.get.call(el);el.setAttribute("data-num","");el.setAttribute("type","text");if(!el.getAttribute("inputmode"))el.setAttribute("inputmode","decimal");
 el.setAttribute("autocomplete","off");el.setAttribute("autocorrect","off");el.setAttribute("spellcheck","false");
 try{Object.defineProperty(el,"value",{configurable:true,get:function(){return String(D.get.call(this)).replace(/,/g,".")},set:function(v){D.set.call(this,v)}})}catch(e){}
 if(raw!==D.get.call(el))D.set.call(el,raw)}
function scan(r){if(!r||r.nodeType!==1)return;if(r.nodeName==="INPUT")fix(r);else if(r.querySelectorAll){var l=r.querySelectorAll('input[type="number"]');for(var i=0;i<l.length;i++)fix(l[i])}}
document.addEventListener("input",function(e){var t=e.target;if(!t||!t.hasAttribute||!t.hasAttribute("data-num"))return;var v=D.get.call(t),c=v.replace(/[^0-9.,\-]/g,"");if(c!==v)D.set.call(t,c)},true);
try{new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var a=ms[i].addedNodes;for(var j=0;j<a.length;j++)scan(a[j])}}).observe(document.documentElement,{childList:true,subtree:true})}catch(e){}
document.addEventListener("DOMContentLoaded",function(){scan(document.body)});
return{fix:fix,scan:scan,num:function(v){var x=parseFloat(String(v).replace(/,/g,"."));return isFinite(x)?x:NaN}}})();
