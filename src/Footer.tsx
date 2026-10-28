const Footer = () => {
  return (
    <>
      <div className="w-full h-22 bg-white drop-shadow-sm flex items-center justify-center text-slate-800">
        <div className="flex justify-around items-center w-11/12 h-full">
          <img src="/logo2.png" className="md:h-20 h-14" alt="logo2" />
          <p className="text-[12px] text-center">
            Programas de Refuerzo.
            <br /> Generador de medidas para Séneca.
          </p>
          <div className="flex flex-col items-center justify-center sm:text-[12px] text-[9px] h-full">
            <a
              href="https://iesfuentealamo.es/"
              className="underline hover:text-slate-500"
              target="_blank"
            >
              IES Fuente Álamo
            </a>
            <a
              href="https://seneca.juntadeandalucia.es/seneca/jsp/portal/"
              className="underline hover:text-slate-500"
              target="_blank"
            >
              Séneca
            </a>
            <a
              href="https://www.juntadeandalucia.es/educacion/portales/"
              className="underline hover:text-slate-500"
              target="_blank"
            >
              Junta de Andalucía
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
