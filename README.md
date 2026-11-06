# Arucip (antes Picu Pocket)

## REGLAS PARA QUIEN TRABAJE EN ESTE REPOSITORIO (leer primero)
- **No tocar la estética sin que Gonzalo lo pida**: logo, colores, tipografías, botones, portada, panel de emergencia, ECG y tarjetas están aprobados. Cualquier cambio visual se muestra primero en un HTML aparte.
- **Botonera acordada** (Jorge Selandari y Gonzalo): Emergencias · Motivos de ingreso · Indicaciones y cálculos · Favoritos · Más. Autocuidado y Calidad y seguridad van dentro de «Más» (no son botones de acceso rápido).
- No aparecen las palabras «Biblia», «Tips» ni «Funciona sin conexión». Lo que no se pudo reubicar está en Más › Otras recomendaciones.
- Sin dosis nuevas. Todo contenido clínico nuevo va marcado ⚕ «pendiente de revisión médica».
- Antes de subir: `NODE_PATH=$(npm root -g) node tests/smoke.js` debe terminar en «Todo bien».
- Pendientes y plan: ver `docs/PENDIENTES.md`.


Ayuda rápida para cuidados intensivos pediátricos. PWA sin dependencias que funciona sin conexión.
Basada en AR-UCIP (Argentina). Autor: Gonzalo Gabriel Pereira.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | App completa (HTML, estilos y lógica base, i18n es/en/pt). |
| `css/arucip.css` | Capa visual: logotipo, botones y portada. |
| `css/hubs.css` | Estilos de Triage, Sistemas y Casos. |
| `js/data.js` | Datos de Triage (ABC), Sistemas y Casos (motivos de ingreso → herramientas). Se edita acá para agregar casos. |
| `js/hubs.js` | Arma las pantallas de Triage, Sistemas y Casos con enlaces a lo que ya tiene la app. |
| `js/migrate.js` | Migra datos locales `picu-*` → `arucip-*` (se carga en `<head>`). |
| `js/cover.js` | Lógica de la portada y sus traducciones. |
| `assets/arucip-mark.svg` | Logotipo: «P» de UCIP con la vara de Esculapio (fuente de los íconos). |
| `assets/arucip-mark-alt.svg` | Logotipo alternativo (cabeza con engranajes, libro y estetoscopio), sin usar todavía. |
| `sw.js`, `manifest.webmanifest`, `icon-*.png` | PWA / sin conexión. Al publicar, cambiar `CACHE` en `sw.js`. |

## Notas de la v0.50
- Renombrado «PICU Pocket» → «Arucip» (UI, manifest, service worker, claves de almacenamiento). Las menciones a ARUCIP como fuente clínica no se tocaron.
- Portada con acceso directo a PARO, logotipo nuevo, botones rediseñados e íconos nuevos.
- Pendiente: la URL pública (`gpereira-ucip.github.io/picu-pocket`) sigue usando el nombre del repositorio; renombrar el repo a `arucip` requiere hacerlo en GitHub y actualizar esas 3 referencias en `index.html`.

## v0.51
- Barra inferior nueva: Triage (ABC), Sistemas, Casos, Cards y Más. Checklists, Cálculos, POCUS y Quemados pasaron a «Más» y se llega a ellos desde las secciones nuevas.
- Casos: 87 motivos (56 con guía «Al recibirlo» propia) de ingreso a UCIP en 12 grupos, con qué hacer al recibir al paciente y las herramientas útiles (incluye recepción del quemado, shock séptico e insuficiencia cardíaca).
- Portada: los botones replican la barra inferior; se quitó «Entrar».
- Créditos: Jorge Selandari, Eduardo Motto y Gonzalo Gabriel Pereira, en ese orden.
- Las secciones nuevas están en español; las herramientas que enlazan conservan su traducción.

## v0.52
- Service worker «red primero» (idea de Jorge): ya no hace falta subir la versión de CACHE al publicar; solo editar ASSETS si se agregan o quitan archivos.
- Íconos de la app (PWA) reemplazados por los que mandó Jorge Selandari (cabeza con engranajes, «AR-UCIP»), «por ahora». Los de «Volver a ARUCIP» quedan en `assets/volver/` (sin usar todavía), junto con `icon-349` y `icon-maskable-640` en `assets/`.
- Pendientes que salieron de la charla con Jorge (para acordar con él y Eduardo antes de tocar): botones inferiores (Emergencias, Favoritos, Aspectos y Sistemas, Calidad y Seguridad, Autocuidado), capítulos como etiquetas, campo «paciente actual» (peso/edad/género/talla), formulario de prompt a IAR1, texto predictivo en la búsqueda.

## v0.53 · portada nueva
- Portada rehecha según el diseño que pidió Gonzalo: emblema de la cabeza con engranajes, título ARUCI + P con vara de Esculapio, tagline, botón «Entrar», panel con interruptor de modo claro/oscuro, botón EMERGENCIA (abre el modo PARO) y ECG animado, y «Con la colaboración de» Fundación Garrahan.
- Se toca el logo del encabezado para volver a verla. El ECG respeta «reducir movimiento».
- Se quitaron de la portada los 5 accesos (están en la barra inferior de la app).

## Pendiente de diseño · propuesta de Jorge (a acordar con Jorge y Eduardo antes de implementar)
Nueva barra inferior propuesta:
1. **Buscador general en la portada** con predictivo que funcione bien (busca en toda la app).
2. **Emergencias**: correcto como está, con la secuencia PALS.
3. **Motivo de ingreso a la unidad**: un solo botón dividido por aspectos (reemplaza la diferencia entre «aparatos y sistemas» y «cuadros clínicos»; junta Sistemas y Casos). Con buscador predictivo propio de aparatos, signos, síntomas, etc.
4. **Indicaciones y cálculos** (título tentativo), para el día a día asistencial: balances, indicaciones diarias, periodicidad de estudios complementarios, qué solicitar y cuándo. Sería el botón más práctico para el personal en actividad.
5. **Favoritos / uso frecuente**: fijar botones o secciones para personalizar la app según la tarea diaria más frecuente.
6. **Más**, ordenado. Autocuidado y Calidad y Seguridad NO llevan botón de acceso rápido: van como espacio claro dentro de «Más». Idea abierta: ponderar un reporte de eventos, normas, etc.

Nota clínica: «Indicaciones diarias» y «periodicidad de estudios» son contenido nuevo que debe redactar o validar un médico del servicio; no se inventa.

## v0.54 · botonera de Jorge
- Barra: **Emergencias** (PARO, Secuencia PALS, Cards, buscador y ABC) · **Motivos de ingreso** (por aspecto, con las herramientas de cada aparato y buscador por signo, síntoma, aparato o motivo) · **Indicaciones y cálculos** (balances, nutrición, analgosedación, infusiones, pase y escalas; «indicaciones diarias» y «estudios: qué pedir y cuándo» quedan como pendientes de redacción médica) · **Favoritos** (apartados y herramientas fijados como tarjetas) · **Más** (ordenado: herramientas, Autocuidado, Calidad y seguridad, IA, otras recomendaciones, la app).
- Portada: buscador general predictivo (`js/buscador.js`) con tolerancia a acentos y a un error de tipeo.
- `js/data.js`: `SYMP` (signos y síntomas → motivos, ⚕ a revisar), `SYMP_SYN`, `ALIAS`, `SYSMAP`, `IND`.
