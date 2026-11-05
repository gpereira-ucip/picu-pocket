# Arucip (antes PICU Pocket)

Ayuda rápida para cuidados intensivos pediátricos. PWA de un solo archivo (`index.html`) que funciona sin conexión.

## Estructura

```
src/index.src.html   esqueleto de la página (portada, encabezado, secciones)
src/css/             estilos por capa (08-arucip-theme.css = identidad visual y portada)
src/js/              scripts de interfaz y arranque (14-cover.js = portada)
src/data/05-app/     datos, imágenes y herramientas (Cards, POCUS, Quemados…)
src/data/12-i18n-…/  traducciones es / en / pt
assets/              emblema, wordmark (P con bastón de Esculapio), logo de Fundación Garrahan
tools/build.py       arma index.html a partir de src/ y assets/
tools/make_assets.js regenera wordmark, íconos y recorte del logo (Playwright)
```

## Compilar

```
python3 tools/build.py          # genera index.html
python3 tools/build.py --check  # falla si index.html no está al día
```

`index.html` se versiona compilado para poder publicarlo y compartirlo como un único archivo.
Al publicar una versión nueva, subir `VER` (`src/js/10-ui-shell.js`) y `CACHE` (`sw.js`).
