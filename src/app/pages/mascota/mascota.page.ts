import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { MascotaService } from '../../services/mascota.service';
import { Mascota } from '../../interfaces/interfaces';

@Component({
  selector: 'app-mascota.page',
  templateUrl: './mascota.page.html',
  styleUrls: ['./mascota.page.scss'],
})
export class mascotaPage implements OnInit {


  //fnac : Date = new Date();
  registerMascota: Mascota = {
    nombre: '',
    especie: '',
    raza: '',
    fechaNacimiento : null,
   // foto: 'av-1.png',
    estado : 'Activo'

  };

  
  constructor(private mascotaService: MascotaService,
              private navCtrl: NavController,
              private uiService: UiServiceService ) { }

  ngOnInit() {}

  async registro( fRegistro: NgForm ) {

    if ( fRegistro.invalid ) { return; }

    const valido = await this.mascotaService.registro( this.registerMascota);

    if ( valido ) {
      // navegar al tabs
     // this.navCtrl.navigateRoot( '/main/tabs/tab4', { animated: true } );
      this.navCtrl.navigateRoot( '/mascota', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('La mascota ya existe.');
    }

  }


}



