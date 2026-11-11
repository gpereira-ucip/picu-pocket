# Arucip · validación médica de las guías «Al recibirlo»

Lista para Jorge Selandari y Eduardo Motto (ítem 58 de `docs/PENDIENTES.md`). Están las 87 guías de Motivos de ingreso, con el mismo texto que muestra la app. **Todas son ⚕ pendientes de revisión médica** hasta que se tilden acá.

Cómo se usa:
- Guía correcta: cambiar `[ ]` por `[x]` en su título y completar «Revisó» y «Fecha».
- Guía a corregir: dejar `[ ]` y escribir el cambio en «Observaciones» (el texto de la app se edita en `js/data.js`, campo `rec`).
- No editar a mano los textos de las guías en este archivo: se generan desde `js/data.js` con `node tools/build_validacion.js`, que conserva los tildes y lo anotado. Si el texto de una guía cambia después de validada, vuelve a quedar sin tildar.
- Tildar acá no cambia nada en la app: la marca visible «validada / pendiente» en cada guía es el ítem 59, todavía sin hacer.

Estado: **0 de 87 validadas**.

A mirar con especial atención: Shock séptico (`shs`) es la única guía que trae una dosis («alícuotas de 10–20 mL/kg»), anterior a la regla de no incluir dosis: decidir si se deja, se cambia o se reemplaza por una remisión a la herramienta.

## Shock y cardiovascular (13)

### [ ] Shock séptico · `shs` · texto `503912db`
También aparece en: Infectológico.

1. Reconocelo: qPS4 y Phoenix; hipoperfusión (relleno capilar, sensorio, diuresis), lactato elevado.
2. Oxígeno, acceso vascular (intraóseo si hace falta), monitor completo.
3. Hemocultivos y lactato sin demorar el antibiótico: dar el primero dentro de la primera hora.
4. Fluidos en alícuotas de 10–20 mL/kg con reevaluación después de cada una (hepatomegalia, crepitantes, SatO₂).
5. Si no responde: vasoactivo precoz según el tipo de shock (frío o caliente), por vía central o periférica según tu protocolo.
6. Considerá hidrocortisona en shock refractario; controlá glucemia y calcio iónico.
7. Controlá el foco; reevaluá con ecocardiografía funcional y metas hemodinámicas.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Insuficiencia cardíaca / shock cardiogénico · `ic` · texto `b785df4f`

1. Sospechalo en lactante con "bronquiolitis" atípica, shock sin respuesta a fluidos, hepatomegalia, taquicardia con ritmo de galope o cianosis.
2. ECG, Rx de tórax, lactato, gases, troponina y BNP si tenés; ecocardiografía funcional a la cabecera.
3. Evitá los bolos de fluidos agresivos: si hay hipoperfusión, alícuotas pequeñas con reevaluación.
4. Soporte inotrópico según TA y perfil hemodinámico; diuréticos si hay congestión.
5. Cardiopatía ductodependiente (shock o cianosis en las primeras semanas): consultá con cardiología y considerá prostaglandina.
6. Si hay que intubar, hacelo con vasoactivos preparados: puede haber colapso hemodinámico.
7. Buscá la causa: miocarditis, miocardiopatía, cardiopatía congénita, arritmia, taponamiento.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Shock hipovolémico (deshidratación, hemorragia) · `shh` · texto `b5911eaa`

1. Reconocé el shock hipovolémico: taquicardia, relleno capilar lento, pulsos débiles, hipotensión tardía; buscá la causa (pérdidas digestivas, hemorragia, quemadura, tercer espacio).
2. Acceso vascular rápido (intraóseo si no se logra) y monitor completo; glucemia, lactato, gases e ionograma.
3. Fluidos en alícuotas con reevaluación de perfusión después de cada una; en hemorragia, hemoderivados según protocolo.
4. Trauma o dolor abdominal: eFAST para buscar líquido libre y control del sangrado.
5. Corregí glucemia y electrolitos; si no responde a la reposición, repensá el diagnóstico (séptico, cardiogénico, obstructivo).

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Miocarditis / miocardiopatía · `mio` · texto `950eb851`

1. Sospechala ante shock o insuficiencia cardíaca de inicio agudo, taquicardia desproporcionada, arritmias o elevación de troponina, a menudo tras un cuadro viral.
2. ECG, Rx de tórax, troponina, BNP, lactato y gases; ecocardiografía funcional a la cabecera.
3. Evitá los bolos de fluidos agresivos; si hay hipoperfusión, alícuotas pequeñas con reevaluación.
4. Soporte inotrópico según TA y perfil hemodinámico; monitoreo continuo del ritmo.
5. Consultá temprano con cardiología y evaluá el riesgo de ECMO con tiempo.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Cardiopatía congénita descompensada · `cch` · texto `0e962b0e`

1. Lactante con shock o cianosis en las primeras semanas: sospechá cardiopatía ductodependiente.
2. Consultá con cardiología y considerá prostaglandina; cuidado con el oxígeno y con los fluidos en exceso.
3. Ecocardiografía funcional, saturación pre y posductal, ECG.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Posoperatorio de cirugía cardíaca · `pcv` · texto `11a9c27f`
También aparece en: Posoperatorio y procedimientos.

1. Pase estructurado con cirugía y anestesia: procedimiento, circulación extracorpórea, drogas, drenajes, vía aérea.
2. Metas hemodinámicas, ritmo y marcapasos, sangrado por drenajes, lactato y saturación venosa.
3. Analgosedación y plan de extubación; vigilá bajo gasto, arritmias y taponamiento.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Arritmias (TSV, TV, bloqueos) · `arr` · texto `775ec500`

1. Distinguí paciente estable de inestable (hipotensión, mala perfusión, alteración del sensorio).
2. Inestable con pulso: cardioversión sincronizada. TSV estable: maniobras vagales o adenosina.
3. ECG de 12 derivaciones, ionograma y calcio; revisá la tabla de arritmias en Cards.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Hipertensión pulmonar y crisis · `hp` · texto `68285972`
También aparece en: Respiratorio.

1. Sospechala ante hipoxemia lábil, shock con sobrecarga derecha o descompensación con el llanto, la aspiración o la manipulación.
2. Evitá los desencadenantes: hipoxia, hipercapnia, acidosis, dolor y agitación; analgosedación adecuada para procedimientos.
3. Ecocardiografía funcional para valorar el ventrículo derecho y el septo; mantené la presión de perfusión sistémica.
4. Ventilación con PEEP y oxigenación adecuadas; óxido nítrico y vasodilatadores pulmonares según el protocolo del servicio, con cardiología.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Derrame pericárdico / taponamiento · `tap` · texto `98b897bd`

1. Sospechalo ante shock obstructivo: taquicardia, hipotensión, ingurgitación yugular, ruidos cardíacos apagados o pulso paradójico.
2. Ecografía a la cabecera (POCUS cardíaco) para confirmar el derrame y el compromiso diastólico.
3. Preparate para el drenaje (pericardiocentesis) con cardiología o cirugía; el taponamiento es una urgencia.
4. Mientras tanto, mantené la precarga con alícuotas pequeñas de fluidos y evitá la ventilación con presión positiva elevada si es posible.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Emergencia hipertensiva · `hta` · texto `dc2c7d37`
También aparece en: Renal e hidroelectrolítico.

1. Confirmá la medición con manguito de tamaño adecuado y repetila; buscá síntomas de órgano blanco (cefalea, encefalopatía, convulsiones, insuficiencia cardíaca, daño renal).
2. Monitoreo continuo de la TA, acceso vascular y laboratorio con función renal e ionograma.
3. Descenso gradual y controlado de la presión con la herramienta de hipertensión; evitá descensos bruscos.
4. Buscá la causa (renal, endocrina, fármacos, coartación) y tratala.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Anafilaxia · `ana` · texto `5e01f1c5`
También aparece en: Respiratorio.

1. Reconocela: urticaria, angioedema, sibilancias, estridor, hipotensión o vómitos tras una exposición reciente.
2. Retirá el desencadenante, posición según estado hemodinámico y oxígeno; la adrenalina intramuscular es el tratamiento de primera línea (dosis por peso en Cards y en la herramienta de anafilaxia).
3. Acceso vascular, monitor y fluidos si hay hipotensión; preparate para vía aérea difícil si hay edema de laringe.
4. Observá por riesgo de reacción bifásica y reevaluá la vía aérea con frecuencia.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Paro cardiorrespiratorio y cuidados posparo · `pcr` · texto `52d54635`
También aparece en: Neurológico.

1. Registrá el tiempo de RCP, el ritmo y las intervenciones (registro del paro).
2. Posparo: oxigenación y ventilación normales, evitar hipotensión, glucemia y temperatura controladas.
3. ECG, ecocardiografía funcional y estudio de la causa (las H y las T).
4. Valorá el pronóstico neurológico y comunicá a la familia con claridad.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Kawasaki con shock / PIMS · `kaw` · texto `86794aec`
También aparece en: Infectológico, Hematología y oncología.

1. Sospechalo en fiebre persistente con exantema, conjuntivitis, mucositis y adenopatías, o shock con inflamación multisistémica (PIMS).
2. Valorá función cardíaca: ECG, troponina, BNP y ecocardiografía (descartá dilatación o aneurismas coronarios).
3. Laboratorio inflamatorio, hemocultivos y descartá sepsis o síndrome de shock tóxico; vigilá el síndrome de activación macrofágica.
4. Tratamiento inmunomodulador y soporte hemodinámico según el protocolo del servicio, con reumatología e infectología.

- Revisó: 
- Fecha: 
- Observaciones: 

## Respiratorio (11)

### [ ] Bronquiolitis grave / IRAB en lactante · `bro` · texto `25fb4d6d`

1. Aspiración nasal, posición, oxígeno para la SatO₂ objetivo y soporte nutricional.
2. Alto flujo o VNI si hay aumento del trabajo respiratorio; intubación si falla o hay apneas.
3. Pensá en cardiopatía o miocarditis si la evolución es atípica (ecografía).

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Crisis asmática grave / estado asmático · `asm` · texto `bd222882`

1. Broncodilatadores seriados, corticoide sistémico y sulfato de magnesio según protocolo.
2. Evitá intubar si es posible; si hay que ventilar, tiempos espiratorios largos y vigilá atrapamiento aéreo y neumotórax.
3. Controlá potasio y lactato (por salbutamol).

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Neumonía grave y complicada (derrame, empiema) · `neu` · texto `de5e96ae`
También aparece en: Infectológico.

1. ABC: trabajo respiratorio, SatO₂, sensorio y signos de sepsis.
2. Rx de tórax y ecografía pulmonar para valorar consolidación, derrame y neumotórax.
3. Derrame paraneumónico/empiema: evaluá drenaje (checklist de tubo de avenamiento) y avisá a cirugía.
4. Hemocultivos y antibiótico según tu protocolo y epidemiología local; escalá soporte (alto flujo, VNI, ventilación) según respuesta.
5. Si la ventilación es difícil, aplicá las estrategias de PARDS.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] SDRA pediátrico (PARDS) · `sdr` · texto `e27a38fa`

1. Confirmá criterios de PARDS y buscá la causa (neumonía, sepsis, aspiración, trauma).
2. Ventilación protectora: volumen corriente y presiones limitadas, PEEP según la herramienta de PEEP; evitá la hipercapnia extrema solo si el sensorio y la presión intracraneana lo permiten.
3. Valorá oxigenación con gasometría y los índices de la herramienta de PARDS.
4. Sedación y asincronías: revisá analgosedación; bloqueo neuromuscular solo si es necesario.
5. Rescates: reclutamiento, decúbito prono, óxido nítrico o VAFO según el protocolo del servicio; evaluá riesgo de ECMO con tiempo.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Insuficiencia respiratoria aguda · `ira` · texto `6511188f`

1. ABC: trabajo respiratorio, SatO₂, FR, sensorio y fatiga.
2. Oxígeno y soporte escalonado (alto flujo, VNI) con reevaluación frecuente; no demores la intubación si hay fatiga o deterioro.
3. Gasometría y Rx de tórax; ecografía pulmonar para neumotórax, derrame o consolidación.
4. Buscá la causa (bronquiolitis, asma, neumonía, edema, obstrucción) y tratala.
5. Si vas a intubar: checklist y secuencia de intubación rápida con la medicación preparada.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Obstrucción de vía aérea alta (crup, epiglotitis, cuerpo extraño) · `vaa` · texto `b4627d78`

1. Mantené al niño tranquilo y en posición de confort; no fuerces maniobras que lo agiten.
2. Crup: adrenalina nebulizada y corticoide.
3. Preparate para vía aérea difícil con equipo de ORL o quirúrgico disponible.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Neumotórax / derrame pleural / hemotórax · `pnt` · texto `e2eb3b53`
También aparece en: Trauma, quemados y ambiente.

1. Neumotórax a tensión: compromiso respiratorio y hemodinámico súbito; es una urgencia clínica, no esperes la radiografía.
2. Ecografía pulmonar a la cabecera para confirmar neumotórax o derrame; Rx de tórax si el paciente está estable.
3. Descompresión y colocación de tubo de avenamiento según el checklist; en hemotórax masivo, hemoderivados y cirugía.
4. Vigilá el pulmón expandido, el débito y las pérdidas por el drenaje.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Tos convulsa (coqueluche) grave · `tos` · texto `fb92b8d7`
También aparece en: Infectológico.

1. Aislamiento respiratorio. Apneas y cianosis en lactantes pequeños.
2. La hiperleucocitosis y la hipertensión pulmonar indican mala evolución: consultá temprano.
3. Soporte ventilatorio precoz si hay apneas repetidas.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Falla de extubación / vía aérea difícil · `fex` · texto `a0cfab79`

1. Anticipá: identificá los factores de riesgo (obstrucción alta, debilidad, secreciones, sedación residual) y preparate antes de extubar.
2. Si falla, valorá estridor posextubación, fatiga o acumulación de secreciones; soporte no invasivo (alto flujo o VNI) según el caso.
3. Reintubación: tené listo el equipo de vía aérea difícil, la secuencia de intubación rápida y un plan B (checklist de intubación).
4. Pedí ayuda temprano (ORL o anestesia) si se anticipa una vía aérea difícil.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Traqueostomía o ventilación domiciliaria descompensada · `trq` · texto `591f5d25`
También aparece en: Crónicos, paliativos y otros.

1. Obstrucción de cánula: aspirar, cambiar la cánula y oxigenar por boca o estoma.
2. Conocé el modelo de cánula, el respirador de base y los parámetros habituales.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Enfermedad pulmonar crónica / fibrosis quística agudizada · `epc` · texto `ca9678aa`

1. Conocé la línea de base: saturación habitual, soporte domiciliario y última agudización.
2. Oxigenoterapia con objetivos de SatO₂ definidos para el paciente; soporte escalonado (alto flujo, VNI) con reevaluación frecuente.
3. Rx de tórax y ecografía pulmonar; cultivos de esputo y tratamiento antimicrobiano según antecedentes microbiológicos.
4. Coordiná con neumonología y evaluá la nutrición y la fisioterapia respiratoria.

- Revisó: 
- Fecha: 
- Observaciones: 

## Infectológico (7)

### [ ] Sepsis sin shock · `sep` · texto `f1bb227d`

1. Aplicá qPS4 y Phoenix; buscá hipoperfusión y disfunción orgánica.
2. Hemocultivos y lactato; antibiótico precoz según el foco sospechado.
3. Fluidos solo si hay signos de hipovolémia, con reevaluación; vigilá la evolución a shock.
4. Controlá el foco y reevaluá en pocas horas con el score de disfunción (PELOD).

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Meningitis / meningoencefalitis · `men` · texto `71bf2474`
También aparece en: Neurológico.

1. Hemocultivos y antibiótico precoz sin esperar la punción lumbar si hay inestabilidad.
2. Neuroimagen antes de la punción si hay signos de hipertensión endocraneana o focalidad.
3. Corticoide según agente sospechado; control de la hipertensión endocraneana.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Partes blandas: fascitis necrotizante / shock tóxico · `pbl` · texto `fac9b610`

1. Sospechá fascitis necrotizante ante dolor desproporcionado, rápida progresión y toxicidad sistémica.
2. Manejo de shock, cultivos y lactato; antibiótico precoz según el protocolo del servicio.
3. Aviso inmediato a cirugía: el control quirúrgico del foco no se demora.
4. En shock tóxico, vasoactivos según el tipo de shock y revisión de calcio, glucemia y función renal.
5. Marcá el borde del eritema para seguir la progresión.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Inmunocomprometido con fiebre / neutropenia febril · `inm` · texto `71148624`
También aparece en: Hematología y oncología.

1. Tratalo como sepsis hasta demostrar lo contrario: apariencia, perfusión, TA, lactato y glucemia.
2. Hemocultivos (incluida la vía central, si la tiene) y antibiótico precoz según el protocolo del servicio; no esperes el recuento de neutrófilos.
3. Hemograma, función renal, hepática, ionograma y coagulación; Rx de tórax y búsqueda de foco (perianal, mucosas, catéter, senos).
4. Aislamiento protector y hemoderivados irradiados y leucorreducidos si corresponde.
5. Sospechá HLH si hay fiebre persistente, citopenias y hepatoesplenomegalia.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Infección asociada a dispositivos (catéter, ARM) · `cat` · texto `25b4cc99`

1. Hemocultivos periféricos y de la vía sospechada antes del antibiótico, sin demorar el primero.
2. Evaluá si el dispositivo se retira o se cambia (catéter, tubo, sonda) y controlá el foco.
3. Lactato, hemograma y reactantes; Rx de tórax o ecografía según el sitio.
4. Aislamiento según el germen y la epidemiología local.
5. Ajustá el tratamiento con los cultivos.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Dengue grave, hantavirus y otras endemias · `end` · texto `3d8f30c6`

1. Reconocé fuga capilar y shock con hemoconcentración (dengue); cuadro respiratorio rápido con shock (hantavirus).
2. Fluidos con cautela y reevaluación frecuente; hemoderivados solo si hay sangrado grave.
3. Notificación obligatoria y aislamiento según el agente.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Tétanos / botulismo · `tet` · texto `e6b85d50`
También aparece en: Neurológico.

1. Aislá estímulos (luz, ruido, manipulación); asegurá la vía aérea de forma temprana si hay espasmos o compromiso bulbar.
2. Tétanos: control de la puerta de entrada y manejo de espasmos y disautonomía; botulismo: vigilá la función ventilatoria y la deglución.
3. Soporte ventilatorio si hay falla respiratoria; analgosedación y relajación según el protocolo del servicio.
4. Notificación obligatoria; consultá con infectología y toxicología por antitoxina o inmunoglobulina.

- Revisó: 
- Fecha: 
- Observaciones: 

## Neurológico (10)

### [ ] Estado epiléptico · `ee` · texto `31651472`

1. Asegurá la vía aérea y la oxigenación; glucemia ya.
2. Benzodiacepina de primera línea, luego segunda línea según el protocolo de estado epiléptico.
3. Estado refractario: sedación continua e intubación con monitoreo electroencefalográfico.
4. Buscá la causa: infección, metabólica, tóxica, estructural.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Traumatismo craneoencefálico grave · `tec` · texto `c9ba3f82`
También aparece en: Trauma, quemados y ambiente.

1. ABCDE con control de columna cervical; evitá hipoxia e hipotensión.
2. Glasgow y pupilas seriados; si Glasgow ≤8, asegurá la vía aérea con secuencia de intubación rápida.
3. Cabecera a 30°, cabeza en línea media, normotermia, analgosedación y normocapnia; sodio hipertónico según la herramienta si hay signos de herniación.
4. TC de cráneo cuando esté estable y neurocirugía precoz si hay lesión quirúrgica.
5. Descartá lesiones asociadas (eFAST) y pensá en maltrato si el mecanismo no concuerda.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Hipertensión endocraneana / coma de causa no traumática · `hte` · texto `d6f73d04`

1. Glasgow, pupilas, patrón respiratorio, TA y FC (tríada de Cushing).
2. Glucemia inmediata; protegé la vía aérea si Glasgow ≤8.
3. Cabecera a 30°, evitá hipoxia, hipotensión, hipercapnia y fiebre; tratamiento osmolar según la herramienta de sodio.
4. Buscá la causa (infecciosa, metabólica, tóxica, vascular, convulsiva) y obtené imágenes cuando sea seguro.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] ACV / hemorragia intracraneana · `acv` · texto `98127b8c`

1. Reconocé déficit neurológico focal agudo, cefalea intensa o alteración del sensorio; protegé la vía aérea si el Glasgow es ≤8.
2. Glucemia inmediata; neuroimagen urgente (TC o RM) y consulta con neurología y neurocirugía.
3. Evitá hipoxia, hipotensión, hipertermia e hiperglucemia; cabecera a 30°.
4. Corregí coagulopatía y plaquetopenia según la causa y valorá la hipertensión endocraneana.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Hidrocefalia / disfunción de válvula · `hid` · texto `52a6e606`

1. Sospechala ante cefalea, vómitos, somnolencia, mirada en sol poniente o abombamiento de fontanela; en portador de válvula, pensá en disfunción o infección.
2. Glasgow y pupilas seriados; vigilá la tríada de Cushing.
3. Neuroimagen urgente y aviso a neurocirugía; evitá la hipercapnia y la hipoxia.
4. Descartá infección del sistema derivativo (fiebre, signos inflamatorios).

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Posoperatorio neuroquirúrgico / tumor del SNC · `nqx` · texto `260b240f`
También aparece en: Posoperatorio y procedimientos.

1. Pase con neurocirugía: lesión, resección, drenajes, límites de TA y de cabecera.
2. Examen neurológico basal con Glasgow y pupilas; cualquier cambio exige TC y aviso inmediato.
3. Evitá hipotensión, hipoxia, hipo o hipercapnia, hiponatremia y fiebre.
4. Controlá el sodio y la diuresis (sospechá diabetes insípida o pérdida de sal) y la glucemia.
5. Analgesia y sedación que permitan reexaminar; cabecera a 30°.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Guillain-Barré / enfermedad neuromuscular · `gbs` · texto `94fdc28e`

1. Valorá función ventilatoria (capacidad vital, tos, deglución) y disautonomía.
2. Intubación temprana si hay deterioro respiratorio progresivo.
3. Cuidado con la succinilcolina en enfermedad neuromuscular.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Encefalopatía hipóxico-isquémica / posparo · `hie` · texto `ab2c5248`
También aparece en: Shock y cardiovascular.

1. ABC y soporte hemodinámico: evitá hipotensión, hipoxia, hipo o hipercapnia.
2. Glucemia, gasometría, lactato, ionograma y calcio.
3. Examen neurológico basal con pupilas y Glasgow; registrá la sedación recibida.
4. Controlá la temperatura según el protocolo del servicio y evitá la fiebre.
5. Vigilá convulsiones (considerá EEG) y tratá las crisis; cabecera a 30°.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Muerte encefálica y procuración de órganos · `me` · texto `511aa64c`
También aparece en: Crónicos, paliativos y otros.

1. Confirmá las precondiciones antes de evaluar: normotermia, TA adecuada, sin sedantes ni bloqueantes que interfieran y causa conocida de lesión catastrófica.
2. Examen neurológico completo: coma, pupilas, reflejos de tronco y test de apnea según el protocolo institucional y la normativa vigente.
3. Notificá al coordinador de procuración y al equipo de trasplante según la normativa local; no demores el aviso.
4. Mantené el soporte del potencial donante: oxigenación, estabilidad hemodinámica, control de temperatura, sodio, glucemia y diuresis.
5. Comunicate con la familia de forma clara y por separado del pedido de donación; registrá cada paso en la historia clínica.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Delirium / agitación · `del` · texto `6ea05b49`

1. Descartá primero causas urgentes: hipoxia, hipoglucemia, dolor, retención urinaria, alteraciones metabólicas, infección del SNC y convulsiones.
2. Evaluá dolor, sedación y delirium con las escalas del servicio y repetí la evaluación en cada turno.
3. Revisá la medicación: sedantes (en especial benzodiacepinas), anticolinérgicos y abstinencia o suspensión reciente de fármacos.
4. Medidas no farmacológicas: ciclo día-noche, reorientación, presencia de los padres, lentes y audífonos, sueño protegido y movilización temprana.
5. Protegé dispositivos y al paciente evitando la contención física siempre que sea posible; reevaluá a diario la necesidad de cada fármaco.

- Revisó: 
- Fecha: 
- Observaciones: 

## Trauma, quemados y ambiente (9)

### [ ] Politraumatismo · `pol` · texto `3024542a`

1. ABCDE con control de la columna cervical.
2. eFAST ante inestabilidad; control de hemorragia y hemoderivados según protocolo.
3. Analgesia temprana, prevención de hipotermia y estudios por imágenes según estado.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Trauma de tórax o abdomen · `tto` · texto `3f427117`

1. ABCDE con control cervical; eFAST apenas lo permita la estabilidad.
2. Neumotórax a tensión o hemotórax masivo: decisión clínica inmediata, sin esperar la radiografía; tené listo el tubo de avenamiento.
3. Dos accesos de buen calibre (intraóseo si no se logra), grupo y reserva, hemoderivados según protocolo.
4. Abdomen: reevaluaciones seriadas, eFAST repetido y aviso temprano a cirugía.
5. Analgesia adecuada y prevención de hipotermia.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Trauma raquimedular · `trm` · texto `6b1db0d5`
También aparece en: Neurológico.

1. Inmovilización de columna completa desde el primer momento; movilizá en bloque.
2. ABCDE: vía aérea con control cervical; sospechá shock neurogénico (hipotensión con bradicardia) y diferenciá del shock hemorrágico.
3. Examen neurológico motor y sensitivo con nivel de lesión documentado, tono del esfínter y reflejos; repetilo para detectar progresión.
4. Mantené perfusión medular: evitá hipotensión e hipoxia; vigilá la ventilación según el nivel de lesión (cervical alto: riesgo de falla respiratoria).
5. Interconsulta con neurocirugía o traumatología de columna; cuidado de piel, vejiga e íleo desde el ingreso.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Recepción del paciente quemado · `que` · texto `e3127552`

1. Pase de quien traslada: hora y mecanismo de la quemadura, tiempo en lugar cerrado, fluidos y analgesia ya dados.
2. A: buscá lesión por inhalación (hollín, voz ronca, quemaduras faciales, esputo carbonáceo); asegurá la vía aérea de forma precoz si hay compromiso, por el edema progresivo.
3. B: oxígeno al 100% si hay sospecha de monóxido de carbono; vigilá la restricción por quemaduras circunferenciales de tórax.
4. C: dos accesos (intraóseo si no se logra); calculá la superficie quemada (sin contar el eritema) y reanimá con fluidos según Parkland o Galveston, titulando por diuresis.
5. D: analgesia adecuada y glucemia.
6. E: retirá ropa y joyas, cubrí con apósitos limpios y secos y evitá la hipotermia.
7. Registrá peso, talla y antecedentes; vacuna antitetánica; pensá en maltrato si el patrón no concuerda; definí la derivación a centro de quemados.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Inhalación de humo / monóxido de carbono / cianuro · `inh` · texto `c076e293`
También aparece en: Toxicológico.

1. Oxígeno al 100% con máscara con reservorio desde el inicio; protegé la vía aérea ante quemadura facial, hollín, estridor, voz ronca o alteración del sensorio.
2. La saturación por oxímetro puede ser engañosa: confirmá con gasometría y cooximetría.
3. Gasometría arterial, lactato, glucemia, ECG y radiografía de tórax; un lactato alto con acidosis sugiere cianuro.
4. Con sospecha de cianuro (incendio en recinto cerrado, shock, acidosis láctica, coma) consultá de inmediato al centro de toxicología sobre el antídoto.
5. Buscá quemaduras asociadas y lesión por inhalación; vigilá broncoespasmo, edema de vía aérea y secuelas neurológicas tardías.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Ahogamiento (sumersión) · `aho` · texto `a50bee20`
También aparece en: Respiratorio.

1. Priorizá la reanimación: ventilación y oxigenación primero; en paro seguí la secuencia de reanimación.
2. Sospechá lesión de columna cervical solo si hay mecanismo compatible (zambullida, trauma).
3. Hipotermia: medí la temperatura central y recalentá según el protocolo; no suspendas la reanimación hasta lograr normotermia.
4. Valorá el pulmón: radiografía, gasometría y necesidad de PEEP o ventilación protectora por riesgo de SDRA.
5. Observación prolongada aun si luce bien: el compromiso pulmonar puede aparecer horas después; cuidado neurológico posparo si corresponde.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Golpe de calor / hipotermia / electrocución · `gol` · texto `d17f8607`

1. ⚕ Pendiente de revisión médica. Identificá el mecanismo: calor ambiental o esfuerzo, enfriamiento prolongado o paso de corriente.
2. Vía aérea, ventilación y circulación primero; si hay paro, seguí la secuencia de reanimación y no lo des por terminado hasta normalizar la temperatura en hipotermia.
3. Temperatura central medida; en golpe de calor, enfriamiento activo inmediato y vigilancia de sensorio, convulsiones y falla multiorgánica.
4. En hipotermia, recalentamiento gradual, movilización suave por riesgo de arritmias y monitor continuo.
5. En electrocución, ECG y monitoreo del ritmo; buscá lesiones de entrada y salida, rabdomiólisis, trauma asociado y quemaduras.
6. Glucemia, gases, ionograma, función renal, CK y lactato.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Mordedura o picadura (ofidios, alacranes, arañas) · `ani` · texto `b7d3d7e9`
También aparece en: Toxicológico.

1. ⚕ Pendiente de revisión médica. Averiguá el animal o la zona geográfica, la hora del accidente y la evolución desde entonces.
2. Evaluá ABC; vigilá insuficiencia respiratoria, shock, alteraciones neurológicas y sangrado.
3. Marcá el borde del edema y la hora; evitá torniquetes, incisiones o aspiración local.
4. Coagulograma, hemograma, función renal, CK y ionograma, repetidos según evolución.
5. Contactá precozmente con el centro toxicológico para definir el antiveneno disponible y la necesidad de uso.
6. Analgesia, profilaxis antitetánica y vigilancia de compartimento y de infección de partes blandas.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Sospecha de maltrato infantil · `mal` · texto `66f52488`
También aparece en: Neurológico.

1. Tratá primero la urgencia clínica (ABC, lesiones graves) sin demorarla por la sospecha.
2. Registrá con detalle y con las palabras textuales de quien relata: la historia, el tiempo transcurrido y las inconsistencias con las lesiones.
3. Examen físico completo con descripción y fotografía de lesiones según el protocolo del hospital; buscá lesiones en distintas etapas de evolución.
4. Pensá en trauma craneano abusivo ante lactantes con alteración del sensorio, convulsiones o apnea sin causa clara; valorá neuroimagen y fondo de ojo según el servicio.
5. Activá el protocolo institucional: equipo de protección de la infancia, trabajo social y comunicación a la autoridad correspondiente; asegurá la protección del niño.

- Revisó: 
- Fecha: 
- Observaciones: 

## Metabólico y endocrino (6)

### [ ] Cetoacidosis diabética · `cad` · texto `7caf8ba4`

1. Glucemia, gasometría, cetonas, ionograma (con potasio) y función renal al ingreso; pesá al paciente.
2. Evaluá el estado de conciencia y el grado de deshidratación; evitá bolos agresivos de fluidos.
3. Seguí el protocolo de cetoacidosis de la herramienta; la reposición de potasio es clave y la corrección debe ser gradual.
4. Monitoreo neurológico estricto: cefalea, deterioro del sensorio o bradicardia deben alertarte de edema cerebral.
5. Glucemia horaria y ionograma y gases seriados.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Estado hiperosmolar hiperglucémico · `ehh` · texto `919e96a5`

1. ⚕ Pendiente de revisión médica. Es una emergencia con deshidratación profunda y osmolaridad muy alta; suele coexistir con otra enfermedad.
2. ABC, acceso vascular y monitor; evaluá sensorio y perfusión.
3. Glucemia, gases, ionograma con sodio corregido, osmolaridad, función renal y cetonas.
4. Reposición lenta y gradual de volumen y osmolaridad, con controles seriados de glucemia, sodio y neurológicos, por riesgo de edema cerebral.
5. Vigilá potasio, fósforo y magnesio; buscá trombosis y rabdomiólisis.
6. Tratá el desencadenante (infección, fármacos) y consultá con endocrinología.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Hipoglucemia grave · `hip` · texto `bf94ce53`

1. Confirmá con glucemia capilar y tomá muestra crítica (glucemia, cetonas, insulina, cortisol) antes de tratar si es posible, sin demorarte.
2. Tratá de inmediato según la herramienta de hipoglucemia y repetí la glucemia hasta estabilizarla.
3. Buscá la causa: ayuno, sepsis, hiperinsulinismo, déficit hormonal o error congénito del metabolismo.
4. Aseguraté un aporte continuo de glucosa y controlá el sensorio.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Descompensación de error congénito del metabolismo · `ecm` · texto `fd7a2b96`

1. ⚕ Pendiente de revisión médica. Sospechalo ante deterioro agudo sin causa clara, vómitos, letargo, convulsiones u olor inusual, con antecedente familiar o diagnóstico previo.
2. ABC y acceso vascular; glucemia inmediata y control del sensorio.
3. Toma de muestras críticas antes de intervenir cuando sea posible: amonio, gases, lactato, cetonas, ionograma, función hepática y aminoácidos/ácidos orgánicos.
4. Suspendé el aporte proteico y evitá el ayuno: aporte energético con glucosa según el plan del paciente.
5. Consultá de inmediato con metabolismo y seguí su carta de emergencia, si existe.
6. Evaluá necesidad de depuración extrarrenal precoz si el amonio es muy alto o hay deterioro neurológico.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Insuficiencia suprarrenal / crisis · `sup` · texto `1580292c`

1. ⚕ Pendiente de revisión médica. Sospechala ante shock refractario, hipoglucemia, hiponatremia o hiperkalemia, o antecedente de corticoides crónicos.
2. ABC, acceso vascular y monitor; glucemia inmediata.
3. Tomá cortisol y ACTH sin demorar el tratamiento si podés, más ionograma y gases.
4. No retrases la reposición de corticoides ante sospecha clínica; reposición de volumen con reevaluación.
5. Corregí hipoglucemia y electrolitos; buscá el desencadenante (infección, cirugía, estrés).
6. Consultá con endocrinología.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Trastornos graves del sodio · `nat` · texto `735c21b8`
También aparece en: Renal e hidroelectrolítico.

1. Confirmá el valor y la velocidad de instalación; evaluá el estado de volemia y el sensorio.
2. Convulsiones o coma: tratamiento inmediato según el protocolo del servicio.
3. Corrección gradual, con ionograma seriado y control de la velocidad de cambio.
4. Diuresis, balance y osmolaridad urinaria; buscá la causa (diabetes insípida, SIADH, pérdida de sal, iatrogenia).
5. Vigilá síntomas neurológicos durante la corrección.

- Revisó: 
- Fecha: 
- Observaciones: 

## Renal e hidroelectrolítico (5)

### [ ] Lesión renal aguda · `lra` · texto `0a8327b3`

1. Balance estricto, diuresis horaria, peso diario y función renal seriada.
2. Ionograma y gasometría; ECG ante hiperkalemia.
3. Descartá causa prerrenal (hipovolemia), renal y posrenal (obstrucción, ecografía).
4. Suspendé nefrotóxicos y ajustá las dosis al filtrado glomerular; valorá indicaciones de diálisis.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Síndrome urémico hemolítico · `suh` · texto `7275f3a5`
También aparece en: Hematología y oncología.

1. Triada: anemia hemolítica, plaquetopenia y lesión renal; buscá antecedente de diarrea.
2. Balance estricto, diuresis, peso, ionograma (potasio), gasometría y TA.
3. Evitá hipovolemia y sobrecarga de fluidos; evitá nefrotóxicos.
4. Hemoderivados sólo con indicación clara; controlá TA, hemoglobina y plaquetas.
5. Avisá temprano a nefrología por diálisis; vigilá el compromiso neurológico.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Hiperkalemia grave · `hk` · texto `59946207`

1. ECG ya; si hay cambios, calcio endovenoso.
2. Desplazamiento intracelular (insulina con glucosa, salbutamol, bicarbonato si hay acidosis) y eliminación.
3. Suspendé aportes y fármacos que elevan el potasio; evaluá terapia de reemplazo renal.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Síndrome nefrótico complicado · `nef` · texto `c89b764f`

1. ⚕ Pendiente de revisión médica. Identificá la complicación: infección, trombosis, hipovolemia, edema grave o insuficiencia renal.
2. Evaluá volumen real: el paciente puede estar edematoso pero con hipovolemia intravascular.
3. Peso, balance estricto, presión arterial, albúmina, ionograma, función renal y proteinuria.
4. Vigilá peritonitis, sepsis y trombosis; considerá ecografía y Doppler según clínica.
5. Cuidado con los diuréticos y los fluidos: reevaluá perfusión antes y después de cada decisión.
6. Consultá con nefrología.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Rabdomiólisis · `rab` · texto `cb241e5e`
También aparece en: Trauma, quemados y ambiente.

1. ⚕ Pendiente de revisión médica. Sospechala ante orina oscura, dolor o debilidad muscular, trauma, aplastamiento, convulsiones prolongadas, esfuerzo extremo, fármacos o tóxicos.
2. ABC, acceso vascular y monitor con ECG: la hiperkalemia es la complicación más rápida y grave.
3. Pedí CK, ionograma, calcio, fósforo, urea, creatinina, gases, lactato y sedimento urinario.
4. Asegurá volumen y diuresis con balance estricto; reevaluá congestión y perfusión en cada paso.
5. Vigilá hiperkalemia, hipocalcemia, acidosis y síndrome compartimental (pulsos, dolor, tensión de la masa muscular).
6. Buscá y tratá la causa; evitá fármacos nefrotóxicos.
7. Consultá con nefrología si la diuresis cae o los electrolitos no se controlan.

- Revisó: 
- Fecha: 
- Observaciones: 

## Digestivo, hepático y nutrición (7)

### [ ] Falla hepática aguda · `fha` · texto `c6d1b1d7`

1. Glucemia seriada (riesgo de hipoglucemia), coagulación, amoníaco, función hepática e ionograma.
2. Valorá el grado de encefalopatía y la hipertensión endocraneana; cabecera a 30° y evitá la hiponatremia.
3. Tratá la causa si se identifica (tóxica, viral, autoinmune, metabólica) y evitá fármacos hepatotóxicos.
4. Consultá temprano con el centro de trasplante hepático.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Hemorragia digestiva · `hda` · texto `8df6dcba`
También aparece en: Hematología y oncología.

1. Evaluá la inestabilidad hemodinámica y el volumen perdido; dos accesos vasculares y monitor.
2. Hemograma, coagulación, grupo y factor; reservá y transfundí según el protocolo.
3. Protección de la vía aérea si hay hematemesis masiva o alteración del sensorio.
4. Consultá con gastroenterología para endoscopía y descartá hipertensión portal o coagulopatía.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Abdomen agudo / posoperatorio abdominal · `abd` · texto `2a2335c6`
También aparece en: Posoperatorio y procedimientos.

1. ⚕ Pendiente de revisión médica. Definí si es abdomen agudo previo a la cirugía o posoperatorio, y la hora y el tipo de procedimiento.
2. ABC, acceso vascular y monitor; buscá signos de shock o sepsis (taquicardia, mala perfusión, lactato elevado).
3. Examen abdominal seriado por la misma persona: distensión, dolor, defensa, ruidos y deposiciones.
4. Estudios guiados por la clínica: laboratorio, lactato, imágenes y ecografía a la cabecera.
5. Descompresión gástrica y ayuno según indicación quirúrgica; reposición de líquidos y electrolitos con reevaluación.
6. Analgesia adecuada que no enmascare los signos de alarma.
7. Vigilá presión intraabdominal, dehiscencia, fuga de anastomosis y sangrado.
8. Comunicación estrecha con cirugía; el deterioro obliga a reevaluar de inmediato.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Pancreatitis aguda grave · `pan` · texto `f7537745`

1. ⚕ Pendiente de revisión médica. Confirmá el diagnóstico y buscá la causa (biliar, medicamentosa, metabólica, traumática, infecciosa).
2. ABC, acceso vascular y monitor; reconocé signos de shock o falla orgánica.
3. Pedí amilasa y lipasa, hemograma, función hepática y renal, calcio, triglicéridos, glucemia y lactato.
4. Reposición de volumen cuidadosa con reevaluación seriada; las pérdidas al tercer espacio pueden ser grandes.
5. Analgesia efectiva y control de náuseas; evitá el ayuno prolongado, la nutrición enteral precoz es lo preferible según tolerancia.
6. Vigilá hipocalcemia, hiperglucemia, dificultad respiratoria, falla renal y síndrome compartimental abdominal.
7. Ecografía y, si hace falta, otras imágenes para complicaciones o causa biliar.
8. Consultá con gastroenterología y cirugía.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Enterocolitis necrotizante / obstrucción intestinal · `nec` · texto `35bf302c`

1. ⚕ Pendiente de revisión médica. Sospechala ante distensión, intolerancia alimentaria, residuo bilioso, sangre en heces o deterioro en un recién nacido o lactante de riesgo.
2. ABC, acceso vascular y monitor; buscá shock y sepsis.
3. Suspendé la vía oral y descomprimí con sonda gástrica abierta.
4. Pedí hemograma, gases, lactato, ionograma, coagulación y hemocultivo; radiografía de abdomen seriada y ecografía.
5. Alerta máxima ante neumoperitoneo, gas en la vena porta, asas fijas o peritonitis: avisá a cirugía de inmediato.
6. Reposición de volumen, soporte hemodinámico y respiratorio según necesidad; antibióticos según el protocolo del servicio.
7. En obstrucción intestinal, pensá en vólvulo y malrotación como urgencia quirúrgica.
8. Examen abdominal seriado y balance estricto.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Desnutrición grave y síndrome de realimentación · `des` · texto `eb2b1efb`

1. ⚕ Pendiente de revisión médica. El riesgo es el síndrome de realimentación: aparece al iniciar o aumentar el aporte calórico, con caída de fósforo, potasio y magnesio.
2. ABC, monitor y acceso vascular; buscá hipoglucemia, hipotermia, infección oculta y deshidratación.
3. Antes de alimentar: glucemia, ionograma, fósforo, magnesio, calcio, función renal y ECG.
4. Corregí los electrolitos con control seriado; la reposición de líquidos debe ser prudente por el riesgo de sobrecarga cardíaca.
5. Iniciá el aporte nutricional de forma gradual, con aumento progresivo y supervisión de nutrición, vía enteral cuando sea posible.
6. Vigilá arritmias, edema, insuficiencia cardíaca, debilidad respiratoria y alteraciones del sensorio durante los primeros días.
7. Buscá y tratá infecciones y déficits de vitaminas y oligoelementos según el protocolo del servicio.
8. Consultá con nutrición y trabajo social.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Soporte nutricional del paciente crítico · `nut` · texto `b99c4108`

1. ⚕ Pendiente de revisión médica. Evaluá el estado nutricional previo, la gravedad de la enfermedad y la vía disponible.
2. Peso, talla, estado de hidratación y balance; registrá antropometría de base.
3. Preferí la vía enteral precoz si el paciente está hemodinámicamente estable; la parenteral si no es posible o es insuficiente.
4. Definí con nutrición los objetivos de energía y proteínas, y sostenelos en el tiempo; revisalos con la evolución.
5. Controlá glucemia, triglicéridos, electrolitos, fósforo y función hepática; evitá tanto la sobrealimentación como el déficit.
6. Vigilá tolerancia digestiva, residuo, distensión y deposiciones; ajustá según la clínica.
7. Cuidados de la sonda o del acceso central para prevenir infecciones.
8. Reevaluá a diario el plan con el equipo de nutrición.

- Revisó: 
- Fecha: 
- Observaciones: 

## Hematología y oncología (6)

### [ ] Síndrome de lisis tumoral · `lis` · texto `5173e4bd`

1. Identificá al paciente de riesgo (leucemia o linfoma de alta carga, masa voluminosa) y monitoreo continuo.
2. Laboratorio seriado: potasio, calcio, fósforo, ácido úrico, LDH y creatinina; ECG ante hiperkalemia.
3. Hidratación adecuada y control estricto de la diuresis y del balance.
4. Tratá las alteraciones electrolíticas y evaluá terapia de reemplazo renal con nefrología; coordiná con oncología.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Masa mediastínica / compresión de la vía aérea · `mas` · texto `241f4b56`
También aparece en: Respiratorio.

1. No sedes ni acuestes al paciente sin un plan de vía aérea: riesgo de colapso.
2. Posición de confort, ecografía y estudios con el paciente despierto cuando sea posible.
3. Coordiná con anestesia, oncología y cirugía antes de cualquier procedimiento.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Hemorragia y coagulopatía / CID · `cid` · texto `34266e2b`

1. Buscá y tratá la causa (sepsis, trauma, tumor, hepatopatía); control del sangrado activo.
2. Hemograma, tiempos de coagulación, fibrinógeno y dímero D seriados.
3. Hemoderivados guiados por laboratorio y clínica según el protocolo (herramienta de transfusión).
4. Evitá procedimientos invasivos innecesarios y consultá con hematología.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Anemia grave / crisis drepanocítica · `ane` · texto `4d7bf3c1`

1. Evaluá hemodinamia, oxigenación y causa (hemólisis, sangrado, secuestro, aplasia); laboratorio con reticulocitos y grupo.
2. Transfusión según umbrales y protocolo del servicio; en drepanocitosis, cuidado con la sobretransfusión y con la hiperviscosidad.
3. Crisis drepanocítica: analgesia temprana y adecuada, hidratación, oxígeno si hay hipoxemia y vigilancia de síndrome torácico agudo.
4. Consultá con hematología.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Síndrome hemofagocítico (HLH) · `hlh` · texto `3a672d40`
También aparece en: Infectológico.

1. ⚕ Pendiente de revisión médica. Sospechalo ante fiebre persistente, citopenias, hepatoesplenomegalia, hiperferritinemia y deterioro multiorgánico sin causa clara.
2. ABC, acceso vascular y monitor; tratá el shock y la falla respiratoria como en cualquier crítico.
3. Pedí hemograma, ferritina, triglicéridos, fibrinógeno, coagulación, función hepática, LDH y estudios infecciosos.
4. Buscá el desencadenante (infección, enfermedad reumática, neoplasia) sin demorar la consulta.
5. Vigilá sangrado, coagulopatía, compromiso neurológico y falla multiorgánica.
6. Consultá de inmediato con hematología, y con reumatología e infectología según el contexto; el tratamiento específico lo define el servicio.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Complicaciones de trasplante de médula ósea · `tph` · texto `fd441499`
También aparece en: Posoperatorio y procedimientos.

1. ⚕ Pendiente de revisión médica. Precisá el día desde el trasplante, el tipo (autólogo o alogénico), el estado del injerto y la profilaxis en curso.
2. ABC, acceso vascular y monitor; aislamiento protector según el servicio.
3. Considerá infección oportunista, enfermedad injerto contra huésped, enfermedad veno-oclusiva hepática, síndrome de injerto y toxicidad pulmonar.
4. Cultivos amplios, lactato, función hepática y renal, imágenes; sospechá hongos y virus además de bacterias.
5. Ante fiebre en neutropenia, no demores los antibióticos según el protocolo del servicio.
6. Transfusiones con productos irradiados y filtrados según indicación de hematología.
7. Consultá con el equipo de trasplante desde el primer momento.

- Revisó: 
- Fecha: 
- Observaciones: 

## Toxicológico (5)

### [ ] Intoxicación medicamentosa · `tmd` · texto `f80dab69`

1. ABC y glucemia; ECG en toda intoxicación con alteración de conciencia.
2. Identificá sustancia, dosis, hora, vía y peso del niño; guardá envases.
3. Llamá al centro de toxicología de tu región y confirmá el antídoto y la dosis por peso.
4. No indiques descontaminación ni inducción del vómito sin indicación toxicológica.
5. Monitoreo prolongado según la sustancia; pensá en autoagresión o maltrato.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Ingesta de cáusticos / hidrocarburos · `tcc` · texto `285e62cc`

1. ⚕ Pendiente de revisión médica. Identificá el producto, la cantidad, la hora y si hubo vómitos; conseguí el envase.
2. ABC: vigilá edema de la vía aérea, estridor, sialorrea y dificultad respiratoria; tené lista la vía aérea difícil.
3. En cáusticos no provoques el vómito ni neutralices; en hidrocarburos el riesgo principal es la aspiración y la neumonitis.
4. Ayuno, acceso vascular, analgesia y monitor; evitá sondas a ciegas.
5. Radiografía de tórax y abdomen; buscá signos de perforación (dolor, neumomediastino, aire libre).
6. Consultá con toxicología (centro de intoxicaciones) y con endoscopía/cirugía para definir el momento del estudio digestivo.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Monóxido de carbono · `tco` · texto `03b8bb15`
También aparece en: Trauma, quemados y ambiente.

1. ⚕ Pendiente de revisión médica. Sospechalo ante cefalea, vómitos, confusión o coma tras incendio, estufas o calefones en ambientes cerrados, o varios afectados.
2. Retirá al paciente de la fuente y dale oxígeno al 100 % de inmediato con máscara con reservorio o por vía aérea avanzada.
3. La oximetría de pulso es falsamente normal: pedí cooximetría (carboxihemoglobina) y gasometría con lactato.
4. ABC, monitor, ECG y troponina si hay síntomas cardíacos; glucemia.
5. Si hubo incendio, considerá también cianuro y lesión inhalatoria.
6. Valorá oxigenoterapia hiperbárica con toxicología según gravedad, embarazo o secuelas neurológicas.
7. Consultá con toxicología y buscá a otros expuestos.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Plaguicidas (organofosforados) y otros tóxicos · `top` · texto `6148bde2`

1. ⚕ Pendiente de revisión médica. Sospechá toxidrome colinérgico ante salivación, lagrimeo, secreciones, broncorrea, miosis, bradicardia, fasciculaciones o convulsiones.
2. Protegé al equipo: ropa, guantes y retiro de la ropa contaminada; lavá la piel con abundante agua.
3. ABC: la falla respiratoria por secreciones y debilidad es la causa principal de muerte; preparate para la vía aérea y la ventilación.
4. Acceso vascular, monitor, glucemia y colinesterasas; identificá el producto.
5. El antídoto y la dosificación los define toxicología según el protocolo del servicio.
6. Vigilá arritmias, convulsiones y el síndrome intermedio en los días siguientes.
7. Consultá de inmediato con el centro de intoxicaciones.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Alcohol, drogas de abuso y opioides · `tal` · texto `dbfcae77`

1. ⚕ Pendiente de revisión médica. Averiguá la sustancia, la cantidad, la hora y si hay coingesta; pensá en intoxicación grave si hay depresión del sensorio o respiratoria.
2. ABC: asegurá la vía aérea y la ventilación; en opioides, la hipoventilación y la miosis son la clave.
3. Glucemia inmediata, monitor, SatO₂ y ECG; temperatura.
4. El antídoto de opioides y su dosificación los indica toxicología según el protocolo; reevaluá porque su efecto puede ser más corto que el del tóxico.
5. Pedí gases, ionograma, función renal y hepática, CK y tóxicos en orina/sangre según disponibilidad.
6. Observación prolongada y monitoreo; vigilá abstinencia, agitación y aspiración.
7. Consultá con toxicología y evaluá el contexto social (abuso, intento de suicidio, maltrato).

- Revisó: 
- Fecha: 
- Observaciones: 

## Posoperatorio y procedimientos (3)

### [ ] Posoperatorio de cirugía mayor (abdominal, torácica, ortopédica) · `pmy` · texto `b99bab10`

1. ⚕ Pendiente de revisión médica. Pedí el pase completo: procedimiento, tiempo quirúrgico, sangrado, líquidos, anestesia, vía aérea y complicaciones.
2. ABC, monitor, temperatura, acceso vascular y drenajes: registrá el estado inicial.
3. Control del dolor con analgesia multimodal y reevaluación frecuente; sedación según el caso.
4. Vigilá sangrado (drenajes, hemoglobina), perfusión, diuresis y balance.
5. Prevení complicaciones respiratorias: ventilación, fisioterapia, movilización y retiro precoz de la asistencia cuando sea posible.
6. Reiniciá la alimentación según indicación del cirujano; control de glucemia y electrolitos.
7. Reconocé signos de alarma (fiebre, taquicardia, dolor creciente, distensión) y avisá al equipo quirúrgico.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Trasplante (hepático, renal) · `ptx` · texto `2261e641`

1. ⚕ Pendiente de revisión médica. Pedí el pase con el equipo de trasplante: tipo de órgano, tiempo de isquemia, función inicial del injerto y esquema inmunosupresor.
2. ABC, monitor, acceso vascular y balance estricto; aislamiento protector según el servicio.
3. El esquema inmunosupresor no se omite ni se modifica sin hablar con el equipo de trasplante; vigilá interacciones y niveles.
4. Controles seriados de función del injerto (laboratorio, imágenes, diuresis).
5. Vigilá rechazo, infección, sangrado y trombosis vascular del injerto; ante fiebre buscá foco con cultivos.
6. Evitá fármacos nefrotóxicos y revisá cada indicación con la función renal.
7. Comunicación diaria con el equipo de trasplante.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Vía aérea quirúrgica / ORL · `pvo` · texto `10ceff9b`
También aparece en: Respiratorio.

1. Pase con ORL, cirugía y anestesia: qué se operó, cómo fue la vía aérea y si hubo dificultad al intubar.
2. Tené a mano el equipo de vía aérea difícil, con el plan A, B y C acordado antes de cualquier cambio de tubo o extubación.
3. Vigilá sangrado, edema y secreciones; cabecera elevada y control de la permeabilidad de la vía aérea.
4. Extubación solo con plan de rescate y personal con experiencia presente (checklist de extubación).
5. Ante obstrucción súbita, pedí ayuda de inmediato y preparate para acceso quirúrgico de la vía aérea.

- Revisó: 
- Fecha: 
- Observaciones: 

## Crónicos, paliativos y otros (5)

### [ ] Niño con dependencia tecnológica descompensado · `dep` · texto `5737e38c`

1. Conocé la línea de base: dispositivo (traqueostomía, respirador domiciliario, gastrostomía, derivación) y el último control.
2. Pedí a la familia el equipo, los parámetros habituales y los últimos antecedentes; ellos suelen ser expertos en su hijo.
3. Revisá primero lo mecánico: cánula obstruida o desplazada, circuito, fuente de oxígeno, batería y alimentación.
4. Buscá infección intercurrente y causa de descompensación; mantené la nutrición y la continuidad de los cuidados.
5. Involucrá a los equipos de seguimiento (neumonología, neurología, cuidados paliativos) y definí objetivos de cuidado.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Cuidados paliativos y limitación del esfuerzo terapéutico · `pal` · texto `ff7c8a80`

1. ⚕ Pendiente de revisión médica. Confirmá la decisión con el equipo tratante, la familia y lo que quedó registrado en la historia.
2. Aclará qué se continúa y qué se limita (reanimación, ventilación, soporte); dejalo escrito.
3. Priorizá el confort: dolor, disnea, ansiedad, secreciones y náuseas, con reevaluación regular.
4. Acompañá a la familia: espacio, horarios flexibles, información clara, apoyo espiritual y psicológico si lo desean.
5. Sacá del plan lo que no suma al confort (controles, estudios, alarmas innecesarias).
6. Coordiná con cuidados paliativos y, si corresponde, con el comité de ética.
7. Cuidá al equipo: escuchá el impacto emocional.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Lactante pequeño con apneas · `apn` · texto `55ca4eda`
También aparece en: Respiratorio.

1. Reconocé el tipo de apnea (central, obstructiva o mixta), su duración y si hay cianosis o bradicardia.
2. Monitoreo continuo de saturación, frecuencia cardíaca y respiratoria; estimulación y soporte ventilatorio según la respuesta.
3. Buscá la causa: infección (virus respiratorios, tos convulsa), reflujo, trastorno metabólico, neurológico o prematurez.
4. Evaluá el riesgo de sepsis con las herramientas de la app y considerá hemocultivos y laboratorio.
5. Aislamiento respiratorio si hay sospecha de virus o coqueluche.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Deterioro clínico en sala (alerta temprana) · `det` · texto `1906d26a`

1. Reevaluá ABC con signos vitales completos, apariencia y perfusión; compará con la línea de base.
2. Pedí ayuda y activá el equipo de respuesta rápida.
3. Oxígeno, monitor, acceso vascular, glucemia y lactato.
4. Tratá lo reversible: hipoxia, hipovolemia, hipoglucemia, sepsis.
5. Decidí el traslado a UCIP con pase estructurado (I-PASS) y comunicación con la familia.

- Revisó: 
- Fecha: 
- Observaciones: 

### [ ] Traslado crítico · `trs` · texto `92ad4354`

1. ⚕ Pendiente de revisión médica. Definí el motivo, el destino, el equipo y el momento: estabilizá antes de trasladar.
2. Confirmá la aceptación del centro receptor y pasá la información con el pase I-PASS.
3. ABC antes de salir: vía aérea asegurada, accesos vasculares confiables y fijados, drogas e infusiones necesarias.
4. Equipo, oxígeno, batería y monitor con reserva suficiente; checklist de traslado completo.
5. Definí quién va, el medio de transporte y las vías de comunicación en el camino.
6. Monitoreo continuo durante el traslado y registro de los signos.
7. Entregá al paciente con el resumen escrito, estudios y lo realizado.

- Revisó: 
- Fecha: 
- Observaciones: 
