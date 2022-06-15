import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store, Usuario } from 'src/app/interfaces/interfaces';
import { CommonsService } from 'src/app/services/commons.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { StoreService } from '../../../../services/store.service';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.page.html',
  styleUrls: ['./store-form.page.scss'],
})
export class StoreFormPage implements OnInit {

  store: Store = {};
  usuario: Usuario = {};
  provincias: string[] = [];
  servicios: string[] = [];
  dias: string[] = [];

  imageTemporal: any;
  isPhotoPresent: boolean = false;

  constructor(private commonsService: CommonsService,
    private usuarioService: UsuarioService,
    private storeService: StoreService,
    private uiService: UiServiceService) { }

  ngOnInit() {
    this.provincias = this.commonsService.getProvincias();
    this.servicios = this.commonsService.getRolesByEmpresa();
    this.dias = this.commonsService.getDias();
    this.usuario = this.usuarioService.usuario;
    this.storeService.findByUserId(this.usuario._id).then(p => p ? this.store = p : p = {});
    if (this.store && this.store.promocionFoto) {
      this.isPhotoPresent = true;
      this.imageTemporal = this.store.promocionFoto;
    }
  }

  async crearStore(fStore: NgForm) {
  }


  /**
 * carga la imagen elegida por el usuario
 * 
 * @param event 
 */
  async loadImagen(event: any) {
    let archivos = event.target.files[0];
    let sizeFile: number = archivos.size;
    console.log(sizeFile);
    /**
    if (sizeFile > 100000) {
      this.uiService.alertaInformativa('La imagen que intenta guardar tiene mucha resolución.');
      return;
    } */
    let reader = new FileReader();
    reader.readAsDataURL(archivos);
    reader.onloadend = () => {
      this.imageTemporal = reader.result as string;
      this.isPhotoPresent = true;
    }
  }

  /**
 * Saca la foto seleccionada
 * 
 * @param event 
 */
  async kickImagen() {
    this.imageTemporal = null;
    this.isPhotoPresent = false;
  }


}
