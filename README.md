# Arucip (antes Picu Pocket)

Ayuda rápida para cuidados intensivos pediátricos. PWA sin dependencias que funciona sin conexión.
Basada en AR-UCIP (Argentina). Autor: Gonzalo Gabriel Pereira.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | App completa (HTML, estilos y lógica base, i18n es/en/pt). |
| `css/arucip.css` | Capa visual v0.50: logotipo, botones y portada. |
| `js/migrate.js` | Migra datos locales `picu-*` → `arucip-*` (se carga en `<head>`). |
| `js/cover.js` | Lógica de la portada y sus traducciones. |
| `assets/arucip-mark.svg` | Logotipo: «P» de UCIP con la vara de Esculapio (fuente de los íconos). |
| `sw.js`, `manifest.webmanifest`, `icon-*.png` | PWA / sin conexión. Al publicar, cambiar `CACHE` en `sw.js`. |

## Notas de la v0.50
- Renombrado «PICU Pocket» → «Arucip» (UI, manifest, service worker, claves de almacenamiento). Las menciones a ARUCIP como fuente clínica no se tocaron.
- Portada con acceso directo a PARO, logotipo nuevo, botones rediseñados e íconos nuevos.
- Pendiente: la URL pública (`gpereira-ucip.github.io/picu-pocket`) sigue usando el nombre del repositorio; renombrar el repo a `arucip` requiere hacerlo en GitHub y actualizar esas 3 referencias en `index.html`.
