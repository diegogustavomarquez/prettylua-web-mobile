import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryFormPage } from './history-form.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryFormPageRoutingModule {}
