import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from 'src/app/interfaces/interfaces';
import { MascotaService } from 'src/app/services/mascota.service';
import { IonList, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.page.html',
  styleUrls: ['./pet.page.scss'],
})
export class PetPage implements OnInit {

  public mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService,
    private navCtrl: NavController) { }

  async ngOnInit() {
    await this.mascotaService.getbyUserId().then(p => this.mascotas = p);

    //evento que se queda escuchando cuando se agrega una nueva mascota
    this.mascotaService.nuevaMascota
      .subscribe(mascota => {

        this.mascotas.unshift(mascota);

      });
  }

  delete(mascota: Mascota) {
    console.log('delete', mascota._id);
  }

}
