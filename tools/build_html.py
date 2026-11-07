#!/usr/bin/env python3
"""Arucip · genera arucip.html: la app completa en UN solo archivo (CSS, JS e imágenes adentro).

Uso, desde la raíz del repositorio:   python3 tools/build_html.py

Se abre con doble clic o desde el teléfono, sin servidor. Como archivo suelto no se instala como app ni funciona
sin conexión (eso requiere publicarla con https). Hay que regenerarlo y subirlo en cada cambio, para que el HTML
que se le entrega al usuario sea siempre el mismo que el del repositorio."""
import base64
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def read(p):
    return open(os.path.join(ROOT, p), encoding="utf-8").read()


h = read("index.html")
h = re.sub(r'<link[^>]*href="(css/[^"]+)"[^>]*>', lambda m: "<style>" + read(m.group(1)) + "</style>", h)
h = re.sub(r'<script[^>]*src="(js/[^"]+)"[^>]*></script>',
           lambda m: "<script>" + read(m.group(1)).replace("</script>", "<\\/script>") + "</script>", h)


def img(m):
    p = m.group(1)
    t = "image/svg+xml" if p.endswith(".svg") else "image/png"
    return 'src="data:%s;base64,%s"' % (t, base64.b64encode(open(os.path.join(ROOT, p), "rb").read()).decode())


h = re.sub(r'src="(assets/[^"]+)"', img, h)
h = re.sub(r'<link[^>]*rel="manifest"[^>]*>', "", h)

out = os.path.join(ROOT, "arucip.html")
open(out, "w", encoding="utf-8").write(h)
left = re.findall(r'(?:src|href)="(?:css|js|assets)/[^"]+"', h)
print("arucip.html: %.1f MB | referencias sin incrustar: %s" % (len(h) / 1e6, left or "ninguna"))
sys.exit(1 if left else 0)
