import { useMemo, useState } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import Header from "./Header.tsx";
import { APARTADOS, MEDIDAS_POR_NECESIDAD } from "./medidas";
import ModalAnadirOpcion from "./ModalAnadirOpcion.tsx";
import type { Formulario, Medida } from "./types";
import { toast } from "react-toastify";

const CLAVE_LOCAL = "adaptacion-educativa";

const NECESIDADES = [
  "NEAE - TDAH",
  "DEA - Lectura / Dislexia",
  "DEA - Escritura / Disgrafía / Disortografía",
  "DEA - Cálculo / Discalculia",
  "NEE - Discapacidad Intelectual (DIL)",
  "NEE - Inteligencia Límite (FIL)",
  "NEE - Trastorno del Espectro Autista (TEA)",
  "NEE - Sensorial / Motor",
  "Altas Capacidades (ALCAIN)",
  "ECOPHE / Incorporación Tardía / Compensatoria",
  "Asignatura Pendiente",
  "Alumnado Repetidor",
  "Refuerzo Ordinario General",
];

const COLORES_ETIQUETAS: Record<string, string> = {
  "NEAE - TDAH": "bg-rose-100 text-rose-800 border-rose-200",
  "DEA - Lectura / Dislexia": "bg-orange-100 text-orange-800 border-orange-200",
  "DEA - Escritura / Disgrafía / Disortografía":
    "bg-amber-100 text-amber-800 border-amber-200",
  "DEA - Cálculo / Discalculia": "bg-lime-100 text-lime-800 border-lime-200",
  "NEE - Discapacidad Intelectual (DIL)":
    "bg-emerald-100 text-emerald-800 border-emerald-200",
  "NEE - Inteligencia Límite (FIL)":
    "bg-teal-100 text-teal-800 border-teal-200",
  "NEE - Trastorno del Espectro Autista (TEA)":
    "bg-cyan-100 text-cyan-800 border-cyan-200",
  "NEE - Sensorial / Motor": "bg-sky-100 text-sky-800 border-sky-200",
  "Altas Capacidades (ALCAIN)": "bg-blue-100 text-blue-800 border-blue-200",
  "ECOPHE / Incorporación Tardía / Compensatoria":
    "bg-indigo-100 text-indigo-800 border-indigo-200",
  "Asignatura Pendiente": "bg-violet-100 text-violet-800 border-violet-200",
  "Alumnado Repetidor": "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200",
  "Refuerzo Ordinario General": "bg-pink-100 text-pink-800 border-pink-200",
};

const MEDIDAS_INICIALES: Medida[] = MEDIDAS_POR_NECESIDAD.map((medida) => ({
  apartadoId: medida.apartadoId,
  texto: medida.texto,
  necesidades: [medida.necesidad],
  seleccionada: true,
}));

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
  const [apartadoNuevaMedida, setApartadoNuevaMedida] = useState<number | null>(
    null,
  );

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
          (medida) =>
            medida.apartadoId === apartadoId &&
            medida.seleccionada &&
            (medida.personalizado ||
              medida.necesidades?.some((necesidad) =>
                necesidades.includes(necesidad),
              )),
        )
        .map((medida) => `- ${medida.texto}`);

      if (!seleccionadas.length) return "";

      return [`${apartadoId}. ${titulo.toUpperCase()}`, ...seleccionadas].join(
        "\n",
      );
    })
      .filter(Boolean)
      .join("\n\n");
  }, [medidas, necesidades]);

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
      toast.success(confirmacion);
    } catch {
      toast.error("No se pudo copiar. Comprueba los permisos del navegador.");
    }
  };

  const abrirNuevaMedida = (apartadoId: number) => {
    setApartadoNuevaMedida(apartadoId);
  };

  const agregarMedida = (texto: string) => {
    if (apartadoNuevaMedida === null || !texto.trim()) return;

    append({
      apartadoId: apartadoNuevaMedida,
      texto: texto.trim(),
      necesidades: [],
      personalizado: true,
      seleccionada: true,
    });
    setApartadoNuevaMedida(null);
  };

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

    toast.success("Datos reiniciados.");
  };

  const cargarLocal = () => {
    const guardado = localStorage.getItem(CLAVE_LOCAL);

    if (!guardado) {
      toast.error("No hay datos guardados.");
      return;
    }

    try {
      const datos = JSON.parse(guardado) as Formulario;

      const datosNormalizados: Formulario = {
        ...datos,
        medidas: (datos.medidas ?? []).map((medida) => ({
          ...medida,
          necesidades:
            medida.necesidades ??
            (medida.apartadoId >= 1 && medida.apartadoId <= 5
              ? ["Refuerzo Ordinario General"]
              : []),
          personalizado: medida.personalizado ?? false,
          ...(medida.personalizado ? { necesidades: [] } : {}),
        })),
      };

      reset(datosNormalizados);

      setValue("alumno.nombre", datos.alumno?.nombre ?? "");
      setValue("alumno.materia", datos.alumno?.materia ?? "");
      setValue("alumno.curso", datos.alumno?.curso ?? "");
      setValue("alumno.profesor", datos.alumno?.profesor ?? "");

      toast.success("Formulario cargado correctamente.");
    } catch {
      toast.error("No se pudieron cargar los datos guardados.");
    }
  };

  const guardarLocal = () => {
    const datos = getValues();

    console.log("Datos del formulario:", datos);
    console.log("Datos del alumno:", datos.alumno);

    localStorage.setItem(CLAVE_LOCAL, JSON.stringify(datos));

    toast.success("Formulario guardado en este navegador.");
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
                        toast.error(
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

              {APARTADOS.map((titulo, index) => {
                const apartadoId = index + 1;

                const medidasApartado = medidasFields
                  .map((field, fieldIndex) => ({
                    field,
                    fieldIndex,
                    medida: medidas[fieldIndex],
                  }))
                  .filter(
                    (item) =>
                      item.medida?.apartadoId === apartadoId &&
                      (item.medida.personalizado ||
                        item.medida.necesidades?.some((necesidad) =>
                          necesidades.includes(necesidad),
                        )),
                  );

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

                          <div className="w-full min-w-0 m-2">
                            <button
                              type="button"
                              onClick={() =>
                                setValue(
                                  `medidas.${fieldIndex}.seleccionada`,
                                  !medidas[fieldIndex].seleccionada,
                                )
                              }
                              className={`w-full min-w-0 border-2 cursor-pointer rounded-md p-2 text-left whitespace-normal wrap-break-word bg-navy-50 ${
                                medidas[fieldIndex].seleccionada
                                  ? "border-navy-500"
                                  : "border-navy-200"
                              }`}
                            >
                              <div>{medidas[fieldIndex].texto}</div>
                              <div className="mt-1.5 flex flex-wrap gap-1">
                                {medidas[fieldIndex].personalizado && (
                                  <span className="inline-flex max-w-full rounded-full border border-slate-300 bg-slate-100 px-1.5 py-0.5 text-[10px] leading-tight font-semibold text-slate-700 whitespace-normal">
                                    Personalizado
                                  </span>
                                )}
                                {!medidas[fieldIndex].personalizado &&
                                  (medidas[fieldIndex].necesidades?.length
                                    ? medidas[fieldIndex].necesidades
                                    : ["Sin tipología asignada"]
                                  ).map((necesidad) => (
                                    <span
                                      key={necesidad}
                                      className={`inline-flex max-w-full rounded-full border px-1.5 py-0.5 text-[10px] leading-tight font-semibold whitespace-normal ${
                                        COLORES_ETIQUETAS[necesidad] ??
                                        "bg-slate-100 text-slate-700 border-slate-200"
                                      }`}
                                    >
                                      {necesidad}
                                    </span>
                                  ))}
                              </div>
                            </button>
                          </div>
                        </label>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => abrirNuevaMedida(apartadoId)}
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
                              medida.seleccionada &&
                              (medida.personalizado ||
                                medida.necesidades?.some((necesidad) =>
                                  necesidades.includes(necesidad),
                                )),
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
            </section>
          </div>

          {apartadoNuevaMedida !== null && (
            <ModalAnadirOpcion
              apartadoId={apartadoNuevaMedida}
              tituloApartado={APARTADOS[apartadoNuevaMedida - 1]}
              onCancel={() => setApartadoNuevaMedida(null)}
              onAdd={agregarMedida}
            />
          )}
        </form>
      </main>
    </>
  );
}
