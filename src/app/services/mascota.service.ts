import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Mascota } from '../interfaces/interfaces';
import { Kind } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { UsuarioService } from './usuario.service';
import { UiServiceService } from './ui-service.service';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  nuevaMascota = new EventEmitter<Mascota>();
  actualizarMascota = new EventEmitter<Mascota>();

  constructor(private http: HttpClient,
    private navCtrl: NavController,
    private usuarioService: UsuarioService,
    private uiService: UiServiceService) { }

  /**
  * Devuevle una lista de mascotas en base al id del usuario logueado
  * 
  * @returns 
  */
  getbyUserId(): Promise<Mascota[]> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    let mascotas: Mascota[] = [];
    return new Promise(resolve => {
      this.http.get(`${URL}/pet/byUserId?userId=${this.usuarioService.usuario._id}`, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            mascotas = resp['data'] as Mascota[];
            resolve(mascotas);
          } else {
            this.uiService.alertaInformativa('No se encontraron mascotas.');
            resolve(mascotas);
          }
        });
    });
  }

  /**
   * Busca una mascota en base a su id
   * 
   * @returns 
   */
  getbyId(id: string): Promise<Mascota> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    let mascota: Mascota;
    return new Promise(resolve => {
      this.http.get(`${URL}/pet/byId?petId=${id}`, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            console.log(resp);
            mascota = resp['data'] as Mascota;
            resolve(mascota);
          } else {
            this.uiService.alertaInformativa('No se encontro la mascota que se desea actualizar');
            resolve(mascota);
            this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
          }
        });
    });
  }
  

  /**
   * 
   * @param mascota 
   * @returns 
   */
  save(mascota: Mascota) {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.post(`${URL}/pet/createPet`, mascota, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            console.log(resp);
            this.nuevaMascota.emit(resp['petResult'] as Mascota);
            this.getbyUserId();
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
  update(mascota: Mascota) {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    console.log(mascota);
    return new Promise(resolve => {
      this.http.put(`${URL}/pet/updatePet`, mascota, { headers })
        .subscribe(resp => {
          if (resp['ok']) {
            this.actualizarMascota.emit(resp['data'] as Mascota);
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }



  /**
   * 
   * @param id mascota 
   * @returns 
   */
  delete(id: String) {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    }); 
    return new Promise(resolve => {
      this.http.delete(`${URL}/pet/delete?petId=${id}`, {headers})
        .subscribe(resp => {
          if (resp['ok']) {
           // this.nuevaMascota.emit(resp['message'] as Mascota);
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }



  /**
  * Devuevle una lista de tipo de mascotas.
  * 
  * @returns 
  */

  getKinds(): Promise<Kind[]> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    let kinds: Kind[] = [];
    return new Promise(resolve => {
      this.http.get(`${URL}/pet/kindOf`, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            return kinds = resp['data.description'] as Kind[];
            //resolve(kinds);
          } else {
            this.uiService.alertaInformativa('No se encontraron datos.');
            return '';
            //resolve(kinds);

          }
        });
    });
  }

}

    
