import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryFormPageRoutingModule } from './history-form-routing.module';

import { HistoryFormPage } from './history-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryFormPageRoutingModule
  ],
  declarations: [HistoryFormPage]
})
export class HistoryFormPageModule {}
