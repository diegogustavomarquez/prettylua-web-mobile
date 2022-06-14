import { Component, OnInit } from '@angular/core';
import { HistoriaClinica } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-history-form',
  templateUrl: './history-form.page.html',
  styleUrls: ['./history-form.page.scss'],
})
export class HistoryFormPage implements OnInit {
  historiaClinica : HistoriaClinica = 
    {
     "codigo": "68ce5cb5-8980-452f-adc3-ec5dba374dcb",
     "petId": "6296b7bf913be20e53d45b5e",
     "tipos": [],
     "descripcion": "descripcion",
     "adjuntos": [],
     "comentarios": "",
     "fecha": new Date("2022-06-14T21:32:58.940Z"),
     "_id": "62a8fe8a0c6cedbe4ff9507f"
 }     
 ;
  constructor() { }

  ngOnInit() {
  }

}
