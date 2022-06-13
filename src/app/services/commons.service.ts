import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  constructor() { }

  getYears(): number[] {
    const listaAnio: number[] = [];
    for (let i = 2022; i > 2000; i--) {
      listaAnio.push(i);
    }
    return listaAnio;
  }

  getBreed(): string[] {
    return ['Cruzado', 'Boxer', 'Callejero', 'Terrier', 'Bulldog', 'Ovejero', 'Caniche', 'Otro'];
  }

  getKind(): string[] {
    return ['Perro', 'Gato', 'Tortuga', 'Pajaro', 'Hamster'];
  }

  getGender(): string[] {
    return  ['Macho', 'Hembra', 'Desconocido'];
  }

  getAprox(): string[] {
    return ['Fecha exacta', 'Fecha Aproximada'];
  }

  getTipoHistoriaClinica(): string[] {
    return ['Vacuna', 'Antiparasitario', 'Control', 'Enfermedad', 'Estudios Medicos'];
  }
}
