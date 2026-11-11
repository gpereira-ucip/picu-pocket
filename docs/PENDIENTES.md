ARUCIP · PENDIENTES Y PLAN DE TRABAJO
Lista original del 6/11/2026 (v0.53) · estados revisados el 11/11/2026 (v0.61). Lo más nuevo está en «ACTUALIZACIÓN», acá abajo.

PRIORIDAD: pedido de Gonzalo del 11/11/2026 (manual PALS)

Gonzalo pidió sumar todo lo útil del Libro del proveedor SVAP/PALS 2023. Lo hecho y la lista de lo que falta, con las notas clínicas ya redactadas, están en **docs/PALS.md** (sección «Pendiente: para la tarea diaria»). Tomá **un ítem por corrida**, en orden, antes que el resto de esta lista. Redacción y diseño propios; nada copiado del libro; todo ⚕.

ACTUALIZACIÓN (v0.54): cambios respecto de la lista de abajo
- Corrida 11/11 noche: docs/VALIDACION.md nuevo (ítem 58, parcial): las 87 guías «Al recibirlo» con el mismo texto que muestra la app, agrupadas por aspecto, cada una con casilla para tildar y lugar para «Revisó», «Fecha» y «Observaciones». Se genera con node tools/build_validacion.js, que al regenerar conserva los tildes y lo anotado; si el texto de una guía cambia después de validada, vuelve a quedar sin tildar (con --check avisa si el archivo quedó desactualizado). Estado: 0 de 87 validadas; lo que falta es que Jorge y Eduardo la revisen (D). No se tocó la app, ni contenido clínico, ni estética.
- Corrida 11/11 (2.ª): (a) tests/offline.js nuevo (ítem 35): chequea que todo archivo local que usa la app exista y esté en ASSETS de sw.js y, en un navegador con el service worker activo, corta la red y recarga: la app abre y navega igual, sin imágenes rotas (POCUS, Cards, QR) ni pedidos fallidos. Resultado: todo bien, no hubo que tocar sw.js. Falta probarlo en un teléfono real instalado (va con el ítem 3, (D)). (b) Corregido: la descripción del manifest (lo que muestra el teléfono al instalar) todavía decía «Funciona sin conexión.»; se quitó esa frase y la prueba nueva lo vigila. Para que llegue a la PWA de Jorge hay que volver a publicar en arucip/pruebas. (c) Nota: la carpeta src/ (fuentes viejas de la v0.4x, no se usan para armar la app) conserva textos viejos, incluida esa frase; no se tocó. Propuesta: borrarla o moverla a un archivo aparte, con el OK de Gonzalo. Sin cambios clínicos ni de estética.
- Corrida 11/11 mañana: (a) tests/smoke.js ahora falla si una guía «Al recibirlo» o un texto de Emergencias trae una dosis (número + unidad tipo mg/kg, mL/kg, J/kg…): ítem 77, parcial (cubre js/data.js; no audita las herramientas viejas de index.html). (b) ⚕ A REVISAR POR MÉDICO: la única dosis que hay en las guías es anterior a la regla y quedó como excepción explícita del chequeo: Shock séptico, «Fluidos en alícuotas de 10–20 mL/kg con reevaluación después de cada una». No se tocó; que el servicio diga si se deja, se cambia o se reemplaza por «según la herramienta». (c) README: tabla de estructura al día (css/portada.css, js/portada.js, js/buscador.js, tests, tools). (d) Esta lista: estados viejos corregidos (no cambió ningún acuerdo) y plan por día reemplazado por «Qué sigue». Sin cambios clínicos ni de estética.
- Corrida 10/11 noche: CHANGELOG.md creado (ítem 13). tests/smoke.js informa las herramientas sin ningún caso (ítem 10): solo quedan las de Más/Autocuidado/IA/app (maslach, bienestar, mindf, salud, violencia, collapse, iar1, simu, ialado, inst, qr, plan, new, about), que no son clínicas y no corresponden a casos. Sin cambios clínicos ni de estética.
- Corrida 10/11 (mensajes de Gonzalo del 9/11): (a) «Indicaciones y cálculos» reordenada como pidió: Cuidados generales (⚕ en preparación, lo redacta el servicio) · EAB y electrolitos · Setting del respirador · Inotrópicos y vasoactivos · Analgosedación · Antibióticos (⚕ en preparación) · resto (js/data.js IND; los grupos con «pend» se muestran como texto en preparación). Las fórmulas/herramientas enlazadas son las que ya existían; no se redactó contenido clínico. (b) «No anda la leche concentrada»: probado en navegador (Calcular meta y Aporte actual con B!, D!, PRE!…): calcula bien volumen y nutrientes; NO se pudo reproducir. Pedir a Gonzalo en qué pantalla y con qué datos falla. (c) «No anda bien el predictivo»: probado (tec, tce, sepsis, asma, bronq, kawasaki, sri, pards, cad, lra…) y devuelve lo esperado; NO se pudo reproducir. Pedir ejemplos concretos de lo que no encuentra (ítems 90 y 19). (d) «Albúmina en quemados y situaciones anexas»: pendiente, es contenido clínico ⚕ (indicaciones/dosis) a redactar y validar por el servicio; sin dosis inventadas.
- Corrida 10/11 mañana: README con «Cómo agregar un caso, una guía o un enlace» y «Cómo se arma arucip.html» (ítems 8 y 12). Sin cambios de contenido clínico ni de estética. Las 87 guías y los enlaces ya están completos; lo que sigue de código sin depender de otros: ítem 13 (CHANGELOG), 10 (herramientas sin ningún caso).
- 18 [HECHO] Buscador general predictivo en la portada (js/buscador.js).
- 20 [PARCIAL] Sinónimos de signos y síntomas cargados (⚕ a revisar); faltan siglas.
- 21 [PARCIAL] Etiquetas: ya hay signos/síntomas → motivos; falta etiquetar herramientas por capítulo.
- 30, 31, 90 [HECHO] Botonera definida con Jorge: Emergencias · Motivos de ingreso · Indicaciones y cálculos · Favoritos · Más.
  «Aparatos y sistemas» quedó dentro de Motivos de ingreso; Autocuidado y Calidad y seguridad, dentro de Más.
- 9 [HECHO] Pruebas en tests/smoke.js. 11 [HECHO] Novedades y versión 0.54.
- Nuevo ⚕: revisar las asociaciones signo/síntoma → motivo (SYMP en js/data.js).
- Nuevo: «Indicaciones diarias» y «Estudios: qué pedir y cuándo» requieren redacción y validación del servicio.
- Nuevo: reporte de eventos y normas dentro de Calidad y seguridad (idea de Jorge, sin diseñar).
- Motivos de ingreso con guía propia: 71 de 87.
- Corrida 7/11 mañana: guías nuevas (⚕ pendientes de revisión médica, sin dosis) para golpe de calor/hipotermia/electrocución, mordeduras y picaduras, estado hiperosmolar, error congénito del metabolismo, insuficiencia suprarrenal y nefrótico complicado.
- Corrida 6/11 noche: guías «Al recibirlo» nuevas (⚕ pendientes de revisión médica, sin dosis) para muerte encefálica, delirium, trauma raquimedular, sospecha de maltrato, inhalación de humo/CO/cianuro y ahogamiento. Lo ambiental que falta: golpe de calor/hipotermia/electrocución y mordeduras/picaduras.
- Corrida 8/11: guías «Al recibirlo» nuevas (⚕ pendientes de revisión médica, sin dosis) para rabdomiólisis, abdomen agudo, pancreatitis, NEC/obstrucción, desnutrición/realimentación y soporte nutricional (77 de 87). Faltan 10: HLH, TMO, cáusticos, CO, plaguicidas, alcohol/opioides, cirugía mayor, trasplante, paliativos y traslado crítico.
- Corrida 8/11 (2.º lote): HLH, TMO, cáusticos/hidrocarburos y monóxido de carbono (81 de 87). Faltan 6: plaguicidas, alcohol/opioides, cirugía mayor, trasplante, paliativos y traslado crítico.
- Corrida 8/11 (3.er lote): plaguicidas, alcohol/opioides, cirugía mayor, trasplante, paliativos y traslado crítico: las 87 tienen guía «Al recibirlo» (⚕ todas pendientes de revisión médica).
- Corrida 8/11 (4.º lote): enlaces nuevos (campo t) en 23 casos que tenían 2–3 herramientas (trq, epc, cat, hid, me, gol, mal, hip, nat, nef, rab, hda, pan, nec, lis, cid, ane, hlh, tph, tcc, tco, top, apn), solo a herramientas ya existentes. ⚕ revisar que la asociación sea pertinente.
- Corrida 9/11 mañana: enlaces nuevos (campo t) en 13 casos (pcr, lra, suh, sup, ecm, fha, hda, neu, ana, acv, tos, end, ehh), solo a herramientas ya existentes (hiperkalemia, hipoglucemia, intubación, SRI, lactato, etc.). ⚕ revisar que la asociación sea pertinente. Las 87 guías «Al recibirlo» ya existen; todos los casos tienen 4 o más herramientas; «Cards» y el pase I-PASS ya llegan a todos por la base común (BASE).
- Corrida 9/11 noche: se agregó a tests/smoke.js el chequeo de integridad de data.js (ids repetidos, grupos inexistentes, casos sin guía). Sin cambios de contenido clínico ni de estética.
- Pedido de Gonzalo (9/11): Emergencias toma parte de la estructura del algoritmo de enfoque sistemático del PALS (PDF que mandó): la tarjeta «¿ABC o CAB?» pasó a «Enfoque sistemático: paso a paso» (impresión inicial → ¿necesita intervención inmediata? → ¿respira y tiene pulso? → evaluar–identificar–intervenir → paro/posparo), con redacción propia, sin dosis; el ABCDE quedó bajo «Evaluación primaria» y «Después del ABC» → «Después de evaluar». ⚕ Revisar con el equipo. Sigue pendiente el ítem 100 (peso, checklist por letra) y verificar derechos antes de incluir el PDF.
- Pedido de Gonzalo (9/11): Emergencias suma «Novedades de las guías AHA 2025 (pediatría)» (TRIAGE.nov en js/data.js), tomada del PDF «Aspectos destacados de las Guías de la AHA 2025» que mandó: resumen cualitativo con palabras propias, sin dosis ni valores numéricos. ⚕ Revisar con el equipo (en especial lo de TSV, CO₂ espirado y presión diastólica en RCP). Pendiente: verificar derechos antes de incluir los PDF; el resto del PDF (adultos, neonatal) no se incorporó.
- Pedido de Gonzalo (9/11): «‹ Volver» en TODAS las pantallas: las secundarias (Checklists, Calculadoras, Herramientas, Quemados, Fórmulas, POCUS, Cards, Notas) no lo tenían. Ahora vuelven a la pantalla desde la que se llegó (js/portada.js, atributo data-sb; pruebas en tests/smoke.js). Las herramientas individuales ya tenían su Volver. Ojo: si aparece otra pantalla nueva, agregarla a la lista SEC.
- Pedido de Gonzalo (8/11): pie de la portada rehecho a pedido suyo (cambio visual autorizado): se quitó «Basada en AR-UCIP» y «Personas intervinientes»; ahora hay botón «Más información y créditos» (abre Acerca de esta versión, que incluye ahora el listado de personas) y firma «Realizada por Gonzalo G. Pereira, con Jorge Selandari y Eduardo Motto». El logo de la Fundación Garrahan enlaza a fundaciongarrahan.org.ar (⚕ no clínico: confirmar que es la URL correcta).
- 8/11: PWA subida a arucip/pruebas (main) y script tools/publicar_pruebas.sh. Falta (D) activar GitHub Pages en Settings → Pages (rama main, carpeta raíz) y probar la instalación en Android/iOS. Items 2 y 3 destrabados.
- 8/11: ícono nuevo (alternativa B: emblema + ARUCIP, colores de la portada) en icon-*.png y apple-touch-icon.png, v0.56. Ojo: tools/make_assets.js regenera los íconos viejos si se vuelve a correr; no usarlo para íconos.
- 8/11 (pedido de Jorge vía Gonzalo): portada achicada (tamaños según alto de pantalla; logo a la izquierda de ARUCIP en pantallas bajas) v0.57; «Auspicio» → «Agradecimientos: Agradecemos la colaboración desinteresada de la Fundación Garrahan» (⚕ no clínico: Jorge/Gonzalo confirmar el texto). PENDIENTE: código QR en la portada (Jorge lo pide para ver el espacio del diseño): definir a qué apunta (¿https://arucip.github.io/pruebas/?) y dónde va.
- 8/11: Gonzalo eligió el ícono A (solo emblema, sin letras) en lugar del B; v0.58.
- 8/11: [HECHO] QR para compartir la app (Más › La app › Compartir la app (QR); apunta a https://arucip.github.io/pruebas/; assets/qr-app.svg). Si cambia la URL, regenerar el QR. Quitado «Basada en AR-UCIP» del cartel «Antes de empezar». v0.59.
- 8/11 (pedido de Gonzalo): portada v0.60: botonera igual a la barra inferior de la app (misma posición y formato); buscador más grande con título «Buscá en toda la app». El texto sobre la Fundación Garrahan queda a cargo de Jorge.
- 8/11 (v0.61): [HECHO] buscador con siglas (ACR en js/buscador.js, ⚕ a revisar), «Volver» en pantallas principales, sin «Frecuentes», leches sin decimales por toma, triángulo de evaluación (SVG propio, ⚕), ¿ABC o CAB? (⚕) y sin bloque PARO/PALS repetido (PALS quedó como enlace). Pendiente de esos pedidos: botones del mismo tamaño, Cards con el peso cargado (requiere «paciente actual»), botones de la secuencia ABC (no se tocaron; confirmar con Gonzalo qué quiso decir).

Referencias:  [HECHO]  [PARCIAL]  [PENDIENTE]
⚕ = necesita revisión de un médico antes de darse por bueno. No se agregaron dosis nuevas.
(D) = depende de otra persona (Jorge, Eduardo, administrador de GitHub u otro).

==========================================================================
RESUMEN DEL ESTADO
==========================================================================
Hecho hasta hoy:
- Nombre Arucip en toda la app (sin "Picu Pocket" visible).
- Portada nueva: logo (cabeza con engranajes + ARUCIP con bastón de Esculapio), botón "Entrar",
  interruptor de modo claro/oscuro, botón EMERGENCIA (abre el modo PARO), ECG animado, los 5 botones
  de la botonera y "Con la colaboración de Fundación Garrahan".
- Logo nuevo en la portada y en el encabezado de todas las pantallas (versión clara y oscura).
- Botón de emergencia del encabezado arreglado (se veía opaco).
- Botonera inferior: Emergencias (con las Cards adentro) · Aparatos y sistemas · Motivos de ingreso
  · Favoritos · Más.
- Favoritos: apartados y herramientas fijados como tarjetas, con estrella para fijar y desfijar.
  "Quemados" viene fijado de ejemplo.
- Se quitó "Funciona sin conexión" y las palabras "Biblia" y "Tips".
  La Biblia pasó a "Fórmulas y preparaciones" y Tips a "Notas prácticas"; ambos están en Más,
  dentro del apartado "Otras recomendaciones".
- Personas intervinientes: Equipo (Jorge Selandari, Eduardo Motto, Gonzalo G. Pereira), con roles cortos.
- Motivos de ingreso: 87 en 12 grupos, todas con guía "Al recibirlo" propia (⚕ a revisar).
- Service worker "red primero" (idea de Jorge): no hace falta subir la versión del caché al publicar.
- Íconos de la app de Jorge instalados.
- Pruebas automáticas (Playwright): sin errores de consola y sin enlaces rotos.

Estado de la publicación:
- Todo está subido a la rama de trabajo ccr-3af3e921-vfklyp (v0.61, 87 guías) y arucip.html se regenera desde ahí.
- PWA subida a arucip/pruebas (8/11) con tools/publicar_pruebas.sh. (D) Falta confirmar GitHub Pages activo y
  probar la instalación en Android/iOS.

==========================================================================
A. TÉCNICO (1–45)
==========================================================================
 1. [HECHO]     Portada, botonera y favoritos subidos a la rama de trabajo.
 2. [HECHO]     PWA subida a arucip/pruebas (8/11); se publica con tools/publicar_pruebas.sh.
 3. [PARCIAL]   (D) Confirmar GitHub Pages activo (arucip/pruebas) y probar la instalación como app en Android e iOS.
 4. [PENDIENTE] Definir una sola rama de trabajo: hoy hay un diseño en una rama y el contenido en otra.
 5. [PENDIENTE] Dejar "main" (PICU Pocket) congelada con una etiqueta v0.49.
 6. [HECHO]     Service worker red primero (falta probarlo con una actualización real una vez publicado).
 7. [PENDIENTE] Aviso dentro de la app: "Hay versión nueva, recargá".
 8. [HECHO]     Script de armado reproducible (tools/build_html.py), documentado en el README (10/11).
 9. [HECHO]     Pruebas automáticas en tests/smoke.js.
10. [HECHO]     Chequeo de integridad de data.js: tests/smoke.js ya verifica ids repetidos, grupos inexistentes, casos sin guía y referencias rotas (9/11). Falta: herramientas sin ningún caso.
11. [HECHO]     "Novedades" y versión al día (0.61).
12. [HECHO]     README con cómo agregar un caso, una guía o una herramienta, paso a paso.
13. [HECHO]     CHANGELOG.md por versión (10/11).
14. [PENDIENTE] (D) docs/COMO-REPLICAR.md: proceso Jotform → app (falta la página de Jotform guardada).
15. [PENDIENTE] (D) Inventario del contenido de Jotform contra la app: qué falta y qué difiere.
16. [PENDIENTE] Fuente por ítem (autor, enlace, fecha) en data.js.
17. [PENDIENTE] Campo "revisado por / fecha" en cada contenido clínico.
18. [HECHO]     Búsqueda global con texto predictivo en la portada (js/buscador.js).
19. [HECHO]     Búsqueda tolerante a acentos y a un error de tipeo.
20. [HECHO]     Siglas y sinónimos en la búsqueda (⚕ revisar ACR, SYMP_SYN y ALIAS). Gonzalo avisó que «no anda bien»: faltan sus ejemplos.
21. [PARCIAL]   Capítulos como etiquetas: un tema con varias etiquetas, no carpetas (pedido de Jorge).
22. [PARCIAL]   Favoritos gestionados por el usuario: hecho para apartados de "Más" y herramientas.
               Falta poder fijar casos de Motivos de ingreso y capítulos de Aparatos y sistemas.
23. [PENDIENTE] Campo "paciente actual": peso, edad, género y talla, todos opcionales (pedido de Jorge).
24. [PENDIENTE] Botón "cambió de paciente", que borra esos datos.
25. [PENDIENTE] Las calculadoras toman el peso y la edad del paciente actual.
26. [PENDIENTE] Datos del paciente solo en el dispositivo, con aviso de privacidad.
27. [PENDIENTE] Formulario de prompt para IAR1: los 4 campos, prompt mínimo, detallado y texto libre (pedido de Jorge).
28. [PENDIENTE] Copiar o compartir el prompt armado.
29. [PENDIENTE] Revisión de privacidad: ningún dato identificable en los prompts.
30. [HECHO]     Botonera acordada con Jorge: Emergencias · Motivos de ingreso · Indicaciones y cálculos · Favoritos · Más.
31. [HECHO]     Migrar a la estructura definitiva sin perder enlaces (Cards ya está dentro de Emergencias).
32. [PENDIENTE] Enlaces directos a cada caso y herramienta (por ejemplo #casos/shs).
33. [PENDIENTE] Botón compartir enlace de una herramienta.
34. [PARCIAL]   Lista de "recientes" (ya existe dentro de Favoritos).
35. [PARCIAL]   Verificar que todo funcione sin conexión, incluidas imágenes de POCUS y Cards. Hecho en navegador de prueba (tests/offline.js, 11/11); falta en teléfono real (D, con el ítem 3).
36. [PENDIENTE] Bajar el peso del HTML (hoy unos 8 MB) optimizando imágenes.
37. [PENDIENTE] Subconjunto de las fuentes Montserrat para reducir peso.
38. [PENDIENTE] Medir el arranque en un celular de gama baja.
39. [PENDIENTE] Accesibilidad técnica: roles ARIA, foco y teclado.
40. [PENDIENTE] Probar en iOS Safari: sonido, voz del PARO y app instalada.
41. [PENDIENTE] Probar en tablet y en horizontal.
42. [PENDIENTE] Traducir portada, Emergencias, Aparatos y sistemas, Motivos de ingreso y Favoritos a inglés y portugués.
43. [PENDIENTE] (D) Conteo de uso sin datos personales (criterio "número suficiente de usuarios").
44. [PENDIENTE] (D) Diseño técnico de registro y licencias para el plan de monetización.
45. [PENDIENTE] (D) Diseño y riesgos de la "actualización a app vacía" que propuso Jorge.
46. [PENDIENTE] Revisar textos de ayuda que aún nombren "Triage", "Cards" o "Casos" con los nombres viejos.
47. [PENDIENTE] Quitar entradas viejas de traducción que ya no se usan (limpieza del código).

==========================================================================
B. CLÍNICO (48–87)
==========================================================================
Guías "Al recibirlo": los ítems 48 a 56 están ESCRITOS (87 de 87); lo que queda en todos es la revisión médica ⚕ (ítem 58):
48. [HECHO]     ⚕ Neurológico: posoperatorio neuroquirúrgico, encefalopatía hipóxico-isquémica, muerte encefálica y procuración, delirium.
49. [HECHO]     ⚕ Trauma: tórax y abdomen, raquimedular, sospecha de maltrato.
50. [HECHO]     ⚕ Ambiental: humo/CO/cianuro, ahogamiento, golpe de calor/hipotermia/electrocución, mordeduras y picaduras.
51. [HECHO]     ⚕ Endocrino: estado hiperosmolar, error congénito del metabolismo, insuficiencia suprarrenal, trastornos del sodio.
52. [HECHO]     ⚕ Renal: síndrome urémico hemolítico, nefrótico complicado, rabdomiólisis.
53. [HECHO]     ⚕ Digestivo: abdomen agudo, pancreatitis, enterocolitis necrotizante, desnutrición y realimentación, soporte nutricional.
54. [HECHO]     ⚕ Hemato-oncológico: HLH y complicaciones de trasplante de médula.
55. [HECHO]     ⚕ Tóxico: intoxicación medicamentosa, cáusticos, monóxido de carbono, plaguicidas, alcohol y opioides.
56. [HECHO]     ⚕ Posoperatorio y otros: cirugía mayor, trasplante, cuidados paliativos, deterioro en sala, traslado crítico.
   (A revisar por un médico: las 87 guías, incluidas las de vía aérea quirúrgica, apneas,
    dependencia tecnológica, partes blandas, inmunocomprometido e infección asociada a dispositivos.)
57. [HECHO]     Sumar herramientas enlazadas a los casos que hoy tienen 3 o menos.
58. [PARCIAL]   ⚕ (D) Revisión médica de las 87 guías ya escritas. La lista de validación para Jorge y Eduardo ya está: docs/VALIDACION.md (11/11); falta que la revisen y tilden (0 de 87).
59. [PENDIENTE] Marca visible en cada guía: "validada" o "pendiente de validación".
60. [PENDIENTE] ⚕ "Banderas rojas" por caso (cuándo escalar).
61. [PENDIENTE] ⚕ "Diagnósticos que no hay que perder" por caso.
62. [PENDIENTE] ⚕ "Qué pedir" (laboratorio e imágenes) por caso, sin dosis.
63. [PENDIENTE] ⚕ Metas hemodinámicas y ventilatorias por caso (valores a validar).
64. [HECHO]     Enlazar cada caso con sus Cards (anafilaxia, arritmias, hiperkalemia…).
65. [HECHO]     Enlazar "Al recibirlo" con el pase I-PASS (base común BASE).
66. [PENDIENTE] ⚕ Revisar con el equipo cada paso del ABC de Emergencias.
67. [PENDIENTE] (D) Armar los capítulos que propuso Jorge en Aparatos y sistemas: Sedoanalgesia, HEN y renal,
    Respiratorio, Cardiovascular y ECMO, Trauma, Quemados y piel, Imágenes, Multisistémicos, IA.
68. [PENDIENTE] Mover PIA a Cardiovascular (hoy "queda colgado").
69. [PENDIENTE] Etiquetas cruzadas: POCUS en cada capítulo y en Imágenes, PIM3 en Calidad y Multisistémicos,
    cronómetro en Respiratorio y Cardiovascular.
70. [PENDIENTE] Capítulo Calidad y Seguridad: PIM3, PELOD, checklists, I-PASS y reporte de incidentes.
71. [PENDIENTE] Ampliar Autocuidado (a Jorge le parece lo que más gusta).
72. [PENDIENTE] Capítulo "IA herramientas y recursos".
73. [PENDIENTE] ⚕ Validar cada fórmula de las calculadoras contra su fuente.
74. [PENDIENTE] Mostrar la fuente y la versión de cada fórmula.
75. [PENDIENTE] ⚕ Alertas de rango en peso, edad y talla (hay que definir los rangos).
76. [PENDIENTE] Estimación de peso y edad coherente entre herramientas.
77. [PARCIAL]   Auditoría: que ninguna pantalla muestre una dosis que no esté ya validada en la app. Hecho para guías y Emergencias (chequeo automático, 11/11); falta index.html.
78. [PENDIENTE] ⚕ Auditoría de todas las dosis existentes contra sus fuentes.
79. [PENDIENTE] Fecha de "última revisión" visible en cada herramienta.
80. [PENDIENTE] Pantalla de fuentes y bibliografía.
81. [PENDIENTE] Aviso de uso clínico más visible y con versión.
82. [PENDIENTE] (D) Documentar los "casos de uso" para IAR1 que mencionó Jorge.
83. [PENDIENTE] ⚕ Revisar la recepción del quemado con la UCI 65.
84. [PENDIENTE] "Al recibirlo" genérico, reutilizable en cualquier caso.
85. [PENDIENTE] ⚕ Revisar el modo PARO (textos, secuencia, voz en los 3 idiomas) con el equipo.
86. [PENDIENTE] ⚕ Revisar los textos de referencias cruzadas que cambiaron de nombre ("Fórmulas y preparaciones",
    "Notas prácticas"): la redacción quedó torpe en algunas frases.
87. [PENDIENTE] ⚕ Confirmar la cita de la fuente "UTIP FIO" (antes decía "UTIP FIO TIPS").

==========================================================================
C. DISEÑO (88–122)
==========================================================================
 88. [PENDIENTE] (D) Aprobación final de la portada: logo, panel, botones.
 89. [HECHO]     Encabezado unificado con el logo nuevo (claro y oscuro) en todas las pantallas.
 90. [HECHO]     Botonera definitiva de 5 botones (ver punto 30).
 91. [PENDIENTE] Set de íconos propio y coherente para la botonera.
 92. [PENDIENTE] Pantalla "Hoy" con accesos y recientes.
 93. [PENDIENTE] Motivos de ingreso: buscador arriba, grupos como tarjetas y "Frecuentes".
 94. [PENDIENTE] Vista de caso con pasos numerados y tildables.
 95. [PENDIENTE] Modo "lectura rápida" (3 líneas) y modo detalle.
 96. [PENDIENTE] Botón EMERGENCIA compacto y accesible desde cualquier pantalla.
 97. [PENDIENTE] Herramientas enlazadas ordenadas por uso, con chips por tipo.
 98. [PENDIENTE] Filtros por etiqueta (chips) en Aparatos y sistemas y en Motivos de ingreso.
 99. [PENDIENTE] Estados vacíos y mensajes de error amigables.
100. [PENDIENTE] Presentación de 3 pasos la primera vez.
101. [PENDIENTE] Diseño del campo "paciente actual".
102. [PENDIENTE] Formulario de IAR1 en pasos, con vista previa.
103. [PENDIENTE] Diseño de Calidad y Seguridad.
104. [PENDIENTE] Diseño de Autocuidado.
105. [PARCIAL]   Favoritos: tarjetas fijadas y estrella (hecho). Falta reordenar arrastrando.
106. [PENDIENTE] Navegación: migas de pan y botón "volver" consistente.
107. [PENDIENTE] Gestos: deslizar entre pestañas.
108. [PENDIENTE] Zonas táctiles de 44 px como mínimo y separación entre botones críticos.
109. [PENDIENTE] Contraste AA en claro y oscuro.
110. [PENDIENTE] Tamaño de letra ajustable (A− / A+).
111. [PENDIENTE] Modo de alto contraste y para daltónicos.
112. [PENDIENTE] Tablet y horizontal en dos columnas.
113. [PENDIENTE] Modo "guardia nocturna" (oscuro con rojos atenuados).
114. [PENDIENTE] Imprimir o exportar un caso a PDF.
115. [PENDIENTE] Rediseño de "Acerca de" y créditos.
116. [PENDIENTE] Pantalla visual de novedades y actualización.
117. [PENDIENTE] Guía de instalación ilustrada para iOS y Android.
118. [PENDIENTE] (D) Pantalla "Volver a ARUCIP" con los íconos de Jorge (para el sitio pago).
119. [PENDIENTE] Guía de estilo (docs/DISEÑO.md): colores, componentes y reglas de "no tocar".
120. [PENDIENTE] Página de prueba con todos los componentes.
121. [PENDIENTE] Congelar el diseño aprobado: lista de elementos protegidos y revisión tuya antes de cualquier cambio visual.
122. [PENDIENTE] Estrella para fijar en Favoritos también en cada caso y en cada capítulo.

==========================================================================
D. ESTÉTICA (123–152)
==========================================================================
123. [PENDIENTE] (D) Logo en SVG vectorial o PNG con transparencia real (hoy se recortó de un JPG: bordes algo blandos).
124. [PENDIENTE] (D) Versión 3D del logo: necesita el archivo original con fondo transparente.
125. [PENDIENTE] Variantes del logo: claro, oscuro, monocromo y favicon.
126. [PENDIENTE] Íconos de la app con el logo nuevo (hoy están los de Jorge).
127. [PENDIENTE] Pantalla de carga con el logo.
128. [PENDIENTE] Paleta final documentada: azul, terracota, dorado, crema.
129. [PENDIENTE] Tipografía: escala y jerarquía.
130. [PENDIENTE] Sombras y profundidad consistentes.
131. [PENDIENTE] (D) Botón EMERGENCIA idéntico a tu referencia (hoy es una aproximación; falta la imagen exacta).
132. [PENDIENTE] ECG: velocidad y latido más naturales, con variante verde en oscuro.
133. [PENDIENTE] Animación de entrada de la portada (respeta "reducir movimiento").
134. [PENDIENTE] Microinteracciones: pulsación y tildado.
135. [PENDIENTE] Transiciones entre pantallas.
136. [PENDIENTE] Ilustraciones suaves para los estados vacíos.
137. [PENDIENTE] El ornamento dorado como separador único y consistente.
138. [PENDIENTE] Tarjetas con radios, bordes y fondos uniformes.
139. [PENDIENTE] Chips y etiquetas con colores por sistema (cardio, respiratorio, neuro…).
140. [PENDIENTE] Íconos por sistema en un solo estilo de línea.
141. [PENDIENTE] Revisión pantalla por pantalla del modo oscuro.
142. [PENDIENTE] Textura sutil en el fondo crema.
143. [PENDIENTE] Imágenes de POCUS y Cards con bordes y leyendas uniformes.
144. [PENDIENTE] Alertas con color y forma, no solo color.
145. [PENDIENTE] Barra tricolor en los encabezados de sección.
146. [PENDIENTE] (D) Logo de Garrahan: confirmar el permiso de uso y ajustar tamaño y aire.
147. [PENDIENTE] Capturas con marco de teléfono para presentar.
148. [PENDIENTE] Imagen para compartir por WhatsApp.
149. [PENDIENTE] Resumen de una página en PDF para Jorge y Eduardo.
150. [PENDIENTE] Revisión de tono: voseo coherente en toda la app.
151. [PENDIENTE] Revisión ortográfica global.
152. [PENDIENTE] Revisión estética final contra tus capturas, con lista de aprobación.

==========================================================================
QUÉ SIGUE (la rutina automática corre a las 07:40 y a las 21:40, SIN fecha de fin: pedido de Gonzalo, 10/11/2026)
==========================================================================
Regla: ningún cambio de diseño sube a la rama sin aprobación; primero se muestra en un HTML aparte.
Las prioridades 1 a 3 de la rutina están completas (87 guías, enlaces, pruebas). Lo que la rutina puede seguir
haciendo sola, de a un paso por corrida (propuesta; nada de esto está implementado):
- 77: extender la auditoría de dosis a index.html (solo listar qué pantalla muestra qué dosis y su fuente; no cambiar nada).
- 47 y 46: limpieza de traducciones sin uso y de textos con nombres viejos (hoy no hay ninguno visible; quedan claves internas).
- 32: enlaces directos a cada caso (#casos/shs). Es funcional, no visual, pero cambia la navegación: necesita el OK de Gonzalo.
- 16 y 17: campos «fuente» y «revisado por / fecha» en data.js (estructura vacía, para que el servicio los complete).
- src/: carpeta de fuentes viejas que ya no se usa (tiene textos con nombres viejos): borrarla o archivarla, con el OK de Gonzalo.
- 59: cuando haya guías tildadas en docs/VALIDACION.md, mostrar «validada / pendiente de validación» en cada guía. Es un cambio visible: necesita el OK de Gonzalo y se muestra primero en un HTML aparte.
- Una lista de validación igual para Emergencias (enfoque sistemático, triángulo, novedades AHA 2025; ítem 66) y para SYMP (signos y síntomas → motivos).
Lo que NO puede avanzar sin personas:
- Revisión médica ⚕ de todo lo clínico (58, 60–63, 66, 73, 78, 85) y el contenido que redacta el servicio (106–111).
- Respuestas de Gonzalo: ejemplos de «no anda el predictivo» y «no anda la leche concentrada»; ítem 113 (mensaje cortado);
  ítem 102 (tubo con/sin balón); OK para 23–26 (paciente actual) y 103–105, 109 (planilla), que requieren diseño.
- Diseño y estética (88–152) y monetización (43–45).

==========================================================================
LO QUE DEPENDE DE OTRAS PERSONAS
==========================================================================
- Jorge y Eduardo: botonera definitiva, capítulos de Aparatos y sistemas, validación médica de todas las guías,
  monetización, logo original con transparencia real, imagen exacta del botón de emergencia.
- Administrador de la organización "arucip" en GitHub: confirmar GitHub Pages activo en arucip/pruebas.
- Gonzalo: pasar la página de Jotform guardada y los ejemplos de lo que no anda (predictivo, leche concentrada).

==========================================================================
C. PEDIDOS DE GONZALO (WhatsApp 7/11, 22:03–22:37) · a respetar y avanzar de a lotes
==========================================================================
Acordado: en los créditos se escribe «Gonzalo G. Pereira» (ya aplicado en el código).
Los puntos de diseño/estética los pidió Gonzalo mismo, pero se muestran primero en un HTML aparte antes de cambiar la app (regla del README).
Todo contenido clínico nuevo: ⚕ pendiente de revisión médica; sin dosis salvo las que valide el servicio.

Buscador y navegación
 90. [PARCIAL]   (hecho con siglas/sinónimos; Gonzalo avisó que no anda bien, faltan ejemplos) Buscador predictivo bueno: «tec» debe llevar a «traumatismo encéfalo craneano» (siglas, sinónimos, tildes, errores). En Motivos de ingreso debe andar a la perfección.
 91. [HECHO]     Portada: sacar la línea inferior «Basada en AR-UCIP» (la app es Arucip).
 92. [HECHO]     Botón «Volver» en todas las pantallas menos la portada, al lugar inmediatamente anterior.
 93. [PENDIENTE] Todos los botones del mismo tamaño.
 94. [HECHO]     Motivos de ingreso: sacar el apartado «Frecuentes»; dejar el buscador predictivo.
 95. [PENDIENTE] Cards: si ya hay un peso de paciente cargado (ej. 30 kg), al abrir Cards ir directo a ese peso.

Calculadora de leches
 96. [HECHO]     Los mL no pueden tener decimales: redondeo lógico; si es estético y necesario, mostrar el valor exacto chico aclarando que es redondeo.

Emergencias
 97. [HECHO]     (⚕ revisar) Incluir el triángulo de evaluación pediátrica. Gonzalo mandó una imagen de referencia (triángulo: azul = apariencia, verde = trabajo respiratorio, rojo = circulación a la piel). Dibujarlo propio en SVG, sin copiar la imagen (posibles derechos del PALS), y mostrarlo primero en un HTML aparte. Aclarar que «apariencia» = estado neurológico, con tildes. Si la combinación requiere reanimación, el botón se titula «Paro».
 98. [PARCIAL]   Quitar el apartado redundante de «Paro» y los botones de la secuencia ABC; aclarar cuándo hacer CAB (secuencia de paro).
 99. [PENDIENTE] Buscar bibliografía para agregar «F» de fluidos en quemados y «F» de familia en general (quemados: fluidos y familia). Verificar si figura SAMPLE.
100. [PENDIENTE] Reemplazar «Evaluación y algoritmos»: pedir el peso del paciente y calcular todo lo que sigue en función de él; no se pasa de letra hasta resolver la anterior; checklist por letra; aclarar «evaluar–intervenir» del PALS; adjuntar el PDF de PALS (verificar licencia/derechos antes de incluirlo).
101. [PENDIENTE] Circulación: agregar la guía ecográfica para colocar un acceso vascular.
102. [A VERIFICAR POR MÉDICO] Tubo endotraqueal: Gonzalo indicó que el con balón es ~0,5 más chico que el sin balón. Su mensaje escribe la misma cuenta (edad/4 + 3,5) para ambos: confirmar con él. Referencia habitual: con balón edad/4 + 3,5; sin balón edad/4 + 4.

Indicaciones y cálculos (mini programa de planilla del paciente)
103. [PENDIENTE] Lista de pacientes (nombre, cama o HC; guardado opcional) y, al tocar uno, se despliega su planilla por horarios de 2 h (periodicidad modificable): ingresos y egresos, ritmo diurético, otras pérdidas (DVE, vómitos, etc.), ingresos enterales vs parenterales. Solo se ve el paciente elegido.
104. [PENDIENTE] Aporte de líquidos por kg y por m², contando los líquidos de los antibióticos y recordando el mantenimiento de accesos (mL/h de la arteria, etc.).
105. [PENDIENTE] Contador de rescates de analgosedación.
106. [PENDIENTE] ⚕ Apartado de medidas generales de cuidados (cabecera, protecciones, quién requiere o no protección gástrica, etc.).
107. [PENDIENTE] ⚕ Guía de infectología: antibióticos según fiebre y estado del paciente (lo redacta y valida el servicio).
108. [PENDIENTE] ⚕ Cada cuánto pedir laboratorios (lo define el servicio).
109. [PENDIENTE] Registro de gases en sangre por paciente con horario, correlación con capnografía y datos del respirador (volumen minuto).
110. [PENDIENTE] ⚕ Nutrición parenteral: cálculos y cuándo se indica.
111. [PENDIENTE] ⚕ Quemados con inhalación: tiosulfato (indicaciones, cálculo y cuánto pasar); dosis a validar por médicos antes de incluir.

Aparatos y sistemas · cardio
112. [PENDIENTE] ⚕ Marcapasos: explicación. Tipos de cirugía cardiovascular y qué hacer en cada una para el seguimiento posoperatorio (ej. cambio del soplo); cosas de ECMO a tener en cuenta.
113. [PENDIENTE] Un último punto de Gonzalo quedó cortado («La posibilidad…»): preguntarle cuál era.
