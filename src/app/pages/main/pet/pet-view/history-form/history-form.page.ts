import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UiServiceService } from '../../../../../services/ui-service.service';
import { UsuarioService } from '../../../../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/interfaces/interfaces';
import { HistoriaClinica } from 'src/app/interfaces/interfaces';
import { CommonsService } from '../../../../../services/commons.service';
import { HcService } from 'src/app/services/hc.service';
import { NgForm } from '@angular/forms';
import { MascotaService } from '../../../../../services/mascota.service';

@Component({
  selector: 'app-history-form',
  templateUrl: './history-form.page.html',
  styleUrls: ['./history-form.page.scss'],
})
export class HistoryFormPage implements OnInit {


  mascotas: Mascota = {};

  tipos :string[]=[];
  isNew: boolean = false;
 // imagen: any = '/assets/avatars/icon.png';
  isPhotoPresent: boolean = false;
  public id: string;
  historiaClinica : HistoriaClinica = {
        codigo:'', //Lo agrega BA
        petId:'',
        tipos:[],
    descripcion:'',
    adjuntos:null,
    comentarios:'',
    fecha:null,//lo agrega ell BA
    _id:'',
  };
 
  constructor(private navCtrl: NavController,
    private uiService: UiServiceService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private commonsService: CommonsService,
    private hc: HcService,
    private mascotaService: MascotaService) { }

  async ngOnInit() {
     this.tipos = this.commonsService.getTipoHistoriaClinica();
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.historiaClinica.petId = this.mascotaService.mascota._id;
      this.historiaClinica = await this.hc.getbyId(this.id);
    }
  

  /**
   * 
   * @param historiaClinica 
   * @returns 
   */
  async save(historiaClinica: NgForm) {
    if (historiaClinica.invalid) { return; }
    const valido = await this.hc.save(this.historiaClinica);
    if (valido) {
      this.uiService.presentToast('La historia Clinica se guardo correctamente');
      this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
    } else {
      this.uiService.alertaInformativa('Error al Guardar');
    }
  }
  
  /**
   * 
   * @param historiaClinica 
   */
  async update(historiaClinica: NgForm) {}

  
  onCancel() {
    this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
  }


  async loadImagen(event: any) {
    let archivos = event.target.files[0];
    let sizeFile: number = archivos.size;
    if (sizeFile > 100000) {
      this.uiService.alertaInformativa('Por favor. Adjunte archivo menos a 100kb.');
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(archivos);
    reader.onloadend = () => {
      this.historiaClinica.adjuntos = reader.result as string;
      this.isPhotoPresent = true;
    }
  }

  /**
   * Saca la foto seleccionada
   * 
   * @param event 
   */
  async kickImagen() {
   // this.historiaClinica.adjuntos = this.imagen;
    this.isPhotoPresent = false;
  }

}
