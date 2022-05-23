import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountFormPageRoutingModule } from './account-form-routing.module';

import { AccountFormPage } from './account-form.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountFormPageRoutingModule,
    ComponentsModule
  ],
  exports: [
    ComponentsModule
  ],
  declarations: [AccountFormPage]
})
export class AccountFormPageModule {}
