import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Mascota } from 'src/app/interfaces/interfaces';
import { MascotaService } from 'src/app/services/mascota.service';
import { UsuarioService } from '../../../../services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';


@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.page.html',
  styleUrls: ['./pet-form.page.scss'],
})
export class PetFormPage implements OnInit {

  isDisplay: boolean = true;
  public id: string;
  @Input() titulo: string = '';

  listaMes: number[] = [1, 2, 3, 4, 5];
  listaAnio: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  razas :string[]=['Cruzado', 'Boxer','Callejero','Terrier','Bulldog','Ovejero','Caniche','Otro']

 save: Mascota = {
     id:'',
    name: '',
    gender : '',
    breed : '',
    kind : '',
    color : '',
    year: null,
    month : null,
    pics: [],
    vets:[],
    isAlive:true, 
    castrated:false,
    status:true,
    userId : ''

  };
  mascota: Mascota = {};

  constructor(private activatedRoute: ActivatedRoute,
              private mascotaService: MascotaService,
              private navCtrl: NavController,
              private alertCtrl: AlertController,
              private uiService: UiServiceService,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!this.id) {
    //  this.mascota = this.mascotaService.getMascota(this.id);
    }

    console.log(this.mascota);
  }

  /**
   * 
   * @param fRegistro 
   * @returns 
   */
  async registro(fRegistro: NgForm) {
    if (fRegistro.invalid) { return; }
    const valido = await this.mascotaService.save(this.mascota);
    if (valido) {
      this.navCtrl.navigateRoot('/mascota', { animated: true });
    } else {
      this.uiService.alertaInformativa('La mascota ya existe.');
    }
  }
  /**
   * 
   */
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Exitoso!',
      message: 'Registro Cargado',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentActualizado() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Exitoso',
      message: 'Registro Actualizado',
      buttons: ['OK']
    });
    await alert.present();
  }

  

  back() {
    this.isDisplay = true
  }

  /**
   * 
   * @param fRegistro 
   * @returns 
   */

 
  /**
   * 
   * @param fActualizar 
   * @returns 
   */
  async actualizarMascota(fActualizar: NgForm) {
    if (fActualizar.invalid) { return; }
    const actualizado = await this.mascotaService.actualizarMascota(this.mascota);
    if (actualizado) {
      this.presentActualizado();
    } else {
      this.uiService.presentToast('No se pudo actualizar');
    }

  }



}
