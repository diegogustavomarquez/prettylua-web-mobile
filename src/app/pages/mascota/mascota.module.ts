import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MascotaRoutingModule } from './mascota-routing.module'
import { ComponentsModule } from '../../components/components.module';
import { mascotaPage } from './mascota.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotaRoutingModule,
    ComponentsModule
  ],
  declarations: [mascotaPage]
})
export class MascotaModule { }
