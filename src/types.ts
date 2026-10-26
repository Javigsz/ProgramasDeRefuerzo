export type Alumno = {
  nombre: string;
  materia: string;
  curso: string;
  profesor: string;
};

export type Medida = {
  apartadoId: number;
  texto: string;
  seleccionada: boolean;
  necesidades: string[];
  personalizado?: boolean;
};

export type Formulario = {
  alumno: Alumno;
  necesidades: string[];
  medidas: Medida[];
};
