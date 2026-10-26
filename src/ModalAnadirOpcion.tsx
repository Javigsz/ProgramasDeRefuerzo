import { useState } from "react";

type ModalAnadirOpcionProps = {
  apartadoId: number;
  tituloApartado: string;
  onCancel: () => void;
  onAdd: (texto: string) => void;
};

export default function ModalAnadirOpcion({
  apartadoId,
  tituloApartado,
  onCancel,
  onAdd,
}: ModalAnadirOpcionProps) {
  const [texto, setTexto] = useState("");

  const confirmar = () => {
    const valor = texto.trim();
    if (!valor) return;
    onAdd(valor);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-nueva-medida"
    >
      <div className="w-full max-w-lg rounded-lg bg-white p-5 shadow-xl">
        <h2
          id="titulo-nueva-medida"
          className="text-lg font-bold text-navy-900"
        >
          Añadir opción
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Apartado {apartadoId}: {tituloApartado}
        </p>

        <label
          className="mt-4 block text-sm font-semibold"
          htmlFor="texto-nueva-medida"
        >
          Texto de la medida
        </label>
        <textarea
          id="texto-nueva-medida"
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
          rows={3}
          autoFocus
          className="mt-1 w-full rounded-md border border-slate-300 p-2 text-sm"
          placeholder="Escribe la nueva medida educativa..."
        />

        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={confirmar}
            disabled={!texto.trim()}
            className="rounded-md bg-navy-800 px-3 py-2 text-sm text-white hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Añadir medida
          </button>
        </div>
      </div>
    </div>
  );
}
