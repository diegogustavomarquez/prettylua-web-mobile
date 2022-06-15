import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoresViewPageRoutingModule } from './stores-view-routing.module';

import { StoresViewPage } from './stores-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoresViewPageRoutingModule
  ],
  declarations: [StoresViewPage]
})
export class StoresViewPageModule {}
