# Arucip y el Libro del proveedor SVAP/PALS 2023

Gonzalo aportó el *Libro del proveedor de Soporte Vital Avanzado Pediátrico (SVAP/PALS)* de la AHA, edición en español 2023 (basado en las guías AHA 2020), el 11/11/2026. El libro **no está en este repositorio** (es material con derechos de la AHA y el repo es público). De él se toma solo contenido clínico (criterios, valores, secuencias y dosis), siempre **con redacción y diseño propios**, citando la fuente. **No se copian imágenes, tablas ni párrafos del libro.** Todo lo agregado va marcado ⚕ pendiente de revisión médica.

## Hecho el 11/11/2026

- Triángulo de evaluación pediátrica con el esquema del manual: tres caras (apariencia, esfuerzo respiratorio, circulación (color)), dibujado como SVG propio.
- **Signos vitales normales por edad (PALS)** (`T.pals`): FC despierto y dormido, FR, presión sistólica, diastólica y media, límite de hipotensión y chequeo de los valores del paciente. Reemplaza la tabla PALS 2018.
- **Bradicardia con pulso** (`T.bradi`) y **Taquicardia con pulso** (`T.taqui`): algoritmos paso a paso con el motor `palsFlow` (preguntas Sí/No, camino recorrido, «Paso anterior», dosis por peso con topes). Las dosis son las que ya tenía la app.
- **Problema respiratorio: gravedad y tipo** (`T.recresp`) y **Shock: reconocimiento y tipo** (`T.recshock`): mismo motor, sin dosis.
- **Emergencia por opioides: paso a paso** (`T.opio`, 12/11): ¿responde? → ayuda → respiración y pulso → ventilar y naloxona / RCP / vigilancia. Sin dosis.
- Cotejo de dosis (ver abajo).

## Cotejo de dosis PALS 2020 contra la app

| Tema | PALS 2020 | App | Resultado |
|---|---|---|---|
| Adrenalina en paro IV/IO | 0,01 mg/kg (0,1 mL/kg de 0,1 mg/mL), máx 1 mg, cada 3 a 5 min | Igual | Coincide |
| Adrenalina endotraqueal | 0,1 mg/kg (0,1 mL/kg de 1 mg/mL) | Igual, máx 2,5 mg | Coincide |
| Descargas FV/TV sin pulso | 2 J/kg, luego 4 J/kg, luego ≥ 4 J/kg hasta 10 J/kg o dosis de adulto | Igual, tope 200 J | Coincide |
| Amiodarona en paro | 5 mg/kg en bolo, hasta 3 dosis | Igual, máx 300 mg por dosis | Coincide |
| Lidocaína en paro | 1 mg/kg de carga | Igual, máx 100 mg | Coincide |
| Atropina | 0,02 mg/kg IV/IO, mín 0,1 mg, máx 0,5 mg, se puede repetir una vez | Igual | Coincide |
| Adenosina | 0,1 mg/kg (máx 6 mg); 2.ª 0,2 mg/kg (máx 12 mg) | La ficha «Taquicardia supraventricular» dice 2.ª «máx 6 mg» | **Discrepancia**: marcada ⚠ en la ficha |
| Cardioversión sincronizada | 0,5 a 1 J/kg, luego hasta 2 J/kg | La misma ficha dice 0,1 a 0,5 J/kg | **Discrepancia**: marcada ⚠ en la ficha |
| Amiodarona con pulso | 5 mg/kg en 20 a 60 min (máx 300 mg), hasta 15 mg/kg/día | Igual | Coincide |

## Pendiente: para la tarea diaria, un ítem por corrida

Cada ítem tiene las notas clínicas necesarias, ya redactadas con palabras propias, así la tarea no necesita el libro.

1. **Biblioteca de ritmos ECG con dibujos propios** (SVG generado por código, sin copiar las tiras del libro): ritmo sinusal, bradicardia sinusal, taquicardia sinusal (FC variable, P presentes), TSV (sin P visibles, R-R fijo, lactante ≥ 220 o niño ≥ 180), flúter auricular (ondas en serrucho), bloqueo AV de 1.º grado (PR largo constante), 2.º grado Mobitz I (PR que se alarga hasta que falla un QRS), 2.º grado Mobitz II (PR fijo con QRS que faltan de golpe), 3.º grado (P y QRS disociados, escape lento), TV monomorfa (QRS ancho regular), torsade de pointes (QRS que gira alrededor de la línea), FV gruesa y fina, asistolia, AESP (actividad organizada sin pulso), ondas T picudas (hiperpotasemia). Cada uno: qué se ve, qué buscar y enlace al algoritmo que corresponde.
2. **[HECHO 12/11] Emergencia por opioides** (`T.opio`, motor `palsFlow`, sin dosis: la de naloxona se lee en «Intoxicaciones: antídotos por peso»). Está en Más › Herramientas › Multisistémico y enlazada desde el motivo «Alcohol, drogas de abuso y opioides». ⚕ Pendiente de revisión médica. Nota: se hizo antes que el ítem 1 (biblioteca de ritmos ECG) porque ese es un trabajo grande y de dibujo, que no entra en «un paso chico por corrida»; el ítem 1 sigue pendiente y conviene que Gonzalo diga si lo quiere y vea primero una muestra en un HTML aparte.
3. **Obstrucción de la vía aérea por cuerpo extraño**: tos eficaz → dejarlo toser y vigilar; tos ineficaz y consciente → lactante: 5 golpes en la espalda y 5 compresiones en el pecho alternados; niño: compresiones abdominales; inconsciente → RCP, y antes de ventilar mirar la boca y sacar el objeto solo si se ve; no hacer barrido a ciegas.
4. **Equipos de alto rendimiento** (no clínico): funciones (líder, compresiones, vía aérea, monitor y desfibrilador, acceso y medicación, registro y cronómetro), comunicación en circuito cerrado (orden clara, el que recibe repite, avisa cuando terminó), mensajes claros, conocer los propios límites, intervenciones constructivas, resumen y reevaluación en voz alta, respeto mutuo.
5. **Tabla de clasificación del asma por gravedad** y **manejo del crup** como chequeo rápido: comparar contra «Crisis asmática grave paso a paso» y el motivo de ingreso laringitis antes de agregar; no duplicar.
6. **Atención posparo**: comparar el algoritmo posparo del libro (oxigenación con saturación 94 a 99 %, normocapnia, evitar hipotensión, control de temperatura, glucemia, convulsiones) contra lo que ya tiene la app y anotar diferencias.
