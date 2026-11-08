ARUCIP · PENDIENTES Y PLAN DE TRABAJO
Actualizado el 6/11/2026 · versión de prueba 0.53 (portada nueva y botonera nueva)

ACTUALIZACIÓN (v0.54): cambios respecto de la lista de abajo
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
- Todo lo de la portada/botonera/favoritos está solo en una copia de trabajo y en los HTML enviados.
  NO está subido a GitHub.
- La rama de respaldo (ccr-3af3e921-vfklyp) tiene hasta la v0.52 con 46 guías.
- Subir a arucip/pruebas: (D) falta que un administrador de la organización "arucip" instale la app de Claude.

==========================================================================
A. TÉCNICO (1–45)
==========================================================================
 1. [PENDIENTE] Subir portada, botonera y favoritos a la rama de respaldo (esperando tu OK).
 2. [PENDIENTE] (D) Habilitar a Claude en la organización "arucip" o subir a mano.
 3. [PENDIENTE] (D) Publicar en GitHub Pages (arucip/pruebas) y probar la instalación como app en Android e iOS.
 4. [PENDIENTE] Definir una sola rama de trabajo: hoy hay un diseño en una rama y el contenido en otra.
 5. [PENDIENTE] Dejar "main" (PICU Pocket) congelada con una etiqueta v0.49.
 6. [HECHO]     Service worker red primero (falta probarlo con una actualización real una vez publicado).
 7. [PENDIENTE] Aviso dentro de la app: "Hay versión nueva, recargá".
 8. [PENDIENTE] Script de armado reproducible (fuentes → index.html → arucip.html), documentado.
 9. [PARCIAL]   Pruebas automáticas (hay scripts de prueba; falta dejarlos en la carpeta tests/ del repo).
10. [PENDIENTE] Chequeo de integridad de data.js (ids repetidos, referencias rotas, herramientas sin ningún caso).
11. [PENDIENTE] Actualizar "Novedades" y la versión (dice 0.51; corresponde 0.53).
12. [PENDIENTE] README con cómo agregar un caso, una guía o una herramienta, paso a paso.
13. [PENDIENTE] CHANGELOG.md por versión.
14. [PENDIENTE] (D) docs/COMO-REPLICAR.md: proceso Jotform → app (falta la página de Jotform guardada).
15. [PENDIENTE] (D) Inventario del contenido de Jotform contra la app: qué falta y qué difiere.
16. [PENDIENTE] Fuente por ítem (autor, enlace, fecha) en data.js.
17. [PENDIENTE] Campo "revisado por / fecha" en cada contenido clínico.
18. [PENDIENTE] Búsqueda global con texto predictivo (pedido de Jorge). Hoy hay buscador en Emergencias.
19. [PENDIENTE] Búsqueda tolerante a acentos y errores de tipeo.
20. [PENDIENTE] Siglas y sinónimos en la búsqueda (SRI, PARDS, CAD…).
21. [PENDIENTE] Capítulos como etiquetas: un tema con varias etiquetas, no carpetas (pedido de Jorge).
22. [PARCIAL]   Favoritos gestionados por el usuario: hecho para apartados de "Más" y herramientas.
               Falta poder fijar casos de Motivos de ingreso y capítulos de Aparatos y sistemas.
23. [PENDIENTE] Campo "paciente actual": peso, edad, género y talla, todos opcionales (pedido de Jorge).
24. [PENDIENTE] Botón "cambió de paciente", que borra esos datos.
25. [PENDIENTE] Las calculadoras toman el peso y la edad del paciente actual.
26. [PENDIENTE] Datos del paciente solo en el dispositivo, con aviso de privacidad.
27. [PENDIENTE] Formulario de prompt para IAR1: los 4 campos, prompt mínimo, detallado y texto libre (pedido de Jorge).
28. [PENDIENTE] Copiar o compartir el prompt armado.
29. [PENDIENTE] Revisión de privacidad: ningún dato identificable en los prompts.
30. [PARCIAL]   Botonera: quedó Emergencias · Aparatos y sistemas · Motivos de ingreso · Favoritos · Más.
               Jorge propone Emergencias · Favoritos · Aspectos y Sistemas · Calidad y Seguridad · Autocuidado.
               (D) Falta acordarlo entre Jorge, Eduardo y vos.
31. [PARCIAL]   Migrar a la estructura definitiva sin perder enlaces (Cards ya está dentro de Emergencias).
32. [PENDIENTE] Enlaces directos a cada caso y herramienta (por ejemplo #casos/shs).
33. [PENDIENTE] Botón compartir enlace de una herramienta.
34. [PARCIAL]   Lista de "recientes" (ya existe dentro de Favoritos).
35. [PENDIENTE] Verificar que todo funcione sin conexión, incluidas imágenes de POCUS y Cards.
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
Guías "Al recibirlo" que todavía faltan (35 motivos), por lote:
48. [PENDIENTE] ⚕ Neurológico: posoperatorio neuroquirúrgico, encefalopatía hipóxico-isquémica, muerte encefálica y procuración, delirium.
49. [PENDIENTE] ⚕ Trauma: tórax y abdomen, raquimedular, sospecha de maltrato.
50. [PENDIENTE] ⚕ Ambiental: humo/CO/cianuro, ahogamiento, golpe de calor/hipotermia/electrocución, mordeduras y picaduras.
51. [PENDIENTE] ⚕ Endocrino: estado hiperosmolar, error congénito del metabolismo, insuficiencia suprarrenal, trastornos del sodio.
52. [PENDIENTE] ⚕ Renal: síndrome urémico hemolítico, nefrótico complicado, rabdomiólisis.
53. [PENDIENTE] ⚕ Digestivo: abdomen agudo, pancreatitis, enterocolitis necrotizante, desnutrición y realimentación, soporte nutricional.
54. [PENDIENTE] ⚕ Hemato-oncológico: HLH y complicaciones de trasplante de médula.
55. [PENDIENTE] ⚕ Tóxico: intoxicación medicamentosa, cáusticos, monóxido de carbono, plaguicidas, alcohol y opioides.
56. [PENDIENTE] ⚕ Posoperatorio y otros: cirugía mayor, trasplante, cuidados paliativos, deterioro en sala, traslado crítico.
   (Ya hechas, a revisar por un médico: 52 guías en total, incluidas las de vía aérea quirúrgica, apneas,
    dependencia tecnológica, partes blandas, inmunocomprometido e infección asociada a dispositivos.)
57. [PENDIENTE] Sumar herramientas enlazadas a los casos que hoy tienen 3 o menos.
58. [PENDIENTE] ⚕ Revisión médica de las 52 guías ya escritas, con una lista de validación para Jorge y Eduardo.
59. [PENDIENTE] Marca visible en cada guía: "validada" o "pendiente de validación".
60. [PENDIENTE] ⚕ "Banderas rojas" por caso (cuándo escalar).
61. [PENDIENTE] ⚕ "Diagnósticos que no hay que perder" por caso.
62. [PENDIENTE] ⚕ "Qué pedir" (laboratorio e imágenes) por caso, sin dosis.
63. [PENDIENTE] ⚕ Metas hemodinámicas y ventilatorias por caso (valores a validar).
64. [PENDIENTE] Enlazar cada caso con sus Cards (anafilaxia, arritmias, hiperkalemia…).
65. [PENDIENTE] Enlazar "Al recibirlo" con el pase I-PASS y el registro.
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
77. [PENDIENTE] Auditoría: que ninguna pantalla muestre una dosis que no esté ya validada en la app.
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
 90. [PENDIENTE] Botonera definitiva de 5 botones (ver punto 30).
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
PLAN POR DÍA (la rutina automática corre a las 07:40 y a las 21:40 hasta el 12/11/2026)
==========================================================================
Regla: ningún cambio de diseño sube a la rama sin aprobación; primero se muestra en un HTML aparte.

Vie 6/11 noche : 1, 4, 5, 11, 46 (cerrar y respaldar lo hecho hoy)
Sáb 7  mañana  : 6 (probar), 7, 8, 9, 10
Sáb 7  noche   : 48, 49, 50
Dom 8  mañana  : 51, 52, 53
Dom 8  noche   : 54, 55, 56
Lun 9  mañana  : 57, 59, 64, 65
Lun 9  noche   : 60, 61, 62, 84
Mar 10 mañana  : 68, 69, 70, 71, 72
Mar 10 noche   : 122, 93, 98 (si se acuerda la botonera: 30, 31, 90)
Mié 11 mañana  : 18, 19, 20, 21
Mié 11 noche   : 23, 24, 25, 26
Jue 12 mañana  : 27, 28, 29, 102
Jue 12 noche   : 12, 13, 3 (si hay acceso), resumen final y cierre de la tarea automática

Después del 12/11 (hay que extender la fecha de la tarea o seguir en sesiones manuales):
- Revisión médica de todas las guías (58, 60–63, 73, 78) y validación con Jorge y Eduardo.
- Diseño y estética restantes (puntos 88–152).
- Monetización y licencias (43–45), cuando decidan.

==========================================================================
LO QUE DEPENDE DE OTRAS PERSONAS
==========================================================================
- Jorge y Eduardo: botonera definitiva, capítulos de Aparatos y sistemas, validación médica de todas las guías,
  monetización, logo original con transparencia real, imagen exacta del botón de emergencia.
- Administrador de la organización "arucip" en GitHub: instalar la app de Claude para poder subir a arucip/pruebas.
- Gonzalo: aprobar la portada y la botonera, aprobar subir a la rama de respaldo, pasar la página de Jotform guardada.

==========================================================================
C. PEDIDOS DE GONZALO (WhatsApp 7/11, 22:03–22:37) · a respetar y avanzar de a lotes
==========================================================================
Acordado: en los créditos se escribe «Gonzalo G. Pereira» (ya aplicado en el código).
Los puntos de diseño/estética los pidió Gonzalo mismo, pero se muestran primero en un HTML aparte antes de cambiar la app (regla del README).
Todo contenido clínico nuevo: ⚕ pendiente de revisión médica; sin dosis salvo las que valide el servicio.

Buscador y navegación
 90. [PENDIENTE] Buscador predictivo bueno: «tec» debe llevar a «traumatismo encéfalo craneano» (siglas, sinónimos, tildes, errores). En Motivos de ingreso debe andar a la perfección.
 91. [PENDIENTE] Portada: sacar la línea inferior «Basada en AR-UCIP» (la app es Arucip).
 92. [PENDIENTE] Botón «Volver» en todas las pantallas menos la portada, al lugar inmediatamente anterior.
 93. [PENDIENTE] Todos los botones del mismo tamaño.
 94. [PENDIENTE] Motivos de ingreso: sacar el apartado «Frecuentes»; dejar el buscador predictivo.
 95. [PENDIENTE] Cards: si ya hay un peso de paciente cargado (ej. 30 kg), al abrir Cards ir directo a ese peso.

Calculadora de leches
 96. [PENDIENTE] Los mL no pueden tener decimales: redondeo lógico; si es estético y necesario, mostrar el valor exacto chico aclarando que es redondeo.

Emergencias
 97. [PENDIENTE] Incluir el triángulo de evaluación pediátrica. Gonzalo mandó una imagen de referencia (triángulo: azul = apariencia, verde = trabajo respiratorio, rojo = circulación a la piel). Dibujarlo propio en SVG, sin copiar la imagen (posibles derechos del PALS), y mostrarlo primero en un HTML aparte. Aclarar que «apariencia» = estado neurológico, con tildes. Si la combinación requiere reanimación, el botón se titula «Paro».
 98. [PENDIENTE] Quitar el apartado redundante de «Paro» y los botones de la secuencia ABC; aclarar cuándo hacer CAB (secuencia de paro).
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
