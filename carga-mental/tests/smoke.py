"""Prueba de humo de Carga Mental.
Uso: python3 tests/smoke.py   (desde la carpeta carga-mental)
Levanta un servidor local, abre la app en un celular simulado, recorre todas las pestañas
y falla si hay errores de JavaScript. Guarda capturas en /tmp/cm-*.png para revisarlas.
"""
import http.server, os, socketserver, sys, threading
from functools import partial
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = next((p for p in ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'] if os.path.exists(p)), None)

handler = partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
handler.log_message = lambda *a: None
srv = socketserver.TCPServer(('127.0.0.1', 0), handler)
port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()

errs = []
with sync_playwright() as p:
    kw = {'args': ['--no-sandbox']}
    if CHROME: kw['executable_path'] = CHROME
    b = p.chromium.launch(**kw)
    pg = b.new_page(viewport={'width': 390, 'height': 844})
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(f'http://127.0.0.1:{port}/')
    pg.wait_for_timeout(2000)
    pg.screenshot(path='/tmp/cm-0-inicio.png')
    # Elegir usuario si aparece la bienvenida
    if pg.locator('text=Gonzalo —').count():
        pg.locator('text=Gonzalo —').first.click()
    for i, name in enumerate(['Hoy', 'Compras', 'Casa', 'Joaco', 'Mensajes']):
        loc = pg.locator(f'nav >> text={name}')
        if loc.count():
            loc.first.click(); pg.wait_for_timeout(250)
            pg.screenshot(path=f'/tmp/cm-{i+1}-{name.lower()}.png', full_page=True)
        else:
            errs.append(f'No encontré la pestaña {name}')
    b.close()
srv.shutdown()
if errs:
    print('ERRORES:'); [print(' -', e) for e in errs]; sys.exit(1)
print('OK: sin errores. Capturas en /tmp/cm-*.png')
