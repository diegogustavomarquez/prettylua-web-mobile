export interface Usuario {
  avatar?: string;
  _id?: string;
  nombre?: string;
  apellido?: string;
  telefono?:number;
  email?: string;
  password?: string;
  perfil?: string;
}

export interface Mascota {
  _id?:string;
  nombre? :string;
  raza? : string;
  sexo?:string;
  anio? : Number;
  mes? : Number;
  foto? :string[];
  estado? : string;
  codigo?:Usuario;
}

