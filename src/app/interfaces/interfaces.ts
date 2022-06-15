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
  pics?: string;
  vets?: string[];
  notes?: string;
  userId ?: string;
}

export interface Kind {
  _id?:string;
  description?: string;
}

export interface UserSubscription {
  _id?:string;
  nombre?: string;
  cuitcuil?: string;
  fechaInicio?: string;
  responsable?: string;
  direccionFisica?: string;
  titularTarjeta?: string;
  prefijo?: string;
  subfijo?: string;
  caducidad?: string;
  cvc?: string;
  userId?: string;
}

export interface Store {
  _id?:string;
  nombre?: string;
  direccion?: string;
  codigoPostal?: string;
  localidad?: string;
  provincia?: string;
  servicios?: [];
  dias?: [];
  esDeCorrido?: Boolean;
  horarioDesde?: string;
  horarioHasta?: string;
  horarioTardeDesde?: string;
  horarioTardeHasta?: string;
  es24hs?: Boolean;
  descripcion?: string;
  promocion?: string;
  promocionFoto?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  email?:string;
  telefono?: number;
  userId?: string;
}