import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetFormPageRoutingModule } from './pet-form-routing.module';

import { PetFormPage } from './pet-form.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetFormPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PetFormPage]
})
export class PetFormPageModule {}
