import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserSubscription } from 'src/app/interfaces/interfaces';
import { UserSubscriptionService } from 'src/app/services/user-subscription.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.page.html',
  styleUrls: ['./user-subscription.page.scss'],
})
export class UserSubscriptionPage implements OnInit {

  subscription: UserSubscription = {};

  constructor(private userSubscriptionService: UserSubscriptionService,
              private usuarioService: UsuarioService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.subscription.userId = this.usuarioService.usuario._id;
  }

  async crearCuenta( fCuenta: NgForm ) {
    console.log("fCuenta",fCuenta);
    if ( fCuenta.invalid ) {
      console.log("fCuenta invalid",this.subscription);
      return; 
    }
    const resultado = await this.userSubscriptionService.save(this.subscription);
    if(resultado){
      this.navCtrl.navigateRoot('/main/main/store-manage', { animated: true });
    }
  }

}
