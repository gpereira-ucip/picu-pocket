# Novedades de Carga Mental

## v1.2.0 — 2026-11-09
- Sistema de diseño (ítem 6): tokens de color en tono arcilla, espacios (`--s1…--s6`), radios (`--r1…--r4`) y sombras (`--sh1`, `--sh2`); ya no quedan colores sueltos en la interfaz.
- Tipografía (ítem 7): pila del sistema (Roboto en Android), escala `--fs-xs…--fs-2xl`, pesos y títulos con jerarquía; números tabulares en contadores.
- Íconos SVG propios (ítem 8) en la barra inferior, el botón de ajustes y los títulos de cada sección (los íconos de negocios y tareas siguen siendo los que eligió la familia).
- Avatares (ítem 9): círculo con inicial y color por persona (G, D, Da, J, Ab; «Ambos» = G+D superpuestos) en Hoy, Compras, Casa, la semana de Joaco, mensajes y ajustes.
- Modo oscuro (ítem 10): automático según el teléfono y manual en ⚙ Ajustes → Apariencia; se aplica antes de pintar (sin parpadeo) y cambia el color de la barra del teléfono.
- Pruebas: contraste AA (4.5:1) de los pares de colores principales en claro y oscuro, íconos, avatares y tema manual.

## v1.1.0 — 2026-11-09
- Pantalla «Novedades y progreso» (ítem 1): versión, cambios de cada día y barra X/100; se abre sola la primera vez que se entra a una versión nueva. Acceso desde Hoy, Ajustes y la vista de Daniela.
- Pruebas automáticas ampliadas (ítem 2): usuario nuevo, compras, etapas, tareas que se repiten, indicaciones, mochila, mensajes, ajustes, atajos, vista de Daniela, migración, importación, errores de consola y ancho de 390 px.
- Migraciones de datos versionadas (ítem 3): `SCHEMA` + `MIGRATIONS`; antes de migrar se guarda copia en `cm_backup_v{n}`; también se migran las copias importadas y se completan campos al bajar de la nube.
- Botón «Instalar app» con `beforeinstallprompt` y guía para Android (ítem 4).
- Accesos directos del ícono (ítem 5): «Anotar compra», «Mensajes» y «Hoy» (`?go=…`); el service worker sirve la página guardada aunque la dirección tenga `?go=`.

## v1.0.0 — 2026-11-09
- Primera versión publicada: compras por negocio con alertas, tareas por etapas, semana de Joaco según las guardias, mochila, salud, indicaciones para Daniela y mensajes.
- Portada e ícono con el camión de la carga mental.
- Plan de 100 mejoras en BACKLOG.md.
