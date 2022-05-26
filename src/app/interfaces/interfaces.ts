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
  id?:string;
  name?: string;
  gender? : string;
  breed? : string;
  kind? : string;
  color? : string;
  year?: Number;
  month? : Number;
  pics?: string[];
  vets?: string[];
  isAlive?: Boolean;
  castrated?: Boolean;
  status?: Boolean;
  userId ?: String;
}

