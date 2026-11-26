# Mapa de Arucip: qué hay en cada carpeta (para Jorge)

Está en construcción: la estructura por sectores es la PRIORIDAD 0 de docs/PENDIENTES.md. Cada vez que se mueve un bloque, se actualiza esta tabla.

| Carpeta o archivo | Qué hay | Estado |
|---|---|---|
| `index.html` | El esqueleto de la app y lo que todavía no se separó en sectores | se va vaciando |
| `js/data.js` | Motivos de ingreso, guías «Al recibirlo», enlaces, triage y emergencias | pasará a `js/motivos-de-ingreso/` y `js/emergencias/` |
| `js/idiomas/` | Traducciones al inglés y portugués (`traducciones-1.js`, `traducciones-2.js`). Acá irán `fr.js` y `de.js` | ✔ movido (antes `js/i18n/`) |
| `js/datos/` | Datos pesados: imágenes de POCUS y Cards de medicación por peso | pendiente de repartir por sector |
| `js/hemoderivados/` | Hemoderivados por edad (guía NHS: neonatos, niños y adultos), redactado en castellano | ✔ nuevo (17/11) |
| `js/notas-practicas/` | Notas prácticas por tema (`notas-practicas.js`: intubación, respirador, VAFO, toracostomía, neuro, ROTEM, etc.), movidas de `index.html` el 22/11 | hecho |
| `js/formulas-y-preparaciones/` | Tabla de leches y fórmulas (`formulas-leches.js`: kcal, hidratos, proteínas, grasas, sodio y mOsm por 100 mL) | ✔ nuevo (19/11); faltan las notas prácticas |
| `js/pals-algoritmos/` | Algoritmos PALS: cuerpo extraño, equipos de alto rendimiento, pasos de emergencia por opioides y pasos del shock (reconocimiento y tipo) | ✔ movido |
| `js/buscador.js`, `js/portada.js`, `js/hubs.js`, `js/migrate.js` | Buscador, portada, pantallas de menú y migración de datos guardados | pasarán a `js/nucleo/` |
| `css/` | Estilos (`portada.css`, `hubs.css`) | un archivo por sector, pendiente |
| `assets/` | Logos, íconos e imágenes | no cambia |
| `tests/` | Pruebas automáticas (`smoke.js`, `offline.js`) | no cambia |
| `tools/` | Scripts para armar `arucip.html` y publicar | no cambia |
| `docs/` | Pendientes, plan, validación médica, este mapa | no cambia |

| `js/pocus-ecografia/notas-unidad.js` | Notas de la unidad mostradas en POCUS (movidas el 21/11) | ✔ nuevo |
| `js/pocus-ecografia/accesos-vasculares.js` | Guía «Accesos vasculares ecoguiados» de POCUS (movida el 24/11) | ✔ nuevo |
| `js/formulas-y-preparaciones/formulas-rapidas.js` | Fórmulas rápidas, preparaciones y unidades (Más › Otras recomendaciones), movidas el 23/11 | ✔ nuevo |
