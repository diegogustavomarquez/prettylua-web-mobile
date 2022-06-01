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
  name?: string;
  gender? : string;
  breed? : string;
  kind? : string;
  dateOfBirth? : string;
  dateOfBirthDescription?: string;
  pics?: string[];
  vets?: string[];
  notes?: string;
  userId ?: string;
}

export interface Kind {
  _id?:string;
  description?: string;
}