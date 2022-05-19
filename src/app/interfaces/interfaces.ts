
export interface RespuestaPosts {
  ok: boolean;
  pagina: number;
  posts: Post[];
}

export interface Post {
  imgs?: string[];
  _id?: string;
  mensaje?: string;
  coords?: string;
  usuario?: Usuario;
  created?: string;
}

export interface Usuario {
  avatar?: string;
  _id?: string;
  nombre?: string;
  apellido?: string;
  email?: string;
  password?: string;
 // codigo:number;
}

export interface Mascota {
  _id?:string;
  nombre? :string;
  especie? : string;
  raza? : string;
  fechaNacimiento? : Date;
  foto? :string[];
  estado? : string;
  codigo?:Usuario;
}

