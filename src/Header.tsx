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
      <div className="fixed top-0 h-20 w-screen bg-navy-800 flex justify-center items-center z-10 text-white">
        <div className="flex justify-around items-center w-11/12">
          <div className="flex items-center">
            <img src="/icon.png" className="w-8 h-8 mr-2" alt="" />
            <h1 className="text-2xl font-bold">Programas de Refuerzo</h1>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={onReiniciar}
              className="font-bold border-2 border-white rounded hover:bg-navy-900 bg-navy-800 px-4 py-2 cursor-pointer"
            >
              Reiniciar
            </button>
            <button
              onClick={onGuardar}
              className="font-bold rounded hover:bg-navy-50 bg-white text-navy-800 px-4 py-2 cursor-pointer"
            >
              Guardar Borrador
            </button>
            <button
              onClick={onCargar}
              className="font-bold border-2 border-white rounded hover:bg-navy-900 bg-navy-800 px-4 py-2 cursor-pointer"
            >
              Cargar Borrador
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
