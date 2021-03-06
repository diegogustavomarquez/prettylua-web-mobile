import { Injectable , EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { UsuarioGuard } from '../guards/usuario.guard';
import {Subject} from 'rxjs';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  usuario: Usuario = {};
  private updateUserObserver = new Subject<any>();
  actualizarUser= new EventEmitter<Usuario>();
 

  constructor(private http: HttpClient,
              private storage: Storage,
              private navCtrl: NavController) { }


  /**
   * 
   * @param email 
   * @param password 
   * @returns 
   */
  login(email: string, password: string) {
    const data = { email, password };
    return new Promise(resolve => {
      this.http.post(`${URL}/user/login`, data)
        .subscribe(async resp => {
          console.log(resp);
          if (resp['ok']) {
            await this.guardarToken(resp['token']);
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        }, error => resolve(false));
    });
  }


  /**
   * 
   */
  logout() {
    this.token = null;
    this.usuario = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true });
  }


  /**
   * 
   * @param usuario 
   * @returns 
   */
  registro(usuario: Usuario) {
    return new Promise(resolve => {
      this.http.post(`${URL}/user/create`, usuario)
        .subscribe(async resp => {
          if (resp['ok']) {
            await this.guardarToken(resp['token']);
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        });
    });
  }


  /**
   * 
   * @returns 
   */
  getUsuario() {
    if (!this.usuario._id) {
      this.validaToken();
    }
    return { ...this.usuario };
  }


  /**
   * 
   * @param token 
   */
  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);
    await this.validaToken();
  }


  /**
   * 
   */
  async cargarToken() {
    this.token = await this.storage.get('token') || null;
  }


  /**
   * 
   * @returns 
   */
  async validaToken(): Promise<boolean> {
    await this.cargarToken();
    if (!this.token) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }
    return new Promise<boolean>(resolve => {
      const headers = new HttpHeaders({
        'x-token': this.token
      });
      this.http.get(`${URL}/user/userById`, { headers })
        .subscribe(resp => {
          if (resp['ok']) {
            this.usuario = resp['user'][0];
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }
        });
    });
  }


  /**
   * 
   * @param usuario 
   * @returns 
   */
  actualizarUsuario(usuario: Usuario) {
    const headers = new HttpHeaders({
      'x-token': this.token
    });
    console.log(usuario);
    return new Promise(resolve => {
      this.http.put(`${URL}/user/update`, usuario, { headers })
        .subscribe(resp => {
          if (resp['ok']) {
            this.guardarToken(resp['token']);
            this.actualizarUser.emit(resp['data'] as Usuario);
            this.updateUserObserver.next(usuario);
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }

  getUpdateUserObservable(): Subject<any> {
    return this.updateUserObserver;
  }

}