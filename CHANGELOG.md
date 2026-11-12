# Arucip · CHANGELOG

Resumen por versión (el detalle está en el README y en docs/PENDIENTES.md).
⚕ = contenido clínico pendiente de revisión médica. No se agregaron dosis nuevas.

## 0.61 (8–10/11/2026)
- 12/11 (aviso de Jorge): en los motivos de consulta ya no se repite dos veces un acceso que también está en «Siempre a mano» (por ejemplo, Cards en Arritmias).
- Buscador con siglas, «Volver» en todas las pantallas, triángulo de evaluación, «Enfoque sistemático: paso a paso» (PALS) y novedades AHA 2025 en Emergencias (⚕).
- «Indicaciones y cálculos» reordenada: cuidados generales · EAB y electrolitos · respirador · inotrópicos · analgosedación · antibióticos (⚕ varios «en preparación»).
- Los 87 motivos de ingreso tienen guía «Al recibirlo» (⚕) y 4 o más herramientas enlazadas.
- Pruebas: chequeo de integridad de data.js en tests/smoke.js; README con cómo agregar casos y cómo se arma arucip.html.
- 11/11: las pruebas fallan si una guía «Al recibirlo» o Emergencias trae una dosis; README y PENDIENTES al día (sin cambios en la app).
- 11/11 noche (pedido de Gonzalo): «Hoja del día: indicaciones y balance» (tool diario): checklist de cuidados generales (⚕), tabla de gases y respirador con PaCO₂−EtCO₂, inotrópicos, analgosedación («primero la analgesia», ⚕), antibióticos, ingresos/egresos/PVC con líquidos totales, mL/kg, ritmo diurético y balance; nombre/HC solo en el dispositivo; compartir, mail y copiar. «Indicaciones y cálculos» empieza por ahí y suma «Fórmulas y preparaciones» en el día a día. Sin dosis nuevas.
- 11/11: prueba de funcionamiento sin conexión (tests/offline.js); la descripción del manifest ya no dice «Funciona sin conexión».
- 11/11 (noche): docs/VALIDACION.md, la lista de las 87 guías para la revisión médica, generada con tools/build_validacion.js (sin cambios en la app).
- 11/11 (pedido de Gonzalo, con el Libro del proveedor SVAP/PALS 2023): triángulo de evaluación con el esquema del manual (apariencia, esfuerzo respiratorio, circulación); «Signos vitales normales por edad (PALS)» reemplaza la tabla PALS 2018: FC despierto y dormido, FR, presión sistólica, diastólica y media, límite de hipotensión y chequeo de los valores del paciente (⚕).
- 11/11: «Bradicardia con pulso» y «Taquicardia con pulso» como algoritmos paso a paso (preguntas Sí/No, camino recorrido, dosis por peso con topes), con diseño y redacción propios basados en PALS 2020; enlazados desde Arritmias y en Más › Herramientas › Cardiovascular (⚕). Sin dosis nuevas: son las que ya tenía la app.
- 11/11: «Problema respiratorio: gravedad y tipo (PALS)» y «Shock: reconocimiento y tipo (PALS)», paso a paso y sin dosis, enlazados desde insuficiencia respiratoria, bronquiolitis y los motivos de shock (⚕).
- 11/11: cotejo de dosis PALS 2020 contra la app (docs/PALS.md); dos discrepancias marcadas ⚠ en la ficha de TSV (2.ª dosis de adenosina y energía de cardioversión), sin cambiar el dato original.
- 12/11: «Emergencia por opioides: paso a paso (PALS)», sin dosis, en Más › Herramientas › Multisistémico y enlazada desde el motivo de alcohol, drogas de abuso y opioides (⚕).
- 12/11: estructura modular, primer paso (idea de Jorge): imágenes y Cards pasan de index.html a js/datos/ (index.html de 7,9 MB a 3,3 MB), sin cambios de contenido ni de aspecto. Pedidos y errores, de acá en adelante por issues de GitHub.

## 0.57–0.60 (8/11/2026)
- Portada achicada, agradecimiento a la Fundación Garrahan, QR para compartir la app, buscador más grande, ícono A (solo emblema).

## 0.54–0.56
- Botonera definida con Jorge: Emergencias · Motivos de ingreso · Indicaciones y cálculos · Favoritos · Más.
- Buscador general predictivo en la portada (js/buscador.js); PWA publicada en pruebas.

## 0.53
- Portada nueva (logo, EMERGENCIA, ECG, modo claro/oscuro).

## 0.52
- Service worker «red primero»; íconos de la app de Jorge.

## 0.51
- Barra inferior nueva y 87 motivos de ingreso en 12 grupos.

## 0.50
- Renombrado «PICU Pocket» → «Arucip».
