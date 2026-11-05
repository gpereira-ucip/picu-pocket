/* Personas intervinientes. Única fuente: se muestra en la portada, en «Acerca de esta versión» y en la sección AR-UCIP.
   Para agregar a alguien, sumar una línea en el grupo que corresponda (los colaboradores van en orden alfabético por apellido). */
window.ARUCIP_CREDITS=[
 {g:"Promotor inicial y creadores de AR-UCIP",p:[
  ["Jorge Selandari","Promotor inicial de AR-UCIP"],
  ["Eduardo Motto","Cocreador de AR-UCIP"]]},
 {g:"Colaboradores de AR-UCIP",p:[
  ["Carolina Caminiti",""],
  ["Debora Farberman",""],
  ["María Laura Flores Tonfi",""]]},
 {g:"Realización de Arucip",p:[
  ["Gonzalo Gabriel Pereira","Médico especialista en pediatría y terapia intensiva pediátrica. Compiló y adaptó la aplicación."]]},
 {g:"Autores de fuentes y herramientas citadas",p:[
  ["Boto A","Tablas de medicación del Hospital Garrahan (Área Emergencias)"],
  ["Dr. Rodrigo Carmona","Herramienta de muerte bajo criterios neurológicos (Hospital Garrahan)"],
  ["Lorenzini L","Tablas de medicación del Hospital Garrahan (Área Farmacia)"],
  ["Moreno L y col.","Bacterial Pneumonia Score (BPS)"],
  ["Rino P","Tablas de medicación del Hospital Garrahan (Área Emergencias)"],
  ["Dr. Hernán Rowenstein","Simulador de entrenamiento (Hospital Garrahan)"]]}
];
window.ARUCIP_CRED=function(){var e=function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")};
 return window.ARUCIP_CREDITS.map(function(g){return '<h3 class="th">'+e(g.g)+'</h3><ul class="cred">'+g.p.map(function(x){
  return '<li><b>'+e(x[0])+'</b>'+(x[1]?'<br><span>'+e(x[1])+'</span>':'')+'</li>'}).join("")+'</ul>'}).join("")+
 '<h3 class="th">Auspicio</h3><p>Agradecemos el desinteresado auspicio de la Fundación Garrahan.</p>'};
