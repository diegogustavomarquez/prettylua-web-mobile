import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {


  registerUser: Usuario = {
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    avatar: 'av-1.png',
    perfil: 'Propietario'
  };

  constructor(private usuarioService: UsuarioService,
                private navCtrl: NavController,
               private uiService: UiServiceService ) { }

  ngOnInit() {
  }

  async registro( fRegistro: NgForm ) {

    if ( fRegistro.invalid ) { return; }

    const valido = await this.usuarioService.registro( this.registerUser );

    if ( valido ) {
      // navegar al tabs
     this.navCtrl.navigateRoot( '/main/main/home', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Ese correo electrónico ya existe.');
    }

  }

}
