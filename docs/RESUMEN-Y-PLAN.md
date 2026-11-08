# ARUCIP · Resumen de lo hecho, lo pendiente y el plan
Actualizado el domingo 8/11/2026 · versión publicada: 0.60 · sitio: https://arucip.github.io/pruebas/
⚕ = contenido clínico: necesita revisión de un médico del servicio (Jorge o Eduardo) antes de darse por bueno.
(D) = depende de otra persona.

---------------------------------------------------------------
## 1. LO HECHO
---------------------------------------------------------------
**Publicación**
- App subida a GitHub como PWA en `arucip/pruebas` y online en arucip.github.io/pruebas (se instala como app).
- Cada cambio se publica como versión nueva con `tools/publicar_pruebas.sh` (por ahora lo hace Claude en cada sesión).
- Instructivo para Jorge (activar Pages) y README con las reglas del proyecto.
- Pruebas automáticas (`tests/smoke.js`), armado del HTML único (`tools/build_html.py`) y service worker «red primero».

**Imagen y portada**
- Nombre Arucip en toda la app; logo nuevo (claro y oscuro); portada con ECG, botón EMERGENCIA y Fundación Garrahan.
- Logo de la Fundación Garrahan con enlace a su sitio.
- Portada compacta: entra completa en PC y celular (logo a la izquierda de ARUCIP en pantallas bajas).
- Botonera de la portada igual a la barra inferior de la app (mismo lugar y formato).
- Buscador de la portada más grande, con el título «Buscá en toda la app».
- Pie de portada: se quitó «Basada en AR-UCIP» y «Personas intervinientes»; hay botón «Más información y créditos».
- Créditos en el orden Selandari, Motto, Pereira.
- Ícono de la app nuevo (solo emblema, colores de la portada).
- QR para compartir la app (Más › La app › Compartir la app).

**Navegación**
- Botonera definida con Jorge: Emergencias · Motivos de ingreso · Indicaciones y cálculos · Favoritos · Más.
- Buscador predictivo general (signos, síntomas, motivos, herramientas).
- Favoritos con estrella y «recientes».

**Contenido**
- 87 motivos de ingreso, **todos con guía «Al recibirlo»** (⚕ todas pendientes de revisión médica, sin dosis).
- Enlaces a herramientas ampliados en 23 casos que tenían pocos.
- Novedades y número de versión al día (0.60).

---------------------------------------------------------------
## 2. PENDIENTE · PEDIDOS TUYOS (WhatsApp 7/11) · lo más importante
---------------------------------------------------------------
Buscador y navegación
- Buscador predictivo perfecto: «tec» → traumatismo encéfalo craneano (siglas, sinónimos, tildes, errores de tipeo). Debe andar a la perfección en Motivos de ingreso.
- Botón «Volver» en todas las pantallas menos la portada, al lugar inmediato anterior.
- Todos los botones del mismo tamaño.
- Motivos de ingreso: sacar «Frecuentes» y dejar el buscador.
- Cards: si ya hay un peso cargado, abrir directo en ese peso.

Calculadora de leches
- Los mL sin decimales (redondeo lógico; si hace falta, mostrar el valor exacto chico aclarando que es redondeo).

Emergencias
- Triángulo de evaluación pediátrica dibujado propio (apariencia = estado neurológico, trabajo respiratorio, circulación a la piel). Primero se muestra aparte.
- Quitar el apartado redundante de «Paro» y los botones ABC; aclarar cuándo hacer CAB.
- Reemplazar «Evaluación y algoritmos»: pide el peso, calcula todo en función de él, no pasa de letra hasta resolver la anterior, checklist por letra, «evaluar–intervenir» del PALS.
- ⚕ «F» de fluidos y familia en quemados y en general (buscar bibliografía; verificar SAMPLE).
- Circulación: guía ecográfica para colocar un acceso vascular.
- ⚕ Tubo endotraqueal con y sin balón: confirmar la fórmula (ver «Preguntas para vos»).

Indicaciones y cálculos (planilla del paciente)
- Lista de pacientes (nombre, cama o HC) y, al tocar uno, su planilla por horarios de 2 h: ingresos y egresos, ritmo diurético, otras pérdidas, enteral vs parenteral. Todo solo en el dispositivo.
- Líquidos por kg y por m², contando los de los antibióticos y el mantenimiento de accesos.
- Contador de rescates de analgosedación.
- Registro de gases con horario, capnografía y datos del respirador.
- ⚕ Medidas generales de cuidados; guía de infectología; cada cuánto pedir laboratorios; nutrición parenteral; tiosulfato en quemados con inhalación. **Estos los redacta y valida el servicio: no los invento.**

Aparatos y sistemas
- ⚕ Marcapasos y tipos de cirugía cardiovascular (qué hacer en cada una en el posoperatorio; ECMO).

---------------------------------------------------------------
## 3. PENDIENTE · TÉCNICO
---------------------------------------------------------------
- «Paciente actual» (peso, edad, sexo, talla; opcionales), botón «cambió de paciente», calculadoras que toman esos datos, solo en el dispositivo con aviso de privacidad.
- Formulario de prompt para IAR1 (4 campos; mínimo, detallado y libre), copiar/compartir, revisión de privacidad.
- Enlaces directos a cada caso y herramienta; botón compartir.
- Aviso «hay versión nueva, recargá» dentro de la app.
- Publicación automática sin intervención de Claude (necesita una «llave» de GitHub; se puede armar con ayuda).
- Chequeo de integridad de `data.js` (ids repetidos, enlaces rotos); fuente y «revisado por/fecha» por ítem.
- Búsqueda con acentos y errores; siglas.
- Etiquetas (un tema, varias etiquetas) y filtros.
- Fijar casos y capítulos en Favoritos; reordenar arrastrando.
- Funcionamiento sin conexión verificado (incluidas imágenes de POCUS y Cards).
- Peso del HTML (hoy 8,5 MB) y fuentes; arranque en celular de gama baja.
- Accesibilidad (ARIA, teclado); probar iOS Safari (sonido, voz del PARO), tablet y horizontal.
- Traducir portada, Emergencias y Motivos de ingreso a inglés y portugués.
- README «cómo agregar un caso/guía/herramienta» y CHANGELOG.
- Dejar `main` de picu-pocket congelada con etiqueta v0.49; una sola rama de trabajo.
- Limpieza: nombres viejos («Triage», «Casos»), traducciones sin uso.
- (D) Conteo de uso sin datos personales, registro y licencias, «actualización a app vacía» (monetización).
- (D) Inventario del contenido de Jotform contra la app.

---------------------------------------------------------------
## 4. PENDIENTE · CLÍNICO (todo ⚕, con médicos)
---------------------------------------------------------------
- Revisión médica de las 87 guías «Al recibirlo» y de los enlaces caso→herramienta (lista de validación para Jorge y Eduardo).
- Marca visible por guía: «validada» / «pendiente de validación».
- Por caso: banderas rojas, diagnósticos que no hay que perder, qué pedir (sin dosis), metas hemodinámicas y ventilatorias.
- Validar cada fórmula y cada dosis existente contra su fuente; mostrar fuente, versión y fecha de revisión.
- Revisar el modo PARO (textos, secuencia, voz en los 3 idiomas) y cada paso del ABC.
- Recepción del quemado con la UCI 65; confirmar la cita «UTIP FIO».
- Capítulos de Aparatos y sistemas que propuso Jorge (Sedoanalgesia, HEN y renal, Respiratorio, Cardiovascular y ECMO, Trauma, Quemados y piel, Imágenes, Multisistémicos, IA); ampliar Autocuidado; Calidad y seguridad (PIM3, PELOD, checklists, I-PASS, reporte de incidentes).

---------------------------------------------------------------
## 5. PENDIENTE · DISEÑO Y ESTÉTICA (solo con tu aprobación)
---------------------------------------------------------------
- Pantalla «Hoy», vista de caso con pasos tildables, modo lectura rápida, filtros por chips.
- Presentación de 3 pasos la primera vez; guía de instalación ilustrada.
- Tamaño de letra ajustable, alto contraste, modo guardia nocturna, contraste AA.
- Imprimir/exportar un caso a PDF; imagen para compartir por WhatsApp; capturas con marco de teléfono.
- Guía de estilo (`docs/DISEÑO.md`) y lista de elementos protegidos.
- (D) Logo vectorial o con transparencia real; botón EMERGENCIA idéntico a tu referencia; permiso de uso del logo de Garrahan.
- Revisión de voseo y ortografía en toda la app.
- Texto de agradecimiento a la Fundación Garrahan: **lo define Jorge**.

---------------------------------------------------------------
## 6. PREGUNTAS PARA VOS (necesito tu respuesta)
---------------------------------------------------------------
1. Tubo endotraqueal: tu mensaje usa la misma cuenta para con y sin balón. La referencia habitual es con balón = edad/4 + 3,5 y sin balón = edad/4 + 4. ¿Es así?
2. Tu último punto del 7/11 quedó cortado («La posibilidad…»). ¿Cuál era?
3. PDF del PALS: ¿tenés autorización para incluirlo en la app? Si no, escribo los pasos con texto propio.
4. QR: ¿lo dejamos solo en Más › La app o también un acceso en la portada?

---------------------------------------------------------------
## 7. PLAN DE LOS PRÓXIMOS DÍAS
---------------------------------------------------------------
La tarea automática corre a las 07:40 y 21:40 y se desactiva sola después del 12/11. Cada corrida hace un lote chico, prueba, sube y publica versión nueva. Los cambios de diseño que pediste vos se hacen directo; el resto se muestra primero.

| Cuándo | Qué se hace |
|---|---|
| Dom 8/11 noche | Botón «Volver» en todas las pantallas; botones del mismo tamaño; sacar «Frecuentes» |
| Lun 9 mañana | Buscador predictivo: siglas («tec»), sinónimos, tildes y errores de tipeo |
| Lun 9 noche | Calculadora de leches sin decimales; Emergencias: quitar «Paro» redundante y aclarar CAB; tubo endotraqueal (si respondés la pregunta 1) |
| Mar 10 mañana | Triángulo de evaluación pediátrica (primero en HTML aparte) |
| Mar 10 noche | Emergencias paso a paso con peso (comienzo); guía ecográfica de acceso vascular; «F» de fluidos y familia con bibliografía |
| Mié 11 mañana | «Paciente actual» (peso/edad/talla) y Cards que abre en ese peso |
| Mié 11 noche | Indicaciones y cálculos: líquidos por kg y m²; contador de rescates; esqueleto de la lista de pacientes |
| Jue 12 mañana | Prompt para IAR1; enlaces directos y compartir; README y CHANGELOG |
| Jue 12 noche | Cierre: resumen final, verificación de que todo está publicado y desactivación de la tarea |

**Después del 12/11** hay que extender la tarea o seguir en sesiones manuales: revisión médica (sección 4), planilla del paciente completa, diseño y estética (sección 5), publicación automática.

**Lo que no depende de mí y conviene mover en paralelo:** Jorge y Eduardo empiecen a revisar las 87 guías; Jorge defina el texto de Garrahan; vos probar la app instalada en Android e iPhone y pasarme lo que falle.
