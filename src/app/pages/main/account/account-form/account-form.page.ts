import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.page.html',
  styleUrls: ['./account-form.page.scss'],
})
export class AccountFormPage implements OnInit {

  imagen: any = '/assets/avatars/icon.png';
  imageTemporal: any;
  isPhotoPresent: boolean = false;

  usuario: Usuario = {};

  constructor( private usuarioService: UsuarioService,
               private uiService: UiServiceService,
               private navCtrl: NavController,
               public alertCtrl: AlertController) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    if(this.usuario.avatar){
      this.isPhotoPresent = true;
      this.imageTemporal = this.usuario.avatar;
    } else {
      this.imageTemporal = this.imagen;
    }
  }


  async actualizar( fActualizar: NgForm ) {
    if ( fActualizar.invalid ) { return; }
    if(this.isPhotoPresent){
      this.usuario.avatar = this.imageTemporal;
    }
    const actualizado = await this.usuarioService.actualizarUsuario( this.usuario );
    if ( actualizado ) {
      // toast con el mensaje de actualizado
      //this.uiService.presentToast( 'Registro actualizado' );
      this.presentAlert();
      //que vuelva al inicio
      this.navCtrl.navigateRoot( '/main/main/account', { animated: true } );
    } else {
      // toast con el error
      this.uiService.presentToast( 'No se pudo actualizar' );
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
     // cssClass: 'my-custom-class',//para classe personalizada
     backdropDismiss:false,
      header: 'Alert',
      message: 'Registro Actualizado',
      buttons: ['OK']
    });
    await alert.present();
  }

    /**
   * carga la imagen elegida por el usuario
   * 
   * @param event 
   */
     async loadImagen(event: any) {
      let archivos = event.target.files[0];
      let sizeFile: number = archivos.size;
      if (sizeFile > 100000) {
        this.uiService.alertaInformativa('La imagen que intenta guardar tiene mucha resolución.');
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(archivos);
      reader.onloadend = () => {
        this.imageTemporal = reader.result as string;
        this.isPhotoPresent = true;
      }
    }
  
    /**
     * Saca la foto seleccionada
     * 
     * @param event 
     */
    async kickImagen() {
      this.imageTemporal = this.imagen;
      this.isPhotoPresent = false;
    }

}
