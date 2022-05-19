import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Mascota } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private mascota: Mascota = {};

  constructor(private http: HttpClient,
    private storage: Storage,
    private navCtrl: NavController) { }

  registro(mascota: Mascota) {

    return new Promise(resolve => {

      this.http.post(`${URL}/mascota/createMascota`, mascota)
        .subscribe(async resp => {
          console.log(resp);

          if (resp['ok']) {
            // await this.guardarToken( resp['token'] );
            resolve(true);
          } else {
            //this.token = null;
            this.storage.clear();
            resolve(false);
          }
        });
    });
  }

  getMascota() {

    if (!this.mascota._id) {
      console.log(this.mascota._id);
    }

    return { ...this.mascota };

  }

  actualizarMascota(mascota: Mascota) {


    return new Promise(resolve => {

      this.http.post(`${URL}/mascota/updateMascota`, mascota)
        .subscribe(resp => {

          if (resp['ok']) {
            //   this.guardarToken( resp['token'] );
            resolve(true);
          } else {
            resolve(false);
          }

        });

    });




  }

}
