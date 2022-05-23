import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetPageRoutingModule } from './pet-routing.module';

import { PetPage } from './pet.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PetPage]
})
export class PetPageModule {}
