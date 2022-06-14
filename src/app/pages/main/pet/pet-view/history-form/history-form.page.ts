import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UiServiceService } from '../../../../../services/ui-service.service';
import { UsuarioService } from '../../../../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/interfaces/interfaces';
import { HistoriaClinica } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-history-form',
  templateUrl: './history-form.page.html',
  styleUrls: ['./history-form.page.scss'],
})
export class HistoryFormPage implements OnInit {


  public mascotas: Mascota[] = [];
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


  constructor(private navCtrl: NavController,
    private uiService: UiServiceService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onCancel() {
    this.navCtrl.navigateRoot('/main/main/pet/pet-view', { animated: true });
  }
  goPetForm() {
//aca para nose
    this.navCtrl.navigateRoot('/main/main/pet/pet-form', { animated: true });
  }
}
