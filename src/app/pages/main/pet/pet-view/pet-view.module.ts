import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetViewPageRoutingModule } from './pet-view-routing.module';

import { PetViewPage } from './pet-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetViewPageRoutingModule
  ],
  declarations: [PetViewPage]
})
export class PetViewPageModule {}

