# Arucip · CHANGELOG

Resumen por versión (el detalle está en el README y en docs/PENDIENTES.md).
⚕ = contenido clínico pendiente de revisión médica. No se agregaron dosis nuevas.

## 0.61 (8–10/11/2026)
- Buscador con siglas, «Volver» en todas las pantallas, triángulo de evaluación, «Enfoque sistemático: paso a paso» (PALS) y novedades AHA 2025 en Emergencias (⚕).
- «Indicaciones y cálculos» reordenada: cuidados generales · EAB y electrolitos · respirador · inotrópicos · analgosedación · antibióticos (⚕ varios «en preparación»).
- Los 87 motivos de ingreso tienen guía «Al recibirlo» (⚕) y 4 o más herramientas enlazadas.
- Pruebas: chequeo de integridad de data.js en tests/smoke.js; README con cómo agregar casos y cómo se arma arucip.html.
- 11/11: las pruebas fallan si una guía «Al recibirlo» o Emergencias trae una dosis; README y PENDIENTES al día (sin cambios en la app).
- 11/11: prueba de funcionamiento sin conexión (tests/offline.js); la descripción del manifest ya no dice «Funciona sin conexión».
- 11/11 (noche): docs/VALIDACION.md, la lista de las 87 guías para la revisión médica, generada con tools/build_validacion.js (sin cambios en la app).
- 11/11 (pedido de Gonzalo, con el Libro del proveedor SVAP/PALS 2023): triángulo de evaluación con el esquema del manual (apariencia, esfuerzo respiratorio, circulación); «Signos vitales normales por edad (PALS)» reemplaza la tabla PALS 2018: FC despierto y dormido, FR, presión sistólica, diastólica y media, límite de hipotensión y chequeo de los valores del paciente (⚕).

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
