import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import {NavController } from '@ionic/angular';
import { UiServiceService } from '../../../services/ui-service.service';
import { SwPush } from '@angular/service-worker';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  usuario: Usuario;
  public actualizadas: Usuario[] = [];
  //public usuario: Usuario[] = [];
 
  respuesta: any;
  readonly VAPID_PUBLIC_KEY = "BDoY7Ap872g9qjnRrNQeQp58HMzw-6dQ9JyLWmozepSmGUPFeTNNwqe30SXQFLs1W1sEIE1klNWU9UppOdnvpVY";

  constructor(private usuarioService: UsuarioService,  
              private navCtrl: NavController,
              private uiService: UiServiceService,
              private swPush: SwPush,
              private subscriptionService : SubscriptionService) { }

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

  subscribeToNotifications() {
    this.swPush.requestSubscription(
      {
        serverPublicKey: this.VAPID_PUBLIC_KEY
      }
    ).then(respuesta => {
      console.log("respuesta",respuesta);
      this.respuesta = respuesta
      this.subscriptionService.save(respuesta);
      this.uiService.alertaInformativa('Se subscribio correctamente.');
    })
      .catch(err => {
        console.log("err",err);
        this.respuesta = err
      })
  }

}
