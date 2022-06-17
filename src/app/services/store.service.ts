import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { UsuarioService } from './usuario.service';
import { UiServiceService } from './ui-service.service';
import { Store } from '../interfaces/interfaces';
import { Subject } from 'rxjs';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class StoreService {


  store: Store = {};
  private storeObserver = new Subject<any>();

  constructor(private http: HttpClient,
    private navCtrl: NavController,
    private usuarioService: UsuarioService,
    private uiService: UiServiceService) { }

  /**
   * 
   * @param store 
   * @returns 
   */
  save(store: Store) : Promise<boolean>  {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.post(`${URL}/store`, store, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            this.store = resp['data'];
            this.storeObserver.next(this.store);
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }

  update(store: Store) : Promise<boolean> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.put(`${URL}/store`, store, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            this.store = resp['data'];
            this.storeObserver.next(this.store);
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }

  /**
  * Devuevle el estor en caso de que exista
  * 
  * @returns 
  */
  findById(id: string): Promise<Store> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.get(`${URL}/store/findById?id=${id}`, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            resolve(resp['data']);
          } else {
            this.uiService.alertaInformativa('No se una subscripcion.');
            resolve(null);
          }
        });
    });
  }

  /**
* Devuevle el estor en caso de que exista
* 
* @returns 
*/
  findByUserId(id: string): Promise<Store> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.get(`${URL}/store/findByUserId?userId=${id}`, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            this.store = resp['data'] as Store;
            resolve(this.store);
          } else {
            this.uiService.alertaInformativa('No se una subscripcion.');
            resolve(null);
          }
        }, error => resolve(null));
    });
  }


  /**
* Devuevle el estor en caso de que exista
* 
* @returns 
*/
  find(filter: any): Promise<Store[]> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.get(`${URL}/store/find?servicio=${filter.servicio}&codigoPostal=${filter.codigo}&localidad=${filter.localidad}&nombre=${filter.nombre}`, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            resolve(resp['data']);
          } else {
            this.uiService.alertaInformativa('no se encuentran locales para tu búsqueda.');
            resolve(null);
          }
        });
    });
  }

  getStoreObservable(): Subject<any> {
    return this.storeObserver;
  }

}
