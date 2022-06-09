import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreManagePageRoutingModule } from './store-manage-routing.module';

import { StoreManagePage } from './store-manage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreManagePageRoutingModule
  ],
  declarations: [StoreManagePage]
})
export class StoreManagePageModule {}
