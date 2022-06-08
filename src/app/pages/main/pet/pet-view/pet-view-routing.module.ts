import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetViewPage } from './pet-view.page';

const routes: Routes = [
  {
    path: '',
    component: PetViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetViewPageRoutingModule {}