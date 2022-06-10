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
  public actualizadas: Mascota[] = [];
  public eliminadas: Mascota[] = [];

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

      await this.mascotaService.getbyUserId().then(p => this.actualizadas = p);
      this.mascotaService.actualizarMascota
      .subscribe(pet => {
        this.mascotas.splice(this.mascotas
          .findIndex(index => index._id === pet._id), 1, pet);
      });

      await this.mascotaService.getbyUserId().then(p => this.eliminadas = p);
      this.mascotaService.borrarMascota
      .subscribe(pet => {
        this.mascotas.splice(this.mascotas
          .findIndex(index => index._id === pet._id), 1);
      });

    }

  /*public CalculateAge(dateOfBirth:string): void {
      let age;
      if(dateOfBirth){
         var timeDiff = Math.abs(Date.now() - new Date(dateOfBirth).getDate());
         //Used Math.floor instead of Math.ceil
         //so 26 years and 140 days would be considered as 26, not 27.
         age = Math.floor((timeDiff / (1000 * 3600 * 24))/365) +"edad";
     }
     return age;
  }*/

  async presentAlertConfirm(id: string) {
    const alert = await this.alertController.create({
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
            const actualizado = this.mascotaService.delete(id);
            if (actualizado) {
              this.uiService.presentToast('Se elimino la mascota');
              this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
            } else {
              this.uiService.presentToast('No se pudo eliminar');
            }
          }
        }
      ]
    });
    await alert.present();
  }


  goPetForm() {

    this.navCtrl.navigateRoot('/main/main/pet/pet-form', { animated: true });
  }

  goHomeCancel() {
    this.navCtrl.navigateRoot('/main/main/home', { animated: true });
  }
  }

