import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeBussinesPageRoutingModule } from './change-bussines-routing.module';

import { ChangeBussinesPage } from './change-bussines.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeBussinesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChangeBussinesPage]
})
export class ChangeBussinesPageModule {}
