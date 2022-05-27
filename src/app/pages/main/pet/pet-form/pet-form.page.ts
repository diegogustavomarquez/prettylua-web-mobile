import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Mascota, Usuario } from 'src/app/interfaces/interfaces';
import { MascotaService } from 'src/app/services/mascota.service';
import { UsuarioService } from '../../../../services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { CommonsService } from '../../../../services/commons.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.page.html',
  styleUrls: ['./pet-form.page.scss'],
})
export class PetFormPage implements OnInit {

  titulo: string = '';
  isNew: boolean = false;

  public id: string;
  listaAnio: number[] = [];
  razas :string[]=[];
  kinds :string[]=[];
  genders: string[] = [];

 mascota: Mascota = {
    _id:'',
    name: '',
    gender : '',
    breed : '',
    kind : '',
    color : 'Marron', //este campo debe agregarse a los input pero no deberia ser obligatorio
    year: null,
    month : null,
    pics: [],
    vets:[],
    isAlive:true, 
    castrated:false,
    status:true,
    userId : ''

  };

  constructor(private activatedRoute: ActivatedRoute,
              private mascotaService: MascotaService,
              private navCtrl: NavController,
              private alertCtrl: AlertController,
              private uiService: UiServiceService,
              private usuarioService: UsuarioService,
              private commonsService: CommonsService) { }

  async ngOnInit() {
    this.listaAnio = this.commonsService.getYears();
    this.razas = this.commonsService.getBreed();
    this.kinds = this.commonsService.getKind();
    this.genders = this.commonsService.getGender();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!this.id) {
      this.mascota.userId = this.usuarioService.usuario._id;
      this.titulo = 'Alta de mascota';
    } else {
      this.isNew = false;
      this.mascota = await this.mascotaService.getbyId(this.id);
      this.titulo = 'Actualizar datos de la mascota';
    }
  }

  /**
   * 
   * @param unaMascota 
   * @returns 
   */
  async save(unaMascota: NgForm) {
    if (unaMascota.invalid) { return; }
    const valido = await this.mascotaService.save(this.mascota);
    if (valido) {
      this.uiService.presentToast('La mascota se guardo correctamente');
      this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
    } else {
      this.uiService.alertaInformativa('La mascota ya existe.');
    }
  }

  /**
   * 
   * @param fActualizar 
   * @returns 
   */
  async update(fActualizar: NgForm) {
    if (fActualizar.invalid) { return; }
    const actualizado = await this.mascotaService.update(this.mascota);
    if (actualizado) {
      this.uiService.presentToast('Se actualizaron los datos');
      this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
    } else {
      this.uiService.presentToast('No se pudo actualizar');
    }
  }

}
