import { Component, OnInit,ViewChild } from '@angular/core';
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

  public id: string = '1';
  public titulo: string = '1';
  public workStatuses = [
    { id: 0, description: 'unknow' },
    { id: 1, description: 'student' },
    { id: 2, description: 'unemployed' },
    { id: 3, description: 'employed' }
  ];
  @ViewChild(IonList) ionList: IonList;

  isDisplay: boolean = true;

   Mascota = {
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
  //public mascotas: Mascota[] = [];
  Id: any;

  constructor(private mascotaService: MascotaService,
              private navCtrl: NavController) { }

  ngOnInit() {
  //   this.mascota = this.mascotaService.get()
  this. workStatuses = [
    { id: 0, description: 'unknow' },
    { id: 1, description: 'student' },
    { id: 2, description: 'unemployed' },
    { id: 3, description: 'employed' }
  ];
  }
 
  
    delete(mascota: Mascota) {
      console.log('delete', mascota.id);
     this.ionList.closeSlidingItems();
    }
    clickUpdate(mascota: Mascota) {
      this.navCtrl.navigateRoot( '/main/main/pet/pet-form', { animated: true } );
    this.ionList.closeSlidingItems();
    }

    async actualizar( ) {
      const actualizado = await this.mascotaService.actualizarMascota( this.mascota );
    }
 
}
