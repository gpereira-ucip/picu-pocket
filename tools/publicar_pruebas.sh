#!/bin/bash
# Publica la app (PWA) en el repositorio arucip/pruebas (sitio de Jorge). Uso: tools/publicar_pruebas.sh /ruta/al/clon/de/pruebas
# Cada ejecución deja un commit nuevo en pruebas con el commit de origen: así cada cambio queda como una versión.
set -e
D="${1:?Indicá la carpeta del clon de arucip/pruebas}"
cd "$(dirname "$0")/.."
SRC=$(git rev-parse --short HEAD)
cp index.html sw.js manifest.webmanifest apple-touch-icon.png icon-*.png "$D"/
rm -rf "$D/css" "$D/js" "$D/assets"; mkdir "$D/assets"
cp -r css js "$D"/; cp assets/*.* "$D/assets/"; touch "$D/.nojekyll"
cd "$D"; git add -A
git diff --cached --quiet && { echo "Sin cambios que publicar"; exit 0; }
git commit -qm "Arucip: versión desde picu-pocket $SRC"
git push origin main
