"""Prueba de humo de Carga Mental.
Uso: python3 tests/smoke.py   (desde la carpeta carga-mental)
Levanta un servidor local, abre la app en un celular simulado (390x844) y recorre:
  1. Usuario nuevo: bienvenida, Novedades, todas las pestañas y los flujos principales
     (compras, tareas por etapas, tareas que se repiten, indicaciones, mochila, mensajes, ajustes).
  2. Migración: datos guardados con el formato de v1.0.0 → no se pierde nada y queda copia.
  3. Accesos directos del ícono (?go=chat, ?go=anotar).
  4. Vista de Daniela.
  5. Diseño: íconos SVG, avatares, contraste AA y modo oscuro (automático y manual), con capturas /tmp/cm-dark-*.png.
Falla si hay errores de JavaScript o de consola, o si la página se ensancha más de 390 px.
Guarda capturas en /tmp/cm-*.png para revisarlas.
"""
import http.server, json, os, socketserver, sys, threading
from functools import partial
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = next((p for p in ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'] if os.path.exists(p)), None)

handler = partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
handler.log_message = lambda *a: None
srv = socketserver.TCPServer(('127.0.0.1', 0), handler)
port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = f'http://127.0.0.1:{port}/'

errs = []
def check(cond, msg):
    if not cond: errs.append(msg)

def S(pg): return pg.evaluate('JSON.parse(localStorage.getItem("cm_data"))')
def width_ok(pg, where):
    w = pg.evaluate('document.documentElement.scrollWidth')
    check(w == 390, f'{where}: scrollWidth={w} (debería ser 390)')

# Datos con el formato de v1.0.0 (sin _v, sin checks.daniela, con cosas propias de la familia)
OLD = {
  "stores": {"super": {"id": "super", "name": "Supermercado", "icon": "🛒", "how": "Pedido online semanal", "owner": "gonzalo", "ord": 3},
             "naturista": {"id": "naturista", "name": "Naturista", "icon": "🌰", "how": "Cercanía", "owner": "dani", "ord": 1}},
  "items": {"i_agua": {"id": "i_agua", "name": "Agua", "store": "super", "every": 7, "last": None, "state": "list", "by": "dani"},
            "i_mio": {"id": "i_mio", "name": "Queso rallado especial", "store": "super", "every": 10, "last": 1762000000000, "note": "el de Gonzalo"},
            "i_huerfano": {"id": "i_huerfano", "name": "Miel", "store": "negocio-borrado", "every": 30, "state": "ok"}},
  "tasks": {"t_lava": {"id": "t_lava", "kind": "cycle", "name": "Lavavajillas", "icon": "🍽️", "owner": "gonzalo", "steps": ["Cargar", "Encender", "Guardar"], "cur": {"0": {"by": "dani", "at": 1762000000000}}, "ord": 1},
            "t_x": {"id": "t_x", "name": "Sacar la basura", "every": 1, "last": None, "owner": "dani"}},
  "checks": {"mochila": {"id": "mochila", "date": "", "done": {}, "list": ["Cartuchera", "Flauta los miércoles"]}},
  "salud": {"s_odonto": {"id": "s_odonto", "name": "Odontología", "every": 180, "last": "2026-06-01", "next": "", "owner": "dani", "note": "Dra. López"}},
  "indic": {"n_1": {"id": "n_1", "text": "Planchar camisas", "done": False, "created": 1762000000000, "by": "dani"}},
  "areas": {},
  "msgs": {"m_1": {"id": "m_1", "text": "Mensaje viejo que no se tiene que perder", "at": 1762000000000, "by": "dani"}},
  "weeks": {"base": {"id": "base", "days": {"1": {"lleva": "gonzalo", "busca": "abuelos"}, "2": {"lleva": "dani", "busca": "gonzalo"}}}},
  "log": {}
}

with sync_playwright() as p:
    kw = {'args': ['--no-sandbox']}
    if CHROME: kw['executable_path'] = CHROME
    b = p.chromium.launch(**kw)

    def new_page(name, init=None):
        ctx = b.new_context(viewport={'width': 390, 'height': 844})
        if init: ctx.add_init_script(init)
        pg = ctx.new_page()
        pg.on('pageerror', lambda e: errs.append(f'[{name}] JS: {e}'))
        pg.on('console', lambda m: errs.append(f'[{name}] consola: {m.text}') if m.type == 'error' else None)
        return ctx, pg

    # ---------- 1. Usuario nuevo ----------
    ctx, pg = new_page('nuevo')
    pg.goto(URL); pg.wait_for_timeout(1800)
    pg.screenshot(path='/tmp/cm-0-inicio.png')
    check(pg.locator('text=Gonzalo —').count() > 0, 'No apareció la bienvenida')
    pg.locator('text=Gonzalo —').first.click(); pg.wait_for_timeout(700)
    check(pg.locator('#sheet >> text=Novedades y progreso').count() > 0, 'No se abrió Novedades después de elegir usuario')
    ver = pg.evaluate('VERSION'); hechas = pg.evaluate('NEWS[0].hechas')
    check(pg.locator(f'#sheet >> text={hechas}/100').count() > 0, 'Novedades no muestra el progreso X/100')
    check(pg.evaluate('NEWS[0].v') == ver, 'La primera novedad no es la versión actual')
    pg.screenshot(path='/tmp/cm-novedades.png')
    pg.locator('#sheet >> text=¡Genial!').click(); pg.wait_for_timeout(200)
    check(pg.evaluate('localStorage.getItem("cm_seen")') == ver, 'No quedó marcada la versión vista')
    check(S(pg).get('_v') == pg.evaluate('SCHEMA'), 'Datos nuevos sin número de esquema')

    for i, name in enumerate(['Hoy', 'Compras', 'Casa', 'Joaco', 'Mensajes']):
        loc = pg.locator(f'nav >> text={name}')
        if loc.count():
            loc.first.click(); pg.wait_for_timeout(250)
            pg.screenshot(path=f'/tmp/cm-{i+1}-{name.lower()}.png', full_page=True)
            width_ok(pg, name)
        else:
            errs.append(f'No encontré la pestaña {name}')

    # Hoy: tarjeta de instalar y acceso a Novedades
    pg.locator('nav >> text=Hoy').click(); pg.wait_for_timeout(200)
    check(pg.locator('text=Instalá Carga Mental').count() == 1, 'Falta la tarjeta para instalar en Hoy')
    pg.locator('text=Cómo se hace').click(); pg.wait_for_timeout(200)
    check(pg.locator('#sheet >> text=Instalar app').count() > 0, 'La guía de instalación no menciona «Instalar app»')
    pg.screenshot(path='/tmp/cm-instalar.png')
    pg.locator('#sheet >> text=Entendido').click(); pg.wait_for_timeout(150)
    pg.locator('text=Ahora no').click(); pg.wait_for_timeout(200)
    check(pg.locator('text=Instalá Carga Mental').count() == 0, '«Ahora no» no escondió la tarjeta de instalar')
    pg.locator('.verlink').click(); pg.wait_for_timeout(200)
    check(pg.locator('#sheet >> text=Novedades y progreso').count() > 0, 'El acceso a Novedades en Hoy no abre la pantalla')
    pg.locator('#sheet >> text=¡Genial!').click(); pg.wait_for_timeout(150)

    # Compras: anotar y comprar
    pg.locator('nav >> text=Compras').click(); pg.wait_for_timeout(200)
    pg.evaluate("A.filter('super')"); pg.wait_for_timeout(150)
    check(pg.locator('details[open]').count() == 1, 'Habituales debería estar abierto si no hay nada para comprar')
    pg.locator('button:has-text("Se acaba")').first.click(); pg.wait_for_timeout(200)
    listed = [i for i in S(pg)['items'].values() if i['state'] == 'list']
    check(len(listed) == 1, f'«Se acaba» no anotó el producto ({len(listed)})')
    pg.locator('section.card input[type=checkbox]').first.click(); pg.wait_for_timeout(200)
    it = S(pg)['items'][listed[0]['id']] if listed else {}
    check(it.get('state') == 'ok' and it.get('last'), 'Marcar comprado no registró la compra')
    check(pg.locator('nav >> text=Compras').inner_text().strip().endswith('Compras'), 'El contador de compras no se actualizó')

    # Casa: ciclo del lavavajillas y tarea que se repite
    pg.locator('nav >> text=Casa').click(); pg.wait_for_timeout(200)
    for step in ['Cargar', 'Encender', 'Guardar']:
        pg.locator(f'.steps button:has-text("{step}")').first.click(); pg.wait_for_timeout(150)
    check((S(pg)['tasks']['t_lava'].get('lastDone') or {}).get('by') == 'gonzalo', 'El ciclo del lavavajillas no se completó')
    pg.evaluate("A.recDone('t_riego')"); pg.wait_for_timeout(100)
    check(S(pg)['tasks']['t_riego'].get('last'), '«Hecho» no registró la tarea que se repite')
    # Indicaciones para Daniela
    pg.fill('#in_tarea', 'Limpiar vidrios del balcón'); pg.press('#in_tarea', 'Enter'); pg.wait_for_timeout(200)
    check(any(n['text'] == 'Limpiar vidrios del balcón' for n in S(pg)['indic'].values()), 'No se agregó la indicación')

    # Joaco: mochila
    pg.locator('nav >> text=Joaco').click(); pg.wait_for_timeout(200)
    pg.locator('.card:has-text("Mochila") input[type=checkbox]').first.click(); pg.wait_for_timeout(150)
    check(len(S(pg)['checks']['mochila']['done']) == 1, 'No se tildó la mochila')

    # Mensajes
    pg.locator('nav >> text=Mensajes').click(); pg.wait_for_timeout(200)
    pg.fill('#chatin', 'Hola familia'); pg.press('#chatin', 'Enter'); pg.wait_for_timeout(250)
    check(pg.locator('.msg:has-text("Hola familia")').count() == 1, 'No se mandó el mensaje')
    width_ok(pg, 'Mensajes con texto')

    # Ajustes
    pg.locator('#who').click(); pg.wait_for_timeout(200)
    for t in ['Instalar app', 'Cómo instalarla', 'Novedades y progreso', f'v{ver}']:
        check(pg.locator(f'#sheet >> text={t}').count() > 0, f'Ajustes no muestra «{t}»')
    pg.screenshot(path='/tmp/cm-ajustes.png', full_page=True)
    pg.locator('#sheet >> text=Cerrar').click()

    # Recargar: Novedades no vuelve a abrirse y los datos siguen
    pg.reload(); pg.wait_for_timeout(2200)
    check(pg.locator('#modal:not(.hidden)').count() == 0, 'Novedades se volvió a abrir en la misma versión')
    check(S(pg)['tasks']['t_riego'].get('last'), 'Se perdieron datos al recargar')
    ctx.close()

    # ---------- 2. Migración desde v1.0.0 ----------
    init = f"""if(!sessionStorage.getItem('seeded')){{ sessionStorage.setItem('seeded','1');
      localStorage.setItem('cm_data', {json.dumps(json.dumps(OLD))}); localStorage.setItem('cm_me','dani'); localStorage.setItem('cm_tab','hoy'); }}"""
    ctx, pg = new_page('migración', init)
    pg.goto(URL); pg.wait_for_timeout(2200)
    d = S(pg)
    check(d.get('_v') == pg.evaluate('SCHEMA'), f"Migración: _v={d.get('_v')}")
    check(pg.evaluate('!!localStorage.getItem("cm_backup_v0")'), 'Migración: no quedó la copia cm_backup_v0')
    check(json.loads(pg.evaluate('localStorage.getItem("cm_backup_v0")')) == OLD, 'Migración: la copia no es idéntica a los datos viejos')
    check(d['items']['i_agua']['state'] == 'list' and d['items']['i_agua']['by'] == 'dani', 'Migración: se perdió la lista anotada')
    check(d['items']['i_mio']['note'] == 'el de Gonzalo' and d['items']['i_mio']['state'] == 'ok', 'Migración: se perdió el producto propio')
    check(d['items']['i_huerfano']['name'] == 'Miel' and d['items']['i_huerfano']['store'] in d['stores'], 'Migración: producto con negocio borrado')
    check(d['tasks']['t_lava']['cur']['0']['by'] == 'dani', 'Migración: se perdió la etapa en curso')
    check(d['tasks']['t_x']['kind'] == 'rec' and d['tasks']['t_x']['every'] == 1, 'Migración: tarea sin tipo')
    check(d['checks']['mochila']['list'] == ['Cartuchera', 'Flauta los miércoles'], 'Migración: se perdió la mochila propia')
    check('daniela' in d['checks'], 'Migración: no se agregó la ficha de Daniela')
    check(d['salud']['s_odonto']['note'] == 'Dra. López', 'Migración: se perdió salud')
    check(d['indic']['n_1']['text'] == 'Planchar camisas' and d['indic']['n_1']['kind'] == 'tarea', 'Migración: indicaciones')
    check(d['msgs']['m_1']['text'].startswith('Mensaje viejo'), 'Migración: se perdió el mensaje')
    check(d['weeks']['base']['days']['1']['busca'] == 'abuelos' and '5' in d['weeks']['base']['days'], 'Migración: semana tipo')
    check(pg.locator('#sheet >> text=Novedades y progreso').count() > 0, 'Migración: Novedades no se abrió para la versión nueva')
    pg.screenshot(path='/tmp/cm-migracion.png')
    pg.locator('#sheet >> text=¡Genial!').click(); pg.wait_for_timeout(150)
    for name in ['Hoy', 'Compras', 'Casa', 'Joaco', 'Mensajes']:
        pg.locator(f'nav >> text={name}').first.click(); pg.wait_for_timeout(150); width_ok(pg, f'Migración/{name}')
    check(pg.locator('text=Mensaje viejo que no se tiene que perder').count() == 1, 'Migración: el mensaje viejo no se ve')
    # Segunda carga: no vuelve a migrar ni pisa la copia
    pg.reload(); pg.wait_for_timeout(1500)
    check(S(pg)['msgs']['m_1']['text'].startswith('Mensaje viejo'), 'Migración: datos perdidos tras recargar')
    # Importar una copia vieja también la migra
    pg.evaluate("""() => { const f = new File([JSON.stringify({items:{i_imp:{id:'i_imp',name:'Importado',store:'super'}}})], 'v.json');
      const dt = new DataTransfer(); dt.items.add(f); A.settings(); const inp = document.getElementById('f_imp'); inp.files = dt.files; A.importJ(inp); }""")
    pg.wait_for_timeout(400)
    imp = S(pg)['items'].get('i_imp') or {}
    check(imp.get('state') == 'ok' and imp.get('every') == 7, f'Importar copia vieja: {imp}')
    ctx.close()

    # ---------- 3. Accesos directos ----------
    ctx, pg = new_page('atajos')
    pg.goto(URL); pg.wait_for_timeout(300)
    pg.evaluate("localStorage.setItem('cm_me','gonzalo'); localStorage.setItem('cm_seen', VERSION)")
    pg.goto(URL + '?go=chat'); pg.wait_for_timeout(800)
    check(pg.locator('nav button.on').inner_text().strip().endswith('Mensajes'), 'Atajo ?go=chat no abrió Mensajes')
    check('?' not in pg.url, 'El atajo no limpió la dirección')
    pg.goto(URL + '?go=anotar'); pg.wait_for_timeout(800)
    check(pg.locator('#sheet >> text=Nuevo producto').count() > 0, 'Atajo ?go=anotar no abrió el formulario')
    pg.screenshot(path='/tmp/cm-atajo-anotar.png')
    man = json.load(open(os.path.join(ROOT, 'manifest.json'), encoding='utf-8'))
    check([s['url'] for s in man.get('shortcuts', [])] == ['./?go=anotar', './?go=chat', './?go=hoy'], 'Faltan accesos directos en el manifest')
    ctx.close()

    # ---------- 4. Daniela ----------
    ctx, pg = new_page('daniela')
    pg.goto(URL); pg.wait_for_timeout(300)
    pg.evaluate("localStorage.setItem('cm_me','daniela'); localStorage.setItem('cm_seen', VERSION)")
    pg.reload(); pg.wait_for_timeout(1800)
    tabs = [t.strip() for t in pg.locator('nav button').all_inner_texts()]
    check(len(tabs) == 2 and 'Indicaciones' in tabs[0], f'Daniela ve pestañas de más: {tabs}')
    check(pg.locator('.verlink').count() == 1, 'Daniela no ve el acceso a Novedades')
    pg.screenshot(path='/tmp/cm-daniela.png', full_page=True)
    width_ok(pg, 'Daniela')
    ctx.close()

    # ---------- 5. Diseño: íconos, avatares y modo oscuro (v1.2.0) ----------
    CONTRAST = """() => {
      const cs = getComputedStyle(document.documentElement), v = n => cs.getPropertyValue(n).trim();
      const lum = h => { h = h.replace('#',''); if(h.length === 3) h = h.split('').map(x => x + x).join(''); const c = [0,2,4].map(i => parseInt(h.slice(i,i+2),16)/255).map(x => x <= .03928 ? x/12.92 : Math.pow((x+.055)/1.055, 2.4)); return .2126*c[0]+.7152*c[1]+.0722*c[2]; };
      const ratio = (a,b) => { const x = lum(v(a)), y = lum(v(b)); return (Math.max(x,y)+.05)/(Math.min(x,y)+.05); };
      return {ink:ratio('--ink','--bg'), mut:ratio('--mut','--bg'), mutCard:ratio('--mut','--card'), pri:ratio('--pri-on','--pri'), priTx:ratio('--pri-tx','--card'), warn:ratio('--warn','--warnbg'), bad:ratio('--bad','--badbg'), ok:ratio('--ok','--okbg'), bg:v('--bg')};
    }"""
    for scheme in ['light', 'dark']:
        ctx = b.new_context(viewport={'width': 390, 'height': 844}, color_scheme=scheme)
        pg = ctx.new_page()
        pg.on('pageerror', lambda e: errs.append(f'[tema] JS: {e}'))
        pg.on('console', lambda m: errs.append(f'[tema] consola: {m.text}') if m.type == 'error' else None)
        pg.goto(URL); pg.wait_for_timeout(300)
        pg.evaluate("localStorage.setItem('cm_me','gonzalo'); localStorage.setItem('cm_seen', VERSION)")
        pg.reload(); pg.wait_for_timeout(1800)
        c = pg.evaluate(CONTRAST)
        for k, val in c.items():
            if k != 'bg': check(val >= 4.5, f'Contraste {scheme} {k}={val:.2f} (mínimo 4.5)')
        bg = pg.evaluate("getComputedStyle(document.body).backgroundColor")
        check((bg == 'rgb(26, 20, 17)') == (scheme == 'dark'), f'Modo {scheme} automático: fondo {bg}')
        check(pg.locator('nav svg.ic').count() == 5, 'La barra inferior no tiene los 5 íconos SVG')
        check(pg.locator('nav b').count() == 0, 'Quedaron emojis en la barra inferior')
        check(pg.locator('#who .av').count() == 1, 'El botón de usuario no muestra el avatar')
        check(pg.locator('main h3 .hic svg').count() >= 3, 'Los títulos de Hoy no tienen íconos')
        for name in ['Hoy', 'Compras', 'Casa', 'Joaco', 'Mensajes']:
            pg.locator(f'nav >> text={name}').first.click(); pg.wait_for_timeout(200)
            pg.screenshot(path=f'/tmp/cm-{scheme}-{name.lower()}.png', full_page=True)
            width_ok(pg, f'{scheme}/{name}')
        pg.locator('nav >> text=Joaco').click(); pg.wait_for_timeout(150)
        check(pg.locator('.week .pp.v .av').count() == 10, 'La semana de Joaco no usa avatares')
        ctx.close()
    # Elegir el tema a mano desde Ajustes (gana sobre el del teléfono y se recuerda)
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, color_scheme='light')
    pg = ctx.new_page(); pg.on('pageerror', lambda e: errs.append(f'[tema manual] JS: {e}'))
    pg.goto(URL); pg.wait_for_timeout(300)
    pg.evaluate("localStorage.setItem('cm_me','dani'); localStorage.setItem('cm_seen', VERSION)")
    pg.reload(); pg.wait_for_timeout(1800)
    pg.locator('#who').click(); pg.wait_for_timeout(200)
    pg.locator('#sheet .seg >> text=Oscuro').click(); pg.wait_for_timeout(200)
    check(pg.evaluate("document.documentElement.dataset.theme") == 'dark', 'Elegir «Oscuro» no cambió el tema')
    check(pg.evaluate("document.querySelector('meta[name=theme-color]').content") == '#2f231d', 'La barra del teléfono no cambió de color')
    pg.screenshot(path='/tmp/cm-dark-ajustes.png', full_page=True)
    pg.reload(); pg.wait_for_timeout(600)
    check(pg.evaluate("document.documentElement.dataset.theme") == 'dark', 'El modo oscuro no se recordó al recargar')
    pg.locator('#who').click(); pg.wait_for_timeout(200)
    pg.locator('#sheet .seg >> text=Automático').click(); pg.wait_for_timeout(200)
    check(pg.evaluate("document.documentElement.dataset.theme") is None and pg.evaluate("localStorage.getItem('cm_theme')") is None, '«Automático» no volvió al tema del teléfono')
    ctx.close()

    b.close()
srv.shutdown()

# Versiones coherentes entre index.html, sw.js y CHANGELOG
html = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
sw = open(os.path.join(ROOT, 'sw.js'), encoding='utf-8').read()
cl = open(os.path.join(ROOT, 'CHANGELOG.md'), encoding='utf-8').read()
import re
v = re.search(r"const VERSION = '([\d.]+)'", html).group(1)
check(f"carga-mental-v{v}'" in sw, f'sw.js no tiene CACHE de la versión {v}')
check(f'## v{v}' in cl, f'CHANGELOG.md no tiene la entrada v{v}')
check(not re.search(r'(?<![.\w])(alert|prompt)\(', html), 'index.html usa alert() o prompt()')

if errs:
    print('ERRORES:'); [print(' -', e) for e in errs]; sys.exit(1)
print(f'OK: v{v} sin errores. Capturas en /tmp/cm-*.png')
