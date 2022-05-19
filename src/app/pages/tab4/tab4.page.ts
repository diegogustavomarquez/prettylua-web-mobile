import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { MascotaService } from '../../services/mascota.service';
import { Mascota } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

//fnac : Date = new Date();
registerMascota: Mascota = {
  nombre: '',
  especie: '',
  raza: '',
  fechaNacimiento: null,
 // foto: 'av-1.png',
  estado : 'Activo'

};

  mascota : Mascota = {};

  constructor(private mascotaService: MascotaService,
              private navCtrl: NavController,
              private uiService: UiServiceService ,
              public alertCtrl: AlertController) { }

ngOnInit() {

  this.mascota = this.mascotaService.getMascota();

  console.log(this.mascota);
}


async presentAlert() {
  const alert = await this.alertCtrl.create({
    backdropDismiss:false,
    header: 'Alert',
    message: 'Registro Cargado',
    buttons: ['OK']
  });
  await alert.present();
}
async presentActualizado() {
  const alert = await this.alertCtrl.create({
    backdropDismiss:false,
    header: 'Alert',
    message: 'Registro Actualizado',
    buttons: ['OK']
  });
  await alert.present();
}
async presentAlertConfirm() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    message: 'Confirma el registro de su Mascota?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        id: 'cancel-button',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        id: 'confirm-button',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}
async registrarMascota( fRegistro: NgForm ) {

      if ( fRegistro.invalid ) { return; }

      const valido = await this.mascotaService.registro( this.registerMascota);

      if ( valido ) {
     
      // this.navCtrl.navigateRoot( '/main/tabs/tab4', { animated: true } );
      this.presentAlert();
      } else {
 
      this.uiService.alertaInformativa('La mascota ya existe.');
      }

}

async actualizarMascota( fActualizar: NgForm ) {

  if ( fActualizar.invalid ) { return; }

  const actualizado = await this.mascotaService.actualizarMascota( this.mascota );
  if ( actualizado ) {
    this.presentActualizado();
  } else {
    // toast con el error
    this.uiService.presentToast( 'No se pudo actualizar' );
  }

}




}
