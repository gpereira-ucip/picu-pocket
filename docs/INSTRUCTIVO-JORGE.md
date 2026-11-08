# Instructivo para Jorge: activar el sitio de Arucip en GitHub Pages

Hola Jorge. La app ya está subida al repositorio **arucip/pruebas** (rama `main`). Falta un solo paso que solo puede hacer alguien con permisos de administrador del repositorio: **encender GitHub Pages**. Son 5 minutos.

## Parte 1 · Encender el sitio (desde la compu)

1. Abrí **https://github.com/arucip/pruebas** e iniciá sesión con tu usuario.
2. Arriba a la derecha del repositorio tocá **Settings** (el engranaje). Si no aparece, tu usuario no es administrador del repo: avisale a Gonzalo.
3. En el menú de la izquierda, tocá **Pages** (dentro de «Code and automation»).
4. En **Build and deployment → Source** elegí **Deploy from a branch**.
5. En **Branch** elegí **main** y, al lado, la carpeta **/ (root)**. Tocá **Save**.
6. Esperá 1 o 2 minutos y recargá la página (F5). Arriba aparece un cartel: «Your site is live at…».
   La dirección debería ser **https://arucip.github.io/pruebas/**
7. Abrí esa dirección en el navegador: tiene que aparecer la portada de Arucip.

Si en el paso 6 sigue diciendo «Your site is being built», esperá unos minutos más.

## Parte 2 · Probar que se instala como app (desde el celular)

**Android (Chrome):**
1. Abrí https://arucip.github.io/pruebas/ en Chrome.
2. Menú de los tres puntos → **Instalar app** (o «Agregar a la pantalla principal»).
3. Abrí el ícono nuevo y comprobá que se ve a pantalla completa.
4. Activá el modo avión y abrila de nuevo: tiene que funcionar sin conexión.

**iPhone (Safari):**
1. Abrí la dirección en Safari (tiene que ser Safari).
2. Botón **Compartir** → **Agregar a pantalla de inicio**.
3. Abrí el ícono y comprobá lo mismo que en Android.

## Parte 3 · Avisarle a Gonzalo

Mandale a Gonzalo por WhatsApp:
- Si la dirección abre la portada.
- Si se instaló en Android y/o iPhone, y si funcionó sin conexión.
- Cualquier cosa rara que veas (captura de pantalla, si podés).

## Cómo se actualiza después

No hay que hacer nada. Cada vez que Gonzalo trabaja con Claude, la versión nueva se publica en el repositorio y el sitio se actualiza solo (puede tardar 1 o 2 minutos). La app, al abrirse con internet, toma la versión nueva.

## Si algo falla

- **Aparece un error 404:** revisá que en Pages esté elegida la rama **main** y la carpeta **/ (root)**.
- **No aparece «Instalar app»:** confirmá que la dirección empiece con **https://** y cerrá y abrí el navegador.
- **Se ve una versión vieja:** cerrá la app por completo y volvela a abrir con internet.
