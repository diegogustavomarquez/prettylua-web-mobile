import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreFormPageRoutingModule } from './store-form-routing.module';

import { StoreFormPage } from './store-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreFormPageRoutingModule
  ],
  declarations: [StoreFormPage]
})
export class StoreFormPageModule {}
