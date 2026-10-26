/**
 * Catálogo de medidas educativas transcritas de la matriz del documento
 * "Programas de Refuerzo del Aprendizaje (PRA) | Guía de medidas".
 * Cada elemento con letra a., b. o c. en una celda del Word se guarda como
 * una medida independiente. Las celdas sin letras se mantienen como una medida.
 */

export type MedidaEducativa = {
  apartadoId: number;
  necesidad: string;
  texto: string;
};

export const APARTADOS = [
  "Tipos de actividades y tareas",
  "Formas de acceso a la información",
  "Recursos didácticos",
  "Agrupamientos, distribución de espacios y tiempos",
  "Instrumentos de evaluación",
] as const;

export const MEDIDAS_POR_NECESIDAD: MedidaEducativa[] = [
  // NEAE - TDAH
  {
    apartadoId: 1,
    necesidad: "NEAE - TDAH",
    texto: "Tareas cortas con metas visibles, reducir práctica redundante",
  },
  {
    apartadoId: 1,
    necesidad: "NEAE - TDAH",
    texto: "Fraccionar proyectos complejos",
  },
  {
    apartadoId: 1,
    necesidad: "NEAE - TDAH",
    texto: "Eximir del copiado de enunciados.",
  },
  {
    apartadoId: 2,
    necesidad: "NEAE - TDAH",
    texto: "Explicación oral y visual simultánea.",
  },
  {
    apartadoId: 2,
    necesidad: "NEAE - TDAH",
    texto: "Consignas cortas, sencillas y de una en una.",
  },
  {
    apartadoId: 2,
    necesidad: "NEAE - TDAH",
    texto:
      "Destacar prioridad de tareas y solicitar reformulación del enunciado.",
  },
  {
    apartadoId: 3,
    necesidad: "NEAE - TDAH",
    texto: "Agenda/checklist de pasos, temporizador visual discreto",
  },
  {
    apartadoId: 3,
    necesidad: "NEAE - TDAH",
    texto:
      "hojas de trabajo limpias, esquemas impresos y organizadores gráficos.",
  },
  {
    apartadoId: 4,
    necesidad: "NEAE - TDAH",
    texto:
      "Puesto próximo al docente y lejos de distractores (puertas/ventanas).",
  },
  {
    apartadoId: 4,
    necesidad: "NEAE - TDAH",
    texto: "Tramos de trabajo cortos con descansos activos planificados.",
  },
  {
    apartadoId: 5,
    necesidad: "NEAE - TDAH",
    texto:
      "Pruebas fragmentadas por bloques o días. Supervisión discreta de ítems en blanco",
  },
  {
    apartadoId: 5,
    necesidad: "NEAE - TDAH",
    texto: "enunciados breves y opción de respuesta oral.",
  },

  // DEA - Lectura / Dislexia
  {
    apartadoId: 1,
    necesidad: "DEA - Lectura / Dislexia",
    texto: "Lectura guiada, identificar ideas clave",
  },
  {
    apartadoId: 1,
    necesidad: "DEA - Lectura / Dislexia",
    texto: "Fraccionar lecturas extensas",
  },
  {
    apartadoId: 1,
    necesidad: "DEA - Lectura / Dislexia",
    texto: "Eximir de copiar enunciados y textos largos.",
  },
  {
    apartadoId: 2,
    necesidad: "DEA - Lectura / Dislexia",
    texto:
      "Textos con párrafos cortos, tipografía legible y espaciado adecuado.",
  },
  {
    apartadoId: 2,
    necesidad: "DEA - Lectura / Dislexia",
    texto: "Destacar términos clave y apoyar en modelos o esquemas visuales.",
  },
  {
    apartadoId: 3,
    necesidad: "DEA - Lectura / Dislexia",
    texto:
      "Textos en formato accesible/digital, audiolibros o lectura asistida, mapas conceptuales, infografías y esquemas impresos.",
  },
  {
    apartadoId: 4,
    necesidad: "DEA - Lectura / Dislexia",
    texto: "Puesto para seguimiento discreto.",
  },
  {
    apartadoId: 4,
    necesidad: "DEA - Lectura / Dislexia",
    texto:
      "Ampliación del tiempo de lectura y evitar la lectura pública no preparada.",
  },
  {
    apartadoId: 5,
    necesidad: "DEA - Lectura / Dislexia",
    texto: "Formato limpio y accesible.",
  },
  {
    apartadoId: 5,
    necesidad: "DEA - Lectura / Dislexia",
    texto: "Lectura previa de enunciados por el docente.",
  },
  {
    apartadoId: 5,
    necesidad: "DEA - Lectura / Dislexia",
    texto: "Pruebas objetivas/test y no penalizar la ortografía.",
  },

  // DEA - Escritura / Disgrafía / Disortografía
  {
    apartadoId: 1,
    necesidad: "DEA - Escritura / Disgrafía / Disortografía",
    texto: "Reducir copia y escritura mecánica.",
  },
  {
    apartadoId: 1,
    necesidad: "DEA - Escritura / Disgrafía / Disortografía",
    texto:
      "Plantillas de planificación textual y corrección guiada con listas de revisión.",
  },
  {
    apartadoId: 2,
    necesidad: "DEA - Escritura / Disgrafía / Disortografía",
    texto:
      "Entregar esquemas, apuntes o enunciados impresos para no depender del copiado manual de la pizarra o libro.",
  },
  {
    apartadoId: 3,
    necesidad: "DEA - Escritura / Disgrafía / Disortografía",
    texto: "Ordenador o tableta con procesador de textos",
  },
  {
    apartadoId: 3,
    necesidad: "DEA - Escritura / Disgrafía / Disortografía",
    texto:
      "Fichas con pauta adecuada, abecedario visual y diccionarios/correctores.",
  },
  {
    apartadoId: 4,
    necesidad: "DEA - Escritura / Disgrafía / Disortografía",
    texto: "Puesto cómodo con espacio para dispositivos.",
  },
  {
    apartadoId: 4,
    necesidad: "DEA - Escritura / Disgrafía / Disortografía",
    texto:
      "Ampliar tiempo para escritura manual y dar pausas ante la fatiga motriz.",
  },
  {
    apartadoId: 5,
    necesidad: "DEA - Escritura / Disgrafía / Disortografía",
    texto: "Permitir uso del teclado o respuesta oral complementaria.",
  },
  {
    apartadoId: 5,
    necesidad: "DEA - Escritura / Disgrafía / Disortografía",
    texto:
      "Priorizar el contenido sobre la calidad gráfica o faltas ortográficas.",
  },

  // DEA - Cálculo / Discalculia
  {
    apartadoId: 1,
    necesidad: "DEA - Cálculo / Discalculia",
    texto: "Problemas contextualizados abordados paso a paso.",
  },
  {
    apartadoId: 1,
    necesidad: "DEA - Cálculo / Discalculia",
    texto:
      "Explicar en voz alta el razonamiento y fomentar la autocorrección del proceso.",
  },
  {
    apartadoId: 2,
    necesidad: "DEA - Cálculo / Discalculia",
    texto:
      "Representar cantidades y relaciones matemáticas con rectas numéricas, esquemas y gráficos.",
  },
  {
    apartadoId: 2,
    necesidad: "DEA - Cálculo / Discalculia",
    texto: "Modelar procedimientos en voz alta.",
  },
  {
    apartadoId: 3,
    necesidad: "DEA - Cálculo / Discalculia",
    texto:
      "Recta numérica, tablas de multiplicar, calculadora, bloques manipulativos, ábacos y diagramas de flujo.",
  },
  {
    apartadoId: 4,
    necesidad: "DEA - Cálculo / Discalculia",
    texto:
      "Parejas o grupos pequeños para explicar estrategias sin exponer errores.",
  },
  {
    apartadoId: 4,
    necesidad: "DEA - Cálculo / Discalculia",
    texto: "Tiempo suficiente sin presión cronométrica.",
  },
  {
    apartadoId: 5,
    necesidad: "DEA - Cálculo / Discalculia",
    texto:
      "Permitir calculadora y tablas de apoyo cuando el cálculo mecánico no sea el criterio evaluado.",
  },
  {
    apartadoId: 5,
    necesidad: "DEA - Cálculo / Discalculia",
    texto: "Problemas descompuestos en pasos.",
  },

  // NEE - Discapacidad Intelectual (DIL)
  {
    apartadoId: 1,
    necesidad: "NEE - Discapacidad Intelectual (DIL)",
    texto: "Tareas de un solo paso, práctica dirigida, preguntas breves",
  },
  {
    apartadoId: 1,
    necesidad: "NEE - Discapacidad Intelectual (DIL)",
    texto: "Selección de saberes básicos esenciales y contenidos mínimos.",
  },
  {
    apartadoId: 2,
    necesidad: "NEE - Discapacidad Intelectual (DIL)",
    texto: "Información concreta, breve y secuenciada (un paso cada vez).",
  },
  {
    apartadoId: 2,
    necesidad: "NEE - Discapacidad Intelectual (DIL)",
    texto: "Ejemplo modelado previo. Repetir e ilustrar ideas clave.",
  },
  {
    apartadoId: 3,
    necesidad: "NEE - Discapacidad Intelectual (DIL)",
    texto:
      "Material específico adaptado de menor complejidad e icónico-visual.",
  },
  {
    apartadoId: 3,
    necesidad: "NEE - Discapacidad Intelectual (DIL)",
    texto: "Fichas graduadas, apoyos manipulativos y plantillas paso a paso.",
  },
  {
    apartadoId: 4,
    necesidad: "NEE - Discapacidad Intelectual (DIL)",
    texto: "Cerca del docente.",
  },
  {
    apartadoId: 4,
    necesidad: "NEE - Discapacidad Intelectual (DIL)",
    texto: "Pareja con apoyo recíproco.",
  },
  {
    apartadoId: 4,
    necesidad: "NEE - Discapacidad Intelectual (DIL)",
    texto: "Ritmo pausado con tramos cortos y pausas entre bloques.",
  },
  {
    apartadoId: 5,
    necesidad: "NEE - Discapacidad Intelectual (DIL)",
    texto:
      "Preguntas cortas con pasos claros. Ítems representativos ajustados.",
  },
  {
    apartadoId: 5,
    necesidad: "NEE - Discapacidad Intelectual (DIL)",
    texto: "Apoyos manipulativos/visuales y fraccionamiento de pruebas.",
  },

  // NEE - Inteligencia Límite (FIL)
  {
    apartadoId: 1,
    necesidad: "NEE - Inteligencia Límite (FIL)",
    texto: "Tareas estructuradas fraccionadas en pasos intermedios",
  },
  {
    apartadoId: 1,
    necesidad: "NEE - Inteligencia Límite (FIL)",
    texto:
      "Práctica dirigida suficiente y revisión de ideas clave al inicio y final de la sesión.",
  },
  {
    apartadoId: 2,
    necesidad: "NEE - Inteligencia Límite (FIL)",
    texto:
      "Explicaciones directas apoyadas en organizadores gráficos e imágenes.",
  },
  {
    apartadoId: 2,
    necesidad: "NEE - Inteligencia Límite (FIL)",
    texto: "Conceder más tiempo de procesamiento para responder.",
  },
  {
    apartadoId: 3,
    necesidad: "NEE - Inteligencia Límite (FIL)",
    texto:
      "Guías de trabajo paso a paso, glosario de términos clave, esquemas conceptuales simplificados",
  },
  {
    apartadoId: 3,
    necesidad: "NEE - Inteligencia Límite (FIL)",
    texto: "Banco de actividades graduadas.",
  },
  {
    apartadoId: 4,
    necesidad: "NEE - Inteligencia Límite (FIL)",
    texto:
      "Ubicación cercana al profesorado, supervisión frecuente del trabajo",
  },
  {
    apartadoId: 4,
    necesidad: "NEE - Inteligencia Límite (FIL)",
    texto: "Trabajo en pequeños grupos o parejas heterogéneas.",
  },
  {
    apartadoId: 5,
    necesidad: "NEE - Inteligencia Límite (FIL)",
    texto: "Pruebas estructuradas por bloques, consignas breves",
  },
  {
    apartadoId: 5,
    necesidad: "NEE - Inteligencia Límite (FIL)",
    texto:
      "Tiempo adicional de respuesta y valoración centrada en saberes fundamentales.",
  },

  // NEE - Trastorno del Espectro Autista (TEA)
  {
    apartadoId: 1,
    necesidad: "NEE - Trastorno del Espectro Autista (TEA)",
    texto: "Tareas predecibles con pasos visibles.",
  },
  {
    apartadoId: 1,
    necesidad: "NEE - Trastorno del Espectro Autista (TEA)",
    texto:
      "Trabajo cooperativo estructurado e integrar sus intereses motivadores.",
  },
  {
    apartadoId: 2,
    necesidad: "NEE - Trastorno del Espectro Autista (TEA)",
    texto: "Agenda visual.",
  },
  {
    apartadoId: 2,
    necesidad: "NEE - Trastorno del Espectro Autista (TEA)",
    texto: "Anticipar cambios y tareas novedosas.",
  },
  {
    apartadoId: 2,
    necesidad: "NEE - Trastorno del Espectro Autista (TEA)",
    texto:
      "Lenguaje literal y directo sin ambigüedades. Reducir sobrecarga sensorial.",
  },
  {
    apartadoId: 3,
    necesidad: "NEE - Trastorno del Espectro Autista (TEA)",
    texto:
      "Agenda visual, secuencia de sesión codificada, organizadores gráficos e historias sociales/pictogramas.",
  },
  {
    apartadoId: 4,
    necesidad: "NEE - Trastorno del Espectro Autista (TEA)",
    texto: "Puesto con visión del aula y baja estimulación.",
  },
  {
    apartadoId: 4,
    necesidad: "NEE - Trastorno del Espectro Autista (TEA)",
    texto: "Grupos pequeños con roles y reglas explícitas.",
  },
  {
    apartadoId: 4,
    necesidad: "NEE - Trastorno del Espectro Autista (TEA)",
    texto: "Tutoría entre iguales.",
  },
  {
    apartadoId: 5,
    necesidad: "NEE - Trastorno del Espectro Autista (TEA)",
    texto: "Anticipar formato y secuencia de pruebas. Enunciados explícitos.",
  },
  {
    apartadoId: 5,
    necesidad: "NEE - Trastorno del Espectro Autista (TEA)",
    texto: "Tiempo adicional o división de prueba sin cambios inesperados.",
  },

  // NEE - Sensorial / Motor
  {
    apartadoId: 1,
    necesidad: "NEE - Sensorial / Motor",
    texto:
      "Adaptar las modalidades de respuesta (digital, oral) manteniendo el nivel conceptual del criterio de evaluación.",
  },
  {
    apartadoId: 2,
    necesidad: "NEE - Sensorial / Motor",
    texto: "Ubicación preferente y accesible.",
  },
  {
    apartadoId: 2,
    necesidad: "NEE - Sensorial / Motor",
    texto:
      "Apoyos multimodales (texto digital, audio, macrotipos, subtítulos).",
  },
  {
    apartadoId: 3,
    necesidad: "NEE - Sensorial / Motor",
    texto:
      "Materiales digitales descargables (Classroom, Genially), procesador de texto adaptado y",
  },
  {
    apartadoId: 3,
    necesidad: "NEE - Sensorial / Motor",
    texto: "Productos de apoyo técnico o ergonómico.",
  },
  {
    apartadoId: 4,
    necesidad: "NEE - Sensorial / Motor",
    texto: "Espacio físico adaptado sin barreras.",
  },
  {
    apartadoId: 4,
    necesidad: "NEE - Sensorial / Motor",
    texto:
      "Flexibilidad temporal en desplazamientos, manipulación y ejecución de tareas.",
  },
  {
    apartadoId: 5,
    necesidad: "NEE - Sensorial / Motor",
    texto: "Pruebas adaptadas al canal de respuesta (ordenador, voz).",
  },
  {
    apartadoId: 5,
    necesidad: "NEE - Sensorial / Motor",
    texto: "Lectura asistida de enunciados y tiempo suficiente.",
  },

  // Altas Capacidades (ALCAIN)
  {
    apartadoId: 1,
    necesidad: "Altas Capacidades (ALCAIN)",
    texto:
      "Tareas de enriquecimiento curricular, proyectos interdisciplinares (ABP)",
  },
  {
    apartadoId: 1,
    necesidad: "Altas Capacidades (ALCAIN)",
    texto: "Libre elección de trabajos e investigaciones.",
  },
  {
    apartadoId: 2,
    necesidad: "Altas Capacidades (ALCAIN)",
    texto:
      "Presentación de contenidos complejos, organizadores avanzados y acceso a fuentes de información ampliadas.",
  },
  {
    apartadoId: 3,
    necesidad: "Altas Capacidades (ALCAIN)",
    texto:
      "Materiales de profundización, entornos virtuales de aprendizaje y herramientas de creación digital y audiovisual.",
  },
  {
    apartadoId: 4,
    necesidad: "Altas Capacidades (ALCAIN)",
    texto:
      "Agrupamientos flexibles. Trabajo cooperativo con roles de investigación o liderazgo.",
  },
  {
    apartadoId: 4,
    necesidad: "Altas Capacidades (ALCAIN)",
    texto: "Gestión autónoma del tiempo.",
  },
  {
    apartadoId: 5,
    necesidad: "Altas Capacidades (ALCAIN)",
    texto:
      "Rúbricas de proyectos, portafolios digitales, exposiciones orales y evaluación de productos creativos y complejos.",
  },

  // ECOPHE / Incorporación Tardía / Compensatoria
  {
    apartadoId: 1,
    necesidad: "ECOPHE / Incorporación Tardía / Compensatoria",
    texto: "Recuperación de aprendizajes previos, comprensión de enunciados",
  },
  {
    apartadoId: 1,
    necesidad: "ECOPHE / Incorporación Tardía / Compensatoria",
    texto: "Prácticas guiadas antes del trabajo autónomo.",
  },
  {
    apartadoId: 2,
    necesidad: "ECOPHE / Incorporación Tardía / Compensatoria",
    texto: "Lenguaje académico explicado con ejemplos.",
  },
  {
    apartadoId: 2,
    necesidad: "ECOPHE / Incorporación Tardía / Compensatoria",
    texto:
      "Glosario visual de la materia. Textos accesibles con apoyo gráfico.",
  },
  {
    apartadoId: 3,
    necesidad: "ECOPHE / Incorporación Tardía / Compensatoria",
    texto: "Glosario ilustrado/multilingüe, textos adaptados",
  },
  {
    apartadoId: 3,
    necesidad: "ECOPHE / Incorporación Tardía / Compensatoria",
    texto: "Materiales de refuerzo previo y recursos digitales interactivos.",
  },
  {
    apartadoId: 4,
    necesidad: "ECOPHE / Incorporación Tardía / Compensatoria",
    texto: "Parejas cooperativas y 'alumno/a ayudante'.",
  },
  {
    apartadoId: 4,
    necesidad: "ECOPHE / Incorporación Tardía / Compensatoria",
    texto: "Espacios de consulta discreta.",
  },
  {
    apartadoId: 4,
    necesidad: "ECOPHE / Incorporación Tardía / Compensatoria",
    texto: "Coordinación con ATAL si procede.",
  },
  {
    apartadoId: 5,
    necesidad: "ECOPHE / Incorporación Tardía / Compensatoria",
    texto:
      "Clarificar enunciados sin dar la respuesta. Verificar comprensión del vocabulario.",
  },
  {
    apartadoId: 5,
    necesidad: "ECOPHE / Incorporación Tardía / Compensatoria",
    texto: "Diversificar instrumentos (cuaderno, test).",
  },

  // Asignatura Pendiente
  {
    apartadoId: 1,
    necesidad: "Asignatura Pendiente",
    texto: "Tareas autónomas graduadas, cuestionarios clave por unidades",
  },
  {
    apartadoId: 1,
    necesidad: "Asignatura Pendiente",
    texto: "Esquemas y entrega periódica de cuadernos.",
  },
  {
    apartadoId: 2,
    necesidad: "Asignatura Pendiente",
    texto:
      "Guías de trabajo estructuradas con la secuenciación de contenidos esenciales de la materia pendiente.",
  },
  {
    apartadoId: 3,
    necesidad: "Asignatura Pendiente",
    texto:
      "Repositorio digital en la plataforma del centro (Classroom/Moodle) con fichas, esquemas y autoevaluaciones.",
  },
  {
    apartadoId: 4,
    necesidad: "Asignatura Pendiente",
    texto:
      "Seguimiento individualizado con el profesor de la pendiente. Calendario coordinado de entregas y controles.",
  },
  {
    apartadoId: 5,
    necesidad: "Asignatura Pendiente",
    texto:
      "Pruebas escritas objetivas enfáticas en saberes básicos priorizados, controles parciales y revisión del cuaderno.",
  },

  // Alumnado Repetidor
  {
    apartadoId: 1,
    necesidad: "Alumnado Repetidor",
    texto: "Tareas contextualizadas y prácticas.",
  },
  {
    apartadoId: 1,
    necesidad: "Alumnado Repetidor",
    texto:
      "Alternar ejercitación de refuerzo con proyectos aplicados y dinámicos.",
  },
  {
    apartadoId: 2,
    necesidad: "Alumnado Repetidor",
    texto:
      "Activar conocimientos previos relacionándolos con enfoques nuevos y explicaciones dinámicas y motivadoras.",
  },
  {
    apartadoId: 3,
    necesidad: "Alumnado Repetidor",
    texto: "Materiales digitales interactivos (Quizizz, Kahoot, Genially)",
  },
  {
    apartadoId: 3,
    necesidad: "Alumnado Repetidor",
    texto: "Fichas de consolidación graduadas.",
  },
  {
    apartadoId: 4,
    necesidad: "Alumnado Repetidor",
    texto: "Grupos heterogéneos cooperativos donde asuma roles activos.",
  },
  {
    apartadoId: 4,
    necesidad: "Alumnado Repetidor",
    texto: "Supervisión temporal para evitar desmotivación.",
  },
  {
    apartadoId: 5,
    necesidad: "Alumnado Repetidor",
    texto:
      "Evaluación continua mediante listas de cotejo, rúbricas de trabajos",
  },
  {
    apartadoId: 5,
    necesidad: "Alumnado Repetidor",
    texto: "Pruebas escritas objetivas de progreso.",
  },

  // Refuerzo Ordinario General
  {
    apartadoId: 1,
    necesidad: "Refuerzo Ordinario General",
    texto:
      "Variedad en la tipología de tareas (ejercicios prácticos, casos reales, indagación, análisis y síntesis).",
  },
  {
    apartadoId: 2,
    necesidad: "Refuerzo Ordinario General",
    texto:
      "Digitalización de contenidos y esquemas descargables en la plataforma educativa del centro.",
  },
  {
    apartadoId: 3,
    necesidad: "Refuerzo Ordinario General",
    texto:
      "Uso de recursos multimedia interactivos, esquemas conceptuales dinámicos y presentaciones visuales.",
  },
  {
    apartadoId: 4,
    necesidad: "Refuerzo Ordinario General",
    texto:
      "Alternancia entre trabajo individual enfocado, parejas cooperativas y pequeños grupos heterogéneos.",
  },
  {
    apartadoId: 5,
    necesidad: "Refuerzo Ordinario General",
    texto:
      "Diversificación de instrumentos: rúbricas de proyectos, listas de cotejo de trabajos y exámenes objetivamente ponderados.",
  },
];
