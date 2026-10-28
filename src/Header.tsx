type HeaderProps = {
  onReiniciar: () => void;
  onGuardar: () => void;
  onCargar: () => void;
};

export default function Header({
  onReiniciar,
  onGuardar,
  onCargar,
}: HeaderProps) {
  return (
    <>
      <div className="fixed top-0 md:h-20 h-26 w-screen bg-white z-10 text-slate-800 flex flex-col justify-around drop-shadow-sm ">
        <div className="flex flex-col md:flex-row justify-around items-center h-full">
          <div className="flex items-center">
            <img src="/logo1.jpeg" className="h-20 mr-2" alt="" />
            <h1 className="md:text-xl font-serif font-extrabold">
              Programas de Refuerzo
            </h1>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={onReiniciar}
              className="font-bold rounded hover:bg-slate-900 border border-slate-800 bg-slate-800 text-white md:py-2 px-4 py-1 cursor-pointer"
            >
              Reiniciar
            </button>
            <button
              onClick={onGuardar}
              className="font-bold rounded border border-slate-800 hover:bg-slate-50 bg-white text-slate-800 px-4 md:py-2 py-1 cursor-pointer"
            >
              Guardar Borrador
            </button>
            <button
              onClick={onCargar}
              className="font-bold rounded hover:bg-slate-900 border border-slate-800 bg-slate-800 px-4 md:py-2 py-1 text-white cursor-pointer"
            >
              Cargar Borrador
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
