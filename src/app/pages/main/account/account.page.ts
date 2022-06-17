import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import {NavController } from '@ionic/angular';
import { UiServiceService } from '../../../services/ui-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  usuario: Usuario;
  public actualizadas: Usuario[] = [];
  //public usuario: Usuario[] = [];
 
  constructor(private usuarioService: UsuarioService,  
              private navCtrl: NavController,
              private uiService: UiServiceService) { }

   ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.usuarioService.getUpdateUserObservable().subscribe((data) => {
    this.usuario = data;
   // this.usuarioService.actualizarUser
  //  .subscribe(user=>{this.usuario.splice(this.usuario
     //  .finIndex(index =>.)))
  
    });

    /**
     * await this.mascotaService.getbyUserId().then(p => this.actualizadas = p);
      this.mascotaService.actualizarMascota
      .subscribe(pet => {
        this.mascotas.splice(this.mascotas
          .findIndex(index => index._id === pet._id), 1, pet);
      });
     */
    
  }
  goAccount() {
    this.navCtrl.navigateRoot('/main/main/account/account-form', { animated: true });
   
  }

  anularSubscripcion(){
    console.log("TO DO!!")
  }

}
