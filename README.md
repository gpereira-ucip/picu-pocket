# Arucip (antes Picu Pocket)

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
- Casos: 87 motivos (46 con guía «Al recibirlo» propia) de ingreso a UCIP en 12 grupos, con qué hacer al recibir al paciente y las herramientas útiles (incluye recepción del quemado, shock séptico e insuficiencia cardíaca).
- Portada: los botones replican la barra inferior; se quitó «Entrar».
- Créditos: Jorge Selandari, Eduardo Motto y Gonzalo Gabriel Pereira, en ese orden.
- Las secciones nuevas están en español; las herramientas que enlazan conservan su traducción.

## v0.52
- Íconos de la app (PWA) reemplazados por los que mandó Jorge Selandari (cabeza con engranajes, «AR-UCIP»), «por ahora». Los de «Volver a ARUCIP» quedan en `assets/volver/` (sin usar todavía), junto con `icon-349` y `icon-maskable-640` en `assets/`.
- Pendientes que salieron de la charla con Jorge (para acordar con él y Eduardo antes de tocar): botones inferiores (Emergencias, Favoritos, Aspectos y Sistemas, Calidad y Seguridad, Autocuidado), capítulos como etiquetas, campo «paciente actual» (peso/edad/género/talla), formulario de prompt a IAR1, texto predictivo en la búsqueda.
