# Novedades de Carga Mental

## v1.4.0 — 2026-11-10
- Accesibilidad (ítem 16): todos los botones, chips, tildes y campos miden al menos 44 px; las tildes de compras e indicaciones tienen un área de toque de 44×44 (`.chk`); la manija de las hojas también. Cada botón, campo y fila tocable tiene nombre para lectores de pantalla (p. ej. «Comprado: Agua», «Sacar Agua de la lista») y las filas que se tocan se pueden usar con teclado (`role=button`, Enter/Espacio). Las hojas reciben el foco al abrirse, se nombran con su título y devuelven el foco al cerrarse; las etiquetas de los formularios quedan asociadas a su campo. Nuevo «Tamaño de letra: Normal / Grande» en ⚙ Ajustes → Apariencia (`cm_big`, se aplica antes de pintar). Contraste AA verificado en más pares (etiquetas sobre arcilla, globito rojo, botón de Dani, avatares) en claro y oscuro.
- Deshacer (ítem 17): los avisos de anotar, comprar, «Compré todo», pedido habitual, sacar de la lista, tareas hechas, ciclos completos, mochila, indicaciones hechas/borradas/limpiadas y borrados de productos, tareas y controles traen «Deshacer» durante 6,5 s. Restaura el estado anterior (también en la nube) y saca el movimiento de «Últimos movimientos».
- Botón «+» flotante (ítem 18): en Hoy abre «¿Qué querés sumar?» (compra, tarea, control de salud, mensaje); en Compras anota un producto en el negocio elegido; en Casa crea una tarea; en Joaco carga un control de salud. No aparece en Mensajes ni en la vista de Daniela.
- Anillos de progreso (ítem 19): en Hoy, «Cómo va el día» con compras (compradas hoy / pendientes), tareas que se repiten (hechas hoy / que tocan) y mochila de Joaco; se animan al entrar a la pestaña y se pintan en verde al completarse.
- Textos (ítem 20): revisión de mensajes de error y estados para que suenen amables y sin reproches («Ese archivo no parece una copia de Carga Mental», «ya pasó el turno: cargá el nuevo», «No se pudo sincronizar por ahora»…); el estado de sincronización y el permiso de avisos ya no muestran palabras en inglés.
- Sin cambios en la estructura de datos (SCHEMA sigue en 1); una clave nueva de preferencias del teléfono (`cm_big`).
- Pruebas: datos de v1.3.0 intactos, auditoría de 44 px / nombres / teclado en todas las pestañas y hojas (claro, oscuro y letra grande), deshacer de cada acción, botón + por pestaña, anillos, foco de las hojas y letra grande en las 5 pestañas a 390 px.

## v1.3.0 — 2026-11-10
- Barra inferior (ítem 11): indicador tipo píldora que se desliza a la pestaña activa y globitos con la cantidad de pendientes por sección (Hoy: lo tuyo; Compras: productos en lista o vencidos; Casa: tareas que tocan o ciclos empezados; Joaco: mochila incompleta y controles por vencer; Mensajes: sin leer, con `cm_read`; Daniela: indicaciones pendientes). Lectores de pantalla leen «, N pendientes».
- Tilde animada y festejo (ítem 12): la tilde/etapa/fila recién marcada hace un salto con brillo; papelitos de confeti al completar un ciclo, la mochila, la lista de un negocio («Compré todo» o el último producto) y todas las indicaciones de Daniela. Respeta «reducir movimiento» del teléfono.
- Vibración corta (ítem 13): 15 ms al marcar, patrón corto al festejar; se apaga en ⚙ Ajustes → Apariencia (`cm_vib`).
- Hojas modales (ítem 14): entran deslizando, tienen manija arriba y se cierran tirando hacia abajo (si están arriba de todo) o con Escape; no se arrastra desde campos de texto.
- Estados vacíos ilustrados (ítem 15) en Te toca, Últimos movimientos, cada negocio, tareas que se repiten, indicaciones y comidas de Daniela, salud de Joaco y mensajes.
- Sin cambios en la estructura de datos (SCHEMA sigue en 1); solo dos claves nuevas de preferencias del teléfono.
- Pruebas: globitos, indicador, mensajes sin leer, confeti, vibración, cerrar la hoja deslizando (toques reales por CDP), estados vacíos y migración desde v1.2.0.

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
