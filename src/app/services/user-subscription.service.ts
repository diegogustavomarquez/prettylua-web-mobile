import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { UsuarioService } from './usuario.service';
import { UiServiceService } from './ui-service.service';
import { UserSubscription, Usuario } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UserSubscriptionService {

  constructor(private http: HttpClient,
    private navCtrl: NavController,
    private usuarioService: UsuarioService,
    private uiService: UiServiceService) { }

  /**
 * 
 * @param userSubscription 
 * @returns 
 */
  save(userSubscription: UserSubscription) {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.post(`${URL}/user-subscription`, userSubscription, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            console.log(resp);
            //le cambio el perfil al usuario
            const usuario: Usuario = this.usuarioService.usuario;
            usuario.perfil = 'Empresa';
            await this.usuarioService.actualizarUsuario(usuario);
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }

/**
* Devuevle una lista de mascotas en base al id del usuario logueado
* 
* @returns 
*/
  getbyUserId(): Promise<UserSubscription> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.get(`${URL}/user-subscription/userById`, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            let userSubscription: UserSubscription = resp['user'] as UserSubscription;
            console.log("aca")
            resolve(userSubscription);
          } else {
            this.uiService.alertaInformativa('No se una subscripcion.');
            resolve(null);
          }
        });
    });
  }

}
