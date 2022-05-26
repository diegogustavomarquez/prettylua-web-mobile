import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Mascota } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { UsuarioService } from './usuario.service';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

 
  constructor(private http: HttpClient,
              private navCtrl: NavController,
              private usuarioService: UsuarioService) { }

  /**
   * 
   * @param mascota 
   * @returns 
   */
  save(mascota: Mascota) {
    console.log(mascota)
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
   return new Promise(resolve => {
      this.http.post(`${URL}/pet/createPet`,{headers})
        .subscribe(async resp => {
          console.log(resp);
          if (resp['ok']) {
            resolve(true);


          } else {
            resolve(false);
          }
        });
    });
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
  /**
   * 
   * @param id 
   * @returns 
   */
 /*  getMascota(id: string): Mascota {
    if (!this.mascota.id) {
      return;
    }
    return { ...this.id };
  } */
  get(){
     return    this.http.get(`${URL}/mascota/`)
   }


  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
