import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetPage } from './pet.page';

const routes: Routes = [
  {
    path: '',
    component: PetPage
  }
  ,
  {
    path: 'pet-form',
    loadChildren: () => import('./pet-form/pet-form.module').then( m => m.PetFormPageModule)
  },
  {
    path: 'pet-form/:id',
    loadChildren: () => import('./pet-form/pet-form.module').then( m => m.PetFormPageModule)
  },
  {
    path: 'pet-view/:id',
    loadChildren: () => import('./pet-view/pet-view.module').then( m => m.PetViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetPageRoutingModule {}
