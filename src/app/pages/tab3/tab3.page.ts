import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';
import { PostsService } from 'src/app/services/posts.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario: Usuario = {};

  constructor( private usuarioService: UsuarioService,
               private uiService: UiServiceService,
               private postsService: PostsService ,
               private navCtrl: NavController,
               public alertCtrl: AlertController) { }

  ngOnInit() {

    this.usuario = this.usuarioService.getUsuario();

    console.log(this.usuario);

  }


  async actualizar( fActualizar: NgForm ) {

    if ( fActualizar.invalid ) { return; }

    const actualizado = await this.usuarioService.actualizarUsuario( this.usuario );
    if ( actualizado ) {
      // toast con el mensaje de actualizado
      //this.uiService.presentToast( 'Registro actualizado' );
      this.presentAlert();
      //que vuelva al inicio
      this.navCtrl.navigateRoot( '/login', { animated: true } );
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
      subHeader: 'ATENTI!!',
      message: 'Registro Actualizado',
      buttons: ['OK']
    });
    await alert.present();
  }
  logout() {

    this.postsService.paginaPosts = 0;
    this.usuarioService.logout();

  }

}
