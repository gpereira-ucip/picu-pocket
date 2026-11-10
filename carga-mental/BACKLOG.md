# Carga Mental: plan de 100 mejoras

Se hacen **en este orden**. Cada mañana la tarea programada toma las siguientes sin tildar, las implementa y las tilda con la fecha y la versión.
Formato al terminar: `- [x] 12. Texto… — ✔ 2026-11-10 (v1.3.0)`.
Las marcadas 🔑 necesitan algo de Gonzalo (una cuenta, una clave, un dato). En ese caso se deja todo preparado, se anota qué falta y se sigue con la próxima.

## Base y visibilidad del progreso
- [x] 1. Pantalla "Novedades y progreso": versión, cambios de cada día y barra X/100. Se abre sola la primera vez que se entra a una versión nueva. — ✔ 2026-11-09 (v1.1.0)
- [x] 2. Pruebas automáticas ampliadas (tests/smoke.py): cada flujo principal, migración de datos y cero errores de consola. — ✔ 2026-11-09 (v1.1.0)
- [x] 3. Migraciones de datos versionadas: los datos guardados nunca se pierden al actualizar. — ✔ 2026-11-09 (v1.1.0)
- [x] 4. Botón "Instalar app" (beforeinstallprompt) y guía de instalación para Android. — ✔ 2026-11-09 (v1.1.0)
- [x] 5. Accesos directos del ícono (shortcuts del manifest): "Anotar compra", "Mensajes", "Hoy". — ✔ 2026-11-09 (v1.1.0)

## Estética
- [x] 6. Sistema de diseño: tokens de color, espacios, radios y sombras en tono arcilla, coherentes con el logo. — ✔ 2026-11-09 (v1.2.0)
- [x] 7. Tipografía más cuidada (pila de fuentes del sistema bien elegida, pesos y escala) y jerarquía clara de títulos. — ✔ 2026-11-09 (v1.2.0)
- [x] 8. Íconos SVG propios en la barra inferior y en las secciones, en lugar de emojis. — ✔ 2026-11-09 (v1.2.0)
- [x] 9. Avatares redondos con inicial y color por persona, en lugar de pastillas de texto. — ✔ 2026-11-09 (v1.2.0)
- [x] 10. Modo oscuro automático (según el sistema) y manual. — ✔ 2026-11-09 (v1.2.0)
- [x] 11. Barra inferior con indicador activo animado y globitos con cantidad de pendientes. — ✔ 2026-11-10 (v1.3.0)
- [x] 12. Animación de tilde al marcar y festejo sutil (confeti) al completar un ciclo o una lista. — ✔ 2026-11-10 (v1.3.0)
- [x] 13. Vibración corta al completar algo (navigator.vibrate). — ✔ 2026-11-10 (v1.3.0)
- [x] 14. Hojas modales que se cierran deslizando hacia abajo. — ✔ 2026-11-10 (v1.3.0)
- [x] 15. Estados vacíos ilustrados y amables en cada sección. — ✔ 2026-11-10 (v1.3.0)
- [x] 16. Accesibilidad: contraste AA, áreas táctiles de 44 px, etiquetas ARIA y tamaño de letra grande opcional. — ✔ 2026-11-10 (v1.4.0)
- [x] 17. Avisos (toasts) con botón "Deshacer". — ✔ 2026-11-10 (v1.4.0)
- [x] 18. Botón flotante "+" contextual por pestaña. — ✔ 2026-11-10 (v1.4.0)
- [x] 19. Indicadores de progreso circulares (mochila, compras del día, tareas). — ✔ 2026-11-10 (v1.4.0)
- [x] 20. Revisión de todos los textos: tono rioplatense amable, sin reproches, claro para Daniela. — ✔ 2026-11-10 (v1.4.0)

## Compras
- [ ] 21. Cantidad y unidad por producto (ej.: 2 docenas, 6 L, 1 kg).
- [ ] 22. Categorías dentro de cada negocio (bebidas, limpieza, papeles, almacén).
- [ ] 23. Buscador de productos con alta rápida si no existe.
- [ ] 24. Anotar compras por voz (reconocimiento de voz del navegador).
- [ ] 25. Historial de compras por producto (quién, cuándo).
- [ ] 26. Frecuencia aprendida: "cada X días" se ajusta solo con el promedio real.
- [ ] 27. Aviso anticipado: "se acaba en 2 días".
- [ ] 28. Modo "estoy en el negocio": letra grande, solo pendientes, tachado al tocar.
- [ ] 29. Precio del último pedido y total estimado de cada lista.
- [ ] 30. Resumen de gasto mensual por negocio.
- [ ] 31. Plantillas de pedido (súper semanal, MercadoLibre mensual, Berardi quincenal).
- [ ] 32. Links directos a la web de Berardi, a MercadoLibre (yerba) y al súper.
- [ ] 33. Día fijo de pedido por negocio con recordatorio (ej.: súper los domingos).
- [ ] 34. "Lo traigo yo": asignar quién compra un ítem puntual.
- [ ] 35. "No había": nota y reintento en otro negocio.
- [ ] 36. Lista de ideas y antojos no urgentes.
- [ ] 37. Rotación de snacks de Joaco para variar en la semana.
- [ ] 38. Compartir con el menú nativo (Web Share) y copiar como texto, además de WhatsApp.
- [ ] 39. Marca o variedad preferida por producto (y foto opcional).
- [ ] 40. Huevos de gallinas alimentadas a maíz y productos del naturista con nota de calidad y dónde comprarlos.

## Tareas del hogar
- [ ] 41. Estado del lavavajillas visible en Hoy ("limpio, falta guardar" / "cargando").
- [ ] 42. Ropa: varias cargas a la vez.
- [ ] 43. Ropa de Joaco aparte (uniforme y ropa de educación física lista para el día).
- [ ] 44. Tareas recurrentes en días específicos (lun-mié-vie).
- [ ] 45. Tareas de una sola vez con fecha límite.
- [ ] 46. Subtareas dentro de una tarea.
- [ ] 47. Posponer una tarea (mañana / en 3 días).
- [ ] 48. Rotación automática de responsables (semanas alternas).
- [ ] 49. Reasignación por guardia: si Gonzalo está de guardia, la tarea pasa a Dani con aviso y se compensa otro día.
- [ ] 50. "Pedile al otro": mandar una tarea con un mensaje.
- [ ] 51. Limonero con calendario estacional (riego verano/invierno, fertilización, poda).
- [ ] 52. Mantenimiento de la casa (filtro del lavavajillas, sarro, aire acondicionado, matafuego).
- [ ] 53. Vencimientos (seguros, servicios, cuota del colegio) como recordatorios.
- [ ] 54. Rutina nocturna de orden de 10 minutos con checklist.
- [ ] 55. Historial por tarea (quién la hizo y cuándo).
- [ ] 56. Visita de Daniela: plantilla de indicaciones que se repiten y registro de qué cocinó.

## Joaco
- [ ] 57. Horario escolar por día (materias, educación física).
- [ ] 58. Mochila según el día: ítems fijos más los del horario.
- [ ] 59. Ropa para mañana según el pronóstico (Open-Meteo, sin clave).
- [ ] 60. Agenda escolar: actos, reuniones, salidas, pagos.
- [ ] 61. Cumpleaños de compañeros con recordatorio de regalo.
- [ ] 62. Actividades extraescolares con quién lleva y quién busca.
- [ ] 63. Ficha de Joaco: obra social, pediatra, alergias, contactos de emergencia.
- [ ] 64. Vacunas según el calendario nacional argentino, con próximas dosis.
- [ ] 65. Controles con historial (peso y talla opcionales).
- [ ] 66. Contactos útiles: escuela, abuelos, pediatra, familias amigas.
- [ ] 67. Comunicados y deberes con "firmado" y "entregado".
- [ ] 68. Vista simple para los abuelos (lunes a la tarde).

## Coordinación y pareja
- [ ] 69. Calendario semanal de todos: guardias, posgrado, pádel, tenis, gimnasio y ejercicio de Dani.
- [ ] 70. Guardias extra o cambios puntuales desde el calendario.
- [ ] 71. Días de oficina de Dani elegibles rápido desde Hoy.
- [ ] 72. Exportar el calendario a Google Calendar (.ics).
- [ ] 73. Resumen de la mañana: qué le toca hoy a cada uno.
- [ ] 74. Resumen del domingo: lo hecho, lo pendiente y lo que viene.
- [ ] 75. "Domingo de 15 minutos": planificación semanal guiada juntos.
- [ ] 76. Mapa de carga mental (Fair Play): pensar, planificar y hacer, por área.
- [ ] 77. Reparto visible sin competencia: cuántas áreas tiene cada uno.
- [ ] 78. Comentarios en cada tarea o producto.
- [ ] 79. Reacciones rápidas (👍 ❤️ gracias) a lo que hizo el otro.
- [ ] 80. Muro de agradecimientos.
- [ ] 81. Mensajes urgentes destacados.
- [ ] 82. Modo vacaciones o viaje que pausa recurrencias.
- [ ] 83. Acuerdos de la casa: notas fijadas.

## Comidas
- [ ] 84. Plan de comidas semanal (incluye lo que cocina Daniela).
- [ ] 85. Recetas favoritas con ingredientes y "agregar a la lista".
- [ ] 86. Viandas y snacks de Joaco por día.
- [ ] 87. Días de pescado conectados con el pedido de Berardi.

## Técnica y confiabilidad
- [ ] 88. Asistente de configuración de Firebase paso a paso dentro de la app.
- [ ] 89. Indicador de sincronización por ítem y reintentos.
- [ ] 90. Resolución de conflictos (último cambio gana, con historial).
- [ ] 91. 🔑 Notificaciones con la app cerrada (Firebase Cloud Messaging + Cloud Function). Dejar el código listo; activarlo requiere el plan Blaze.
- [ ] 92. Recordatorios locales programados donde el navegador lo permita.
- [ ] 93. Copia de seguridad automática semanal (descarga o nube).
- [ ] 94. Funciona sin conexión de punta a punta, con cola de cambios.
- [ ] 95. Rendimiento: render por sección, sin parpadeos, carga en menos de 1 s.
- [ ] 96. Perfiles editables (nombres, roles y colores) para usarla en otras familias.
- [ ] 97. Configuración inicial para una familia nueva (preparar la versión universal).
- [ ] 98. Idioma y textos centralizados (preparar la traducción).
- [ ] 99. Ayuda integrada: "¿cómo se usa?" por sección.
- [ ] 100. Revisión final: auditoría visual completa, Lighthouse PWA y pulido general.
