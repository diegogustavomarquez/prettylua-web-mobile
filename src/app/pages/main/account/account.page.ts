import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import {NavController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService: UsuarioService,  private navCtrl: NavController) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.usuarioService.getUpdateUserObservable().subscribe((data) => {
      this.usuario = data;
    });
  }
  goAccount() {
    this.navCtrl.navigateRoot('/main/main/account/account-form', { animated: true });
   
  }

  anularSubscripcion(){
    console.log("TO DO!!")
  }

}
