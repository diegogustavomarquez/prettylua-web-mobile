import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserSubscription } from 'src/app/interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UserSubscriptionService } from 'src/app/services/user-subscription.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.page.html',
  styleUrls: ['./user-subscription.page.scss'],
})
export class UserSubscriptionPage implements OnInit {

  acceptTermAndCondition: boolean = false;

  cuilPrefijo: string;
  cuil: string;
  cuilSufijo: string;
  numeroTarjeta: string;

  subscription: UserSubscription = {};

  constructor(private userSubscriptionService: UserSubscriptionService,
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uiServiceService: UiServiceService) { }

  ngOnInit() {
    this.subscription.userId = this.usuarioService.usuario._id;
  }

  async crearCuenta(fCuenta: NgForm) {
    if (!this.validate()) {
      return;
    }
    if (fCuenta.invalid) {
      return;
    }

    this.subscription.cuitcuil = this.cuilPrefijo + this.cuil + this.cuilSufijo;
    this.subscription.prefijo = this.numeroTarjeta.substring(0, 4);
    this.subscription.subfijo = this.numeroTarjeta.slice(this.numeroTarjeta.length - 4, this.numeroTarjeta.length);
   
    const resultado = await this.userSubscriptionService.save(this.subscription);
    if(resultado){
      this.navCtrl.navigateRoot('/main/main/store-manage', { animated: true });
    } else {
      this.uiServiceService.alertaInformativa("Error al subscribirse");
    }
  }

  formatDate(value: string) {
    let date = new Date(value);
    return date.toLocaleDateString();
  }

  validate(): boolean {
    if (!this.isNumber(this.cuilPrefijo) || !this.isNumber(this.cuil) || !this.isNumber(this.cuilSufijo)) {
      this.uiServiceService.alertaInformativa("El cuit debe ser númerico");
      return false;
    }
    if (!this.isNumber(this.numeroTarjeta)) {
      this.uiServiceService.alertaInformativa("El número de tarjeta debe ser númerico");
      return false;
    }
    if (!this.isNumber(this.subscription.caducidad)) {
      this.uiServiceService.alertaInformativa("La Caducidad debe ser númerica");
      return false;
    }
    if (!this.isNumber(this.subscription.cvc)) {
      this.uiServiceService.alertaInformativa("El CVC/CVV debe ser númerica");
      return false;
    }

  
    return true;
  }

  isNumber(str: string): boolean {
    if (typeof str !== 'string') {
      return false;
    }
    if (str.trim() === '') {
      return false;
    }
    return !Number.isNaN(Number(str));
  }

}
