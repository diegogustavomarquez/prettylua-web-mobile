
export interface Componente {
  icon :string;
  name :string;
  redirectTo: string;
  
  }
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
  telefono?:number;
  email?: string;
  password?: string;
 // codigo:number;
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

