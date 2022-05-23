import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: 'diegomarquez86@gmail.com',
    password: '123456'
  };

  constructor(private usuarioService: UsuarioService,
                private navCtrl: NavController,
               private uiService: UiServiceService ) { }

  ngOnInit() {
  }


  async login( fLogin: NgForm ) {
    if ( fLogin.invalid ) { return; }
    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );
    if ( valido ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/main/main/home', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Usuario y/o contraseña no son correctos.');
    }

  }

}
