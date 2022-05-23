import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Mascota } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http: HttpClient,
    private navCtrl: NavController) { }

  /**
   * 
   * @param mascota 
   * @returns 
   */
  registro(mascota: Mascota) {
    return new Promise(resolve => {
      this.http.post(`${URL}/mascota/create`, mascota)
        .subscribe(async resp => {
          console.log(resp);

          if (resp['ok']) {
            // await this.guardarToken( resp['token'] );
            resolve(true);
          } else {
            //this.token = null;
            resolve(false);
          }
        });
    });
  }

  /**
   * 
   * @returns 
   */
  getMascota(id: string) : Mascota {
    //TODO falta implementar el llamado al backend
    return;
  }

  /**
   * 
   * @returns 
   */
     getMascotas(idUsuario: string) {
      //TODO falta implementar el llamado al backend
      return;
    }
  

  /**
   * 
   * @param mascota 
   * @returns 
   */
  actualizarMascota(mascota: Mascota) {
    return new Promise(resolve => {
      this.http.post(`${URL}/mascota/update`, mascota)
        .subscribe(resp => {
          if (resp['ok']) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }

}
