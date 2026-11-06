# Arucip: pedidos y plan de trabajo diario

## Pedidos recibidos (en orden) y estado

| # | Pedido | Estado |
|---|--------|--------|
| 1 | Revisar el backup de PICU Pocket v0.49 | Hecho. El `index.html` del backup es idéntico al código del repo; se incorporó su ROADMAP a `docs/` |
| 2 | Crear/actualizar el repositorio de Arucip con el backup como base | Parcial. Se trabajó en `gpereira-ucip/picu-pocket` (no se puede crear ni renombrar repos desde esta sesión) |
| 3 | Portada (landing) | Hecha (v0.50), pendiente de afinar |
| 4 | Rediseño de botones | Hecho (píldora con filete dorado), pendiente de revisar pantalla por pantalla |
| 5 | Estética del bastón de Esculapio | Hecha en portada, encabezado y wordmark; falta llevarla a más pantallas |
| 6 | La «P» de UCIP en el diseño | Hecha: wordmark ARUCI + P con bastón |
| 7 | Refactorizar estructura y organización | Hecha la base: `src/` + `tools/build.py`; falta ordenar el código de `src/data/05-app` por herramienta |
| 8 | Renombrar «Picu Pocket» a «Arucip» | Hecho en interfaz, manifest, service worker, íconos y traducciones. Pendiente: nombre del repo y enlace de GitHub Pages, identificadores internos `PICU_*`, claves `picu-*` del almacenamiento (con migración), ROADMAP |
| 9 | Commit y push | Hecho en la rama `ccr-3af3e921-sk23qc` |
| 10 | Usar la tipografía original de PICU Pocket | Aproximada con Montserrat. Falta la fuente original |
| 11 | Logo redondo AR-UCIP recoloreado a la paleta anterior | Hecho (redibujado en vector). Pendiente: decidir si vuelve el texto «AR-UCIP» en arco |
| 12 | Portada con Fundación Garrahan | Hecho. Pendiente: confirmar el texto («Con la colaboración de») |
| 13 | Quemados: dejar los muñecos y mostrar el % de cabeza por edad | Hecho (recuadro en Datos del paciente). Pendiente: traducirlo a en/pt y decidir la pierna 5-9 años (2,5 % en tu tabla, 2,75 % en la app) |
| 14 | Enviar un HTML preliminar | Hecho |
| 15 | Poner los nombres de todas las personas intervinientes | Hecho (v0.50): `src/js/05-credits.js`, visible en portada, «Acerca de» y sección AR-UCIP |
| 16 | Enumerar todo lo pedido y planificar cambios diarios | Este documento |

Nota: solo figuran los pedidos que llegaron a esta sesión. Si hay otros anteriores, hay que agregarlos aquí.

## Plan diario (un tema por día)

1. **Día 1: Créditos y nombres.** Confirmar ortografía y roles; sumar a quien falte.
2. **Día 2: Identidad.** Tipografía original (si hay archivo), texto «AR-UCIP» en el logo, afinar portada.
3. **Día 3: Botones y pantallas.** Revisar cada sección con el nuevo estilo; llevar el bastón a títulos y separadores.
4. **Día 4: Quemados.** Traducción en/pt del recuadro de cabeza; decidir tabla (Lund-Browder clásica vs. UpToDate).
5. **Día 5: Nombre y migración.** Nombre del repo y enlaces, claves `picu-*` con migración, ROADMAP.
6. **Día 6: Estructura del código.** Dividir `src/data/05-app` por herramienta y quitar bloques duplicados.
7. **Día 7: Revisión y publicación.** Pruebas en celular y tablet, PWA instalada, subir versión.
