import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from 'src/app/interfaces/interfaces';
import { MascotaService } from 'src/app/services/mascota.service';
import { IonList, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UiServiceService } from '../../../services/ui-service.service';



@Component({
  selector: 'app-pet',
  templateUrl: './pet.page.html',
  styleUrls: ['./pet.page.scss'],
})
export class PetPage implements OnInit {

  public mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService,
    private navCtrl: NavController,
    public alertController: AlertController,
    private uiService: UiServiceService) { }

  async ngOnInit() {
    await this.mascotaService.getbyUserId().then(p => this.mascotas = p);
    //evento que se queda escuchando cuando se agrega una nueva mascota
    this.mascotaService.nuevaMascota
      .subscribe(mascota => {
        this.mascotas.unshift(mascota);
      });

/*    TODO realizar la busquea y el reemplazo del elemento en el array.   
      this.mascotaService.actualizarMascota
      .subscribe(mascota => {
        this.mascotas.unshift(mascota);
      }); */
    }

  async presentAlertConfirm(id: string) {
    console.log('llega delete');
    const alert = await this.alertController.create({
      cssClass: 'alert-head sc-ion-alert-ios',
      header: '¿Esta seguro que desea eliminar?',
      message: "",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'rojo',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          cssClass: 'rojo',
          id: 'confirm-button',
          handler: () => {
            const actualizado = this.mascotaService.delete(id);
            if (actualizado) {
              this.uiService.presentToast('Se elimino la mascota');
              this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
            } else {
              this.uiService.presentToast('No se pudo eliminar');
            }
            console.log('Confirm Okay');
          }
        }
      ]
    });

  }


  goPetForm() {
    //[routerLink]="['pet-form']" 
    this.navCtrl.navigateRoot('/main/main/pet/pet-form', { animated: true });
  }

  goHomeCancel() {
    this.navCtrl.navigateRoot('/main/main/home', { animated: true });
  }
  }

