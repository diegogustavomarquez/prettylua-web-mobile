import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

getUsuarios(){

  return this.http.get('https://jsonplaceholder.typicode.com/users')
}
getMenuOpts(){

  return this.http.get<Componente[]>('/assets/data/menu.json');
}
}