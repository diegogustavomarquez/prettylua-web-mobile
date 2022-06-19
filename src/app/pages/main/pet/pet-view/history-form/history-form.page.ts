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
  foto: string;

  mascotas: Mascota = {};

  tipos: string[] = [];
  isNew: boolean = false;

  isPhotoPresent: boolean = false;
  public id: string;
  historiaClinica: HistoriaClinica = {
    codigo: '',
    petId: '',
    tipos: [],
    descripcion: '',
    adjuntos: null,
    comentarios: '',
    fecha: null,
    _id: '',
  };
  adjuntos: string[] = [];

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
    this.historiaClinica.petId = this.id;
    this.mascotas = await this.mascotaService.getbyId(this.id);
    this.foto = this.mascotas.pics[0];
  }

  /**
   * 
   * @param historiaClinica 
   * @returns 
   */
  async save(historiaClinica: NgForm) {
    if (historiaClinica.invalid) { return; }

    for (var i = 0; i < this.adjuntos.length; i++) {
      this.historiaClinica.adjuntos = this.adjuntos;
    }

    const valido = await this.hc.save(this.historiaClinica);
    if (valido) {
      this.uiService.presentToast('La historia Clinica se guardo correctamente');
      this.navCtrl.navigateRoot(`/main/main/pet/pet-view/${this.id}`, { animated: true });
    } else {
      this.uiService.alertaInformativa('Error al Guardar');
    }
  }

  /**
   * 
   * @param historiaClinica 
   */
  async update(historiaClinica: NgForm) { }

  onCancel() {
    this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
  }

  loadImagen(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onloadend = () => {
        this.adjuntos.push(reader.result as string);
      }
    }
  }

  /**
   * Saca los archivos adjuntos
   * 
   * @param event 
   */
  async kickFiles() {
    this.adjuntos = [];
  }

}
