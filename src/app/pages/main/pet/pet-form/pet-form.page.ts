import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Mascota } from 'src/app/interfaces/interfaces';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.page.html',
  styleUrls: ['./pet-form.page.scss'],
})
export class PetFormPage implements OnInit {

  public id: string;

  listaMes:number[] = [1,2,3,4,5];
  listaAnio:number[] = [1,2,3,4,5,6,7,8,9,10];

  registerMascota: Mascota = {
    nombre: '',
    sexo : '',
    raza: '',
    anio : null,
    mes : null,
   // foto: 'av-1.png',
    estado : 'Activo'

  };
  mascota : Mascota = {};
  
  constructor(private activatedRoute: ActivatedRoute,
            private mascotaService: MascotaService,
              private navCtrl: NavController,
              private uiService: UiServiceService ,
              public alertCtrl: AlertController) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(!this.id){
      this.mascota = this.mascotaService.getMascota(this.id);
    }
              
    console.log(this.mascota);
  }

    /*---------------------------------* */
    async registro( fRegistro: NgForm ) {

      if ( fRegistro.invalid ) { return; }
  
      const valido = await this.mascotaService.registro( this.registerMascota);
  
      if ( valido ) {
        this.navCtrl.navigateRoot( '/mascota', { animated: true } );
      } else {
        this.uiService.alertaInformativa('La mascota ya existe.');
      }
  
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
