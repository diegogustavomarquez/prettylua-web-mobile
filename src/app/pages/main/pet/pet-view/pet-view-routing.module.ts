import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetViewPage } from './pet-view.page';

const routes: Routes = [
  {
    path: '',
    component: PetViewPage
  },
  {
    path: 'history-form/:id',
    loadChildren: () => import('./history-form/history-form.module').then( m => m.HistoryFormPageModule)
  },
  {
    path: 'history-view/:id',
    loadChildren: () => import('./history-view/history-view.module').then( m => m.HistoryViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetViewPageRoutingModule {}
