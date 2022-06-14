import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonDatetime, NavController } from '@ionic/angular';
import { MascotaService } from 'src/app/services/mascota.service';
import { UsuarioService } from '../../../../services/usuario.service';
import { Mascota } from 'src/app/interfaces/interfaces';
import { CommonsService } from '../../../../services/commons.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Usuario, HistoriaClinica } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.page.html',
  styleUrls: ['./pet-view.page.scss'],
})
export class PetViewPage implements OnInit {
  historiaClinica : HistoriaClinica[] = [
     {
      "codigo": "68ce5cb5-8980-452f-adc3-ec5dba374dcb",
      "petId": "6296b7bf913be20e53d45b5e",
      "tipos": [],
      "descripcion": "descripcion",
      "adjuntos": [],
      "comentarios": "",
      "fecha": new Date("2022-06-14T21:32:58.940Z"),
      "_id": "62a8fe8a0c6cedbe4ff9507f"

  },      {
    "codigo": "68ce5cb5-8980-452f-adc3-ec5dba374dcb",
    "petId": "6296b7bf913be20e53d45b5e",
    "tipos": [],
    "descripcion": "descripcion",
    "adjuntos": [],
    "comentarios": "",
    "fecha": new Date("2022-06-14T21:32:58.940Z"),
    "_id": "62a8fe8a0c6cedbe4ff9507f"

},      {
  "codigo": "68ce5cb5-8980-452f-adc3-ec5dba374dcb",
  "petId": "6296b7bf913be20e53d45b5e",
  "tipos": [],
  "descripcion": "descripcion",
  "adjuntos": [],
  "comentarios": "",
  "fecha": new Date("2022-06-14T21:32:58.940Z"),
  "_id": "62a8fe8a0c6cedbe4ff9507f"

},      {
  "codigo": "68ce5cb5-8980-452f-adc3-ec5dba374dcb",
  "petId": "6296b7bf913be20e53d45b5e",
  "tipos": [],
  "descripcion": "descripcion",
  "adjuntos": [],
  "comentarios": "",
  "fecha": new Date("2022-06-14T21:32:58.940Z"),
  "_id": "62a8fe8a0c6cedbe4ff9507f"

}
  ];

  public id: string;
  listaAnio: number[] = [];
  razas: string[] = [];
  kinds: string[] = [];
  genders: string[] = [];
  titulo: string = '';
  isNew: boolean = false;

  mascota: Mascota = {
    _id: '',
    name: '',
    gender: '',
    breed: '',
    kind: '',
    dateOfBirth: '',
    dateOfBirthDescription: '',
    notes: '',
    pics: null,
    vets: [],
    userId: ''

  };

  usuario: Usuario = {};
  public mascotas: Mascota[] = [];

  constructor(private navCtrl: NavController,
    private commonsService: CommonsService,
    private mascotaService: MascotaService,
    private uiService: UiServiceService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.listaAnio = this.commonsService.getYears();
    this.razas = this.commonsService.getBreed();
    this.kinds = this.commonsService.getKind();
    this.genders = this.commonsService.getGender();
    this.usuario = this.usuarioService.getUsuario();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.isNew = false;
      this.mascota = await this.mascotaService.getbyId(this.id);


    }
  }

  onCancel() {
    this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
  }
  goPetForm() {

    this.navCtrl.navigateRoot('/main/main/pet/pet-view/history-form', { animated: true });
  }

}
