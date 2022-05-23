import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeBussinesPage } from './change-bussines.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeBussinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeBussinesPageRoutingModule {}
