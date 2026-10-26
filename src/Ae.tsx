import { useMemo, useState } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import Header from "./Header.tsx";

const CLAVE_LOCAL = "adaptacion-educativa";

type Alumno = {
  nombre: string;
  materia: string;
  curso: string;
  profesor: string;
};

type Medida = {
  apartadoId: number;
  texto: string;
  seleccionada: boolean;
};

type Formulario = {
  alumno: Alumno;
  necesidades: string[];
  medidas: Medida[];
};

const NECESIDADES = [
  "NEAE - TDAH",
  "DEA - Lectura / Dislexia",
  "DEA - Escritura / Disgrafía",
  "DEA - Cálculo / Discalculia",
  "NEE - Discapacidad Intelectual",
  "NEE - Trastorno Espectro Autista (TEA)",
  "NEE - Sensorial / Motor",
  "Altas Capacidades (AACC)",
  "ECOPHE / Int. Tardía",
  "Asignatura Pendiente",
  "Alumnado Repetidor",
  "Refuerzo Ordinario General",
];

const APARTADOS = [
  "Tipos de actividades y tareas",
  "Formas de acceso a la información",
  "Recursos didácticos",
  "Agrupamientos, distribución de espacios y tiempos",
  "Instrumentos de evaluación",
];

const MEDIDAS_INICIALES: Medida[] = [
  {
    apartadoId: 1,
    texto:
      "Variedad en la tipología de las tareas (ejercicios prácticos, casos reales, indagación y síntesis).",
    seleccionada: true,
  },
  {
    apartadoId: 2,
    texto:
      "Digitalización de materiales y esquemas descargables en la plataforma educativa del centro.",
    seleccionada: true,
  },
  {
    apartadoId: 3,
    texto:
      "Uso de recursos multimedia interactivos, esquemas conceptuales dinámicos y presentaciones visuales.",
    seleccionada: true,
  },
  {
    apartadoId: 4,
    texto:
      "Alternancia entre trabajo individual enfocado, parejas cooperativas y pequeños grupos de nivel heterogéneo.",
    seleccionada: true,
  },
  {
    apartadoId: 5,
    texto:
      "Diversificación de instrumentos: rúbricas de proyectos, listas de cotejo de trabajos y exámenes objetivamente ponderados.",
    seleccionada: true,
  },
];

const VALORES_INICIALES: Formulario = {
  alumno: {
    nombre: "",
    materia: "",
    curso: "",
    profesor: "",
  },
  necesidades: ["Refuerzo Ordinario General"],
  medidas: MEDIDAS_INICIALES,
};

export default function AdaptacionEducativa() {
  const [mensaje, setMensaje] = useState("");

  const { register, control, handleSubmit, setValue, reset, getValues } =
    useForm<Formulario>({
      defaultValues: VALORES_INICIALES,
    });

  const { fields: medidasFields, append } = useFieldArray({
    control,
    name: "medidas",
  });

  const alumno = useWatch({
    control,
    name: "alumno",
  });

  const necesidades =
    useWatch({
      control,
      name: "necesidades",
    }) ?? [];

  const medidas =
    useWatch({
      control,
      name: "medidas",
    }) ?? [];

  const resultado = useMemo(() => {
    return APARTADOS.map((titulo, index) => {
      const apartadoId = index + 1;

      const seleccionadas = medidas
        .filter(
          (medida) => medida.apartadoId === apartadoId && medida.seleccionada,
        )
        .map((medida) => `- ${medida.texto}`);

      if (!seleccionadas.length) return "";

      return [`${apartadoId}. ${titulo.toUpperCase()}`, ...seleccionadas].join(
        "\n",
      );
    })
      .filter(Boolean)
      .join("\n\n");
  }, [medidas]);

  const textoCompleto = useMemo(() => {
    const datosAlumno = [
      alumno?.nombre && `Alumno/a: ${alumno.nombre}`,
      alumno?.materia && `Materia: ${alumno.materia}`,
      alumno?.curso && `Curso y grupo: ${alumno.curso}`,
      alumno?.profesor && `Profesor/a: ${alumno.profesor}`,
      necesidades.length > 0 && `Tipologías: ${necesidades.join(", ")}`,
    ]
      .filter(Boolean)
      .join("\n");

    return [datosAlumno, resultado].filter(Boolean).join("\n\n");
  }, [alumno, necesidades, resultado]);

  const copiarTexto = async (texto: string, confirmacion: string) => {
    try {
      await navigator.clipboard.writeText(texto);
      setMensaje(confirmacion);
    } catch {
      setMensaje("No se pudo copiar. Comprueba los permisos del navegador.");
    }
  };

  const agregarMedida = (apartadoId: number) => {
    const texto = window.prompt("Escribe la nueva medida educativa:")?.trim();

    if (!texto) return;

    append({
      apartadoId,
      texto,
      seleccionada: true,
    });
  };

  // const seleccionarTodas = () => {
  //   replace(
  //     medidas.map((medida) => ({
  //       ...medida,
  //       seleccionada: true,
  //     })),
  //   );
  // };

  // const desmarcarTodas = () => {
  //   replace(
  //     medidas.map((medida) => ({
  //       ...medida,
  //       seleccionada: false,
  //     })),
  //   );
  // };

  const descargarTexto = () => {
    const blob = new Blob([textoCompleto], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");

    enlace.href = url;
    enlace.download = "adaptacion-educativa.txt";
    enlace.click();

    URL.revokeObjectURL(url);
  };

  const imprimirTexto = () => {
    const ventana = window.open("", "_blank");

    if (!ventana) {
      alert("Permite las ventanas emergentes para imprimir.");
      return;
    }

    ventana.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Adaptación educativa</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            font-size: 12pt;
            line-height: 1.5;
            padding: 20px;
          }

          pre {
            white-space: pre-wrap;
            overflow-wrap: break-word;
            font-family: Arial, sans-serif;
          }

          @page {
            margin: 2cm;
          }
        </style>
      </head>
      <body>
        <pre>${textoCompleto
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</pre>
      </body>
    </html>
  `);

    ventana.document.close();
    ventana.focus();

    ventana.onload = () => {
      ventana.print();
      ventana.close();
    };
  };

  const reiniciar = () => {
    reset(VALORES_INICIALES);

    setValue("alumno.nombre", "");
    setValue("alumno.materia", "");
    setValue("alumno.curso", "");
    setValue("alumno.profesor", "");

    setMensaje("");
  };

  const cargarLocal = () => {
    const guardado = localStorage.getItem(CLAVE_LOCAL);

    if (!guardado) {
      setMensaje("No hay ningún formulario guardado.");
      return;
    }

    try {
      const datos = JSON.parse(guardado) as Formulario;

      reset(datos);

      setValue("alumno.nombre", datos.alumno?.nombre ?? "");
      setValue("alumno.materia", datos.alumno?.materia ?? "");
      setValue("alumno.curso", datos.alumno?.curso ?? "");
      setValue("alumno.profesor", datos.alumno?.profesor ?? "");

      setMensaje("Formulario cargado correctamente.");
    } catch {
      setMensaje("No se pudieron cargar los datos guardados.");
    }
  };

  const guardarLocal = () => {
    const datos = getValues();

    console.log("Datos del formulario:", datos);
    console.log("Datos del alumno:", datos.alumno);

    localStorage.setItem(CLAVE_LOCAL, JSON.stringify(datos));

    setMensaje("Formulario guardado en este navegador.");
  };

  return (
    <>
      <Header
        onReiniciar={reiniciar}
        onGuardar={guardarLocal}
        onCargar={cargarLocal}
      />
      <main>
        <form
          onSubmit={handleSubmit(guardarLocal)}
          className="flex flex-col gap-4 max-w-11/12 md:max-w-10/12 mx-auto my-20"
        >
          <section className="border-2 border-navy-200 rounded-md p-2 bg-white">
            <h2 className="font-bold">DATOS DEL ALUMNO Y MATERIA</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 p-4">
              <label className="flex min-w-0 flex-col gap-1 text-sm">
                Nombre / iniciales alumno/a
                <input
                  {...register("alumno.nombre")}
                  placeholder="Ej. J.M.C.S. (opcional)"
                  className="w-full min-w-0 border-2 border-navy-200 rounded-md m-2 p-2"
                />
              </label>

              <label className="flex min-w-0 flex-col gap-1 text-sm">
                Materia / asignatura
                <input
                  {...register("alumno.materia")}
                  placeholder="Ej. Matemáticas / Lengua"
                  className="w-full min-w-0 border-2 border-navy-200 rounded-md m-2 p-2"
                />
              </label>

              <label className="flex min-w-0 flex-col gap-1 text-sm">
                Curso y grupo
                <input
                  {...register("alumno.curso")}
                  placeholder="Ej. 2.º ESO B"
                  className="w-full min-w-0 border-2 border-navy-200 rounded-md m-2 p-2"
                />
              </label>

              <label className="flex min-w-0 flex-col gap-1 text-sm">
                Profesor/a / tutor/a
                <input
                  {...register("alumno.profesor")}
                  placeholder="Ej. D. Antonio Pérez"
                  className="w-full min-w-0 border-2 border-navy-200 rounded-md m-2 p-2"
                />
              </label>
            </div>
          </section>

          <section className="border-2 border-navy-200 rounded-md p-2 bg-white">
            <h2 className="font-bold">TIPOLOGÍA O NECESIDADES DEL ALUMNO</h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-3 m-4">
              {NECESIDADES.map((necesidad) => {
                const seleccionada = necesidades.includes(necesidad);

                return (
                  <button
                    key={necesidad}
                    type="button"
                    aria-pressed={seleccionada}
                    onClick={() => {
                      if (seleccionada && necesidades.length === 1) {
                        setMensaje(
                          "Debe quedar al menos una necesidad seleccionada.",
                        );
                        return;
                      }

                      const nuevasNecesidades = seleccionada
                        ? necesidades.filter((item) => item !== necesidad)
                        : [...necesidades, necesidad];

                      setValue("necesidades", nuevasNecesidades, {
                        shouldDirty: true,
                        shouldTouch: true,
                        shouldValidate: true,
                      });
                    }}
                    className={`min-w-0 rounded-md border p-2 text-left transition-colors text-sm cursor-pointer font- ${
                      seleccionada
                        ? "border-navy-800 bg-navy-800 text-white"
                        : "border-2 border-navy-200 bg-white text-gray-700 hover:bg-navy-50"
                    }`}
                  >
                    {necesidad}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() =>
                setValue("necesidades", [NECESIDADES[NECESIDADES.length - 1]], {
                  shouldDirty: true,
                  shouldTouch: true,
                  shouldValidate: true,
                })
              }
              className="text-xs underline hover:text-navy-800 cursor-pointer"
            >
              Desmarcar necesidades
            </button>
          </section>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[3fr_2fr]">
            <section className="border-2 border-navy-200 rounded-md p-2 bg-white">
              <h2 className="font-bold">MEDIDAS EDUCATIVAS</h2>

              {/* <button type="button" onClick={seleccionarTodas}>
            Seleccionar todas las medidas
          </button>

          <button type="button" onClick={desmarcarTodas}>
            Desmarcar todas las medidas
          </button> */}

              {APARTADOS.map((titulo, index) => {
                const apartadoId = index + 1;

                const medidasApartado = medidasFields
                  .map((field, fieldIndex) => ({
                    field,
                    fieldIndex,
                    medida: medidas[fieldIndex],
                  }))
                  .filter((item) => item.medida?.apartadoId === apartadoId);

                return (
                  <section
                    key={apartadoId}
                    className="my-4 p-4 border border-navy-200 rounded"
                  >
                    <h3 className="font-bold">
                      {apartadoId}. {titulo}
                    </h3>

                    {medidasApartado.map(({ field, fieldIndex }) => (
                      <div key={field.id}>
                        <label className="flex min-w-0 gap-1 text-sm">
                          <input
                            type="checkbox"
                            {...register(`medidas.${fieldIndex}.seleccionada`)}
                          />

                          <button
                            type="button"
                            onClick={() =>
                              setValue(
                                `medidas.${fieldIndex}.seleccionada`,
                                !medidas[fieldIndex].seleccionada,
                              )
                            }
                            className={`w-full min-w-0 border-2 rounded-md m-2 p-2 text-left whitespace-normal wrap-break-word bg-navy-50 ${
                              medidas[fieldIndex].seleccionada
                                ? "border-blue-500"
                                : "border-navy-200"
                            }`}
                          >
                            {medidas[fieldIndex].texto}
                          </button>
                        </label>

                        {/* <button type="button" onClick={() => remove(fieldIndex)}>
                      Eliminar
                    </button> */}
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => agregarMedida(apartadoId)}
                      className="text-xs rounded text-white bg-navy-800 hover:bg-navy-900 p-2 cursor-pointer mx-1"
                    >
                      Añadir opción
                    </button>

                    <button
                      type="button"
                      className="text-xs rounded text-white bg-navy-800 hover:bg-navy-900 p-2 cursor-pointer"
                      onClick={() => {
                        const texto = medidas
                          .filter(
                            (medida) =>
                              medida.apartadoId === apartadoId &&
                              medida.seleccionada,
                          )
                          .map((medida) => `- ${medida.texto}`)
                          .join("\n");

                        return copiarTexto(
                          texto,
                          `Apartado ${apartadoId} copiado.`,
                        );
                      }}
                    >
                      Copiar apartado
                    </button>
                  </section>
                );
              })}
            </section>

            <section className="border-2 border-navy-200 rounded-md bg-navy-50 text-sm self-start lg:sticky lg:top-24">
              <div className="flex justify-between bg-navy-800 text-white p-4 rounded">
                <h2 className="font-bold">Resultado para pegar en Séneca</h2>
                <p>{textoCompleto.length} caracteres</p>
              </div>

              <div className="flex w-full gap-2 px-4 pt-4">
                <button
                  type="button"
                  onClick={() =>
                    copiarTexto(textoCompleto, "Texto completo copiado.")
                  }
                  className="text-white text-sm bg-navy-800 hover:bg-navy-900 rounded-md cursor-pointer p-2 flex-1"
                >
                  Copiar todo
                </button>

                <button
                  type="button"
                  onClick={descargarTexto}
                  className="text-white text-sm bg-navy-800 hover:bg-navy-900 rounded-md cursor-pointer p-2 flex-1"
                >
                  Descargar TXT
                </button>

                <button
                  type="button"
                  onClick={() => imprimirTexto()}
                  className="text-white text-sm bg-navy-800 hover:bg-navy-900 rounded-md cursor-pointer p-2 flex-1"
                >
                  Imprimir PDF
                </button>

                {/* <button
                type="submit"
                className="text-white text-sm bg-navy-800 hover:bg-navy-900 rounded-md cursor-pointer p-2"
              >
                Validar formulario
              </button> */}
              </div>

              <div className="m-4">
                <textarea
                  aria-label="Resultado de la adaptación educativa"
                  value={textoCompleto}
                  rows={32}
                  readOnly
                  className="p-2 min-w-full text-sm font-mono bg-white rounded-md border border-navy-200"
                />
              </div>

              {/* <button type="button" onClick={reiniciar}>
              Reiniciar formulario
            </button> */}

              {mensaje && <p role="status">{mensaje}</p>}
            </section>
          </div>
        </form>
      </main>
    </>
  );
}
