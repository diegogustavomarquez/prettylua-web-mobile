import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonDatetime, NavController } from '@ionic/angular';
import { MascotaService } from 'src/app/services/mascota.service';
import { UsuarioService } from '../../../../services/usuario.service';
import { Mascota } from 'src/app/interfaces/interfaces';
import { CommonsService } from '../../../../services/commons.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Usuario, HistoriaClinica } from 'src/app/interfaces/interfaces';
import { HcService } from '../../../../services/hc.service';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.page.html',
  styleUrls: ['./pet-view.page.scss'],
})
export class PetViewPage implements OnInit {
  
 

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
  public historiaClinica: HistoriaClinica [] =[];

  constructor(private navCtrl: NavController,
    private commonsService: CommonsService,
    private mascotaService: MascotaService,
    private uiService: UiServiceService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private hc: HcService) { }

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
    this.historiaClinica = await this.hc.getbyPetId(this.id);

    this.hc.nuevaAtencion.subscribe(hc => {
      this.historiaClinica.unshift(hc);
    });
  }

  onCancel() {
    this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
  }
  goPetForm() {
    this.navCtrl.navigateRoot('/main/main/pet/pet-view/history-form/history-form', { animated: true });
  }

  
 
  /*async presentAlertConfirm(id: string) {
    //nose de donde sale
    const alert = await this.navCtrl.create({
      header: '',
      message: "¿Esta seguro que desea eliminar?",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            const actualizado = this.hc.delete(id);
            if (actualizado) {
              this.uiService.presentToast('Se elimino la historia Clinica');
              this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
            } else {
              this.uiService.presentToast('No se pudo eliminar');
            }
          }
        }
      ]
    });
    await alert.present();
  }*/
  async presentAlertConfirm(id: string) {
  }
}
