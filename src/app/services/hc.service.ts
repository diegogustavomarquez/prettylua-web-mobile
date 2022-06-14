import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HistoriaClinica } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { UsuarioService } from './usuario.service';
import { UiServiceService } from './ui-service.service';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class HcService {

  nuevaAtencion = new EventEmitter<HistoriaClinica>();
  //actualizarMascota = new EventEmitter<HistoriaClinica>();
  borrarAtencion = new EventEmitter<HistoriaClinica>();

  constructor(private http: HttpClient,
    private navCtrl: NavController,
    private usuarioService: UsuarioService,
    private uiService: UiServiceService) { }

  /**
   * Busca las atenciones en base a un id de mascota
   * 
   * @returns 
   */
  getbyId(id: string): Promise<HistoriaClinica> {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    let hc: HistoriaClinica;
    return new Promise(resolve => {
      this.http.get(`${URL}/clinic/byId?petId=${id}`, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            console.log(resp);
            hc = resp['data'] as HistoriaClinica;
            resolve(hc);
          } else {
            this.uiService.alertaInformativa('No se encontro la Historia Clinica');
            resolve(hc);
            this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
          }
        });
    });
  }
  

  /**
   * 
   * @param HistoriaClinica 
   * @returns 
   */
  save(hc: HistoriaClinica) {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.post(`${URL}/clinic/add`, hc, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            console.log(resp);
            this.nuevaAtencion.emit(resp['data'] as HistoriaClinica);
            this.getbyId(hc._id);
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }


  /**
   * 
   * @param id hc 
   * @returns 
   */
  delete(id: String) {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    }); 
    return new Promise(resolve => {
      this.http.delete(`${URL}/clinic/delete?id=${id}`, {headers})
        .subscribe(resp => {
          if (resp['ok']) {
            this.borrarAtencion.emit(resp['message'] as HistoriaClinica);
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }

}

    
