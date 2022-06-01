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

  async delete(mascota: Mascota) {
    console.log('delete', mascota._id);
    const mascotaDeleted: Mascota = {...mascota, notes : "dado de baja"}
    const actualizado = await this.mascotaService.update(mascotaDeleted);
      if (actualizado) {
        //this.uiService.presentToast('Se actualizaron los datos');
        this.navCtrl.navigateRoot('/main/main/pet', { animated: true });
      } else {
        //this.uiService.presentToast('No se pudo actualizar');
      }
  }




goHomeCancel() {
  this.navCtrl.navigateRoot('/main/main/home', { animated: true });
}
}
